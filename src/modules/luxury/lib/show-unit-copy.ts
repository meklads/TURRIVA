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
  metaTitle: "Show unit",
  metaDescription:
    "We design and deliver show villas, apartments, and suites for real-estate projects. You can commission the unit on its own. The first step is a conversation.",
  hero: {
    eyebrow: "Show unit",
    title: "The unit exists.",
    question: "Is it ready to receive a client?",
    body: "We design and deliver show villas, apartments, and suites, from the interior and the technical details to furniture, lighting, and handover. The unit should show how the project is meant to be lived in.",
    cta: "Discuss your project",
    secondary: "What the work includes",
  },
  problem: {
    eyebrow: "The problem",
    title: "An unfinished unit does not explain the project.",
    body: "A buyer can stand in a shell, look at a render, or listen to a description, and still not understand the standard of living the project is selling.",
    points: ["See the finishes, not a sample board alone", "Read the layout as a home, not a plan", "Leave with a clear picture of the unit"],
  },
  definition: {
    eyebrow: "The product",
    title: "Show unit",
    body: "A defined scope to prepare one unit so a client can walk through it. It starts from the project, the unit, and who it is meant for, then designs that unit, details it, and delivers it.",
    result: "The aim is a clear model of the living standard the project offers. We do not claim a sales result we cannot measure.",
  },
  types: {
    eyebrow: "Which unit",
    title: "One product. Three kinds of unit.",
    intro: "A show villa, a show apartment, and a show suite are not three products. They are three ways the same work starts.",
    items: [
      { title: "Show villa", body: "A house the client can walk, including the rooms that define the project." },
      { title: "Show apartment", body: "A typical unit, finished so the plan and the standard are both visible." },
      { title: "Show suite", body: "A hospitality or branded unit, finished for viewing, not for overnight operation unless that is the brief." },
    ],
  },
  includes: {
    eyebrow: "Scope",
    title: "What the work can include",
    intro: "The first four are the work. The last two join only when the unit needs them.",
    core: [
      { title: "Design of the unit", body: "An interior that matches the project and the buyer it is meant for. Not a room from a catalogue." },
      { title: "Technical development", body: "Drawings, details, quantities, and the specification needed to build." },
      { title: "Fit-out and joinery", body: "Interiors, joinery, kitchens, wardrobes, ceilings, floors, and the architectural details." },
      { title: "Furniture and lighting", body: "Specified so the unit reads as the project's standard, then styled for viewing." },
    ],
    optionalTitle: "Only if they help",
    optional: [
      { title: "Technology", body: "Screens and smart systems only when they explain the unit. We do not sell a software platform." },
      { title: "Identity and visual work", body: "Graphics House can add identity, imagery, or film when the unit needs to carry the project's look." },
    ],
  },
  flexible: {
    eyebrow: "How we start",
    title: "You can commission the unit alone.",
    intro: "These are sizes of scope, not a price list. The fee is set after we understand the unit.",
    options: [
      { title: "The unit, ready to show", body: "Design, finishes, joinery, furniture, lighting, and handover." },
      { title: "The unit, with its identity", body: "The same work, plus the visual elements that tie the unit to the project." },
      { title: "The unit, inside the sales environment", body: "When the gallery, the model, or the launch content are also in scope." },
    ],
    parent: "If the project also needs a sales gallery, a model, or launch content, that sits in the real-estate project experience. Same team.",
    parentHref: "/real-estate-experience",
    parentCta: "Real estate project experience",
  },
  method: {
    eyebrow: "How we work",
    title: "From the unit to a place a client can walk",
    steps: [
      { title: "Understand", body: "The project, the unit, the buyer, and what the viewing has to show." },
      { title: "Design", body: "The layout, materials, furniture, and what the client should notice." },
      { title: "Develop", body: "Drawings, specification, quantities, and a build plan." },
      { title: "Build", body: "Supply, fabrication, installation, and coordination on site." },
      { title: "Deliver", body: "A quality review, then a unit ready to show and hand over." },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "A developer with a unit that has to receive clients.",
    body: "Residential projects that need a show villa, apartment, or suite. The drawings may already exist, or we can start from the brief.",
    trust: "Turriva is a new specialized brand, backed by a team with experience in design, execution, and visual work.",
  },
  close: {
    title: "A show unit coming up?",
    body: "Share the project and the unit. We will review what it needs and propose a scope. The first step is a conversation, not a price sent in the dark.",
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
  metaTitle: "وحدة العرض",
  metaDescription:
    "نصمّم وننفّذ فلل وشقق وأجنحة العرض للمشاريع العقارية. يمكن التعاقد على الوحدة وحدها. الخطوة الأولى محادثة.",
  hero: {
    eyebrow: "وحدة العرض",
    title: "الوحدة موجودة.",
    question: "هل هي جاهزة لاستقبال العميل؟",
    body: "نصمّم وننفّذ فلل العرض وشقق العرض وأجنحة العرض، من التصميم والتفاصيل الفنية إلى الأثاث والإضاءة والتسليم. الوحدة يجب أن تُظهر طريقة الحياة التي يقدّمها المشروع.",
    cta: "ناقش مشروعك معنا",
    secondary: "ماذا يشمل العمل",
  },
  problem: {
    eyebrow: "المشكلة",
    title: "الوحدة غير المكتملة لا تشرح المشروع.",
    body: "قد يقف المشتري في هيكل، أو ينظر إلى رندر، أو يسمع وصفاً، ولا يفهم بعد معيار المعيشة الذي يبيعه المشروع.",
    points: ["يرى التشطيب، لا لوحة عينات فقط", "يقرأ المخطط كبيت، لا كرسم", "يخرج بصورة واضحة عن الوحدة"],
  },
  definition: {
    eyebrow: "المنتج",
    title: "وحدة العرض",
    body: "نطاق محدد لتجهيز وحدة واحدة يستطيع العميل المشي فيها. يبدأ من المشروع والوحدة والمشتري المقصود، ثم تصميم الوحدة وتطويرها وتسليمها.",
    result: "الهدف نموذج واضح لمعيار المعيشة الذي يقدّمه المشروع. لا ندّعي نتيجة بيع لا يمكن قياسها.",
  },
  types: {
    eyebrow: "أي وحدة",
    title: "منتج واحد. ثلاثة أنواع من الوحدات.",
    intro: "فيلا العرض وشقة العرض وجناح العرض ليست ثلاثة منتجات. هي ثلاث بدايات للعمل نفسه.",
    items: [
      { title: "فيلا عرض", body: "بيت يمشي فيه العميل، بما في ذلك الغرف التي تعرّف المشروع." },
      { title: "شقة عرض", body: "وحدة نموذجية مكتملة، بحيث يظهر المخطط والمعيار معاً." },
      { title: "جناح عرض", body: "وحدة ضيافة أو وحدة لعلامة، مجهزة للمشاهدة، لا للتشغيل الليلي إلا إذا كان ذلك هو الموجز." },
    ],
  },
  includes: {
    eyebrow: "النطاق",
    title: "ماذا يمكن أن يشمل العمل",
    intro: "الأربعة الأولى هي العمل. الأخيران يدخلان فقط عندما تحتاجهما الوحدة.",
    core: [
      { title: "تصميم الوحدة", body: "تصميم يطابق المشروع والمشتري المقصود. ليست غرفة من كتالوج." },
      { title: "التطوير الفني", body: "مخططات وتفاصيل وكميات ومواصفات لازمة للتنفيذ." },
      { title: "التشطيب والنجارة", body: "أعمال داخلية ونجارة ومطابخ وخزائن وأسقف وأرضيات والتفاصيل المعمارية." },
      { title: "الأثاث والإضاءة", body: "تُحدد حتى تُقرأ الوحدة كمعيار المشروع، ثم تُنسّق للمشاهدة." },
    ],
    optionalTitle: "فقط إذا أضافا شيئاً",
    optional: [
      { title: "التقنية", body: "شاشات وأنظمة ذكية فقط عندما تشرح الوحدة. لا نبيع منصة برمجية." },
      { title: "الهوية والعمل البصري", body: "يمكن لجرافيكس هاوس أن تضيف الهوية أو التصوير أو الفيلم عندما تحتاج الوحدة إلى مظهر المشروع." },
    ],
  },
  flexible: {
    eyebrow: "كيف نبدأ",
    title: "يمكن التعاقد على الوحدة وحدها.",
    intro: "هذه أحجام للنطاق، ليست قائمة أسعار. السعر يُحدد بعد فهم الوحدة.",
    options: [
      { title: "الوحدة جاهزة للعرض", body: "تصميم وتشطيب ونجارة وأثاث وإضاءة وتسليم." },
      { title: "الوحدة مع هويتها", body: "العمل نفسه، مع العناصر البصرية التي تربط الوحدة بالمشروع." },
      { title: "الوحدة داخل بيئة البيع", body: "عندما يكون مركز البيع أو المجسم أو محتوى الإطلاق ضمن النطاق أيضاً." },
    ],
    parent: "إذا احتاج المشروع أيضاً إلى مركز بيع أو مجسم أو محتوى إطلاق، فذلك داخل تجربة المشروع العقاري. الفريق نفسه.",
    parentHref: "/real-estate-experience",
    parentCta: "تجربة المشروع العقاري",
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "من الوحدة إلى مكان يمشي فيه العميل",
    steps: [
      { title: "الفهم", body: "المشروع، والوحدة، والمشتري، وما يجب أن تُظهره الزيارة." },
      { title: "التصميم", body: "التخطيط والمواد والأثاث وما ينبغي أن يلاحظه العميل." },
      { title: "التطوير", body: "مخططات ومواصفات وكميات وخطة تنفيذ." },
      { title: "التنفيذ", body: "توريد وتصنيع وتركيب وتنسيق في الموقع." },
      { title: "التسليم", body: "مراجعة للجودة، ثم وحدة جاهزة للعرض والتسليم." },
    ],
  },
  audience: {
    eyebrow: "لمن",
    title: "لمطور لديه وحدة يجب أن تستقبل العملاء.",
    body: "للمشاريع السكنية التي تحتاج فيلا عرض أو شقة عرض أو جناح عرض. قد تكون المخططات موجودة، أو نبدأ من الموجز.",
    trust: "توريفا علامة متخصصة حديثة، مدعومة بفريق ذي خبرة في التصميم والتنفيذ والعمل البصري.",
  },
  close: {
    title: "لديك وحدة عرض قادمة؟",
    body: "شاركنا المشروع والوحدة. نراجع الاحتياج ونقترح نطاق التنفيذ. الخطوة الأولى محادثة، لا سعر يُرسل في الظلام.",
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
