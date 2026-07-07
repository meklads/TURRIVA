import OpenAI from "openai";
import {
  FURNITURE_CATALOG,
  getFallbackFurniture,
  getFurnitureById,
  type CatalogFurniture,
  type PinPosition,
} from "../lib/furniture-catalog";
import type { SpaceType } from "../lib/styles";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export type DetectedFurniture = {
  catalogId: string;
  category: string;
  nameAr: string;
  nameEn: string;
  brandAr: string;
  brandEn: string;
  priceAr: string;
  priceEn: string;
  image: string;
  matchPercent: number;
  pin: PinPosition;
  pinIndex: number;
  executable: boolean;
  alternativeId?: string;
};

type AnalyzeInput = {
  afterUrl: string;
  styleId: string;
  spaceType: SpaceType;
  roomType: string;
  locale: "ar" | "en";
};

function toDetected(
  item: CatalogFurniture,
  matchPercent: number,
  pin: PinPosition,
  pinIndex: number,
  alternativeId?: string
): DetectedFurniture {
  return {
    catalogId: item.id,
    category: item.category,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
    brandAr: item.brandAr,
    brandEn: item.brandEn,
    priceAr: item.priceAr,
    priceEn: item.priceEn,
    image: item.image,
    matchPercent,
    pin,
    pinIndex,
    executable: item.executable,
    alternativeId,
  };
}

const PIN_POSITIONS: PinPosition[] = [
  "center-left",
  "top-center",
  "center-right",
  "bottom-left",
  "bottom-center",
];

function fallbackFurniture(styleId: string, roomType: string): DetectedFurniture[] {
  const ids = getFallbackFurniture(styleId, roomType);
  return ids.map((id, i) => {
    const item = getFurnitureById(id)!;
    const altPool = FURNITURE_CATALOG.filter(
      (f) => f.category === item.category && f.id !== item.id
    );
    const alt = altPool[0]?.id;
    return toDetected(item, 78 + (i % 3) * 5, PIN_POSITIONS[i % PIN_POSITIONS.length]!, i + 1, alt);
  });
}

function resolveImageUrl(afterUrl: string): string {
  return afterUrl.startsWith("http")
    ? afterUrl
    : `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}${afterUrl}`;
}

async function analyzeWithVision(input: AnalyzeInput): Promise<DetectedFurniture[] | null> {
  if (!openai) return null;

  const catalogSummary = FURNITURE_CATALOG.map(
    (f) => `${f.id}: ${f.nameEn} (${f.category})`
  ).join("\n");

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You detect furniture and decor in interior design images for a Saudi luxury platform. Pick ONLY from this catalog (exact ids):\n${catalogSummary}\n\nRespond JSON: { "items": [{ "catalogId": "string", "matchPercent": 70-98, "pin": "top-left"|"center"|"bottom-right"|etc, "alternativeId": "optional other catalog id same category" }] }\nMax 5 items. pin = approximate location in image.`,
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Detect furniture in this ${input.roomType} ${input.spaceType} design (style: ${input.styleId}).`,
            },
            { type: "image_url", image_url: { url: resolveImageUrl(input.afterUrl), detail: "low" } },
          ],
        },
      ],
      max_tokens: 900,
      response_format: { type: "json_object" },
    });

    const raw = response.choices[0]?.message?.content;
    if (!raw) return null;

    const parsed = JSON.parse(raw) as {
      items?: {
        catalogId: string;
        matchPercent?: number;
        pin?: PinPosition;
        alternativeId?: string;
      }[];
    };

    const results: DetectedFurniture[] = [];
    for (const [i, item] of (parsed.items ?? []).entries()) {
      const furniture = getFurnitureById(item.catalogId);
      if (!furniture) continue;
      const alt =
        item.alternativeId && getFurnitureById(item.alternativeId)
          ? item.alternativeId
          : FURNITURE_CATALOG.find(
              (f) => f.category === furniture.category && f.id !== furniture.id
            )?.id;
      results.push(
        toDetected(
          furniture,
          Math.min(98, Math.max(70, item.matchPercent ?? 85)),
          item.pin ?? PIN_POSITIONS[i % PIN_POSITIONS.length]!,
          i + 1,
          alt
        )
      );
    }

    return results.length > 0 ? results.slice(0, 5) : null;
  } catch {
    return null;
  }
}

export async function analyzeDesignFurniture(input: AnalyzeInput): Promise<{
  furniture: DetectedFurniture[];
  isAiDetected: boolean;
}> {
  if (input.spaceType === "exterior" || input.spaceType === "booth") {
    return { furniture: [], isAiDetected: false };
  }

  const vision = await analyzeWithVision(input);
  if (vision && vision.length > 0) {
    return { furniture: vision, isAiDetected: true };
  }
  return {
    furniture: fallbackFurniture(input.styleId, input.roomType),
    isAiDetected: false,
  };
}
