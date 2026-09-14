/**
 * Draft / virtual permanent sales-gallery case study.
 * Not published until real project assets, client approval, and final scope are ready.
 * Pairing model on the live site:
 * - Temporary: humanity-exhibition-mwl
 * - Permanent (live): anan-eskan-sales-gallery
 * - Permanent (virtual draft below): fill and move into CASE_STUDIES when approved
 */
export const PERMANENT_SALES_GALLERY_DRAFT = {
  status: "draft" as const,
  fitMode: "permanent" as const,
  slug: "permanent-sales-gallery-model",
  titleEn: "Permanent Sales Gallery, Decor Design & Build",
  titleAr: "صالة بيع دائمة, تصميم وتنفيذ ديكور",
  categoryEn: "Permanent sales gallery",
  categoryAr: "صالة بيع دائمة",
  summaryEn:
    "Virtual model for a permanent sales-gallery décor: lasting finishes, buyer path, display models, and opening-ready handover.",
  summaryAr:
    "نموذج افتراضي لتجهيز ديكور دائم لصالة بيع: تشطيبات ثابتة، ومسار المشتري، ومجسمات عرض، وتسليم جاهز للافتتاح.",
  ownedScopeEn: [
    "Permanent décor design",
    "Permanent décor execution",
    "Display / architectural models",
    "Lighting and material coordination",
    "Opening-ready handover",
  ],
  ownedScopeAr: [
    "تصميم ديكور دائم",
    "تنفيذ ديكور دائم",
    "مجسمات عرض / معمارية",
    "تنسيق إضاءة ومواد",
    "تسليم جاهز للافتتاح",
  ],
  contrastWithTemporaryEn:
    "Unlike the MWL temporary hall, this model is built to remain: durable finishes, lasting joinery, and a presentation path used repeatedly by the sales team.",
  contrastWithTemporaryAr:
    "بخلاف قاعة العرض المؤقتة لرابطة العالم الإسلامي، هذا النموذج يُبنى ليبقى: تشطيبات ثابتة، ونجارة دائمة، ومسار عرض يستخدمه فريق المبيعات بشكل متكرر.",
  challengeTemplateEn:
    "A developer needs a permanent sales gallery that presents the project clearly to buyers every day, not a short-run exhibition install.",
  challengeTemplateAr:
    "مطور يحتاج صالة بيع دائمة تعرض المشروع بوضوح للمشترين يومياً، لا تجهيز معرض قصير الأمد.",
  notesForFill: [
    "Replace slug/title/location when the real or approved virtual project is ready",
    "Add photography of permanent finishes / buyer path / models",
    "Do not publish until client naming and owned-scope wording are confirmed",
    "Keep contrast clear vs MWL temporary: durable vs short-run",
  ],
} as const;
