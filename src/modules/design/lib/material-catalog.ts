export type MaterialCategory =
  | "flooring"
  | "walls"
  | "wood"
  | "stone"
  | "glass"
  | "lighting"
  | "furniture"
  | "metal"
  | "textile";

export type CatalogMaterial = {
  id: string;
  category: MaterialCategory;
  nameAr: string;
  nameEn: string;
  supplierAr: string;
  supplierEn: string;
  priceHintAr: string;
  priceHintEn: string;
  image: string;
  executable: boolean;
};

export const MATERIAL_CATALOG: CatalogMaterial[] = [
  {
    id: "marble-calacatta",
    category: "stone",
    nameAr: "رخام كالاكاتا كريمي",
    nameEn: "Calacatta cream marble",
    supplierAr: "موردون معتمدون — الرياض",
    supplierEn: "Approved suppliers — Riyadh",
    priceHintAr: "350–520 ر.س/م²",
    priceHintEn: "SAR 350–520/m²",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "wood-walnut",
    category: "wood",
    nameAr: "خشب جوز طبيعي",
    nameEn: "Natural walnut wood",
    supplierAr: "ورش نجارة رواق",
    supplierEn: "Ruwaq joinery partners",
    priceHintAr: "1,200–2,800 ر.س/م.ط",
    priceHintEn: "SAR 1,200–2,800/lm",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "wood-oak",
    category: "wood",
    nameAr: "خشب بلوط فاتح",
    nameEn: "Light oak wood",
    supplierAr: "ورش نجارة رواق",
    supplierEn: "Ruwaq joinery partners",
    priceHintAr: "900–1,800 ر.س/م.ط",
    priceHintEn: "SAR 900–1,800/lm",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "glass-tempered",
    category: "glass",
    nameAr: "زجاج مقسى شفاف",
    nameEn: "Tempered clear glass",
    supplierAr: "مصنع زجاج معتمد",
    supplierEn: "Certified glass factory",
    priceHintAr: "280–450 ر.س/م²",
    priceHintEn: "SAR 280–450/m²",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "paint-velvet",
    category: "walls",
    nameAr: "دهان فيلفيت فاخر",
    nameEn: "Luxury velvet paint",
    supplierAr: "جوتن / دولكس",
    supplierEn: "Jotun / Dulux",
    priceHintAr: "45–85 ر.س/م²",
    priceHintEn: "SAR 45–85/m²",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "gypsum-board",
    category: "walls",
    nameAr: "جبس بورد ديكوري",
    nameEn: "Decorative gypsum board",
    supplierAr: "مقاولات رواق",
    supplierEn: "Ruwaq contracting",
    priceHintAr: "120–220 ر.س/م²",
    priceHintEn: "SAR 120–220/m²",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "lighting-recessed",
    category: "lighting",
    nameAr: "إضاءة سبوت LED دافئة",
    nameEn: "Warm LED recessed spots",
    supplierAr: "فيليبس / أوسرام",
    supplierEn: "Philips / Osram",
    priceHintAr: "180–350 ر.س/نقطة",
    priceHintEn: "SAR 180–350/point",
    image:
      "https://images.unsplash.com/photo-1524484487471-3d1719dd1e97?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "lighting-chandelier",
    category: "lighting",
    nameAr: "ثريا كريستال فاخرة",
    nameEn: "Luxury crystal chandelier",
    supplierAr: "موردو إضاءة فاخرة",
    supplierEn: "Luxury lighting suppliers",
    priceHintAr: "8,000–45,000 ر.س",
    priceHintEn: "SAR 8,000–45,000",
    image:
      "https://images.unsplash.com/photo-1565814636192-a60558a5b6d6?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "sofa-linen",
    category: "furniture",
    nameAr: "كنب كتان فاخر",
    nameEn: "Premium linen sofa",
    supplierAr: "توريد أثاث مخصص",
    supplierEn: "Custom furniture supply",
    priceHintAr: "12,000–35,000 ر.س",
    priceHintEn: "SAR 12,000–35,000",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "rug-wool",
    category: "textile",
    nameAr: "سجاد صوف يدوي",
    nameEn: "Hand-woven wool rug",
    supplierAr: "موردو سجاد فاخر",
    supplierEn: "Premium rug suppliers",
    priceHintAr: "3,500–18,000 ر.س",
    priceHintEn: "SAR 3,500–18,000",
    image:
      "https://images.unsplash.com/photo-1600166898305-e1214491b904?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "metal-brass",
    category: "metal",
    nameAr: "تشطيب نحاسي / برونزي",
    nameEn: "Brass / bronze finish",
    supplierAr: "ورش معدنية معتمدة",
    supplierEn: "Certified metal workshops",
    priceHintAr: "حسب التصميم",
    priceHintEn: "Custom quote",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "porcelain-tile",
    category: "flooring",
    nameAr: "بورسلان رخامي",
    nameEn: "Marble-look porcelain",
    supplierAr: "سيراميك معتمد",
    supplierEn: "Certified tile supplier",
    priceHintAr: "95–180 ر.س/م²",
    priceHintEn: "SAR 95–180/m²",
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "stone-travertine",
    category: "stone",
    nameAr: "حجر ترافرتين",
    nameEn: "Travertine stone",
    supplierAr: "موردو حجر طبيعي",
    supplierEn: "Natural stone suppliers",
    priceHintAr: "220–380 ر.س/م²",
    priceHintEn: "SAR 220–380/m²",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
  {
    id: "curtain-sheer",
    category: "textile",
    nameAr: "ستائر شيفون فاخرة",
    nameEn: "Luxury sheer curtains",
    supplierAr: "موردو أقمشة فاخرة",
    supplierEn: "Premium fabric suppliers",
    priceHintAr: "250–600 ر.س/م.ط",
    priceHintEn: "SAR 250–600/lm",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80",
    executable: true,
  },
];

export function getMaterialById(id: string): CatalogMaterial | undefined {
  return MATERIAL_CATALOG.find((m) => m.id === id);
}

export const CATEGORY_LABELS: Record<
  MaterialCategory,
  { ar: string; en: string }
> = {
  flooring: { ar: "أرضيات", en: "Flooring" },
  walls: { ar: "جدران", en: "Walls" },
  wood: { ar: "خشب", en: "Wood" },
  stone: { ar: "رخام وحجر", en: "Stone" },
  glass: { ar: "زجاج", en: "Glass" },
  lighting: { ar: "إضاءة", en: "Lighting" },
  furniture: { ar: "أثاث", en: "Furniture" },
  metal: { ar: "معادن", en: "Metal" },
  textile: { ar: "منسوجات", en: "Textiles" },
};

/** Style-based fallback when vision API is unavailable */
const STYLE_MATERIAL_MAP: Record<string, string[]> = {
  modern: ["porcelain-tile", "paint-velvet", "wood-oak", "lighting-recessed", "sofa-linen", "glass-tempered"],
  neoclassic: ["marble-calacatta", "wood-walnut", "lighting-chandelier", "gypsum-board", "rug-wool", "metal-brass"],
  islamic: ["stone-travertine", "wood-walnut", "metal-brass", "lighting-chandelier", "curtain-sheer", "gypsum-board"],
  minimal: ["porcelain-tile", "paint-velvet", "wood-oak", "lighting-recessed", "sofa-linen", "glass-tempered"],
  luxury: ["marble-calacatta", "wood-walnut", "lighting-chandelier", "sofa-linen", "rug-wool", "metal-brass"],
  contemporary: ["porcelain-tile", "wood-oak", "glass-tempered", "lighting-recessed", "paint-velvet", "curtain-sheer"],
};

const FACADE_MATERIALS = ["stone-travertine", "glass-tempered", "metal-brass", "paint-velvet", "lighting-recessed"];
const YARD_MATERIALS = ["stone-travertine", "porcelain-tile", "wood-oak", "lighting-recessed"];

export function getFallbackMaterialIds(styleId: string, spaceType: string): string[] {
  if (spaceType === "facade") return FACADE_MATERIALS;
  if (spaceType === "yard") return YARD_MATERIALS;
  return STYLE_MATERIAL_MAP[styleId] ?? STYLE_MATERIAL_MAP.modern ?? [];
}
