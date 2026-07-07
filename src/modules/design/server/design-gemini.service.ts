import sharp from "sharp";
import { buildDesignEditPrompt, type DesignGenerateInput } from "./design-prompts";
import { getGeminiApiKey, getGeminiImageModel } from "@/shared/lib/env";
import { logServerError } from "@/shared/lib/usage-events";

const GEMINI_TIMEOUT_MS = 90_000;
const GEMINI_API_BASE = "https://generativelanguage.googleapis.com/v1beta";

const FALLBACK_MODELS = [
  getGeminiImageModel(),
  "gemini-2.5-flash-image",
  "gemini-2.5-flash-image-preview",
].filter((model, index, all) => model && all.indexOf(model) === index);

type GeminiPart = {
  text?: string;
  inlineData?: { mimeType?: string; data?: string };
  inline_data?: { mime_type?: string; data?: string };
};

type GeminiResponse = {
  candidates?: Array<{ content?: { parts?: GeminiPart[] } }>;
  error?: { message?: string };
};

function geminiErrorMessage(error: unknown, body?: GeminiResponse): string {
  if (body?.error?.message) return body.error.message;
  if (error instanceof Error) return error.message;
  return String(error);
}

function sniffMime(buffer: Buffer): string {
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8) return "image/jpeg";
  if (buffer.length >= 8 && buffer[0] === 0x89 && buffer[1] === 0x50) return "image/png";
  return "image/jpeg";
}

async function detectAspectRatio(buffer: Buffer): Promise<"16:9" | "4:3" | "3:4" | "1:1"> {
  const meta = await sharp(buffer).rotate().metadata();
  const width = meta.width ?? 1;
  const height = meta.height ?? 1;
  const ratio = width / height;
  if (ratio >= 1.55) return "16:9";
  if (ratio >= 1.1) return "4:3";
  if (ratio <= 0.7) return "3:4";
  if (ratio <= 0.95) return "3:4";
  return "1:1";
}

function extractImageFromResponse(body: GeminiResponse): Buffer | null {
  const parts = body.candidates?.[0]?.content?.parts ?? [];
  for (const part of parts) {
    const inline = part.inlineData ?? part.inline_data;
    const data = inline?.data ?? (inline as { data?: string } | undefined)?.data;
    if (data) return Buffer.from(data, "base64");
  }
  return null;
}

async function callGeminiModel(
  apiKey: string,
  model: string,
  beforeBuffer: Buffer,
  input: DesignGenerateInput
): Promise<Buffer> {
  const prompt = buildDesignEditPrompt(input);
  const mimeType = sniffMime(beforeBuffer);
  const aspectRatio = await detectAspectRatio(beforeBuffer);
  const imageBase64 = beforeBuffer.toString("base64");

  const url = `${GEMINI_API_BASE}/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              { text: prompt },
              {
                inline_data: {
                  mime_type: mimeType,
                  data: imageBase64,
                },
              },
            ],
          },
        ],
        generationConfig: {
          responseModalities: ["TEXT", "IMAGE"],
          imageConfig: { aspectRatio },
        },
      }),
    });
  } finally {
    clearTimeout(timeout);
  }

  const body = (await response.json()) as GeminiResponse;
  if (!response.ok) {
    throw new Error(geminiErrorMessage(null, body));
  }

  const image = extractImageFromResponse(body);
  if (!image) {
    throw new Error("Gemini returned no image data");
  }

  return image;
}

export async function generateWithGeminiEdit(
  beforeBuffer: Buffer,
  input: DesignGenerateInput
): Promise<Buffer> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error("GEMINI_NOT_CONFIGURED");
  }

  let lastError: unknown = null;

  for (const model of FALLBACK_MODELS) {
    try {
      return await callGeminiModel(apiKey, model, beforeBuffer, input);
    } catch (error) {
      lastError = error;
      logServerError(`design gemini edit (${model})`, error);
    }
  }

  throw new Error(`GEMINI_GENERATION_FAILED:${geminiErrorMessage(lastError)}`);
}
