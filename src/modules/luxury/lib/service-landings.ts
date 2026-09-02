import type { Locale } from "@/shared/i18n/locale";
import type { MarketingProjectType } from "./marketing-lead-scoring";
import { LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";

export type ServiceLandingSlug =
  | "hospitality-fitout"
  | "exhibition-execution"
  | "developer-joinery"
  | "commercial-fitout";

export type ServiceLanding = {
  slug: ServiceLandingSlug;
  image: string;
  projectType: MarketingProjectType;
  source: string;
  whatsappEn: string;
  whatsappAr: string;
  titleEn: string;
  titleAr: string;
  introEn: string;
  introAr: string;
  pointsEn: readonly string[];
  pointsAr: readonly string[];
  proofEn: string;
  proofAr: string;
  relatedCaseSlug?: string;
};

export const SERVICE_LANDINGS: readonly ServiceLanding[] = [
  {
    slug: "hospitality-fitout",
    image: LUXURY_IMAGES.project3,
    projectType: "hospitality",
    source: "lp_hospitality_fitout",
    whatsappEn: "Hello Turriva — I need hospitality fit-out execution. Please contact me.",
    whatsappAr: "مرحباً توريفا — أحتاج تنفيذ تشطيب ضيافة. يرجى التواصل معي.",
    titleEn: "Hospitality fit-out execution",
    titleAr: "تنفيذ تشطيب الضيافة",
    introEn:
      "Batch joinery, wet-area finishes, and phased handover for hotels and serviced apartments — engineered for operational wear in Makkah, Jeddah, and Riyadh.",
    introAr:
      "نجارة على دفعات وتشطيب مناطق رطبة وتسليم مرحلي للفنادق والشقق الفندقية — مصمم لتحمل التشغيل في مكة وجدة والرياض.",
    pointsEn: [
      "120+ unit programmes with floor-by-floor snagging",
      "Moisture-resistant wet zones & acoustic gypsum",
      "Documented handover aligned with opening dates",
    ],
    pointsAr: [
      "برامج 120+ وحدة مع إغلاق ملاحظات لكل طابق",
      "مناطق رطبة مقاومة للرطوبة وجبس acoustic",
      "تسليم موثق متوافق مع مواعيد الافتتاح",
    ],
    proofEn: "Boutique hotel programme · Makkah — 120+ guest units",
    proofAr: "برنامج فندق boutique · مكة — أكثر من 120 وحدة",
    relatedCaseSlug: "hospitality-fitout-makkah",
  },
  {
    slug: "exhibition-execution",
    image: "/brand/turriva/makkah-charter-04.jpeg",
    projectType: "exhibition",
    source: "lp_exhibition_execution",
    whatsappEn: "Hello Turriva — we need exhibition / pavilion execution. Please contact me.",
    whatsappAr: "مرحباً توريفا — نحتاج تنفيذ معرض أو بافيلion. يرجى التواصل.",
    titleEn: "Exhibition & pavilion execution",
    titleAr: "تنفيذ المعارض والبافيلions",
    introEn:
      "Physical delivery for sales galleries, institutional exhibitions, and developer pavilions — coordinated with Graphics House launch assets from approved 3D to opening day.",
    introAr:
      "تسليم ميداني لمعارض المبيعات والمعارض المؤسسية وبافيلions المطورين — منسّق مع أصول إطلاق Graphics House من 3D المعتمد حتى الافتتاح.",
    pointsEn: [
      "Joinery, décor, and interactive zone installation",
      "Single accountable field programme",
      "Opening-ready handover with QC documentation",
    ],
    pointsAr: [
      "نجارة وديكور وتركيب مناطق تفاعلية",
      "برنامج ميداني واحد مسؤول",
      "تسليم جاهز للافتتاح مع توثيق جودة",
    ],
    proofEn: "Humanity Exhibition · Muslim World League — Jeddah",
    proofAr: "معرض الإنسانية · رابطة العالم الإسلامي — جدة",
    relatedCaseSlug: "humanity-exhibition-mwl",
  },
  {
    slug: "developer-joinery",
    image: LUXURY_IMAGES.project4,
    projectType: "developer",
    source: "lp_developer_joinery",
    whatsappEn: "Hello Turriva — we are a developer seeking modular joinery execution. Please contact me.",
    whatsappAr: "مرحباً توريفا — نحن مطور ونبحث عن تنفيذ نجارة معيارية. يرجى التواصل.",
    titleEn: "Developer joinery programmes",
    titleAr: "برامج نجارة المطورين",
    introEn:
      "Repeatable kitchen, wardrobe, and common-area packages manufactured to approved drawings — phased site delivery matched to construction milestones.",
    introAr:
      "حزم مطابخ وخزائن ومناطق مشتركة قابلة للتكرار وفق رسومات معتمدة — تسليم ميداني مرحلي متوافق مع مراحل البناء.",
    pointsEn: [
      "Standardised modules with factory QC",
      "B2B pricing and batch scheduling",
      "Laser-verified installation on site",
    ],
    pointsAr: [
      "وحدات موحّدة مع فحص جودة في المصنع",
      "تسعير B2B وجدولة على دفعات",
      "تركيب بتحقق ليزري في الموقع",
    ],
    proofEn: "Developer tower joinery batch — Western Region",
    proofAr: "دفعة نجارة برج مطور — المنطقة الغربية",
    relatedCaseSlug: "developer-joinery-batch",
  },
  {
    slug: "commercial-fitout",
    image: LUXURY_IMAGES.project1,
    projectType: "commercial",
    source: "lp_commercial_fitout",
    whatsappEn: "Hello Turriva — we need commercial fit-out execution. Please contact me.",
    whatsappAr: "مرحباً توريفا — نحتاج تنفيذ تشطيب تجاري. يرجى التواصل.",
    titleEn: "Commercial & retail fit-out",
    titleAr: "تشطيب تجاري وتجزئة",
    introEn:
      "Premium retail, office, and branded environments — technical development, sampling, fabrication, and installation under one Turriva lead.",
    introAr:
      "تجزئة premium ومكاتب وبيئات علامات — تطوير فني وعينات وتصنيع وتركيب تحت قائد توريفا واحد.",
    pointsEn: [
      "Shop drawings and on-site mockups",
      "Modular joinery and feature walls",
      "Snagging and warranty handover",
    ],
    pointsAr: [
      "رسومات تنفيذية وmockups ميدانية",
      "نجارة معيارية وجدران مميزة",
      "إغلاق ملاحظات وتسليم بضمان",
    ],
    proofEn: "Rafal Pavilions · Diriyah — sales environment execution",
    proofAr: "بافيلions الراف · الدرعية — تنفيذ بيئة مبيعات",
    relatedCaseSlug: "rafal-pavilions",
  },
] as const;

export function getServiceLanding(slug: string): ServiceLanding | undefined {
  return SERVICE_LANDINGS.find((s) => s.slug === slug);
}

export function serviceLandingText(landing: ServiceLanding, locale: Locale) {
  const isAr = locale === "ar";
  return {
    title: isAr ? landing.titleAr : landing.titleEn,
    intro: isAr ? landing.introAr : landing.introEn,
    points: isAr ? landing.pointsAr : landing.pointsEn,
    proof: isAr ? landing.proofAr : landing.proofEn,
    whatsapp: isAr ? landing.whatsappAr : landing.whatsappEn,
  };
}
