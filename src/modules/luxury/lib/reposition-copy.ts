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
    title: "Design and execution of spaces and experiences.",
    body: "From spatial design and technical development to procurement, installation, and handover, Turriva works as one partner to turn a space from drawings into a place ready to use or to present.",
    audiences: "Residential · Commercial · Hospitality · Real estate development",
  },
  developers: {
    eyebrow: "For real estate developers",
    title: "From the project to the client experience.",
    intro:
      "The project may be ready to sell, but the way it is presented still needs a clear environment. Turriva designs and delivers the spaces where a development meets its clients.",
    points: [
      {
        title: "Sales gallery and show villa",
        body: "A clearer presentation of the living standard, not a loose furniture list.",
      },
      {
        title: "Show apartment and project presentation",
        body: "A path the buyer walks, coordinated with models and visual work when needed.",
      },
      {
        title: "Interactive experience and build",
        body: "Screens and models support the room when useful. They are not the product.",
      },
    ],
    cta: "Discuss your real estate project",
    fitOutCta: "Fit-out and execution",
    pageCta: "Discuss your project",
  },
  products: {
    eyebrow: "Products",
    title: "What you can buy from Turriva.",
    intro: "Seven products behind three doors. The first three carry the commercial weight.",
    learnMore: "Learn more",
    primary: [
      {
        href: "/real-estate-experience",
        nameAr: "تجربة المشروع العقاري",
        nameEn: "Real Estate Project Experience",
        description: "The environment where a development meets its clients: sales gallery, show unit, presentation, and fit-out.",
        image: PRODUCT_IMAGES.experience,
      },
      {
        href: "/show-unit",
        nameAr: "وحدة العرض",
        nameEn: "Show Unit",
        description: "A villa, apartment, or suite a buyer can walk. Not finishing alone: the lifestyle the project sells.",
        image: PRODUCT_IMAGES.showUnit,
      },
      {
        href: "/design-build",
        nameAr: "التصميم والتنفيذ",
        nameEn: "Design & Build",
        description: "From an idea to a space ready to use: design, technical development, supply, install, and handover.",
        image: PRODUCT_IMAGES.designBuild,
      },
    ],
    secondary: [
      {
        href: "/fit-out",
        nameAr: "التنفيذ والتجهيز",
        nameEn: "Fit-Out & Execution",
        description: "Your design. Our execution. An execution partner for architects and designers, not a second studio.",
        image: PRODUCT_IMAGES.fitOut,
      },
      {
        href: "/commercial-spaces",
        nameAr: "المساحات التجارية",
        nameEn: "Commercial Spaces",
        description: "Retail, restaurants, cafés, showrooms, and offices that carry the brand and work in daily use.",
        image: PRODUCT_IMAGES.commercial,
      },
      {
        href: "/hospitality-spaces",
        nameAr: "مساحات الضيافة",
        nameEn: "Hospitality Spaces",
        description: "Hotels, serviced apartments, lobbies, and guest areas where the stay begins in the room.",
        image: PRODUCT_IMAGES.hospitality,
      },
      {
        href: "/renovation",
        nameAr: "التجديد والتطوير",
        nameEn: "Renovation & Upgrade",
        description: "An existing room. What stays, what changes. Not demolition first.",
        image: PRODUCT_IMAGES.renovation,
      },
    ],
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "What Turriva can execute.",
    intro: "Capabilities support the products. They are not a second catalogue of what you buy.",
    items: [
      { title: "Spatial design", description: "The plan, materials, and how the room is used." },
      { title: "Technical development", description: "Shop drawings, quantities, and a buildable specification." },
      { title: "Joinery and fabrication", description: "Custom joinery to the drawings. Not a kitchen shop identity." },
      { title: "Fit-out and installation", description: "Site coordination, installation, QA, and handover." },
      { title: "Procurement", description: "Materials, furniture, and lighting against the approved specification." },
      { title: "Experience integration", description: "Displays, models, and content only when the project needs them." },
    ],
    cta: "See capabilities",
  },
  featured: {
    eyebrow: "Primary product",
    title: "Your project is ready to sell. Is the way you show it ready?",
    body: "From the sales centre to the show unit, from the room to the experience: we design and deliver the environment in which your project presents itself to clients. Scope follows the developer, the phase, and the sales method.",
    cta: "Real estate project experience",
  },
  album: {
    eyebrow: "Selected work",
    title: "Spaces, not a catalogue.",
    subtitle: "Each frame opens the door it belongs to.",
    note: "Selected team experience and live work. Not a list of historical Turriva contracts.",
    cta: "View selected work",
    items: [
      { image: PRODUCT_IMAGES.experience, category: "Real estate", title: "The place a project is shown", href: "/real-estate-experience" },
      { image: PRODUCT_IMAGES.showUnit, category: "Show unit", title: "A unit a buyer walks", href: "/show-unit" },
      { image: PRODUCT_IMAGES.designBuild, category: "Design and build", title: "From an idea to a room", href: "/design-build" },
      { image: PRODUCT_IMAGES.fitOut, category: "Fit-out", title: "Drawings, built", href: "/fit-out" },
      { image: PRODUCT_IMAGES.commercial, category: "Commercial", title: "Where the customer meets the brand", href: "/commercial-spaces" },
      { image: PRODUCT_IMAGES.renovation, category: "Renovation", title: "What stays, and what changes", href: "/renovation" },
    ],
  },
  team: {
    eyebrow: "Credibility",
    title: "Selected team experience.",
    intro:
      "Turriva is a new specialized brand, backed by an experienced team in spatial design, execution, visual communication, and project delivery.",
    note: "Named programmes below are shown as selected team experience, not as historical Turriva contracts, unless that attribution is confirmed.",
    cta: "Our work",
  },
  method: {
    eyebrow: "How we work",
    title: "From understanding to handover.",
    intro: "A short path that keeps scope clear and the finished space aligned with what was approved.",
    steps: [
      { title: "Understand", body: "Site, drawings, opening date, and what the space has to do." },
      { title: "Design", body: "The room and the path through it, when design is part of the brief." },
      { title: "Develop", body: "Technical detailing, quantities, and samples before fabrication." },
      { title: "Build", body: "Procurement, fabrication, and installation against the approved drawings." },
      { title: "Deliver", body: "A space ready to show, occupy, or open." },
    ],
  },
  teamExperience: "Selected team experience",
  honestNote:
    "Shown as selected experience of the delivery team and group partners. Not presented as a historical Turriva-branded contract.",
};

const ar: RepositionCopy = {
  navDevelopers: "تجربة المشروع",
  definition: {
    eyebrow: "ما هي توريفا",
    title: "تصميم وتنفيذ المساحات والتجارب.",
    body: "من التصميم المكاني والتطوير الفني، إلى التنفيذ والتوريد والتركيب والتسليم، تعمل توريفا كشريك واحد لتحويل المساحة من مخطط إلى واقع جاهز للاستخدام أو العرض.",
    audiences: "سكني · تجاري · ضيافة · تطوير عقاري",
  },
  developers: {
    eyebrow: "للمطورين العقاريين",
    title: "من المشروع إلى تجربة العميل.",
    intro:
      "المشروع قد يكون جاهزاً للبيع، لكن طريقة تقديمه للعميل تحتاج إلى بيئة واضحة ومقنعة. تساعد توريفا المطور على تصميم وتنفيذ المساحات التي يلتقي فيها المشروع بعملائه.",
    points: [
      {
        title: "مركز البيع وفيلا العرض",
        body: "تقديم أوضح لمستوى المعيشة، لا قائمة أثاث منفصلة.",
      },
      {
        title: "شقة العرض وعرض المشروع",
        body: "مسار يمشي فيه المشتري، منسَّق مع المجسمات والعمل البصري عند الحاجة.",
      },
      {
        title: "تجربة تفاعلية وتنفيذ",
        body: "الشاشات والمجسمات تخدم المكان عندما تفيد. ليست المنتج.",
      },
    ],
    cta: "ناقش مشروعك العقاري",
    fitOutCta: "التنفيذ والتجهيز",
    pageCta: "ناقش مشروعك",
  },
  products: {
    eyebrow: "المنتجات",
    title: "ما يمكن شراؤه من توريفا.",
    intro: "سبعة منتجات خلف ثلاثة أبواب. الثلاثة الأولى تحمل الوزن التجاري.",
    learnMore: "اعرف المزيد",
    primary: [
      {
        href: "/real-estate-experience",
        nameAr: "تجربة المشروع العقاري",
        nameEn: "Real Estate Project Experience",
        description: "البيئة التي يلتقي فيها المشروع بعملائه: مركز البيع ووحدة العرض والعرض والتجهيز.",
        image: PRODUCT_IMAGES.experience,
      },
      {
        href: "/show-unit",
        nameAr: "وحدة العرض",
        nameEn: "Show Unit",
        description: "فيلا أو شقة أو جناح يمشي فيه المشتري. ليست تشطيباً فقط: أسلوب الحياة الذي يبيعه المشروع.",
        image: PRODUCT_IMAGES.showUnit,
      },
      {
        href: "/design-build",
        nameAr: "التصميم والتنفيذ",
        nameEn: "Design & Build",
        description: "من فكرة إلى مساحة جاهزة للاستخدام: تصميم وتطوير فني وتوريد وتركيب وتسليم.",
        image: PRODUCT_IMAGES.designBuild,
      },
    ],
    secondary: [
      {
        href: "/fit-out",
        nameAr: "التنفيذ والتجهيز",
        nameEn: "Fit-Out & Execution",
        description: "تصميمكم. تنفيذنا. شريك تنفيذ للمعماريين والمصممين، لا مصمم ثانٍ.",
        image: PRODUCT_IMAGES.fitOut,
      },
      {
        href: "/commercial-spaces",
        nameAr: "المساحات التجارية",
        nameEn: "Commercial Spaces",
        description: "تجزئة ومطاعم ومقاهٍ وصالات عرض ومكاتب تحمل العلامة وتعمل يومياً.",
        image: PRODUCT_IMAGES.commercial,
      },
      {
        href: "/hospitality-spaces",
        nameAr: "مساحات الضيافة",
        nameEn: "Hospitality Spaces",
        description: "فنادق وشقق فندقية وردهات ومناطق ضيوف تبدأ فيها الإقامة من المكان.",
        image: PRODUCT_IMAGES.hospitality,
      },
      {
        href: "/renovation",
        nameAr: "التجديد والتطوير",
        nameEn: "Renovation & Upgrade",
        description: "مساحة قائمة. ما يبقى وما يتغير. لا نبدأ بالهدم.",
        image: PRODUCT_IMAGES.renovation,
      },
    ],
  },
  capabilities: {
    eyebrow: "القدرات",
    title: "ما الذي يمكن لتوريفا تنفيذه؟",
    intro: "القدرات تدعم المنتجات. ليست كتالوجاً ثانياً لما يُشترى.",
    items: [
      { title: "التصميم المكاني", description: "التخطيط والمواد وطريقة استخدام الغرفة." },
      { title: "التطوير الفني", description: "مخططات تنفيذ وكميات ومواصفات قابلة للبناء." },
      { title: "النجارة والتصنيع", description: "نجارة وفق المخططات. ليست هوية متجر مطابخ." },
      { title: "التجهيز والتركيب", description: "تنسيق موقع وتركيب وضبط جودة وتسليم." },
      { title: "التوريد", description: "مواد وأثاث وإضاءة وفق المواصفات المعتمدة." },
      { title: "دمج التجربة", description: "شاشات ومجسمات ومحتوى فقط عندما يحتاجها المشروع." },
    ],
    cta: "عرض القدرات",
  },
  featured: {
    eyebrow: "المنتج الأول",
    title: "مشروعك جاهز للبيع. هل تجربة عرضه جاهزة؟",
    body: "من مركز البيع إلى وحدة العرض، ومن المساحة إلى التجربة: نصمم وننفذ البيئة التي يقدم فيها مشروعك نفسه لعملائه. يُبنى النطاق حسب احتياجات المطور ومرحلة المشروع وطريقة البيع.",
    cta: "تجربة المشروع العقاري",
  },
  album: {
    eyebrow: "أعمال مختارة",
    title: "مساحات، لا كتالوج.",
    subtitle: "كل إطار يفتح الباب الذي ينتمي إليه.",
    note: "خبرة فريق مختارة وأعمال حية. ليست قائمة عقود تاريخية باسم توريفا.",
    cta: "عرض الأعمال المختارة",
    items: [
      { image: PRODUCT_IMAGES.experience, category: "العقار", title: "المكان الذي يُعرض فيه المشروع", href: "/real-estate-experience" },
      { image: PRODUCT_IMAGES.showUnit, category: "وحدة العرض", title: "وحدة يمشي فيها المشتري", href: "/show-unit" },
      { image: PRODUCT_IMAGES.designBuild, category: "التصميم والتنفيذ", title: "من فكرة إلى غرفة", href: "/design-build" },
      { image: PRODUCT_IMAGES.fitOut, category: "التنفيذ والتجهيز", title: "مخططات تُبنى", href: "/fit-out" },
      { image: PRODUCT_IMAGES.commercial, category: "التجاري", title: "حيث يلتقي العميل بالعلامة", href: "/commercial-spaces" },
      { image: PRODUCT_IMAGES.renovation, category: "التجديد", title: "ما يبقى، وما يتغير", href: "/renovation" },
    ],
  },
  team: {
    eyebrow: "المصداقية",
    title: "خبرة فريق مختارة.",
    intro:
      "توريفا علامة متخصصة حديثة، مدعومة بفريق ذي خبرة في التصميم والتنفيذ والتجارب البصرية والتقنية وتسليم المشاريع.",
    note: "البرامج المسماة أدناه تُعرض كخبرة فريق مختارة، لا كعقود تاريخية باسم توريفا، إلا بعد تأكيد النسبة.",
    cta: "أعمالنا",
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "من الفهم إلى التسليم.",
    intro: "مسار قصير يحافظ على وضوح النطاق وعلى تطابق المكان المكتمل مع ما اعتُمد.",
    steps: [
      { title: "الفهم", body: "الموقع والمخططات وموعد الافتتاح وما يجب أن يفعله المكان." },
      { title: "التصميم", body: "الغرفة والمسار داخلها، عندما يكون التصميم جزءاً من الموجز." },
      { title: "التطوير", body: "تفصيل فني وكميات وعينات قبل التصنيع." },
      { title: "البناء", body: "توريد وتصنيع وتركيب وفق المخططات المعتمدة." },
      { title: "التسليم", body: "مكان جاهز للعرض أو الاستخدام أو الافتتاح." },
    ],
  },
  teamExperience: "خبرة فريق مختارة",
  honestNote:
    "تُعرض كخبرة مختارة لفريق التنفيذ وشركاء المجموعة. ليست عقدًا تاريخيًا باسم توريفا.",
};

export function getRepositionCopy(locale: Locale): RepositionCopy {
  return locale === "ar" ? ar : en;
}
