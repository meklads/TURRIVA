export type ProfessionalResourceSlug =
  | "joinery-spec-overview"
  | "modular-kitchen-typicals"
  | "hospitality-batch-guide"
  | "gulf-compliance-notes";

export type ProfessionalResource = {
  slug: ProfessionalResourceSlug;
  filename: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
};

export const PROFESSIONAL_RESOURCES: readonly ProfessionalResource[] = [
  {
    slug: "joinery-spec-overview",
    filename: "joinery-spec-overview.md",
    titleEn: "Joinery specification overview",
    titleAr: "نظرة عامة على مواصفات النجارة",
    summaryEn: "Tolerance bands, QC checkpoints, and handover documentation for B2B programmes.",
    summaryAr: "نطاقات التسامح، نقاط فحص الجودة، وتوثيق التسليم لبرامج B2B.",
  },
  {
    slug: "modular-kitchen-typicals",
    filename: "modular-kitchen-typicals.md",
    titleEn: "Modular kitchen typical details",
    titleAr: "تفاصيل typicals للمطبخ المعياري",
    summaryEn: "Standard module sizes, wet-zone notes, and factory-to-site coordination.",
    summaryAr: "مقاسات الوحدات القياسية، ملاحظات المناطق الرطبة، وتنسيق المصنع مع الموقع.",
  },
  {
    slug: "hospitality-batch-guide",
    filename: "hospitality-batch-guide.md",
    titleEn: "Hospitality batch programme guide",
    titleAr: "دليل برامج الضيافة على دفعات",
    summaryEn: "Phased delivery, floor-by-floor snagging, and opening-ready handover.",
    summaryAr: "تسليم مرحلي، إغلاق ملاحظات لكل طابق، وتسليم جاهز للافتتاح.",
  },
  {
    slug: "gulf-compliance-notes",
    filename: "gulf-compliance-notes.md",
    titleEn: "Gulf compliance & environment notes",
    titleAr: "ملاحظات المطابقة وبيئة الخليج",
    summaryEn: "Moisture-resistant specs, SASO references, and regional install considerations.",
    summaryAr: "مواصفات مقاومة الرطوبة، مراجع SASO، واعتبارات التركيب في المنطقة.",
  },
] as const;

export function getProfessionalResource(slug: string): ProfessionalResource | undefined {
  return PROFESSIONAL_RESOURCES.find((r) => r.slug === slug);
}
