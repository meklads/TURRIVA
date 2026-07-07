import sharp from "sharp";
import OpenAI, { toFile } from "openai";
import type { ImagesResponse } from "openai/resources/images";
import { getStyleById, getRoomLabel, type SpaceType } from "../lib/styles";
import { loadImageBuffer } from "./design-image.utils";
import { trySaveDesignBuffer } from "./design-storage";
import { isOpenAIConfigured } from "@/shared/lib/env";
import { logServerError } from "@/shared/lib/usage-events";

const openai = isOpenAIConfigured()
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const IMAGE_MODELS = [
  process.env.OPENAI_IMAGE_MODEL?.trim() || "gpt-image-1.5",
  "gpt-image-1",
  "dall-e-2",
].filter((model, index, all) => model && all.indexOf(model) === index);

const OPENAI_EDIT_TIMEOUT_MS = 90_000;
const EDIT_SIZE = 1024;

type GenerateInput = {
  beforeUrl: string;
  beforeBuffer?: Buffer;
  styleId: string;
  spaceType: SpaceType;
  roomType: string;
  locale: "ar" | "en";
  userId: string;
};

export type GenerateResult = {
  afterUrl: string;
  afterBuffer: Buffer;
  isMock: boolean;
};

const STYLE_PROMPTS: Record<string, string> = {
  modern:
    "modern luxury interior with clean lines, neutral stone and wood palette, designer lighting, and premium built-in finishes",
  neoclassic:
    "neoclassical luxury with elegant wall moldings, marble accents, refined gold details, and classic furniture proportions",
  islamic:
    "contemporary Islamic luxury with geometric patterns, mashrabiya screens, warm stone, carved wood, and ambient lantern lighting",
  minimal:
    "minimalist serene luxury with natural light, hidden storage, calm textures, and understated high-end materials",
  luxury:
    "ultra-luxury Gulf palace interior with bespoke furniture, rich textures, statement chandelier, and museum-grade finishes",
  contemporary:
    "contemporary Saudi luxury with warm earth tones, sculptural decor, layered lighting, and architect-designed composition",
};

function buildEditPrompt(input: GenerateInput): string {
  const stylePrompt = STYLE_PROMPTS[input.styleId] ?? "luxury interior design";
  const room = getRoomLabel(input.spaceType, input.roomType, input.locale);

  const preserve =
    "Preserve the exact camera angle, room geometry, wall positions, windows, doors, columns, and overall perspective. Do not change the building structure.";

  if (input.spaceType === "booth") {
    return `Transform this ${room} photo into a premium ${stylePrompt} exhibition booth or temporary brand display. Redesign finishes, lighting, signage zones, flooring, and display furniture for a high-end trade-show look. ${preserve} Photorealistic commercial visualization.`;
  }

  if (input.spaceType === "exterior") {
    return `Transform this ${room} exterior facade photo into ${stylePrompt}. Redesign cladding, windows surrounds, entrance, landscape accents, and exterior lighting while keeping the same building massing. ${preserve} Photorealistic architectural visualization.`;
  }

  return `Transform this ${room} interior photo into a stunning ${stylePrompt}. Redesign flooring, wall finishes, ceiling details, lighting fixtures, furniture, textiles, and decor to fully match the style. ${preserve} Photorealistic magazine-quality interior rendering suitable for a Saudi luxury decor company.`;
}

function isGptImageModel(model: string): boolean {
  return model.startsWith("gpt-image");
}

function openAIErrorMessage(error: unknown): string {
  if (error && typeof error === "object" && "error" in error) {
    const nested = (error as { error?: { message?: string } }).error;
    if (nested?.message) return nested.message;
  }
  if (error instanceof Error) return error.message;
  return String(error);
}

async function prepareSquarePng(buffer: Buffer): Promise<Buffer> {
  return sharp(buffer)
    .rotate()
    .resize(EDIT_SIZE, EDIT_SIZE, { fit: "cover", position: "centre" })
    .ensureAlpha()
    .png()
    .toBuffer();
}

async function createFullEditMask(): Promise<Buffer> {
  return sharp({
    create: {
      width: EDIT_SIZE,
      height: EDIT_SIZE,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .png()
    .toBuffer();
}

async function responseToBuffer(response: ImagesResponse): Promise<Buffer | null> {
  const item = response.data?.[0];
  if (!item) return null;
  if (item.b64_json) return Buffer.from(item.b64_json, "base64");
  if (item.url) return loadImageBuffer(item.url);
  return null;
}

async function callOpenAIEdit(
  beforeBuffer: Buffer,
  input: GenerateInput,
  model: string
): Promise<Buffer | null> {
  if (!openai) return null;

  const prompt = buildEditPrompt(input);
  const png = await prepareSquarePng(beforeBuffer);
  const imageFile = await toFile(png, "room.png", { type: "image/png" });

  let lastError: unknown = null;

  const runEdit = async (request: Promise<ImagesResponse>) => {
    const response = await Promise.race([
      request,
      new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("OPENAI_TIMEOUT")), OPENAI_EDIT_TIMEOUT_MS);
      }),
    ]);
    return responseToBuffer(response);
  };

  if (isGptImageModel(model)) {
    const gptAttempts = [
      () =>
        runEdit(
          openai.images.edit({
            model,
            image: imageFile,
            prompt,
            n: 1,
            size: "1024x1024",
            quality: "high",
            input_fidelity: "high",
            response_format: "b64_json",
          })
        ),
      () =>
        runEdit(
          openai.images.edit({
            model,
            image: imageFile,
            prompt,
            n: 1,
            size: "1024x1024",
            quality: "high",
          })
        ),
    ];

    for (const attempt of gptAttempts) {
      try {
        const buffer = await attempt();
        if (buffer) return buffer;
      } catch (error) {
        lastError = error;
        logServerError(`design openai edit (${model})`, error);
      }
    }
  } else {
    try {
      const buffer = await runEdit(
        openai.images.edit({
          model,
          image: imageFile,
          mask: await toFile(await createFullEditMask(), "mask.png", { type: "image/png" }),
          prompt,
          n: 1,
          size: "1024x1024",
          response_format: "b64_json",
        })
      );
      if (buffer) return buffer;
    } catch (error) {
      lastError = error;
      logServerError(`design openai edit (${model})`, error);
    }
  }

  if (lastError) throw lastError;
  return null;
}

async function generateWithOpenAIEdit(
  beforeBuffer: Buffer,
  input: GenerateInput
): Promise<Buffer> {
  let lastError: unknown = null;

  for (const model of IMAGE_MODELS) {
    try {
      const editedBuffer = await callOpenAIEdit(beforeBuffer, input, model);
      if (editedBuffer) return editedBuffer;
    } catch (error) {
      lastError = error;
    }
  }

  const detail = openAIErrorMessage(lastError);
  throw new Error(`OPENAI_GENERATION_FAILED:${detail}`);
}

async function persistAfterUrl(
  buffer: Buffer,
  mime: string,
  prefix: string
): Promise<string> {
  const stored = await trySaveDesignBuffer(buffer, mime, prefix);
  if (stored) return stored;
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

export async function generateDesignAfter(input: GenerateInput): Promise<GenerateResult> {
  const style = getStyleById(input.styleId);
  if (!style) throw new Error("INVALID_STYLE");

  if (!isOpenAIConfigured() || !openai) {
    throw new Error("OPENAI_NOT_CONFIGURED");
  }

  const beforeBuffer = input.beforeBuffer ?? (await loadImageBuffer(input.beforeUrl));
  const editedBuffer = await generateWithOpenAIEdit(beforeBuffer, input);
  const afterUrl = await persistAfterUrl(editedBuffer, "image/png", `${input.userId}-ai`);

  return { afterUrl, afterBuffer: editedBuffer, isMock: false };
}
