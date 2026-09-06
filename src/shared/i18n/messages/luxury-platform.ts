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
      { icon: "build", label: "Spatial execution & installation · Turriva" },
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
    title: "Specialists working together, with Turriva accountable for execution",
    body:
      "Turriva is the specialized spatial execution and physical delivery company within Tasami Group. It works alongside sister companies across creative, marketing, and execution disciplines. For selected projects, Graphics House may lead creative and visual development; Turriva turns the approved direction into physical reality through technical development, furnishing, fabrication, installation, and delivery.",
    flow: "Creative → Execution",
    groupLink: "Discover Tasami Group",
    companies: [
      { name: "Graphics House", role: "Creative · Visual · Experience Design" },
      { name: "Bees Motion", role: "Marketing · Content · AI" },
      { name: "Turriva", role: "Execution · Interiors · Exhibitions · Furnishing · Delivery", active: true },
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
        turriva: "Automated production at 0.1 mm precision with global standards",
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
        description: "Water-resistant cores, PET & lacquer finishes, Blum soft-close systems.",
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
        a: "We provide local warranty on products and installation. Specified hardware and board grades meet international E0 and factory QC standards.",
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
    title: "Specified components & compliance",
    subtitle: "Production technology, selected hardware, and Saudi compliance references coordinated for physical delivery.",
    groups: [
      {
        label: "Manufacturing",
        description: "Factory-scale production and precision cutting",
        items: ["HOMAG"],
      },
      {
        label: "Hardware & fittings",
        description: "Premium hinges, runners, and soft-close systems",
        items: ["Blum", "Hettich"],
      },
      {
        label: "Saudi compliance",
        description: "Board standards and product conformity for import",
        items: ["SASO", "SABER", "E0 boards"],
      },
    ],
  },
  sampleKit: {
    title: "Request a physical sample kit & drawing review",
    subtitle:
      "We send finishes, hinges, and board samples to your site, alongside a factory-aligned 3D review of your plans.",
    button: "Request sample kit",
  },
  valueOffers: {
    eyebrow: "The Turriva promise",
    title: "What Turriva delivers for your project",
    subtitle:
      "A specialized execution company that turns approved concepts into completed interiors, exhibitions, and branded environments through disciplined physical delivery.",
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
          "Automated factory production at 0.1 mm precision on every module.",
          "E0 boards plus Blum and Hettich hardware specified for daily use.",
        ],
      },
      {
        icon: "design",
        title: "Design aligned to reality",
        points: [
          "High-fidelity 3D and VR using factory-approved engineering blocks.",
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
    cta: "Request a free quote",
    ctaHref: "/contact?intent=quote",
  },
};

const ar: LuxuryPlatformMessages = {
  trustBar: {
    items: [
      { icon: "build", label: "تنفيذ المساحات والتركيب · توريفا" },
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
    title: "تخصصات تعمل معاً، وتوريفا مسؤولة عن التنفيذ",
    body:
      "توريفا هي شركة تنفيذ المساحات والتسليم الميداني المتخصصة ضمن مجموعة تسامي، وتعمل إلى جانب شركات شقيقة في مجالات الإبداع والتسويق والتنفيذ. في مشاريع مختارة، قد تتولى Graphics House التطوير الإبداعي والبصري، بينما تحوّل توريفا التوجه المعتمد إلى واقع مادي عبر التطوير الفني والتأثيث والتصنيع والتركيب والتسليم.",
    flow: "الإبداع ← التنفيذ",
    groupLink: "اكتشف مجموعة تسامي",
    companies: [
      { name: "Graphics House", role: "إبداع · تصميم بصري · تصميم تجارب" },
      { name: "Bees Motion", role: "تسويق · محتوى · ذكاء اصطناعي" },
      { name: "Turriva", role: "تنفيذ · مساحات داخلية · معارض · تأثيث · تسليم", active: true },
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
        turriva: "تصنيع أوتوماتيكي بدقة 0.1 مم وفق معايير عالمية",
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
        description: "نواة مقاومة للماء، تشطيبات PET ولاكر، أنظمة Blum.",
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
          "إضاءة مدمجة ومفصلات soft-close ووحدات بدقة المصنع، لغرف الملابس والجناح الرئيسي.",
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
        a: "نعم. صفحة المشاريع والمعارض للمطورين، وصفحة التنفيذ السكني للملاك الأفراد — نفس العمود الفقري للتصنيع والتنفيذ.",
      },
      {
        q: "هل يوجد ضمان؟",
        a: "ضمان محلي على المنتج والتركيب. مواصفات E0 وفحص المصنع وفق معايير دولية.",
      },
      {
        q: "هل يمكن طلب عينات فيزيائية؟",
        a: "نعم، اطلب حقيبة عينات وجلسة مراجعة مخططات. نرسل تشطيبات ومفصلات إلى موقعك.",
      },
      {
        q: "كيف أبدأ؟",
        a: "أرسل مخططك لمراجعة التصميم وطلب العينات، أو قدّم ملخص مشروع مطور عبر صفحة المشاريع لعرض سعر رسمي.",
      },
    ],
  },
  partners: {
    title: "المكونات المحددة ومراجع الامتثال",
    subtitle: "تقنيات إنتاج ومفصلات مختارة ومراجع امتثال سعودي تُنسّق لخدمة التسليم الميداني.",
    groups: [
      {
        label: "التصنيع",
        description: "إنتاج مصنعي وتقطيع بدقة صناعية",
        items: ["HOMAG"],
      },
      {
        label: "المفصلات والإكسسوارات",
        description: "مفصلات وسوفت-كlose من العلامات العالمية",
        items: ["Blum", "Hettich"],
      },
      {
        label: "الامتثال السعودي",
        description: "معايير الألواح ومطابقة المنتج للاستيراد",
        items: ["SASO", "SABER", "E0"],
      },
    ],
  },
  sampleKit: {
    title: "اطلب حقيبة العينات الفيزيائية وجلسة مراجعة المخططات",
    subtitle:
      "نرسل التشطيبات والمفصلات والألواح إلى موقعك، مع مراجعة 3D متوافقة مع مقاسات المصنع.",
    button: "اطلب حقيبة العينات",
  },
  valueOffers: {
    eyebrow: "وعد توريفا",
    title: "ما الذي يقدمه لك فريق توريفا",
    subtitle:
      "شركة تنفيذ متخصصة تحوّل المفاهيم المعتمدة إلى مساحات داخلية ومعارض وبيئات للعلامات عبر تسليم ميداني منضبط.",
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
          "إنتاج أوتوماتيكي بدقة 0.1 مم في كل وحدة.",
          "ألواح E0 ومفصلات Blum وHettich لاستخدام يومي متين.",
        ],
      },
      {
        icon: "design",
        title: "تصميم منتقى بعناية",
        points: [
          "إظهار 3D وVR ببلوكات هندسية معتمدة للمصنع.",
          "تخصيص كامل حسب مخططك قبل أي عملية قطع.",
        ],
      },
      {
        icon: "service",
        title: "خدمة شاملة",
        points: [
          "رفع مساحي وتنسيق توريد وامتثال وتركيب تحت مسؤول توريفا واحد.",
          "امتثال SASO/SABER ولوجستيات مرحلية للفلل والمشاريع.",
        ],
      },
    ],
    cta: "احصل على عرض سعر مجاني",
    ctaHref: "/contact?intent=quote",
  },
};

export function getLuxuryPlatformMessages(locale: Locale): LuxuryPlatformMessages {
  return locale === "ar" ? ar : en;
}
