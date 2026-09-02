import type { Locale } from "@/shared/i18n/locale";
import type { MarketingProjectType } from "./marketing-lead-scoring";
import type { BudgetRange, Timeline } from "@/modules/design/lib/lead-scoring";
import type { MarketingScope } from "./marketing-lead-scoring";

export type ContactIntent =
  | "design"
  | "sample"
  | "quote"
  | "hospitality"
  | "exhibition"
  | "developer"
  | "commercial";

export type FunnelPreset = {
  projectType?: MarketingProjectType;
  source: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
};

export const CONTACT_INTENTS: Record<ContactIntent, FunnelPreset> = {
  design: {
    projectType: "villa",
    source: "contact_intent_design",
    titleEn: "Discuss your villa project",
    titleAr: "ناقش مشروع فيلتك",
    subtitleEn: "Share scope, timeline, and plans — our team responds within one business day.",
    subtitleAr: "شاركنا النطاق والجدول والمخططات — يرد فريقنا خلال يوم عمل.",
  },
  sample: {
    projectType: "villa",
    source: "contact_intent_sample",
    titleEn: "Request a material sample kit",
    titleAr: "اطلب حقيبة عينات",
    subtitleEn: "Finishes and hardware references for your review before procurement.",
    subtitleAr: "عينات تشطيبات ومفصلات للمراجعة قبل الشراء.",
  },
  quote: {
    source: "contact_intent_quote",
    titleEn: "Request a project quote",
    titleAr: "اطلب عرض سعر",
    subtitleEn: "Structured brief for villas, hospitality, exhibitions, and developer programmes.",
    subtitleAr: "ملخص منظم للفلل والضيافة والمعارض وبرامج المطورين.",
  },
  hospitality: {
    projectType: "hospitality",
    source: "contact_intent_hospitality",
    titleEn: "Hospitality fit-out brief",
    titleAr: "ملخص تشطيب ضيافة",
    subtitleEn: "Hotels, serviced apartments, and F&B — batch joinery and wet-area execution.",
    subtitleAr: "فنادق وشقق فندقية ومطاعم — نجارة على دفعات وتشطيب مناطق رطبة.",
  },
  exhibition: {
    projectType: "exhibition",
    source: "contact_intent_exhibition",
    titleEn: "Exhibition & pavilion brief",
    titleAr: "ملخص معرض أو بافيلion",
    subtitleEn: "Sales environments and institutional exhibitions with opening-ready delivery.",
    subtitleAr: "بيئات مبيعات ومعارض مؤسسية بتسليم جاهز للافتتاح.",
  },
  developer: {
    projectType: "developer",
    source: "contact_intent_developer",
    titleEn: "Developer joinery programme",
    titleAr: "برنامج نجارة مطور",
    subtitleEn: "Repeatable modular packages across towers and phased handover.",
    subtitleAr: "حزم معيارية قابلة للتكرار عبر الأبراج وتسليم مرحلي.",
  },
  commercial: {
    projectType: "commercial",
    source: "contact_intent_commercial",
    titleEn: "Commercial fit-out brief",
    titleAr: "ملخص تشطيب تجاري",
    subtitleEn: "Retail, offices, and branded environments — from shop drawings to handover.",
    subtitleAr: "تجزئة ومكاتب وبيئات علامات — من الرسومات إلى التسليم.",
  },
};

export function parseContactIntent(raw?: string | null): ContactIntent | null {
  if (!raw) return null;
  return raw in CONTACT_INTENTS ? (raw as ContactIntent) : null;
}

export type FunnelCopy = {
  steps: { project: string; scope: string; details: string; contact: string };
  projectTypes: Record<MarketingProjectType, string>;
  scopes: Record<MarketingScope, string>;
  budgets: Record<BudgetRange, string>;
  timelines: Record<Timeline, string>;
  areaLabel: string;
  areaPlaceholder: string;
  companyLabel: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  cityLabel: string;
  messageLabel: string;
  fileLabel: string;
  fileHint: string;
  next: string;
  back: string;
  submit: string;
  loading: string;
  success: string;
  error: string;
  qualifiedNote: string;
  stepOf: (current: number, total: number) => string;
};

export function getFunnelCopy(locale: Locale): FunnelCopy {
  const isAr = locale === "ar";
  return {
    steps: isAr
      ? { project: "نوع المشروع", scope: "النطاق", details: "الميزانية والجدول", contact: "بيانات التواصل" }
      : { project: "Project type", scope: "Scope", details: "Budget & timeline", contact: "Your details" },
    projectTypes: isAr
      ? {
          villa: "فيلا / سكني",
          hospitality: "ضيافة / فندق",
          exhibition: "معرض / بافيلion",
          developer: "مطور / B2B",
          commercial: "تجاري / مكاتب",
          other: "أخرى",
        }
      : {
          villa: "Villa / residential",
          hospitality: "Hospitality / hotel",
          exhibition: "Exhibition / pavilion",
          developer: "Developer / B2B",
          commercial: "Commercial / office",
          other: "Other",
        },
    scopes: isAr
      ? {
          one_room: "غرفة أو منطقة واحدة",
          multiple_rooms: "عدة غرف / مناطق",
          full_property: "عقار كامل",
          batch_units: "دفعة وحدات / برج",
        }
      : {
          one_room: "One room or zone",
          multiple_rooms: "Multiple rooms / zones",
          full_property: "Full property",
          batch_units: "Batch units / tower",
        },
    budgets: isAr
      ? {
          under_30k: "أقل من 30 ألف ر.س",
          "30_80k": "30 – 80 ألف ر.س",
          "80_200k": "80 – 200 ألف ر.س",
          over_200k: "أكثر من 200 ألف ر.س",
        }
      : {
          under_30k: "Under SAR 30k",
          "30_80k": "SAR 30k – 80k",
          "80_200k": "SAR 80k – 200k",
          over_200k: "Over SAR 200k",
        },
    timelines: isAr
      ? {
          immediate: "فوري / خلال أسابيع",
          "1_month": "خلال شهر",
          "3_months": "1 – 3 أشهر",
          exploring: "استكشاف فقط",
        }
      : {
          immediate: "Immediate / weeks",
          "1_month": "Within 1 month",
          "3_months": "1 – 3 months",
          exploring: "Exploring only",
        },
    areaLabel: isAr ? "المساحة أو عدد الوحدات" : "Area or unit count",
    areaPlaceholder: isAr ? "مثال: 450 م² أو 120 وحدة" : "e.g. 450 sqm or 120 units",
    companyLabel: isAr ? "الشركة / المؤسسة" : "Company / organisation",
    nameLabel: isAr ? "الاسم الكامل" : "Full name",
    emailLabel: isAr ? "البريد الإلكتروني" : "Work email",
    phoneLabel: isAr ? "الجوال" : "Mobile",
    cityLabel: isAr ? "المدينة" : "City",
    messageLabel: isAr ? "ملاحظات إضافية" : "Additional notes",
    fileLabel: isAr ? "مخططات أو ملفات (اختياري)" : "Plans or files (optional)",
    fileHint: isAr ? "PDF، صور، DWG — حتى 12 م.ب" : "PDF, images, DWG — up to 12 MB",
    next: isAr ? "التالي" : "Next",
    back: isAr ? "رجوع" : "Back",
    submit: isAr ? "إرسال الملخص" : "Submit brief",
    loading: isAr ? "جاري الإرسال…" : "Submitting…",
    success: isAr
      ? "شكراً — استلمنا ملخص مشروعك. سيتواصل معك فريق توريفا خلال 24 ساعة."
      : "Thank you — we received your project brief. The Turriva team will contact you within 24 hours.",
    error: isAr ? "تعذر الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر واتساب." : "Could not submit. Please try again or contact us on WhatsApp.",
    qualifiedNote: isAr
      ? "ملخصك يبدو جاهزاً للمتابعة — سنخصص مستشاراً لتنفيذك."
      : "Your brief looks ready for follow-up — we will assign a dedicated execution contact.",
    stepOf: (current, total) => (isAr ? `الخطوة ${current} من ${total}` : `Step ${current} of ${total}`),
  };
}
