import type { Locale } from "@/shared/i18n/locale";

export const EXPERIENCE_PATH = "/real-estate-experience";

export const EXPERIENCE_PROJECT_TYPES = [
  "residential",
  "commercial",
  "hospitality",
  "mixed",
  "sales_gallery",
  "show_unit",
  "other",
] as const;

export type ExperienceProjectType = (typeof EXPERIENCE_PROJECT_TYPES)[number];

export const EXPERIENCE_NEEDS = [
  "design",
  "execution",
  "sales_gallery",
  "show_unit",
  "model",
  "interactive",
  "full_fitout",
] as const;

export type ExperienceNeed = (typeof EXPERIENCE_NEEDS)[number];

export type ExperienceCopy = {
  nav: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    question: string;
    body: string;
    cta: string;
    secondary: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    body: string;
    points: readonly string[];
  };
  definition: {
    eyebrow: string;
    title: string;
    body: string;
    result: string;
  };
  includes: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly { title: string; points: readonly string[]; more?: string; moreHref?: string }[];
    techNote: string;
  };
  flexible: {
    eyebrow: string;
    title: string;
    intro: string;
    options: readonly string[];
  };
  levels: {
    eyebrow: string;
    title: string;
    note: string;
    items: readonly { name: string; nameAlt?: string; body: string; points: readonly string[] }[];
  };
  when: {
    eyebrow: string;
    title: string;
    items: readonly string[];
  };
  journey: {
    eyebrow: string;
    title: string;
    steps: readonly string[];
  };
  why: {
    eyebrow: string;
    title: string;
    items: readonly { title: string; body: string }[];
    trust: string;
  };
  scenario: {
    eyebrow: string;
    title: string;
    label: string;
    project: string;
    needsTitle: string;
    needs: readonly string[];
    turriva: string;
    graphics: string;
    result: string;
  };
  close: {
    line: string;
    brand: string;
    tagline: string;
    title: string;
    body: string;
  };
  form: {
    company: string;
    name: string;
    title: string;
    phone: string;
    email: string;
    city: string;
    projectType: string;
    projectTypes: Record<ExperienceProjectType, string>;
    needs: string;
    needLabels: Record<ExperienceNeed, string>;
    brief: string;
    briefPlaceholder: string;
    file: string;
    fileHint: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    needError: string;
    whatsapp: string;
  };
};

const en: ExperienceCopy = {
  nav: "Project experience",
  metaTitle: "Real estate project experience",
  metaDescription:
    "We design and deliver the place where a real-estate project meets its clients: a sales gallery, a show unit, models, and fit-out. The first step is a conversation, not a price.",
  hero: {
    eyebrow: "Real estate project experience",
    title: "Your project is ready to sell.",
    question: "Is the experience ready?",
    body: "From sales gallery to show unit, we design and deliver the environment where your project presents itself to buyers.",
    cta: "Discuss your project",
    secondary: "Send project details",
  },
  problem: {
    eyebrow: "The gap",
    title: "A strong project can still be hard to read.",
    body: "Drawings, renders, brochures, and a sales talk are rarely enough. Buyers need a place that makes the project clear.",
    points: [
      "See the project, not only its drawings",
      "Compare options in one visit",
      "Leave with a clear picture",
    ],
  },
  definition: {
    eyebrow: "The product",
    title: "The environment where the project meets its clients.",
    body: "We prepare the sales environment around what the team must show: design, detailing, fit-out, and visual tools only where they help.",
    result: "A clearer presentation for the sales team. A place the buyer can understand and explore. No unverifiable sales claims.",
  },
  includes: {
    eyebrow: "Scope",
    title: "What the work can cover",
    intro: "Six parts. Scoped after we understand the project — not a fixed package.",
    items: [
      {
        title: "Sales environment",
        points: ["Sales gallery", "Reception", "Meeting rooms", "Project display", "Private client rooms"],
      },
      {
        title: "Show unit",
        points: ["Show villa, apartment, or suite", "Finishes and furniture", "Lighting", "Smart systems if needed"],
        more: "Can be commissioned alone →",
        moreHref: "/show-unit",
      },
      {
        title: "Project display",
        points: ["Scale model", "Masterplan model", "Screens", "Maps", "Unit display"],
      },
      {
        title: "Interactive tools",
        points: ["Interactive screens", "3D views", "Unit exploration", "Picture and sound"],
      },
      {
        title: "Identity and content",
        points: ["Project identity", "Renders and film", "Models", "Digital content", "Graphics House when needed"],
      },
      {
        title: "Delivery",
        points: ["Technical development", "Supply", "Fabrication and install", "Coordination and handover"],
      },
    ],
    techNote: "Screens and models are tools — used when they explain what drawings cannot. Turriva does not sell or build a software platform.",
  },
  flexible: {
    eyebrow: "Starting point",
    title: "Scope follows the project.",
    intro: "Built around project type, stage, and how units are sold. Nothing is mandatory.",
    options: [
      "Sales gallery only",
      "Gallery + model",
      "Gallery + show villa",
      "Show apartment only",
      "Interactive tools where useful",
      "Wider launch scope",
    ],
  },
  levels: {
    eyebrow: "Scale",
    title: "Three ways to size the work.",
    note: "These describe the size of the environment — not a price list. Fee follows scope.",
    items: [
      {
        name: "Sales Environment",
        body: "A professional place to receive buyers.",
        points: ["Design and finishes", "Furniture", "Identity in space", "Display screens", "Model or display", "Execution"],
      },
      {
        name: "Project Experience",
        body: "A fuller way to present the project.",
        points: ["Sales gallery", "Show unit", "Model", "Interactive displays", "Project content", "Fit-out and handover"],
      },
      {
        name: "Signature Experience",
        body: "For a high-value project or full experience center.",
        points: ["Experience center", "Show units", "Masterplan model", "Digital presentation", "Interior and fit-out", "Coordination"],
      },
    ],
  },
  when: {
    eyebrow: "Timing",
    title: "When this environment matters",
    items: [
      "Launch is approaching",
      "Sales are about to start",
      "The gallery still needs preparation",
      "Units need to be shown",
      "The project is large or multi-unit",
      "The sales team needs a clearer path",
      "Renders and brochures are not enough",
      "The project carries more than a conversation can",
    ],
  },
  journey: {
    eyebrow: "Method",
    title: "From project to client",
    steps: [
      "Project",
      "Understanding",
      "What sales must show",
      "Environment design",
      "Detailing",
      "Fit-out",
      "Handover",
      "Ready for clients",
    ],
  },
  why: {
    eyebrow: "Why Turriva",
    title: "One conversation for the whole environment.",
    items: [
      {
        title: "Design through delivery",
        body: "We do not stop at drawings. We detail, build, and hand over.",
      },
      {
        title: "Space built for understanding",
        body: "A sales gallery is where the buyer understands the project — not only an interior finish.",
      },
      {
        title: "Visual layer when needed",
        body: "Graphics House can add identity, CGI, film, models, and interactive content — without a separate hire unless you want one.",
      },
    ],
    trust: "A specialized brand, backed by a team experienced in design, execution, and visual work.",
  },
  scenario: {
    eyebrow: "Example",
    title: "From drawings to a place clients visit",
    label: "Illustrative example — not a named Turriva project.",
    project: "Multi-unit residential launch",
    needsTitle: "Typical needs",
    needs: ["Sales gallery", "Show unit", "Masterplan model", "Interactive screen", "Unit display", "Materials", "Visual content"],
    turriva: "Turriva handles design, execution, fit-out, and technology only where it explains the project.",
    graphics: "Graphics House adds CGI, film, models, and interactive content when required.",
    result: "A sales environment ready to receive clients.",
  },
  close: {
    line: "From gallery to show unit, we design and deliver the environment in which your project presents itself.",
    brand: "TURRIVA",
    tagline: "Spatial design · Experience · Build",
    title: "A project coming up?",
    body: "Share what you have. We review the need and propose a scope. First step: a conversation — not a price in the dark.",
  },
  form: {
    company: "Company",
    name: "Your name",
    title: "Role",
    phone: "Phone",
    email: "Email",
    city: "City",
    projectType: "Project type",
    projectTypes: {
      residential: "Residential",
      commercial: "Commercial",
      hospitality: "Hospitality",
      mixed: "Mixed use",
      sales_gallery: "Sales gallery",
      show_unit: "Show villa or apartment",
      other: "Other",
    },
    needs: "What do you need?",
    needLabels: {
      design: "Design",
      execution: "Execution",
      sales_gallery: "Sales gallery",
      show_unit: "Show unit",
      model: "Model",
      interactive: "Interactive tools",
      full_fitout: "Full fit-out",
    },
    brief: "A short note on the project",
    briefPlaceholder: "Location, number of units, launch timing, and what you already have.",
    file: "Project file",
    fileHint: "Optional. PDF, image, or drawing.",
    submit: "Discuss your project",
    submitting: "Sending…",
    success: "We have the brief. We will review it and come back to arrange a conversation.",
    error: "Something went wrong. Try again, or email us.",
    needError: "Choose at least one item.",
    whatsapp: "Continue on WhatsApp",
  },
};

const ar: ExperienceCopy = {
  nav: "تجربة المشروع",
  metaTitle: "تجربة المشروع العقاري",
  metaDescription:
    "نصمّم وننفّذ البيئة التي يستقبل فيها المشروع العقاري عملاءه: مركز البيع ووحدة العرض والمجسمات والتجهيز. الخطوة الأولى محادثة، لا سعر.",
  hero: {
    eyebrow: "تجربة المشروع العقاري",
    title: "مشروعك جاهز للبيع.",
    question: "هل تجربة عرضه جاهزة؟",
    body: "من مركز البيع إلى وحدة العرض، نصمم وننفذ البيئة التي يقدم فيها مشروعك نفسه للمشترين.",
    cta: "ناقش مشروعك",
    secondary: "أرسل تفاصيل المشروع",
  },
  problem: {
    eyebrow: "الفجوة",
    title: "المشروع القوي قد يبقى صعب القراءة.",
    body: "المخططات والرندرات والكتيّب وحديث المبيعات نادرًا ما تكفي. المشتري يحتاج مكانًا يوضح المشروع.",
    points: [
      "يرى المشروع لا رسمه فقط",
      "يقارن الخيارات في زيارة واحدة",
      "يخرج بصورة واضحة",
    ],
  },
  definition: {
    eyebrow: "المنتج",
    title: "البيئة التي يلتقي فيها المشروع بعملائه.",
    body: "نجهّز بيئة البيع حول ما يجب أن يظهره فريق المبيعات: تصميم، تطوير، تجهيز، وأدوات بصرية فقط حيث تفيد.",
    result: "عرض أوضح لفريق المبيعات. مكان يفهمه المشتري ويستكشفه. بلا ادّعاء نتيجة بيع لا تُقاس.",
  },
  includes: {
    eyebrow: "النطاق",
    title: "ما يمكن أن يشمله العمل",
    intro: "ستة أجزاء. نحدد النطاق بعد فهم المشروع — ليست باقة ثابتة.",
    items: [
      {
        title: "بيئة البيع",
        points: ["مركز المبيعات", "الاستقبال", "غرف الاجتماعات", "عرض المشروع", "مناطق كبار العملاء"],
      },
      {
        title: "وحدة العرض",
        points: ["فيلا أو شقة أو جناح عرض", "تشطيب وأثاث", "إضاءة", "أنظمة ذكية عند الحاجة"],
        more: "يمكن التعاقد عليها وحدها ←",
        moreHref: "/show-unit",
      },
      {
        title: "عرض المشروع",
        points: ["مجسم", "مجسم المخطط العام", "شاشات", "خرائط", "عرض الوحدات"],
      },
      {
        title: "أدوات تفاعلية",
        points: ["شاشات تفاعلية", "عروض ثلاثية الأبعاد", "استكشاف الوحدات", "صورة وصوت"],
      },
      {
        title: "الهوية والمحتوى",
        points: ["هوية المشروع", "رندرات وأفلام", "مجسمات", "محتوى رقمي", "جرافيكس هاوس عند الحاجة"],
      },
      {
        title: "التنفيذ والتسليم",
        points: ["التطوير الفني", "التوريد", "التصنيع والتركيب", "التنسيق والتسليم"],
      },
    ],
    techNote: "الشاشات والمجسمات أدوات — تُستخدم حين تشرح ما لا تشرحه المخططات. توريفا لا تبيع منصة برمجية ولا تبنيها.",
  },
  flexible: {
    eyebrow: "نقطة البداية",
    title: "النطاق يتبع المشروع.",
    intro: "يُبنى حسب نوع المشروع ومرحلته وطريقة البيع. لا شيء إلزامي.",
    options: [
      "مركز بيع فقط",
      "مركز بيع ومجسم",
      "مركز بيع وفيلا عرض",
      "شقة عرض فقط",
      "أدوات تفاعلية حيث تفيد",
      "نطاق إطلاق أوسع",
    ],
  },
  levels: {
    eyebrow: "الحجم",
    title: "ثلاثة مستويات لحجم العمل.",
    note: "تصف حجم البيئة المطلوبة — ليست قائمة أسعار. السعر يتبع النطاق.",
    items: [
      {
        name: "بيئة البيع",
        nameAlt: "Sales Environment",
        body: "مكان احترافي لاستقبال المشترين.",
        points: ["تصميم وتشطيب", "أثاث", "الهوية في المساحة", "شاشات العرض", "مجسم أو عناصر عرض", "تنفيذ"],
      },
      {
        name: "تجربة المشروع",
        nameAlt: "Project Experience",
        body: "طريقة أوضح لعرض المشروع.",
        points: ["مركز مبيعات", "وحدة عرض", "مجسم", "شاشات تفاعلية", "محتوى المشروع", "تجهيز وتسليم"],
      },
      {
        name: "تجربة التوقيع",
        nameAlt: "Signature Experience",
        body: "لمشروع عالي القيمة أو مركز تجربة كامل.",
        points: ["مركز تجربة", "وحدات عرض", "مجسم المخطط", "عرض رقمي", "تصميم وتجهيز", "تنسيق وتسليم"],
      },
    ],
  },
  when: {
    eyebrow: "التوقيت",
    title: "متى تهمّ هذه البيئة",
    items: [
      "الإطلاق يقترب",
      "البيع على وشك البدء",
      "مركز المبيعات ما زال يحتاج تجهيزًا",
      "توجد وحدات تحتاج عرضًا",
      "المشروع كبير أو متعدد الوحدات",
      "فريق المبيعات يحتاج مسارًا أوضح",
      "الرندرات والكتيبات لا تكفي",
      "في المشروع ما لا يحمله حديث واحد",
    ],
  },
  journey: {
    eyebrow: "المنهج",
    title: "من المشروع إلى العميل",
    steps: [
      "المشروع",
      "الفهم",
      "ما يجب إظهاره",
      "تصميم البيئة",
      "التفاصيل",
      "التجهيز",
      "التسليم",
      "جاهز للعملاء",
    ],
  },
  why: {
    eyebrow: "لماذا توريفا",
    title: "محادثة واحدة عن البيئة كاملة.",
    items: [
      {
        title: "من التصميم إلى التسليم",
        body: "لا نتوقف عند المخططات. نطوّر ونبني ونسلّم.",
      },
      {
        title: "مساحة تُفهم",
        body: "مركز البيع مكان يفهم فيه المشتري المشروع — لا تشطيب داخلي فحسب.",
      },
      {
        title: "طبقة بصرية عند الحاجة",
        body: "جرافيكس هاوس تضيف الهوية والتصوير والأفلام والمجسمات والمحتوى التفاعلي — دون تعاقد منفصل إلا إذا رغبت.",
      },
    ],
    trust: "علامة متخصصة، مدعومة بفريق ذي خبرة في التصميم والتنفيذ والعمل البصري.",
  },
  scenario: {
    eyebrow: "مثال",
    title: "من المخططات إلى مكان يزوره العميل",
    label: "مثال توضيحي — ليس مشروعًا باسم توريفا.",
    project: "إطلاق سكني متعدد الوحدات",
    needsTitle: "احتياج نموذجي",
    needs: ["مركز مبيعات", "وحدة عرض", "مجسم المخطط", "شاشة تفاعلية", "عرض الوحدات", "المواد", "محتوى بصري"],
    turriva: "توريفا: التصميم والتنفيذ والتجهيز، والتقنية فقط حيث تشرح المشروع.",
    graphics: "جرافيكس هاوس: تصور وأفلام ومجسم ومحتوى تفاعلي عند الحاجة.",
    result: "بيئة بيع جاهزة لاستقبال العملاء.",
  },
  close: {
    line: "من مركز البيع إلى وحدة العرض، نصمم وننفذ البيئة التي يقدم فيها مشروعك نفسه.",
    brand: "TURRIVA",
    tagline: "تصميم مكاني · تجربة · تنفيذ",
    title: "لديك مشروع قادم؟",
    body: "شاركنا ما لديك. نراجع الاحتياج ونقترح النطاق. الخطوة الأولى محادثة — لا سعر في الظلام.",
  },
  form: {
    company: "اسم الشركة",
    name: "اسم المسؤول",
    title: "المسمى الوظيفي",
    phone: "رقم التواصل",
    email: "البريد الإلكتروني",
    city: "المدينة",
    projectType: "نوع المشروع",
    projectTypes: {
      residential: "مشروع سكني",
      commercial: "مشروع تجاري",
      hospitality: "مشروع ضيافة",
      mixed: "متعدد الاستخدامات",
      sales_gallery: "مركز مبيعات",
      show_unit: "فيلا أو شقة عرض",
      other: "مشروع آخر",
    },
    needs: "ما الذي تحتاجه؟",
    needLabels: {
      design: "تصميم",
      execution: "تنفيذ",
      sales_gallery: "مركز مبيعات",
      show_unit: "وحدة عرض",
      model: "مجسم",
      interactive: "تجربة تفاعلية",
      full_fitout: "تجهيز كامل",
    },
    brief: "نبذة مختصرة عن المشروع",
    briefPlaceholder: "الموقع، عدد الوحدات، توقيت الإطلاق، وما هو جاهز لديكم.",
    file: "ملف المشروع",
    fileHint: "اختياري. PDF أو صورة أو مخطط.",
    submit: "ناقش مشروعك معنا",
    submitting: "جارٍ الإرسال…",
    success: "وصلنا الملخص. سنراجعه ونتواصل لترتيب محادثة حول المشروع.",
    error: "حدث خطأ. أعد المحاولة، أو راسلنا.",
    needError: "اختر عنصرًا واحدًا على الأقل.",
    whatsapp: "تابع على واتساب",
  },
};

export function getExperienceCopy(locale: Locale): ExperienceCopy {
  return locale === "ar" ? ar : en;
}
