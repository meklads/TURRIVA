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
  /** Sales environment card. Avoid MWL phone still here; that stays in Selected Work / case study only. */
  experience: "/brand/turriva/projects/anan-eskan-gallery.jpg",
  showUnit: "/brand/turriva/inspiration/living-walnut-interior.webp",
  designBuild: "/brand/turriva/hero-interior.webp",
  fitOut: "/brand/turriva/projects/project-joinery-b2b.webp",
  commercial: "/brand/turriva/projects/project-commercial-retail.jpg",
  hospitality: "/brand/turriva/styles/french-sicily.webp",
  renovation: "/brand/turriva/projects/project-kitchen-jeddah.webp",
} as const;

/** MWL exhibition. Selected Work / credibility only (execution photo; do not duplicate in product cards). */
const MWL_SELECTED_WORK_IMAGE = "/brand/turriva/makkah-charter-04.jpeg";

const en: RepositionCopy = {
  navDevelopers: "Project experience",
  definition: {
    eyebrow: "What Turriva is",
    title: "A sales environment designed to move interest to decision.",
    body: "Turriva helps real-estate developers launch and sell projects through physical sales environments: galleries, show units, and launch spaces. Design & build, hospitality, and commercial work remain available as extended delivery. Graphics House joins when identity, CGI, film, or interactive layers serve the sales path.",
    audiences: "Sales Galleries · Show Units · Project Experiences · Launch Spaces",
    image: "/brand/turriva/sections/definition-spaces.jpg",
    imageAlt: "A finished premium interior. Designed, furnished, and presentation-ready",
  },
  developers: {
    eyebrow: "For developers",
    title: "Launch. Attract. Explain. Experience. Convert.",
    intro:
      "We do not lead with interior design, fit-out, or furniture. We lead with the sales objective: what the buyer must understand and feel before opening day, then we design and build the environment that supports that path.",
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
        title: "Connect objective to execution",
        body: "Screens and models serve the room. The space remains the product that carries the sale.",
        image: "/brand/turriva/sections/dev-experience-tools.jpg",
        imageAlt: "Physical display model supporting the sales environment",
      },
    ],
    cta: "Discuss your launch environment",
    fitOutCta: "Fit-out and execution",
    pageCta: "Discuss your project",
  },
  products: {
    eyebrow: "Products",
    title: "Seven clear offers. One way of working.",
    intro: "Each product has a defined job. Choose the door that matches your brief.",
    frame: "We begin with the sales environment and marketing show unit. Broader interiors follow when the brief expands.",
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
    eyebrow: "Capabilities",
    title: "What sits behind every product.",
    intro: "Capabilities serve the brief. They are not a second catalogue of things to buy.",
    items: [
      { title: "Spatial design", description: "Plan, materials, and how the room is used." },
      { title: "Technical development", description: "Shop drawings, quantities, and a buildable specification." },
      { title: "Joinery and fabrication", description: "Custom joinery to the drawings." },
      { title: "Fit-out and installation", description: "Site coordination, install, quality, handover." },
      { title: "Procurement", description: "Materials, furniture, and lighting against the approved specification." },
      { title: "Experience tools", description: "Displays, models, and content only when the project needs them." },
    ],
    cta: "See capabilities",
  },
  featured: {
    eyebrow: "Lead offer",
    title: "The project is ready. Is the place of sale?",
    body: "From sales gallery to show unit, we design and deliver the environment where your development meets its buyers. Scope follows your launch stage and how you sell.",
    cta: "Real estate project experience",
  },
  album: {
    eyebrow: "Selected Real Estate Experiences",
    title: "Environments built for launch and sale.",
    subtitle: "Sales galleries, show units, and launch spaces. Scope and delivery clarity first.",
    note: "The work below was delivered by the Turriva team. Some under Graphics House before the dedicated brand launched. Same team. Same execution standard.",
    cta: "View selected work",
    items: [
      { image: MWL_SELECTED_WORK_IMAGE, category: "Sales environment", title: "Where the project is shown", href: "/real-estate-experience" },
      { image: PRODUCT_IMAGES.showUnit, category: "Show unit", title: "A unit the buyer walks", href: "/show-unit" },
      { image: PRODUCT_IMAGES.experience, category: "Launch space", title: "Opening-day readiness", href: "/real-estate-experience" },
      { image: PRODUCT_IMAGES.designBuild, category: "Design and build", title: "From idea to room", href: "/design-build" },
      { image: PRODUCT_IMAGES.fitOut, category: "Fit-out", title: "Drawings, built", href: "/fit-out" },
      { image: PRODUCT_IMAGES.commercial, category: "Extended delivery", title: "Commercial and hospitality", href: "/commercial-spaces" },
    ],
  },
  team: {
    eyebrow: "Credibility",
    title: "Documented experience, not promises.",
    intro:
      "Turriva is new as a name. It carries Tasami Group’s real delivery record. The work below was executed by the same team that runs Turriva today. Some before the brand launched, some under Graphics House as the creative layer beside spatial delivery.",
    note: "",
    cta: "Our work",
  },
  method: {
    eyebrow: "How we work",
    title: "Sales objective first. Then scope. Then build.",
    intro: "Before design we ask what the buyer must experience, when launch is, and what must be ready on opening day. Then we agree scope and deliver.",
    steps: [
      { title: "Sales objective", body: "What the buyer must understand and feel. Launch timing and readiness." },
      { title: "Site and drawings", body: "Constraints, references, and what already exists." },
      { title: "Scope and proposal", body: "Clear boundaries before fabrication begins." },
      { title: "Build", body: "Procurement, fabrication, and installation to the approved drawings." },
      { title: "Handover", body: "A space ready to show, occupy, or open." },
    ],
  },
  teamExperience: "Selected work",
  honestNote:
    "The work below was delivered by the Turriva team. Some under Graphics House before the dedicated brand launched. Same team. Same execution standard.",
};

const ar: RepositionCopy = {
  navDevelopers: "تجربة المشروع",
  definition: {
    eyebrow: "ما هي توريفا",
    title: "بيئة بيع مصمّمة لتنقل المشتري من الاهتمام إلى القرار.",
    body: "توريفا تساعد المطوّرين على إطلاق المشاريع وبيعها عبر بيئات بيع مادية: صالات البيع، ووحدات العرض، ومساحات الإطلاق. ويبقى التصميم والتنفيذ والضيافة والتجاري متاحاً كامتداد دون أن يعرّف العلامة. جرافيكس هاوس تُستدعى حين تخدم الهوية أو الـ CGI أو الفيلم أو التفاعل مسار البيع.",
    audiences: "صالات البيع · وحدات العرض · تجارب المشروع · مساحات الإطلاق",
    image: "/brand/turriva/sections/definition-spaces.jpg",
    imageAlt: "مساحة داخلية فاخرة جاهزة. مصمّمة ومفروشة وجاهزة للعرض",
  },
  developers: {
    eyebrow: "للمطورين",
    title: "إطلاق. جذب. شرح. تجربة. تحويل.",
    intro:
      "لا نبدأ من الديكور أو التجهيز أو الأثاث. نبدأ من هدف البيع: ماذا يجب أن يفهم المشتري ويحسّ به قبل يوم الافتتاح، ثم نصمم وننفّذ البيئة التي تدعم هذا المسار.",
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
        title: "ربط الهدف بالتنفيذ",
        body: "الشاشات والمجسمات تخدم المكان. والمكان يبقى المنتج الذي يحمل البيع.",
        image: "/brand/turriva/sections/dev-experience-tools.jpg",
        imageAlt: "مجسم عرض يدعم بيئة المبيعات دون أن يستبدل المكان",
      },
    ],
    cta: "ناقش بيئة الإطلاق",
    fitOutCta: "التنفيذ والتجهيز",
    pageCta: "ناقش مشروعك",
  },
  products: {
    eyebrow: "المنتجات",
    title: "سبعة عروض واضحة. أسلوب عمل واحد.",
    intro: "لكل منتج مهمة محددة. اختر الباب الذي يطابق احتياجك.",
    frame: "نبدأ من بيئة البيع ووحدة العيّنة التسويقية. وتتسع المساحات الأخرى حين يتسع الموجز.",
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
    eyebrow: "القدرات",
    title: "ما يقف خلف كل منتج.",
    intro: "القدرات تخدم الموجز. ليست كتالوجاً ثانياً لما يُشترى.",
    items: [
      { title: "التصميم المكاني", description: "التخطيط والمواد وطريقة استخدام الغرفة." },
      { title: "التطوير الفني", description: "مخططات تنفيذ وكميات ومواصفات قابلة للبناء." },
      { title: "النجارة والتصنيع", description: "نجارة وفق المخططات." },
      { title: "التجهيز والتركيب", description: "تنسيق موقع وتركيب وضبط جودة وتسليم." },
      { title: "التوريد", description: "مواد وأثاث وإضاءة وفق المواصفات المعتمدة." },
      { title: "أدوات التجربة", description: "شاشات ومجسمات ومحتوى فقط عندما يحتاجها المشروع." },
    ],
    cta: "عرض القدرات",
  },
  featured: {
    eyebrow: "العرض الأول",
    title: "المشروع جاهز. هل مكان البيع جاهز؟",
    body: "من مركز البيع إلى وحدة العرض، نصمم وننفّذ البيئة التي يلتقي فيها مشروعك بعملائه. النطاق يتبع مرحلة الإطلاق وطريقة البيع.",
    cta: "تجربة المشروع العقاري",
  },
  album: {
    eyebrow: "تجارب عقارية مختارة",
    title: "بيئات بُنيت للإطلاق والبيع.",
    subtitle: "صالات بيع ووحدات عرض ومساحات إطلاق. وضوح النطاق والتسليم أولاً.",
    note: "الأعمال التالية نفّذها فريق توريفا، بعضها تحت مظلة جرافيكس هاوس قبل إطلاق العلامة المستقلة. نفس الفريق، نفس معايير التنفيذ.",
    cta: "عرض الأعمال المختارة",
    items: [
      { image: MWL_SELECTED_WORK_IMAGE, category: "بيئة بيع", title: "حيث يُعرض المشروع", href: "/real-estate-experience" },
      { image: PRODUCT_IMAGES.showUnit, category: "وحدة العرض", title: "وحدة يمشي فيها المشتري", href: "/show-unit" },
      { image: PRODUCT_IMAGES.experience, category: "مساحة إطلاق", title: "جاهزية يوم الافتتاح", href: "/real-estate-experience" },
      { image: PRODUCT_IMAGES.designBuild, category: "التصميم والتنفيذ", title: "من فكرة إلى غرفة", href: "/design-build" },
      { image: PRODUCT_IMAGES.fitOut, category: "التنفيذ والتجهيز", title: "مخططات تُبنى", href: "/fit-out" },
      { image: PRODUCT_IMAGES.commercial, category: "تنفيذ أوسع", title: "التجاري والضيافة", href: "/commercial-spaces" },
    ],
  },
  team: {
    eyebrow: "المصداقية",
    title: "خبرة موثّقة، لا وعود.",
    intro:
      "توريفا علامة جديدة بالاسم، لكنها تحمل سجل تنفيذ فعلي لمجموعة تسامي. الأعمال التالية نُفّذت بنفس الفريق الذي يدير توريفا اليوم، بعضها قبل إطلاق العلامة، وبعضها مع جرافيكس هاوس كطبقة إبداعية إلى جانب التنفيذ المكاني.",
    note: "",
    cta: "أعمالنا",
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "هدف البيع أولاً. ثم النطاق. ثم التنفيذ.",
    intro: "قبل التصميم نسأل ماذا يجب أن يختبر المشتري، ومتى الإطلاق، وما الذي يجب أن يكون جاهزاً يوم الافتتاح. ثم نتفق على النطاق ونسلّم.",
    steps: [
      { title: "هدف البيع", body: "ماذا يجب أن يفهم المشتري ويحسّ به. توقيت الإطلاق والجاهزية." },
      { title: "الموقع والمخططات", body: "القيود والمراجع وما هو قائم أصلاً." },
      { title: "النطاق والعرض", body: "حدود واضحة قبل بدء التصنيع." },
      { title: "التنفيذ", body: "توريد وتصنيع وتركيب وفق المخططات المعتمدة." },
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
