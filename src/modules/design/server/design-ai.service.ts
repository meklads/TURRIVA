import OpenAI from "openai";
import { getStyleById, type SpaceType } from "../lib/styles";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

type GenerateInput = {
  beforeUrl: string;
  styleId: string;
  spaceType: SpaceType;
  roomType: string;
  locale: "ar" | "en";
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

export async function generateDesignAfter(input: GenerateInput): Promise<GenerateResult> {
  const style = getStyleById(input.styleId);
  if (!style) throw new Error("INVALID_STYLE");

  // Phase 1: curated sample when no image API configured
  if (!openai) {
    return {
      afterUrl: style.sampleAfter[input.spaceType],
      isMock: true,
    };
  }

  try {
    const prompt = `Photorealistic ${input.spaceType} redesign in ${STYLE_PROMPTS[input.styleId] ?? "luxury"} style. Preserve room geometry, windows, and doors. Magazine-quality lighting and materials.`;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    const url = response.data?.[0]?.url;
    if (!url) throw new Error("NO_IMAGE_URL");

    return { afterUrl: url, isMock: false };
  } catch {
    return {
      afterUrl: style.sampleAfter[input.spaceType],
      isMock: true,
    };
  }
}
