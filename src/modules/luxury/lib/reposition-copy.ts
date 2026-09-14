import type { Locale } from "@/shared/i18n/locale";

export type RepositionCopy = {
  navDevelopers: string;
  definition: {
    eyebrow: string;
    title: string;
    body: string;
    audiences: string;
    image: string;
    imageAlt: string;
  };
  developers: {
    eyebrow: string;
    title: string;
    intro: string;
    points: readonly { title: string; body: string; image: string; imageAlt: string }[];
    cta: string;
    fitOutCta: string;
    pageCta: string;
  };
  products: {
    eyebrow: string;
    title: string;
    intro: string;
    frame: string;
    tierPrimary: string;
    tierSecondary: string;
    learnMore: string;
    primary: readonly {
      href: string;
      nameAr: string;
      nameEn: string;
      description: string;
      image: string;
    }[];
    secondary: readonly {
      href: string;
      nameAr: string;
      nameEn: string;
      description: string;
      image: string;
    }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly { title: string; description: string }[];
    cta: string;
  };
  featured: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  album: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    cta: string;
    items: readonly { image: string; category: string; title: string; href: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
    cta: string;
  };
  method: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: readonly { title: string; body: string }[];
  };
  teamExperience: string;
  honestNote: string;
};

const PRODUCT_IMAGES = {
  /** Sales / presentation environment card — MWL interactive maquette execution. */
  experience: "/brand/turriva/projects/mwl/hero.jpeg",
  showUnit: "/brand/turriva/inspiration/living-walnut-interior.webp",
  designBuild: "/brand/turriva/hero-interior.webp",
  fitOut: "/brand/turriva/projects/project-joinery-b2b.webp",
  commercial: "/brand/turriva/projects/project-commercial-retail.jpg",
  hospitality: "/brand/turriva/styles/french-sicily.webp",
  renovation: "/brand/turriva/projects/project-kitchen-jeddah.webp",
} as const;

/** MWL exhibition — shared execution still for Selected Work and product surfaces. */
const MWL_SELECTED_WORK_IMAGE = "/brand/turriva/projects/mwl/hero.jpeg";

const en: RepositionCopy = {
  navDevelopers: "Project experience",
  definition: {
    eyebrow: "What Turriva is",
    title: "From approved design to delivered reality.",
    body: "Turriva is a spatial execution and physical delivery company. We bridge approved creative intent and the finished space: technical development, fabrication, installation, and handover. Real estate sales environments are our flagship specialty. Hospitality, commercial, exhibition, residential, and fit-out remain open doors. Graphics House creates the visual layer when the project needs it.",
    audiences: "Developers · Hospitality · Commercial · Exhibition · Residential · Fit-out",
    image: "/brand/turriva/sections/definition-spaces.jpg",
    imageAlt: "A finished premium interior. Designed, furnished, and presentation-ready",
  },
  developers: {
    eyebrow: "Flagship specialty",
    title: "Real estate sales environments that move interest to decision.",
    intro:
      "For developers, the specialty is clear: sales galleries, show units, and launch spaces built around what the buyer must understand before opening day. The same execution path serves hotels, retail, and exhibitions when those projects arrive.",
    points: [
      {
        title: "Sales gallery and show villa",
        body: "A composed setting that presents the living standard with clarity and calm.",
        image: "/brand/turriva/sections/dev-sales-gallery.jpg",
        imageAlt: "Show villa exterior and living standard ready for buyers",
      },
      {
        title: "Show apartment and project display",
        body: "A path the buyer walks, supported by models and visuals when they add understanding.",
        image: "/brand/turriva/sections/dev-show-apartment.jpg",
        imageAlt: "Open show apartment the buyer can walk through",
      },
      {
        title: "Accountability for delivery",
        body: "One partner from approved drawings through factory production to site handover.",
        image: "/brand/turriva/sections/dev-experience-tools.jpg",
        imageAlt: "Physical display model supporting the sales environment",
      },
    ],
    cta: "Discuss your project",
    fitOutCta: "Fit-out and execution",
    pageCta: "Discuss your project",
  },
  products: {
    eyebrow: "Products",
    title: "Seven clear offers. One way of working.",
    intro: "Each product has a defined job. Choose the door that matches your project.",
    frame: "We begin with the sales environment and marketing show unit. Broader interiors follow when the project expands.",
    tierPrimary: "Start here",
    tierSecondary: "Also available",
    learnMore: "Explore",
    primary: [
      {
        href: "/real-estate-experience",
        nameAr: "تجربة المشروع العقاري",
        nameEn: "Real Estate Project Experience",
        description: "The sales environment: gallery, show unit, presentation, and fit-out. Scoped to your launch.",
        image: PRODUCT_IMAGES.experience,
      },
      {
        href: "/show-unit",
        nameAr: "وحدة العرض",
        nameEn: "Show Unit",
        description: "A villa, apartment, or suite the buyer can walk. The lifestyle made physical.",
        image: PRODUCT_IMAGES.showUnit,
      },
    ],
    secondary: [
      {
        href: "/design-build",
        nameAr: "التصميم والتنفيذ",
        nameEn: "Design & Build",
        description: "From idea to a ready space: design, detailing, supply, install, handover.",
        image: PRODUCT_IMAGES.designBuild,
      },
      {
        href: "/fit-out",
        nameAr: "التنفيذ والتجهيز",
        nameEn: "Fit-Out & Execution",
        description: "Your approved design. Our build. We execute. We do not replace the designer.",
        image: PRODUCT_IMAGES.fitOut,
      },
      {
        href: "/commercial-spaces",
        nameAr: "المساحات التجارية",
        nameEn: "Commercial Spaces",
        description: "Retail, dining, showrooms, and offices that carry the brand and work every day.",
        image: PRODUCT_IMAGES.commercial,
      },
      {
        href: "/hospitality-spaces",
        nameAr: "مساحات الضيافة",
        nameEn: "Hospitality Spaces",
        description: "Hotels, serviced apartments, lobbies, and guest areas where the stay begins.",
        image: PRODUCT_IMAGES.hospitality,
      },
      {
        href: "/renovation",
        nameAr: "التجديد والتطوير",
        nameEn: "Renovation & Upgrade",
        description: "An existing space. What stays, what changes. Assessed before work begins.",
        image: PRODUCT_IMAGES.renovation,
      },
    ],
  },
  capabilities: {
    eyebrow: "Technical capabilities",
    title: "From approved drawings to factory production to site installation.",
    intro: "Built for architects, consultants, developers, main contractors, and procurement teams who need a delivery partner, not a design studio.",
    items: [
      { title: "Shop drawings & BOQ", description: "Buildable details, quantities, and a clear technical package." },
      { title: "Material specifications & samples", description: "Approved finishes and mockups before production starts." },
      { title: "Factory coordination & QC", description: "Production tracking, quality checks, and logistics aligned to site." },
      { title: "Site installation", description: "Field coordination, install sequencing, and snagging." },
      { title: "Handover & aftercare", description: "Opening-ready delivery with a clear close-out path." },
      { title: "Experience tools when needed", description: "Models, displays, and content only when they serve the project." },
    ],
    cta: "Discuss your project",
  },
  featured: {
    eyebrow: "Flagship specialty",
    title: "The project is ready. Is the place of sale?",
    body: "From sales gallery to show unit, we deliver the environment where your development meets its buyers. Scope follows your launch stage and how you sell.",
    cta: "Real estate sales environments",
  },
  album: {
    eyebrow: "Proof of delivery",
    title: "Selected work with a clear owned scope.",
    subtitle: "Challenge, what Turriva owned, what was delivered. Sales environments first, then broader spatial work.",
    note: "Delivered by the Turriva team. Some under Graphics House before the dedicated brand. Same team. Same execution standard.",
    cta: "View selected work",
    items: [
      { image: MWL_SELECTED_WORK_IMAGE, category: "Temporary fit-out", title: "MWL presentation hall, Jeddah", href: "/our-work/humanity-exhibition-mwl" },
      { image: PRODUCT_IMAGES.experience, category: "Permanent sales gallery", title: "Anan Eskan sales gallery, Riyadh", href: "/our-work/anan-eskan-sales-gallery" },
      { image: "/brand/turriva/projects/al-rajhi/maquette.jpeg", category: "Presentation maquette", title: "Al Rajhi architectural maquette", href: "/our-work/al-rajhi-maquette" },
      { image: "/brand/turriva/projects/rafal-pavilions.jpg", category: "Launch pavilions", title: "Rafal pavilions, Diriyah", href: "/our-work/rafal-pavilions" },
    ],
  },
  team: {
    eyebrow: "Credibility",
    title: "Team and group delivery record, under one brand.",
    intro:
      "Turriva is new as a name. The delivery experience belongs to the team across Tasami Group. 15+ years refers to that record, not to Turriva as a standalone historical entity.",
    note: "",
    cta: "Our work",
  },
  method: {
    eyebrow: "How we work",
    title: "Understand the project. Own the execution path. Hand over ready.",
    intro: "A short path that keeps scope clear and the finished space true to what was approved.",
    steps: [
      { title: "Brief", body: "What must be delivered, for whom, and by when." },
      { title: "Site and drawings", body: "Constraints, references, and what already exists." },
      { title: "Scope and proposal", body: "Clear boundaries before fabrication begins." },
      { title: "Build", body: "Procurement, fabrication, and installation to the approved package." },
      { title: "Handover", body: "A space ready to show, occupy, or open." },
    ],
  },
  teamExperience: "Selected work",
  honestNote:
    "The work below was delivered by the Turriva team. Some under Graphics House before the dedicated brand. Same team. Same execution standard.",
};

const ar: RepositionCopy = {
  navDevelopers: "تجربة المشروع",
  definition: {
    eyebrow: "ما هي توريفا",
    title: "من التصميم المعتمد إلى واقع جاهز للتسليم.",
    body: "توريفا شركة تنفيذ مكاني وتسليم مادي. نربط النية الإبداعية المعتمدة بالمساحة المكتملة: تطوير فني، تصنيع، تركيب، وتسليم. بيئات البيع العقاري هي تخصصنا الرئيسي. والضيافة والتجاري والمعارض والسكني والتجهيز أبواب مفتوحة. جرافيكس هاوس تخلق الطبقة البصرية حين يحتاجها المشروع.",
    audiences: "مطورون · ضيافة · تجاري · معارض · سكني · تجهيز",
    image: "/brand/turriva/sections/definition-spaces.jpg",
    imageAlt: "مساحة داخلية فاخرة جاهزة. مصمّمة ومفروشة وجاهزة للعرض",
  },
  developers: {
    eyebrow: "التخصص الرئيسي",
    title: "بيئات البيع العقاري تنقل المشتري من الاهتمام إلى القرار.",
    intro:
      "للمطورين التخصص واضح: صالات البيع ووحدات العرض ومساحات الإطلاق حول ما يجب أن يفهمه المشتري قبل يوم الافتتاح. ونفس مسار التنفيذ يخدم الفنادق والتجزئة والمعارض حين تصل هذه المشاريع.",
    points: [
      {
        title: "مركز البيع وفيلا العرض",
        body: "مكان متماسك يعرض معيار المعيشة بوضوح وهدوء.",
        image: "/brand/turriva/sections/dev-sales-gallery.jpg",
        imageAlt: "فيلا عرض جاهزة تعكس معيار المعيشة للمشترين",
      },
      {
        title: "شقة العرض وعرض المشروع",
        body: "مسار يمشي فيه المشتري، مدعوماً بالمجسمات والعناصر البصرية حين تضيف فهماً.",
        image: "/brand/turriva/sections/dev-show-apartment.jpg",
        imageAlt: "شقة عرض مفتوحة يمشي فيها المشتري",
      },
      {
        title: "مسؤولية التسليم",
        body: "شريك واحد من المخططات المعتمدة عبر المصنع إلى التسليم في الموقع.",
        image: "/brand/turriva/sections/dev-experience-tools.jpg",
        imageAlt: "مجسم عرض يدعم بيئة المبيعات دون أن يستبدل المكان",
      },
    ],
    cta: "ناقش مشروعك",
    fitOutCta: "التنفيذ والتجهيز",
    pageCta: "ناقش مشروعك",
  },
  products: {
    eyebrow: "المنتجات",
    title: "سبعة عروض واضحة. أسلوب عمل واحد.",
    intro: "لكل منتج مهمة محددة. اختر الباب الذي يطابق احتياجك.",
    frame: "نبدأ من بيئة البيع ووحدة العيّنة التسويقية. وتتسع المساحات الأخرى حين يتسع المشروع.",
    tierPrimary: "ابدأ من هنا",
    tierSecondary: "متاح أيضًا",
    learnMore: "استكشف",
    primary: [
      {
        href: "/real-estate-experience",
        nameAr: "تجربة المشروع العقاري",
        nameEn: "Real Estate Project Experience",
        description: "بيئة البيع: مركز البيع ووحدة العرض والعرض والتجهيز، وفق مرحلة إطلاقكم.",
        image: PRODUCT_IMAGES.experience,
      },
      {
        href: "/show-unit",
        nameAr: "وحدة العرض",
        nameEn: "Show Unit",
        description: "فيلا أو شقة أو جناح يمشي فيه المشتري. أسلوب الحياة وقد صار مكاناً.",
        image: PRODUCT_IMAGES.showUnit,
      },
    ],
    secondary: [
      {
        href: "/design-build",
        nameAr: "التصميم والتنفيذ",
        nameEn: "Design & Build",
        description: "من الفكرة إلى مساحة جاهزة: تصميم، تفاصيل، توريد، تركيب، تسليم.",
        image: PRODUCT_IMAGES.designBuild,
      },
      {
        href: "/fit-out",
        nameAr: "التنفيذ والتجهيز",
        nameEn: "Fit-Out & Execution",
        description: "تصميمكم المعتمد. تنفيذنا. نبني، ولا نحل محل المصمم.",
        image: PRODUCT_IMAGES.fitOut,
      },
      {
        href: "/commercial-spaces",
        nameAr: "المساحات التجارية",
        nameEn: "Commercial Spaces",
        description: "تجزئة ومطاعم وصالات عرض ومكاتب تحمل العلامة وتعمل يومياً.",
        image: PRODUCT_IMAGES.commercial,
      },
      {
        href: "/hospitality-spaces",
        nameAr: "مساحات الضيافة",
        nameEn: "Hospitality Spaces",
        description: "فنادق وشقق فندقية وردهات ومناطق ضيوف تبدأ فيها الإقامة.",
        image: PRODUCT_IMAGES.hospitality,
      },
      {
        href: "/renovation",
        nameAr: "التجديد والتطوير",
        nameEn: "Renovation & Upgrade",
        description: "مساحة قائمة. ما يبقى وما يتغير، يُحدَّد قبل بدء العمل.",
        image: PRODUCT_IMAGES.renovation,
      },
    ],
  },
  capabilities: {
    eyebrow: "القدرات الفنية",
    title: "من المخططات المعتمدة إلى إنتاج المصنع ثم التركيب في الموقع.",
    intro: "مبنية للمعماريين والاستشاريين والمطورين والمقاولين الرئيسيين ومديري المشتريات الذين يحتاجون شريك تسليم، لا استوديو تصميم.",
    items: [
      { title: "مخططات تنفيذ وكميات", description: "تفاصيل قابلة للبناء وكميات وحزمة فنية واضحة." },
      { title: "مواصفات وعينات مواد", description: "تشطيبات معتمدة ومجسمات قبل بدء الإنتاج." },
      { title: "تنسيق مصنع وضبط جودة", description: "تتبع إنتاج وفحص جودة ولوجستيات متوافقة مع الموقع." },
      { title: "التركيب الميداني", description: "تنسيق موقع وتسلسل تركيب وإغلاق ملاحظات." },
      { title: "التسليم وما بعد التسليم", description: "جاهزية الافتتاح أو الاستخدام مع مسار إغلاق واضح." },
      { title: "أدوات تجربة عند الحاجة", description: "مجسمات وشاشات ومحتوى فقط حين تخدم المشروع." },
    ],
    cta: "ناقش مشروعك",
  },
  featured: {
    eyebrow: "التخصص الرئيسي",
    title: "المشروع جاهز. هل مكان البيع جاهز؟",
    body: "من مركز البيع إلى وحدة العرض، ننفّذ البيئة التي يلتقي فيها مشروعك بعملائه. النطاق يتبع مرحلة الإطلاق وطريقة البيع.",
    cta: "بيئات البيع العقاري",
  },
  album: {
    eyebrow: "إثبات تسليم",
    title: "أعمال مختارة بنطاق ملكية واضح.",
    subtitle: "التحدي، وما ملكته توريفا، وما سُلّم. بيئات البيع أولاً، ثم التنفيذ المكاني الأوسع.",
    note: "نفّذها فريق توريفا، بعضها تحت جرافيكس هاوس قبل العلامة المستقلة. نفس الفريق، نفس معايير التنفيذ.",
    cta: "عرض الأعمال المختارة",
    items: [
      { image: MWL_SELECTED_WORK_IMAGE, category: "تجهيز مؤقت", title: "قاعة عرض الرابطة، جدة", href: "/our-work/humanity-exhibition-mwl" },
      { image: PRODUCT_IMAGES.experience, category: "صالة بيع دائمة", title: "صالة عرض عنان إسكان، الرياض", href: "/our-work/anan-eskan-sales-gallery" },
      { image: "/brand/turriva/projects/al-rajhi/maquette.jpeg", category: "مجسم عرض", title: "مجسم الراجحي المعماري", href: "/our-work/al-rajhi-maquette" },
      { image: "/brand/turriva/projects/rafal-pavilions.jpg", category: "أجنحة إطلاق", title: "أجنحة رفال، الدرعية", href: "/our-work/rafal-pavilions" },
    ],
  },
  team: {
    eyebrow: "المصداقية",
    title: "سجل تسليم الفريق والمجموعة، تحت علامة واحدة.",
    intro:
      "توريفا جديدة بالاسم. خبرة التسليم تعود للفريق عبر مجموعة تسامي. 15+ عاماً تشير إلى هذا السجل، لا إلى توريفا ككيان مستقل بتاريخ طويل.",
    note: "",
    cta: "أعمالنا",
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "نفهم المشروع. نملك مسار التنفيذ. نسلّم جاهزاً.",
    intro: "مسار قصير يحفظ وضوح النطاق ويُبقي المساحة المكتملة مطابقة لما اعتُمد.",
    steps: [
      { title: "الاحتياج", body: "ماذا يجب تسليمه، ولمن، ومتى." },
      { title: "الموقع والمخططات", body: "القيود والمراجع وما هو قائم أصلاً." },
      { title: "النطاق والعرض", body: "حدود واضحة قبل بدء التصنيع." },
      { title: "التنفيذ", body: "توريد وتصنيع وتركيب وفق الحزمة المعتمدة." },
      { title: "التسليم", body: "مكان جاهز للعرض أو الاستخدام أو الافتتاح." },
    ],
  },
  teamExperience: "أعمال مختارة",
  honestNote:
    "الأعمال التالية نفّذها فريق توريفا، بعضها تحت مظلة جرافيكس هاوس قبل إطلاق العلامة المستقلة. نفس الفريق، نفس معايير التنفيذ.",
};

export function getRepositionCopy(locale: Locale): RepositionCopy {
  return locale === "ar" ? ar : en;
}
