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

export type ProductStoryFrame = {
  src: string;
  captionEn: string;
  captionAr: string;
};

export type ProductVisuals = {
  hero: string;
  mid: string;
  form: string;
  altEn: string;
  altAr: string;
  midCaptionEn: string;
  midCaptionAr: string;
  story: readonly ProductStoryFrame[];
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
    story: [
      {
        src: "/brand/turriva/makkah-charter-04.jpeg",
        captionEn: "Sales environment",
        captionAr: "بيئة البيع",
      },
      {
        src: "/brand/turriva/sample-kit-showroom.webp",
        captionEn: "Project presentation",
        captionAr: "عرض المشروع",
      },
      {
        src: "/brand/turriva/projects/project-walk-in-makkah.webp",
        captionEn: "Show unit",
        captionAr: "وحدة العرض",
      },
    ],
  },
  "show-unit": {
    hero: "/brand/turriva/inspiration/living-walnut-interior.webp",
    mid: "/brand/turriva/projects/project-walk-in-makkah.webp",
    form: "/brand/turriva/styles/italian-sylva-house.webp",
    altEn: "Show apartment living space ready for a buyer walkthrough",
    altAr: "مساحة معيشة في وحدة عرض جاهزة لمسار المشتري",
    midCaptionEn: "A unit a buyer can walk and understand",
    midCaptionAr: "وحدة يمشي فيها المشتري ويفهم أسلوب الحياة",
    story: [
      {
        src: "/brand/turriva/inspiration/living-walnut-interior.webp",
        captionEn: "Living atmosphere",
        captionAr: "أجواء المعيشة",
      },
      {
        src: "/brand/turriva/projects/project-walk-in-makkah.webp",
        captionEn: "Detail and joinery",
        captionAr: "التفاصيل والنجارة",
      },
      {
        src: "/brand/turriva/styles/italian-sylva-house.webp",
        captionEn: "Finished interior",
        captionAr: "فراغ مكتمل",
      },
    ],
  },
  "design-build": {
    hero: "/brand/turriva/hero-interior.webp",
    mid: "/brand/turriva/styles/italian-polynesia-house.webp",
    form: "/brand/turriva/styles/contemporary-tahiti.webp",
    altEn: "Designed and built interior ready for daily use",
    altAr: "فراغ داخلي مصمم ومنفّذ وجاهز للاستخدام",
    midCaptionEn: "From an idea to a room that can be handed over",
    midCaptionAr: "من فكرة إلى غرفة يمكن تسليمها",
    story: [
      {
        src: "/brand/turriva/hero-interior.webp",
        captionEn: "Concept to space",
        captionAr: "من الفكرة إلى المساحة",
      },
      {
        src: "/brand/turriva/styles/italian-polynesia-house.webp",
        captionEn: "Material development",
        captionAr: "تطوير المواد",
      },
      {
        src: "/brand/turriva/styles/contemporary-tahiti.webp",
        captionEn: "Ready to use",
        captionAr: "جاهز للاستخدام",
      },
    ],
  },
  "fit-out": {
    hero: "/brand/turriva/projects/project-joinery-b2b.webp",
    mid: "/brand/turriva/projects/project-kitchen-jeddah.webp",
    form: "/brand/turriva/styles/italian-sylva-kitchen.webp",
    altEn: "Architectural joinery and fit-out craftsmanship",
    altAr: "نجارة معمارية وأعمال تجهيز دقيقة",
    midCaptionEn: "Your design. Built with discipline on site",
    midCaptionAr: "تصميمكم. يُبنى بانضباط في الموقع",
    story: [
      {
        src: "/brand/turriva/projects/project-joinery-b2b.webp",
        captionEn: "Craft and precision",
        captionAr: "الحرفة والدقة",
      },
      {
        src: "/brand/turriva/projects/project-kitchen-jeddah.webp",
        captionEn: "Technical execution",
        captionAr: "التنفيذ الفني",
      },
      {
        src: "/brand/turriva/styles/italian-sylva-kitchen.webp",
        captionEn: "Finished detail",
        captionAr: "تفصيل مكتمل",
      },
    ],
  },
  "commercial-spaces": {
    hero: "/brand/turriva/sample-kit-showroom.webp",
    mid: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${q}&w=1600`,
    form: "/brand/turriva/turriva-office.png",
    altEn: "Commercial interior where customers meet the brand",
    altAr: "فراغ تجاري يلتقي فيه العميل بالعلامة",
    midCaptionEn: "Space planning that works for the brand and for operations",
    midCaptionAr: "تخطيط مكاني يخدم العلامة والتشغيل معاً",
    story: [
      {
        src: "/brand/turriva/sample-kit-showroom.webp",
        captionEn: "Brand in the room",
        captionAr: "العلامة داخل المكان",
      },
      {
        src: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${q}&w=1200`,
        captionEn: "Customer path",
        captionAr: "مسار العميل",
      },
      {
        src: "/brand/turriva/turriva-office.png",
        captionEn: "Working space",
        captionAr: "مساحة عمل",
      },
    ],
  },
  "hospitality-spaces": {
    hero: "/brand/turriva/styles/french-sicily.webp",
    mid: "/brand/turriva/styles/italian-titian.webp",
    form: "/brand/turriva/styles/minimal-urban-glow.webp",
    altEn: "Hospitality lobby and guest atmosphere",
    altAr: "ردهة ضيافة وأجواء استقبال الضيوف",
    midCaptionEn: "The guest experience begins in the room",
    midCaptionAr: "تجربة الضيف تبدأ من المكان",
    story: [
      {
        src: "/brand/turriva/styles/french-sicily.webp",
        captionEn: "Arrival",
        captionAr: "الوصول",
      },
      {
        src: "/brand/turriva/styles/italian-titian.webp",
        captionEn: "Atmosphere",
        captionAr: "الأجواء",
      },
      {
        src: "/brand/turriva/styles/minimal-urban-glow.webp",
        captionEn: "Guest areas",
        captionAr: "مساحات الضيف",
      },
    ],
  },
  renovation: {
    hero: "/brand/turriva/styles/contemporary-seville.webp",
    mid: "/brand/turriva/projects/project-kitchen-jeddah.webp",
    form: "/brand/turriva/styles/italian-polynesia-kitchen.webp",
    altEn: "Existing residence prepared for a thoughtful upgrade",
    altAr: "مسكن قائم جاهز لتطوير مدروس",
    midCaptionEn: "What stays, what changes, decided before demolition",
    midCaptionAr: "ما يبقى وما يتغير، يُقرر قبل أي هدم",
    story: [
      {
        src: "/brand/turriva/styles/contemporary-seville.webp",
        captionEn: "Existing condition",
        captionAr: "الحالة القائمة",
      },
      {
        src: "/brand/turriva/projects/project-kitchen-jeddah.webp",
        captionEn: "Focused upgrade",
        captionAr: "تطوير مركّز",
      },
      {
        src: "/brand/turriva/styles/italian-polynesia-kitchen.webp",
        captionEn: "New potential",
        captionAr: "إمكانات جديدة",
      },
    ],
  },
};

export function getProductVisuals(key: ProductVisualKey): ProductVisuals {
  return PRODUCT_VISUALS[key];
}
