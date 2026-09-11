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
    items: readonly { title: string; points: readonly string[] }[];
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
    items: readonly { name: string; body: string; points: readonly string[] }[];
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
    question: "Is the way you show it ready?",
    body: "We design and deliver the place where your project meets its clients, from the sales gallery and show unit to models, interactive tools, and interior fit-out.",
    cta: "Discuss your project",
    secondary: "What the work includes",
  },
  problem: {
    eyebrow: "The problem",
    title: "A good project can still be hard to understand.",
    body: "You may already have drawings, units, and a sales team. The client still may not grasp the project from plans, renders, a brochure, a screen, or a conversation alone.",
    points: [
      "See the project, not only a drawing of it",
      "Compare options in one place",
      "Leave with a clear picture, not a stack of pages",
    ],
  },
  definition: {
    eyebrow: "The product",
    title: "Real estate project experience",
    body: "A defined scope to prepare the environment that presents a real-estate project. It starts from the project and what the sales team needs to show, then designs that space, details it, and delivers it. Visual and interactive elements are used only where they help.",
    result:
      "We help the sales team present the project more clearly, and give the client a place to understand and explore it. We do not claim a sales result we cannot measure.",
  },
  includes: {
    eyebrow: "Scope",
    title: "What the work can include",
    intro: "Six parts. Not a fixed package. We set the scope after we understand the project.",
    items: [
      {
        title: "Sales environment",
        points: ["Sales gallery", "Reception", "Meeting rooms", "Project display", "Private client rooms"],
      },
      {
        title: "Show unit",
        points: ["Show villa, apartment, or suite", "Finishes and furniture", "Lighting", "Smart systems only if needed"],
      },
      {
        title: "Project display",
        points: ["Scale model", "Masterplan model", "Screens", "Project maps", "Unit display"],
      },
      {
        title: "Interactive tools",
        points: ["Interactive screens", "3D views", "Unit exploration", "Picture and sound"],
      },
      {
        title: "Identity and content",
        points: ["Project identity", "Renders and film", "Models", "Digital content", "Graphics House, when needed"],
      },
      {
        title: "Delivery",
        points: ["Technical development", "Quantities and supply", "Fabrication and installation", "Coordination, quality, handover"],
      },
    ],
    techNote:
      "Screens and models are tools. They are used when they explain something the drawings cannot. Turriva does not sell a software platform, and does not build one.",
  },
  flexible: {
    eyebrow: "How we start",
    title: "The solution follows the project.",
    intro: "Not every project needs a large experience center. It may need one of these, or a combination.",
    options: [
      "A sales gallery only",
      "A sales gallery and a model",
      "A sales gallery and a show villa",
      "A show apartment only",
      "Interactive tools, where they explain the project",
      "A wider set, if the launch needs it",
    ],
  },
  levels: {
    eyebrow: "Size of the work",
    title: "Three ways to size the solution. Not a price list.",
    note: "These describe how much of the environment is in scope. The fee is set after we understand the project and the work.",
    items: [
      {
        name: "Sales Environment",
        body: "A professional place to receive buyers.",
        points: ["Design and finishes", "Furniture", "Identity inside the space", "Display screens", "A model or display elements", "Execution"],
      },
      {
        name: "Project Experience",
        body: "A fuller way to present the project.",
        points: ["Sales gallery", "Show unit", "Model", "Interactive displays where they help", "Project content", "Fit-out and handover"],
      },
      {
        name: "Signature Experience",
        body: "For a high-value project, or a full experience center.",
        points: ["Experience center", "Show units", "Masterplan model", "Digital presentation", "Interior design and fit-out", "Coordination and handover"],
      },
    ],
  },
  when: {
    eyebrow: "Timing",
    title: "Does the project need this?",
    items: [
      "Launch is approaching",
      "Sales are about to start",
      "A sales gallery still needs to be prepared",
      "Units need to be shown",
      "The project is large, or has many units",
      "The sales team needs a clearer way to present it",
      "Renders and brochures are not enough",
      "The project has more than a conversation can carry",
    ],
  },
  journey: {
    eyebrow: "How we work",
    title: "From the project to the client",
    steps: [
      "The project",
      "Understand it",
      "What sales must show",
      "Design the environment",
      "Detail it",
      "Fit-out and install",
      "Handover",
      "The sales team can receive clients",
    ],
  },
  why: {
    eyebrow: "Why Turriva",
    title: "One conversation for the environment.",
    items: [
      {
        title: "Design and execution",
        body: "We do not stop at drawings. We detail the space, build it, and hand it over.",
      },
      {
        title: "The space, and how the client uses it",
        body: "A sales gallery is not only an interior. It is where the client understands the project.",
      },
      {
        title: "Visual work, when the project needs it",
        body: "Graphics House can add identity, CGI, film, models, and interactive content. You do not have to hire that layer separately unless you want to.",
      },
    ],
    trust: "Turriva is a new specialized brand, backed by a team with experience in design, execution, and visual work.",
  },
  scenario: {
    eyebrow: "An example",
    title: "How a project can become a place clients visit",
    label: "An example. Not a completed Turriva project.",
    project: "A multi-unit residential project",
    needsTitle: "It needs",
    needs: ["A sales gallery", "A show unit", "A masterplan model", "An interactive screen", "Unit display", "Materials", "Visual content"],
    turriva: "Turriva: design, execution, fit-out, and technology only where it explains the project.",
    graphics: "Graphics House: CGI, film, a model, and interactive content, if the project needs them.",
    result: "A sales environment ready to receive clients.",
  },
  close: {
    line: "From the sales gallery to the show unit, and from the space to the way the client reads the project, we design and deliver the environment in which your project presents itself.",
    brand: "TURRIVA",
    tagline: "Spatial design and execution. From concept to physical reality.",
    title: "A project coming up?",
    body: "Share what you have. We will review what the project needs and propose a scope. The first step is a conversation, not a price sent in the dark.",
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
    body: "نصمّم وننفّذ البيئة التي يستقبل فيها مشروعك عملاءه، من مركز البيع ووحدة العرض إلى المجسمات والتجارب التفاعلية والتجهيزات الداخلية.",
    cta: "ناقش مشروعك معنا",
    secondary: "ماذا يشمل الحل",
  },
  problem: {
    eyebrow: "المشكلة",
    title: "المشروع الجيد قد يبقى صعب الفهم.",
    body: "قد تكون لديك مخططات ووحدات وفريق مبيعات. ومع ذلك قد لا يفهم العميل المشروع من المخططات أو الرندرات أو الكتيّب أو شاشة العرض أو حديث موظف المبيعات وحده.",
    points: [
      "يرى المشروع، لا رسمًا له فقط",
      "يقارن الخيارات في مكان واحد",
      "يخرج بصورة واضحة، لا بكومة أوراق",
    ],
  },
  definition: {
    eyebrow: "المنتج",
    title: "تجربة المشروع العقاري",
    body: "نطاق محدد لتجهيز بيئة عرض المشروع العقاري. يبدأ من فهم المشروع وما يحتاج فريق المبيعات إلى إظهاره، ثم تصميم المساحة وتطويرها وتنفيذها وتجهيزها بالعناصر البصرية والتفاعلية المناسبة.",
    result:
      "نساعد فريق المبيعات على تقديم المشروع بصورة أوضح، ونمنح العميل بيئة يستطيع من خلالها فهم المشروع واستكشافه. لا ندّعي نتيجة بيع لا يمكن قياسها.",
  },
  includes: {
    eyebrow: "النطاق",
    title: "ماذا يمكن أن يشمل العمل",
    intro: "ستة أجزاء. ليست باقة ثابتة. نحدد النطاق بعد فهم المشروع.",
    items: [
      {
        title: "بيئة البيع",
        points: ["مركز المبيعات", "استقبال العملاء", "غرف الاجتماعات", "مناطق عرض المشروع", "مناطق كبار العملاء"],
      },
      {
        title: "وحدة العرض",
        points: ["فيلا أو شقة أو جناح عرض", "تشطيب وأثاث", "إضاءة", "أنظمة ذكية عند الحاجة فقط"],
      },
      {
        title: "عرض المشروع",
        points: ["مجسم", "مجسم المخطط العام", "شاشات", "خرائط المشروع", "عرض الوحدات"],
      },
      {
        title: "أدوات تفاعلية",
        points: ["شاشات تفاعلية", "عروض ثلاثية الأبعاد", "استكشاف الوحدات", "صورة وصوت"],
      },
      {
        title: "الهوية والمحتوى",
        points: ["هوية المشروع", "رندرات وأفلام", "مجسمات", "محتوى رقمي", "جرافيكس هاوس، عند الحاجة"],
      },
      {
        title: "التنفيذ والتسليم",
        points: ["التطوير الفني", "الحصر والتوريد", "التصنيع والتركيب", "التنسيق وضبط الجودة والتسليم"],
      },
    ],
    techNote:
      "الشاشات والمجسمات أدوات. تُستخدم عندما تشرح ما لا تشرحه المخططات. توريفا لا تبيع منصة برمجية، ولا تبني واحدة.",
  },
  flexible: {
    eyebrow: "كيف نبدأ",
    title: "نحدد الحل حسب احتياج مشروعك.",
    intro: "ليس كل مشروع يحتاج مركز تجربة كبيرًا. قد يحتاج إلى واحد من هذه، أو إلى أكثر من واحد.",
    options: [
      "مركز بيع فقط",
      "مركز بيع ومجسم",
      "مركز بيع وفيلا عرض",
      "شقة عرض فقط",
      "أدوات تفاعلية، حيث تشرح المشروع",
      "نطاق أوسع، إذا احتاجته مرحلة الإطلاق",
    ],
  },
  levels: {
    eyebrow: "حجم العمل",
    title: "ثلاثة مستويات لحجم الحل. ليست قائمة أسعار.",
    note: "هذه المستويات توضّح حجم البيئة المطلوبة. السعر يُحدد بعد فهم المشروع ونطاق العمل.",
    items: [
      {
        name: "Sales Environment",
        body: "مكان احترافي لاستقبال العملاء.",
        points: ["تصميم وتشطيبات", "أثاث", "الهوية داخل المساحة", "شاشات العرض", "مجسم أو عناصر عرض", "تنفيذ"],
      },
      {
        name: "Project Experience",
        body: "طريقة أوضح لعرض المشروع.",
        points: ["مركز مبيعات", "وحدة عرض", "مجسم", "شاشات تفاعلية حيث تفيد", "محتوى المشروع", "تجهيز وتسليم"],
      },
      {
        name: "Signature Experience",
        body: "لمشروع ذي قيمة عالية، أو لمركز تجربة كامل.",
        points: ["مركز تجربة", "وحدات عرض", "مجسم المخطط", "عرض رقمي", "تصميم داخلي وتجهيز", "تنسيق وتسليم"],
      },
    ],
  },
  when: {
    eyebrow: "التوقيت",
    title: "هل مشروعك يحتاج إلى هذه البيئة؟",
    items: [
      "المشروع يستعد للإطلاق",
      "البيع على وشك أن يبدأ",
      "مركز المبيعات ما زال يحتاج إلى تجهيز",
      "توجد وحدات تحتاج إلى عرض",
      "المشروع كبير أو متعدد الوحدات",
      "فريق المبيعات يحتاج إلى طريقة أوضح لعرضه",
      "الرندرات والكتيبات لا تكفي",
      "في المشروع ما لا يحمله حديث واحد",
    ],
  },
  journey: {
    eyebrow: "كيف نعمل",
    title: "من مشروعك إلى العميل",
    steps: [
      "المشروع",
      "فهم المشروع",
      "ما يجب أن يراه المشتري",
      "تصميم البيئة",
      "تطوير التفاصيل",
      "التنفيذ والتجهيز",
      "التسليم",
      "فريق المبيعات يستقبل العملاء",
    ],
  },
  why: {
    eyebrow: "لماذا توريفا",
    title: "محادثة واحدة عن البيئة.",
    items: [
      {
        title: "تصميم وتنفيذ",
        body: "لا نتوقف عند المخططات. نطوّر المساحة ونبنيها ونسلّمها.",
      },
      {
        title: "المساحة، وكيف يستخدمها العميل",
        body: "مركز البيع ليس تشطيبًا داخليًا فقط. هو المكان الذي يفهم فيه العميل المشروع.",
      },
      {
        title: "العمل البصري، عندما يحتاجه المشروع",
        body: "يمكن لجرافيكس هاوس أن تضيف الهوية والتصوير ثلاثي الأبعاد والأفلام والمجسمات والمحتوى التفاعلي. ولا يلزم التعاقد معها منفصلة إلا إذا رغبت.",
      },
    ],
    trust: "توريفا علامة متخصصة حديثة، مدعومة بفريق ذي خبرة في التصميم والتنفيذ والعمل البصري.",
  },
  scenario: {
    eyebrow: "مثال",
    title: "كيف يمكن أن يصبح المشروع مكانًا يزوره العميل",
    label: "مثال. ليس مشروعًا منفذًا باسم توريفا.",
    project: "مشروع سكني متعدد الوحدات",
    needsTitle: "يحتاج إلى",
    needs: ["مركز مبيعات", "وحدة عرض", "مجسم للمخطط", "شاشة تفاعلية", "عرض للوحدات", "مواد المشروع", "محتوى بصري"],
    turriva: "توريفا: تصميم وتنفيذ وتجهيز، وتقنية فقط حيث تشرح المشروع.",
    graphics: "جرافيكس هاوس: تصور وأفلام ومجسم ومحتوى تفاعلي، إذا احتاجها المشروع.",
    result: "بيئة بيع جاهزة لاستقبال العملاء.",
  },
  close: {
    line: "من مركز البيع إلى وحدة العرض، ومن المساحة إلى الطريقة التي يقرأ بها العميل المشروع، نصمّم وننفّذ البيئة التي يقدّم فيها مشروعك نفسه.",
    brand: "TURRIVA",
    tagline: "تصميم وتنفيذ المساحات والتجارب. من الفكرة إلى الواقع.",
    title: "لديك مشروع قادم؟",
    body: "شاركنا ما لديك. نراجع احتياج المشروع ونقترح نطاق الحل. الخطوة الأولى محادثة، لا سعر يُرسل في الظلام.",
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
