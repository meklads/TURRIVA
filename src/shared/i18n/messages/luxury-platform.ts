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
    title: "From approved creative direction to physical delivery",
    subtitle:
      "Turriva owns the execution path: technical development, coordinated fabrication, site installation, quality control, and handover under one accountable delivery team.",
    pillars: [
      {
        badge: "01 · Technical development",
        title: "Translate concepts into build-ready scope",
        points: [
          "Site surveys, material specifications, shop drawings, mockups, and coordinated approvals.",
          "A precise bridge between the creative intent and what can be fabricated and installed.",
        ],
      },
      {
        brand: "oppein",
        badge: "02 · Fabrication & procurement",
        title: "Build, source, and quality-check every element",
        points: [
          "Coordinated joinery, finishes, fixtures, and specialist fabrication through verified supply channels.",
          "Production tracking, Saudi compliance, logistics, and staged delivery aligned to the site programme.",
        ],
      },
      {
        brand: "turriva",
        badge: "03 · Execution & handover",
        title: "Install, coordinate, and deliver the finished experience",
        points: [
          "Specialist site teams manage installation, interfaces, snagging, and final quality control.",
          "One Turriva lead remains accountable through opening, handover, and local aftercare.",
        ],
      },
    ],
    ctaB2b: "Request project catalog & pricing",
    ctaB2c: "Book a plan review & sample session",
    ctaB2bHref: "/projects",
    ctaB2cHref: "/contact?intent=sample",
  },
  brandRelationship: {
    eyebrow: "Part of Tasami Group",
    title: "Hire Turriva. The group joins only when the project needs it.",
    body:
      "Turriva designs and builds spaces and experiences. Graphics House and Bees Motion join only when the brief needs visualization or a launch. You do not have to hire the group to hire Turriva.",
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
    title: "Fragmented delivery vs. accountable execution",
    traditionalHeader: "Traditional approach",
    turrivaHeader: "Turriva execution",
    rows: [
      {
        traditional: "Three separate parties: designer, factory, installer, blame shifts everywhere",
        turriva: "One accountable Turriva team from approved concept to handover",
      },
      {
        traditional: "Large gap between pretty images and delivered product",
        turriva: "3D files feed manufacturing directly, design-to-reality alignment",
      },
      {
        traditional: "Local workshop variance, delays, and quality drift",
        turriva: "Fabrication and installation against approved drawings",
      },
      {
        traditional: "Weak warranty, who owns the defect?",
        turriva: "Local product & installation warranty with spare parts support",
      },
    ],
  },
  products: {
    eyebrow: "Solutions",
    title: "Modular interiors & joinery for homes and projects",
    items: [
      {
        title: "Modular kitchens",
        description: "Specified when the room needs them. Hardware follows the drawings, not a house catalogue.",
        href: "/villas#kitchens",
      },
      {
        title: "Wardrobes & walk-ins",
        description: "Hidden lighting, glass inserts, hydraulic fittings, full custom layouts.",
        href: "/villas#wardrobes",
      },
      {
        title: "Wall panels & doors",
        description: "Wood veneers and stone-look panels for villas and lobbies.",
        href: "/projects#joinery",
      },
      {
        title: "Villas & residences",
        description: "Full-home fit-out journey, 3D design through installation.",
        href: "/villas",
      },
      {
        title: "Developers & hospitality",
        description: "MOQ pricing, shop drawings SLA, logistics, and phased delivery.",
        href: "/projects",
      },
    ],
  },
  inspiration: {
    eyebrow: "Ideas",
    title: "Inspiration by space",
    subtitle: "Browse kitchens, wardrobes, and living spaces, or explore style directions by region, then book a design consultation.",
    stylesLink: "Style directions",
    items: [
      {
        id: "kitchen",
        label: "Kitchen",
        title: "Modular kitchens",
        description:
          "Custom cabinetry, countertops, and premium hardware, visualized in 3D and installed on site by Turriva.",
        cta: "Explore kitchens",
        href: "/contact?intent=design",
      },
      {
        id: "wardrobe",
        label: "Wardrobe",
        title: "Walk-in closets",
        description:
          "Integrated lighting, soft-close hardware, and factory-precise modules for dressing rooms and master suites.",
        cta: "Explore wardrobes",
        href: "/villas#wardrobes",
      },
      {
        id: "living",
        label: "Living",
        title: "Living & dining",
        description:
          "TV walls, shelving, and dining joinery in coordinated palettes, browse Italian, French, and contemporary style directions.",
        cta: "Explore style directions",
        href: "/styles",
      },
      {
        id: "bedroom",
        label: "Bedroom",
        title: "Bedroom suites",
        description:
          "Headboards, nightstands, and wardrobe systems matched to your floor plan and approved finish board.",
        cta: "Explore bedrooms",
        href: "/villas",
      },
      {
        id: "bathroom",
        label: "Bathroom",
        title: "Bathroom vanity",
        description:
          "Vanity units, mirror cabinets, and moisture-rated boards, specified for Saudi climate and daily use.",
        cta: "Explore bathrooms",
        href: "/contact",
      },
      {
        id: "hospitality",
        label: "Hospitality",
        title: "Hotels & F&B",
        description:
          "Bulk programmes for lobbies, suites, and restaurants, MOQ pricing, phased delivery, and site coordination.",
        cta: "Explore hospitality",
        href: "/projects",
      },
    ],
  },
  waysOfLiving: {
    title: "Different ways of living",
    subtitle:
      "Kitchens, wardrobes, bathrooms, and whole-home joinery, visualized in 3D and delivered on site across Saudi Arabia.",
  },
  beforeAfter: {
    eyebrow: "Project showcase",
    title: "Creative direction prepared for physical delivery",
    subtitleLine1: "Architectural 3D, interior joinery, and woodwork on developer programmes.",
    subtitleLine2: "A project-specific example of creative work by our sister company Graphics House.",
    projectName: "Rafal Pavilions",
    projectCredit: "Visualization & interior design · Graphics House",
    cta: "Learn more",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    items: [
      {
        q: "What does Turriva offer end-to-end?",
        a: "Technical development, fabrication and procurement coordination, import compliance, installation, handover, and local warranty under one accountable Turriva team.",
      },
      {
        q: "Do you serve developers and villa owners?",
        a: "Yes. Use Commercial & exhibitions for developer programmes and Residential for private homes. Both share the same manufacturing and execution backbone.",
      },
      {
        q: "Is there a warranty?",
        a: "Warranty follows the contract for the work we deliver. Board grade and hardware follow the specification. We do not publish a factory certificate we have not issued.",
      },
      {
        q: "Can I request physical material samples?",
        a: "Yes, order a sample kit and book a drawing review session. We ship finishes and hardware references to your office or villa.",
      },
      {
        q: "How do I start?",
        a: "Send your floor plan for a design review and sample kit, or submit a developer brief on Commercial & exhibitions for a formal proposal.",
      },
    ],
  },
  partners: {
    title: "How fabrication is specified",
    subtitle: "We do not publish a factory tolerance, and we do not present a machine brand or a conformity mark as a Turriva certificate.",
    groups: [
      {
        label: "Production",
        description: "Made to the approved drawings, with the workshop the specification requires.",
        items: ["Not claimed as a Turriva-owned line"],
      },
      {
        label: "Hardware",
        description: "Hinges and runners follow the specification. They are not a house catalogue.",
        items: ["Specified per project"],
      },
      {
        label: "Conformity",
        description: "Import and product marks stay with the supplier and the project.",
        items: ["Not a Turriva certificate"],
      },
    ],
  },
  sampleKit: {
    title: "Samples come after the scope.",
    subtitle:
      "We send finishes and hardware references after the scope is clear. This is not a quote, and not a factory certificate.",
    button: "Send the drawings",
  },
  valueOffers: {
    eyebrow: "The Turriva promise",
    title: "What Turriva delivers for your project",
    subtitle:
      "Design and execution of spaces and experiences. Execution is part of the product, not the whole identity.",
    items: [
      {
        icon: "warranty",
        title: "Trusted warranty",
        points: [
          "Local warranty on products and installation with spare-parts support.",
          "After-sales follow-through and dedicated snagging before sign-off.",
        ],
      },
      {
        icon: "quality",
        title: "Built to global standards",
        points: [
          "Fabrication against approved drawings, with samples signed off before production.",
          "Board grade and hardware follow the specification. We do not publish a factory brand as ours.",
        ],
      },
      {
        icon: "design",
        title: "Design aligned to reality",
        points: [
          "3D used to agree the room before fabrication, not as a factory certificate.",
          "Full customization to your floor plan before anything is cut.",
        ],
      },
      {
        icon: "service",
        title: "One team, end to end",
        points: [
          "Laser survey, procurement coordination, compliance, and installation under one Turriva lead.",
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
    title: "من التوجه الإبداعي المعتمد إلى التسليم على أرض الواقع",
    subtitle:
      "تتولى توريفا مسار التنفيذ: التطوير الفني، وتنسيق التصنيع، والتركيب الميداني، وضبط الجودة، والتسليم عبر فريق تنفيذ واحد مسؤول.",
    pillars: [
      {
        badge: "01 · التطوير الفني",
        title: "تحويل المفهوم إلى نطاق جاهز للتنفيذ",
        points: [
          "رفع مساحي، مواصفات خامات، مخططات تنفيذ، نماذج واعتمادات منسّقة.",
          "جسر دقيق بين الرؤية الإبداعية وما يمكن تصنيعه وتركيبه فعلياً.",
        ],
      },
      {
        brand: "oppein",
        badge: "02 · التصنيع والتوريد",
        title: "تصنيع وتوريد وفحص جودة كل عنصر",
        points: [
          "تنسيق النجارة والتشطيبات والتجهيزات والتصنيع المتخصص عبر قنوات توريد موثوقة.",
          "متابعة الإنتاج والامتثال السعودي واللوجستيات والتسليم المرحلي وفق برنامج الموقع.",
        ],
      },
      {
        brand: "turriva",
        badge: "03 · التنفيذ والتسليم",
        title: "تركيب وتنسيق وتسليم التجربة المكتملة",
        points: [
          "فرق ميدانية متخصصة تدير التركيب والتقاطعات وإغلاق الملاحظات وضبط الجودة النهائي.",
          "يبقى مسؤول توريفا جهة المحاسبة الواحدة حتى الافتتاح والتسليم وخدمة ما بعد التنفيذ.",
        ],
      },
    ],
    ctaB2b: "اطلب كتالوج المشاريع وعرض الأسعار",
    ctaB2c: "احجز جلسة مراجعة المخططات والعينات",
    ctaB2bHref: "/projects",
    ctaB2cHref: "/contact?intent=sample",
  },
  brandRelationship: {
    eyebrow: "جزء من مجموعة تسامي",
    title: "تعاقد مع توريفا. المجموعة تنضم عندما يحتاجها المشروع.",
    body:
      "توريفا تصمم وتنفذ المساحات والتجارب. جرافيكس هاوس وبيز موشن تنضمان فقط عندما يحتاج الموجز إلى تصور أو إطلاق. لا يلزم التعاقد مع المجموعة للتعاقد مع توريفا.",
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
    title: "تنفيذ مشتت مقابل مسؤولية واضحة",
    traditionalHeader: "الطريقة التقليدية",
    turrivaHeader: "منظومة توريفا",
    rows: [
      {
        traditional: "تشتت بين 3 أطراف: مصمم، مصنع، فني تركيب، واللوم يتنقل",
        turriva: "فريق توريفا واحد مسؤول من المفهوم المعتمد حتى التسليم",
      },
      {
        traditional: "فجوة كبيرة بين صورة التصميم والمنتج الواقعي",
        turriva: "ملفات 3D تُرسل للتصنيع مباشرة، مطابقة التصميم للواقع",
      },
      {
        traditional: "تأخير وتفاوت جودة في الورش المحلية",
        turriva: "تصنيع وتركيب وفق المخططات المعتمدة",
      },
      {
        traditional: "ضمان ضعيف، من يتحمل العيب؟",
        turriva: "ضمان محلي على المنتج والتركيب مع قطع غيار",
      },
    ],
  },
  products: {
    eyebrow: "الحلول",
    title: "تأثيث وتشطيبات معيارية للمنازل والمشاريع",
    items: [
      {
        title: "مطابخ معيارية",
        description: "تُحدد عندما تحتاجها الغرفة. المفصلات تتبع المخططات، لا كتالوج الدار.",
        href: "/villas#kitchens",
      },
      {
        title: "خزائن وغرف ملابس",
        description: "إضاءات مخفية، زجاج، توزيع هيدروليكي، تخطيط مخصص.",
        href: "/villas#wardrobes",
      },
      {
        title: "تكسيات وأبواب",
        description: "قشور خشب وتكسيات بديل الرخام للفلل والردهات.",
        href: "/projects#joinery",
      },
      {
        title: "فلل ومساكن",
        description: "رحلة تأثيث كاملة، من 3D حتى التركيب.",
        href: "/villas",
      },
      {
        title: "مطورون وضيافة",
        description: "تسعير بالكميات، مواعيد مخططات واضحة، لوجستيات وتسليم مرحلي.",
        href: "/projects",
      },
    ],
  },
  inspiration: {
    eyebrow: "إلهام",
    title: "أفكار حسب المساحة",
    subtitle: "استكشف المطابخ والخزائن وغرف المعيشة، أو اتجاهات الأنماط حسب المنطقة، ثم احجز استشارة تصميم.",
    stylesLink: "اتجاهات الأنماط",
    items: [
      {
        id: "kitchen",
        label: "مطبخ",
        title: "مطابخ معيارية",
        description:
          "خزائن مخصصة وكونترتوب ومفصلات فاخرة، إظهار ثلاثي الأبعاد وتركيب ميداني عبر توريفا.",
        cta: "اكتشف المطابخ",
        href: "/contact?intent=design",
      },
      {
        id: "wardrobe",
        label: "خزائن",
        title: "غرف ملابس",
        description:
          "إضاءة مدمجة ومفصلات إغلاق ناعم، لغرف الملابس والجناح الرئيسي، وفق المخططات.",
        cta: "اكتشف الخزائن",
        href: "/villas#wardrobes",
      },
      {
        id: "living",
        label: "معيشة",
        title: "معيشة وطعام",
        description:
          "جدران تلفزيون ورفوف ونجارة طعام بلوحات متناسقة، استكشف اتجاهات إيطالية وفرنسية ومعاصرة.",
        cta: "اتجاهات الأنماط",
        href: "/styles",
      },
      {
        id: "bedroom",
        label: "نوم",
        title: "غرف نوم",
        description:
          "رؤوس سرير وطاولات جانبية وخزائن متناسقة مع مخططك ولوحة التشطيبات المعتمدة.",
        cta: "اكتشف غرف النوم",
        href: "/villas",
      },
      {
        id: "bathroom",
        label: "حمام",
        title: "تشطيبات الحمام",
        description:
          "مغاسل وخزائن مرآة وألواح مقاومة للرطوبة، مواصفات مناسبة للمناخ السعودي والاستخدام اليومي.",
        cta: "اكتشف الحمامات",
        href: "/contact",
      },
      {
        id: "hospitality",
        label: "ضيافة",
        title: "فنادق ومطاعم",
        description:
          "برامج جماعية للردهات والأجنحة والمطاعم، تسعير بالكميات وتسليم مرحلي وتنسيق ميداني.",
        cta: "اكتشف الضيافة",
        href: "/projects",
      },
    ],
  },
  waysOfLiving: {
    title: "طرق مختلفة للعيش",
    subtitle:
      "مطابخ وخزائن وحمامات وتأثيث المنزل بالكامل، إظهار ثلاثي الأبعاد وتسليم ميداني في أنحاء المملكة.",
  },
  beforeAfter: {
    eyebrow: "عرض مشروع",
    title: "توجه إبداعي مُعدّ للتسليم الميداني",
    subtitleLine1: "إظهار ثلاثي الأبعاد، نجارة داخلية، وخشبيات، نماذج لمشاريع مطورين.",
    subtitleLine2: "مثال محدد على عمل إبداعي نفذته شركتنا الشقيقة Graphics House.",
    projectName: "Rafal Pavilions",
    projectCredit: "إظهار وتصميم داخلي · Graphics House",
    cta: "اعرف المزيد",
  },
  faq: {
    eyebrow: "أسئلة شائعة",
    title: "ما يتكرر سؤاله",
    items: [
      {
        q: "ماذا تقدم توريفا من البداية للنهاية؟",
        a: "تطوير فني وتنسيق تصنيع وتوريد وامتثال جمركي وتركيب وتسليم وضمان محلي تحت مسؤولية فريق توريفا واحد.",
      },
      {
        q: "هل تخدمون المطورين وأصحاب الفلل؟",
        a: "نعم. صفحة المشاريع والمعارض للمطورين، وصفحة التنفيذ السكني للملاك. العمود نفسه في التصنيع والتنفيذ.",
      },
      {
        q: "هل يوجد ضمان؟",
        a: "الضمان يتبع العقد على العمل الذي نسلّمه. درجة اللوح والمفصلات تتبع المواصفات. لا ننشر شهادة مصنع لم نصدرها.",
      },
      {
        q: "هل يمكن طلب عينات فيزيائية؟",
        a: "نعم، اطلب حقيبة عينات وجلسة مراجعة مخططات. نرسل تشطيبات ومفصلات إلى موقعك.",
      },
      {
        q: "كيف أبدأ؟",
        a: "أرسل المخططات أو صف المكان. نرد لمناقشة النطاق. التكلفة تتبع الكميات بعد المراجعة.",
      },
    ],
  },
  partners: {
    title: "كيف يُحدد التصنيع",
    subtitle: "لا ننشر رقم دقة مصنع، ولا نعرض علامة آلة أو علامة مطابقة كشهادة باسم توريفا.",
    groups: [
      {
        label: "الإنتاج",
        description: "يُصنع وفق المخططات المعتمدة، ومع الورشة التي تتطلبها المواصفات.",
        items: ["ليس خط إنتاج مملوكاً لتوريفا"],
      },
      {
        label: "المفصلات",
        description: "تتبع المواصفات. ليست كتالوج دار.",
        items: ["تُحدد لكل مشروع"],
      },
      {
        label: "المطابقة",
        description: "الاستيراد وعلامات المنتج تبقى لدى المورّد والمشروع.",
        items: ["ليست شهادة باسم توريفا"],
      },
    ],
  },
  sampleKit: {
    title: "العينات تأتي بعد وضوح النطاق.",
    subtitle:
      "نرسل مراجع التشطيب بعد وضوح النطاق. ليست عرض سعر، وليست شهادة مصنع.",
    button: "أرسل المخططات",
  },
  valueOffers: {
    eyebrow: "وعد توريفا",
    title: "ما الذي يقدمه لك فريق توريفا",
    subtitle:
      "تصميم وتنفيذ المساحات والتجارب. التنفيذ جزء من المنتج، لا الهوية كلها.",
    items: [
      {
        icon: "warranty",
        title: "ضمان موثوق",
        points: [
          "ضمان محلي على المنتج والتركيب مع توفير قطع الغيار.",
          "متابعة ما بعد التسليم وإغلاق ملاحظات قبل الاستلام.",
        ],
      },
      {
        icon: "quality",
        title: "جودة فائقة",
        points: [
          "تصنيع وفق المخططات المعتمدة، مع اعتماد العينات قبل الإنتاج.",
          "درجة اللوح والمفصلات تتبع المواصفات. ليست علامة مصنع باسم توريفا.",
        ],
      },
      {
        icon: "design",
        title: "تصميم منتقى بعناية",
        points: [
          "إظهار ثلاثي الأبعاد لاتفاق الغرفة قبل التصنيع، لا كشهادة مصنع.",
          "تخصيص كامل حسب مخططك قبل أي عملية قطع.",
        ],
      },
      {
        icon: "service",
        title: "خدمة شاملة",
        points: [
          "رفع مساحي وتنسيق توريد وامتثال وتركيب تحت مسؤول توريفا واحد.",
          "التوريد والتسليم المرحلي يتبعان البرنامج. علامات المطابقة تبقى لدى المورّد.",
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
