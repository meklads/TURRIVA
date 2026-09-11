import type { Locale } from "@/shared/i18n/locale";

export const COMMERCIAL_SPACES_PATH = "/commercial-spaces";

export type CommercialSpacesCopy = {
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

const en: CommercialSpacesCopy = {
  nav: "Commercial spaces",
  metaTitle: "Commercial Space Design and Build",
  metaDescription:
    "TURRIVA designs and builds commercial spaces around the brand, customer journey, and daily operation, from concept to handover.",
  hero: {
    eyebrow: "Commercial spaces",
    title: "Designed for business. Built for people.",
    body: "We create restaurants, cafés, retail stores, showrooms, offices, and clinics around the way each business works. One considered process connects the interior, brand experience, technical development, supply, and build.",
    cta: "Discuss your project",
    secondary: "Send drawings",
  },
  problem: {
    eyebrow: "Why it matters",
    title: "A polished interior still needs to perform.",
    body: "Customers experience the brand through the space: how they enter, move, browse, order, and meet the team. Every decision should support that journey and the operation behind it.",
    points: ["A layout shaped by daily use", "A brand expressed throughout the space", "A coordinated path from design to handover"],
  },
  definition: {
    eyebrow: "The service",
    title: "Commercial spaces",
    body: "A complete design-and-build service for customer-facing businesses. We shape the interior around the activity and identity, then develop the technical package, procure, fabricate, install, and hand over.",
    result: "This service suits new restaurants, cafés, stores, showrooms, client offices, and clinics. Destination dining belongs under hospitality. Changes to an existing space begin with renovation.",
  },
  starts: {
    eyebrow: "Where we begin",
    title: "Start with a brief or approved drawings.",
    items: [
      { title: "From your business brief", body: "We study the activity, brand, customer journey, and operational needs before designing and building the space." },
      {
        title: "From approved drawings",
        body: "If the design is complete, we develop it for construction and deliver the agreed scope while respecting the designer's intent.",
        href: "/fit-out",
        cta: "Fit-out and execution",
      },
    ],
  },
  partner: {
    eyebrow: "For architects and designers",
    title: "Your design, carefully delivered.",
    body: "When a designer is appointed, their role remains clear. We review and develop the drawings for construction, then coordinate fabrication, installation, and handover.",
    line: "A focused delivery partnership for architecture and interior design practices.",
  },
  includes: {
    eyebrow: "Scope",
    title: "A connected scope",
    intro: "Each stage belongs to one coordinated project. Custom joinery follows the approved drawings, while metal, glass, stone, and specialist trades are managed as required.",
    items: [
      { title: "Concept and interior", body: "Planning, materials, and lighting developed around the activity, customer, and site." },
      { title: "Brand experience", body: "Identity, display, signage, wayfinding, and customer touchpoints coordinated within the interior. Brand and signage design remain specialist services." },
      { title: "Technical development", body: "Construction drawings, quantities, specifications, and trade coordination completed before fabrication." },
      { title: "Fit-out and joinery", body: "Floors, ceilings, walls, counters, and custom joinery shaped by the operational brief. Commercial kitchen systems remain a specialist scope." },
      { title: "Supply and fabrication", body: "Furniture, lighting, and custom elements sourced or made to the approved design, with specialist trades coordinated." },
      { title: "Installation and handover", body: "Site installation, coordination, quality review, snagging, and handover. Operating licences remain the operator's responsibility." },
    ],
  },
  sizes: {
    eyebrow: "Project scope",
    title: "The right scope for the brief",
    note: "Scope and cost depend on the drawings, quantities, site conditions, and operational requirements. We define them after reviewing the project.",
    items: [
      { title: "Build an approved design", body: "Delivery of an agreed construction scope. When design is complete, this follows our fit-out service." },
      { title: "Concept to handover", body: "Interior design, technical development, procurement, fabrication, installation, and final handover." },
      { title: "Brand-led experience", body: "The same complete process, with closer attention to the customer journey, display, and expression of the brand." },
    ],
  },
  method: {
    eyebrow: "How we work",
    title: "Clear decisions at every stage",
    steps: [
      { title: "Understand", body: "We review the activity, brand, site, customer journey, and operational needs." },
      { title: "Design", body: "We develop the layout, materials, lighting, and experience for approval." },
      { title: "Develop", body: "We prepare coordinated drawings, quantities, and construction specifications." },
      { title: "Build", body: "We manage procurement, fabrication, installation, and site coordination." },
      { title: "Deliver", body: "We review quality, close snags, and hand over the completed space." },
    ],
  },
  related: {
    title: "Choose the right service",
    body: "Private residences belong under design and build. Approved designs requiring execution follow fit-out. Hotels and destination restaurants belong under hospitality. Existing spaces that need change begin with renovation.",
    links: [
      { href: "/fit-out", label: "Fit-out and execution" },
      { href: "/design-build", label: "Design and build" },
      { href: "/hospitality-spaces", label: "Hospitality spaces" },
      { href: "/renovation", label: "Renovation and upgrade" },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "For customer-facing businesses",
    items: [
      "Restaurants and cafés",
      "Retail stores",
      "Showrooms",
      "Offices that receive clients",
      "Clinics and private centres",
      "Brands planning a new location",
      "Developers creating commercial assets",
    ],
    trust: "TURRIVA is a specialised spatial design and build studio, supported by a team experienced in design, execution, and visual communication.",
  },
  close: {
    title: "Planning a commercial space?",
    body: "Tell us about the business, the site, and the drawings available. We will review the requirements and discuss a suitable scope.",
  },
  form: {
    productLabel: "Commercial spaces",
    choiceLegend: "Type of space",
    spaces: [
      { id: "restaurant", label: "Restaurant or café" },
      { id: "retail", label: "Retail store" },
      { id: "showroom", label: "Showroom" },
      { id: "office", label: "Office" },
      { id: "clinic", label: "Clinic" },
      { id: "other", label: "Other commercial space" },
    ],
    drawings: { label: "Do you have drawings?", yes: "Yes", no: "Not yet" },
  },
};

const ar: CommercialSpacesCopy = {
  nav: "المساحات التجارية",
  metaTitle: "تصميم وتنفيذ المساحات التجارية",
  metaDescription:
    "تصمم توريفا المساحات التجارية وتنفذها وفق هوية العلامة ومسار العميل ومتطلبات التشغيل، من الفكرة حتى التسليم.",
  hero: {
    eyebrow: "المساحات التجارية",
    title: "مصممة للأعمال. ومهيأة للناس.",
    body: "نصمم وننفذ المطاعم والمقاهي والمتاجر وصالات العرض والمكاتب والعيادات بما يناسب طبيعة كل نشاط. ونربط التصميم الداخلي وتجربة العلامة والتطوير الفني والتوريد والتنفيذ ضمن مسار واحد.",
    cta: "ناقش مشروعك معنا",
    secondary: "أرسل المخططات",
  },
  problem: {
    eyebrow: "لماذا يهم",
    title: "جمال المساحة لا يغني عن كفاءتها.",
    body: "يختبر العميل العلامة من خلال المكان: عند الدخول والحركة والتصفح والطلب والتعامل مع الفريق. لذلك يجب أن تخدم كل تفاصيل المساحة تجربة العميل ومتطلبات التشغيل.",
    points: ["تخطيط يستجيب للاستخدام اليومي", "هوية حاضرة في كامل المساحة", "مسار منسق من التصميم إلى التسليم"],
  },
  definition: {
    eyebrow: "الخدمة",
    title: "المساحات التجارية",
    body: "خدمة متكاملة لتصميم وتنفيذ المساحات التي تستقبل العملاء. نصوغ التصميم الداخلي وفق النشاط والهوية، ثم ننجز التطوير الفني والتوريد والتصنيع والتركيب والتسليم.",
    result: "تناسب هذه الخدمة المطاعم والمقاهي والمتاجر وصالات العرض والمكاتب والعيادات الجديدة. أما مطاعم الوجهة فتندرج ضمن الضيافة، وتبدأ المساحات القائمة التي تحتاج إلى تغيير من خدمة التجديد.",
  },
  starts: {
    eyebrow: "نقطة البداية",
    title: "من موجز المشروع أو مخططات معتمدة",
    items: [
      { title: "من متطلبات النشاط", body: "ندرس النشاط والعلامة ومسار العميل واحتياجات التشغيل، ثم نصمم المساحة وننفذها." },
      {
        title: "من مخططات معتمدة",
        body: "إذا اكتمل التصميم، نطوره للتنفيذ ونسلم النطاق المتفق عليه مع الحفاظ على رؤية المصمم.",
        href: "/fit-out",
        cta: "التنفيذ والتجهيز",
      },
    ],
  },
  partner: {
    eyebrow: "لمكاتب التصميم والهندسة",
    title: "ننفذ التصميم كما ينبغي.",
    body: "عند وجود مصمم معين، يبقى دوره واضحاً. نراجع المخططات ونطورها للتنفيذ، ثم ننسق التصنيع والتركيب والتسليم.",
    line: "شراكة تنفيذ واضحة للمكاتب المعمارية ومكاتب التصميم الداخلي.",
  },
  includes: {
    eyebrow: "النطاق",
    title: "نطاق مترابط",
    intro: "تمثل هذه المراحل مشروعاً واحداً ومنسقاً. تُنفذ أعمال النجارة وفق المخططات المعتمدة، وتُدار أعمال المعادن والزجاج والحجر والتخصصات الأخرى حسب الحاجة.",
    items: [
      { title: "الفكرة والتصميم الداخلي", body: "تخطيط ومواد وإضاءة تُطور وفق النشاط والعميل وطبيعة الموقع." },
      { title: "تجربة العلامة", body: "تنسيق الهوية والعرض واللافتات والإرشاد ونقاط تفاعل العميل داخل المساحة. ويبقى تصميم الهوية واللافتات ضمن نطاق الجهات المتخصصة." },
      { title: "التطوير الفني", body: "مخططات تنفيذ وكميات ومواصفات وتنسيق للتخصصات قبل بدء التصنيع." },
      { title: "التجهيز والنجارة", body: "أرضيات وأسقف وجدران وكاونترات وأعمال نجارة مخصصة وفق احتياجات التشغيل. وتبقى أنظمة المطابخ التجارية نطاقاً متخصصاً." },
      { title: "التوريد والتصنيع", body: "توريد الأثاث والإضاءة وتصنيع العناصر المخصصة وفق التصميم المعتمد، مع تنسيق الجهات المتخصصة." },
      { title: "التركيب والتسليم", body: "تركيب وتنسيق في الموقع ومراجعة للجودة وإغلاق الملاحظات ثم التسليم. وتبقى تراخيص التشغيل من مسؤولية المشغّل." },
    ],
  },
  sizes: {
    eyebrow: "نطاق المشروع",
    title: "نطاق يناسب متطلبات المشروع",
    note: "يتحدد النطاق والتكلفة وفق المخططات والكميات وحالة الموقع ومتطلبات التشغيل، بعد مراجعة المشروع.",
    items: [
      { title: "تنفيذ تصميم معتمد", body: "تسليم نطاق تنفيذي متفق عليه. وعند اكتمال التصميم، يندرج العمل ضمن خدمة التنفيذ والتجهيز." },
      { title: "من الفكرة إلى التسليم", body: "تصميم داخلي وتطوير فني وتوريد وتصنيع وتركيب وتسليم نهائي." },
      { title: "تجربة تقودها العلامة", body: "المسار المتكامل نفسه، مع عناية أكبر برحلة العميل والعرض وحضور الهوية في المكان." },
    ],
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "قرارات واضحة في كل مرحلة",
    steps: [
      { title: "الفهم", body: "نراجع النشاط والعلامة والموقع ومسار العميل ومتطلبات التشغيل." },
      { title: "التصميم", body: "نطور التخطيط والمواد والإضاءة والتجربة للاعتماد." },
      { title: "التطوير", body: "نعد مخططات وكميات ومواصفات تنفيذية منسقة." },
      { title: "التنفيذ", body: "ندير التوريد والتصنيع والتركيب والتنسيق في الموقع." },
      { title: "التسليم", body: "نراجع الجودة ونغلق الملاحظات ونسلم المساحة المكتملة." },
    ],
  },
  related: {
    title: "اختر الخدمة المناسبة",
    body: "تندرج المساكن الخاصة ضمن التصميم والتنفيذ. وتتبع المخططات المعتمدة التي تحتاج إلى تنفيذ خدمة التنفيذ والتجهيز. وتندرج الفنادق ومطاعم الوجهة ضمن الضيافة، بينما تبدأ المساحات القائمة التي تحتاج إلى تغيير من خدمة التجديد.",
    links: [
      { href: "/fit-out", label: "التنفيذ والتجهيز" },
      { href: "/design-build", label: "التصميم والتنفيذ" },
      { href: "/hospitality-spaces", label: "مساحات الضيافة" },
      { href: "/renovation", label: "التجديد والتطوير" },
    ],
  },
  audience: {
    eyebrow: "لمن",
    title: "للأعمال التي تستقبل عملاءها",
    items: [
      "مطاعم ومقاهي",
      "متاجر تجزئة",
      "صالات عرض",
      "مكاتب تستقبل عملاء",
      "عيادات ومراكز خاصة",
      "علامات تخطط لفرع جديد",
      "مطورون ينشئون أصولاً تجارية",
    ],
    trust: "توريفا استوديو متخصص في التصميم المكاني والتنفيذ، يدعمه فريق ذو خبرة في التصميم والتنفيذ والاتصال البصري.",
  },
  close: {
    title: "هل تخطط لمساحة تجارية؟",
    body: "شاركنا طبيعة النشاط والموقع والمخططات المتاحة. سنراجع المتطلبات ونناقش معك نطاق العمل المناسب.",
  },
  form: {
    productLabel: "المساحات التجارية",
    choiceLegend: "نوع المساحة",
    spaces: [
      { id: "restaurant", label: "مطعم أو مقهى" },
      { id: "retail", label: "متجر تجزئة" },
      { id: "showroom", label: "صالة عرض" },
      { id: "office", label: "مكتب" },
      { id: "clinic", label: "عيادة" },
      { id: "other", label: "مساحة تجارية أخرى" },
    ],
    drawings: { label: "هل لديكم مخططات؟", yes: "نعم", no: "ليس بعد" },
  },
};

export function getCommercialSpacesCopy(locale: Locale): CommercialSpacesCopy {
  return locale === "ar" ? ar : en;
}
