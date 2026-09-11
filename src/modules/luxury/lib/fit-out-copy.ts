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
  metaTitle: "Fit-out and execution",
  metaDescription:
    "The design is approved. Turriva develops it for site, supplies, builds, and hands it over. We do not replace the designer. The first step is a conversation.",
  hero: {
    eyebrow: "Fit-out and execution",
    title: "The design is approved. Who will build it?",
    body: "We take an approved design through technical development, supply, fabrication, installation, and handover. The original design stays. We do not redraw it to make the job easier.",
    cta: "Discuss your project",
    secondary: "Share the project scope",
  },
  problem: {
    eyebrow: "The problem",
    title: "A good drawing does not guarantee a good build.",
    body: "The client already has a designer. What is missing is a party that can price the work, develop it for site, supply it, build it, and hand it over without changing the design to suit the workshop.",
    points: ["The approved design is the brief", "Conflicts found before fabrication", "One party accountable on site"],
  },
  definition: {
    eyebrow: "The product",
    title: "Fit-out and execution",
    body: "A defined scope for a project that already has drawings. Turriva reviews them, develops the technical package, then supplies, builds, and hands over. We are the execution partner, not a second designer.",
    result: "If there is no design yet, start with design and build. If the room exists and still needs to be assessed, that is renovation. This page starts when the design is already there.",
  },
  partner: {
    eyebrow: "For architects and designers",
    title: "Your design. Our execution.",
    body: "We do not compete for the design appointment. We review the drawings, flag what will not build cleanly, and carry the approved design through fabrication and site.",
    line: "An execution partner for architects, interior designers, and engineers.",
  },
  includes: {
    eyebrow: "Scope",
    title: "What the work covers",
    intro: "Joinery is made to the drawings. Metals, glass, and stone are coordinated with the specialists the design requires. We do not claim every trade is made in one workshop.",
    items: [
      { title: "Review", body: "Read the drawings, test whether they can be built, and name the conflicts before work starts." },
      { title: "Technical development", body: "Shop drawings, quantities, material specification, and coordination." },
      { title: "Supply", body: "Materials, joinery, furniture, and lighting, bought against the approved specification." },
      { title: "Fabrication", body: "Custom joinery and the made elements the drawings call for." },
      { title: "Install", body: "Fit-out, installation, site coordination, and supervision. Other trades are coordinated." },
      { title: "Hand over", body: "Quality review, snagging, and a documented handover." },
    ],
  },
  sizes: {
    eyebrow: "Size of the work",
    title: "How much of the build is in scope. Not a price list.",
    note: "The cost follows the drawings and the quantities. It is set after the review, not from a package name.",
    items: [
      { title: "A defined scope", body: "One part of the drawings, built to the approved specification." },
      { title: "Through to handover", body: "Supply, fabrication, and installation of the agreed package, then handover." },
      { title: "The full fit-out", body: "From the drawings to a space ready to use, still without replacing the designer." },
    ],
  },
  method: {
    eyebrow: "How we work",
    title: "Review first. Then a scope. Then the site.",
    steps: [
      { title: "Review", body: "The design, the drawings, and what the site will need." },
      { title: "Develop", body: "Technical details, quantities, and the specification." },
      { title: "Agree the scope", body: "The work, the programme, and the cost, before fabrication starts." },
      { title: "Build", body: "Supply, fabrication, installation, and coordination." },
      { title: "Deliver", body: "Quality review, snagging, and handover." },
    ],
  },
  related: {
    title: "No drawings yet?",
    body: "If the project still needs a design, start with design and build. If the space already exists and still needs to be assessed, that is renovation. This page is for work that is already designed, including a renovation design.",
    links: [
      { href: "/design-build", label: "Design and build" },
      { href: "/renovation", label: "Renovation and upgrade" },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "Anyone who already has the design.",
    items: ["Architects and interior designers", "Engineering offices", "Developers", "Owners", "A company with approved drawings"],
    trust: "Turriva is a new specialized brand, backed by a team with experience in design, execution, and visual work.",
  },
  close: {
    title: "You have a design ready?",
    body: "Send the drawings, or describe the scope. We will review what the build needs and propose how to proceed. The first step is a conversation, not a price sent before we have read the drawings.",
  },
  form: {
    productLabel: "Fit-out and execution",
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
  nav: "التنفيذ والتجهيز",
  metaTitle: "التنفيذ والتجهيز",
  metaDescription:
    "التصميم معتمد. توريفا تطوّره للموقع وتورّد وتنفّذ وتسلّم. لا نحل محل المصمم. الخطوة الأولى محادثة.",
  hero: {
    eyebrow: "التنفيذ والتجهيز",
    title: "التصميم معتمد. من يبنيه؟",
    body: "نأخذ تصميماً معتمداً إلى التطوير الفني والتوريد والتصنيع والتركيب والتسليم. التصميم الأصلي يبقى. لا نعيد رسمه ليسهّل العمل على الورشة.",
    cta: "ناقش مشروعك",
    secondary: "شاركنا نطاق المشروع",
  },
  problem: {
    eyebrow: "المشكلة",
    title: "المخطط الجيد لا يضمن تنفيذاً جيداً.",
    body: "العميل لديه مصمم. ما ينقصه جهة تسعّر العمل، وتطوّره للموقع، وتورّد، وتبني، وتسلّم، من غير أن تغيّر التصميم ليناسب الورشة.",
    points: ["التصميم المعتمد هو الموجز", "التعارضات تُكشف قبل التصنيع", "جهة واحدة مسؤولة في الموقع"],
  },
  definition: {
    eyebrow: "المنتج",
    title: "التنفيذ والتجهيز",
    body: "نطاق محدد لمشروع لديه مخططات. توريفا تراجعها، وتطوّر الحزمة الفنية، ثم تورّد وتبني وتسلّم. نحن شريك تنفيذ، لا مصمم ثانٍ.",
    result: "إن لم يوجد تصميم بعد، ابدأ من التصميم والتنفيذ. إذا كانت الغرفة قائمة وما زالت تحتاج إلى معاينة، فذلك التجديد والتطوير. هذه الصفحة تبدأ عندما يكون التصميم موجوداً.",
  },
  partner: {
    eyebrow: "لمكاتب التصميم والهندسة",
    title: "تصميمكم. تنفيذنا.",
    body: "لا ننافس على تعيين التصميم. نراجع المخططات، ونبيّن ما لن يُبنى بنظافة، ونحمل التصميم المعتمد عبر التصنيع والموقع.",
    line: "شريك تنفيذ للمهندسين ومصممي الداخل.",
  },
  includes: {
    eyebrow: "النطاق",
    title: "ماذا يغطي العمل",
    intro: "النجارة تُصنع وفق المخططات. المعادن والزجاج والحجر تُنسَّق مع الجهات التي يتطلبها التصميم. لا ندّعي أن كل مهنة تُصنع في ورشة واحدة.",
    items: [
      { title: "المراجعة", body: "قراءة المخططات، واختبار قابلية التنفيذ، وتسمية التعارضات قبل بدء العمل." },
      { title: "التطوير الفني", body: "مخططات تنفيذ وكميات ومواصفات مواد وتنسيق." },
      { title: "التوريد", body: "مواد ونجارة وأثاث وإضاءة، تُشترى وفق المواصفات المعتمدة." },
      { title: "التصنيع", body: "نجارة مخصصة والعناصر المصنّعة التي تطلبها المخططات." },
      { title: "التركيب", body: "تشطيب وتركيب وتنسيق في الموقع وإشراف. التخصصات الأخرى تُنسَّق." },
      { title: "التسليم", body: "مراجعة للجودة وإغلاق الملاحظات وتسليم موثق." },
    ],
  },
  sizes: {
    eyebrow: "حجم العمل",
    title: "كم من التنفيذ داخل النطاق. ليست قائمة أسعار.",
    note: "التكلفة تتبع المخططات والكميات. تُحدد بعد المراجعة، لا من اسم باقة.",
    items: [
      { title: "نطاق محدد", body: "جزء من المخططات، يُنفَّذ وفق المواصفات المعتمدة." },
      { title: "حتى التسليم", body: "توريد وتصنيع وتركيب للحزمة المتفق عليها، ثم التسليم." },
      { title: "التجهيز الكامل", body: "من المخططات إلى مساحة جاهزة للاستخدام، ومن غير أن نحل محل المصمم." },
    ],
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "المراجعة أولاً. ثم النطاق. ثم الموقع.",
    steps: [
      { title: "المراجعة", body: "التصميم والمخططات وما سيحتاجه الموقع." },
      { title: "التطوير", body: "تفاصيل فنية وكميات ومواصفات." },
      { title: "اتفاق النطاق", body: "العمل والبرنامج والتكلفة، قبل أن يبدأ التصنيع." },
      { title: "التنفيذ", body: "توريد وتصنيع وتركيب وتنسيق." },
      { title: "التسليم", body: "مراجعة للجودة وإغلاق الملاحظات والتسليم." },
    ],
  },
  related: {
    title: "لا توجد مخططات بعد؟",
    body: "إذا كان المشروع ما زال يحتاج إلى تصميم، ابدأ من التصميم والتنفيذ. إذا كانت المساحة قائمة وما زالت تحتاج إلى معاينة، فذلك التجديد والتطوير. هذه الصفحة لعمل مُصمَّم بالفعل، بما فيه تصميم التجديد.",
    links: [
      { href: "/design-build", label: "التصميم والتنفيذ" },
      { href: "/renovation", label: "التجديد والتطوير" },
    ],
  },
  audience: {
    eyebrow: "لمن",
    title: "لمن لديه التصميم بالفعل.",
    items: ["مهندسون ومصممو داخل", "مكاتب هندسية", "مطورون", "ملاك", "شركة لديها مخططات معتمدة"],
    trust: "توريفا علامة متخصصة حديثة، مدعومة بفريق ذي خبرة في التصميم والتنفيذ والعمل البصري.",
  },
  close: {
    title: "لديك تصميم جاهز؟",
    body: "أرسل المخططات، أو صف النطاق. نراجع ما يحتاجه التنفيذ ونقترح طريقة العمل. الخطوة الأولى محادثة، لا سعر يُرسل قبل قراءة المخططات.",
  },
  form: {
    productLabel: "التنفيذ والتجهيز",
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
