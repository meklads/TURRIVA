import type { Locale } from "@/shared/i18n/locale";

export const DESIGN_BUILD_PATH = "/design-build";

export type DesignBuildCopy = {
  nav: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
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
  starts: {
    eyebrow: string;
    title: string;
    items: readonly { title: string; body: string; href?: string; cta?: string }[];
  };
  includes: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly { title: string; body: string }[];
  };
  sizes: {
    eyebrow: string;
    title: string;
    note: string;
    items: readonly { title: string; body: string }[];
  };
  method: {
    eyebrow: string;
    title: string;
    steps: readonly { title: string; body: string }[];
  };
  related: {
    title: string;
    body: string;
    links: readonly { href: string; label: string }[];
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
    choiceLegend: string;
    spaces: readonly { id: string; label: string }[];
    drawings: { label: string; yes: string; no: string };
  };
};

const en: DesignBuildCopy = {
  nav: "Design and build",
  metaTitle: "Interior Design and Build",
  metaDescription:
    "One coordinated path from an initial idea to a completed space: design, technical development, supply, installation, and handover.",
  hero: {
    eyebrow: "Design and build",
    title: "From idea to finished space.",
    body: "We bring design, technical development, supply, installation, and handover into one coordinated process. One team remains responsible from the first brief to the completed space.",
    cta: "Discuss your project",
    secondary: "Send drawings",
  },
  problem: {
    eyebrow: "Why one team",
    title: "Good design needs clear delivery.",
    body: "When design, procurement, and site execution are disconnected, details can be lost between approval and installation. A coordinated team keeps each stage aligned.",
    points: ["One clear brief", "Details resolved before fabrication", "Continuity from concept to handover"],
  },
  definition: {
    eyebrow: "The service",
    title: "Design and build",
    body: "A complete service for spaces that begin with an idea. We shape the concept, develop the technical package, manage supply and execution, and hand over the finished space.",
    result: "If you already have an approved design, our fit-out service is the right path. If an existing space needs assessment and change, explore renovation.",
  },
  starts: {
    eyebrow: "Starting point",
    title: "Begin with an idea.",
    items: [
      { title: "An initial brief", body: "Share the space, its purpose, your priorities, and the budget range. We develop the design and carry it through delivery." },
      {
        title: "Approved drawings",
        body: "If the design is complete, we can develop it for site and execute it through our fit-out service. The original designer remains the design authority.",
        href: "/fit-out",
        cta: "Explore fit-out",
      },
    ],
  },
  includes: {
    eyebrow: "Scope",
    title: "One coordinated process.",
    intro: "Each stage is connected, with decisions documented and carried forward into delivery.",
    items: [
      { title: "Understand", body: "We define the purpose, spaces, priorities, programme, intended standard, and budget range." },
      { title: "Design", body: "We develop the concept, interiors, materials, lighting, furniture, and defining details." },
      { title: "Develop", body: "We prepare coordinated drawings, quantities, specifications, and approvals before fabrication." },
      { title: "Supply and fabricate", body: "We procure materials, lighting, and furniture, and produce joinery to the approved information." },
      { title: "Build", body: "We manage fit-out, installation, specialist coordination, site supervision, and quality checks." },
      { title: "Hand over", body: "We close observations, complete final styling where required, and deliver the space ready to use." },
    ],
  },
  sizes: {
    eyebrow: "Scope options",
    title: "Built around the project.",
    note: "Every project has different quantities, specifications, and site conditions. We define the scope and fee after understanding the work.",
    items: [
      { title: "Defined scope", body: "Design and execution for an agreed area or package, shaped around what the space needs." },
      { title: "Furnished space", body: "Design, supply, installation, furniture, and styling for a complete, usable interior." },
      { title: "Bespoke interior", body: "A more detailed scheme with custom elements developed specifically for the project." },
    ],
  },
  method: {
    eyebrow: "Our process",
    title: "A clear path to delivery.",
    steps: [
      { title: "Discover", body: "We understand the project, the space, its use, priorities, programme, and budget." },
      { title: "Design", body: "We develop the concept, materials, and key details for your review and approval." },
      { title: "Develop", body: "We translate the approved design into coordinated drawings, quantities, and specifications." },
      { title: "Build", body: "We manage supply, fabrication, installation, and coordination on site." },
      { title: "Deliver", body: "We complete quality checks and hand over a space ready to use." },
    ],
  },
  related: {
    title: "Looking for a different service?",
    body: "Approved designs move to fit-out. Existing spaces that need change move to renovation. Shops and restaurants are covered under commercial spaces. Sales galleries and related touchpoints form part of our real estate project experience.",
    links: [
      { href: "/fit-out", label: "Fit-out" },
      { href: "/renovation", label: "Renovation" },
      { href: "/commercial-spaces", label: "Commercial interiors" },
    ],
  },
  audience: {
    eyebrow: "Who we work with",
    title: "For clients starting with an idea.",
    body: "For villas, private residences, and selected spaces that need both design and delivery. We begin with the brief and remain involved through handover.",
    trust: "TURRIVA brings spatial design, technical development, execution, and visual coordination into one focused team.",
  },
  close: {
    title: "Have a space in mind?",
    body: "Tell us about the idea, or send any drawings you have. We will review the starting point and discuss the right path.",
  },
  form: {
    productLabel: "Design and build",
    choiceLegend: "Type of space",
    spaces: [
      { id: "villa", label: "Villa" },
      { id: "residence", label: "Private residence" },
      { id: "office", label: "Office or commercial room" },
      { id: "other", label: "Another space" },
    ],
    drawings: { label: "Do you have drawings?", yes: "Yes", no: "Not yet" },
  },
};

const ar: DesignBuildCopy = {
  nav: "التصميم والتنفيذ",
  metaTitle: "التصميم الداخلي والتنفيذ",
  metaDescription:
    "مسار منسق من الفكرة الأولية إلى مساحة مكتملة، يشمل التصميم والتطوير الفني والتوريد والتركيب والتسليم.",
  hero: {
    eyebrow: "التصميم والتنفيذ",
    title: "من الفكرة إلى مساحة مكتملة.",
    body: "نجمع التصميم والتطوير الفني والتوريد والتركيب والتسليم ضمن عملية واحدة منسقة. ويتولى فريق واحد المسؤولية من الموجز الأول حتى اكتمال المساحة.",
    cta: "ناقشوا مشروعكم",
    secondary: "أرسلوا المخططات",
  },
  problem: {
    eyebrow: "لماذا فريق واحد؟",
    title: "التصميم الجيد يحتاج إلى تنفيذ واضح.",
    body: "عندما تنفصل مراحل التصميم والتوريد والتنفيذ، قد تضيع التفاصيل بين الاعتماد والتركيب. يحافظ الفريق المنسق على ترابط جميع المراحل.",
    points: ["موجز واحد وواضح", "حسم التفاصيل قبل التصنيع", "استمرارية من الفكرة إلى التسليم"],
  },
  definition: {
    eyebrow: "الخدمة",
    title: "التصميم والتنفيذ",
    body: "خدمة متكاملة للمساحات التي تبدأ من فكرة. نصوغ التصور ونطوّر الحزمة الفنية وندير التوريد والتنفيذ، ثم نسلّم المساحة مكتملة.",
    result: "إذا كان لديكم تصميم معتمد، فخدمة التجهيز والتنفيذ هي المسار المناسب. وإذا كانت المساحة قائمة وتحتاج إلى تقييم وتغيير، فاستكشفوا خدمة التجديد.",
  },
  starts: {
    eyebrow: "نقطة البداية",
    title: "ابدؤوا بفكرة.",
    items: [
      { title: "موجز أولي", body: "شاركونا المساحة والغرض منها وأولوياتكم ونطاق الميزانية. نطوّر التصميم ونتولى تنفيذه حتى التسليم." },
      {
        title: "مخططات معتمدة",
        body: "إذا اكتمل التصميم، يمكننا تطويره للموقع وتنفيذه عبر خدمة التجهيز والتنفيذ. ويظل المصمم الأصلي مرجع التصميم.",
        href: "/fit-out",
        cta: "استكشفوا التجهيز والتنفيذ",
      },
    ],
  },
  includes: {
    eyebrow: "النطاق",
    title: "عملية واحدة منسقة.",
    intro: "ترتبط كل مرحلة بما يليها، مع توثيق القرارات ونقلها بوضوح إلى التنفيذ.",
    items: [
      { title: "الفهم", body: "نحدّد الغرض والمساحات والأولويات والبرنامج والمستوى المطلوب ونطاق الميزانية." },
      { title: "التصميم", body: "نطوّر الفكرة والتصميم الداخلي والمواد والإضاءة والأثاث والتفاصيل الرئيسية." },
      { title: "التطوير", body: "نعدّ المخططات والكميات والمواصفات والتنسيقات والاعتمادات قبل التصنيع." },
      { title: "التوريد والتصنيع", body: "نورّد المواد والإضاءة والأثاث، ونصنّع أعمال النجارة وفق المعلومات المعتمدة." },
      { title: "التنفيذ", body: "ندير التشطيبات والتركيب وتنسيق التخصصات والإشراف في الموقع ومراجعات الجودة." },
      { title: "التسليم", body: "نغلق الملاحظات وننجز التنسيق النهائي عند الحاجة، ثم نسلّم المساحة جاهزة للاستخدام." },
    ],
  },
  sizes: {
    eyebrow: "خيارات النطاق",
    title: "نطاق يناسب المشروع.",
    note: "تختلف الكميات والمواصفات وظروف الموقع من مشروع إلى آخر. نحدّد النطاق والتكلفة بعد فهم متطلبات العمل.",
    items: [
      { title: "نطاق محدد", body: "تصميم وتنفيذ لمساحة أو حزمة متفق عليها، وفق احتياجاتها الفعلية." },
      { title: "مساحة مؤثثة", body: "تصميم وتوريد وتركيب وأثاث وتنسيق لمساحة داخلية مكتملة وجاهزة للاستخدام." },
      { title: "تصميم مخصص", body: "تصميم أكثر تفصيلاً، بعناصر تُطوّر خصيصاً للمشروع." },
    ],
  },
  method: {
    eyebrow: "منهج العمل",
    title: "مسار واضح إلى التسليم.",
    steps: [
      { title: "الاستكشاف", body: "نفهم المشروع والمساحة واستخدامها وأولوياتها وبرنامجها وميزانيتها." },
      { title: "التصميم", body: "نطوّر الفكرة والمواد والتفاصيل الرئيسية لمراجعتها واعتمادها." },
      { title: "التطوير", body: "نحوّل التصميم المعتمد إلى مخططات وكميات ومواصفات منسقة." },
      { title: "التنفيذ", body: "ندير التوريد والتصنيع والتركيب والتنسيق في الموقع." },
      { title: "التسليم", body: "نستكمل مراجعات الجودة ونسلّم مساحة جاهزة للاستخدام." },
    ],
  },
  related: {
    title: "تبحثون عن خدمة أخرى؟",
    body: "تنتقل التصاميم المعتمدة إلى التجهيز والتنفيذ. أما المساحات القائمة التي تحتاج إلى تغيير فتندرج ضمن التجديد. وتشمل المساحات التجارية المتاجر والمطاعم، بينما تدخل مراكز البيع ونقاط التواصل المرتبطة بها ضمن تجربة المشروع العقاري.",
    links: [
      { href: "/fit-out", label: "التجهيز والتنفيذ" },
      { href: "/renovation", label: "التجديد" },
      { href: "/commercial-spaces", label: "التصميمات الداخلية التجارية" },
    ],
  },
  audience: {
    eyebrow: "نعمل مع",
    title: "عملاء يبدأون بفكرة.",
    body: "للفلل والمساكن الخاصة والمساحات المختارة التي تحتاج إلى التصميم والتنفيذ معاً. نبدأ من الموجز ونواصل العمل حتى التسليم.",
    trust: "تجمع توريفا التصميم المكاني والتطوير الفني والتنفيذ والتنسيق البصري ضمن فريق متخصص.",
  },
  close: {
    title: "لديكم مساحة جديدة؟",
    body: "حدّثونا عن الفكرة أو أرسلوا أي مخططات متاحة. سنراجع نقطة البداية ونناقش المسار المناسب.",
  },
  form: {
    productLabel: "التصميم والتنفيذ",
    choiceLegend: "نوع المساحة",
    spaces: [
      { id: "villa", label: "فيلا" },
      { id: "residence", label: "مسكن خاص" },
      { id: "office", label: "مكتب أو غرفة تجارية" },
      { id: "other", label: "مساحة أخرى" },
    ],
    drawings: { label: "هل لديكم مخططات؟", yes: "نعم", no: "ليس بعد" },
  },
};

export function getDesignBuildCopy(locale: Locale): DesignBuildCopy {
  return locale === "ar" ? ar : en;
}
