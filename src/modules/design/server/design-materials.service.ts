import OpenAI from "openai";
import {
  getFallbackMaterialIds,
  getMaterialById,
  MATERIAL_CATALOG,
  type CatalogMaterial,
} from "../lib/material-catalog";
import type { SpaceType } from "../lib/styles";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export type DetectedMaterial = {
  catalogId: string;
  category: string;
  nameAr: string;
  nameEn: string;
  supplierAr: string;
  supplierEn: string;
  priceHintAr: string;
  priceHintEn: string;
  image: string;
  areaHintAr: string;
  areaHintEn: string;
  confidence: "high" | "medium";
  executable: boolean;
};

type AnalyzeInput = {
  afterUrl: string;
  styleId: string;
  spaceType: SpaceType;
  roomType: string;
  locale: "ar" | "en";
};

function toDetected(material: CatalogMaterial, areaHint: { ar: string; en: string }, confidence: "high" | "medium"): DetectedMaterial {
  return {
    catalogId: material.id,
    category: material.category,
    nameAr: material.nameAr,
    nameEn: material.nameEn,
    supplierAr: material.supplierAr,
    supplierEn: material.supplierEn,
    priceHintAr: material.priceHintAr,
    priceHintEn: material.priceHintEn,
    image: material.image,
    areaHintAr: areaHint.ar,
    areaHintEn: areaHint.en,
    confidence,
    executable: material.executable,
  };
}

const AREA_HINTS = [
  { ar: "أرضيات المساحة الرئيسية", en: "Main floor area" },
  { ar: "الجدران والأسقف", en: "Walls and ceilings" },
  { ar: "عناصر خشبية مخصصة", en: "Custom wood elements" },
  { ar: "الإضاءة العامة", en: "General lighting" },
  { ar: "الأثاث والديكور", en: "Furniture and decor" },
  { ar: "تشطيبات وتفاصيل", en: "Finishes and details" },
];

function fallbackMaterials(styleId: string, spaceType: SpaceType): DetectedMaterial[] {
  const ids = getFallbackMaterialIds(styleId, spaceType);
  return ids
    .map((id, i) => {
      const material = getMaterialById(id);
      if (!material) return null;
      const hint = AREA_HINTS[i % AREA_HINTS.length]!;
      return toDetected(material, hint, "medium");
    })
    .filter((m): m is DetectedMaterial => m !== null);
}

async function analyzeWithVision(input: AnalyzeInput): Promise<DetectedMaterial[] | null> {
  if (!openai) return null;

  const catalogSummary = MATERIAL_CATALOG.map(
    (m) => `${m.id}: ${m.nameEn} (${m.category})`
  ).join("\n");

  const imageUrl = input.afterUrl.startsWith("http")
    ? input.afterUrl
    : `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}${input.afterUrl}`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an interior design material analyst for a Saudi luxury contracting company. Identify materials visible in the design image. ONLY pick from this catalog (use exact ids):\n${catalogSummary}\n\nRespond JSON only: { "materials": [{ "catalogId": "string", "areaHintEn": "short area description", "areaHintAr": "وصف قصير بالعربية", "confidence": "high"|"medium" }] }\nPick 4-6 materials max.`,
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Analyze this ${input.spaceType} design (${input.roomType}, style: ${input.styleId}). List executable materials from catalog only.`,
            },
            { type: "image_url", image_url: { url: imageUrl, detail: "low" } },
          ],
        },
      ],
      max_tokens: 800,
      response_format: { type: "json_object" },
    });

    const raw = response.choices[0]?.message?.content;
    if (!raw) return null;

    const parsed = JSON.parse(raw) as {
      materials?: {
        catalogId: string;
        areaHintEn?: string;
        areaHintAr?: string;
        confidence?: string;
      }[];
    };

    const results: DetectedMaterial[] = [];
    for (const item of parsed.materials ?? []) {
      const material = getMaterialById(item.catalogId);
      if (!material) continue;
      results.push(
        toDetected(
          material,
          {
            ar: item.areaHintAr ?? "عنصر في التصميم",
            en: item.areaHintEn ?? "Design element",
          },
          item.confidence === "high" ? "high" : "medium"
        )
      );
    }

    return results.length > 0 ? results.slice(0, 6) : null;
  } catch {
    return null;
  }
}

export async function analyzeDesignMaterials(input: AnalyzeInput): Promise<{
  materials: DetectedMaterial[];
  isAiDetected: boolean;
}> {
  const vision = await analyzeWithVision(input);
  if (vision && vision.length > 0) {
    return { materials: vision, isAiDetected: true };
  }
  return {
    materials: fallbackMaterials(input.styleId, input.spaceType),
    isAiDetected: false,
  };
}
