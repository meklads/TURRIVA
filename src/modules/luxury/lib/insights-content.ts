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
      "تفشل كثير من مشاريع التشطيب في فجوة التسليم بين نية التصميم وواقع الموقع. تغلق توريفa هذه الفجوة ببرنامج تنفيذ واحد: معاينة، رسومات تنفيذية، اعتماد مواد، إنتاج مصنع، لوجستيات، تركيب، إغلاق ملاحظات، وتسليم موثق.",
      "في الفلل يبدأ المسار غالباً بعد جلسة 3D أو مخططات مستوردة. في مشاريع المطورين والمعارض قد تزوّد Graphics House أصولاً سينمائية وطبقات ماكيت ذكي بينما تتولى توريفa كل ما يُبنى ويُركّب ويُضمَن في الموقع.",
      "العينات ليست شكلية — تُعتمد التشطيبات والـ hardware مادياً قبل الشراء. التصنيع وفق ملفات معتمدة؛ فرق الموقع تركّب وفق تخطيطات verified. قائد توريفa واحد مسؤول حتى يوم الافتتاح.",
    ],
  },
  {
    slug: "exhibition-launch-with-graphics-house",
    tagEn: "Tasami Group",
    tagAr: "مجموعة تسامi",
    titleEn: "When a launch needs CGI and physical delivery together",
    titleAr: "عندما يحتاج الإطلاق CGI وتسليم مادي معاً",
    summaryEn: "How Graphics House visualization and Turriva field execution complement each other on developer programmes.",
    summaryAr: "كيف يكمل تصور Graphics House والتنفيذ الميداني لتوريفa في برامج المطورين.",
    readMinutes: 5,
    bodyEn: [
      "Developer launches in Saudi Arabia often need two proofs at once: cinematic storytelling for investors and a physical sales environment buyers can walk through. Tasami Group splits these disciplines cleanly — Graphics House for visual launch systems, Turriva for spatial execution.",
      "On programmes like Rafal Pavilions or institutional exhibitions such as the Humanity Exhibition at the Muslim World League, creative direction and CGI may come from Graphics House while Turriva delivers joinery, exhibition structures, interior fit-out, and installation.",
      "The benefit for clients is coordination: aligned visual language from film to finished space, fewer vendor handoffs, and one group routing when scope spans creative and physical layers.",
    ],
    bodyAr: [
      "إطلاقات المطورين في السaudi غالباً تحتاج إثباتين: سرد سينمائي للمستثمرين وبيئة مبيعات مادية. تقسّم مجموعة تسامi التخصصات — Graphics House لأنظمة الإطلاق البصرية، توريفa للتنفيذ المكاني.",
      "في برامج مثل بافيلions الراف أو معرض الإنسانية في رابطة العالم الإسلامي، قد يأتي التوجه الإبداعي من Graphics House بينما تسلّم توريفa النجارة والهياكل والتشطيب والتركيب.",
      "الفائدة للعميل: لغة بصرية متسقة من الفيلم إلى الفراغ المنfinished، تقليل تسليمات الموردين، ومجموعة واحدة تنسّق عندما يمتد النطاق للطبقتين.",
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
      "Modular production at factory tolerance (0.1 mm) reduces site surprises. Homeowners approve layouts in 3D, touch physical samples on site, then receive cut-to-fit modules installed by Turriva teams — documented on Ruwaq PRO tours as reference quality for the Western Region.",
      "For hospitality batches in Makkah, wet-zone porcelain and acoustic gypsum add operational durability. The same execution model scales from one villa to 120+ units with phased handover.",
    ],
    bodyAr: [
      "فلل الخليج تحتاج مطابخ تتحمل الرطوبة والاستخدام اليومي وضمانات طويلة. تحدد توريفa هياكل مقاومة للرطوبة وتشطيبات PET وlacquer مختبرة وhardware soft-close من شركاء من الدرجة الأولى.",
      "الإنتاج المعياري بدقة مصنع (0.1 مم) يقلل مفاجآت الموقع. يعتمد أصحاب المنازل التخطيطات في 3D ويلمسون عينات مادية ثم تُركّب وحدات cut-to-fit — موثّقة في جولات Ruwaq PRO كمرجع جودة.",
      "لدفعات الضيافة في مكة، بورسلان المناطق الرطبة وجبس acoustic يضيفان متانة تشغيلية. نفس النموذج يتوسع من فيلا واحدة إلى 120+ وحدة.",
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
