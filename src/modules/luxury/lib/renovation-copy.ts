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
  metaTitle: "Renovation and Spatial Upgrade",
  metaDescription:
    "TURRIVA assesses, redesigns, and renovates existing spaces with a clear scope shaped by their condition and future use.",
  hero: {
    eyebrow: "Renovation and upgrade",
    title: "Keep what works. Improve what matters.",
    body: "A considered renovation begins with the existing space. We assess what can stay, what should be upgraded, and what needs to be redesigned and rebuilt.",
    cta: "Discuss your project",
    secondary: "Send drawings",
  },
  problem: {
    eyebrow: "Why it matters",
    title: "Existing spaces need informed decisions.",
    body: "Walls, services, finishes, and useful elements are already in place. The design must respond to their condition and to the next use, rather than assume a blank site.",
    points: ["Retain useful elements where appropriate", "Design around the intended use", "Define the work before removal begins"],
  },
  definition: {
    eyebrow: "The service",
    title: "Renovation and upgrade",
    body: "A design-and-build service for existing villas, offices, restaurants, hotels, showrooms, and retail spaces. We assess the condition, redesign for the intended use, and deliver the agreed scope.",
    result: "New spaces begin with design and build, commercial spaces, or hospitality. If a renovation design is already approved and only needs execution, the right service is fit-out.",
  },
  starts: {
    eyebrow: "Where we begin",
    title: "Start with the existing space or approved drawings.",
    items: [
      { title: "From the current condition", body: "We inspect the space, identify what can remain, and define the redesign before removal begins." },
      {
        title: "From approved drawings",
        body: "If the redesign is complete, we deliver the agreed construction scope while respecting the designer's intent.",
        href: "/fit-out",
        cta: "Fit-out and execution",
      },
    ],
  },
  keep: {
    eyebrow: "The first decision",
    title: "Decide before you remove.",
    body: "Some spaces need new finishes and lighting. Others need a different layout. Assessment separates what still performs from what should be upgraded or rebuilt.",
    line: "The scope follows the condition and the intended result.",
  },
  includes: {
    eyebrow: "Scope",
    title: "A measured scope",
    intro: "Removal is limited to what the assessment and approved design require. Kitchens and bathrooms are included when relevant to the space. Structural and building services work is coordinated with specialists.",
    items: [
      { title: "Assessment", body: "A site visit, measurements, and a review of the current condition against the intended use." },
      { title: "Redesign", body: "A revised layout, material palette, lighting, and furniture plan suited to the next chapter of the space." },
      { title: "Technical development", body: "Coordinated drawings, quantities, and specifications developed for construction within the existing setting." },
      { title: "Interior works", body: "Floors, ceilings, walls, joinery, lighting, furniture, kitchens, or bathrooms as defined in the approved scope." },
      { title: "Build", body: "Selective removal followed by construction, installation, and site coordination. Structural demolition is not included unless separately assessed and appointed." },
      { title: "Handover", body: "Final detailing, quality review, snagging, and handover for the new use. Brand design remains a specialist service when required." },
    ],
  },
  sizes: {
    eyebrow: "Project scope",
    title: "The level of change the space needs",
    note: "Scope and cost depend on the existing condition, approved design, quantities, and specialist requirements. We define them after assessment.",
    items: [
      { title: "Refresh", body: "A focused update to finishes, lighting, or furniture without changing the layout." },
      { title: "Renew", body: "A broader redesign of rooms, finishes, and joinery for the current use." },
      { title: "Transform", body: "A more extensive change when the space needs a new function, limited to the scope supported by the assessment." },
    ],
  },
  method: {
    eyebrow: "How we work",
    title: "Assess first. Then design and build.",
    steps: [
      { title: "Assess", body: "We inspect the space, its condition, and the requirements of the intended use." },
      { title: "Define", body: "We agree what remains, what changes, and the scope needed to achieve the brief." },
      { title: "Design", body: "We develop the layout, materials, lighting, and details for approval." },
      { title: "Build", body: "We manage selective removal, procurement, fabrication, installation, and coordination." },
      { title: "Deliver", body: "We review quality, close snags, and hand over the renewed space." },
    ],
  },
  related: {
    title: "Choose the right service",
    body: "New interiors from an initial brief follow design and build. New stores and restaurants belong under commercial spaces. New hotels follow hospitality. Approved designs that only need execution belong under fit-out.",
    links: [
      { href: "/design-build", label: "Design and build" },
      { href: "/commercial-spaces", label: "Commercial spaces" },
      { href: "/hospitality-spaces", label: "Hospitality spaces" },
      { href: "/fit-out", label: "Fit-out and execution" },
    ],
  },
  audience: {
    eyebrow: "Who it is for",
    title: "For owners of existing spaces",
    items: [
      "Villas and large private homes",
      "Existing offices",
      "Operating restaurants and cafés",
      "Existing hotels and serviced apartments",
      "Showrooms and retail spaces",
      "Developers repositioning an existing asset",
      "Companies updating their headquarters",
    ],
    trust: "TURRIVA is a specialised spatial design and build studio, supported by a team experienced in design, execution, and visual communication.",
  },
  close: {
    title: "Planning to renew a space?",
    body: "Share photographs, available drawings, and what needs to change. We will review the existing condition and discuss a suitable scope.",
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
      { id: "other", label: "Other existing space" },
    ],
    drawings: { label: "Do you have drawings?", yes: "Yes", no: "Not yet" },
  },
};

const ar: RenovationCopy = {
  nav: "التجديد والتطوير",
  metaTitle: "تجديد المساحات وتطويرها",
  metaDescription:
    "تقيّم توريفا المساحات القائمة وتعيد تصميمها وتجديدها ضمن نطاق واضح تحدده حالتها واستخدامها المستقبلي.",
  hero: {
    eyebrow: "التجديد والتطوير",
    title: "نحافظ على الجيد. ونطور ما يلزم.",
    body: "يبدأ التجديد المدروس من واقع المساحة القائمة. نقيّم ما يمكن الإبقاء عليه، وما يستحق التطوير، وما يحتاج إلى إعادة تصميم وتنفيذ.",
    cta: "ناقش مشروعك معنا",
    secondary: "أرسل المخططات",
  },
  problem: {
    eyebrow: "لماذا يهم",
    title: "المساحات القائمة تحتاج قرارات مدروسة.",
    body: "الجدران والخدمات والتشطيبات والعناصر القابلة للاستفادة موجودة بالفعل. لذلك يجب أن يستجيب التصميم لحالتها وللاستخدام المقبل، لا أن يتعامل مع الموقع كأنه فارغ.",
    points: ["الإبقاء على العناصر الصالحة عند ملاءمتها", "تصميم يستجيب للاستخدام المقصود", "تحديد النطاق قبل بدء الإزالة"],
  },
  definition: {
    eyebrow: "الخدمة",
    title: "التجديد والتطوير",
    body: "خدمة لتصميم وتنفيذ تجديد الفلل والمكاتب والمطاعم والفنادق وصالات العرض والمتاجر القائمة. نقيّم الحالة، ونعيد التصميم وفق الاستخدام المقصود، ثم ننفذ النطاق المتفق عليه.",
    result: "تبدأ المساحات الجديدة من التصميم والتنفيذ أو المساحات التجارية أو الضيافة. وإذا كان تصميم التجديد معتمداً ويحتاج إلى تنفيذ فقط، فخدمة التنفيذ والتجهيز هي المسار المناسب.",
  },
  starts: {
    eyebrow: "نقطة البداية",
    title: "من المساحة القائمة أو مخططات معتمدة",
    items: [
      { title: "من الوضع الحالي", body: "نعاين المساحة، ونحدد ما يمكن الإبقاء عليه، ونصوغ التغيير قبل بدء الإزالة." },
      {
        title: "من مخططات معتمدة",
        body: "إذا اكتمل التصميم، ننفذ النطاق المتفق عليه مع الحفاظ على رؤية المصمم.",
        href: "/fit-out",
        cta: "التنفيذ والتجهيز",
      },
    ],
  },
  keep: {
    eyebrow: "القرار الأول",
    title: "قرر قبل أن تزيل.",
    body: "تحتاج بعض المساحات إلى تشطيبات وإضاءة جديدة، فيما تحتاج أخرى إلى تخطيط مختلف. وتحدد المعاينة ما لا يزال صالحاً وما ينبغي تطويره أو إعادة بنائه.",
    line: "يتبع النطاق حالة المساحة والنتيجة المطلوبة.",
  },
  includes: {
    eyebrow: "النطاق",
    title: "نطاق محسوب",
    intro: "تقتصر الإزالة على ما تتطلبه المعاينة والتصميم المعتمد. وتدخل المطابخ والحمامات ضمن العمل عند ارتباطها بالمساحة، بينما تُنسق الأعمال الإنشائية والخدمات مع الجهات المتخصصة.",
    items: [
      { title: "المعاينة", body: "زيارة للموقع وقياسات ومراجعة للحالة الحالية مقارنة بالاستخدام المقصود." },
      { title: "إعادة التصميم", body: "تخطيط محدث ومواد وإضاءة وأثاث تناسب المرحلة المقبلة من عمر المساحة." },
      { title: "التطوير الفني", body: "مخططات وكميات ومواصفات منسقة للتنفيذ ضمن الوضع القائم." },
      { title: "الأعمال الداخلية", body: "أرضيات وأسقف وجدران ونجارة وإضاءة وأثاث ومطابخ أو حمامات، وفق النطاق المعتمد." },
      { title: "التنفيذ", body: "إزالة انتقائية تليها أعمال البناء والتركيب والتنسيق في الموقع. ولا يشمل ذلك الهدم الإنشائي ما لم يُقيّم ويُكلف بصورة مستقلة." },
      { title: "التسليم", body: "استكمال التفاصيل ومراجعة الجودة وإغلاق الملاحظات ثم التسليم للاستخدام الجديد. ويبقى تصميم الهوية خدمة متخصصة عند الحاجة." },
    ],
  },
  sizes: {
    eyebrow: "نطاق المشروع",
    title: "مستوى التغيير الذي تحتاجه المساحة",
    note: "يتحدد النطاق والتكلفة وفق الحالة القائمة والتصميم المعتمد والكميات ومتطلبات الجهات المتخصصة، بعد المعاينة.",
    items: [
      { title: "تحديث", body: "تطوير محدد للتشطيبات أو الإضاءة أو الأثاث من دون تغيير التخطيط." },
      { title: "تجديد", body: "إعادة تصميم أوسع للفراغات والتشطيبات والنجارة بما يلائم الاستخدام الحالي." },
      { title: "تحويل", body: "تغيير أشمل عندما تحتاج المساحة إلى وظيفة جديدة، ضمن الحدود التي تدعمها المعاينة." },
    ],
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "نقيّم أولاً. ثم نصمم وننفذ.",
    steps: [
      { title: "المعاينة", body: "نفحص المساحة وحالتها ومتطلبات الاستخدام المقصود." },
      { title: "التحديد", body: "نتفق على ما سيبقى وما سيتغير والنطاق اللازم لتحقيق الموجز." },
      { title: "التصميم", body: "نطور التخطيط والمواد والإضاءة والتفاصيل للاعتماد." },
      { title: "التنفيذ", body: "ندير الإزالة الانتقائية والتوريد والتصنيع والتركيب والتنسيق." },
      { title: "التسليم", body: "نراجع الجودة ونغلق الملاحظات ونسلم المساحة المجددة." },
    ],
  },
  related: {
    title: "اختر الخدمة المناسبة",
    body: "تتبع المساحات الداخلية الجديدة من موجز أولي خدمة التصميم والتنفيذ. وتندرج المتاجر والمطاعم الجديدة ضمن المساحات التجارية، والفنادق الجديدة ضمن الضيافة. أما التصاميم المعتمدة التي تحتاج إلى تنفيذ فقط فتندرج ضمن التنفيذ والتجهيز.",
    links: [
      { href: "/design-build", label: "التصميم والتنفيذ" },
      { href: "/commercial-spaces", label: "المساحات التجارية" },
      { href: "/hospitality-spaces", label: "مساحات الضيافة" },
      { href: "/fit-out", label: "التنفيذ والتجهيز" },
    ],
  },
  audience: {
    eyebrow: "لمن",
    title: "لملاك المساحات القائمة",
    items: [
      "فلل ومساكن خاصة كبيرة",
      "مكاتب قائمة",
      "مطاعم ومقاهٍ قائمة",
      "فنادق وشقق فندقية قائمة",
      "صالات عرض ومتاجر",
      "مطورون يعيدون تموضع أصل قائم",
      "شركات تطور مقراتها",
    ],
    trust: "توريفا استوديو متخصص في التصميم المكاني والتنفيذ، يدعمه فريق ذو خبرة في التصميم والتنفيذ والاتصال البصري.",
  },
  close: {
    title: "هل تخطط لتجديد مساحة؟",
    body: "شاركنا الصور والمخططات المتاحة وما ترغب في تغييره. سنراجع الحالة القائمة ونناقش معك نطاق العمل المناسب.",
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
      { id: "other", label: "مساحة قائمة من نوع آخر" },
    ],
    drawings: { label: "هل لديكم مخططات؟", yes: "نعم", no: "ليس بعد" },
  },
};

export function getRenovationCopy(locale: Locale): RenovationCopy {
  return locale === "ar" ? ar : en;
}
