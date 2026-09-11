/**
 * Curated visuals per product. Prefer owned brand photos; Unsplash only when
 * no suitable local asset exists for the product job.
 */
export type ProductVisualKey =
  | "real-estate-experience"
  | "show-unit"
  | "design-build"
  | "fit-out"
  | "commercial-spaces"
  | "hospitality-spaces"
  | "renovation";

export type ProductVisuals = {
  hero: string;
  mid: string;
  form: string;
  altEn: string;
  altAr: string;
  midCaptionEn: string;
  midCaptionAr: string;
};

const q = "auto=format&fit=crop&q=85";

export const PRODUCT_VISUALS: Record<ProductVisualKey, ProductVisuals> = {
  "real-estate-experience": {
    hero: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?${q}&w=1800`,
    mid: "/brand/turriva/makkah-charter-04.jpeg",
    form: "/brand/turriva/sample-kit-showroom.webp",
    altEn: "Modern development presentation environment",
    altAr: "بيئة عرض لمشروع عقاري حديث",
    midCaptionEn: "The place a project meets its clients",
    midCaptionAr: "المكان الذي يلتقي فيه المشروع بعملائه",
  },
  "show-unit": {
    hero: "/brand/turriva/inspiration/living-walnut-interior.webp",
    mid: "/brand/turriva/projects/project-walk-in-makkah.webp",
    form: "/brand/turriva/styles/italian-sylva-house.webp",
    altEn: "Show apartment living space ready for a buyer walkthrough",
    altAr: "مساحة معيشة في وحدة عرض جاهزة لمسار المشتري",
    midCaptionEn: "A unit a buyer can walk and understand",
    midCaptionAr: "وحدة يمشي فيها المشتري ويفهم أسلوب الحياة",
  },
  "design-build": {
    hero: "/brand/turriva/hero-interior.webp",
    mid: "/brand/turriva/styles/italian-polynesia-house.webp",
    form: "/brand/turriva/styles/contemporary-tahiti.webp",
    altEn: "Designed and built interior ready for daily use",
    altAr: "فراغ داخلي مصمم ومنفّذ وجاهز للاستخدام",
    midCaptionEn: "From an idea to a room that can be handed over",
    midCaptionAr: "من فكرة إلى غرفة يمكن تسليمها",
  },
  "fit-out": {
    hero: "/brand/turriva/projects/project-joinery-b2b.webp",
    mid: "/brand/turriva/projects/project-kitchen-jeddah.webp",
    form: "/brand/turriva/styles/italian-sylva-kitchen.webp",
    altEn: "Architectural joinery and fit-out craftsmanship",
    altAr: "نجارة معمارية وأعمال تجهيز دقيقة",
    midCaptionEn: "Your design. Built with discipline on site",
    midCaptionAr: "تصميمكم. يُبنى بانضباط في الموقع",
  },
  "commercial-spaces": {
    hero: "/brand/turriva/sample-kit-showroom.webp",
    mid: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${q}&w=1600`,
    form: "/brand/turriva/turriva-office.png",
    altEn: "Commercial interior where customers meet the brand",
    altAr: "فراغ تجاري يلتقي فيه العميل بالعلامة",
    midCaptionEn: "Space planning that works for the brand and for operations",
    midCaptionAr: "تخطيط مكاني يخدم العلامة والتشغيل معاً",
  },
  "hospitality-spaces": {
    hero: "/brand/turriva/styles/french-sicily.webp",
    mid: "/brand/turriva/styles/italian-titian.webp",
    form: "/brand/turriva/styles/minimal-urban-glow.webp",
    altEn: "Hospitality lobby and guest atmosphere",
    altAr: "ردهة ضيافة وأجواء استقبال الضيوف",
    midCaptionEn: "The guest experience begins in the room",
    midCaptionAr: "تجربة الضيف تبدأ من المكان",
  },
  renovation: {
    hero: "/brand/turriva/styles/contemporary-seville.webp",
    mid: "/brand/turriva/projects/project-kitchen-jeddah.webp",
    form: "/brand/turriva/styles/italian-polynesia-kitchen.webp",
    altEn: "Existing residence prepared for a thoughtful upgrade",
    altAr: "مسكن قائم جاهز لتطوير مدروس",
    midCaptionEn: "What stays, what changes, decided before demolition",
    midCaptionAr: "ما يبقى وما يتغير، يُقرر قبل أي هدم",
  },
};

export function getProductVisuals(key: ProductVisualKey): ProductVisuals {
  return PRODUCT_VISUALS[key];
}
