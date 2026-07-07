import sharp from "sharp";
import OpenAI, { toFile } from "openai";
import type { ImagesResponse } from "openai/resources/images";
import { buildDesignEditPrompt, type DesignGenerateInput } from "./design-prompts";
import { loadImageBuffer } from "./design-image.utils";
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
  input: DesignGenerateInput,
  model: string
): Promise<Buffer | null> {
  if (!openai) return null;

  const prompt = buildDesignEditPrompt(input);
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

export async function generateWithOpenAIEdit(
  beforeBuffer: Buffer,
  input: DesignGenerateInput
): Promise<Buffer> {
  if (!isOpenAIConfigured() || !openai) {
    throw new Error("OPENAI_NOT_CONFIGURED");
  }

  let lastError: unknown = null;

  for (const model of IMAGE_MODELS) {
    try {
      const editedBuffer = await callOpenAIEdit(beforeBuffer, input, model);
      if (editedBuffer) return editedBuffer;
    } catch (error) {
      lastError = error;
    }
  }

  throw new Error(`OPENAI_GENERATION_FAILED:${openAIErrorMessage(lastError)}`);
}
