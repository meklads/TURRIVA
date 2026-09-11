import type { Locale } from "@/shared/i18n/locale";

export const RENOVATION_PATH = "/renovation";

export type RenovationCopy = {
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
  keep: {
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

const en: RenovationCopy = {
  nav: "Renovation and upgrade",
  metaTitle: "Renovation and upgrade",
  metaDescription:
    "The space already exists. Turriva assesses what to keep, what to change, and what to rebuild, then designs and builds a clearer use. The first step is a conversation.",
  hero: {
    eyebrow: "Renovation and upgrade",
    title: "An existing space. New potential.",
    body: "Not every space needs demolition and a rebuild. We start by assessing what can be kept and upgraded, and what needs redesign or execution.",
    cta: "Discuss your project",
    secondary: "Send drawings",
  },
  problem: {
    eyebrow: "The problem",
    title: "An existing room is a different job from a new one.",
    body: "The walls, the services, and the parts worth keeping are already there. A new design imposed on them wastes money, or it ignores the condition and fails on site.",
    points: ["What to keep is decided first", "The new use is clearer than the old finish", "A defined scope, not a full demolition by default"],
  },
  definition: {
    eyebrow: "The product",
    title: "Renovation and upgrade",
    body: "A defined path for a villa, office, restaurant, hotel, or showroom that already stands. Turriva assesses the condition, redesigns what the new use needs, then builds only that scope.",
    result: "A new space still starts on design and build, commercial spaces, or hospitality. If the renovation design is already approved, that is fit-out. This page starts when the room exists and still needs to be understood.",
  },
  starts: {
    eyebrow: "How you can start",
    title: "From the room as it is. Or from drawings of the change.",
    items: [
      { title: "From the existing condition", body: "We look at the space, name what is worth keeping, and design the change before anyone strips the room." },
      {
        title: "From drawings of the change",
        body: "If the redesign is already approved, we execute it. We do not replace the designer.",
        href: "/fit-out",
        cta: "Fit-out and execution",
      },
    ],
  },
  keep: {
    eyebrow: "The first decision",
    title: "Do not start by taking everything out.",
    body: "Some projects need a new floor and a new light. Others need a new plan. The useful work is to separate what still performs, what should be upgraded, and what has to be rebuilt.",
    line: "The best result is often the smaller scope, not the larger one.",
  },
  includes: {
    eyebrow: "Scope",
    title: "What the work covers",
    intro: "Removal happens only where the assessment says it should. Kitchens and bathrooms are in scope when the existing room needs them, not as a catalogue. Structure and services are coordinated.",
    items: [
      { title: "Assessment", body: "A site visit, measurements, and a reading of the current condition and what the new use needs." },
      { title: "Redesign", body: "A new plan, materials, lighting, and furniture for the use the room has now, or the use it is changing to." },
      { title: "Technical development", body: "Drawings, quantities, and a specification that can be built inside an existing room." },
      { title: "The change itself", body: "Floors, ceilings, walls, joinery, lighting, and furniture, plus kitchens or bathrooms when they are part of the scope." },
      { title: "Build", body: "Removal where required, then the new work, installation, and coordination. Not a claim that we demolish structure." },
      { title: "Hand over", body: "Final details, quality review, and a space ready for the new use. Branding is coordinated only when the room needs it. We are not a branding studio." },
    ],
  },
  sizes: {
    eyebrow: "Size of the work",
    title: "How much of the existing room changes. Not a price list.",
    note: "The cost follows the condition and the quantities. It is set after the assessment, not from a package name.",
    items: [
      { title: "Refresh", body: "A limited update — finishes, lighting, or furniture — without changing the plan of the room." },
      { title: "Renew", body: "A wider redevelopment of rooms, finishes, and joinery for the current use." },
      { title: "Transform", body: "A fuller change when the space must do a different job. Still only the scope the assessment supports." },
    ],
  },
  method: {
    eyebrow: "How we work",
    title: "See the room. Then decide the scope. Then build it.",
    steps: [
      { title: "Assess", body: "The space, its condition, and what has to improve." },
      { title: "Define", body: "What stays, what changes, and what the result has to be." },
      { title: "Design", body: "The plan, the materials, and the details, for approval." },
      { title: "Build", body: "Removal where required, then supply, fabrication, and installation." },
      { title: "Deliver", body: "Quality review, then a space ready for the new use." },
    ],
  },
  related: {
    title: "If the room does not exist yet, this is the wrong door.",
    body: "A new interior from an idea is design and build. A new shop or restaurant is commercial spaces. A new hotel is hospitality. An approved design, including a renovation design, is fit-out.",
    links: [
      { href: "/design-build", label: "Design and build" },
      { href: "/commercial-spaces", label: "Commercial spaces" },
      { href: "/hospitality-spaces", label: "Hospitality spaces" },
      { href: "/fit-out", label: "Fit-out and execution" },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "An owner of a space that already stands.",
    items: [
      "Villas and large private homes",
      "Existing offices",
      "Restaurants and cafés already operating",
      "Hotels and serviced apartments already built",
      "Showrooms and retail that need a new level",
      "Developers reworking an existing asset",
      "Companies updating a headquarters",
    ],
    trust: "Turriva is a new specialized brand, backed by a team with experience in design, execution, and visual work.",
  },
  close: {
    title: "An existing space to change?",
    body: "Share photographs, and the drawings if you have them. We will review the condition and propose a scope. The first step is a conversation, not a price sent before we have seen the room.",
  },
  form: {
    productLabel: "Renovation and upgrade",
    choiceLegend: "Type of space",
    spaces: [
      { id: "villa", label: "Villa or private home" },
      { id: "office", label: "Office" },
      { id: "restaurant", label: "Restaurant or café" },
      { id: "hotel", label: "Hotel" },
      { id: "showroom", label: "Showroom or retail" },
      { id: "other", label: "Another existing space" },
    ],
    drawings: { label: "Do you have drawings?", yes: "Yes", no: "Not yet" },
  },
};

const ar: RenovationCopy = {
  nav: "التجديد والتطوير",
  metaTitle: "التجديد والتطوير",
  metaDescription:
    "المساحة قائمة. توريفا تقيّم ما يُبقى وما يُطوَّر وما يُعاد بناؤه، ثم تصمم وتبني استخداماً أوضح. الخطوة الأولى محادثة.",
  hero: {
    eyebrow: "التجديد والتطوير",
    title: "مساحة قائمة. إمكانات جديدة.",
    body: "لا تحتاج كل مساحة إلى الهدم وإعادة البناء. نبدأ بتقييم ما يمكن الحفاظ عليه وتطويره، وما يحتاج إلى إعادة تصميم أو تنفيذ.",
    cta: "ناقش مشروعك",
    secondary: "أرسل المخططات",
  },
  problem: {
    eyebrow: "المشكلة",
    title: "الغرفة القائمة عمل مختلف عن الغرفة الجديدة.",
    body: "الجدران والخدمات والأجزاء التي تستحق البقاء موجودة. تصميم جديد يُفرض عليها يهدر المال، أو يتجاهل الحالة ثم يفشل في الموقع.",
    points: ["ما يُبقى يُحسم أولاً", "الاستخدام الجديد أوضح من التشطيب القديم", "نطاق محدد، لا هدم كامل افتراضيًا"],
  },
  definition: {
    eyebrow: "المنتج",
    title: "التجديد والتطوير",
    body: "مسار محدد لفيلا أو مكتب أو مطعم أو فندق أو صالة عرض قائمة. توريفا تقيّم الحالة، وتعيد تصميم ما يحتاجه الاستخدام الجديد، ثم تبني ذلك النطاق فقط.",
    result: "المساحة الجديدة تبدأ من التصميم والتنفيذ أو المساحات التجارية أو الضيافة. إذا كان تصميم التجديد معتمداً، فذلك تنفيذ وتجهيز. هذه الصفحة تبدأ عندما تكون الغرفة موجودة وما زالت تحتاج إلى فهم.",
  },
  starts: {
    eyebrow: "كيف نبدأ",
    title: "من الغرفة كما هي. أو من مخططات التغيير.",
    items: [
      { title: "من الحالة القائمة", body: "نعاين المساحة، ونسمّي ما يستحق البقاء، ونصمم التغيير قبل أن تُفرَّغ الغرفة." },
      {
        title: "من مخططات التغيير",
        body: "إذا كان إعادة التصميم معتمداً، ننفّذه. لا نحل محل المصمم.",
        href: "/fit-out",
        cta: "التنفيذ والتجهيز",
      },
    ],
  },
  keep: {
    eyebrow: "القرار الأول",
    title: "لا تبدأ بإخراج كل شيء.",
    body: "بعض المشاريع تحتاج أرضية جديدة وضوءاً جديداً. وأخرى تحتاج تخطيطاً جديداً. العمل المفيد أن نفصل ما زال يؤدي، وما يحتاج تطويراً، وما يجب إعادة بنائه.",
    line: "أفضل نتيجة غالباً هي النطاق الأصغر، لا الأكبر.",
  },
  includes: {
    eyebrow: "النطاق",
    title: "ماذا يغطي العمل",
    intro: "الإزالة تكون فقط حيث تقول المعاينة ذلك. المطابخ والحمامات تدخل عندما تحتاجها الغرفة القائمة، لا ككتالوج. الهيكل والخدمات تُنسَّق.",
    items: [
      { title: "المعاينة", body: "زيارة وقياس وقراءة للحالة الحالية وما يحتاجه الاستخدام الجديد." },
      { title: "إعادة التصميم", body: "تخطيط ومواد وإضاءة وأثاث للاستخدام الحالي، أو للاستخدام الذي تتجه إليه المساحة." },
      { title: "التطوير الفني", body: "مخططات وكميات ومواصفات يمكن بناؤها داخل غرفة قائمة." },
      { title: "التغيير نفسه", body: "أرضيات وأسقف وجدران ونجارة وإضاءة وأثاث، ومطابخ أو حمامات عندما تكون داخل النطاق." },
      { title: "التنفيذ", body: "إزالة حيث يلزم، ثم الأعمال الجديدة والتركيب والتنسيق. لا ندّعي أننا نهدم الهيكل." },
      { title: "التسليم", body: "تفاصيل نهائية ومراجعة للجودة، ثم مساحة جاهزة للاستخدام الجديد. الهوية تُنسَّق فقط عندما تحتاجها الغرفة. لسنا استوديو هوية." },
    ],
  },
  sizes: {
    eyebrow: "حجم العمل",
    title: "كم من الغرفة القائمة يتغير. ليست قائمة أسعار.",
    note: "التكلفة تتبع الحالة والكميات. تُحدد بعد المعاينة، لا من اسم باقة.",
    items: [
      { title: "تحديث", body: "تحديث محدود — تشطيبات أو إضاءة أو أثاث — من غير تغيير تخطيط الغرفة." },
      { title: "إعادة تطوير", body: "إعادة تطوير أوسع للغرف والتشطيبات والنجارة لطريقة الاستخدام الحالية." },
      { title: "تحول شامل", body: "تحول أشمل عندما يجب أن تؤدي المساحة عملاً مختلفاً. ويبقى النطاق ما تدعمه المعاينة فقط." },
    ],
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "نرى الغرفة. ثم نحدد النطاق. ثم نبنيه.",
    steps: [
      { title: "المعاينة", body: "المساحة وحالتها وما يجب أن يتحسن." },
      { title: "التحديد", body: "ما يبقى، وما يتغير، وما يجب أن تكون النتيجة." },
      { title: "التصميم", body: "التخطيط والمواد والتفاصيل، للاعتماد." },
      { title: "التنفيذ", body: "إزالة حيث يلزم، ثم توريد وتصنيع وتركيب." },
      { title: "التسليم", body: "مراجعة للجودة، ثم مساحة جاهزة للاستخدام الجديد." },
    ],
  },
  related: {
    title: "إن لم تكن الغرفة موجودة بعد، فهذا ليس الباب.",
    body: "فراغ جديد من فكرة هو التصميم والتنفيذ. متجر أو مطعم جديد هو المساحات التجارية. فندق جديد هو الضيافة. التصميم المعتمد، بما فيه تصميم التجديد، هو التنفيذ والتجهيز.",
    links: [
      { href: "/design-build", label: "التصميم والتنفيذ" },
      { href: "/commercial-spaces", label: "المساحات التجارية" },
      { href: "/hospitality-spaces", label: "مساحات الضيافة" },
      { href: "/fit-out", label: "التنفيذ والتجهيز" },
    ],
  },
  audience: {
    eyebrow: "لمن",
    title: "مالك مساحة قائمة بالفعل.",
    items: [
      "فلل ومساكن خاصة كبيرة",
      "مكاتب قائمة",
      "مطاعم ومقاهٍ تعمل الآن",
      "فنادق وشقق فندقية مبنية",
      "صالات عرض وتجزئة تحتاج مستوى جديداً",
      "مطورون يعيدون تطوير أصل قائم",
      "شركات تحدّث مقرها",
    ],
    trust: "توريفا علامة متخصصة حديثة، مدعومة بفريق ذي خبرة في التصميم والتنفيذ والعمل البصري.",
  },
  close: {
    title: "لديك مساحة قائمة تحتاج إلى تغيير؟",
    body: "شاركنا الصور، والمخططات إن وُجدت. نراجع الحالة ونقترح نطاقاً. الخطوة الأولى محادثة، لا سعر يُرسل قبل رؤية الغرفة.",
  },
  form: {
    productLabel: "التجديد والتطوير",
    choiceLegend: "نوع المساحة",
    spaces: [
      { id: "villa", label: "فيلا أو مسكن خاص" },
      { id: "office", label: "مكتب" },
      { id: "restaurant", label: "مطعم أو مقهى" },
      { id: "hotel", label: "فندق" },
      { id: "showroom", label: "صالة عرض أو تجزئة" },
      { id: "other", label: "مساحة قائمة أخرى" },
    ],
    drawings: { label: "هل لديكم مخططات؟", yes: "نعم", no: "ليس بعد" },
  },
};

export function getRenovationCopy(locale: Locale): RenovationCopy {
  return locale === "ar" ? ar : en;
}
