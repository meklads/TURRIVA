import sharp from "sharp";
import OpenAI from "openai";
import { ROOM_TYPES, getStyleById, type SpaceType } from "../lib/styles";
import { loadImageBuffer } from "./design-image.utils";
import { saveDesignBuffer } from "./design-storage";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

type GenerateInput = {
  beforeUrl: string;
  styleId: string;
  spaceType: SpaceType;
  roomType: string;
  locale: "ar" | "en";
  userId: string;
};

type GenerateResult = {
  afterUrl: string;
  isMock: boolean;
};

const STYLE_PROMPTS: Record<string, string> = {
  modern: "modern luxury interior with clean lines, neutral palette, premium materials",
  neoclassic: "neoclassical design with elegant moldings, marble, and refined gold accents",
  islamic: "Islamic geometric patterns, mashrabiya details, warm stone and wood",
  minimal: "minimalist serene space with natural light and understated luxury",
  luxury: "ultra-luxury Gulf villa interior with premium finishes and bespoke furniture",
  contemporary: "contemporary Saudi luxury with warm tones and designer-grade composition",
};

function roomLabel(spaceType: SpaceType, roomType: string, locale: "ar" | "en"): string {
  const room = ROOM_TYPES[spaceType].find((r) => r.id === roomType);
  if (!room) return spaceType;
  return locale === "ar" ? room.nameAr : room.nameEn;
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

async function stylePreviewFromPhoto(buffer: Buffer, userId: string): Promise<string> {
  const styled = await sharp(buffer)
    .rotate()
    .resize(1024, 1024, { fit: "cover", position: "centre" })
    .modulate({ brightness: 1.06, saturation: 1.18 })
    .sharpen({ sigma: 0.6 })
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();

  return saveDesignBuffer(styled, "image/jpeg", `${userId}-styled`);
}

async function generateWithOpenAIEdit(
  beforeBuffer: Buffer,
  input: GenerateInput
): Promise<string | null> {
  if (!openai) return null;

  const png = await prepareSquarePng(beforeBuffer);
  const mask = await createFullEditMask();
  const stylePrompt = STYLE_PROMPTS[input.styleId] ?? "luxury interior design";
  const room = roomLabel(input.spaceType, input.roomType, input.locale);

  const prompt = `Redesign this ${room} photo in ${stylePrompt}. Keep the same room layout, walls, windows, doors, and camera angle. Photorealistic magazine-quality result.`;

  const response = await openai.images.edit({
    model: "dall-e-2",
    image: new File([new Uint8Array(png)], "room.png", { type: "image/png" }),
    mask: new File([new Uint8Array(mask)], "mask.png", { type: "image/png" }),
    prompt,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
  });

  const b64 = response.data?.[0]?.b64_json;
  if (!b64) return null;

  const out = Buffer.from(b64, "base64");
  return saveDesignBuffer(out, "image/png", `${input.userId}-ai`);
}

export async function generateDesignAfter(input: GenerateInput): Promise<GenerateResult> {
  const style = getStyleById(input.styleId);
  if (!style) throw new Error("INVALID_STYLE");

  const beforeBuffer = await loadImageBuffer(input.beforeUrl);

  if (openai) {
    try {
      const editedUrl = await generateWithOpenAIEdit(beforeBuffer, input);
      if (editedUrl) {
        return { afterUrl: editedUrl, isMock: false };
      }
    } catch {
      // fall through to styled preview
    }
  }

  try {
    const styledUrl = await stylePreviewFromPhoto(beforeBuffer, input.userId);
    return { afterUrl: styledUrl, isMock: true };
  } catch {
    return {
      afterUrl: style.sampleAfter[input.spaceType],
      isMock: true,
    };
  }
}
