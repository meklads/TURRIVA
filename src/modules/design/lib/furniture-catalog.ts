export type FurnitureCategory =
  | "sofa"
  | "chair"
  | "table"
  | "bed"
  | "desk"
  | "lighting"
  | "storage"
  | "decor";

export type CatalogFurniture = {
  id: string;
  category: FurnitureCategory;
  nameAr: string;
  nameEn: string;
  brandAr: string;
  brandEn: string;
  priceAr: string;
  priceEn: string;
  image: string;
  roomTypes: string[];
  styleTags: string[];
  executable: boolean;
};

export const FURNITURE_CATALOG: CatalogFurniture[] = [
  {
    id: "sofa-linen-cream",
    category: "sofa",
    nameAr: "كنب كتان كريمي 3 مقاعد",
    nameEn: "Cream linen 3-seater sofa",
    brandAr: "توريد أثاث مخصص",
    brandEn: "Custom furniture",
    priceAr: "18,500 ر.س",
    priceEn: "SAR 18,500",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["living", "majlis"],
    styleTags: ["modern", "minimal", "contemporary", "luxury"],
    executable: true,
  },
  {
    id: "sofa-velvet-gold",
    category: "sofa",
    nameAr: "كنب مخمل ذهبي فاخر",
    nameEn: "Luxury gold velvet sofa",
    brandAr: "رواق للأثاث",
    brandEn: "Ruwaq furniture",
    priceAr: "32,000 ر.س",
    priceEn: "SAR 32,000",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["living", "majlis"],
    styleTags: ["neoclassic", "luxury", "islamic"],
    executable: true,
  },
  {
    id: "coffee-table-marble",
    category: "table",
    nameAr: "طاولة قهوة رخام ونحاس",
    nameEn: "Marble & brass coffee table",
    brandAr: "Pan Home · معتمد",
    brandEn: "Pan Home · partner",
    priceAr: "4,200 ر.س",
    priceEn: "SAR 4,200",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["living", "majlis"],
    styleTags: ["modern", "luxury", "contemporary"],
    executable: true,
  },
  {
    id: "dining-table-oak",
    category: "table",
    nameAr: "طاولة طعام خشب بلوط",
    nameEn: "Oak dining table (8 seats)",
    brandAr: "Home Center · معتمد",
    brandEn: "Home Center · partner",
    priceAr: "12,800 ر.س",
    priceEn: "SAR 12,800",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["living", "kitchen"],
    styleTags: ["modern", "minimal", "contemporary"],
    executable: true,
  },
  {
    id: "armchair-leather",
    category: "chair",
    nameAr: "كرسي استرخاء جلد طبيعي",
    nameEn: "Natural leather armchair",
    brandAr: "Abdullah Latif · معتمد",
    brandEn: "Abdullah Latif · partner",
    priceAr: "6,900 ر.س",
    priceEn: "SAR 6,900",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["living", "majlis", "bedroom"],
    styleTags: ["modern", "luxury", "neoclassic"],
    executable: true,
  },
  {
    id: "bed-upholstered",
    category: "bed",
    nameAr: "سرير مرتفع بتنجيد فاخر",
    nameEn: "Upholstered platform bed",
    brandAr: "توريد أثاث مخصص",
    brandEn: "Custom furniture",
    priceAr: "15,500 ر.س",
    priceEn: "SAR 15,500",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["bedroom"],
    styleTags: ["modern", "minimal", "luxury", "contemporary"],
    executable: true,
  },
  {
    id: "nightstand-pair",
    category: "storage",
    nameAr: "زوج كوموديو خشب فاخر",
    nameEn: "Premium wood nightstand pair",
    brandAr: "رواق للأثاث",
    brandEn: "Ruwaq furniture",
    priceAr: "3,800 ر.س",
    priceEn: "SAR 3,800",
    image:
      "https://images.unsplash.com/photo-1617103996702-96ff344b4502?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["bedroom"],
    styleTags: ["modern", "neoclassic", "luxury"],
    executable: true,
  },
  {
    id: "chandelier-crystal",
    category: "lighting",
    nameAr: "ثريا كريستال 8 أذرع",
    nameEn: "8-arm crystal chandelier",
    brandAr: "موردو إضاءة فاخرة",
    brandEn: "Luxury lighting",
    priceAr: "22,000 ر.س",
    priceEn: "SAR 22,000",
    image:
      "https://images.unsplash.com/photo-1565814636192-a60558a5b6d6?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["living", "majlis", "bedroom"],
    styleTags: ["neoclassic", "luxury", "islamic"],
    executable: true,
  },
  {
    id: "pendant-modern",
    category: "lighting",
    nameAr: "معلّقة LED عصرية",
    nameEn: "Modern LED pendant light",
    brandAr: "فيليبس · معتمد",
    brandEn: "Philips · partner",
    priceAr: "1,850 ر.س",
    priceEn: "SAR 1,850",
    image:
      "https://images.unsplash.com/photo-1524484487471-3d1719dd1e97?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["kitchen", "living", "retail"],
    styleTags: ["modern", "minimal", "contemporary"],
    executable: true,
  },
  {
    id: "bookshelf-built-in",
    category: "storage",
    nameAr: "مكتبة مدمجة مخصصة",
    nameEn: "Custom built-in bookshelf",
    brandAr: "ورش نجارة رواق",
    brandEn: "Ruwaq joinery",
    priceAr: "9,500 ر.س",
    priceEn: "SAR 9,500",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["living", "bedroom", "retail"],
    styleTags: ["modern", "minimal", "contemporary"],
    executable: true,
  },
  {
    id: "rug-persian",
    category: "decor",
    nameAr: "سجاد فارسي يدوي",
    nameEn: "Hand-woven Persian rug",
    brandAr: "موردو سجاد فاخر",
    brandEn: "Premium rugs",
    priceAr: "8,500 ر.س",
    priceEn: "SAR 8,500",
    image:
      "https://images.unsplash.com/photo-1600166898305-e1214491b904?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["living", "majlis", "bedroom"],
    styleTags: ["islamic", "luxury", "neoclassic"],
    executable: true,
  },
  {
    id: "retail-display",
    category: "storage",
    nameAr: "وحدة عرض تجارية",
    nameEn: "Retail display unit",
    brandAr: "رواق للتجارة",
    brandEn: "Ruwaq retail fit-out",
    priceAr: "14,000 ر.س",
    priceEn: "SAR 14,000",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80",
    roomTypes: ["retail"],
    styleTags: ["modern", "contemporary", "minimal"],
    executable: true,
  },
];

export const FURNITURE_CATEGORY_LABELS: Record<FurnitureCategory, { ar: string; en: string }> = {
  sofa: { ar: "كنب", en: "Sofa" },
  chair: { ar: "كراسي", en: "Chairs" },
  table: { ar: "طاولات", en: "Tables" },
  bed: { ar: "أسرة", en: "Beds" },
  desk: { ar: "مكاتب", en: "Desks" },
  lighting: { ar: "إضاءة", en: "Lighting" },
  storage: { ar: "تخزين", en: "Storage" },
  decor: { ar: "ديكور", en: "Decor" },
};

export type PinPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "center-left"
  | "center"
  | "center-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export function getFurnitureById(id: string): CatalogFurniture | undefined {
  return FURNITURE_CATALOG.find((f) => f.id === id);
}

export function getFallbackFurniture(styleId: string, roomType: string): string[] {
  const byRoom = FURNITURE_CATALOG.filter((f) => f.roomTypes.includes(roomType));
  const byStyle = byRoom.filter(
    (f) => f.styleTags.includes(styleId) || f.styleTags.includes("modern")
  );
  const pool = byStyle.length >= 3 ? byStyle : byRoom.length >= 3 ? byRoom : FURNITURE_CATALOG;
  return pool.slice(0, 5).map((f) => f.id);
}
