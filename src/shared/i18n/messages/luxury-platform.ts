/** Platform positioning copy — Livspace UX + Oppein manufacturing + Turriva execution */
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
      icon: string;
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
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
    hint: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly { q: string; a: string }[];
  };
  partners: {
    title: string;
    items: readonly string[];
  };
  sampleKit: {
    title: string;
    subtitle: string;
    button: string;
  };
};

const en: LuxuryPlatformMessages = {
  trustBar: {
    items: [
      { icon: "design", label: "Architectural design & 3D studio heritage" },
      { icon: "factory", label: "Global manufacturing partnership · Powered by OPPEIN" },
      { icon: "build", label: "Local engineering & field execution · Turriva" },
    ],
  },
  ecosystem: {
    eyebrow: "What Turriva delivers",
    title: "The Turriva system: three pillars from drawing to handover",
    subtitle:
      "Architectural design depth, automated global manufacturing, and Saudi field engineering — one integrated platform that solves contractor fragmentation, design-reality gaps, and weak warranty.",
    pillars: [
      {
        icon: "design",
        badge: "Design & visualization · Graphics House heritage",
        title: "3D design with 100% site alignment",
        points: [
          "Plans become high-fidelity 3D and VR models using factory-approved engineering blocks.",
          "Eliminates the gap between render and reality — full customization to your exact floor plan.",
        ],
      },
      {
        icon: "factory",
        badge: "Manufacturing & technology · Powered by OPPEIN",
        title: "Automated quality & German production tech",
        points: [
          "World-scale automated lines with German HOMAG cutting at 0.1 mm precision.",
          "E0/ENF formaldehyde-free boards and laser edge-banding engineered for humidity resistance.",
        ],
      },
      {
        icon: "build",
        badge: "Engineering & execution · Turriva on the ground",
        title: "Laser survey, supply, and full local warranty",
        points: [
          "End-to-end field management: laser as-built surveys, customs clearance, SASO/SABER compliance.",
          "Installation by specialist engineers and technicians — local warranty with fast spare-parts support.",
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
        traditional: "Three separate parties: designer, factory, installer — blame shifts everywhere",
        turriva: "One accountable platform from approved drawing to keys",
      },
      {
        traditional: "Large gap between pretty images and delivered product",
        turriva: "3D files feed manufacturing directly — design-to-reality alignment",
      },
      {
        traditional: "Local workshop variance, delays, and quality drift",
        turriva: "Automated production at 0.1 mm precision with global standards",
      },
      {
        traditional: "Weak warranty — who owns the defect?",
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
        description: "Full-home fit-out journey — 3D design through installation.",
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
    subtitle: "Explore kitchens, wardrobes, and living spaces — then start your 3D session.",
    items: [
      {
        id: "kitchen",
        label: "Kitchen",
        title: "Modular kitchens",
        description:
          "Custom cabinetry, countertops, and premium hardware from OPPEIN — visualized in 3D and installed on site by Turriva.",
        cta: "Explore kitchens",
        href: "/design",
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
          "TV walls, shelving, and dining joinery in one coordinated palette — from concept board to handover.",
        cta: "Explore living spaces",
        href: "/design",
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
          "Vanity units, mirror cabinets, and moisture-rated boards — specified for Saudi climate and daily use.",
        cta: "Explore bathrooms",
        href: "/contact",
      },
      {
        id: "hospitality",
        label: "Hospitality",
        title: "Hotels & F&B",
        description:
          "Bulk programmes for lobbies, suites, and restaurants — MOQ pricing, phased delivery, and site coordination.",
        cta: "Explore hospitality",
        href: "/projects",
      },
    ],
  },
  waysOfLiving: {
    title: "Different ways of living",
    subtitle:
      "Kitchens, wardrobes, bathrooms, and whole-home joinery — visualized in 3D and delivered on site across Saudi Arabia.",
  },
  beforeAfter: {
    eyebrow: "Proof",
    title: "3D concept vs. delivered project",
    subtitle: "Drag to compare the approved visualization with the finished installation.",
    beforeLabel: "3D concept",
    afterLabel: "Installed",
    hint: "Drag the handle to compare",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    items: [
      {
        q: "What does Turriva offer end-to-end?",
        a: "Architectural 3D design, OPPEIN-sourced modular joinery, import compliance, and local installation with warranty — one integrated system.",
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
        a: "Yes — order a sample kit and book a drawing review session. We ship finishes and hardware references to your office or villa.",
      },
      {
        q: "How do I start?",
        a: "Book a free 3D design session online, or submit a B2B brief with your floor plan for a formal proposal.",
      },
    ],
  },
  partners: {
    title: "Standards & partners",
    items: ["OPPEIN", "HOMAG", "Blum", "Hettich", "SASO", "SABER", "E0 boards"],
  },
  sampleKit: {
    title: "Request a physical sample kit & drawing review",
    subtitle:
      "We send finishes, hinges, and board samples to your site — alongside a factory-aligned 3D review of your plans.",
    button: "Request sample kit",
  },
};

const ar: LuxuryPlatformMessages = {
  trustBar: {
    items: [
      { icon: "design", label: "استوديو تصميم معماري وإظهار ثلاثي الأبعاد" },
      { icon: "factory", label: "شراكة تصنيع عالمية · Powered by OPPEIN" },
      { icon: "build", label: "هندسة وتنفيذ محلي · توريفا" },
    ],
  },
  ecosystem: {
    eyebrow: "ما تقدمه توريفا",
    title: "منظومة توريفا: قوة ثلاثية تضمن نجاح مشروعك من المخطط إلى التسليم",
    subtitle:
      "نجمع بين إبداع التصميم المعماري، دقة التصنيع الأوتوماتيكي العالمي، والاحترافية الهندسية في التنفيذ الميداني داخل المملكة — لحل تشتت المقاولين، وفجوة التصميم عن الواقع، وضعف الضمان.",
    pillars: [
      {
        icon: "design",
        badge: "استوديو التصميم والإظهار · Graphics House",
        title: "تصميم ثلاثي الأبعاد بمطابقة واقعية 100%",
        points: [
          "تحويل المخططات إلى مجسمات 3D و VR بدقة فائقة باستخدام البلوكات الهندسية المعتمدة للمصنع.",
          "إلغاء الفجوة بين صورة التصميم والواقع الميداني، مع إمكانية التخصيص الكامل حسب مساحة مشروعك.",
        ],
      },
      {
        icon: "factory",
        badge: "التصنيع والتقنية العالمية · Powered by OPPEIN",
        title: "جودة أوتوماتيكية وتقنيات إنتاج ألمانية",
        points: [
          "تصنيع في أضخم خطوط إنتاج أوتوماتيكية عالمياً باستخدام ماكينات HOMAG الألمانية بدقة قطع 0.1 مم.",
          "خامات صديقة للبيئة وخالية من الفرمالدهيد (معيار E0/ENF)، وتقنيات تقفيل الحواف بالليزر المقاومة للرطوبة.",
        ],
      },
      {
        icon: "build",
        badge: "الهندسة والتنفيذ المحلي · توريفا",
        title: "رفع مساحي، توريد، وضمان محلي شامل",
        points: [
          "إدارة ميدانية كاملة: رفع المقاسات بالليزر، التخليص الجمركي وإصدار شهادات المطابقة (SASO/SABER).",
          "تركيب بأيدي مهندسين وفنيين متخصصين مع ضمان محلي شامل وسرعة توفير قطع الغيار.",
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
        traditional: "تشتت بين 3 أطراف: مصمم، مصنع، فني تركيب — واللوم يتنقل",
        turriva: "جهة واحدة مسؤولة من المخطط المعتمد حتى التسليم",
      },
      {
        traditional: "فجوة كبيرة بين صورة التصميم والمنتج الواقعي",
        turriva: "ملفات 3D تُرسل للتصنيع مباشرة — مطابقة التصميم للواقع",
      },
      {
        traditional: "تأخير وتفاوت جودة في الورش المحلية",
        turriva: "تصنيع أوتوماتيكي بدقة 0.1 مم وفق معايير عالمية",
      },
      {
        traditional: "ضمان ضعيف — من يتحمل العيب؟",
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
        description: "رحلة تأثيث كاملة — من 3D حتى التركيب.",
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
    subtitle: "استكشف المطابخ والخزائن وغرف المعيشة — ثم ابدأ جلسة 3D.",
    items: [
      {
        id: "kitchen",
        label: "مطبخ",
        title: "مطابخ معيارية",
        description:
          "خزائن مخصصة وكونترتوب ومفصلات فاخرة من OPPEIN — إظهار ثلاثي الأبعاد وتركيب ميداني عبر توريفا.",
        cta: "اكتشف المطابخ",
        href: "/design",
      },
      {
        id: "wardrobe",
        label: "خزائن",
        title: "غرف ملابس",
        description:
          "إضاءة مدمجة ومفصلات soft-close ووحدات بدقة المصنع — لغرف الملابس والجناح الرئيسي.",
        cta: "اكتشف الخزائن",
        href: "/villas#wardrobes",
      },
      {
        id: "living",
        label: "معيشة",
        title: "معيشة وطعام",
        description:
          "جدران تلفزيون ورفوف ونجارة طعام بلوحة ألوان موحّدة — من لوحة المواد إلى التسليم.",
        cta: "اكتشف المعيشة",
        href: "/design",
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
          "مغاسل وخزائن مرآة وألواح مقاومة للرطوبة — مواصفات مناسبة للمناخ السعودي والاستخدام اليومي.",
        cta: "اكتشف الحمامات",
        href: "/contact",
      },
      {
        id: "hospitality",
        label: "ضيافة",
        title: "فنادق ومطاعم",
        description:
          "برامج جماعية للردهات والأجنحة والمطاعم — تسعير MOQ وتسليم مرحلي وتنسيق ميداني.",
        cta: "اكتشف الضيافة",
        href: "/projects",
      },
    ],
  },
  waysOfLiving: {
    title: "طرق مختلفة للعيش",
    subtitle:
      "مطابخ وخزائن وحمامات وتأثيث المنزل بالكامل — إظهار ثلاثي الأبعاد وتسليم ميداني في أنحاء المملكة.",
  },
  beforeAfter: {
    eyebrow: "إثبات",
    title: "مفهوم 3D مقابل مشروع منفّذ",
    subtitle: "اسحب للمقارنة بين التصور المعتمد والتركيب الفعلي.",
    beforeLabel: "تصميم 3D",
    afterLabel: "منفّذ",
    hint: "اسحب المؤشر للمقارنة",
  },
  faq: {
    eyebrow: "أسئلة شائعة",
    title: "ما يتكرر سؤاله",
    items: [
      {
        q: "ماذا تقدم توريفا من البداية للنهاية؟",
        a: "تصميم 3D معماري، تشطيبات معيارية من OPPEIN، امتثال جمركي، وتركيب محلي بضمان — منظومة واحدة.",
      },
      {
        q: "هل تخدمون المطورين وأصحاب الفلل؟",
        a: "نعم. صفحة المشاريع للـ B2B وصفحة الفلل للأفراد — نفس العمود الفقري للتصنيع والتنفيذ.",
      },
      {
        q: "هل يوجد ضمان؟",
        a: "ضمان محلي على المنتج والتركيب. مواصفات OPPEIN و E0 وفحص المصنع وفق معايير دولية.",
      },
      {
        q: "هل يمكن طلب عينات فيزيائية؟",
        a: "نعم — اطلب حقيبة عينات وجلسة مراجعة مخططات. نرسل تشطيبات ومفصلات إلى موقعك.",
      },
      {
        q: "كيف أبدأ؟",
        a: "احجز جلسة 3D مجانية أونلاين، أو أرسل ملف B2B مع المخطط لعرض سعر رسمي.",
      },
    ],
  },
  partners: {
    title: "معايير وشركاء",
    items: ["OPPEIN", "HOMAG", "Blum", "Hettich", "SASO", "SABER", "E0"],
  },
  sampleKit: {
    title: "اطلب حقيبة العينات الفيزيائية وجلسة مراجعة المخططات",
    subtitle:
      "نرسل التشطيبات والمفصلات والألواح إلى موقعك — مع مراجعة 3D متوافقة مع مقاسات المصنع.",
    button: "اطلب حقيبة العينات",
  },
};

export function getLuxuryPlatformMessages(locale: Locale): LuxuryPlatformMessages {
  return locale === "ar" ? ar : en;
}
