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

/** Core positioning offers (homepage). Extended spatial delivery lives in the product menu. */
export const PRODUCT_TIERS: readonly ProductTier[] = [
  {
    id: "sales-environment",
    number: "01",
    eyebrowAr: "بيئة البيع العقاري",
    eyebrowEn: "Real Estate Sales Environment",
    titleAr: "صالات البيع وتجربة المشروع في مكان واحد",
    titleEn: "Sales galleries and project experience in one place",
    bodyAr:
      "نصمّم وننفّذ بيئة يستقبل فيها المطوّر عملاءه: مركز البيع، مسار العرض، والتجهيز الذي يجعل المشروع مفهوماً وملموساً.",
    bodyEn:
      "We design and deliver the setting where developers receive buyers: the sales gallery, the presentation path, and the fit-out that makes the project clear and tangible.",
    pointsAr: ["مركز بيع / صالة مبيعات", "تجربة المشروع", "جاهزية يوم الافتتاح"],
    pointsEn: ["Sales gallery / center", "Project experience", "Opening-day readiness"],
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
    titleAr: "فيلا أو شقة عيّنة يختبر فيها المشتري أسلوب المعيشة",
    titleEn: "A show villa or apartment where living quality becomes experience",
    bodyAr:
      "وحدة تسويقية بمعيار المشروع: تكوين، تشطيب، وتأثيث يحوّل العرض من مخطط إلى مسار يمشي فيه المشتري.",
    bodyEn:
      "A marketing unit to the project standard: composition, finishes, and furnishing that turn plans into a path the buyer can walk.",
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
    eyebrowAr: "مساحة الإطلاق",
    eyebrowEn: "Project Launch Space",
    titleAr: "أجنحة ومعارض إطلاق تدعم لحظة الافتتاح",
    titleEn: "Launch centers and exhibition environments for opening moment",
    bodyAr:
      "بيئات إطلاق ومعارض موقّتة أو دائمة تخدم مرحلة البيع الأولى، مع إمكانية استكمال الطبقة الإبداعية عبر جرافيكس هاوس.",
    bodyEn:
      "Launch centers and exhibition environments that serve the first sales phase, with creative layers available through Graphics House when the brief requires them.",
    pointsAr: ["مركز إطلاق", "بيئة معرض", "تكامل إبداعي عند الحاجة"],
    pointsEn: ["Launch center", "Exhibition environment", "Creative integration when needed"],
    href: "/real-estate-experience",
    media: {
      type: "video",
      src: "/brand/graphics-house/rafal-pavilions-loop.mp4",
      poster: "/brand/graphics-house/rafal-pavilions-poster.jpg",
    },
  },
] as const;

export type DemoProjectType = "sales_gallery" | "show_unit" | "launch_exhibition" | "extended_spatial";
export type DemoTimeline = "urgent" | "1_3_months" | "planning";

export function getConversionCopy(locale: Locale) {
  const isAr = locale === "ar";
  return {
    heroEyebrow: isAr ? "بيئات البيع العقاري · مجموعة تسامي" : "Real Estate Sales Environments · Tasami Group",
    heroTitle: isAr ? "بيئات البيع العقاري" : "Real Estate Sales Environments",
    heroTitleAccent: isAr ? "تُصمَّم للإطلاق. وتُبنى لتدعم قرار الشراء." : "Designed to launch. Built to sell.",
    heroPillars: isAr
      ? "صالات البيع · وحدات العرض · تجارب المشروع"
      : "Sales Galleries · Show Units · Project Experiences",
    heroSubtitle: isAr
      ? "من الفكرة إلى يوم الافتتاح. توريفا ذراع التنفيذ المكاني، وجرافيكس هاوس تُكمِل الطبقة الإبداعية حين يخدم ذلك مسار البيع."
      : "From concept to opening day. Turriva is the spatial execution arm; Graphics House completes the creative layer when it serves the sales journey.",
    heroCapability: isAr ? "تصميم مكاني · تجربة · تنفيذ" : "Spatial Design · Experience · Build",
    ctaDemo: isAr ? "ابدأ بموجز الإطلاق" : "Start with a launch brief",
    ctaDemoEn: "Start with a launch brief",
    ctaExplore: isAr ? "استكشف بيئات البيع" : "Explore sales environments",
    logoLabel: isAr ? "يثق بنا مطورون ومؤسسات رائدة" : "Trusted by leading developers and institutions",
    tiersEyebrow: isAr ? "العروض الأساسية" : "Core offers",
    tiersTitle: isAr ? "ثلاثة عروض تبيع التخصص. والباقي يُثبت القدرة." : "Three offers that sell the specialty. The rest prove capacity.",
    tiersIntro: isAr
      ? "نبدأ من بيئة البيع ووحدة العرض ومساحة الإطلاق. مسارات التصميم والتنفيذ والضيافة والتجاري تبقى متاحة دون أن تعرّف العلامة."
      : "We lead with the sales environment, show unit, and launch space. Design & build, hospitality, and commercial remain available without defining the brand.",
    videoEyebrow: isAr ? "التنفيذ على الأرض" : "Execution on the ground",
    videoTitle: isAr ? "شاهد البيئات وهي تعمل" : "See the environments at work",
    journey: {
      eyebrow: isAr ? "من إطلاق المشروع إلى يوم الافتتاح" : "From project launch to opening day",
      title: isAr ? "مسار واحد يخدم هدف البيع" : "One path in service of the sales objective",
      intro: isAr
        ? "قبل التصميم نفهم ماذا يجب أن يختبر العميل. ثم نربط التصور والتنفيذ والتجربة حتى جاهزية الافتتاح، مع جرافيكس هاوس حين تُطلب الهوية أو الـ CGI أو المحتوى."
        : "Before design, we clarify what the buyer should experience. Then we connect visualization, build, and experience through opening readiness, with Graphics House when identity, CGI, or content is required.",
      steps: isAr
        ? [
            { title: "تصوّر", body: "هوية المشروع والـ CGI والفيلم حين يوضحان العرض." },
            { title: "تصميم", body: "بيئة البيع ووحدة العيّنة ومسار المشتري." },
            { title: "تنفيذ", body: "تصنيع وتركيب وتسليم ميداني وفق المعتمد." },
            { title: "تجربة", body: "مجسمات وشاشات ومواد تخدم الفهم، لا تستبدل المكان." },
            { title: "إطلاق", body: "جاهزية يوم الافتتاح لفريق المبيعات." },
          ]
        : [
            { title: "Visualize", body: "Project identity, CGI, and film when they clarify the offer." },
            { title: "Design", body: "The sales environment, sample unit, and buyer path." },
            { title: "Build", body: "Fabrication, install, and field handover to the approved scope." },
            { title: "Experience", body: "Models, screens, and materials that aid understanding without replacing the room." },
            { title: "Launch", body: "Opening-day readiness for the sales team." },
          ],
    },
    demo: {
      title: isAr ? "موجز إطلاق المشروع" : "Project launch brief",
      subtitle: isAr
        ? "نبدأ من هدف البيع، ثم الجدول والتواصل."
        : "We start from the sales objective, then timing and contact.",
      stepObjective: isAr ? "هدف البيع" : "Sales objective",
      stepProject: isAr ? "نوع البيئة" : "Environment type",
      stepTimeline: isAr ? "الجدول" : "Timeline",
      stepContact: isAr ? "التواصل" : "Contact",
      next: isAr ? "التالي" : "Next",
      back: isAr ? "رجوع" : "Back",
      submit: isAr ? "أرسل الموجز" : "Send brief",
      success: isAr ? "وصلنا موجزك. سنعود إليك قريباً." : "We received your brief. We’ll be in touch soon.",
      error: isAr ? "تعذر الإرسال. حاول مرة أخرى أو واتساب." : "Could not submit. Try again or WhatsApp us.",
      objectivePrompt: isAr
        ? "ماذا تريد أن يختبر العميل يوم الافتتاح؟"
        : "What should the buyer experience on opening day?",
      objectivePlaceholder: isAr
        ? "مثال: فهم المخطط، تجربة الوحدة، الإحساس بمعيار التشطيب…"
        : "e.g. understand the masterplan, walk the unit, feel the finish standard…",
      projectTypes: [
        { id: "sales_gallery" as const, label: isAr ? "صالة / بيئة بيع" : "Sales gallery / environment" },
        { id: "show_unit" as const, label: isAr ? "وحدة / فيلا عرض" : "Show unit / villa" },
        { id: "launch_exhibition" as const, label: isAr ? "مساحة إطلاق / معرض" : "Launch space / exhibition" },
        { id: "extended_spatial" as const, label: isAr ? "تنفيذ مكاني أوسع" : "Extended spatial delivery" },
      ],
      timelines: [
        { id: "urgent" as const, label: isAr ? "عاجل: أقل من 3 أسابيع" : "Urgent: under 3 weeks" },
        { id: "1_3_months" as const, label: isAr ? "1-3 أشهر" : "1-3 months" },
        { id: "planning" as const, label: isAr ? "مرحلة تخطيط" : "Planning phase" },
      ],
      fields: {
        name: isAr ? "الاسم" : "Name",
        company: isAr ? "الشركة / المطوّر" : "Company / developer",
        role: isAr ? "المنصب" : "Role",
        phone: isAr ? "الجوال / واتساب" : "Phone / WhatsApp",
        email: isAr ? "البريد" : "Email",
      },
    },
    caseStudy: {
      challenge: isAr ? "التحدي" : "The Challenge",
      solution: isAr ? "حل توريفا" : "Turriva Solution",
      results: isAr ? "النتائج ومدة التسليم" : "Results & Delivery Timeframe",
    },
  };
}
