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
  metaTitle: "Hospitality spaces",
  metaDescription:
    "The guest experience starts in the room. Turriva designs and builds hotels, serviced apartments, and guest areas for the stay and for the team that runs them. The first step is a conversation.",
  hero: {
    eyebrow: "Hospitality spaces",
    title: "The guest experience starts in the room.",
    body: "We design and build hotels, serviced apartments, and guest areas for how a guest arrives and stays, and for how the team has to run the place. This is not a commercial interior with softer lighting.",
    cta: "Discuss your project",
    secondary: "What the work includes",
  },
  problem: {
    eyebrow: "The problem",
    title: "A beautiful lobby can still fail as a place to stay.",
    body: "In hospitality, design alone is not enough. Arrival can be confused, the desk can block the team, and a finish can look right and still fail under daily use. The room has to work for the guest, the team, and the operator at the same time.",
    points: ["Arrival and circulation, not only a photograph", "Materials chosen for wear, cleaning, and light", "A space the team can actually run"],
  },
  definition: {
    eyebrow: "The product",
    title: "Hospitality spaces",
    body: "A defined path for a hotel, a boutique hotel, a serviced apartment, a lobby, or a guest area. Turriva designs the interior around the stay and the operation, then develops, supplies, and builds it. We do not operate the property, and we do not replace the designer if the design is already approved.",
    result: "A destination restaurant, where the room is the reason to come, sits here. An ordinary restaurant or café stays on commercial spaces. If the hotel already stands and the job is to change it, that is renovation.",
  },
  starts: {
    eyebrow: "How you can start",
    title: "From the stay, or from a design you already have.",
    items: [
      { title: "From how guests are received", body: "We start with the property, the operator, and the guest, then design and build the rooms that carry the stay." },
      {
        title: "From drawings you have",
        body: "If the design is already approved, we develop it for site and build it. We do not redraw it to suit the workshop.",
        href: "/fit-out",
        cta: "Fit-out and execution",
      },
    ],
  },
  partner: {
    eyebrow: "For operators and designers",
    title: "The room has to serve the stay and the shift.",
    body: "We read service paths, storage, and back-of-house needs into the drawings so the space can be run. We do not write the operator's procedures, and we do not compete for a design appointment that is already held.",
    line: "Execution can start from an approved hospitality design. The designer stays the designer.",
  },
  includes: {
    eyebrow: "Scope",
    title: "What the work covers",
    intro: "These are stages of one job. Joinery is made to the drawings. Other trades are coordinated. We do not claim a furniture warehouse or a hotel operations team.",
    items: [
      { title: "Hospitality concept", body: "Concept, interior, plan, materials, and lighting for this type of stay, not a generic room." },
      { title: "The guest path", body: "Arrival, reception, lobby, seating, and the points where the brand is actually met. Not a campaign." },
      { title: "Technical development", body: "Shop drawings, quantities, specification, and the operational needs that change the room: service paths, storage, and coordination with other trades." },
      { title: "Fit-out and fabrication", body: "Joinery, floors, ceilings, wall finishes, and the custom elements the drawings call for." },
      { title: "Furniture and FF&E", body: "Specified and supplied against the approved list. Not a catalogue we ask the project to accept." },
      { title: "Install and hand over", body: "Installation, quality review, snagging, and final styling where the room needs it. Opening and licences stay with the operator." },
    ],
  },
  sizes: {
    eyebrow: "Size of the work",
    title: "How much of the stay is in scope. Not a price list.",
    note: "The cost follows the drawings, the quantities, and how the property operates. It is set after we understand the work, not from a package name.",
    items: [
      { title: "A defined scope, built", body: "One part of the hospitality brief, executed to the approved specification. If that is the whole job, fit-out is the path." },
      { title: "From concept to handover", body: "Design, technical development, supply, and build, through to a space ready for guests." },
      { title: "The stay has to work", body: "The same path, with more attention to arrival, circulation, materials, and how the team operates. Not a named package." },
    ],
  },
  method: {
    eyebrow: "How we work",
    title: "Understand the stay. Then design it. Then build it.",
    steps: [
      { title: "Understand", body: "The property, the operator, the guest, and how the place is used." },
      { title: "Design", body: "The plan, the materials, the light, and the guest path, for approval." },
      { title: "Develop", body: "Drawings, quantities, and a specification that can be built and run." },
      { title: "Build", body: "Supply, fabrication, installation, and coordination on site." },
      { title: "Deliver", body: "Quality review, snagging, and a space ready to receive guests." },
    ],
  },
  related: {
    title: "A hotel is not a shop, and not a sales gallery.",
    body: "An ordinary restaurant or café is commercial spaces. A private home is design and build. An approved design that only needs execution is fit-out. An existing hotel that needs to change is renovation.",
    links: [
      { href: "/commercial-spaces", label: "Commercial spaces" },
      { href: "/fit-out", label: "Fit-out and execution" },
      { href: "/renovation", label: "Renovation and upgrade" },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "A property that receives guests, not shoppers.",
    items: [
      "Hotels and boutique hotels",
      "Serviced apartments",
      "Lobbies and reception",
      "Guest areas",
      "Hotel lounges",
      "Destination restaurants",
      "Hospitality developers",
    ],
    trust: "Turriva is a new specialized brand, backed by a team with experience in design, execution, and visual work.",
  },
  close: {
    title: "A hospitality project to build?",
    body: "Share the property, the drawings if you have them, and how guests will be received. We will review the scope and propose a path. The first step is a conversation, not a price sent before we understand the stay.",
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
  metaTitle: "مساحات الضيافة",
  metaDescription:
    "تجربة الضيف تبدأ من المكان. توريفا تصمم وتبني الفنادق والشقق الفندقية ومناطق الضيوف للإقامة وللفريق الذي يديرها. الخطوة الأولى محادثة.",
  hero: {
    eyebrow: "مساحات الضيافة",
    title: "تجربة الضيف تبدأ من المكان.",
    body: "نصمم وننفذ الفنادق والشقق الفندقية ومناطق الضيوف لطريقة الوصول والإقامة، ولطريقة عمل الفريق. ليست مساحة تجارية بإضاءة أنعم.",
    cta: "ناقش مشروعك معنا",
    secondary: "ماذا يشمل العمل",
  },
  problem: {
    eyebrow: "المشكلة",
    title: "ردهة جميلة قد تفشل كمكان للإقامة.",
    body: "في الضيافة لا يكفي التصميم وحده. قد يضطرب الوصول، وقد يعطل المكتب عمل الفريق، وقد يبدو التشطيب صحيحاً ثم يفشل تحت الاستخدام اليومي. المكان يجب أن يعمل للضيف والفريق والمشغّل في الوقت نفسه.",
    points: ["الوصول والحركة، لا الصورة فقط", "مواد تُختار للتحمل والتنظيف والضوء", "مساحة يستطيع الفريق تشغيلها"],
  },
  definition: {
    eyebrow: "المنتج",
    title: "مساحات الضيافة",
    body: "مسار محدد لفندق أو فندق صغير أو شقق فندقية أو ردهة أو منطقة ضيوف. توريفا تصمم الداخل حول الإقامة والتشغيل، ثم تطوّره وتورّده وتبنيه. لا ندير المنشأة، ولا نحل محل المصمم إذا كان التصميم معتمداً.",
    result: "مطعم الوجهة، حيث يكون المكان سبب الزيارة، يبقى هنا. المطعم أو المقهى التجاري العادي يبقى في المساحات التجارية. إذا كان الفندق قائماً والعمل تغييره، فذلك التجديد والتطوير.",
  },
  starts: {
    eyebrow: "كيف نبدأ",
    title: "من الإقامة، أو من تصميم لديكم.",
    items: [
      { title: "من طريقة استقبال الضيف", body: "نبدأ بالمنشأة والمشغّل والضيف، ثم نصمم ونبني المساحات التي تحمل الإقامة." },
      {
        title: "من مخططات لديكم",
        body: "إذا كان التصميم معتمداً، نطوّره للموقع ونبنيه. لا نعيد رسمه ليناسب الورشة.",
        href: "/fit-out",
        cta: "التنفيذ والتجهيز",
      },
    ],
  },
  partner: {
    eyebrow: "للمشغّلين ولمكاتب التصميم",
    title: "المكان يخدم الإقامة والوردية.",
    body: "نقرأ مسارات الخدمة والتخزين واحتياج ما خلف الكواليس داخل المخططات حتى يمكن تشغيل المساحة. لا نكتب إجراءات المشغّل، ولا ننافس على تعيين تصميم قائم.",
    line: "التنفيذ يمكن أن يبدأ من تصميم ضيافة معتمد. المصمم يبقى المصمم.",
  },
  includes: {
    eyebrow: "النطاق",
    title: "ماذا يغطي العمل",
    intro: "هذه مراحل عمل واحد. النجارة تُصنع وفق المخططات. التخصصات الأخرى تُنسَّق. لا ندّعي مستودع أثاث ولا فريق تشغيل فنادق.",
    items: [
      { title: "فكرة الضيافة", body: "الفكرة والتصميم الداخلي والتخطيط والمواد والإضاءة لنوع الإقامة هذا، لا لغرفة عامة." },
      { title: "مسار الضيف", body: "الوصول والاستقبال والردهة والجلوس والنقاط التي تُقابَل فيها العلامة فعلاً. ليست حملة." },
      { title: "التطوير الفني", body: "مخططات تنفيذ وكميات ومواصفات، والاحتياج التشغيلي الذي يغيّر الغرفة: مسارات الخدمة والتخزين والتنسيق مع التخصصات الأخرى." },
      { title: "التجهيز والتصنيع", body: "نجارة وأرضيات وأسقف وتشطيبات جدران والعناصر المخصصة التي تطلبها المخططات." },
      { title: "الأثاث والتجهيزات", body: "تُحدد وتُورَّد وفق القائمة المعتمدة. ليست كتالوجاً نطلب من المشروع أن يقبله." },
      { title: "التركيب والتسليم", body: "تركيب ومراجعة للجودة وإغلاق الملاحظات وتنسيق نهائي عندما تحتاجه الغرفة. الافتتاح والتراخيص تبقى لدى المشغّل." },
    ],
  },
  sizes: {
    eyebrow: "حجم العمل",
    title: "كم من الإقامة داخل النطاق. ليست قائمة أسعار.",
    note: "التكلفة تتبع المخططات والكميات وطريقة تشغيل المنشأة. تُحدد بعد فهم العمل، لا من اسم باقة.",
    items: [
      { title: "نطاق محدد يُبنى", body: "جزء من موجز الضيافة، يُنفَّذ وفق المواصفات المعتمدة. إن كان ذلك هو العمل كله، فالمسار هو التنفيذ والتجهيز." },
      { title: "من الفكرة إلى التسليم", body: "تصميم وتطوير فني وتوريد وتنفيذ، حتى مساحة جاهزة لاستقبال الضيف." },
      { title: "الإقامة يجب أن تعمل", body: "المسار نفسه، باهتمام أكبر بالوصول والحركة والمواد وطريقة عمل الفريق. ليست باقة باسم." },
    ],
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "نفهم الإقامة. ثم نصممها. ثم نبنيها.",
    steps: [
      { title: "الفهم", body: "المنشأة والمشغّل والضيف وطريقة استخدام المكان." },
      { title: "التصميم", body: "التخطيط والمواد والضوء ومسار الضيف، للاعتماد." },
      { title: "التطوير", body: "مخططات وكميات ومواصفات يمكن بناؤها وتشغيلها." },
      { title: "التنفيذ", body: "توريد وتصنيع وتركيب وتنسيق في الموقع." },
      { title: "التسليم", body: "مراجعة للجودة وإغلاق الملاحظات، ثم مساحة جاهزة لاستقبال الضيف." },
    ],
  },
  related: {
    title: "الفندق ليس متجراً، وليس مركز بيع.",
    body: "المطعم أو المقهى التجاري العادي هو المساحات التجارية. المسكن الخاص هو التصميم والتنفيذ. التصميم المعتمد الذي يحتاج تنفيذاً فقط هو التنفيذ والتجهيز. الفندق القائم الذي يحتاج إلى تغيير هو التجديد والتطوير.",
    links: [
      { href: "/commercial-spaces", label: "المساحات التجارية" },
      { href: "/fit-out", label: "التنفيذ والتجهيز" },
      { href: "/renovation", label: "التجديد والتطوير" },
    ],
  },
  audience: {
    eyebrow: "لمن",
    title: "منشأة تستقبل ضيوفاً، لا متسوقين.",
    items: ["فنادق وفنادق صغيرة", "شقق فندقية", "ردهات واستقبال", "مناطق الضيوف", "صالات جلوس فندقية", "مطاعم الوجهة", "مطورو ضيافة"],
    trust: "توريفا علامة متخصصة حديثة، مدعومة بفريق ذي خبرة في التصميم والتنفيذ والعمل البصري.",
  },
  close: {
    title: "لديك مشروع ضيافة يُبنى؟",
    body: "شاركنا المنشأة، والمخططات إن وُجدت، وطريقة استقبال الضيف. نراجع النطاق ونقترح المسار. الخطوة الأولى محادثة، لا سعر يُرسل قبل فهم الإقامة.",
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
