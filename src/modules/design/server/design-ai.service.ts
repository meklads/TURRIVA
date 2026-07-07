import sharp from "sharp";
import OpenAI, { toFile } from "openai";
import { getStyleById, getRoomLabel, type SpaceType } from "../lib/styles";
import { loadImageBuffer } from "./design-image.utils";
import { saveDesignBuffer } from "./design-storage";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

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
  modern: "modern luxury design with clean lines, neutral palette, premium materials",
  neoclassic: "neoclassical design with elegant moldings, marble, and refined gold accents",
  islamic: "Islamic geometric patterns, mashrabiya details, warm stone and wood",
  minimal: "minimalist serene space with natural light and understated luxury",
  luxury: "ultra-luxury Gulf design with premium finishes and bespoke detailing",
  contemporary: "contemporary Saudi luxury with warm tones and designer-grade composition",
};

function buildEditPrompt(input: GenerateInput): string {
  const stylePrompt = STYLE_PROMPTS[input.styleId] ?? "luxury design";
  const room = getRoomLabel(input.spaceType, input.roomType, input.locale);

  if (input.spaceType === "booth") {
    return `Redesign this ${room} photo as a premium ${stylePrompt} exhibition booth or temporary brand display. Keep the same booth footprint, structure, and camera angle. Professional trade-show quality with clear branding zones.`;
  }

  if (input.spaceType === "exterior") {
    return `Redesign this ${room} exterior facade photo in ${stylePrompt}. Keep the same building structure, openings, landscape, and camera angle. Photorealistic architectural visualization with premium finishing materials.`;
  }

  return `Redesign this ${room} interior photo in ${stylePrompt}. Keep the same room layout, walls, windows, doors, and camera angle. Photorealistic magazine-quality interior finishing and decor.`;
}

async function prepareSquarePng(buffer: Buffer): Promise<Buffer> {
  return sharp(buffer)
    .rotate()
    .resize(1024, 1024, { fit: "cover", position: "centre" })
    .ensureAlpha()
    .png()
    .toBuffer();
}

/** Transparent mask = edit the full frame (OpenAI edit API semantics). */
async function createFullEditMask(): Promise<Buffer> {
  return sharp({
    create: {
      width: 1024,
      height: 1024,
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
    .resize(1024, 1024, { fit: "cover", position: "centre" })
    .modulate({ brightness: 1.06, saturation: 1.18 })
    .sharpen({ sigma: 0.6 })
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();
}

async function generateWithOpenAIEdit(
  beforeBuffer: Buffer,
  input: GenerateInput
): Promise<Buffer | null> {
  if (!openai) return null;

  const png = await prepareSquarePng(beforeBuffer);
  const mask = await createFullEditMask();
  const prompt = buildEditPrompt(input);

  const response = await openai.images.edit({
    model: "dall-e-2",
    image: await toFile(png, "room.png", { type: "image/png" }),
    mask: await toFile(mask, "mask.png", { type: "image/png" }),
    prompt,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
  });

  const b64 = response.data?.[0]?.b64_json;
  if (!b64) return null;

  return Buffer.from(b64, "base64");
}

export async function generateDesignAfter(input: GenerateInput): Promise<GenerateResult> {
  const style = getStyleById(input.styleId);
  if (!style) throw new Error("INVALID_STYLE");

  const beforeBuffer = input.beforeBuffer ?? (await loadImageBuffer(input.beforeUrl));

  if (openai) {
    try {
      const editedBuffer = await generateWithOpenAIEdit(beforeBuffer, input);
      if (editedBuffer) {
        const afterUrl = await saveDesignBuffer(editedBuffer, "image/png", `${input.userId}-ai`);
        return { afterUrl, afterBuffer: editedBuffer, isMock: false };
      }
    } catch {
      // fall through to styled preview
    }
  }

  try {
    const styledBuffer = await stylePreviewBuffer(beforeBuffer);
    const afterUrl = await saveDesignBuffer(styledBuffer, "image/jpeg", `${input.userId}-styled`);
    return { afterUrl, afterBuffer: styledBuffer, isMock: true };
  } catch {
    try {
      const sampleBuffer = await loadImageBuffer(style.sampleAfter[input.spaceType]);
      const afterUrl = await saveDesignBuffer(sampleBuffer, "image/jpeg", `${input.userId}-sample`);
      return { afterUrl, afterBuffer: sampleBuffer, isMock: true };
    } catch {
      const styledBuffer = await stylePreviewBuffer(beforeBuffer);
      const afterUrl = await saveDesignBuffer(styledBuffer, "image/jpeg", `${input.userId}-fallback`);
      return { afterUrl, afterBuffer: styledBuffer, isMock: true };
    }
  }
}
