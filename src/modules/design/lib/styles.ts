export type DecorCategory = "fixed" | "advertising";

export type SpaceType = "interior" | "exterior" | "booth";

export type DesignStyle = {
  id: string;
  nameAr: string;
  nameEn: string;
  preview: string;
  sampleAfter: Record<SpaceType, string>;
};

const BOOTH_SAMPLE =
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85";

export const SPACE_DECOR_CATEGORY: Record<SpaceType, DecorCategory> = {
  interior: "fixed",
  exterior: "fixed",
  booth: "advertising",
};

/** Map legacy API values from older clients / DB rows. */
export function normalizeSpaceType(raw: string): SpaceType {
  if (raw === "facade" || raw === "yard") return "exterior";
  if (raw === "interior" || raw === "exterior" || raw === "booth") return raw;
  return "interior";
}

export const DESIGN_STYLES: DesignStyle[] = [
  {
    id: "modern",
    nameAr: "عصري",
    nameEn: "Modern",
    preview:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
    sampleAfter: {
      interior:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      exterior:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      booth: BOOTH_SAMPLE,
    },
  },
  {
    id: "neoclassic",
    nameAr: "نيوكلاسيك",
    nameEn: "Neoclassic",
    preview:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80",
    sampleAfter: {
      interior:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
      exterior:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=85",
      booth: BOOTH_SAMPLE,
    },
  },
  {
    id: "islamic",
    nameAr: "هندسي إسلامي",
    nameEn: "Islamic Geometric",
    preview:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
    sampleAfter: {
      interior:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      exterior:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      booth: BOOTH_SAMPLE,
    },
  },
  {
    id: "minimal",
    nameAr: "بساطة",
    nameEn: "Minimal",
    preview:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80",
    sampleAfter: {
      interior:
        "https://images.unsplash.com/photo-1600210492493-3d8c3f6e3f3a?auto=format&fit=crop&w=1200&q=85",
      exterior:
        "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=85",
      booth: BOOTH_SAMPLE,
    },
  },
  {
    id: "luxury",
    nameAr: "فاخر",
    nameEn: "Luxury",
    preview:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=400&q=80",
    sampleAfter: {
      interior:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      exterior:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      booth: BOOTH_SAMPLE,
    },
  },
  {
    id: "contemporary",
    nameAr: "معاصر",
    nameEn: "Contemporary",
    preview:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=400&q=80",
    sampleAfter: {
      interior:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      exterior:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=85",
      booth: BOOTH_SAMPLE,
    },
  },
];

export const ROOM_TYPES: Record<
  SpaceType,
  { id: string; nameAr: string; nameEn: string }[]
> = {
  interior: [
    { id: "villa", nameAr: "فيلا", nameEn: "Villa" },
    { id: "apartment", nameAr: "شقة", nameEn: "Apartment" },
    { id: "palace", nameAr: "قصر", nameEn: "Palace" },
    { id: "empty_room", nameAr: "غرفة فاضية", nameEn: "Empty Room" },
    { id: "shop", nameAr: "محل تجاري", nameEn: "Retail Shop" },
    { id: "majlis", nameAr: "مجلس", nameEn: "Majlis" },
    { id: "living", nameAr: "غرفة معيشة", nameEn: "Living Room" },
    { id: "bedroom", nameAr: "غرفة نوم", nameEn: "Bedroom" },
    { id: "kitchen", nameAr: "مطبخ", nameEn: "Kitchen" },
    { id: "bathroom", nameAr: "حمام", nameEn: "Bathroom" },
    { id: "office", nameAr: "مكتب", nameEn: "Office" },
  ],
  exterior: [
    { id: "villa", nameAr: "فيلا", nameEn: "Villa" },
    { id: "apartment_building", nameAr: "عمارة سكنية", nameEn: "Apartment Building" },
    { id: "palace", nameAr: "قصر", nameEn: "Palace" },
    { id: "commercial", nameAr: "مبنى تجاري", nameEn: "Commercial Building" },
    { id: "shop_front", nameAr: "واجهة محل", nameEn: "Shop Front" },
    { id: "courtyard", nameAr: "فناء / حديقة خارجية", nameEn: "Courtyard / Garden" },
  ],
  booth: [
    { id: "exhibition_booth", nameAr: "جناح معرض", nameEn: "Exhibition Booth" },
    { id: "trade_show", nameAr: "ستاند معرض تجاري", nameEn: "Trade Show Stand" },
    { id: "pop_up", nameAr: "متجر مؤقت", nameEn: "Pop-up Store" },
    { id: "event_pavilion", nameAr: "جناح فعالية", nameEn: "Event Pavilion" },
    { id: "brand_activation", nameAr: "تفعيل علامة تجارية", nameEn: "Brand Activation" },
    { id: "showroom", nameAr: "صالة عرض", nameEn: "Showroom" },
  ],
};

export function getStyleById(id: string): DesignStyle | undefined {
  return DESIGN_STYLES.find((s) => s.id === id);
}

export function getRoomLabel(
  spaceType: SpaceType,
  roomType: string,
  locale: "ar" | "en"
): string {
  const room = ROOM_TYPES[spaceType].find((r) => r.id === roomType);
  if (!room) return spaceType;
  return locale === "ar" ? room.nameAr : room.nameEn;
}
