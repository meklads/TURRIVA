export type SpaceType = "interior" | "facade" | "yard";

export type DesignStyle = {
  id: string;
  nameAr: string;
  nameEn: string;
  preview: string;
  sampleAfter: Record<SpaceType, string>;
};

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
      facade:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      yard:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
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
      facade:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=85",
      yard:
        "https://images.unsplash.com/photo-1600566753086-5f57f50e65d7?auto=format&fit=crop&w=1200&q=85",
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
      facade:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      yard:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85",
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
      facade:
        "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=85",
      yard:
        "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1200&q=85",
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
      facade:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      yard:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
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
      facade:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=85",
      yard:
        "https://images.unsplash.com/photo-1600566753086-5f57f50e65d7?auto=format&fit=crop&w=1200&q=85",
    },
  },
];

export const ROOM_TYPES: Record<
  SpaceType,
  { id: string; nameAr: string; nameEn: string }[]
> = {
  interior: [
    { id: "living", nameAr: "غرفة المعيشة", nameEn: "Living Room" },
    { id: "majlis", nameAr: "المجلس", nameEn: "Majlis" },
    { id: "bedroom", nameAr: "غرفة النوم", nameEn: "Bedroom" },
    { id: "kitchen", nameAr: "المطبخ", nameEn: "Kitchen" },
    { id: "bathroom", nameAr: "الحمام", nameEn: "Bathroom" },
    { id: "retail", nameAr: "متجر / معرض", nameEn: "Retail / Showroom" },
  ],
  facade: [
    { id: "villa", nameAr: "فيلا", nameEn: "Villa" },
    { id: "palace", nameAr: "قصر", nameEn: "Palace" },
    { id: "commercial", nameAr: "تجاري", nameEn: "Commercial" },
  ],
  yard: [
    { id: "garden", nameAr: "حديقة", nameEn: "Garden" },
    { id: "courtyard", nameAr: "فناء", nameEn: "Courtyard" },
    { id: "pool", nameAr: "حمام سباحة", nameEn: "Pool Area" },
  ],
};

export function getStyleById(id: string): DesignStyle | undefined {
  return DESIGN_STYLES.find((s) => s.id === id);
}
