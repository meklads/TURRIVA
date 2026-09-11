import type { Locale } from "@/shared/i18n/locale";

export const HOSPITALITY_SPACES_PATH = "/hospitality-spaces";

export type HospitalitySpacesCopy = {
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
    spaces: readonly { id: string; label: string }[];
    drawings: { label: string; yes: string; no: string };
  };
};

const en: HospitalitySpacesCopy = {
  nav: "Hospitality spaces",
  metaTitle: "Hospitality Space Design and Build",
  metaDescription:
    "TURRIVA designs and builds hotels, serviced apartments, and guest spaces around the stay, the operation, and the people they serve.",
  hero: {
    eyebrow: "Hospitality spaces",
    title: "Designed around the stay.",
    body: "We create hotels, serviced apartments, and guest spaces around how people arrive, settle in, and move through the property. Every design also considers the team responsible for running it.",
    cta: "Discuss your project",
    secondary: "Explore the scope",
  },
  problem: {
    eyebrow: "Why it matters",
    title: "A memorable stay depends on a working space.",
    body: "Arrival, circulation, service, storage, and material performance all shape the guest experience. The interior must support guests, staff, and the operator at the same time.",
    points: ["Clear arrival and circulation", "Materials suited to frequent use and care", "Operational needs resolved in the design"],
  },
  definition: {
    eyebrow: "The service",
    title: "Hospitality spaces",
    body: "A complete design-and-build service for hotels, boutique hotels, serviced apartments, lobbies, and guest areas. We connect the guest experience with operational requirements, then develop, procure, fabricate, install, and hand over. Property operations remain with the operator.",
    result: "Destination restaurants also belong here when the setting is central to the experience. Everyday restaurants and cafés follow commercial spaces. Changes to an existing hospitality property begin with renovation.",
  },
  starts: {
    eyebrow: "Where we begin",
    title: "Start with the experience or approved drawings.",
    items: [
      { title: "From the hospitality brief", body: "We study the property, guest journey, brand, and operational needs before designing and building the space." },
      {
        title: "From approved drawings",
        body: "If the design is complete, we develop it for construction and deliver the agreed scope while respecting the designer's intent.",
        href: "/fit-out",
        cta: "Fit-out and execution",
      },
    ],
  },
  partner: {
    eyebrow: "For operators and designers",
    title: "Guest experience meets daily operation.",
    body: "We coordinate service routes, storage, and back-of-house needs within the drawings so the space can operate as intended. Operating procedures remain with the operator, and an appointed designer retains their role.",
    line: "We can deliver an approved hospitality design without changing its authorship.",
  },
  includes: {
    eyebrow: "Scope",
    title: "A connected scope",
    intro: "Each stage belongs to one coordinated project. Joinery is made to the approved drawings, furniture is specified and sourced, and specialist trades are managed as required.",
    items: [
      { title: "Hospitality concept", body: "Planning, materials, lighting, and atmosphere shaped for the property, brand, and type of stay." },
      { title: "Guest journey", body: "Arrival, reception, lobby, seating, and the moments where guests encounter the brand within the space." },
      { title: "Technical development", body: "Construction drawings, quantities, specifications, service routes, storage, and coordination with specialist trades." },
      { title: "Fit-out and fabrication", body: "Floors, ceilings, wall finishes, joinery, and custom elements delivered to the approved design." },
      { title: "Furniture and FF&E", body: "Items specified and procured against the approved schedule, rather than selected from a fixed catalogue." },
      { title: "Installation and handover", body: "Installation, quality review, snagging, and final styling where required. Opening and licences remain the operator's responsibility." },
    ],
  },
  sizes: {
    eyebrow: "Project scope",
    title: "The right scope for the property",
    note: "Scope and cost depend on the drawings, quantities, site conditions, and operational requirements. We define them after reviewing the project.",
    items: [
      { title: "Build a defined scope", body: "Delivery of part of an approved hospitality design. When design is complete, this follows our fit-out service." },
      { title: "Concept to handover", body: "Interior design, technical development, procurement, fabrication, installation, and final handover." },
      { title: "Experience and operation", body: "The same complete process, with closer attention to arrival, circulation, material performance, and the staff journey." },
    ],
  },
  method: {
    eyebrow: "How we work",
    title: "A clear path to handover",
    steps: [
      { title: "Understand", body: "We review the property, brand, operator, guests, and patterns of use." },
      { title: "Design", body: "We develop the layout, materials, lighting, and guest journey for approval." },
      { title: "Develop", body: "We prepare coordinated drawings, quantities, and construction specifications." },
      { title: "Build", body: "We manage procurement, fabrication, installation, and site coordination." },
      { title: "Deliver", body: "We review quality, close snags, and hand over the completed space." },
    ],
  },
  related: {
    title: "Choose the right service",
    body: "Everyday restaurants and cafés belong under commercial spaces. Private homes follow design and build. Approved designs requiring execution follow fit-out. Existing hospitality properties that need change begin with renovation.",
    links: [
      { href: "/commercial-spaces", label: "Commercial spaces" },
      { href: "/fit-out", label: "Fit-out and execution" },
      { href: "/renovation", label: "Renovation and upgrade" },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "For places that welcome guests",
    items: [
      "Hotels and boutique hotels",
      "Serviced apartments",
      "Lobbies and reception",
      "Guest areas",
      "Hotel lounges",
      "Destination restaurants",
      "Hospitality developers",
    ],
    trust: "TURRIVA is a specialised spatial design and build studio, supported by a team experienced in design, execution, and visual communication.",
  },
  close: {
    title: "Planning a hospitality space?",
    body: "Tell us about the property, the guest experience, and the drawings available. We will review the requirements and discuss a suitable scope.",
  },
  form: {
    productLabel: "Hospitality spaces",
    choiceLegend: "Type of space",
    spaces: [
      { id: "hotel", label: "Hotel" },
      { id: "serviced", label: "Serviced apartment" },
      { id: "lobby", label: "Lobby or reception" },
      { id: "lounge", label: "Hotel lounge" },
      { id: "other", label: "Another guest space" },
    ],
    drawings: { label: "Do you have drawings?", yes: "Yes", no: "Not yet" },
  },
};

const ar: HospitalitySpacesCopy = {
  nav: "مساحات الضيافة",
  metaTitle: "تصميم وتنفيذ مساحات الضيافة",
  metaDescription:
    "تصمم توريفا الفنادق والشقق الفندقية ومساحات الضيوف وتنفذها بما يوازن بين تجربة الإقامة ومتطلبات التشغيل.",
  hero: {
    eyebrow: "مساحات الضيافة",
    title: "تصميم يبدأ من تجربة الإقامة.",
    body: "نصمم وننفذ الفنادق والشقق الفندقية ومساحات الضيوف وفق طريقة الوصول والإقامة والحركة داخل المنشأة، مع مراعاة احتياجات الفريق الذي يديرها.",
    cta: "ناقش مشروعك معنا",
    secondary: "استكشف نطاق العمل",
  },
  problem: {
    eyebrow: "لماذا يهم",
    title: "تجربة الإقامة تحتاج مساحة تعمل بكفاءة.",
    body: "يشكل الوصول والحركة والخدمة والتخزين وأداء المواد تجربة الضيف. لذلك يجب أن تخدم المساحة الضيوف والفريق والمشغّل في آن واحد.",
    points: ["وصول وحركة واضحان", "مواد ملائمة للاستخدام المتكرر والعناية", "احتياجات تشغيلية محسومة في التصميم"],
  },
  definition: {
    eyebrow: "الخدمة",
    title: "مساحات الضيافة",
    body: "خدمة متكاملة لتصميم وتنفيذ الفنادق والفنادق البوتيكية والشقق الفندقية والردهات ومناطق الضيوف. نربط تجربة الضيف بمتطلبات التشغيل، ثم ننجز التطوير والتوريد والتصنيع والتركيب والتسليم. وتبقى إدارة المنشأة لدى المشغّل.",
    result: "تندرج مطاعم الوجهة هنا عندما تكون المساحة محور التجربة. أما المطاعم والمقاهي اليومية فتندرج ضمن المساحات التجارية، ويبدأ تطوير منشأة ضيافة قائمة من خدمة التجديد.",
  },
  starts: {
    eyebrow: "نقطة البداية",
    title: "من تجربة الضيف أو مخططات معتمدة",
    items: [
      { title: "من موجز الضيافة", body: "ندرس المنشأة ومسار الضيف والعلامة ومتطلبات التشغيل، ثم نصمم المساحة وننفذها." },
      {
        title: "من مخططات معتمدة",
        body: "إذا اكتمل التصميم، نطوره للتنفيذ ونسلم النطاق المتفق عليه مع الحفاظ على رؤية المصمم.",
        href: "/fit-out",
        cta: "التنفيذ والتجهيز",
      },
    ],
  },
  partner: {
    eyebrow: "للمشغّلين ولمكاتب التصميم",
    title: "تجربة الضيف تلتقي بكفاءة التشغيل.",
    body: "ننسق مسارات الخدمة والتخزين واحتياجات المناطق الخلفية ضمن المخططات حتى تعمل المساحة كما ينبغي. وتبقى إجراءات التشغيل لدى المشغّل، ويحافظ المصمم المعين على دوره.",
    line: "يمكننا تنفيذ تصميم ضيافة معتمد مع الحفاظ على نسبته إلى مصممه.",
  },
  includes: {
    eyebrow: "النطاق",
    title: "نطاق مترابط",
    intro: "تمثل هذه المراحل مشروعاً واحداً ومنسقاً. تُنفذ النجارة وفق المخططات المعتمدة، ويُحدد الأثاث ويُورد، وتُدار الجهات المتخصصة حسب الحاجة.",
    items: [
      { title: "مفهوم الضيافة", body: "تخطيط ومواد وإضاءة وأجواء تُصاغ وفق المنشأة والعلامة ونوع الإقامة." },
      { title: "مسار الضيف", body: "الوصول والاستقبال والردهة والجلوس واللحظات التي يتفاعل فيها الضيف مع العلامة داخل المساحة." },
      { title: "التطوير الفني", body: "مخططات تنفيذ وكميات ومواصفات ومسارات خدمة وتخزين وتنسيق مع الجهات المتخصصة." },
      { title: "التجهيز والتصنيع", body: "أرضيات وأسقف وتشطيبات جدران ونجارة وعناصر مخصصة تُنفذ وفق التصميم المعتمد." },
      { title: "الأثاث والتجهيزات", body: "تُحدد العناصر وتُورد وفق الجدول المعتمد، من دون فرض كتالوج ثابت على المشروع." },
      { title: "التركيب والتسليم", body: "تركيب ومراجعة للجودة وإغلاق الملاحظات وتنسيق نهائي عند الحاجة. وتبقى مسؤولية الافتتاح والتراخيص لدى المشغّل." },
    ],
  },
  sizes: {
    eyebrow: "نطاق المشروع",
    title: "نطاق يناسب المنشأة",
    note: "يتحدد النطاق والتكلفة وفق المخططات والكميات وحالة الموقع ومتطلبات التشغيل، بعد مراجعة المشروع.",
    items: [
      { title: "تنفيذ نطاق محدد", body: "تسليم جزء من تصميم ضيافة معتمد. وعند اكتمال التصميم، يندرج العمل ضمن خدمة التنفيذ والتجهيز." },
      { title: "من الفكرة إلى التسليم", body: "تصميم داخلي وتطوير فني وتوريد وتصنيع وتركيب وتسليم نهائي." },
      { title: "التجربة والتشغيل", body: "المسار المتكامل نفسه، مع عناية أكبر بالوصول والحركة وأداء المواد ومسار فريق العمل." },
    ],
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "مسار واضح حتى التسليم",
    steps: [
      { title: "الفهم", body: "نراجع المنشأة والعلامة والمشغّل والضيوف وأنماط الاستخدام." },
      { title: "التصميم", body: "نطور التخطيط والمواد والإضاءة ومسار الضيف للاعتماد." },
      { title: "التطوير", body: "نعد مخططات وكميات ومواصفات تنفيذية منسقة." },
      { title: "التنفيذ", body: "ندير التوريد والتصنيع والتركيب والتنسيق في الموقع." },
      { title: "التسليم", body: "نراجع الجودة ونغلق الملاحظات ونسلم المساحة المكتملة." },
    ],
  },
  related: {
    title: "اختر الخدمة المناسبة",
    body: "تندرج المطاعم والمقاهي اليومية ضمن المساحات التجارية، والمساكن الخاصة ضمن التصميم والتنفيذ. وتتبع المخططات المعتمدة التي تحتاج إلى تنفيذ خدمة التنفيذ والتجهيز، بينما تبدأ منشآت الضيافة القائمة التي تحتاج إلى تغيير من خدمة التجديد.",
    links: [
      { href: "/commercial-spaces", label: "المساحات التجارية" },
      { href: "/fit-out", label: "التنفيذ والتجهيز" },
      { href: "/renovation", label: "التجديد والتطوير" },
    ],
  },
  audience: {
    eyebrow: "لمن",
    title: "للأماكن التي ترحب بالضيوف",
    items: ["فنادق وفنادق صغيرة", "شقق فندقية", "ردهات واستقبال", "مناطق الضيوف", "صالات جلوس فندقية", "مطاعم الوجهة", "مطورو ضيافة"],
    trust: "توريفا استوديو متخصص في التصميم المكاني والتنفيذ، يدعمه فريق ذو خبرة في التصميم والتنفيذ والاتصال البصري.",
  },
  close: {
    title: "هل تخطط لمساحة ضيافة؟",
    body: "شاركنا تفاصيل المنشأة وتجربة الضيف والمخططات المتاحة. سنراجع المتطلبات ونناقش معك نطاق العمل المناسب.",
  },
  form: {
    productLabel: "مساحات الضيافة",
    choiceLegend: "نوع المساحة",
    spaces: [
      { id: "hotel", label: "فندق" },
      { id: "serviced", label: "شقق فندقية" },
      { id: "lobby", label: "ردهة أو استقبال" },
      { id: "lounge", label: "صالة جلوس فندقية" },
      { id: "other", label: "مساحة ضيافة أخرى" },
    ],
    drawings: { label: "هل لديكم مخططات؟", yes: "نعم", no: "ليس بعد" },
  },
};

export function getHospitalitySpacesCopy(locale: Locale): HospitalitySpacesCopy {
  return locale === "ar" ? ar : en;
}
