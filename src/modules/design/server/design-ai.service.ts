import sharp from "sharp";
import OpenAI, { toFile } from "openai";
import { getStyleById, getRoomLabel, type SpaceType } from "../lib/styles";
import { loadImageBuffer } from "./design-image.utils";
import { toDataUrl, trySaveDesignBuffer } from "./design-storage";
import { logServerError } from "@/shared/lib/usage-events";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

const PRIMARY_IMAGE_MODEL = process.env.OPENAI_IMAGE_MODEL?.trim() || "gpt-image-1.5";
const FALLBACK_IMAGE_MODEL = "dall-e-2";
const OPENAI_EDIT_TIMEOUT_MS = 90_000;

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

async function prepareEditImage(buffer: Buffer): Promise<{ file: Awaited<ReturnType<typeof toFile>>; size: "1024x1024" | "1536x1024" }> {
  const meta = await sharp(buffer).metadata();
  const landscape = (meta.width ?? 1) >= (meta.height ?? 1);
  const size = landscape ? "1536x1024" : "1024x1024";
  const width = landscape ? 1536 : 1024;
  const height = landscape ? 1024 : 1024;

  const png = await sharp(buffer)
    .rotate()
    .resize(width, height, { fit: "cover", position: "centre" })
    .ensureAlpha()
    .png()
    .toBuffer();

  return {
    file: await toFile(png, "room.png", { type: "image/png" }),
    size,
  };
}

/** Transparent mask = edit the full frame (DALL-E 2 edit API semantics). */
async function createFullEditMask(size: "1024x1024" | "1536x1024"): Promise<Buffer> {
  const [width, height] = size === "1536x1024" ? [1536, 1024] : [1024, 1024];
  return sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .png()
    .toBuffer();
}

async function stylePreviewBuffer(buffer: Buffer): Promise<Buffer> {
  return sharp(buffer)
    .rotate()
    .resize(1536, 1024, { fit: "cover", position: "centre" })
    .modulate({ brightness: 1.04, saturation: 1.12 })
    .sharpen({ sigma: 0.4 })
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();
}

async function callOpenAIEdit(
  beforeBuffer: Buffer,
  input: GenerateInput,
  model: string
): Promise<Buffer | null> {
  if (!openai) return null;

  const prompt = buildEditPrompt(input);
  const { file, size } = await prepareEditImage(beforeBuffer);

  const request =
    isGptImageModel(model)
      ? openai.images.edit({
          model,
          image: file,
          prompt,
          n: 1,
          size,
          quality: "high",
          input_fidelity: "high",
          response_format: "b64_json",
        })
      : openai.images.edit({
          model,
          image: file,
          mask: await toFile(await createFullEditMask(size), "mask.png", { type: "image/png" }),
          prompt,
          n: 1,
          size: size === "1536x1024" ? "1024x1024" : size,
          response_format: "b64_json",
        });

  const response = await Promise.race([
    request,
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("OPENAI_TIMEOUT")), OPENAI_EDIT_TIMEOUT_MS);
    }),
  ]);

  const b64 = response.data?.[0]?.b64_json;
  if (!b64) return null;

  return Buffer.from(b64, "base64");
}

async function generateWithOpenAIEdit(
  beforeBuffer: Buffer,
  input: GenerateInput
): Promise<Buffer | null> {
  const models = [PRIMARY_IMAGE_MODEL, FALLBACK_IMAGE_MODEL].filter(
    (model, index, all) => all.indexOf(model) === index
  );

  for (const model of models) {
    try {
      const editedBuffer = await callOpenAIEdit(beforeBuffer, input, model);
      if (editedBuffer) return editedBuffer;
    } catch (error) {
      logServerError(`design openai edit (${model})`, error);
    }
  }

  return null;
}

async function persistAfterUrl(
  buffer: Buffer,
  mime: string,
  prefix: string
): Promise<string> {
  const stored = await trySaveDesignBuffer(buffer, mime, prefix);
  return stored ?? toDataUrl(buffer, mime);
}

export async function generateDesignAfter(input: GenerateInput): Promise<GenerateResult> {
  const style = getStyleById(input.styleId);
  if (!style) throw new Error("INVALID_STYLE");

  const beforeBuffer = input.beforeBuffer ?? (await loadImageBuffer(input.beforeUrl));

  if (openai) {
    const editedBuffer = await generateWithOpenAIEdit(beforeBuffer, input);
    if (editedBuffer) {
      const afterUrl = await persistAfterUrl(editedBuffer, "image/png", `${input.userId}-ai`);
      return { afterUrl, afterBuffer: editedBuffer, isMock: false };
    }
  }

  const styledBuffer = await stylePreviewBuffer(beforeBuffer);
  const afterUrl = await persistAfterUrl(styledBuffer, "image/jpeg", `${input.userId}-styled`);
  return { afterUrl, afterBuffer: styledBuffer, isMock: true };
}
