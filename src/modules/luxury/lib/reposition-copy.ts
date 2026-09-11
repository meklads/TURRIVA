import type { Locale } from "@/shared/i18n/locale";

export type RepositionCopy = {
  navDevelopers: string;
  definition: {
    eyebrow: string;
    title: string;
    body: string;
    notes: readonly string[];
    pathCta: string;
  };
  developers: {
    eyebrow: string;
    title: string;
    intro: string;
    points: readonly { title: string; body: string }[];
    cta: string;
    pageCta: string;
  };
  scopes: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly { title: string; body: string }[];
  };
  method: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: readonly { title: string; body: string }[];
  };
  teamExperience: string;
  honestNote: string;
};

const en: RepositionCopy = {
  navDevelopers: "Project experience",
  definition: {
    eyebrow: "What Turriva is",
    title: "Spatial design and execution. Not a furniture shop, and not a tech company.",
    body: "Turriva develops a space and delivers it: design, technical detailing, fabrication, installation, and handover. A finished room or sales environment is the work. Screens and campaigns can support it; they are not the product.",
    notes: [
      "Built for developers and hospitality operators, not catalogue decor.",
      "A new space can start from an idea, or from drawings you already have.",
      "Graphics House and Bees Motion join only when the project needs visualization or launch.",
    ],
    pathCta: "From idea to a finished space",
  },
  developers: {
    eyebrow: "For developers",
    title: "Your project is ready to sell. Is the way you show it ready?",
    intro:
      "We design and deliver the place where the project meets its clients: a sales gallery, a show unit, models, and fit-out. The scope follows the project. The first step is a conversation.",
    points: [
      {
        title: "Sales gallery and show villa",
        body: "The physical space a buyer walks through, coordinated with the visual work, not a loose furniture list.",
      },
      {
        title: "Fit-out of the asset",
        body: "Reception, suites, and shared spaces executed from drawings or from a design we develop with you.",
      },
      {
        title: "One accountable delivery",
        body: "Design, detailing, supply, and site in one conversation, so the finished space matches what was approved.",
      },
    ],
    cta: "Real estate project experience",
    pageCta: "Discuss your project",
  },
  scopes: {
    eyebrow: "How to engage",
    title: "Five ways to start. You do not have to buy the whole stack.",
    intro: "Most projects use more than one. The point is a clear scope, not a package label.",
    items: [
      { title: "Design only", body: "Spatial concept and technical drawings, ready for a contractor you already have." },
      { title: "Execution of your design", body: "We fabricate and install from your approved drawings." },
      { title: "Design and execution", body: "From idea to a finished space, with one team accountable for the result." },
      { title: "Real-estate experience", body: "A sales gallery, show unit, or launch space, built and supported visually when needed." },
      { title: "Full property delivery", body: "The fit-out and the experience around it, timed to a launch or opening." },
    ],
  },
  method: {
    eyebrow: "How we work",
    title: "A short path from brief to a space you can hand over.",
    intro: "No extra process theatre. These are the decisions that keep a project from drifting.",
    steps: [
      { title: "Brief", body: "Site, drawings, opening date, and what the space has to do." },
      { title: "Scope", body: "What Turriva delivers, and what stays with your contractor or designer." },
      { title: "Detail", body: "Materials and samples are agreed before fabrication, not after the site is waiting." },
      { title: "Make and install", body: "Joinery, finishes, and installation against the approved drawings." },
      { title: "Handover", body: "A space that can be shown, occupied, or opened, not a render left on a screen." },
    ],
  },
  teamExperience: "Selected team experience",
  honestNote:
    "Shown as selected experience of the delivery team and group partners. Not presented as a historical Turriva-branded contract.",
};

const ar: RepositionCopy = {
  navDevelopers: "تجربة المشروع",
  definition: {
    eyebrow: "ما هي توريفا",
    title: "تصميم مكاني وتنفيذ. ليست متجر ديكور، وليست شركة تقنية.",
    body: "توريفا تطوّر الفراغ وتسلّمه: تصميم، تفصيل فني، تصنيع، تركيب، وتسليم. المنتج مكان مكتمل. الشاشات والحملات قد تخدمه، لكنها ليست المنتج.",
    notes: [
      "للمطورين ومشغّلي الضيافة، لا لكتالوج الأثاث.",
      "المساحة الجديدة يمكن أن تبدأ من فكرة، أو من مخططات لديكم.",
      "جرافيكس هاوس وبيزموشن يدخلان فقط عندما يحتاج المشروع تصورًا أو إطلاقًا.",
    ],
    pathCta: "من الفكرة إلى مساحة جاهزة",
  },
  developers: {
    eyebrow: "للمطورين",
    title: "مشروعك جاهز للبيع. هل تجربة عرضه جاهزة؟",
    intro:
      "نصمّم وننفّذ البيئة التي يستقبل فيها مشروعك عملاءه: مركز البيع ووحدة العرض والمجسمات والتجهيز. النطاق حسب المشروع. الخطوة الأولى محادثة.",
    points: [
      {
        title: "معرض مبيعات وفيلا عرض",
        body: "المكان الذي يمشي فيه المشتري، منسَّق مع العمل البصري، وليس قائمة أثاث منفصلة.",
      },
      {
        title: "تشطيب الأصل",
        body: "استقبال وأجنحة ومساحات مشتركة، من مخططاتكم أو من تصميم نطوّره معكم.",
      },
      {
        title: "تسليم واحد",
        body: "تصميم وتفصيل وتوريد وموقع في محادثة واحدة، حتى يطابق المكان ما تم اعتماده.",
      },
    ],
    cta: "تجربة المشروع العقاري",
    pageCta: "ناقش مشروعك معنا",
  },
  scopes: {
    eyebrow: "كيف نبدأ",
    title: "خمس طرق للبدء. لست مضطرًا لشراء المنظومة كاملة.",
    intro: "معظم المشاريع تستخدم أكثر من طريقة. المهم نطاق واضح، لا اسم باقة.",
    items: [
      { title: "تصميم فقط", body: "فكرة مكانية ومخططات فنية، جاهزة لمقاول لديكم." },
      { title: "تنفيذ تصميمكم", body: "نصنّع ونركّب من مخططاتكم المعتمدة." },
      { title: "تصميم وتنفيذ", body: "من الفكرة إلى مكان مكتمل، مع فريق واحد مسؤول عن النتيجة." },
      { title: "تجربة عقارية", body: "معرض مبيعات أو وحدة عرض أو مساحة إطلاق، مبنية ومدعومة بصريًا عند الحاجة." },
      { title: "تسليم عقاري كامل", body: "التشطيب والتجربة حوله، في توقيت الإطلاق أو الافتتاح." },
    ],
  },
  method: {
    eyebrow: "كيف نعمل",
    title: "مسار قصير من الموجز إلى مكان يمكن تسليمه.",
    intro: "لا إجراءات إضافية للعرض. هذه القرارات التي تمنع المشروع من الانحراف.",
    steps: [
      { title: "الموجز", body: "الموقع، المخططات، موعد الافتتاح، وما يجب أن يفعله المكان." },
      { title: "النطاق", body: "ما تسلّمه توريفا، وما يبقى لدى مقاولكم أو مصممكم." },
      { title: "التفصيل", body: "مواد وعينات تُعتمد قبل التصنيع، لا بعد أن ينتظر الموقع." },
      { title: "التصنيع والتركيب", body: "أعمال خشبية وتشطيبات وتركيب وفق المخططات المعتمدة." },
      { title: "التسليم", body: "مكان يمكن عرضه أو استخدامه أو افتتاحه، لا تصوّر يبقى على الشاشة." },
    ],
  },
  teamExperience: "خبرة فريق مختارة",
  honestNote:
    "تُعرض كخبرة مختارة لفريق التنفيذ وشركاء المجموعة. ليست عقدًا تاريخيًا باسم توريفا.",
};

export function getRepositionCopy(locale: Locale): RepositionCopy {
  return locale === "ar" ? ar : en;
}
