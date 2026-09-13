import type { Locale } from "@/shared/i18n/locale";

export type ProductTier = {
  id: string;
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

export const PRODUCT_TIERS: readonly ProductTier[] = [
  {
    id: "express-launch",
    eyebrowAr: "إطلاق بيئة البيع",
    eyebrowEn: "Sales launch environment",
    titleAr: "صالات ومعارض بيع جاهزة لافتتاح المبيعات",
    titleEn: "Sales galleries ready for opening day",
    bodyAr:
      "تصميم وتصنيع وتركيب لمركز البيع ووحدة العيّنة ضمن مسار تسليم مضبوط، يصل بالمشروع إلى جاهزية العرض في وقت قصير.",
    bodyEn:
      "Design, fabrication, and install for the sales gallery and sample unit on a disciplined path, so the project reaches presentation readiness on a short clock.",
    pointsAr: ["مركز بيع / جناح إطلاق", "وحدة عيّنة تسويقية", "تسليم ميداني منسّق"],
    pointsEn: ["Sales gallery / launch pavilion", "Marketing sample unit", "Coordinated field handover"],
    href: "/real-estate-experience",
    media: {
      type: "image",
      src: "/brand/turriva/makkah-charter-04.jpeg",
    },
  },
  {
    id: "flagship-spatial",
    eyebrowAr: "الطبقة المكانية مع التجربة",
    eyebrowEn: "Spatial layer with experience",
    titleAr: "المكان أولاً، ثم أدوات التجربة حين يخدمها الإطلاق",
    titleEn: "The space first, then experience tools when the launch needs them",
    bodyAr:
      "ننفّذ بيئة البيع، ونُكمِلها عند الحاجة بمجسمات وشاشات ومحتوى تفاعلي عبر جرافيكس هاوس ضمن منظومة تسامي، دون أن تحل التقنية محل المكان.",
    bodyEn:
      "We deliver the sales environment, then complete it when needed with models, screens, and interactive content through Graphics House in the Tasami ecosystem, without letting technology replace the room.",
    pointsAr: ["بيئة بيع مكتملة", "تكامل مع جرافيكس هاوس", "مسار مشتري واضح"],
    pointsEn: ["Complete sales environment", "Graphics House integration", "Clear buyer journey"],
    href: "/real-estate-experience",
    media: {
      type: "video",
      src: "/brand/graphics-house/rafal-pavilions-loop.mp4",
      poster: "/brand/graphics-house/rafal-pavilions-poster.jpg",
    },
  },
  {
    id: "proptech-sales",
    eyebrowAr: "وحدة العرض التسويقية",
    eyebrowEn: "Marketing show unit",
    titleAr: "شقة أو فيلا عيّنة يمشي فيها المشتري ويفهم المشروع",
    titleEn: "A sample apartment or villa the buyer walks and understands",
    bodyAr:
      "وحدة عرض مصمّمة ومفروشة بمعيار المشروع، لتعكس أسلوب المعيشة وتدعم فريق المبيعات على أرض الواقع.",
    bodyEn:
      "A show unit designed and furnished to the project standard, so living quality is tangible and the sales team has a place that works on the floor.",
    pointsAr: ["معيار معيشة واضح", "تجهيز كامل للعرض", "جاهزية لاستقبال المشترين"],
    pointsEn: ["Clear living standard", "Fully staged for presentation", "Ready to receive buyers"],
    href: "/show-unit",
    media: {
      type: "image",
      src: "/brand/turriva/projects/anan-eskan-gallery.jpg",
    },
  },
] as const;

export type DemoProjectType = "sales_gallery" | "masterplan" | "launch_exhibition" | "custom_spatial";
export type DemoTimeline = "urgent" | "1_3_months" | "planning";

export function getConversionCopy(locale: Locale) {
  const isAr = locale === "ar";
  return {
    heroTitle: isAr
      ? "نصمّم وننفّذ بيئات البيع العقاري ووحدات العرض التي يلتقي فيها المشروع بمشتريه."
      : "We design and deliver real-estate sales environments and show units where the project meets its buyers.",
    heroTitleAccent: isAr ? "من المخططات إلى جاهزية الافتتاح." : "From drawings to opening-ready.",
    heroSubtitle: isAr
      ? "ذراع التنفيذ المكاني لمجموعة تسامي. الطبقة المادية للإطلاق، ومع جرافيكس هاوس تُستكمل الطبقة الإبداعية حين يطلبها الموجز."
      : "Tasami Group’s spatial execution arm. The physical layer for launch, completed with Graphics House creative when the brief calls for it.",
    ctaDemo: isAr ? "اطلب تعارفاً على المشروع" : "Request a project introduction",
    ctaDemoEn: "Request a project introduction",
    ctaExplore: isAr ? "استكشف مسارات العمل" : "Explore our paths",
    logoLabel: isAr ? "يثق بنا مطورون ومؤسسات رائدة" : "Trusted by leading developers and institutions",
    tiersEyebrow: isAr ? "مسارات واضحة" : "Clear paths",
    tiersTitle: isAr ? "ثلاثة مداخل للعمل. اختر ما يناسب مرحلة إطلاقك." : "Three ways in. Choose what fits your launch stage.",
    tiersIntro: isAr
      ? "كل مسار بنطاق وجدول واضح، يبدأ من بيئة البيع ووحدة العيّنة، ويتسع عند الحاجة إلى التجربة الإبداعية."
      : "Each path has clear scope and timing, starting from the sales environment and sample unit, expanding into creative experience when required.",
    videoEyebrow: isAr ? "التنفيذ على الأرض" : "Execution on the ground",
    videoTitle: isAr ? "شاهد البيئات وهي تعمل" : "See the environments at work",
    demo: {
      title: isAr ? "اطلب تعارفاً على المشروع" : "Request a project introduction",
      subtitle: isAr
        ? "ثلاث خطوات موجزة. نعود إليك خلال يوم عمل."
        : "Three short steps. We reply within one business day.",
      stepProject: isAr ? "نوع المشروع" : "Project type",
      stepTimeline: isAr ? "الجدول" : "Timeline",
      stepContact: isAr ? "التواصل" : "Contact",
      next: isAr ? "التالي" : "Next",
      back: isAr ? "رجوع" : "Back",
      submit: isAr ? "أرسل الطلب" : "Submit request",
      success: isAr ? "وصلنا طلبك. سنتواصل قريباً." : "We received your request. We’ll be in touch soon.",
      error: isAr ? "تعذر الإرسال. حاول مرة أخرى أو واتساب." : "Could not submit. Try again or WhatsApp us.",
      projectTypes: [
        { id: "sales_gallery" as const, label: isAr ? "قاعة مبيعات" : "Sales gallery" },
        { id: "masterplan" as const, label: isAr ? "مخطط رئيسي عقاري" : "Real estate masterplan" },
        { id: "launch_exhibition" as const, label: isAr ? "معرض إطلاق" : "Launch exhibition" },
        { id: "custom_spatial" as const, label: isAr ? "تقنية مكانية مخصصة" : "Custom spatial tech" },
      ],
      timelines: [
        { id: "urgent" as const, label: isAr ? "عاجل: أقل من 3 أسابيع" : "Urgent: under 3 weeks" },
        { id: "1_3_months" as const, label: isAr ? "1-3 أشهر" : "1-3 months" },
        { id: "planning" as const, label: isAr ? "مرحلة تخطيط" : "Planning phase" },
      ],
      fields: {
        name: isAr ? "الاسم" : "Name",
        company: isAr ? "الشركة" : "Company",
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
    unitViewer: {
      eyebrow: isAr ? "عارض الوحدات التفاعلي" : "Interactive unit viewer",
      title: isAr
        ? "معاينة ثلاثية الأبعاد للمخطط. فلترة حية وتوفر فوري"
        : "Live 3D masterplan preview. Filter status, price, and type",
      intro: isAr
        ? "نموذج تجريبي لبرج الإطلاق: نقاط ساخنة على الطوابق، حالة الوحدة، واستفسار مباشر لفريق التسليم."
        : "Demo tower for launch galleries: floor hotspots, live availability, and inquire straight into the lead modal.",
      filtersLabel: isAr ? "فلاتر الوحدات" : "Unit filters",
      filterStatus: isAr ? "الحالة" : "Status",
      filterType: isAr ? "نوع الوحدة" : "Unit type",
      filterPrice: isAr ? "الحد الأقصى للسعر" : "Max price",
      hint: isAr ? "انقر طابقاً مضيئاً لفتح تفاصيل الوحدة" : "Tap a highlighted floor to open unit details",
      fallback: isAr
        ? "WebGL غير متاح على هذا الجهاز. استخدم قائمة الوحدات على اليمين."
        : "WebGL unavailable on this device. Use the unit list instead.",
      area: isAr ? "المساحة" : "Area",
      status: isAr ? "الحالة" : "Status",
      price: isAr ? "السعر" : "Price",
      beds: isAr ? "غرف" : "Beds",
      planPreview: isAr ? "معاينة مخطط الطابق (تجريبي)" : "Floor-plan preview (demo)",
      inquire: isAr ? "استفسر الآن" : "Inquire Now",
      empty: isAr ? "اختر طابقاً أو وحدة من القائمة." : "Select a floor or unit from the list.",
    },
    portal: {
      eyebrow: isAr ? "بوابة العملاء B2B" : "B2B client portal",
      title: isAr
        ? "Spatial OS. تحكم عن بُعد بصالة المبيعات"
        : "Spatial OS. Remote control for the sales gallery",
      intro: isAr
        ? "معاينة تفاعلية لما يراه المطور والوكالة: تحليلات الزوار، مزامنة إضاءة المجسم، وتحديث المخزون عبر كل شاشات اللمس."
        : "An interactive mock of what developers and agencies see: visitor analytics, maquette lighting sync, and inventory updates across every touchscreen.",
      chromeTitle: isAr ? "توريفا · Spatial OS (تجريبي)" : "Turriva · Spatial OS (demo)",
      analyticsTitle: isAr ? "تحليلات الصالة الحية" : "Live gallery analytics",
      visitors: isAr ? "زوار اليوم" : "Visitors today",
      avgTime: isAr ? "متوسط التفاعل / قسم" : "Avg interaction / section",
      topType: isAr ? "أكثر أنواع الوحدات مشاهدة" : "Top viewed unit type",
      lightingTitle: isAr ? "مزامنة الإضاءة والأجهزة" : "Hardware & lighting sync",
      lightingHint: isAr
        ? "بدّل طبقات الإضاءة كما لو كانت مربوطة بالمجسم الفعلي والشاشات."
        : "Toggle lighting layers as if synced to the physical maquette and screens.",
      layerParking: isAr ? "مواقف" : "Parking",
      layerAmenities: isAr ? "مرافق" : "Amenities",
      layerPenthouse: isAr ? "طوابق البنتهاوس" : "Penthouse floors",
      inventoryTitle: isAr ? "مزامنة المخزون الفورية" : "Real-time inventory sync",
      inventoryHint: isAr
        ? "حدّث الحالة. تُبثّ تجريبياً لكل نقاط البيع في الصالة."
        : "Update status. Demo-broadcast to every gallery touchpoint.",
      colUnit: isAr ? "الوحدة" : "Unit",
      colStatus: isAr ? "الحالة" : "Status",
      colSync: isAr ? "مزامنة" : "Sync",
      syncAction: isAr ? "تحديث وبث" : "Update & broadcast",
      demoNote: isAr
        ? "واجهة تجريبية لعرض القدرات. ليست بوابة إنتاج حية."
        : "Interactive capability showcase. Not a live production portal.",
      cta: isAr ? "اطلب عرض Spatial OS" : "Request a Spatial OS walkthrough",
    },
    agency: {
      eyebrow: isAr ? "شركاء الوكالات" : "Agency partners",
      title: isAr
        ? "انضم لشبكة شركاء ProjectLaunch™. قدّم لعملائك صالات مبيعات ومعارض متكاملة باسم وكالتك (White-Label Executions) وبسرعة تنفيذ قياسية."
        : "Join the ProjectLaunch™ partner network. Deliver turnkey sales galleries and exhibitions under your agency brand (white-label executions) at field speed.",
      body: isAr
        ? "للوكالات الإبداعية ووكالات الفعاليات التي تطرح مشاريع كبرى في السعودية والإمارات."
        : "For creative and event agencies pitching mega projects across Saudi Arabia and the UAE.",
      points: isAr
        ? ["تنفيذ باسم الوكالة", "BOQ ومواصفات جاهزة للطرح", "عمولة وتآزر واضح مع توريفا"]
        : ["White-label execution", "Pitch-ready BOQ & specs", "Clear commission synergy with Turriva"],
      download: isAr ? "حمّل عرض الوكالة ومواصفات BOQ" : "Download Agency Pitch Deck & BOQ Specs",
      commissionCta: isAr ? "استفسار عمولة وتآزر" : "Partner commission & synergy inquiry",
    },
    compliance: {
      aria: isAr ? "شارات الامتثال المؤسسي" : "Enterprise compliance badges",
      badges: isAr
        ? ["متوافق أمنياً مع معايير ISO", "أمن أجهزة متزامن سحابياً", "خصوصية بيانات GDPR"]
        : ["ISO Security Compliant", "Cloud-Synced Hardware Security", "GDPR Data Privacy"],
    },
  };
}
