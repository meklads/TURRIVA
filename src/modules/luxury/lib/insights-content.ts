import type { Locale } from "@/shared/i18n/locale";

export type InsightArticle = {
  slug: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  bodyEn: readonly string[];
  bodyAr: readonly string[];
  tagEn: string;
  tagAr: string;
  readMinutes: number;
};

export const INSIGHT_ARTICLES: readonly InsightArticle[] = [
  {
    slug: "before-design-to-handover",
    tagEn: "Process",
    tagAr: "العملية",
    titleEn: "From approved 3D to handover: the Turriva execution path",
    titleAr: "من 3D المعتمد إلى التسليم: مسار تنفيذ توريفا",
    summaryEn: "How technical development, sampling, fabrication, and site installation connect under one accountable team.",
    summaryAr: "كيف يرتبط التطوير الفني والعينات والتصنيع والتركيب تحت فريق واحد.",
    readMinutes: 6,
    bodyEn: [
      "Most fit-out failures happen in the handoff between design intent and site reality. Turriva closes that gap with a single execution programme: survey, shop drawings, material approval, factory production, logistics, installation, snagging, and documented handover.",
      "For villas, the journey often starts after a 3D session or imported plans. For developer and exhibition work, Graphics House may supply cinematic assets and smart maquette layers while Turriva owns everything that must be built, installed, and warrantied on site.",
      "Sampling is not cosmetic — physical finishes and hardware references are signed off before procurement. Manufacturing runs to approved files; site teams install against laser-verified layouts. One Turriva lead remains accountable through opening day.",
    ],
    bodyAr: [
      "تفشل كثير من مشاريع التشطيب في فجوة التسليم بين نية التصميم وواقع الموقع. تغلق توريفا هذه الفجوة ببرنامج تنفيذ واحد: معاينة، رسومات تنفيذية، اعتماد مواد، إنتاج مصنع، لوجستيات، تركيب، إغلاق ملاحظات، وتسليم موثق.",
      "في الفلل يبدأ المسار غالباً بعد جلسة 3D أو مخططات مستوردة. في مشاريع المطورين والمعارض قد تزوّد Graphics House أصولاً سينمائية وطبقات ماكيت ذكي بينما تتولى توريفا كل ما يُبنى ويُركّب ويُضمَن في الموقع.",
      "العينات ليست شكلية — تُعتمد التشطيبات والـ hardware مادياً قبل الشراء. التصنيع وفق ملفات معتمدة؛ فرق الموقع تركّب وفق تخطيطات verified. قائد توريفا واحد مسؤول حتى يوم الافتتاح.",
    ],
  },
  {
    slug: "exhibition-launch-with-graphics-house",
    tagEn: "Tasami Group",
    tagAr: "مجموعة تسامي",
    titleEn: "When a launch needs CGI and physical delivery together",
    titleAr: "عندما يحتاج الإطلاق CGI وتسليم مادي معاً",
    summaryEn: "How Graphics House visualization and Turriva field execution complement each other on developer programmes.",
    summaryAr: "كيف يكمل تصور Graphics House والتنفيذ الميداني لتوريفا في برامج المطورين.",
    readMinutes: 5,
    bodyEn: [
      "Developer launches in Saudi Arabia often need two proofs at once: cinematic storytelling for investors and a physical sales environment buyers can walk through. Tasami Group splits these disciplines cleanly — Graphics House for visual launch systems, Turriva for spatial execution.",
      "On programmes such as Rafal Pavilions or the Humanity Exhibition, creative direction and CGI may come from Graphics House. Those pieces are shown as selected team experience, not as historical Turriva-branded contracts.",
      "The benefit for clients is coordination: aligned visual language from film to finished space, fewer vendor handoffs, and one group routing when scope spans creative and physical layers.",
    ],
    bodyAr: [
      "إطلاقات المطورين في السعودية غالباً تحتاج إثباتين: سرد سينمائي للمستثمرين وبيئة مبيعات مادية. تقسّم مجموعة تسامي التخصصات — Graphics House لأنظمة الإطلاق البصرية، توريفا للتنفيذ المكاني.",
      "في برامج مثل أجنحة الراف أو معرض الإنسانية، قد يأتي التوجه الإبداعي من Graphics House. تُعرض هذه القطع كخبرة فريق مختارة، لا كعقود تاريخية باسم توريفا.",
      "الفائدة للعميل: لغة بصرية متسقة من الفيلم إلى الفراغ المنجز، تقليل تسليمات الموردين، ومجموعة واحدة تنسّق عندما يمتد النطاق للطبقتين.",
    ],
  },
  {
    slug: "modular-kitchen-gulf-homes",
    tagEn: "Residential",
    tagAr: "سكني",
    titleEn: "Modular kitchens for Gulf climate: materials that survive daily life",
    titleAr: "مطابخ معيارية لمناخ الخليج: مواد تتحمل الحياة اليومية",
    summaryEn: "Moisture-resistant cores, hardware selection, and factory tolerance for Jeddah and Makkah villas.",
    summaryAr: "نوى مقاومة للرطوبة واختيار hardware ودقة مصنع لفلل جدة ومكة.",
    readMinutes: 7,
    bodyEn: [
      "Gulf villas demand kitchens that handle humidity, heavy daily use, and long warranty expectations. Turriva specifies moisture-resistant carcasses, PET and lacquer finishes tested for local conditions, and soft-close hardware from tier-one partners.",
      "Samples are agreed before fabrication, which reduces site surprises. Layouts are approved, materials are checked on site, then modules are installed — without publishing a factory-tolerance figure we have not verified.",
      "For hospitality batches, wet-zone finishes and acoustic treatment add operational durability. The same model can scale with phased handover. Unit counts are not published until a contract figure is confirmed.",
    ],
    bodyAr: [
      "فلل الخليج تحتاج مطابخ تتحمل الرطوبة والاستخدام اليومي وضمانات طويلة. تحدد توريفا هياكل مقاومة للرطوبة وتشطيبات PET وlacquer مختبرة وhardware soft-close من شركاء من الدرجة الأولى.",
      "اعتماد العينات قبل التصنيع يقلل مفاجآت الموقع. تُعتمد المخططات وتُراجع الخامات في الموقع ثم تُركّب الوحدات — دون نشر رقم دقة مصنع لم يُتحقق منه.",
      "في دفعات الضيافة، تشطيب المناطق الرطبة والمعالجة الصوتية يضيفان متانة تشغيلية. النموذج نفسه يمكن أن يتوسع بتسليم مرحلي. أعداد الوحدات لا تُنشر قبل تأكيد رقم العقد.",
    ],
  },
  {
    slug: "portfolio-access-for-professionals",
    tagEn: "Portfolio",
    tagAr: "البورتفوليو",
    titleEn: "Why Turriva gates the 2026 folio behind a company email",
    titleAr: "لماذا يتطلب فوليو 2026 بريداً وظيفياً",
    summaryEn: "How verified B2B access protects confidential project documentation while keeping public case highlights open.",
    summaryAr: "كيف يحمي الوصول المهني الموثّق وثائق المشاريع السرية مع إبقاء النماذج العامة متاحة.",
    readMinutes: 4,
    bodyEn: [
      "Turriva publishes selected project highlights on Our work for public discovery. The full 2026 folio PDF — with deeper programme documentation — is available only on the Portfolio page after company email verification.",
      "Work emails are validated against business domains. Personal providers such as Gmail, Hotmail, and iCloud are rejected so folio access stays aligned with architects, developers, contractors, and procurement teams evaluating fit-out partners.",
      "After verification, a secure session opens the in-browser viewer with download and full-screen options. Access events are logged so Turriva can follow up on relevant B2B opportunities without exposing the PDF to open indexing.",
    ],
    bodyAr: [
      "تنشر توريفا نماذج مشاريع مختارة في صفحة أعمالنا للاكتشاف العام. ملف PDF الكامل لفوليو 2026 — مع توثيق أعمق للبرامج — متاح فقط في صفحة البورتفوليو بعد التحقق من البريد الوظيفي.",
      "يُتحقق من البريد مقابل نطاقات الشركات. لا نقبل مزودي البريد الشخصي مثل Gmail وHotmail وiCloud حتى يبقى الوصول موجهاً للمهندسين والمطورين والمقاولين وفرق المشتريات.",
      "بعد التحقق، تفتح جلسة آمنة العارض داخل المتصفح مع التحميل وملء الشاشة. تُسجّل طلبات الوصول لمتابعة فرص B2B دون تعريض PDF للفهرسة العامة.",
    ],
  },
];

export function getInsightArticle(slug: string): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.slug === slug);
}

export function insightText(article: InsightArticle, locale: Locale) {
  const isAr = locale === "ar";
  return {
    title: isAr ? article.titleAr : article.titleEn,
    summary: isAr ? article.summaryAr : article.summaryEn,
    body: isAr ? article.bodyAr : article.bodyEn,
    tag: isAr ? article.tagAr : article.tagEn,
  };
}
