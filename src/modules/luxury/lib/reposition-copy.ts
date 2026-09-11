import type { Locale } from "@/shared/i18n/locale";

export type RepositionCopy = {
  navDevelopers: string;
  definition: {
    eyebrow: string;
    title: string;
    body: string;
    audiences: string;
    notes: readonly string[];
  };
  developers: {
    eyebrow: string;
    title: string;
    intro: string;
    points: readonly { title: string; body: string }[];
    cta: string;
    fitOutCta: string;
    pageCta: string;
  };
  album: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    cta: string;
    items: readonly { image: string; category: string; title: string; href: string }[];
  };
  groups: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly {
      title: string;
      question: string;
      links: readonly { href: string; label: string }[];
    }[];
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
    title: "Design and execution of spaces and experiences.",
    body: "Not a furniture shop, and not a tech company. Turriva develops the space and delivers it: design, technical detailing, fabrication, installation, and handover. The product is a finished room. Screens and campaigns can support it. They are not the product.",
    audiences: "For developers · Commercial projects · Hospitality · Homes",
    notes: [
      "The first commercial door is real estate project experience: the place a development meets its clients.",
      "The first step is a conversation. Cost follows the drawings and the quantities.",
      "Hire Turriva alone. Graphics House and Bees Motion join only when the project needs them.",
    ],
  },
  developers: {
    eyebrow: "Primary door",
    title: "Your project is ready to sell. Is the way you show it ready?",
    intro:
      "We design and deliver the place where the project meets its clients: a sales gallery, a show unit, models, and fit-out. The scope follows the project. We do not promise higher sales. We build the environment that lets a buyer understand the living standard.",
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
    fitOutCta: "Fit-out and execution",
    pageCta: "Discuss your project",
  },
  album: {
    eyebrow: "The work",
    title: "Spaces, not a catalogue.",
    subtitle: "Each frame opens the door it belongs to. Look at the room, not at a product list.",
    note: "Selected team experience and live work. Not a list of historical Turriva contracts.",
    cta: "Selected work",
    items: [
      { image: "/brand/turriva/makkah-charter-04.jpeg", category: "Real estate", title: "The place a project is shown", href: "/real-estate-experience" },
      { image: "/brand/turriva/projects/project-walk-in-makkah.webp", category: "Show unit", title: "A unit a buyer walks", href: "/show-unit" },
      { image: "/brand/turriva/hero-interior.webp", category: "Design and build", title: "From an idea to a room", href: "/design-build" },
      { image: "/brand/turriva/projects/project-joinery-b2b.webp", category: "Fit-out", title: "Drawings, built", href: "/fit-out" },
      { image: "/brand/turriva/sample-kit-showroom.webp", category: "Commercial", title: "Where the customer meets the brand", href: "/commercial-spaces" },
      { image: "/brand/turriva/projects/project-kitchen-jeddah.webp", category: "Renovation", title: "What stays, and what changes", href: "/renovation" },
    ],
  },
  groups: {
    eyebrow: "What you can buy",
    title: "Three doors. One company.",
    intro: "Seven products sit behind three questions. They are not seven equal services competing for attention.",
    items: [
      {
        title: "Real estate",
        question: "How do I show the project for sale?",
        links: [
          { href: "/real-estate-experience", label: "Real estate project experience" },
          { href: "/show-unit", label: "Show unit" },
        ],
      },
      {
        title: "Design and build",
        question: "Do I start from an idea, or from a design I already have?",
        links: [
          { href: "/design-build", label: "Design and build" },
          { href: "/fit-out", label: "Fit-out and execution" },
        ],
      },
      {
        title: "Spaces",
        question: "A place that receives customers, a stay, or a room that already exists?",
        links: [
          { href: "/commercial-spaces", label: "Commercial spaces" },
          { href: "/hospitality-spaces", label: "Hospitality spaces" },
          { href: "/renovation", label: "Renovation and upgrade" },
        ],
      },
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
    title: "تصميم وتنفيذ المساحات والتجارب.",
    body: "ليست متجر ديكور، وليست شركة تقنية. توريفا تطوّر الفراغ وتسلّمه: تصميم، تفصيل فني، تصنيع، تركيب، وتسليم. المنتج مكان مكتمل. الشاشات والحملات قد تخدمه. لكنها ليست المنتج.",
    audiences: "للمطورين · المشاريع التجارية · الضيافة · المساكن",
    notes: [
      "الباب التجاري الأول هو تجربة المشروع العقاري: المكان الذي يلتقي فيه المشروع بعملائه.",
      "الخطوة الأولى محادثة. التكلفة تتبع المخططات والكميات.",
      "تعاقد مع توريفا وحدها. جرافيكس هاوس وبيز موشن يدخلان فقط عندما يحتاجهما المشروع.",
    ],
  },
  developers: {
    eyebrow: "الباب الأول",
    title: "مشروعك جاهز للبيع. هل تجربة عرضه جاهزة؟",
    intro:
      "نصمّم وننفّذ البيئة التي يستقبل فيها مشروعك عملاءه: مركز البيع ووحدة العرض والمجسمات والتجهيز. النطاق حسب المشروع. لا نعد بزيادة المبيعات. نبني المكان الذي يفهم فيه العميل مستوى المعيشة الذي يقدمه المشروع.",
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
    fitOutCta: "التنفيذ والتجهيز",
    pageCta: "ناقش مشروعك معنا",
  },
  album: {
    eyebrow: "الأعمال",
    title: "مساحات، لا كتالوج.",
    subtitle: "كل إطار يفتح الباب الذي ينتمي إليه. انظر إلى المكان، لا إلى قائمة منتجات.",
    note: "خبرة فريق مختارة وأعمال حية. ليست قائمة عقود تاريخية باسم توريفا.",
    cta: "أعمال مختارة",
    items: [
      { image: "/brand/turriva/makkah-charter-04.jpeg", category: "العقار", title: "المكان الذي يُعرض فيه المشروع", href: "/real-estate-experience" },
      { image: "/brand/turriva/projects/project-walk-in-makkah.webp", category: "وحدة العرض", title: "وحدة يمشي فيها المشتري", href: "/show-unit" },
      { image: "/brand/turriva/hero-interior.webp", category: "التصميم والتنفيذ", title: "من فكرة إلى غرفة", href: "/design-build" },
      { image: "/brand/turriva/projects/project-joinery-b2b.webp", category: "التنفيذ والتجهيز", title: "مخططات تُبنى", href: "/fit-out" },
      { image: "/brand/turriva/sample-kit-showroom.webp", category: "التجاري", title: "حيث يلتقي العميل بالعلامة", href: "/commercial-spaces" },
      { image: "/brand/turriva/projects/project-kitchen-jeddah.webp", category: "التجديد", title: "ما يبقى، وما يتغير", href: "/renovation" },
    ],
  },
  groups: {
    eyebrow: "ما يمكن شراؤه",
    title: "ثلاثة أبواب. شركة واحدة.",
    intro: "سبعة منتجات خلف ثلاثة أسئلة. ليست سبع خدمات متساوية تتنافس على الانتباه.",
    items: [
      {
        title: "العقار",
        question: "كيف أُظهر المشروع للبيع؟",
        links: [
          { href: "/real-estate-experience", label: "تجربة المشروع العقاري" },
          { href: "/show-unit", label: "وحدة العرض" },
        ],
      },
      {
        title: "التصميم والتنفيذ",
        question: "أبدأ من فكرة، أم من تصميم موجود؟",
        links: [
          { href: "/design-build", label: "التصميم والتنفيذ" },
          { href: "/fit-out", label: "التنفيذ والتجهيز" },
        ],
      },
      {
        title: "المساحات",
        question: "مكان يستقبل عملاء، أم إقامة، أم غرفة قائمة؟",
        links: [
          { href: "/commercial-spaces", label: "المساحات التجارية" },
          { href: "/hospitality-spaces", label: "مساحات الضيافة" },
          { href: "/renovation", label: "التجديد والتطوير" },
        ],
      },
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
