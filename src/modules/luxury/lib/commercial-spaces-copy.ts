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
  metaTitle: "Commercial spaces",
  metaDescription:
    "A space where the customer meets the brand. Turriva designs and builds it for how the place works, then hands it over ready to open. The first step is a conversation.",
  hero: {
    eyebrow: "Commercial spaces",
    title: "Where the customer meets the brand.",
    body: "We design and build spaces that sell or receive customers. The plan, the interior, and the way the brand is read in the room, then technical development, supply, and handover. Not shop finishing with a sign on the door.",
    cta: "Discuss your project",
    secondary: "What the work includes",
  },
  problem: {
    eyebrow: "The problem",
    title: "A finished interior can still fail as a place of business.",
    body: "The customer does not buy the paint. They meet the brand, find what they came for, and decide whether to stay. If the path, the counter, and the display do not work, the finish does not save the visit.",
    points: ["How the place is used, not only how it looks", "The brand readable in the room, not only on the sign", "A space ready to open, not a drawing left for someone else"],
  },
  definition: {
    eyebrow: "The product",
    title: "Commercial spaces",
    body: "A defined path for a restaurant, café, store, showroom, client office, clinic, or other space that receives customers. Turriva designs the interior around the activity and the brand, then develops, supplies, and builds it.",
    result: "A private home stays on design and build. A sales gallery for a development is the project experience. This page is the room where a business meets its customers.",
  },
  starts: {
    eyebrow: "How you can start",
    title: "From the activity, or from a design you already have.",
    items: [
      { title: "From how the place operates", body: "We start with the activity, the brand, and the customer path, then design and build the room." },
      {
        title: "From drawings you have",
        body: "If the design is already approved, we develop it for site and build it. We do not replace the designer.",
        href: "/fit-out",
        cta: "Fit-out and execution",
      },
    ],
  },
  partner: {
    eyebrow: "For architects and designers",
    title: "Bring the design. We will build the space.",
    body: "We do not compete for the design appointment when you already have one. We review the drawings, develop them for site, and carry them through fabrication and handover.",
    line: "A direct way to sell this work with architecture and interior offices.",
  },
  includes: {
    eyebrow: "Scope",
    title: "What the work covers",
    intro: "These are stages of one job, not six products. Joinery is made to the drawings. Metals, glass, and stone are coordinated with the specialists the design requires.",
    items: [
      { title: "Concept and interior", body: "The plan, materials, and lighting, designed for the activity, not for a showroom photograph." },
      { title: "The brand in the room", body: "How identity, display, and the customer path sit in the space. Signage and wayfinding are specified and coordinated. We are not a signage studio." },
      { title: "Technical development", body: "Shop drawings, quantities, specification, and coordination before fabrication." },
      { title: "Fit-out and joinery", body: "Ceilings, floors, walls, counters, and the joinery the activity needs. A service counter or kitchen front when the operation requires it, not a kitchen catalogue." },
      { title: "Supply and fabrication", body: "Custom joinery, furniture, and lighting, bought and made against the approved drawings. Other trades are coordinated." },
      { title: "Install and hand over", body: "Installation, site coordination, quality review, snagging, and a space ready to open. Operating licences stay with the operator." },
    ],
  },
  sizes: {
    eyebrow: "Size of the work",
    title: "How much of the path is in scope. Not a price list.",
    note: "The cost follows the drawings, the quantities, and how the place operates. It is set after we understand the work, not from a package name.",
    items: [
      { title: "An approved design, built", body: "Execution of an agreed scope. If that is the whole job, fit-out is the path." },
      { title: "From concept to opening", body: "Design, technical development, supply, and build, through to handover." },
      { title: "The brand has to be read in the room", body: "The same path, with more attention to the customer journey, display, and how the identity sits in the space. Not a named package." },
    ],
  },
  method: {
    eyebrow: "How we work",
    title: "Understand the place. Then design it. Then build it.",
    steps: [
      { title: "Understand", body: "The activity, the brand, the space, and how it will operate." },
      { title: "Design", body: "The plan, the materials, and the customer path, for your approval." },
      { title: "Develop", body: "Shop drawings, quantities, and a specification that can be built." },
      { title: "Build", body: "Supply, fabrication, installation, and coordination on site." },
      { title: "Deliver", body: "Quality review, snagging, and a space ready to open." },
    ],
  },
  related: {
    title: "Not every room is this product.",
    body: "A private residence is design and build. An approved design that only needs execution is fit-out. A sales gallery for a development is the project experience.",
    links: [
      { href: "/fit-out", label: "Fit-out and execution" },
      { href: "/design-build", label: "Design and build" },
      { href: "/real-estate-experience", label: "Real estate project experience" },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "A business that receives customers inside a space.",
    items: [
      "Restaurants and cafés",
      "Retail stores",
      "Showrooms",
      "Offices that receive clients",
      "Clinics and private centers, as client spaces",
      "Brands opening a new branch",
      "Developers with commercial space to lease or operate",
    ],
    trust: "Turriva is a new specialized brand, backed by a team with experience in design, execution, and visual work.",
  },
  close: {
    title: "A commercial space to open?",
    body: "Share the space, the drawings if you have them, and what the activity is. We will propose a scope. The first step is a conversation, not a price sent before we understand how the place will work.",
  },
  form: {
    productLabel: "Commercial spaces",
    choiceLegend: "Type of space",
    spaces: [
      { id: "restaurant", label: "Restaurant or café" },
      { id: "retail", label: "Retail" },
      { id: "showroom", label: "Showroom" },
      { id: "office", label: "Office" },
      { id: "clinic", label: "Clinic" },
      { id: "other", label: "Another space" },
    ],
    drawings: { label: "Do you have drawings?", yes: "Yes", no: "Not yet" },
  },
};

const ar: CommercialSpacesCopy = {
  nav: "المساحات التجارية",
  metaTitle: "المساحات التجارية",
  metaDescription:
    "مساحة يلتقي فيها العميل بالعلامة. توريفا تصممها وتبنيها لطريقة عمل المكان، ثم تسلّمها جاهزة للافتتاح. الخطوة الأولى محادثة.",
  hero: {
    eyebrow: "المساحات التجارية",
    title: "حيث يلتقي العميل بالعلامة.",
    body: "نصمم وننفذ المساحات التي تبيع أو تستقبل العملاء. التخطيط والتصميم الداخلي وطريقة قراءة العلامة داخل المكان، ثم التطوير الفني والتوريد والتسليم. ليس تشطيب محل مع لافتة على الباب.",
    cta: "ناقش مشروعك معنا",
    secondary: "ماذا يشمل العمل",
  },
  problem: {
    eyebrow: "المشكلة",
    title: "فراغ مكتمل قد يفشل كمكان عمل.",
    body: "العميل لا يشتري الدهان. يلتقي بالعلامة، ويجد ما جاء من أجله، ويقرر إن كان سيبقى. إن لم يعمل المسار والكاونتر والعرض، فالتشطيب لا ينقذ الزيارة.",
    points: ["كيف يُستخدم المكان، لا مظهره فقط", "العلامة تُقرأ داخل الغرفة، لا على اللافتة فقط", "مساحة جاهزة للافتتاح، لا مخطط يُترك لجهة أخرى"],
  },
  definition: {
    eyebrow: "المنتج",
    title: "المساحات التجارية",
    body: "مسار محدد لمطعم أو مقهى أو متجر أو صالة عرض أو مكتب يستقبل عملاء أو عيادة أو أي مساحة تستقبل جمهوراً. توريفا تصمم الداخل حول النشاط والعلامة، ثم تطوّره وتورّده وتبنيه.",
    result: "المسكن الخاص يبقى في التصميم والتنفيذ. مركز بيع المشروع العقاري هو تجربة المشروع. هذه الصفحة للمكان الذي تلتقي فيه جهة تجارية بعملائها.",
  },
  starts: {
    eyebrow: "كيف نبدأ",
    title: "من طريقة التشغيل، أو من تصميم لديكم.",
    items: [
      { title: "من طريقة عمل المكان", body: "نبدأ بالنشاط والعلامة ومسار العميل، ثم نصمم الغرفة ونبنيها." },
      {
        title: "من مخططات لديكم",
        body: "إذا كان التصميم معتمداً، نطوّره للموقع ونبنيه. لا نحل محل المصمم.",
        href: "/fit-out",
        cta: "التنفيذ والتجهيز",
      },
    ],
  },
  partner: {
    eyebrow: "لمكاتب التصميم والهندسة",
    title: "أحضِروا التصميم. نحن نبني المساحة.",
    body: "لا ننافس على تعيين التصميم عندما يكون لديكم مصمم. نراجع المخططات، ونطوّرها للموقع، ونحملها عبر التصنيع والتسليم.",
    line: "طريقة مباشرة لبيع هذا العمل مع المكاتب المعمارية ومكاتب التصميم الداخلي.",
  },
  includes: {
    eyebrow: "النطاق",
    title: "ماذا يغطي العمل",
    intro: "هذه مراحل عمل واحد، لا ستة منتجات. النجارة تُصنع وفق المخططات. المعادن والزجاج والحجر تُنسَّق مع الجهات التي يتطلبها التصميم.",
    items: [
      { title: "الفكرة والتصميم الداخلي", body: "التخطيط والمواد والإضاءة، بما يناسب النشاط، لا صورة صالة عرض." },
      { title: "العلامة داخل المكان", body: "كيف تجلس الهوية والعرض ومسار العميل داخل المساحة. اللافتات والإرشاد تُحدد وتُنسَّق. لسنا استوديو لافتات." },
      { title: "التطوير الفني", body: "مخططات تنفيذ وكميات ومواصفات وتنسيق، قبل التصنيع." },
      { title: "التجهيز والنجارة", body: "أسقف وأرضيات وجدران وكاونترات والنجارة التي يحتاجها النشاط. واجهة مطبخ أو كاونتر خدمة عندما يتطلب التشغيل ذلك، لا كتالوج مطابخ." },
      { title: "التوريد والتصنيع", body: "نجارة مخصصة وأثاث وإضاءة، تُشترى وتُصنع وفق المخططات المعتمدة. التخصصات الأخرى تُنسَّق." },
      { title: "التركيب والتسليم", body: "تركيب وتنسيق في الموقع ومراجعة للجودة وإغلاق الملاحظات، ثم مساحة جاهزة للافتتاح. التراخيص تبقى لدى المشغّل." },
    ],
  },
  sizes: {
    eyebrow: "حجم العمل",
    title: "كم من المسار داخل النطاق. ليست قائمة أسعار.",
    note: "التكلفة تتبع المخططات والكميات وطريقة تشغيل المكان. تُحدد بعد فهم العمل، لا من اسم باقة.",
    items: [
      { title: "تصميم معتمد يُبنى", body: "تنفيذ نطاق متفق عليه. إن كان ذلك هو العمل كله، فالمسار هو التنفيذ والتجهيز." },
      { title: "من الفكرة إلى الافتتاح", body: "تصميم وتطوير فني وتوريد وتنفيذ، حتى التسليم." },
      { title: "العلامة يجب أن تُقرأ داخل المكان", body: "المسار نفسه، باهتمام أكبر بمسار العميل والعرض وطريقة جلوس الهوية في المساحة. ليست باقة باسم." },
    ],
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "نفهم المكان. ثم نصممه. ثم نبنيه.",
    steps: [
      { title: "الفهم", body: "النشاط والعلامة والمساحة وطريقة التشغيل." },
      { title: "التصميم", body: "التخطيط والمواد ومسار العميل، لاعتمادكم." },
      { title: "التطوير", body: "مخططات تنفيذ وكميات ومواصفات يمكن بناؤها." },
      { title: "التنفيذ", body: "توريد وتصنيع وتركيب وتنسيق في الموقع." },
      { title: "التسليم", body: "مراجعة للجودة وإغلاق الملاحظات، ثم مساحة جاهزة للافتتاح." },
    ],
  },
  related: {
    title: "ليست كل غرفة هذا المنتج.",
    body: "المسكن الخاص هو التصميم والتنفيذ. التصميم المعتمد الذي يحتاج تنفيذاً فقط هو التنفيذ والتجهيز. مركز بيع المشروع العقاري هو تجربة المشروع.",
    links: [
      { href: "/fit-out", label: "التنفيذ والتجهيز" },
      { href: "/design-build", label: "التصميم والتنفيذ" },
      { href: "/real-estate-experience", label: "تجربة المشروع العقاري" },
    ],
  },
  audience: {
    eyebrow: "لمن",
    title: "جهة تستقبل عملاءها داخل مساحة.",
    items: [
      "مطاعم ومقاهي",
      "متاجر تجزئة",
      "صالات عرض",
      "مكاتب تستقبل عملاء",
      "عيادات ومراكز خاصة، كمساحات استقبال",
      "علامات تفتح فرعاً جديداً",
      "مطورون لديهم مساحة تجارية للتأجير أو التشغيل",
    ],
    trust: "توريفا علامة متخصصة حديثة، مدعومة بفريق ذي خبرة في التصميم والتنفيذ والعمل البصري.",
  },
  close: {
    title: "لديك مساحة تجارية تُفتتح؟",
    body: "شاركنا المساحة، والمخططات إن وُجدت، وطبيعة النشاط. نقترح نطاقاً. الخطوة الأولى محادثة، لا سعر يُرسل قبل أن نفهم كيف سيعمل المكان.",
  },
  form: {
    productLabel: "المساحات التجارية",
    choiceLegend: "نوع المساحة",
    spaces: [
      { id: "restaurant", label: "مطعم أو مقهى" },
      { id: "retail", label: "تجزئة" },
      { id: "showroom", label: "صالة عرض" },
      { id: "office", label: "مكتب" },
      { id: "clinic", label: "عيادة" },
      { id: "other", label: "مساحة أخرى" },
    ],
    drawings: { label: "هل لديكم مخططات؟", yes: "نعم", no: "ليس بعد" },
  },
};

export function getCommercialSpacesCopy(locale: Locale): CommercialSpacesCopy {
  return locale === "ar" ? ar : en;
}
