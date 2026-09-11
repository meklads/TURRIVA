import type { Locale } from "@/shared/i18n/locale";

export const FIT_OUT_PATH = "/fit-out";

export type FitOutCopy = {
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
  partner: {
    eyebrow: string;
    title: string;
    body: string;
    line: string;
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
    items: readonly string[];
    trust: string;
  };
  close: {
    title: string;
    body: string;
  };
  form: {
    productLabel: string;
    choiceLegend: string;
    roles: readonly { id: string; label: string }[];
    drawings: { label: string; yes: string; no: string };
  };
};

const en: FitOutCopy = {
  nav: "Fit-out",
  metaTitle: "Interior Fit-Out and Execution",
  metaDescription:
    "Fit-out for approved designs. We review the drawings, develop the technical package, manage supply and installation, and deliver the completed space.",
  hero: {
    eyebrow: "Fit-out",
    title: "Your design, carefully delivered.",
    body: "We take an approved design through technical development, supply, fabrication, installation, and handover. We protect the design intent and work with the appointed designer throughout.",
    cta: "Discuss your project",
    secondary: "Send drawings",
  },
  problem: {
    eyebrow: "Why fit-out matters",
    title: "Execution begins with clarity.",
    body: "Approved drawings still need technical review, coordinated details, reliable procurement, and disciplined site management. We resolve these requirements while respecting the original design.",
    points: ["The approved design remains the reference", "Conflicts addressed before fabrication", "Clear responsibility through delivery"],
  },
  definition: {
    eyebrow: "The service",
    title: "Fit-out",
    body: "A delivery service for projects with an approved design. We review the information, develop the technical package, manage supply and execution, and complete the handover.",
    result: "We do not replace the architect or interior designer. If your project still needs design, begin with our design and build service. If an existing space needs assessment and change, explore renovation.",
  },
  partner: {
    eyebrow: "For design teams",
    title: "Your vision. Our delivery.",
    body: "We work as an execution partner. We review buildability, raise technical questions early, and carry the approved design through fabrication, installation, and handover.",
    line: "A delivery partner for architects, interior designers, and engineering practices.",
  },
  includes: {
    eyebrow: "Scope",
    title: "What we deliver",
    intro: "We coordinate each package against the approved drawings. Specialist work such as metal, glass, and stone is managed with the relevant fabricators.",
    items: [
      { title: "Review", body: "We assess drawings, specifications, site requirements, and buildability before work begins." },
      { title: "Technical development", body: "We prepare shop drawings, quantities, material submittals, and coordinated details." },
      { title: "Supply", body: "We procure approved materials, joinery, furniture, and lighting for the agreed scope." },
      { title: "Fabrication", body: "We produce custom joinery and coordinate specialist-made elements required by the drawings." },
      { title: "Installation", body: "We manage fit-out, installation, specialist trades, supervision, and site coordination." },
      { title: "Handover", body: "We complete quality checks, close observations, and provide a documented handover." },
    ],
  },
  sizes: {
    eyebrow: "Scope options",
    title: "Defined by the drawings.",
    note: "Cost depends on quantities, specifications, and site conditions. We define the scope and fee after reviewing the project information.",
    items: [
      { title: "Selected package", body: "Execution of an agreed part of the design to the approved specification." },
      { title: "Complete package", body: "Supply, fabrication, installation, and handover for the agreed works." },
      { title: "Full fit-out", body: "Coordinated delivery from approved drawings to a completed space, with the designer’s role preserved." },
    ],
  },
  method: {
    eyebrow: "Our process",
    title: "Review before execution.",
    steps: [
      { title: "Review", body: "We assess the approved design, drawings, specifications, and site requirements." },
      { title: "Develop", body: "We prepare technical details, quantities, submittals, and coordinated information." },
      { title: "Agree", body: "We confirm the scope, programme, responsibilities, and cost before fabrication." },
      { title: "Build", body: "We manage supply, fabrication, installation, and site coordination." },
      { title: "Deliver", body: "We complete quality checks, close observations, and hand over the works." },
    ],
  },
  related: {
    title: "Still developing the design?",
    body: "If the project begins with an idea, start with design and build. If an existing space needs assessment before it can be redesigned, explore renovation. Fit-out begins with an approved design.",
    links: [
      { href: "/design-build", label: "Design and build" },
      { href: "/renovation", label: "Renovation" },
    ],
  },
  audience: {
    eyebrow: "Who we work with",
    title: "For projects with approved designs.",
    items: ["Architects and interior designers", "Engineering practices", "Developers", "Property owners", "Companies with approved drawings"],
    trust: "TURRIVA brings technical development, procurement, execution, and site coordination into one focused delivery team.",
  },
  close: {
    title: "Ready to deliver the design?",
    body: "Send the drawings and project information. We will review the requirements and discuss the appropriate execution scope.",
  },
  form: {
    productLabel: "Fit-out",
    choiceLegend: "Who you are",
    roles: [
      { id: "designer", label: "Architect or designer" },
      { id: "developer", label: "Developer" },
      { id: "owner", label: "Owner" },
      { id: "other", label: "Other" },
    ],
    drawings: { label: "Do you have drawings?", yes: "Yes", no: "Not yet" },
  },
};

const ar: FitOutCopy = {
  nav: "التجهيز والتنفيذ",
  metaTitle: "التجهيز الداخلي والتنفيذ",
  metaDescription:
    "خدمة تجهيز للتصاميم المعتمدة. نراجع المخططات ونطوّر الحزمة الفنية وندير التوريد والتركيب ونسلّم المساحة مكتملة.",
  hero: {
    eyebrow: "التجهيز والتنفيذ",
    title: "ننقل تصميمكم إلى الواقع بعناية.",
    body: "نأخذ التصميم المعتمد عبر التطوير الفني والتوريد والتصنيع والتركيب والتسليم. نحافظ على مقصده ونتعاون مع المصمم المعيّن طوال العمل.",
    cta: "ناقشوا مشروعكم",
    secondary: "أرسلوا المخططات",
  },
  problem: {
    eyebrow: "أهمية التجهيز",
    title: "التنفيذ يبدأ بالوضوح.",
    body: "تحتاج المخططات المعتمدة إلى مراجعة فنية وتفاصيل منسقة وتوريد موثوق وإدارة منضبطة للموقع. نعالج هذه المتطلبات مع احترام التصميم الأصلي.",
    points: ["التصميم المعتمد يبقى المرجع", "معالجة التعارضات قبل التصنيع", "مسؤولية واضحة حتى التسليم"],
  },
  definition: {
    eyebrow: "الخدمة",
    title: "التجهيز والتنفيذ",
    body: "خدمة تنفيذ للمشاريع ذات التصميم المعتمد. نراجع المعلومات ونطوّر الحزمة الفنية وندير التوريد والتنفيذ، ثم نستكمل التسليم.",
    result: "لا نحل محل المهندس المعماري أو المصمم الداخلي. إذا كان المشروع لا يزال يحتاج إلى تصميم، فابدؤوا بخدمة التصميم والتنفيذ. وإذا كانت مساحة قائمة تحتاج إلى تقييم وتغيير، فاستكشفوا التجديد.",
  },
  partner: {
    eyebrow: "لفرق التصميم",
    title: "رؤيتكم. تنفيذنا.",
    body: "نعمل كشريك تنفيذ. نراجع قابلية البناء ونطرح الأسئلة الفنية مبكراً، ثم ننقل التصميم المعتمد عبر التصنيع والتركيب والتسليم.",
    line: "شريك تنفيذ للمعماريين ومصممي الديكور الداخلي والمكاتب الهندسية.",
  },
  includes: {
    eyebrow: "النطاق",
    title: "ما الذي ننفّذه؟",
    intro: "ننسّق كل حزمة وفق المخططات المعتمدة. وندير الأعمال التخصصية، مثل المعادن والزجاج والحجر، مع المصنّعين المختصين.",
    items: [
      { title: "المراجعة", body: "نراجع المخططات والمواصفات ومتطلبات الموقع وقابلية التنفيذ قبل بدء العمل." },
      { title: "التطوير الفني", body: "نعدّ مخططات الورشة والكميات واعتمادات المواد والتفاصيل المنسقة." },
      { title: "التوريد", body: "نورّد المواد والنجارة والأثاث والإضاءة المعتمدة ضمن النطاق المتفق عليه." },
      { title: "التصنيع", body: "ننفّذ النجارة المخصصة وننسّق العناصر التخصصية التي تتطلبها المخططات." },
      { title: "التركيب", body: "ندير أعمال التجهيز والتركيب والتخصصات والإشراف والتنسيق في الموقع." },
      { title: "التسليم", body: "نستكمل مراجعات الجودة ونغلق الملاحظات ونقدّم تسليماً موثقاً." },
    ],
  },
  sizes: {
    eyebrow: "خيارات النطاق",
    title: "تحدّده المخططات.",
    note: "تعتمد التكلفة على الكميات والمواصفات وظروف الموقع. نحدّد النطاق والتكلفة بعد مراجعة معلومات المشروع.",
    items: [
      { title: "حزمة مختارة", body: "تنفيذ جزء متفق عليه من التصميم وفق المواصفات المعتمدة." },
      { title: "حزمة متكاملة", body: "توريد وتصنيع وتركيب وتسليم للأعمال المتفق عليها." },
      { title: "تجهيز كامل", body: "تنفيذ منسق من المخططات المعتمدة إلى مساحة مكتملة، مع الحفاظ على دور المصمم." },
    ],
  },
  method: {
    eyebrow: "منهج العمل",
    title: "نراجع قبل أن ننفّذ.",
    steps: [
      { title: "المراجعة", body: "نقيّم التصميم المعتمد والمخططات والمواصفات ومتطلبات الموقع." },
      { title: "التطوير", body: "نعدّ التفاصيل الفنية والكميات والاعتمادات والمعلومات المنسقة." },
      { title: "الاتفاق", body: "نؤكد النطاق والبرنامج والمسؤوليات والتكلفة قبل التصنيع." },
      { title: "التنفيذ", body: "ندير التوريد والتصنيع والتركيب والتنسيق في الموقع." },
      { title: "التسليم", body: "نستكمل مراجعات الجودة ونغلق الملاحظات ونسلّم الأعمال." },
    ],
  },
  related: {
    title: "ما زلتم تطوّرون التصميم؟",
    body: "إذا بدأ المشروع من فكرة، فابدؤوا بخدمة التصميم والتنفيذ. وإذا كانت مساحة قائمة تحتاج إلى تقييم قبل إعادة تصميمها، فاستكشفوا التجديد. تبدأ خدمة التجهيز من تصميم معتمد.",
    links: [
      { href: "/design-build", label: "التصميم والتنفيذ" },
      { href: "/renovation", label: "التجديد" },
    ],
  },
  audience: {
    eyebrow: "نعمل مع",
    title: "للمشاريع ذات التصاميم المعتمدة.",
    items: ["المعماريون ومصممو الديكور الداخلي", "المكاتب الهندسية", "المطورون", "ملاك العقارات", "الشركات ذات المخططات المعتمدة"],
    trust: "تجمع توريفا التطوير الفني والتوريد والتنفيذ والتنسيق في الموقع ضمن فريق متخصص بالتسليم.",
  },
  close: {
    title: "التصميم جاهز للتنفيذ؟",
    body: "أرسلوا المخططات ومعلومات المشروع. سنراجع المتطلبات ونناقش نطاق التنفيذ المناسب.",
  },
  form: {
    productLabel: "التجهيز والتنفيذ",
    choiceLegend: "صفتك",
    roles: [
      { id: "designer", label: "مهندس أو مصمم" },
      { id: "developer", label: "مطور" },
      { id: "owner", label: "مالك" },
      { id: "other", label: "جهة أخرى" },
    ],
    drawings: { label: "هل لديكم مخططات؟", yes: "نعم", no: "ليس بعد" },
  },
};

export function getFitOutCopy(locale: Locale): FitOutCopy {
  return locale === "ar" ? ar : en;
}
