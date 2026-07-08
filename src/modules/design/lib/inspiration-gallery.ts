export type InspirationCategory =
  | "interior"
  | "exterior"
  | "exhibition"
  | "retail"
  | "villa"
  | "palace";

export type InspirationItem = {
  id: string;
  category: InspirationCategory;
  image: string;
  titleAr: string;
  titleEn: string;
  styleAr: string;
  styleEn: string;
};

const q = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const INSPIRATION_ITEMS: InspirationItem[] = [
  {
    id: "palace-majlis",
    category: "palace",
    image: q("photo-1600607687939-ce8a6c25118c"),
    titleAr: "مجلس قصر فاخر",
    titleEn: "Luxury palace majlis",
    styleAr: "فاخر · نيوكلاسيك",
    styleEn: "Luxury · Neoclassic",
  },
  {
    id: "palace-lobby",
    category: "palace",
    image: q("photo-1600210492486-724fe5c67fb0"),
    titleAr: "ردهة قصر",
    titleEn: "Palace lobby",
    styleAr: "معاصر · رخام",
    styleEn: "Contemporary · Marble",
  },
  {
    id: "villa-living",
    category: "villa",
    image: q("photo-1600607687644-c7171b42498f"),
    titleAr: "معيشة فيلا",
    titleEn: "Villa living room",
    styleAr: "عصري · هادئ",
    styleEn: "Modern · Calm",
  },
  {
    id: "villa-exterior",
    category: "villa",
    image: q("photo-1600585154340-be6161a56a0c"),
    titleAr: "واجهة فيلا",
    titleEn: "Villa facade",
    styleAr: "خارجي · حديث",
    styleEn: "Exterior · Modern",
  },
  {
    id: "interior-bedroom",
    category: "interior",
    image: q("photo-1616486338812-3dadae4b4ace"),
    titleAr: "غرفة نوم راقية",
    titleEn: "Premium bedroom",
    styleAr: "بساطة · دافئ",
    styleEn: "Minimal · Warm",
  },
  {
    id: "interior-kitchen",
    category: "interior",
    image: q("photo-1600607687920-4e2a09cf159d"),
    titleAr: "مطبخ عصري",
    titleEn: "Modern kitchen",
    styleAr: "عصري · خشب",
    styleEn: "Modern · Wood",
  },
  {
    id: "interior-majlis",
    category: "interior",
    image: q("photo-1600566753190-17f0baa2a6c3"),
    titleAr: "مجلس إسلامي معاصر",
    titleEn: "Contemporary majlis",
    styleAr: "هندسي · دافئ",
    styleEn: "Islamic · Warm",
  },
  {
    id: "exterior-commercial",
    category: "exterior",
    image: q("photo-1605276374104-dee2a0ed3cd6"),
    titleAr: "واجهة تجارية",
    titleEn: "Commercial facade",
    styleAr: "خارجي · زجاج",
    styleEn: "Exterior · Glass",
  },
  {
    id: "exterior-courtyard",
    category: "exterior",
    image: q("photo-1600047509358-9dc75507daeb"),
    titleAr: "فناء خارجي",
    titleEn: "Outdoor courtyard",
    styleAr: "حديقة · إضاءة",
    styleEn: "Garden · Lighting",
  },
  {
    id: "retail-shop",
    category: "retail",
    image: q("photo-1441986300917-64674bd600d8"),
    titleAr: "محل تجاري",
    titleEn: "Retail boutique",
    styleAr: "تجاري · أنيق",
    styleEn: "Retail · Elegant",
  },
  {
    id: "retail-cafe",
    category: "retail",
    image: q("photo-1554118811-1e0d58224f24"),
    titleAr: "كوفي شوب",
    titleEn: "Coffee shop",
    styleAr: "تجاري · عصري",
    styleEn: "Retail · Modern",
  },
  {
    id: "exhibition-booth",
    category: "exhibition",
    image: q("photo-1540575467063-178a50c2df87"),
    titleAr: "جناح معرض",
    titleEn: "Exhibition booth",
    styleAr: "إعلاني · احترافي",
    styleEn: "Booth · Professional",
  },
  {
    id: "exhibition-stand",
    category: "exhibition",
    image: q("photo-1505373877841-8d25fbf1efaa"),
    titleAr: "ستاند فعالية",
    titleEn: "Event stand",
    styleAr: "معرض · إضاءة",
    styleEn: "Trade show · Lit",
  },
];

export const INSPIRATION_CATEGORIES: InspirationCategory[] = [
  "interior",
  "exterior",
  "villa",
  "palace",
  "retail",
  "exhibition",
];
