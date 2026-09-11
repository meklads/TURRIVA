import type { Locale } from "@/shared/i18n/locale";

export type RepositionCopy = {
  navDevelopers: string;
  definition: {
    eyebrow: string;
    title: string;
    body: string;
    audiences: string;
  };
  developers: {
    eyebrow: string;
    title: string;
    intro: string;
    points: readonly { title: string; body: string }[];
    cta: string;
    fitOutCta: string;
    pageCta: string;
  };
  products: {
    eyebrow: string;
    title: string;
    intro: string;
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
  experience: "/brand/turriva/makkah-charter-04.jpeg",
  showUnit: "/brand/turriva/projects/project-walk-in-makkah.webp",
  designBuild: "/brand/turriva/hero-interior.webp",
  fitOut: "/brand/turriva/projects/project-joinery-b2b.webp",
  commercial: "/brand/turriva/sample-kit-showroom.webp",
  hospitality: "/brand/turriva/projects/project-walk-in-makkah.webp",
  renovation: "/brand/turriva/projects/project-kitchen-jeddah.webp",
} as const;

const en: RepositionCopy = {
  navDevelopers: "Project experience",
  definition: {
    eyebrow: "What Turriva is",
    title: "Spaces designed. Spaces delivered.",
    body: "We take a space from idea and drawings to a place ready to use or present — design, detailing, supply, installation, and handover, held by one team.",
    audiences: "Residential · Commercial · Hospitality · Real estate",
  },
  developers: {
    eyebrow: "For developers",
    title: "When the project is ready, the presentation must be too.",
    intro:
      "Sales need a clear place to receive buyers. We design and deliver that environment: gallery, show unit, and the tools that make the project easy to understand.",
    points: [
      {
        title: "Sales gallery and show villa",
        body: "A composed place to present living standards — not a loose furniture list.",
      },
      {
        title: "Show apartment and project display",
        body: "A path the buyer walks, with models and visuals when they help.",
      },
      {
        title: "Build, with experience tools as needed",
        body: "Screens and models support the room. They are not the product.",
      },
    ],
    cta: "Discuss your real estate project",
    fitOutCta: "Fit-out and execution",
    pageCta: "Discuss your project",
  },
  products: {
    eyebrow: "Products",
    title: "Seven clear offers. One way of working.",
    intro: "Each product has a defined job. Choose the door that matches your brief.",
    learnMore: "Explore",
    primary: [
      {
        href: "/real-estate-experience",
        nameAr: "تجربة المشروع العقاري",
        nameEn: "Real Estate Project Experience",
        description: "The sales environment: gallery, show unit, presentation, and fit-out — scoped to your launch.",
        image: PRODUCT_IMAGES.experience,
      },
      {
        href: "/show-unit",
        nameAr: "وحدة العرض",
        nameEn: "Show Unit",
        description: "A villa, apartment, or suite the buyer can walk — the lifestyle made physical.",
        image: PRODUCT_IMAGES.showUnit,
      },
      {
        href: "/design-build",
        nameAr: "التصميم والتنفيذ",
        nameEn: "Design & Build",
        description: "From idea to a ready space: design, detailing, supply, install, handover.",
        image: PRODUCT_IMAGES.designBuild,
      },
    ],
    secondary: [
      {
        href: "/fit-out",
        nameAr: "التنفيذ والتجهيز",
        nameEn: "Fit-Out & Execution",
        description: "Your approved design. Our build. We execute — we do not replace the designer.",
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
        description: "An existing space. What stays, what changes — assessed before work begins.",
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
    eyebrow: "Lead product",
    title: "Ready to sell. Ready to show?",
    body: "From sales gallery to show unit, we design and deliver the environment where your project meets its clients. Scope follows your phase and how you sell.",
    cta: "Real estate project experience",
  },
  album: {
    eyebrow: "Selected work",
    title: "Spaces with a clear job.",
    subtitle: "Each frame opens the product it belongs to.",
    note: "Selected team experience and live work — not a list of historical Turriva contracts.",
    cta: "View selected work",
    items: [
      { image: PRODUCT_IMAGES.experience, category: "Real estate", title: "Where the project is shown", href: "/real-estate-experience" },
      { image: PRODUCT_IMAGES.showUnit, category: "Show unit", title: "A unit the buyer walks", href: "/show-unit" },
      { image: PRODUCT_IMAGES.designBuild, category: "Design and build", title: "From idea to room", href: "/design-build" },
      { image: PRODUCT_IMAGES.fitOut, category: "Fit-out", title: "Drawings, built", href: "/fit-out" },
      { image: PRODUCT_IMAGES.commercial, category: "Commercial", title: "Where brand meets customer", href: "/commercial-spaces" },
      { image: PRODUCT_IMAGES.renovation, category: "Renovation", title: "What stays, what changes", href: "/renovation" },
    ],
  },
  team: {
    eyebrow: "Credibility",
    title: "A new brand. An experienced team.",
    intro:
      "Turriva is a specialized brand, backed by people who know spatial design, execution, visual work, and delivery.",
    note: "Named programmes below are selected team experience — not historical Turriva contracts unless that attribution is confirmed.",
    cta: "Our work",
  },
  method: {
    eyebrow: "How we work",
    title: "Understand. Agree. Deliver.",
    intro: "A short path that keeps scope clear and the finished space true to what was approved.",
    steps: [
      { title: "Understand", body: "Site, drawings, timing, and what the space must do." },
      { title: "Design", body: "The room and the path through it — when design is in the brief." },
      { title: "Develop", body: "Details, quantities, and samples before fabrication." },
      { title: "Build", body: "Procurement, fabrication, and installation to the approved drawings." },
      { title: "Deliver", body: "A space ready to show, occupy, or open." },
    ],
  },
  teamExperience: "Selected team experience",
  honestNote:
    "Shown as selected experience of the delivery team and group partners — not as a historical Turriva-branded contract.",
};

const ar: RepositionCopy = {
  navDevelopers: "تجربة المشروع",
  definition: {
    eyebrow: "ما هي توريفا",
    title: "نصمّم المساحات. ونسلّمها.",
    body: "نأخذ المساحة من الفكرة والمخططات إلى مكان جاهز للاستخدام أو العرض — تصميم، تفاصيل، توريد، تركيب، وتسليم، بيد فريق واحد.",
    audiences: "سكني · تجاري · ضيافة · عقار",
  },
  developers: {
    eyebrow: "للمطورين",
    title: "حين يكون المشروع جاهزاً، يجب أن يكون العرض جاهزاً أيضاً.",
    intro:
      "البيع يحتاج مكاناً واضحاً لاستقبال المشترين. نصمم وننفذ هذه البيئة: مركز البيع ووحدة العرض والأدوات التي تجعل المشروع مفهوماً بسهولة.",
    points: [
      {
        title: "مركز البيع وفيلا العرض",
        body: "مكان مرتّب لعرض معيار المعيشة — لا قائمة أثاث مبعثرة.",
      },
      {
        title: "شقة العرض وعرض المشروع",
        body: "مسار يمشي فيه المشتري، مع المجسمات والعناصر البصرية حين تفيد.",
      },
      {
        title: "تنفيذ، وأدوات تجربة عند الحاجة",
        body: "الشاشات والمجسمات تخدم المكان. ليست المنتج.",
      },
    ],
    cta: "ناقش مشروعك العقاري",
    fitOutCta: "التنفيذ والتجهيز",
    pageCta: "ناقش مشروعك",
  },
  products: {
    eyebrow: "المنتجات",
    title: "سبعة عروض واضحة. أسلوب عمل واحد.",
    intro: "لكل منتج مهمة محددة. اختر الباب الذي يطابق احتياجك.",
    learnMore: "استكشف",
    primary: [
      {
        href: "/real-estate-experience",
        nameAr: "تجربة المشروع العقاري",
        nameEn: "Real Estate Project Experience",
        description: "بيئة البيع: مركز البيع ووحدة العرض والعرض والتجهيز — وفق مرحلة إطلاقكم.",
        image: PRODUCT_IMAGES.experience,
      },
      {
        href: "/show-unit",
        nameAr: "وحدة العرض",
        nameEn: "Show Unit",
        description: "فيلا أو شقة أو جناح يمشي فيه المشتري — أسلوب الحياة وقد صار مكاناً.",
        image: PRODUCT_IMAGES.showUnit,
      },
      {
        href: "/design-build",
        nameAr: "التصميم والتنفيذ",
        nameEn: "Design & Build",
        description: "من الفكرة إلى مساحة جاهزة: تصميم، تفاصيل، توريد، تركيب، تسليم.",
        image: PRODUCT_IMAGES.designBuild,
      },
    ],
    secondary: [
      {
        href: "/fit-out",
        nameAr: "التنفيذ والتجهيز",
        nameEn: "Fit-Out & Execution",
        description: "تصميمكم المعتمد. تنفيذنا. نبني — ولا نحل محل المصمم.",
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
        description: "مساحة قائمة. ما يبقى وما يتغير — يُحدَّد قبل بدء العمل.",
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
    eyebrow: "المنتج الأول",
    title: "جاهز للبيع. هل هو جاهز للعرض؟",
    body: "من مركز البيع إلى وحدة العرض، نصمم وننفذ البيئة التي يلتقي فيها مشروعك بعملائه. النطاق يتبع مرحلتكم وطريقة البيع.",
    cta: "تجربة المشروع العقاري",
  },
  album: {
    eyebrow: "أعمال مختارة",
    title: "مساحات بمهمة واضحة.",
    subtitle: "كل إطار يفتح المنتج الذي ينتمي إليه.",
    note: "خبرة فريق مختارة وأعمال حية — ليست قائمة عقود تاريخية باسم توريفا.",
    cta: "عرض الأعمال المختارة",
    items: [
      { image: PRODUCT_IMAGES.experience, category: "العقار", title: "حيث يُعرض المشروع", href: "/real-estate-experience" },
      { image: PRODUCT_IMAGES.showUnit, category: "وحدة العرض", title: "وحدة يمشي فيها المشتري", href: "/show-unit" },
      { image: PRODUCT_IMAGES.designBuild, category: "التصميم والتنفيذ", title: "من فكرة إلى غرفة", href: "/design-build" },
      { image: PRODUCT_IMAGES.fitOut, category: "التنفيذ والتجهيز", title: "مخططات تُبنى", href: "/fit-out" },
      { image: PRODUCT_IMAGES.commercial, category: "التجاري", title: "حيث تلتقي العلامة بالعميل", href: "/commercial-spaces" },
      { image: PRODUCT_IMAGES.renovation, category: "التجديد", title: "ما يبقى، وما يتغير", href: "/renovation" },
    ],
  },
  team: {
    eyebrow: "المصداقية",
    title: "علامة جديدة. فريق ذو خبرة.",
    intro:
      "توريفا علامة متخصصة، مدعومة بمن يعرف التصميم المكاني والتنفيذ والعمل البصري والتسليم.",
    note: "البرامج المسماة أدناه خبرة فريق مختارة — لا عقود تاريخية باسم توريفا إلا بعد تأكيد النسبة.",
    cta: "أعمالنا",
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "نفهم. نتفق. نسلّم.",
    intro: "مسار قصير يحفظ وضوح النطاق ويُبقي المساحة المكتملة مطابقة لما اعتُمد.",
    steps: [
      { title: "الفهم", body: "الموقع والمخططات والتوقيت وما يجب أن يفعله المكان." },
      { title: "التصميم", body: "الغرفة والمسار داخلها — عندما يكون التصميم في الموجز." },
      { title: "التطوير", body: "تفاصيل وكميات وعينات قبل التصنيع." },
      { title: "التنفيذ", body: "توريد وتصنيع وتركيب وفق المخططات المعتمدة." },
      { title: "التسليم", body: "مكان جاهز للعرض أو الاستخدام أو الافتتاح." },
    ],
  },
  teamExperience: "خبرة فريق مختارة",
  honestNote:
    "تُعرض كخبرة مختارة لفريق التنفيذ وشركاء المجموعة — وليست عقداً تاريخياً باسم توريفا.",
};

export function getRepositionCopy(locale: Locale): RepositionCopy {
  return locale === "ar" ? ar : en;
}
