import type { Locale } from "@/shared/i18n/locale";

export const SHOW_UNIT_PATH = "/show-unit";

export type ShowUnitCopy = {
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
  types: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly { title: string; body: string }[];
  };
  includes: {
    eyebrow: string;
    title: string;
    intro: string;
    core: readonly { title: string; body: string }[];
    optionalTitle: string;
    optional: readonly { title: string; body: string }[];
  };
  flexible: {
    eyebrow: string;
    title: string;
    intro: string;
    options: readonly { title: string; body: string }[];
    parent: string;
    parentHref: string;
    parentCta: string;
  };
  method: {
    eyebrow: string;
    title: string;
    steps: readonly { title: string; body: string }[];
  };
  audience: {
    eyebrow: string;
    title: string;
    body: string;
    trust: string;
  };
  close: {
    title: string;
    body: string;
  };
  form: {
    productLabel: string;
    unitTypes: readonly { id: string; label: string }[];
    drawings: { label: string; yes: string; no: string };
  };
};

const en: ShowUnitCopy = {
  nav: "Show unit",
  metaTitle: "Show Unit Design and Delivery",
  metaDescription:
    "We design and deliver show villas, apartments, and suites for real estate projects. Commission a single unit or include it within a wider sales experience.",
  hero: {
    eyebrow: "Show unit",
    title: "Bring the unit to life.",
    question: "What should buyers see and feel when they enter?",
    body: "We design and deliver show villas, apartments, and suites. Our scope can cover design, technical detailing, fit-out, furniture, lighting, styling, and handover.",
    cta: "Discuss your show unit",
    secondary: "Explore the scope",
  },
  problem: {
    eyebrow: "Why it matters",
    title: "Plans do not show the full experience.",
    body: "Drawings and samples explain individual decisions. A completed show unit lets buyers understand the layout, finishes, proportions, and intended standard as one coherent space.",
    points: ["See materials in context", "Experience the layout at full scale", "Understand the intended living standard"],
  },
  definition: {
    eyebrow: "The service",
    title: "Show unit",
    body: "A complete, walk-through unit designed around the project, its audience, and the chosen typology. We develop the interior, prepare it for execution, and deliver it ready for viewings.",
    result: "The result is a tangible expression of the project’s intended living standard. The show unit may be commissioned as a standalone scope.",
  },
  types: {
    eyebrow: "Unit types",
    title: "Designed for the right format.",
    intro: "The same disciplined process adapts to the scale, audience, and purpose of each unit.",
    items: [
      { title: "Show villa", body: "A complete home experience that presents the spaces and details defining the development." },
      { title: "Show apartment", body: "A representative unit that makes the layout, finishes, and intended standard clear." },
      { title: "Show suite", body: "A hospitality or branded unit prepared for viewing. Operational requirements can be included when specified." },
    ],
  },
  includes: {
    eyebrow: "Scope",
    title: "What we can deliver",
    intro: "We shape the scope around the unit, the project, and what the viewing experience needs to communicate.",
    core: [
      { title: "Interior design", body: "A considered scheme aligned with the project, the unit, and its intended buyer." },
      { title: "Technical development", body: "Coordinated drawings, details, quantities, and specifications for execution." },
      { title: "Fit-out and joinery", body: "Finishes, ceilings, flooring, kitchens, wardrobes, bespoke joinery, and architectural details." },
      { title: "Furniture and lighting", body: "Selection, supply, installation, and styling to complete the intended experience." },
    ],
    optionalTitle: "Additional support",
    optional: [
      { title: "Technology", body: "Integrated screens or smart systems when they serve the viewing experience." },
      { title: "Identity and visual content", body: "Project graphics, imagery, or film when the unit needs a stronger connection to the development’s identity." },
    ],
  },
  flexible: {
    eyebrow: "How we start",
    title: "Start with one unit.",
    intro: "A show unit can be commissioned on its own. We define the scope and fee after reviewing the unit and project requirements.",
    options: [
      { title: "Ready for viewings", body: "Design, fit-out, joinery, furniture, lighting, styling, and handover." },
      { title: "Connected to the identity", body: "The complete unit, supported by visual elements that link it to the project." },
      { title: "Part of the sales experience", body: "The unit coordinated with a sales gallery, model, or launch content." },
    ],
    parent: "If the project also requires a sales gallery, model, or launch content, we can develop these through our real estate project experience service.",
    parentHref: "/real-estate-experience",
    parentCta: "Explore real estate experiences",
  },
  method: {
    eyebrow: "Our process",
    title: "From brief to viewing.",
    steps: [
      { title: "Understand", body: "We review the project, unit, audience, programme, and purpose of the viewing." },
      { title: "Design", body: "We define the spatial approach, materials, lighting, furniture, and key details." },
      { title: "Develop", body: "We prepare coordinated drawings, specifications, quantities, and the execution plan." },
      { title: "Build", body: "We manage supply, fabrication, installation, and site coordination." },
      { title: "Deliver", body: "We complete quality checks and hand over the unit ready for viewings." },
    ],
  },
  audience: {
    eyebrow: "Who we work with",
    title: "For residential developers.",
    body: "For projects requiring a show villa, apartment, or suite. We can work from an initial brief or review existing drawings.",
    trust: "TURRIVA brings spatial design, technical development, execution, and visual coordination into one focused team.",
  },
  close: {
    title: "Planning a show unit?",
    body: "Tell us about the project, or send the available drawings. We will review the requirements and discuss a suitable scope.",
  },
  form: {
    productLabel: "Show unit",
    unitTypes: [
      { id: "villa", label: "Show villa" },
      { id: "apartment", label: "Show apartment" },
      { id: "suite", label: "Show suite" },
    ],
    drawings: { label: "Do you have drawings?", yes: "Yes", no: "Not yet" },
  },
};

const ar: ShowUnitCopy = {
  nav: "وحدة العرض",
  metaTitle: "تصميم وتنفيذ وحدات العرض",
  metaDescription:
    "نصمّم وننفّذ فلل وشقق وأجنحة العرض للمشاريع العقارية. يمكن التعاقد على وحدة مستقلة أو إدراجها ضمن تجربة بيع متكاملة.",
  hero: {
    eyebrow: "وحدة العرض",
    title: "نحوّل الوحدة إلى تجربة.",
    question: "ماذا تريدون أن يرى المشتري ويشعر به عند الدخول؟",
    body: "نصمّم وننفّذ فلل وشقق وأجنحة العرض. ويمكن أن يشمل نطاقنا التصميم والتطوير الفني والتشطيبات والأثاث والإضاءة والتنسيق والتسليم.",
    cta: "ناقشوا وحدة العرض",
    secondary: "استكشفوا نطاق العمل",
  },
  problem: {
    eyebrow: "أهمية وحدة العرض",
    title: "المخططات لا تنقل التجربة كاملة.",
    body: "تشرح الرسومات والعينات كل قرار على حدة. أما وحدة العرض المكتملة فتتيح للمشتري فهم التخطيط والتشطيبات والنسب والمستوى المقصود ضمن مساحة متكاملة.",
    points: ["رؤية المواد في سياقها", "تجربة التخطيط بالحجم الفعلي", "فهم مستوى المعيشة المستهدف"],
  },
  definition: {
    eyebrow: "الخدمة",
    title: "وحدة العرض",
    body: "وحدة مكتملة يمكن للعميل التجول فيها، تُصمّم وفق المشروع وجمهوره ونوع الوحدة. نطوّر التصميم ونجهّزه للتنفيذ، ثم نسلّمه جاهزاً للزيارات.",
    result: "النتيجة نموذج ملموس لمستوى المعيشة الذي يستهدفه المشروع. ويمكن التعاقد على وحدة العرض كنطاق مستقل.",
  },
  types: {
    eyebrow: "أنواع الوحدات",
    title: "تصميم يناسب كل نوع.",
    intro: "نعتمد المنهج نفسه، مع تكييفه وفق مساحة الوحدة وجمهورها والغرض منها.",
    items: [
      { title: "فيلا عرض", body: "تجربة منزلية مكتملة تعرض المساحات والتفاصيل التي تميّز المشروع." },
      { title: "شقة عرض", body: "وحدة نموذجية توضّح التخطيط والتشطيبات والمستوى المستهدف." },
      { title: "جناح عرض", body: "وحدة ضيافة أو وحدة تحمل علامة تجارية ومهيأة للعرض. ويمكن إضافة متطلبات التشغيل عند تحديدها." },
    ],
  },
  includes: {
    eyebrow: "النطاق",
    title: "ما الذي يمكننا تقديمه؟",
    intro: "نحدّد النطاق وفق الوحدة والمشروع وما ينبغي أن توضحه تجربة الزيارة.",
    core: [
      { title: "التصميم الداخلي", body: "تصميم مدروس يتوافق مع المشروع والوحدة والمشتري المستهدف." },
      { title: "التطوير الفني", body: "مخططات وتفاصيل وكميات ومواصفات منسقة وجاهزة للتنفيذ." },
      { title: "التشطيبات والنجارة", body: "الأسقف والأرضيات والمطابخ والخزائن والنجارة المخصصة والتفاصيل المعمارية." },
      { title: "الأثاث والإضاءة", body: "الاختيار والتوريد والتركيب والتنسيق لاستكمال التجربة المطلوبة." },
    ],
    optionalTitle: "خدمات إضافية",
    optional: [
      { title: "التقنية", body: "شاشات مدمجة أو أنظمة ذكية عندما تخدم تجربة الزيارة." },
      { title: "الهوية والمحتوى البصري", body: "عناصر بصرية أو صور أو أفلام تعزّز ارتباط الوحدة بهوية المشروع عند الحاجة." },
    ],
  },
  flexible: {
    eyebrow: "كيف نبدأ",
    title: "ابدؤوا بوحدة واحدة.",
    intro: "يمكن التعاقد على وحدة العرض بشكل مستقل. نحدّد النطاق والتكلفة بعد مراجعة الوحدة ومتطلبات المشروع.",
    options: [
      { title: "جاهزة للزيارات", body: "تصميم وتشطيبات ونجارة وأثاث وإضاءة وتنسيق وتسليم." },
      { title: "مرتبطة بالهوية", body: "وحدة مكتملة تدعمها عناصر بصرية تربطها بالمشروع." },
      { title: "ضمن تجربة البيع", body: "تنسيق الوحدة مع مركز البيع أو المجسم أو محتوى الإطلاق." },
    ],
    parent: "إذا احتاج المشروع أيضاً إلى مركز بيع أو مجسم أو محتوى إطلاق، يمكننا تطويرها ضمن خدمة تجربة المشروع العقاري.",
    parentHref: "/real-estate-experience",
    parentCta: "استكشفوا تجارب المشاريع العقارية",
  },
  method: {
    eyebrow: "منهج العمل",
    title: "من الموجز إلى الزيارة.",
    steps: [
      { title: "الفهم", body: "نراجع المشروع والوحدة والجمهور والبرنامج وهدف الزيارة." },
      { title: "التصميم", body: "نحدّد التوجّه المكاني والمواد والإضاءة والأثاث والتفاصيل الرئيسية." },
      { title: "التطوير", body: "نعدّ المخططات والمواصفات والكميات وخطة التنفيذ بصورة منسقة." },
      { title: "التنفيذ", body: "ندير التوريد والتصنيع والتركيب والتنسيق في الموقع." },
      { title: "التسليم", body: "نجري مراجعات الجودة ونسلّم الوحدة جاهزة للزيارات." },
    ],
  },
  audience: {
    eyebrow: "نعمل مع",
    title: "مطوري المشاريع السكنية.",
    body: "للمشاريع التي تحتاج إلى فيلا أو شقة أو جناح عرض. يمكننا البدء من موجز أولي أو مراجعة مخططات قائمة.",
    trust: "تجمع توريفا التصميم المكاني والتطوير الفني والتنفيذ والتنسيق البصري ضمن فريق متخصص.",
  },
  close: {
    title: "تخططون لوحدة عرض؟",
    body: "حدّثونا عن المشروع أو أرسلوا المخططات المتاحة. سنراجع المتطلبات ونناقش نطاق العمل المناسب.",
  },
  form: {
    productLabel: "وحدة العرض",
    unitTypes: [
      { id: "villa", label: "فيلا عرض" },
      { id: "apartment", label: "شقة عرض" },
      { id: "suite", label: "جناح عرض" },
    ],
    drawings: { label: "هل لديكم مخططات؟", yes: "نعم", no: "ليس بعد" },
  },
};

export function getShowUnitCopy(locale: Locale): ShowUnitCopy {
  return locale === "ar" ? ar : en;
}
