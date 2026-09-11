/** Platform positioning copy, Livspace UX + Oppein manufacturing + Turriva execution */
import type { Locale } from "../locale";

export type LuxuryPlatformMessages = {
  trustBar: {
    items: readonly { icon: string; label: string }[];
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: readonly {
      brand?: "oppein" | "turriva";
      badge: string;
      title: string;
      points: readonly string[];
    }[];
    ctaB2b: string;
    ctaB2c: string;
    ctaB2bHref: string;
    ctaB2cHref: string;
  };
  brandRelationship: {
    eyebrow: string;
    title: string;
    body: string;
    flow: string;
    groupLink: string;
    companies: readonly {
      name: string;
      role: string;
      active?: boolean;
    }[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    traditionalHeader: string;
    turrivaHeader: string;
    rows: readonly { traditional: string; turriva: string }[];
  };
  products: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      description: string;
      href: string;
    }[];
  };
  inspiration: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stylesLink: string;
    items: readonly {
      id: string;
      label: string;
      title: string;
      description: string;
      cta: string;
      href: string;
    }[];
  };
  waysOfLiving: {
    title: string;
    subtitle: string;
  };
  beforeAfter: {
    eyebrow: string;
    title: string;
    subtitleLine1: string;
    subtitleLine2: string;
    projectName: string;
    projectCredit: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly { q: string; a: string }[];
  };
  partners: {
    title: string;
    subtitle: string;
    groups: readonly {
      label: string;
      description: string;
      items: readonly string[];
    }[];
  };
  sampleKit: {
    title: string;
    subtitle: string;
    button: string;
  };
  valueOffers: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: readonly {
      icon: "warranty" | "quality" | "design" | "service";
      title: string;
      points: readonly string[];
    }[];
    cta: string;
    ctaHref: string;
  };
};

const en: LuxuryPlatformMessages = {
  trustBar: {
    items: [
      { icon: "build", label: "Spatial Design · Experience · Build" },
      { icon: "design", label: "Concept-to-build technical development" },
      { icon: "factory", label: "Fabrication, procurement & physical delivery" },
    ],
  },
  ecosystem: {
    eyebrow: "How Turriva delivers",
    title: "From design direction to delivery",
    subtitle:
      "Turriva brings technical development, coordinated fabrication, site installation, quality control, and handover together under one delivery team.",
    pillars: [
      {
        badge: "01 · Technical development",
        title: "Develop the design for delivery",
        points: [
          "Site surveys, material specifications, shop drawings, mock-ups, and coordinated approvals.",
          "A clear connection between the approved design and what will be fabricated and installed.",
        ],
      },
      {
        brand: "oppein",
        badge: "02 · Fabrication & procurement",
        title: "Coordinate fabrication and sourcing",
        points: [
          "Joinery, finishes, fixtures, and specialist fabrication coordinated through suitable supply partners.",
          "Production tracking, compliance documentation, logistics, and phased delivery aligned with the site programme.",
        ],
      },
      {
        brand: "turriva",
        badge: "03 · Execution & handover",
        title: "Deliver the finished space",
        points: [
          "Specialist site teams manage installation, trade interfaces, snagging, and final quality checks.",
          "One Turriva lead coordinates the work through opening, handover, and aftercare.",
        ],
      },
    ],
    ctaB2b: "Discuss your project",
    ctaB2c: "Send your drawings",
    ctaB2bHref: "/projects",
    ctaB2cHref: "/contact?intent=sample",
  },
  brandRelationship: {
    eyebrow: "Part of Tasami Group",
    title: "Turriva, supported when needed",
    body:
      "Turriva designs and delivers spaces and experiences. Graphics House or Bees Motion can join when a brief also requires visualisation or launch support. Turriva can be appointed independently.",
    flow: "Creative → Execution",
    groupLink: "Discover Tasami Group",
    companies: [
      { name: "Graphics House", role: "CREATE · visual work" },
      { name: "Bees Motion", role: "GROW · launch and campaigns" },
      { name: "Turriva", role: "BUILD · the finished space", active: true },
    ],
  },
  comparison: {
    eyebrow: "Why Turriva",
    title: "A more connected delivery model",
    traditionalHeader: "Traditional approach",
    turrivaHeader: "Turriva execution",
    rows: [
      {
        traditional: "Separate design, fabrication, and installation teams",
        turriva: "One Turriva team coordinating the approved design through handover",
      },
      {
        traditional: "A disconnect between design visuals and delivered work",
        turriva: "Technical development connects the approved design with fabrication",
      },
      {
        traditional: "Variable fabrication, scheduling, and quality control",
        turriva: "Fabrication and installation against approved drawings",
      },
      {
        traditional: "Unclear responsibility after installation",
        turriva: "Contract-defined product and installation warranty with local support",
      },
    ],
  },
  products: {
    eyebrow: "Solutions",
    title: "Interiors and joinery, made for place",
    items: [
      {
        title: "Modular kitchens",
        description: "Cabinetry, worktops, and hardware developed around the room, its use, and the approved drawings.",
        href: "/villas#kitchens",
      },
      {
        title: "Wardrobes & walk-ins",
        description: "Tailored storage with integrated lighting, glass details, and hardware selected for daily use.",
        href: "/villas#wardrobes",
      },
      {
        title: "Wall panels & doors",
        description: "Doors and architectural wall finishes developed in timber veneer, stone-look, and complementary materials.",
        href: "/projects#joinery",
      },
      {
        title: "Villas & residences",
        description: "Coordinated interior delivery for private homes, from design development to installation.",
        href: "/villas",
      },
      {
        title: "Developers & hospitality",
        description: "Technical packages, coordinated procurement, logistics, and phased delivery for larger programmes.",
        href: "/projects",
      },
    ],
  },
  inspiration: {
    eyebrow: "Ideas",
    title: "Inspiration by space",
    subtitle: "Explore kitchens, wardrobes, living spaces, and considered style directions for your brief.",
    stylesLink: "Style directions",
    items: [
      {
        id: "kitchen",
        label: "Kitchen",
        title: "Modular kitchens",
        description:
          "Custom cabinetry, worktops, and selected hardware, developed in 3D and installed on site by Turriva.",
        cta: "Discuss your kitchen",
        href: "/contact?intent=design",
      },
      {
        id: "wardrobe",
        label: "Wardrobe",
        title: "Walk-in closets",
        description:
          "Integrated lighting, soft-close hardware, and tailored modules for dressing rooms and principal suites.",
        cta: "Send your drawings",
        href: "/villas#wardrobes",
      },
      {
        id: "living",
        label: "Living",
        title: "Living & dining",
        description:
          "Media walls, shelving, and dining joinery composed through a coordinated material palette.",
        cta: "Explore style directions",
        href: "/styles",
      },
      {
        id: "bedroom",
        label: "Bedroom",
        title: "Bedroom suites",
        description:
          "Headboards, bedside pieces, and wardrobe systems developed around your plan and approved finishes.",
        cta: "Discuss your space",
        href: "/villas",
      },
      {
        id: "bathroom",
        label: "Bathroom",
        title: "Bathroom vanity",
        description:
          "Vanity units, mirrored storage, and moisture-suitable materials specified for daily use.",
        cta: "Send your drawings",
        href: "/contact",
      },
      {
        id: "hospitality",
        label: "Hospitality",
        title: "Hotels & F&B",
        description:
          "Coordinated programmes for lobbies, suites, and restaurants, with phased delivery and site coordination.",
        cta: "Discuss your project",
        href: "/projects",
      },
    ],
  },
  waysOfLiving: {
    title: "Designed around daily life",
    subtitle:
      "Kitchens, wardrobes, bathrooms, and whole-home joinery, developed in 3D and delivered on site.",
  },
  beforeAfter: {
    eyebrow: "Project showcase",
    title: "Visual direction for a built outcome",
    subtitleLine1: "Architectural visualisation, interior joinery, and woodwork for developer programmes.",
    subtitleLine2: "This project-specific creative work was produced by our sister company, Graphics House.",
    projectName: "Rafal Pavilions",
    projectCredit: "Visualization & interior design · Graphics House",
    cta: "View the project",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    items: [
      {
        q: "What does Turriva offer end-to-end?",
        a: "We coordinate technical development, fabrication, procurement, compliance documentation, installation, handover, and contract-defined aftercare through one Turriva team.",
      },
      {
        q: "Do you serve developers and villa owners?",
        a: "Yes. We work with developers, hospitality teams, and private homeowners. Each project follows a coordinated technical and delivery process suited to its scale.",
      },
      {
        q: "Is there a warranty?",
        a: "Yes, where included in the signed contract. Coverage reflects the agreed products and installation scope, with material grades and hardware defined in the specification.",
      },
      {
        q: "Can I request physical material samples?",
        a: "Yes. Once we understand the scope, we can arrange relevant finish and hardware samples for review at your office or property.",
      },
      {
        q: "How do I start?",
        a: "Send your drawings or a clear project brief. We will review the requirements and arrange a conversation about scope, programme, and next steps.",
      },
    ],
  },
  partners: {
    title: "Specified for each project",
    subtitle: "Fabrication methods, hardware, and compliance documentation are selected against the approved project specification.",
    groups: [
      {
        label: "Production",
        description: "Produced to approved drawings through fabrication partners suited to the specification.",
        items: ["Selected for the project"],
      },
      {
        label: "Hardware",
        description: "Hinges, runners, and fittings are selected to meet the agreed performance and design requirements.",
        items: ["Specified per project"],
      },
      {
        label: "Conformity",
        description: "Product and import documentation is provided by the relevant supplier for the project.",
        items: ["Documented by source"],
      },
    ],
  },
  sampleKit: {
    title: "Review materials with purpose",
    subtitle:
      "Once the scope is clear, we prepare relevant finish and hardware references for an informed review.",
    button: "Send the drawings",
  },
  valueOffers: {
    eyebrow: "Why Turriva",
    title: "A considered path to delivery",
    subtitle:
      "Spatial design, experience, and build coordinated around one clear brief.",
    items: [
      {
        icon: "warranty",
        title: "Defined aftercare",
        points: [
          "Product and installation coverage defined in the project contract.",
          "Structured snagging, handover, and local follow-through.",
        ],
      },
      {
        icon: "quality",
        title: "Specified quality",
        points: [
          "Fabrication against approved drawings, with samples signed off before production.",
          "Board grades, finishes, and hardware are selected against the approved specification.",
        ],
      },
      {
        icon: "design",
        title: "Design made buildable",
        points: [
          "3D reviews help align the room, materials, and details before fabrication.",
          "Layouts are developed to your floor plan before production begins.",
        ],
      },
      {
        icon: "service",
        title: "Coordinated delivery",
        points: [
          "Site survey, procurement coordination, compliance documentation, and installation under one Turriva lead.",
          "Phased logistics for villas, compounds, and developer programmes.",
        ],
      },
    ],
    cta: "Discuss your project",
    ctaHref: "/contact",
  },
};

const ar: LuxuryPlatformMessages = {
  trustBar: {
    items: [
      { icon: "build", label: "تصميم مكاني · تجربة · تنفيذ" },
      { icon: "design", label: "تطوير فني من المفهوم إلى التنفيذ" },
      { icon: "factory", label: "تصنيع وتوريد وتسليم ميداني" },
    ],
  },
  ecosystem: {
    eyebrow: "كيف تنفّذ توريفا",
    title: "من التوجه التصميمي إلى التسليم",
    subtitle:
      "تجمع توريفا التطوير الفني وتنسيق التصنيع والتركيب وضبط الجودة والتسليم ضمن فريق واحد يقود المشروع.",
    pillars: [
      {
        badge: "01 · التطوير الفني",
        title: "تطوير التصميم للتنفيذ",
        points: [
          "رفع مساحي، مواصفات خامات، مخططات تنفيذ، نماذج واعتمادات منسّقة.",
          "ربط واضح بين التصميم المعتمد وما سيُصنّع ويُركّب فعلياً.",
        ],
      },
      {
        brand: "oppein",
        badge: "02 · التصنيع والتوريد",
        title: "تنسيق التصنيع والتوريد",
        points: [
          "تنسيق النجارة والتشطيبات والتجهيزات والأعمال المتخصصة عبر مورّدين مناسبين للمشروع.",
          "متابعة الإنتاج ووثائق الامتثال واللوجستيات والتسليم المرحلي وفق برنامج الموقع.",
        ],
      },
      {
        brand: "turriva",
        badge: "03 · التنفيذ والتسليم",
        title: "تسليم المكان المكتمل",
        points: [
          "فرق ميدانية متخصصة تدير التركيب والتقاطعات وإغلاق الملاحظات وضبط الجودة النهائي.",
          "يقود مسؤول واحد من توريفا العمل حتى الافتتاح والتسليم وخدمة ما بعد التنفيذ.",
        ],
      },
    ],
    ctaB2b: "ناقش مشروعك",
    ctaB2c: "أرسل مخططاتك",
    ctaB2bHref: "/projects",
    ctaB2cHref: "/contact?intent=sample",
  },
  brandRelationship: {
    eyebrow: "جزء من مجموعة تسامي",
    title: "توريفا، بدعم عند الحاجة",
    body:
      "تصمم توريفا المساحات والتجارب وتنفذها. ويمكن أن تنضم Graphics House أو Bees Motion عندما يشمل الموجز التصور البصري أو دعم الإطلاق. كما يمكن التعاقد مع توريفا بصورة مستقلة.",
    flow: "الإبداع ← التنفيذ",
    groupLink: "اكتشف مجموعة تسامي",
    companies: [
      { name: "Graphics House", role: "CREATE · العمل البصري" },
      { name: "Bees Motion", role: "GROW · الإطلاق والحملات" },
      { name: "Turriva", role: "BUILD · المكان المكتمل", active: true },
    ],
  },
  comparison: {
    eyebrow: "لماذا توريفا",
    title: "نموذج تنفيذ أكثر ترابطاً",
    traditionalHeader: "الطريقة التقليدية",
    turrivaHeader: "منظومة توريفا",
    rows: [
      {
        traditional: "فرق منفصلة للتصميم والتصنيع والتركيب",
        turriva: "فريق توريفا واحد ينسّق التصميم المعتمد حتى التسليم",
      },
      {
        traditional: "فجوة بين التصور التصميمي والعمل المنفّذ",
        turriva: "تطوير فني يربط التصميم المعتمد بالتصنيع",
      },
      {
        traditional: "تفاوت في التصنيع والبرنامج وضبط الجودة",
        turriva: "تصنيع وتركيب وفق المخططات المعتمدة",
      },
      {
        traditional: "مسؤولية غير واضحة بعد التركيب",
        turriva: "ضمان محدد بالعقد على المنتج والتركيب مع دعم محلي",
      },
    ],
  },
  products: {
    eyebrow: "الحلول",
    title: "تصميم داخلي ونجارة للمكان",
    items: [
      {
        title: "مطابخ معيارية",
        description: "خزائن وأسطح وتجهيزات تُطوّر وفق المساحة وطريقة استخدامها والمخططات المعتمدة.",
        href: "/villas#kitchens",
      },
      {
        title: "خزائن وغرف ملابس",
        description: "حلول تخزين مخصصة بإضاءة مدمجة وتفاصيل زجاجية وتجهيزات مناسبة للاستخدام اليومي.",
        href: "/villas#wardrobes",
      },
      {
        title: "تكسيات وأبواب",
        description: "أبواب وتكسيات معمارية بقشرة الخشب وبدائل الحجر وخامات متناسقة.",
        href: "/projects#joinery",
      },
      {
        title: "فلل ومساكن",
        description: "تنفيذ داخلي متكامل للمساكن الخاصة، من تطوير التصميم حتى التركيب.",
        href: "/villas",
      },
      {
        title: "مطورون وضيافة",
        description: "حزم فنية وتوريد ولوجستيات وتسليم مرحلي للبرامج الأكبر حجماً.",
        href: "/projects",
      },
    ],
  },
  inspiration: {
    eyebrow: "إلهام",
    title: "أفكار حسب المساحة",
    subtitle: "استكشف المطابخ والخزائن ومساحات المعيشة واتجاهات تصميمية مدروسة لموجزك.",
    stylesLink: "اتجاهات الأنماط",
    items: [
      {
        id: "kitchen",
        label: "مطبخ",
        title: "مطابخ معيارية",
        description:
          "خزائن وأسطح وتجهيزات مختارة، تُطوّر ثلاثيّاً وتُركّب في الموقع عبر توريفا.",
        cta: "ناقش مطبخك",
        href: "/contact?intent=design",
      },
      {
        id: "wardrobe",
        label: "خزائن",
        title: "غرف ملابس",
        description:
          "إضاءة مدمجة وتجهيزات إغلاق هادئ ووحدات مخصصة لغرف الملابس والأجنحة الرئيسية.",
        cta: "أرسل مخططاتك",
        href: "/villas#wardrobes",
      },
      {
        id: "living",
        label: "معيشة",
        title: "معيشة وطعام",
        description:
          "جدران وسائط ورفوف ونجارة لمساحات الطعام ضمن لوحة مواد متناسقة.",
        cta: "اتجاهات الأنماط",
        href: "/styles",
      },
      {
        id: "bedroom",
        label: "نوم",
        title: "غرف نوم",
        description:
          "ألواح خلفية وطاولات جانبية وخزائن تُطوّر وفق المخطط والتشطيبات المعتمدة.",
        cta: "ناقش مساحتك",
        href: "/villas",
      },
      {
        id: "bathroom",
        label: "حمام",
        title: "تشطيبات الحمام",
        description:
          "وحدات مغاسل وخزائن مرايا وخامات مناسبة للرطوبة والاستخدام اليومي.",
        cta: "أرسل مخططاتك",
        href: "/contact",
      },
      {
        id: "hospitality",
        label: "ضيافة",
        title: "فنادق ومطاعم",
        description:
          "برامج منسّقة للردهات والأجنحة والمطاعم، مع تسليم مرحلي وتنسيق ميداني.",
        cta: "ناقش مشروعك",
        href: "/projects",
      },
    ],
  },
  waysOfLiving: {
    title: "مصمم للحياة اليومية",
    subtitle:
      "مطابخ وخزائن وحمامات ونجارة متكاملة للمنزل، تُطوّر ثلاثيّاً وتُنفّذ في الموقع.",
  },
  beforeAfter: {
    eyebrow: "عرض مشروع",
    title: "توجه بصري لنتيجة قابلة للتنفيذ",
    subtitleLine1: "تصور معماري ونجارة داخلية وأعمال خشبية لبرامج المطورين.",
    subtitleLine2: "أنتجت شركتنا الشقيقة Graphics House هذا العمل الإبداعي الخاص بالمشروع.",
    projectName: "Rafal Pavilions",
    projectCredit: "إظهار وتصميم داخلي · Graphics House",
    cta: "شاهد المشروع",
  },
  faq: {
    eyebrow: "أسئلة شائعة",
    title: "أسئلة شائعة",
    items: [
      {
        q: "ماذا تقدم توريفا من البداية للنهاية؟",
        a: "ننسّق التطوير الفني والتصنيع والتوريد ووثائق الامتثال والتركيب والتسليم وخدمة ما بعد التنفيذ المحددة بالعقد عبر فريق توريفا واحد.",
      },
      {
        q: "هل تخدمون المطورين وأصحاب الفلل؟",
        a: "نعم. نعمل مع المطورين وفرق الضيافة وملاك المساكن الخاصة، مع تكييف المسار الفني والتنفيذي وفق حجم كل مشروع.",
      },
      {
        q: "هل يوجد ضمان؟",
        a: "نعم، عندما ينص عليه العقد الموقّع. وتُحدد التغطية وفق نطاق المنتجات والتركيب، فيما تُعتمد الخامات والتجهيزات ضمن المواصفات.",
      },
      {
        q: "هل يمكن طلب عينات فيزيائية؟",
        a: "نعم. بعد فهم النطاق، يمكننا تجهيز عينات مناسبة من التشطيبات والتجهيزات لمراجعتها في مكتبك أو موقع المشروع.",
      },
      {
        q: "كيف أبدأ؟",
        a: "أرسل المخططات أو موجزاً واضحاً للمشروع. نراجع المتطلبات ثم نرتب نقاشاً حول النطاق والبرنامج والخطوات التالية.",
      },
    ],
  },
  partners: {
    title: "مواصفات لكل مشروع",
    subtitle: "تُختار أساليب التصنيع والتجهيزات ووثائق المطابقة وفق المواصفات المعتمدة لكل مشروع.",
    groups: [
      {
        label: "الإنتاج",
        description: "يتم الإنتاج وفق المخططات المعتمدة عبر شركاء تصنيع مناسبين للمواصفات.",
        items: ["اختيار مناسب للمشروع"],
      },
      {
        label: "المفصلات",
        description: "تُختار المفصلات والمسارات والتجهيزات لتلبي متطلبات الأداء والتصميم المتفق عليها.",
        items: ["تُحدد لكل مشروع"],
      },
      {
        label: "المطابقة",
        description: "يقدم المورّد المعني وثائق المنتج والاستيراد الخاصة بالمشروع.",
        items: ["موثقة من المصدر"],
      },
    ],
  },
  sampleKit: {
    title: "راجع الخامات بوضوح",
    subtitle:
      "بعد وضوح النطاق، نجهز مراجع مناسبة للتشطيبات والتجهيزات لمراجعة مدروسة.",
    button: "أرسل المخططات",
  },
  valueOffers: {
    eyebrow: "لماذا توريفا",
    title: "مسار مدروس نحو التسليم",
    subtitle:
      "تصميم مكاني وتجربة وتنفيذ، تتكامل حول موجز واضح.",
    items: [
      {
        icon: "warranty",
        title: "خدمة محددة بعد التسليم",
        points: [
          "تغطية المنتجات والتركيب محددة في عقد المشروع.",
          "إغلاق منظم للملاحظات وتسليم ومتابعة محلية.",
        ],
      },
      {
        icon: "quality",
        title: "جودة محددة بالمواصفات",
        points: [
          "تصنيع وفق المخططات المعتمدة، مع اعتماد العينات قبل الإنتاج.",
          "تُختار درجات الألواح والتشطيبات والتجهيزات وفق المواصفات المعتمدة.",
        ],
      },
      {
        icon: "design",
        title: "تصميم قابل للتنفيذ",
        points: [
          "تساعد المراجعة ثلاثية الأبعاد على تنسيق المساحة والخامات والتفاصيل قبل التصنيع.",
          "تُطوّر الحلول وفق المخطط قبل بدء الإنتاج.",
        ],
      },
      {
        icon: "service",
        title: "تنفيذ منسّق",
        points: [
          "رفع مساحي وتنسيق توريد ووثائق امتثال وتركيب تحت مسؤول توريفا واحد.",
          "لوجستيات مرحلية للفلل والمجمعات وبرامج المطورين.",
        ],
      },
    ],
    cta: "ناقش مشروعك",
    ctaHref: "/contact",
  },
};

export function getLuxuryPlatformMessages(locale: Locale): LuxuryPlatformMessages {
  return locale === "ar" ? ar : en;
}
