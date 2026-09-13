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
    eyebrowAr: "نظام الإطلاق السريع",
    eyebrowEn: "Express Launch",
    titleAr: "صالات بيع جاهزة خلال أقل من 3 أسابيع",
    titleEn: "Turnkey sales galleries in under 3 weeks",
    bodyAr:
      "مسار تسليم سريع لمركز البيع ووحدة العرض: تصميم، تصنيع، وتركيب — نطاق واضح وجاهزية للعرض.",
    bodyEn:
      "A fast delivery path for the sales gallery and show unit: design, fabrication, and install — clear scope, presentation-ready.",
    pointsAr: ["مركز بيع / جناح", "وحدة عرض", "تسليم ميداني مضبوط"],
    pointsEn: ["Sales gallery / pavilion", "Show unit", "Disciplined site handover"],
    href: "/real-estate-experience",
    media: {
      type: "image",
      src: "/brand/turriva/projects/anan-eskan-gallery.jpg",
    },
  },
  {
    id: "flagship-spatial",
    eyebrowAr: "المنظومة التفاعلية القيادية",
    eyebrowEn: "Flagship Spatial System",
    titleAr: "مجسمات حركية، شاشات لمس، وسينما مكانية في غرفة واحدة",
    titleEn: "Kinetic models, touch displays, and spatial cinema in one room",
    bodyAr:
      "تكامل كامل لبيئة البيع: الطبقة المكانية مع أدوات التجربة التفاعلية عندما يحتاجها الإطلاق.",
    bodyEn:
      "Full sales-environment integration: the spatial layer plus interactive experience tools when the launch needs them.",
    pointsAr: ["مجسمات ذكية", "شاشات تفاعلية", "تجربة مسار المشتري"],
    pointsEn: ["Smart models", "Interactive screens", "Buyer-path experience"],
    href: "/real-estate-experience",
    media: {
      type: "video",
      src: "/brand/graphics-house/rafal-pavilions-loop.mp4",
      poster: "/brand/graphics-house/rafal-pavilions-poster.jpg",
    },
  },
  {
    id: "proptech-sales",
    eyebrowAr: "حلول المبيعات الرقمية",
    eyebrowEn: "PropTech Sales Engine",
    titleAr: "أدوات رقمية تدعم الإغلاق — مرتبطة بالمكان لا بديلة عنه",
    titleEn: "Digital tools that support closing — tied to the space, not replacing it",
    bodyAr:
      "تطبيقات عرض، تتبع وحدات، وتحليلات مكانية عبر منظومة المجموعة — تُفعَّل عندما يخدم الموجز المكاني.",
    bodyEn:
      "Buyer apps, inventory tracking, and spatial analytics via the group ecosystem — activated when they serve the spatial brief.",
    pointsAr: ["عرض الوحدات", "دعم فريق المبيعات", "تكامل مع بيئة العرض"],
    pointsEn: ["Unit presentation", "Sales-team support", "Tied to the gallery floor"],
    href: "/show-unit",
    media: {
      type: "image",
      src: "/brand/turriva/makkah-charter-04.jpeg",
    },
  },
] as const;

export type DemoProjectType = "sales_gallery" | "masterplan" | "launch_exhibition" | "custom_spatial";
export type DemoTimeline = "urgent" | "1_3_months" | "planning";

export function getConversionCopy(locale: Locale) {
  const isAr = locale === "ar";
  return {
    heroTitle: isAr
      ? "نحّول صالات المبيعات العقارية والمخططات إلى بيئات إغلاق صفقات تفاعلية — تسليم كامل في وقت قياسي."
      : "We turn real-estate sales galleries and masterplans into interactive deal-closing environments — full delivery on a developer clock.",
    heroSubtitle: isAr
      ? "ذراع التنفيذ المكاني لمجموعة تسامي: من مركز البيع ووحدة العرض إلى المنظومة التفاعلية — بنفس فريق التسليم الميداني."
      : "Tasami Group’s spatial execution arm: from sales gallery and show unit to the interactive system — same field delivery team.",
    ctaDemo: isAr ? "احجز عرضاً حياً" : "Book a Live Demo",
    ctaDemoEn: "Book a Live Demo",
    ctaExplore: isAr ? "استكشف الحلول" : "Explore Solutions",
    logoLabel: isAr ? "يثق بنا مطورون ومؤسسات رائدة" : "Trusted by leading developers and institutions",
    tiersEyebrow: isAr ? "باقات واضحة" : "Clear packages",
    tiersTitle: isAr ? "ثلاثة مسارات إطلاق. اختر ما يطابق مرحلتك." : "Three launch paths. Pick what matches your phase.",
    tiersIntro: isAr
      ? "كل باقة منتج قابل للشراء بنطاق وجدول واضح — لا قائمة خدمات عامة."
      : "Each package is a buyable product with clear scope and timeline — not a generic service list.",
    videoEyebrow: isAr ? "التنفيذ على الأرض" : "Execution on the ground",
    videoTitle: isAr ? "شاهد البيئات وهي تعمل" : "See the environments at work",
    demo: {
      title: isAr ? "احجز عرضاً حياً" : "Book a live demo",
      subtitle: isAr
        ? "ثلاث خطوات قصيرة. نعود إليك خلال يوم عمل."
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
        { id: "1_3_months" as const, label: isAr ? "1–3 أشهر" : "1–3 months" },
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
        ? "معاينة ثلاثية الأبعاد للمخطط — فلترة حية وتوفر فوري"
        : "Live 3D masterplan preview — filter status, price, and type",
      intro: isAr
        ? "نموذج تجريبي لبرج الإطلاق: نقاط ساخنة على الطوابق، حالة الوحدة، واستفسار مباشر لفريق التسليم."
        : "Demo tower for launch galleries: floor hotspots, live availability, and inquire straight into the lead modal.",
      filtersLabel: isAr ? "فلاتر الوحدات" : "Unit filters",
      filterStatus: isAr ? "الحالة" : "Status",
      filterType: isAr ? "نوع الوحدة" : "Unit type",
      filterPrice: isAr ? "الحد الأقصى للسعر" : "Max price",
      hint: isAr ? "انقر طابقاً مضيئاً لفتح تفاصيل الوحدة" : "Tap a highlighted floor to open unit details",
      fallback: isAr
        ? "WebGL غير متاح على هذا الجهاز — استخدم قائمة الوحدات على اليمين."
        : "WebGL unavailable on this device — use the unit list instead.",
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
        ? "Spatial OS — تحكم عن بُعد بصالة المبيعات"
        : "Spatial OS — remote control for the sales gallery",
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
        ? "حدّث الحالة — تُبثّ تجريبياً لكل نقاط البيع في الصالة."
        : "Update status — demo-broadcast to every gallery touchpoint.",
      colUnit: isAr ? "الوحدة" : "Unit",
      colStatus: isAr ? "الحالة" : "Status",
      colSync: isAr ? "مزامنة" : "Sync",
      syncAction: isAr ? "تحديث وبث" : "Update & broadcast",
      demoNote: isAr
        ? "واجهة تجريبية لعرض القدرات — ليست بوابة إنتاج حية."
        : "Interactive capability showcase — not a live production portal.",
      cta: isAr ? "اطلب عرض Spatial OS" : "Request a Spatial OS walkthrough",
    },
    agency: {
      eyebrow: isAr ? "شركاء الوكالات" : "Agency partners",
      title: isAr
        ? "انضم لشبكة شركاء ProjectLaunch™ — قدّم لعملائك صالات مبيعات ومعارض متكاملة باسم وكالتك (White-Label Executions) وبسرعة تنفيذ قياسية."
        : "Join the ProjectLaunch™ partner network — deliver turnkey sales galleries and exhibitions under your agency brand (white-label executions) at field speed.",
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
