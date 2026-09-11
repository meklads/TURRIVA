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
  metaTitle: "Design and build",
  metaDescription:
    "One path from an idea to a space ready to use: design, technical development, supply, installation, and handover. The first step is a conversation.",
  hero: {
    eyebrow: "Design and build",
    title: "From an idea to a space ready to use.",
    body: "Design, technical development, supply, installation, and handover, on one path. You do not have to manage a designer, a supplier, and a contractor as three separate jobs.",
    cta: "Discuss your project",
    secondary: "Send drawings",
  },
  problem: {
    eyebrow: "The problem",
    title: "A drawing is not a finished space.",
    body: "When design, supply, and site sit with different parties, the finished room drifts from what was approved. Someone has to hold the path until the space can be used.",
    points: ["One brief, not three contracts to reconcile", "Details agreed before fabrication", "A space you can use, not a concept left on paper"],
  },
  definition: {
    eyebrow: "The product",
    title: "Design and build",
    body: "A defined path for a space that starts from an idea and ends when it is ready to use. Turriva designs it and builds it. One team, from the brief to handover.",
    result: "If the design is already approved, that is fit-out and execution. If the room already exists and the job is to change it, that is renovation. This is not a furniture catalogue, and not a software product.",
  },
  starts: {
    eyebrow: "How you can start",
    title: "This page starts from an idea.",
    items: [
      { title: "From an idea", body: "We develop the concept, the materials, and the details, then build them." },
      {
        title: "From drawings you have",
        body: "If the design is already approved, that is a different job. We develop it for site and execute it, without replacing the designer.",
        href: "/fit-out",
        cta: "Fit-out and execution",
      },
    ],
  },
  includes: {
    eyebrow: "The path",
    title: "What the work covers",
    intro: "These are stages of one job, not six products.",
    items: [
      { title: "Understand the project", body: "Use, spaces, the standard required, and the budget you have in mind." },
      { title: "Design", body: "Concept, interior, materials, furniture, lighting, and the details that define the room." },
      { title: "Technical development", body: "Shop drawings, quantities, specification, and coordination before anyone fabricates." },
      { title: "Supply and fabrication", body: "Joinery, materials, lighting, and furniture, bought and made against the approved drawings." },
      { title: "Build", body: "Fit-out, installation, site coordination, and quality checks. Specialist trades are coordinated, not replaced by a claim we do every trade ourselves." },
      { title: "Hand over", body: "Snagging, final styling where the space needs it, and a space ready to use." },
    ],
  },
  sizes: {
    eyebrow: "Size of the work",
    title: "The scope follows the project. Not a price list.",
    note: "These describe how much of the path is in scope. Every project has its own quantities and specification. The fee is set after we understand the work.",
    items: [
      { title: "A clear build", body: "Design and execution of an agreed scope, without extra layers the space does not need." },
      { title: "Through to the furnished room", body: "Design, supply, installation, and furniture, so the space can be used." },
      { title: "A more specific brief", body: "The same path, with more detail and more of the room made for this project rather than selected from a range." },
    ],
  },
  method: {
    eyebrow: "How we work",
    title: "Five decisions. Then the space.",
    steps: [
      { title: "Discover", body: "The project, the use, the space, and the budget you are working toward." },
      { title: "Design", body: "The idea, the materials, and the details, for your approval." },
      { title: "Develop", body: "Drawings, quantities, and a specification that can be built." },
      { title: "Build", body: "Supply, fabrication, installation, and coordination on site." },
      { title: "Deliver", body: "A quality review, then a space ready to use." },
    ],
  },
  related: {
    title: "This page is not every job.",
    body: "A sales gallery is the real-estate project experience. A unit a buyer walks is a show unit. A new shop or restaurant is commercial spaces. An existing room that needs to change is renovation. This page is one team from an idea to a space you will occupy.",
    links: [
      { href: "/fit-out", label: "Fit-out and execution" },
      { href: "/renovation", label: "Renovation and upgrade" },
      { href: "/commercial-spaces", label: "Commercial spaces" },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "A client who wants one team from the start.",
    body: "A villa or private residence that is not yet the room it will become. A shop, a hotel, and an existing room that needs to change each have their own page.",
    trust: "Turriva is a new specialized brand, backed by a team with experience in design, execution, and visual work.",
  },
  close: {
    title: "A new space to build?",
    body: "Share the idea. If the design is already approved, or the room already exists, we will point you to the right path. The first step is a conversation, not a price sent in the dark.",
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
  metaTitle: "التصميم والتنفيذ",
  metaDescription:
    "مسار واحد من الفكرة إلى مساحة جاهزة للاستخدام: تصميم وتطوير فني وتوريد وتركيب وتسليم. الخطوة الأولى محادثة.",
  hero: {
    eyebrow: "التصميم والتنفيذ",
    title: "من الفكرة إلى مساحة جاهزة للاستخدام.",
    body: "تصميم وتطوير فني وتوريد وتركيب وتسليم، في مسار واحد. لست مضطراً لإدارة مصمم ومورد ومنفذ كثلاث جهات منفصلة.",
    cta: "ناقش مشروعك",
    secondary: "أرسل المخططات",
  },
  problem: {
    eyebrow: "المشكلة",
    title: "المخطط ليس مساحة مكتملة.",
    body: "عندما ينفصل التصميم عن التوريد وعن الموقع، تبتعد الغرفة عما اعتُمد. لا بد من جهة تُمسك المسار حتى تصبح المساحة قابلة للاستخدام.",
    points: ["موجز واحد، لا ثلاثة عقود تُوفَّق بينها", "تفاصيل تُعتمد قبل التصنيع", "مساحة تُستخدم، لا فكرة تبقى على الورق"],
  },
  definition: {
    eyebrow: "المنتج",
    title: "التصميم والتنفيذ",
    body: "مسار محدد لمساحة تبدأ من فكرة وتنتهي عندما تصبح جاهزة للاستخدام. توريفا تصممها وتبنيها. فريق واحد، من الموجز إلى التسليم.",
    result: "إذا كان التصميم معتمداً، فذلك التنفيذ والتجهيز. إذا كانت الغرفة قائمة والعمل تغييرها، فذلك التجديد والتطوير. ليست كتالوج أثاث، وليست منتجاً برمجياً.",
  },
  starts: {
    eyebrow: "كيف نبدأ",
    title: "هذه الصفحة تبدأ من فكرة.",
    items: [
      { title: "من فكرة", body: "نطوّر الفكرة والمواد والتفاصيل، ثم نبنيها." },
      {
        title: "من مخططات لديكم",
        body: "إذا كان التصميم معتمداً، فذلك عمل مختلف. نطوّره للموقع وننفّذه، دون أن نحل محل المصمم.",
        href: "/fit-out",
        cta: "التنفيذ والتجهيز",
      },
    ],
  },
  includes: {
    eyebrow: "المسار",
    title: "ماذا يغطي العمل",
    intro: "هذه مراحل عمل واحد، لا ستة منتجات.",
    items: [
      { title: "فهم المشروع", body: "الاستخدام، والمساحات، والمستوى المطلوب، والميزانية التي تعملون ضمنها." },
      { title: "التصميم", body: "الفكرة والتصميم الداخلي والمواد والأثاث والإضاءة والتفاصيل التي تعرّف الغرفة." },
      { title: "التطوير الفني", body: "مخططات تنفيذ وكميات ومواصفات وتنسيق، قبل أن يبدأ التصنيع." },
      { title: "التوريد والتصنيع", body: "نجارة ومواد وإضاءة وأثاث، تُشترى وتُصنع وفق المخططات المعتمدة." },
      { title: "التنفيذ", body: "تشطيب وتركيب وتنسيق في الموقع ومراجعة للجودة. التخصصات الأخرى تُنسَّق، ولا ندّعي أننا ننفذ كل مهنة بأنفسنا." },
      { title: "التسليم", body: "إغلاق الملاحظات، وتنسيق نهائي عندما تحتاجه المساحة، ثم مساحة جاهزة للاستخدام." },
    ],
  },
  sizes: {
    eyebrow: "حجم العمل",
    title: "النطاق يتبع المشروع. ليست قائمة أسعار.",
    note: "هذه الأحجام توضّح كم من المسار داخل النطاق. لكل مشروع كميات ومواصفات. السعر يُحدد بعد فهم العمل.",
    items: [
      { title: "تنفيذ واضح", body: "تصميم وتنفيذ لنطاق متفق عليه، دون طبقات لا تحتاجها المساحة." },
      { title: "حتى الغرفة المؤثثة", body: "تصميم وتوريد وتركيب وأثاث، حتى يمكن استخدام المساحة." },
      { title: "موجز أكثر خصوصية", body: "المسار نفسه، بتفاصيل أكثر، وجزء أكبر من الغرفة يُصنع لهذا المشروع لا يُختار من مجموعة جاهزة." },
    ],
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "خمسة قرارات. ثم المساحة.",
    steps: [
      { title: "الفهم", body: "المشروع والاستخدام والمساحة والميزانية التي تتجهون إليها." },
      { title: "التصميم", body: "الفكرة والمواد والتفاصيل، لاعتمادكم." },
      { title: "التطوير", body: "مخططات وكميات ومواصفات يمكن بناؤها." },
      { title: "التنفيذ", body: "توريد وتصنيع وتركيب وتنسيق في الموقع." },
      { title: "التسليم", body: "مراجعة للجودة، ثم مساحة جاهزة للاستخدام." },
    ],
  },
  related: {
    title: "ليست هذه الصفحة كل عمل.",
    body: "مركز البيع هو تجربة المشروع العقاري. الوحدة التي يمشي فيها المشتري هي وحدة العرض. المتجر أو المطعم الجديد هو المساحات التجارية. الغرفة القائمة التي تحتاج إلى تغيير هي التجديد والتطوير. هذه الصفحة فريق واحد من فكرة إلى مساحة ستشغلونها.",
    links: [
      { href: "/fit-out", label: "التنفيذ والتجهيز" },
      { href: "/renovation", label: "التجديد والتطوير" },
      { href: "/commercial-spaces", label: "المساحات التجارية" },
    ],
  },
  audience: {
    eyebrow: "لمن",
    title: "لعميل يريد فريقاً واحداً من البداية.",
    body: "فيلا أو مسكن خاص لم يصبح بعد الغرفة التي سيُشغل. المتجر والفندق والغرفة القائمة التي تحتاج إلى تغيير لكل منها صفحته.",
    trust: "توريفا علامة متخصصة حديثة، مدعومة بفريق ذي خبرة في التصميم والتنفيذ والعمل البصري.",
  },
  close: {
    title: "لديك مساحة جديدة تُبنى؟",
    body: "شاركنا الفكرة. إذا كان التصميم معتمداً، أو كانت الغرفة قائمة، نوجهكم إلى المسار المناسب. الخطوة الأولى محادثة، لا سعر يُرسل في الظلام.",
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
