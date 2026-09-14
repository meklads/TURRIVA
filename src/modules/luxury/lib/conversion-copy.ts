import type { Locale } from "@/shared/i18n/locale";

export type ProductTier = {
  id: string;
  number: string;
  eyebrowAr: string;
  eyebrowEn: string;
  titleAr: string;
  titleEn: string;
  bodyAr: string;
  bodyEn: string;
  pointsAr: readonly string[];
  pointsEn: readonly string[];
  href: string;
  media: {
    type: "video" | "image";
    src: string;
    poster?: string;
  };
};

/** Flagship specialty offers on the homepage. Extended delivery lives in the product menu. */
export const PRODUCT_TIERS: readonly ProductTier[] = [
  {
    id: "sales-environment",
    number: "01",
    eyebrowAr: "التخصص الرئيسي",
    eyebrowEn: "Flagship specialty",
    titleAr: "بيئات البيع العقاري",
    titleEn: "Real Estate Sales Environments",
    bodyAr:
      "صالات البيع وتجربة المشروع: المكان الذي يستقبل فيه المطوّر عملاءه ويجعل المشروع مفهوماً وملموساً حتى يوم الافتتاح.",
    bodyEn:
      "Sales galleries and project experience: the place where developers receive buyers and make the project clear and tangible through opening day.",
    pointsAr: ["مركز بيع / صالة مبيعات", "تجربة المشروع", "جاهزية الافتتاح"],
    pointsEn: ["Sales gallery / center", "Project experience", "Opening readiness"],
    href: "/real-estate-experience",
    media: {
      type: "image",
      src: "/brand/turriva/makkah-charter-04.jpeg",
    },
  },
  {
    id: "show-unit",
    number: "02",
    eyebrowAr: "وحدة العرض",
    eyebrowEn: "Show Unit",
    titleAr: "فيلا أو شقة عيّنة بمعيار المشروع",
    titleEn: "Show villa or apartment to the project standard",
    bodyAr:
      "وحدة تسويقية: تكوين وتشطيب وتأثيث يحوّل العرض من مخطط إلى مسار يمشي فيه المشتري.",
    bodyEn:
      "A marketing unit: composition, finishes, and furnishing that turn plans into a path the buyer can walk.",
    pointsAr: ["فيلا عرض", "شقة عيّنة", "معيار معيشة واضح"],
    pointsEn: ["Show villa", "Sample apartment", "Clear living standard"],
    href: "/show-unit",
    media: {
      type: "image",
      src: "/brand/turriva/inspiration/living-walnut-interior.webp",
    },
  },
  {
    id: "launch-space",
    number: "03",
    eyebrowAr: "مساحة الإطلاق والتنفيذ الأوسع",
    eyebrowEn: "Launch space & extended delivery",
    titleAr: "إطلاق ومعارض، وضيافة وتجاري وسكني عند الحاجة",
    titleEn: "Launch and exhibition, plus hospitality, commercial, and residential when required",
    bodyAr:
      "بيئات إطلاق ومعارض، مع امتداد التنفيذ المكاني إلى الضيافة والتجاري والسكني والتجهيز دون أن يغيّر ذلك تعريف الشركة.",
    bodyEn:
      "Launch and exhibition environments, with spatial delivery extending to hospitality, commercial, residential, and fit-out without redefining the company.",
    pointsAr: ["مركز إطلاق / معرض", "ضيافة وتجاري", "Fit-out ونجارة"],
    pointsEn: ["Launch / exhibition", "Hospitality & commercial", "Fit-out & joinery"],
    href: "/design-build",
    media: {
      type: "video",
      src: "/brand/graphics-house/rafal-pavilions-loop.mp4",
      poster: "/brand/graphics-house/rafal-pavilions-poster.jpg",
    },
  },
] as const;

export type DemoProjectType =
  | "developer"
  | "hospitality"
  | "commercial"
  | "exhibition"
  | "residential"
  | "other";
export type DemoTimeline = "urgent" | "1_3_months" | "planning";

export function getConversionCopy(locale: Locale) {
  const isAr = locale === "ar";
  return {
    heroEyebrow: isAr ? "مجموعة تسامي · تصميم وتنفيذ الديكور" : "Tasami Group · Décor design & build",
    heroTitle: isAr ? "تنفيذ مكاني وتسليم مادي" : "Spatial Execution & Physical Delivery",
    heroTitleAccent: isAr
      ? "تصميم وتنفيذ الديكور — من التصميم المعتمد إلى واقع جاهز للتسليم."
      : "Décor design & build — from approved design to delivered reality.",
    heroPillars: isAr
      ? "صالات البيع · وحدات العرض · مساحات الإطلاق"
      : "Sales Galleries · Show Units · Launch Spaces",
    heroSubtitle: isAr
      ? "نصمّم الديكور وننفّذه كمساحة جاهزة للاستخدام والافتتاح. تعاقد مع توريفا وحدها. المجموعة تُستدعى حين يحتاجها المشروع."
      : "We design the décor and deliver it as a space ready to use or open. Contract Turriva alone. The group joins only when the project needs it.",
    heroCapability: isAr
      ? "تطوير فني · تصنيع · تركيب · تسليم"
      : "Technical Development · Fabrication · Installation · Handover",
    ctaDemo: isAr ? "ناقش مشروعك" : "Discuss your project",
    ctaDemoEn: "Discuss your project",
    ctaExplore: isAr ? "استكشف ما نقدّمه" : "Explore what we deliver",
    logoLabel: isAr
      ? "مطورون ومؤسسات وعلامات عملنا معها ضمن منظومة المجموعة"
      : "Developers, institutions, and brands served across the group",
    tiersEyebrow: isAr ? "التخصص ثم القدرة" : "Specialty, then capacity",
    tiersTitle: isAr
      ? "بيئات البيع العقاري كسلاح متخصص. والتنفيذ المكاني الأوسع يثبت القدرة."
      : "Sales environments as the specialty weapon. Broader spatial delivery proves capacity.",
    tiersIntro: isAr
      ? "نبدأ من صالات البيع ووحدات العرض ومساحات الإطلاق لأنها أقوى باب مع المطورين. الضيافة والتجاري والمعارض والسكني والتجهيز تبقى مفتوحة دون أن تصبح تعريف العلامة."
      : "We lead with sales galleries, show units, and launch spaces because they are the strongest door with developers. Hospitality, commercial, exhibition, residential, and fit-out stay open without becoming the brand definition.",
    videoEyebrow: isAr ? "التنفيذ على الأرض" : "Execution on the ground",
    videoTitle: isAr ? "من المصنع إلى الموقع" : "From factory to site",
    journey: {
      eyebrow: isAr ? "من الفكرة إلى الواقع المادي" : "From concept to physical reality",
      title: isAr ? "توريفا تملك مسار التنفيذ" : "Turriva owns the execution path",
      intro: isAr
        ? "العميل لا يشتري نجارة ودهاناً وتركيباً متفرقة. يشتري جهة مسؤولة عن تسليم المساحة. نربط التطوير الفني والتصنيع والتركيب والتسليم، مع جرافيكس هاوس حين تُطلب الطبقة البصرية."
        : "Clients do not buy scattered joinery, paint, and install. They buy accountability for getting the space delivered. We connect technical development, fabrication, installation, and handover, with Graphics House when the visual layer is required.",
      steps: isAr
        ? [
            { title: "التطوير الفني", body: "مخططات تنفيذ، كميات، مواصفات، وعينات قبل التصنيع." },
            { title: "التصنيع", body: "إنتاج مصنع وتنسيق توريد وفق المعتمد." },
            { title: "التركيب", body: "تنسيق موقع وتركيب ميداني وضبط جودة." },
            { title: "التسليم", body: "جاهزية الاستخدام أو الافتتاح مع قائمة ملاحظات وإغلاقها." },
            { title: "الطبقة الإبداعية", body: "جرافيكس هاوس للهوية والـ CGI والفيلم حين يخدم المشروع." },
          ]
        : [
            { title: "Technical development", body: "Shop drawings, quantities, specifications, and samples before production." },
            { title: "Fabrication", body: "Factory production and procurement aligned to the approved package." },
            { title: "Installation", body: "Site coordination, field install, and quality control." },
            { title: "Handover", body: "Ready to use or open, with snagging closed." },
            { title: "Creative layer", body: "Graphics House for identity, CGI, and film when the project needs it." },
          ],
    },
    demo: {
      title: isAr ? "ناقش مشروعك" : "Discuss your project",
      subtitle: isAr
        ? "أرسل المخطط أو نطاق العمل أو موعد التسليم، ونحدد الخطوة التالية."
        : "Send drawings, scope, or the handover date, and we will define the next step.",
      stepObjective: isAr ? "المطلوب" : "What is needed",
      stepProject: isAr ? "نوع المشروع" : "Project type",
      stepTimeline: isAr ? "الجدول" : "Timeline",
      stepContact: isAr ? "التواصل" : "Contact",
      next: isAr ? "التالي" : "Next",
      back: isAr ? "رجوع" : "Back",
      submit: isAr ? "أرسل الطلب" : "Send request",
      success: isAr ? "وصلنا طلبك. سنعود إليك قريباً." : "We received your request. We’ll be in touch soon.",
      error: isAr ? "تعذر الإرسال. حاول مرة أخرى أو واتساب." : "Could not submit. Try again or WhatsApp us.",
      objectivePrompt: isAr
        ? "ماذا تحتاج توريفا أن تسلم؟ وما موعد الجاهزية؟"
        : "What should Turriva deliver, and when must it be ready?",
      objectivePlaceholder: isAr
        ? "مثال: صالة بيع، وحدة عرض، تجهيز فندق، جناح معرض، مطابخ متكررة…"
        : "e.g. sales gallery, show unit, hotel fit-out, exhibition pavilion, repeat kitchens…",
      projectTypes: [
        { id: "developer" as const, label: isAr ? "مطور / بيئة بيع" : "Developer / sales environment" },
        { id: "hospitality" as const, label: isAr ? "ضيافة / فندق" : "Hospitality / hotel" },
        { id: "commercial" as const, label: isAr ? "تجاري / تجزئة" : "Commercial / retail" },
        { id: "exhibition" as const, label: isAr ? "معرض / إطلاق" : "Exhibition / launch" },
        { id: "residential" as const, label: isAr ? "سكني / فيلا" : "Residential / villa" },
        { id: "other" as const, label: isAr ? "أخرى" : "Other" },
      ],
      timelines: [
        { id: "urgent" as const, label: isAr ? "عاجل: أقل من 3 أسابيع" : "Urgent: under 3 weeks" },
        { id: "1_3_months" as const, label: isAr ? "1-3 أشهر" : "1-3 months" },
        { id: "planning" as const, label: isAr ? "مرحلة تخطيط" : "Planning phase" },
      ],
      fields: {
        name: isAr ? "الاسم" : "Name",
        company: isAr ? "الشركة / الجهة" : "Company / organisation",
        role: isAr ? "المنصب" : "Role",
        phone: isAr ? "الجوال / واتساب" : "Phone / WhatsApp",
        email: isAr ? "البريد" : "Email",
      },
    },
    caseStudy: {
      challenge: isAr ? "التحدي" : "The challenge",
      solution: isAr ? "النطاق الذي ملكناه" : "Scope owned",
      results: isAr ? "ما سُلّم والنتيجة" : "What was delivered & the result",
      fitTemporary: isAr ? "ديكور مؤقت" : "Temporary décor",
      fitPermanent: isAr ? "ديكور دائم" : "Permanent décor",
    },
  };
}
