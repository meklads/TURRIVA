import type { Locale } from "../locale";

export type LuxuryMessages = {
  brand: { name: string; tagline: string };
  nav: {
    home: string;
    interiorDesign: string;
    construction: string;
    ourWork: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  partnership: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
    ctaLabel: string;
    ctaHref: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    items: readonly { title: string; description: string }[];
  };
  spotlight: {
    eyebrow: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    items: readonly {
      title: string;
      category: string;
      description: string;
      execution: string;
    }[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      description: string;
      cta: string;
      href: string;
    }[];
  };
  why: {
    eyebrow: string;
    title: string;
    items: readonly { title: string; description: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    cta: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: readonly { title: string; description: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: readonly { quote: string; author: string; role: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    importantLinks: string;
    servicesLinks: string;
    offices: string;
    countries: {
      saudiArabia: string;
      oman: string;
      bahrain: string;
      egypt: string;
    };
    contact: string;
    copyright: string;
    privacy: string;
    terms: string;
    address: string;
    email: string;
    phone: string;
    poweredByPrefix: string;
    poweredByLink: string;
    ghProjectLaunchLink: string;
  };
  portfolio: readonly {
    title: string;
    location: string;
    scope: string;
  }[];
  pages: {
    interiorDesign: { title: string; intro: string };
    construction: { title: string; intro: string };
    ourWork: { title: string; intro: string };
    about: { title: string; intro: string };
    contact: { title: string; intro: string; formName: string; formEmail: string; formMessage: string; formSubmit: string };
  };
};

const en: LuxuryMessages = {
  brand: { name: "TURRIVA", tagline: "FIXED DECOR · CONTRACTING" },
  nav: {
    home: "HOME",
    interiorDesign: "LUXURY FIT-OUT",
    construction: "CONTRACTING",
    ourWork: "OUR WORK",
    about: "ABOUT",
    contact: "CONTACT",
  },
  hero: {
    eyebrow: "Fixed decor & premium contracting",
    title: "Luxury fit-out\nyou can walk into.",
    subtitle:
      "Turriva Real Estate executes fixed interior decor for villas and palaces, premium contracting, and seasonal exhibition booths — with a calm luxury aesthetic and site-ready delivery across Jeddah, Makkah, and Riyadh.",
    ctaPrimary: "DISCUSS YOUR PROJECT",
    ctaSecondary: "VIEW SELECTED WORK",
  },
  partnership: {
    eyebrow: "Execution with Graphics House",
    title: "The on-site arm for fixed decor & campaign build-outs",
    body:
      "Turriva is the executive contracting arm of Graphics House for fixed interior decor and fixed advertising environments. We turn approved visual concepts into real materials, joinery, lighting, and booth structures — without turning your property into a visualization studio.",
    note:
      "When a launch needs cinematic CGI or interactive sales suites, Graphics House leads the experience layer; Turriva leads build, fit-out, and handover.",
    ctaLabel: "Graphics House ProjectLaunch™",
    ctaHref: "https://3dgraphicshouse.com/solutions/project-launch.html",
  },
  capabilities: {
    eyebrow: "What we execute",
    title: "Built for permanence — and for high-stakes seasons",
    items: [
      {
        title: "Villas & palaces",
        description:
          "Full fixed fit-out: joinery, stone, metal, lighting, and bespoke furniture — luxury residential without compromise.",
      },
      {
        title: "Premium contracting",
        description:
          "Structured delivery, trade coordination, and QC so design intent survives the construction site.",
      },
      {
        title: "Seasonal exhibitions",
        description:
          "Fixed advertising decor and booth environments for seasonal fairs and institutional showcases — installed, styled, and ready to sell.",
      },
    ],
  },
  spotlight: {
    eyebrow: "Selected context",
    title: "Enriched by Graphics House experience",
    subtitle:
      "A few launch environments from the Graphics House ecosystem — Turriva’s role is execution, materials, and on-site decor.",
    disclaimer:
      "References illustrate capability context; Turriva remains a decor and contracting company, not a visualization agency.",
    items: [
      {
        title: "Anan Eskan",
        category: "Residential launch · Riyadh",
        description:
          "A developer needed sales readiness before concrete caught up with the masterplan — unified visual language across film, model, and showroom.",
        execution:
          "Turriva-class delivery: fixed showroom decor, material continuity, and install discipline so the project reads as market-ready.",
      },
      {
        title: "Institutional exhibition environment",
        category: "Museum-grade booth · Makkah region",
        description:
          "A high-profile exhibition demanded institutional presence, large-format storytelling, and tight timelines.",
        execution:
          "Fixed decor, structural booth elements, and on-site styling — the physical layer that makes the narrative believable in minutes.",
      },
      {
        title: "Private luxury villa",
        category: "Fixed interior · Western Region",
        description:
          "Quiet luxury: warm palettes, custom joinery, and lighting layers that feel collected, not staged.",
        execution:
          "End-to-end fit-out with Turriva craftsmanship standards — the kind of finish clients expect in palace-grade residences.",
      },
    ],
  },
  services: {
    eyebrow: "OUR CRAFT",
    title: "Decor and contracting — not renders",
    items: [
      {
        title: "Fixed luxury interiors",
        description:
          "Permanent decor for villas, palaces, and private residences — materials, joinery, and lighting executed on site.",
        cta: "FIT-OUT SERVICES",
        href: "/interior-design",
      },
      {
        title: "Contracting & delivery",
        description:
          "Premium contracting with disciplined phasing, trade management, and handover that matches the design intent.",
        cta: "CONTRACTING",
        href: "/construction",
      },
      {
        title: "Exhibition & fixed advertising decor",
        description:
          "Seasonal booths, sales suites, and campaign build-outs — built to sell, then dismantled or refreshed on schedule.",
        cta: "TALK TO US",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "DELIVERY DISCIPLINE",
    title: "Palace-grade fit-out, measured on site",
    items: [
      {
        title: "Material truth",
        description:
          "Stone, veneer, and metal samples signed off before CNC and site install — no substitute finishes at handover.",
      },
      {
        title: "Trade orchestration",
        description:
          "Joinery, MEP, and stone teams sequenced with daily QC logs — the standard used on GCC luxury residential programs.",
      },
      {
        title: "Joinery & FF&E",
        description:
          "Bespoke cabinetry, integrated lighting, and furniture schedules aligned with architectural set — not catalog paste-ins.",
      },
      {
        title: "Handover packs",
        description:
          "Snag closure, maintenance notes, and as-built decor documentation so estates teams can operate the space.",
      },
    ],
  },
  projects: {
    eyebrow: "OUR WORK",
    title: "Crafting Extraordinary Spaces",
    cta: "VIEW ALL PROJECTS",
  },
  process: {
    eyebrow: "HOW WE WORK",
    title: "Four gates from brief to keys",
    steps: [
      {
        title: "Brief & survey",
        description:
          "Lifestyle interview, as-built survey, and constraint map — ceiling heights, MEP routes, and authority requirements.",
      },
      {
        title: "Design freeze",
        description:
          "Material boards, joinery shop drawings, and lighting scenes approved before a riyal hits the workshop floor.",
      },
      {
        title: "Site execution",
        description:
          "Phased fit-out with protected finishes, mock-ups for critical rooms, and weekly client walk-throughs.",
      },
      {
        title: "Styling & handover",
        description:
          "Final soft staging, commissioning, snag list, and formal handover to your household or facilities team.",
      },
    ],
  },
  testimonials: {
    eyebrow: "FIELD NOTES",
    title: "What clients repeat after handover",
    items: [
      {
        quote:
          "The majlis joinery and stone floors arrived exactly as the mock-up — rare in a 14-week program.",
        author: "Private principal",
        role: "Palace extension · Jeddah",
      },
      {
        quote:
          "Our seasonal booth had to ship, install, and sell in five days. Turriva kept the finish level of a permanent showroom.",
        author: "Institutional marketing lead",
        role: "Exhibition build · Makkah region",
      },
    ],
  },
  cta: {
    title: "Brief us on your next fit-out",
    subtitle:
      "Villas, palaces, hospitality suites, or a fixed booth for the upcoming season — share scope and programme dates.",
    button: "REQUEST A CONSULTATION",
  },
  footer: {
    about:
      "Turriva Real Estate is the Saudi fit-out and contracting arm for fixed decor — villas, palaces, hospitality suites, and seasonal exhibition environments — executed with Graphics House launch discipline.",
    quickLinks: "Quick Links",
    importantLinks: "Important Links",
    servicesLinks: "Services",
    offices: "Offices",
    countries: {
      saudiArabia: "Saudi Arabia",
      oman: "Oman",
      bahrain: "Bahrain",
      egypt: "Egypt",
    },
    contact: "Contact Us",
    copyright: "© Turriva Real Estate. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    address: "Jeddah, Al-Zahra District, Saudi Arabia",
    email: "hello@turriva.co",
    phone: "+966 50 278 6513",
    poweredByPrefix: "Turriva by",
    poweredByLink: "Graphics House",
    ghProjectLaunchLink: "ProjectLaunch™ by Graphics House",
  },
  portfolio: [
    {
      title: "Coastal villa majlis",
      location: "North Obhur · Jeddah",
      scope: "Full fixed fit-out — stone, custom joinery, integrated lighting",
    },
    {
      title: "Private dining & gallery wing",
      location: "Al Muhammadiyah · Riyadh",
      scope: "Palace-grade interiors with acoustic ceiling and art lighting",
    },
    {
      title: "Developer sales suite",
      location: "Central Riyadh",
      scope: "Permanent showroom decor tied to a residential launch",
    },
    {
      title: "Institutional exhibition booth",
      location: "Makkah region",
      scope: "Seasonal fixed advertising environment — 5-day install programme",
    },
    {
      title: "Hospitality lobby refresh",
      location: "Corniche · Jeddah",
      scope: "Marble, brass, and guest-flow joinery without closing the property",
    },
    {
      title: "Family villa — quiet luxury",
      location: "Western Region",
      scope: "Warm palettes, wardrobe walls, and layered lighting scenes",
    },
  ],
  pages: {
    interiorDesign: {
      title: "Luxury fit-out",
      intro:
        "Fixed interior decor for villas and palaces — joinery workshops, stone yards, and site teams under one Turriva programme.",
    },
    construction: {
      title: "Premium contracting",
      intro:
        "Structured GCC contracting for high-end residential and hospitality — trades coordinated, finishes protected, handover documented.",
    },
    ourWork: {
      title: "Selected execution",
      intro:
        "A cross-section of recent fit-out and booth programmes — names anonymised where required, standards never are.",
    },
    about: {
      title: "About Turriva Real Estate",
      intro:
        "Saudi specialists in fixed decor and contracting — the team that turns approved concepts into walkable luxury, backed by Graphics House launch experience.",
    },
    contact: {
      title: "Contact Us",
      intro: "Begin your luxury project with a private consultation.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Tell us about your project",
      formSubmit: "Send Message",
    },
  },
};

const ar: LuxuryMessages = {
  brand: { name: "توريفا العقارية", tagline: "ديكور ثابت · مقاولات" },
  nav: {
    home: "الرئيسية",
    interiorDesign: "التشطيب الفاخر",
    construction: "المقاولات",
    ourWork: "أعمالنا",
    about: "من نحن",
    contact: "تواصل",
  },
  hero: {
    eyebrow: "ديكور ثابت ومقاولات فاخرة",
    title: "ديكور ثابت\nتدخله وتعيشه.",
    subtitle:
      "توريفا العقارية تنفّذ الديكور الثابت للفلل والقصور، التشطيبات الفاخرة، وديكور البوث والمعارض الموسمية — بأسلوب luxury هادئ وتسليم ميداني في جدة ومكة والرياض.",
    ctaPrimary: "ناقش مشروعك",
    ctaSecondary: "أعمال مختارة",
  },
  partnership: {
    eyebrow: "التنفيذ مع Graphics House",
    title: "الذراع التنفيذي للديكور الثابت والإعلاني",
    body:
      "توريفا العقارية هي الذراع التنفيذي لـ Graphics House في الديكور الداخلي الثابت والديكور الإعلاني الثابت. نحوّل المفاهيم المعتمدة إلى خامات حقيقية، نجارة، إضاءة، وهياكل بوث — دون أن يتحول مشروعك إلى استوديو تصور.",
    note:
      "عندما يحتاج الإطلاق إلى CGI سينمائي أو صالات بيع تفاعلية، Graphics House تقود طبقة التجربة؛ توريفا تقود التنفيذ والتشطيب والتسليم.",
    ctaLabel: "ProjectLaunch™ من Graphics House",
    ctaHref: "https://3dgraphicshouse.com/solutions/project-launch.html",
  },
  capabilities: {
    eyebrow: "ماذا ننفّذ",
    title: "للثبات في الفلل — وللمواسم الحاسمة",
    items: [
      {
        title: "فلل وقصور",
        description:
          "تشطيب ثابت كامل: نجارة، حجر، معدن، إضاءة، وأثاث مخصص — سكن فاخر بلا مساومة.",
      },
      {
        title: "مقاولات فاخرة",
        description:
          "تنسيق trades ومراحل واضحة وضبط جودة حتى يصل التصميم إلى الموقع كما وُعد.",
      },
      {
        title: "معارض موسمية",
        description:
          "ديكور إعلاني ثابت وبوث للمعارض الموسمية والفعاليات — تركيب وتنسيق وجاهزية للبيع.",
      },
    ],
  },
  spotlight: {
    eyebrow: "سياق مختار",
    title: "إثراء من خبرة Graphics House",
    subtitle:
      "بيئات إطلاق من منظومة Graphics House — دور توريفا هو التنفيذ والخامات والديكور الميداني.",
    disclaimer:
      "المراجع توضّح السياق فقط؛ توريفا شركة ديكور ومقاولات وليست وكالة تصور.",
    items: [
      {
        title: "عنان إسكان",
        category: "إطلاق سكني · الرياض",
        description:
          "مطوّر يحتاج جاهزية بيع قبل أن تلحق الخرسانة بالمخطط — لغة بصرية واحدة بين الفيلم والمجسم وصالة العرض.",
        execution:
          "تنفيذ من نوع توريفا: ديكور ثابت لصالة العرض، استمرارية خامات، وانضباط تركيب يقرأ المشروع جاهزاً للسوق.",
      },
      {
        title: "بيئة معرض مؤسسية",
        category: "بوث بمعايير مؤسسية · مكة المكرمة",
        description:
          "معرض برتبة مؤسسية يتطلب حضوراً قوياً، سرداً كبيراً، وجداول زمنية ضيقة.",
        execution:
          "ديكور ثابت، عناصر بوث هيكلية، وتنسيق ميداني — الطبقة المادية التي تقنع الزائر في دقائق.",
      },
      {
        title: "فيلا فاخرة خاصة",
        category: "ديكور داخلي ثابت · المنطقة الغربية",
        description:
          "فخامة هادئة: خامات دافئة، نجارة مخصصة، وطبقات إضاءة تبدو مُجمّعة لا «مسرّحاً».",
        execution:
          "تشطيب متكامل بمعايير حرفية توريفا — تشطيب يليق بالقصور والفلل الراقية.",
      },
    ],
  },
  services: {
    eyebrow: "حرفتنا",
    title: "ديكور ومقاولات — لا معاينات فقط",
    items: [
      {
        title: "ديكور داخلي ثابت",
        description:
          "ديكور دائم للفلل والقصور — خامات ونجارة وإضاءة تُنفَّذ في الموقع.",
        cta: "خدمات التشطيب",
        href: "/interior-design",
      },
      {
        title: "مقاولات وتسليم",
        description:
          "مقاولات فاخرة بمراحل واضحة وإدارة trades وتسليم يطابق التصميم.",
        cta: "المقاولات",
        href: "/construction",
      },
      {
        title: "معارض وديكور إعلاني",
        description:
          "بوث موسمية وصالات بيع — تُبنى لتقنع العميل ثم تُفك أو تُحدَّث حسب الموسم.",
        cta: "تواصل معنا",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "انضباط التسليم",
    title: "تشطيب بمعايير القصور — مقاس ميداني",
    items: [
      {
        title: "صدق الخامات",
        description:
          "عينات الحجر والقشرة والمعدن تُعتمد قبل CNC والتركيب — بلا بدائل مخفية عند التسليم.",
      },
      {
        title: "تنسيق التخصصات",
        description:
          "نجارة وMEP وحجر بمراحل واضحة وسجل جودة يومي — كما في برامج السكن الفاخر في الخليج.",
      },
      {
        title: "نجارة وFF&E",
        description:
          "خزائن مخصصة وإضاءة مدمجة وجداول أثاث متوافقة مع المخطط المعماري — لا «لصق» كatalog.",
      },
      {
        title: "حزمة التسليم",
        description:
          "إغلاق الملاحظات، دليل صيانة، وتوثيق ديكور as-built لفرق تشغيل العقار.",
      },
    ],
  },
  projects: {
    eyebrow: "أعمالنا",
    title: "نصنع مساحات استثنائية",
    cta: "عرض كل المشاريع",
  },
  process: {
    eyebrow: "آلية العمل",
    title: "أربع محطات من الموجز إلى المفتاح",
    steps: [
      {
        title: "الموجز والمسح",
        description:
          "مقابلة أسلوب حياة، مسح as-built، وخريطة قيود — ارتفاعات، مسارات MEP، ومتطلبات الجهات.",
      },
      {
        title: "تجميد التصميم",
        description:
          "لوحات خامات، shop drawings للنجارة، ومشاهد إضاءة تُعتمد قبل صرف الريال في الورشة.",
      },
      {
        title: "تنفيذ ميداني",
        description:
          "تشطيب مرحلي مع حماية التشطيبات، mock-ups للغرف الحساسة، وجولات أسبوعية مع العميل.",
      },
      {
        title: "تنسيق وتسليم",
        description:
          "Staging نهائي، تشغيل، قائمة ملاحظات، وتسليم رسمي لأسرتك أو فريق المرافق.",
      },
    ],
  },
  testimonials: {
    eyebrow: "من الميدان",
    title: "ما يكرّره العملاء بعد التسليم",
    items: [
      {
        quote:
          "نجارة المجلس والرخام وصلت كالمock-up — نادر في برنامج 14 أسبوعاً.",
        author: "مالك خاص",
        role: "توسعة قصر · جدة",
      },
      {
        quote:
          "بوثنا الموسمي كان يجب أن يُركّب ويبيع خلال خمسة أيام. توريفا حافظت على مستوى صالة دائمة.",
        author: "مسؤول تسويق مؤسسي",
        role: "بناء معرض · مكة المكرمة",
      },
    ],
  },
  cta: {
    title: "أرسل موجز مشروعك القادم",
    subtitle:
      "فلل، قصور، أجنحة ضيافة، أو بوث ثابت للموسم القادم — شاركنا النطاق وتواريخ البرنامج.",
    button: "اطلب استشارة",
  },
  footer: {
    about:
      "توريفا العقارية — الذراع السعودي للديكور الثابت والمقاولات: فلل، قصور، ضيافة، وبيئات معارض موسمية، بانضباط إطلاق Graphics House.",
    quickLinks: "روابط سريعة",
    importantLinks: "أهم الروابط",
    servicesLinks: "الخدمات",
    offices: "مكاتبنا",
    countries: {
      saudiArabia: "السعودية",
      oman: "سلطنة عُمان",
      bahrain: "مملكة البحرين",
      egypt: "مصر",
    },
    contact: "تواصل معنا",
    copyright: "© توريفا العقارية. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    address: "جدة، حي الزهراء، المملكة العربية السعودية",
    email: "hello@turriva.co",
    phone: "+966 50 278 6513",
    poweredByPrefix: "توريفا العقارية بواسطة",
    poweredByLink: "جرافيكس هاوس",
    ghProjectLaunchLink: "ProjectLaunch™ — Graphics House",
  },
  portfolio: [
    {
      title: "مجلس فيلا ساحلية",
      location: "أبحر الشمالية · جدة",
      scope: "تشطيب ثابت كامل — حجر، نجارة مخصصة، إضاءة مدمجة",
    },
    {
      title: "جناح طعام ومعرض خاص",
      location: "المحمدية · الرياض",
      scope: "ديكور بمعايير قصر — سقف صوتي وإضاءة أعمال فنية",
    },
    {
      title: "صالة بيع مطوّر",
      location: "وسط الرياض",
      scope: "ديكور ثابت لصالة عرض مرتبط بإطلاق سكني",
    },
    {
      title: "بوث معرض مؤسسي",
      location: "مكة المكرمة",
      scope: "بيئة إعلانية موسمية — برنامج تركيب 5 أيام",
    },
    {
      title: "تجديد لوبي ضيافة",
      location: "الكورنيش · جدة",
      scope: "رخام ونحاس ونجارة تدفق ضيوف دون إغلاق المنشأة",
    },
    {
      title: "فيلا عائلية — فخامة هادئة",
      location: "المنطقة الغربية",
      scope: "لوحات دافئة، جدران خزائن، ومشاهد إضاءة متعددة الطبقات",
    },
  ],
  pages: {
    interiorDesign: {
      title: "التشطيب الفاخر",
      intro:
        "ديكور داخلي ثابت للفلل والقصور — ورش نجارة، مصانع حجر، وفرق ميدانية ضمن برنامج توريفا واحد.",
    },
    construction: {
      title: "مقاولات فاخرة",
      intro:
        "مقاولات منظمة للسكن والضيافة الراقية في الخليج — تخصصات منسّقة، تشطيبات محمية، وتسليم موثّق.",
    },
    ourWork: {
      title: "تنفيذ مختار",
      intro:
        "عيّنة من برامج التشطيب والبوث الأخيرة — أسماء مُخفّاة عند الحاجة، المعايير لا.",
    },
    about: {
      title: "عن توريفا العقارية",
      intro:
        "متخصصون سعوديون في الديكور الثابت والمقاولات — الفريق الذي يحوّل المفاهيم المعتمدة إلى فخامة قابلة للمشي، بخبرة إطلاق Graphics House.",
    },
    contact: {
      title: "تواصل معنا",
      intro: "ابدأ مشروعك الفاخر باستشارة خاصة مع فريق توريفا العقارية.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "أخبرنا عن مشروعك",
      formSubmit: "إرسال الرسالة",
    },
  },
};

export function getLuxuryMessages(locale: Locale): LuxuryMessages {
  return locale === "ar" ? ar : en;
}

/** Luxury interior photography — Unsplash (replace with owned assets in production). */
export const LUXURY_IMAGES = {
  hero: "/brand/luxury/hero-villa.jpg",
  interior:
    "https://images.unsplash.com/photo-1618221197210-72a278510744?auto=format&fit=crop&w=1200&q=85",
  construction:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  fitout:
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85",
  project1:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  project2:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
  project3:
    "https://images.unsplash.com/photo-1616137467491-cd0c3e0a1f0d?auto=format&fit=crop&w=900&q=85",
  project4:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85",
  project5:
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=85",
  project6:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
} as const;
