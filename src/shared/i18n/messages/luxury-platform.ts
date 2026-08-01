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
      brand: "graphicsHouse" | "oppein" | "turriva";
      badge: string;
      title: string;
      points: readonly string[];
    }[];
    ctaB2b: string;
    ctaB2c: string;
    ctaB2bHref: string;
    ctaB2cHref: string;
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
      { icon: "build", label: "Local engineering & field execution · Turriva" },
      { icon: "design", label: "Architectural design & 3D studio heritage" },
      { icon: "factory", label: "Global manufacturing partnership · Powered by OPPEIN" },
    ],
  },
  ecosystem: {
    eyebrow: "What Turriva delivers",
    title: "The Turriva system: three pillars from drawing to handover",
    subtitle:
      "Architectural design depth, automated global manufacturing, and Saudi field engineering, one integrated platform that solves contractor fragmentation, design-reality gaps, and weak warranty.",
    pillars: [
      {
        brand: "turriva",
        badge: "Local engineering & field execution",
        title: "Laser survey, supply, and full local warranty",
        points: [
          "End-to-end field management: laser as-built surveys, customs clearance, SASO/SABER compliance.",
          "Installation by specialist engineers and technicians, local warranty with fast spare-parts support.",
        ],
      },
      {
        brand: "graphicsHouse",
        badge: "Design & visualization studio",
        title: "3D design with 100% site alignment",
        points: [
          "Plans become high-fidelity 3D and VR models using factory-approved engineering blocks.",
          "Eliminates the gap between render and reality, full customization to your exact floor plan.",
        ],
      },
      {
        brand: "oppein",
        badge: "Global manufacturing · Powered by OPPEIN",
        title: "Automated quality & German production tech",
        points: [
          "World-scale automated lines with German HOMAG cutting at 0.1 mm precision.",
          "E0/ENF formaldehyde-free boards and laser edge-banding engineered for humidity resistance.",
        ],
      },
    ],
    ctaB2b: "Request project catalog & pricing",
    ctaB2c: "Book a plan review & sample session",
    ctaB2bHref: "/projects",
    ctaB2cHref: "/contact?intent=sample",
  },
  comparison: {
    eyebrow: "Why Turriva",
    title: "Traditional market vs. the Turriva integrated system",
    traditionalHeader: "Traditional approach",
    turrivaHeader: "Turriva integrated",
    rows: [
      {
        traditional: "Three separate parties: designer, factory, installer, blame shifts everywhere",
        turriva: "One accountable platform from approved drawing to keys",
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
          "Custom cabinetry, countertops, and premium hardware from OPPEIN, visualized in 3D and installed on site by Turriva.",
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
    title: "From visualization to build-ready reality",
    subtitleLine1: "Architectural 3D, interior joinery, and woodwork on developer programmes.",
    subtitleLine2: "From approved visualization through manufacturing to site execution.",
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
        a: "Architectural 3D design, OPPEIN-sourced modular joinery, import compliance, and local installation with warranty, one integrated system.",
      },
      {
        q: "Do you serve developers and villa owners?",
        a: "Yes. Use /projects for B2B programmes and /villas for private residences. Both paths share the same manufacturing and execution backbone.",
      },
      {
        q: "Is there a warranty?",
        a: "We provide local warranty on products and installation. OPPEIN hardware and board specs meet international E0 and factory QC standards.",
      },
      {
        q: "Can I request physical material samples?",
        a: "Yes, order a sample kit and book a drawing review session. We ship finishes and hardware references to your office or villa.",
      },
      {
        q: "How do I start?",
        a: "Send your floor plan for a design review and sample kit, or submit a B2B brief on /projects for a formal proposal.",
      },
    ],
  },
  partners: {
    title: "Standards & partners",
    subtitle: "Global manufacturing and hardware, cleared for Saudi compliance before anything reaches your site.",
    groups: [
      {
        label: "Manufacturing",
        description: "Factory-scale production and precision cutting",
        items: ["OPPEIN", "HOMAG"],
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
      "An integrated fit-out platform that combines architectural design, global manufacturing, and Saudi field execution. A clear path from approved drawings to handover, not theoretical promises.",
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
          "Automated OPPEIN production at 0.1 mm precision on every module.",
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
          "Laser survey, import compliance, and installation under one platform.",
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
      { icon: "build", label: "هندسة وتنفيذ محلي · توريفا" },
      { icon: "design", label: "استوديو تصميم معماري وإظهار ثلاثي الأبعاد" },
      { icon: "factory", label: "شراكة تصنيع عالمية · Powered by OPPEIN" },
    ],
  },
  ecosystem: {
    eyebrow: "ما تقدمه توريفا",
    title: "منظومة توريفا: قوة ثلاثية تضمن نجاح مشروعك من المخطط إلى التسليم",
    subtitle:
      "نجمع بين إبداع التصميم المعماري، دقة التصنيع الأوتوماتيكي العالمي، والاحترافية الهندسية في التنفيذ الميداني داخل المملكة، لحل تشتت المقاولين، وفجوة التصميم عن الواقع، وضعف الضمان.",
    pillars: [
      {
        brand: "turriva",
        badge: "الهندسة والتنفيذ المحلي",
        title: "رفع مساحي، توريد، وضمان محلي شامل",
        points: [
          "إدارة ميدانية كاملة: رفع المقاسات بالليزر، التخليص الجمركي وإصدار شهادات المطابقة (SASO/SABER).",
          "تركيب بأيدي مهندسين وفنيين متخصصين مع ضمان محلي شامل وسرعة توفير قطع الغيار.",
        ],
      },
      {
        brand: "graphicsHouse",
        badge: "استوديو التصميم والإظهار",
        title: "تصميم ثلاثي الأبعاد بمطابقة واقعية 100%",
        points: [
          "تحويل المخططات إلى مجسمات 3D و VR بدقة فائقة باستخدام البلوكات الهندسية المعتمدة للمصنع.",
          "إلغاء الفجوة بين صورة التصميم والواقع الميداني، مع إمكانية التخصيص الكامل حسب مساحة مشروعك.",
        ],
      },
      {
        brand: "oppein",
        badge: "التصنيع العالمي · Powered by OPPEIN",
        title: "جودة أوتوماتيكية وتقنيات إنتاج ألمانية",
        points: [
          "تصنيع في أضخم خطوط إنتاج أوتوماتيكية عالمياً باستخدام ماكينات HOMAG الألمانية بدقة قطع 0.1 مم.",
          "خامات صديقة للبيئة وخالية من الفرمالدهيد (معيار E0/ENF)، وتقنيات تقفيل الحواف بالليزر المقاومة للرطوبة.",
        ],
      },
    ],
    ctaB2b: "اطلب كتالوج المشاريع وعرض الأسعار",
    ctaB2c: "احجز جلسة مراجعة المخططات والعينات",
    ctaB2bHref: "/projects",
    ctaB2cHref: "/contact?intent=sample",
  },
  comparison: {
    eyebrow: "لماذا توريفا",
    title: "السوق التقليدي مقابل منظومة توريفا الموحدة",
    traditionalHeader: "الطريقة التقليدية",
    turrivaHeader: "منظومة توريفا",
    rows: [
      {
        traditional: "تشتت بين 3 أطراف: مصمم، مصنع، فني تركيب، واللوم يتنقل",
        turriva: "جهة واحدة مسؤولة من المخطط المعتمد حتى التسليم",
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
        description: "تسعير MOQ، SLA للمخططات، لوجستيات وتسليم مرحلي.",
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
          "خزائن مخصصة وكونترتوب ومفصلات فاخرة من OPPEIN، إظهار ثلاثي الأبعاد وتركيب ميداني عبر توريفا.",
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
          "برامج جماعية للردهات والأجنحة والمطاعم، تسعير MOQ وتسليم مرحلي وتنسيق ميداني.",
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
    title: "من الإظهار المعماري إلى واقع قابل للتنفيذ",
    subtitleLine1: "إظهار ثلاثي الأبعاد، نجارة داخلية، وخشبيات، نماذج لمشاريع مطورين.",
    subtitleLine2: "من التصور المعتمد مروراً بالتصنيع إلى التنفيذ الميداني.",
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
        a: "تصميم 3D معماري، تشطيبات معيارية من OPPEIN، امتثال جمركي، وتركيب محلي بضمان، منظومة واحدة.",
      },
      {
        q: "هل تخدمون المطورين وأصحاب الفلل؟",
        a: "نعم. صفحة المشاريع للـ B2B وصفحة الفلل للأفراد، نفس العمود الفقري للتصنيع والتنفيذ.",
      },
      {
        q: "هل يوجد ضمان؟",
        a: "ضمان محلي على المنتج والتركيب. مواصفات OPPEIN و E0 وفحص المصنع وفق معايير دولية.",
      },
      {
        q: "هل يمكن طلب عينات فيزيائية؟",
        a: "نعم، اطلب حقيبة عينات وجلسة مراجعة مخططات. نرسل تشطيبات ومفصلات إلى موقعك.",
      },
      {
        q: "كيف أبدأ؟",
        a: "أرسل مخططك لمراجعة التصميم وطلب العينات، أو قدّم ملف B2B في صفحة المشاريع لعرض سعر رسمي.",
      },
    ],
  },
  partners: {
    title: "معايير وشركاء",
    subtitle: "تصنيع عالمي ومفصلات فاخرة، مع امتثال سعودي كامل قبل وصول أي شحنة إلى موقعك.",
    groups: [
      {
        label: "التصنيع",
        description: "إنتاج مصنعي وتقطيع بدقة صناعية",
        items: ["OPPEIN", "HOMAG"],
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
    title: "ما الذي يقدمه لك توريفا",
    subtitle:
      "منصة تأثيث متكاملة تجمع التصميم المعماري، التصنيع العالمي، والتنفيذ الميداني في المملكة. مسار واضح من المخطط المعتمد إلى التسليم، لا وعود نظرية.",
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
          "إنتاج أوتوماتيكي بدقة 0.1 مم عبر OPPEIN في كل وحدة.",
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
          "جهة واحدة من الرفع المساحي حتى التركيب والتسليم.",
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
