import type { Locale } from "../locale";
import {
  getLuxuryPlatformMessages,
  type LuxuryPlatformMessages,
} from "./luxury-platform";

export type LuxuryMessages = LuxuryPlatformMessages & {
  brand: { name: string; tagline: string };
  nav: {
    home: string;
    villas: string;
    projects: string;
    design3d: string;
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
    servicesLine: string;
    tags: readonly string[];
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSample: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  stats: {
    items: readonly { value: string; label: string }[];
  };
  execution: {
    badge: string;
    title: string;
    subtitle: string;
    points: readonly string[];
    cta: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    items: readonly { title: string; description: string }[];
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
    subtitle: string;
    cta: string;
    items: readonly { title: string; category: string }[];
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
    solutionsLinks: string;
    offices: string;
    countries: {
      saudiArabia: string;
      oman: string;
      bahrain: string;
      egypt: string;
    };
    contact: string;
    callNow: string;
    followUs: string;
    affiliation: string;
    affiliationLink: string;
    affiliationSuffix: string;
    legalNotice: string;
    privacy: string;
    terms: string;
    address: string;
    email: string;
    phone: string;
    sponsoredBy: string;
  };
  pages: {
    interiorDesign: { title: string; intro: string };
    construction: { title: string; intro: string };
    ourWork: { title: string; intro: string };
    about: { title: string; intro: string };
    contact: {
      title: string;
      intro: string;
      formName: string;
      formEmail: string;
      formPhone: string;
      formProjectType: string;
      formMessage: string;
      formSubmit: string;
      formSuccess: string;
      formError: string;
      projectTypes: readonly { value: string; label: string }[];
    };
    villas: {
      title: string;
      intro: string;
      steps: readonly { title: string; description: string }[];
      ctaDesign: string;
      ctaContact: string;
    };
    projects: {
      title: string;
      intro: string;
      highlights: readonly { title: string; description: string }[];
      formTitle: string;
      formCompany: string;
      formUnits: string;
      formProducts: string;
      formSubmit: string;
      productOptions: readonly { value: string; label: string }[];
    };
    design: { title: string; intro: string };
    styles: {
      title: string;
      intro: string;
      disclaimer: string;
      filters: {
        all: string;
        italian: string;
        french: string;
        contemporary: string;
        minimal: string;
      };
      cta: string;
      items: readonly {
        id: string;
        category: "italian" | "french" | "contemporary" | "minimal";
        title: string;
        description: string;
        materials: string;
      }[];
    };
  };
};

const en: LuxuryMessages = {
  ...getLuxuryPlatformMessages("en"),
  brand: { name: "Turriva", tagline: "Integrated fit-out platform" },
  nav: {
    home: "HOME",
    villas: "VILLAS",
    projects: "PROJECTS",
    design3d: "Design consultation",
    interiorDesign: "INTERIOR DESIGN",
    construction: "DELIVERY & BUILD",
    ourWork: "OUR WORK",
    about: "ABOUT",
    contact: "CONTACT",
  },
  hero: {
    eyebrow: "Saudi Arabia · Design · OPPEIN supply · Local execution",
    title: "An integrated system to design, supply, and deliver premium spaces",
    subtitle:
      "We unite architectural 3D precision, automated global manufacturing through OPPEIN, and Turriva engineering on the ground — so developers and villa owners get one accountable partner from drawing to handover.",
    servicesLine: "Kitchens · Wardrobes · Joinery · Villas · Projects",
    tags: ["3D design", "OPPEIN supply", "Local install", "B2B & villas"],
    ctaPrimary: "Book design consultation",
    ctaSecondary: "B2B project catalog",
    ctaSample: "Request sample kit",
  },
  intro: {
    eyebrow: "How we work",
    title: "Design that reads the room — execution that respects your name",
    body:
      "Leading decor brands earn trust by showing real materials and believable spaces. We do the same for Gulf homes and businesses: contemporary lines, warm hospitality, and details that suit majlis life as well as modern living. One studio from concept and samples to site teams and handover — with open updates so you are never guessing.",
  },
  stats: {
    items: [
      { value: "3D", label: "Factory-aligned design studio" },
      { value: "OPPEIN", label: "Global manufacturing partner" },
      { value: "1 team", label: "Survey through warranty" },
      { value: "SASO", label: "Local compliance & install" },
    ],
  },
  execution: {
    badge: "Design & site delivery",
    title: "The drawing is a promise — the handover is our reputation",
    subtitle:
      "Joinery, stone, lighting, and furnishings are procured against approved boards. Trades are coordinated on site until the space matches what you signed. Exhibition builds follow the same care as a family villa.",
    points: [
      "Samples and sign-off before we order at scale",
      "Execution drawings aligned with your architect",
      "Site lead through snagging, styling, and keys",
    ],
    cta: "Talk to our team",
  },
  capabilities: {
    eyebrow: "What we deliver",
    title: "Four disciplines, one coherent vision",
    items: [
      {
        title: "Villas & palaces",
        description:
          "Majlis, dining, bedrooms, and kitchens — contemporary Gulf character with materials chosen for daily use and Saudi climate.",
      },
      {
        title: "Retail & hospitality",
        description:
          "Boutiques, showrooms, and guest-facing spaces that carry your brand and stand up to real footfall.",
      },
      {
        title: "Facades & arrival",
        description:
          "Street presence and entry sequences for villas and commercial buildings — consistent from gate to lobby.",
      },
      {
        title: "Exhibitions & brand spaces",
        description:
          "Fair booths and activations: design, build, install, and dismantle on tight show calendars.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Where clients start with Turriva",
    items: [
      {
        title: "Interior design & decor",
        description:
          "Layout, materials, lighting, and styling for villas, apartments, palaces, and majlis — from first sketch to installation.",
        cta: "Interior design",
        href: "/interior-design",
      },
      {
        title: "Project delivery on site",
        description:
          "Trade coordination, quality checks, and documented handover so finishes survive the build programme intact.",
        cta: "Delivery & build",
        href: "/construction",
      },
      {
        title: "Exhibition & booth builds",
        description:
          "Campaign-ready stands: concept, fabrication, on-site dressing, and strike when the event ends.",
        cta: "Send a brief",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "Why Turriva",
    title: "Disciplined quality, considered service",
    items: [
      {
        title: "Contemporary, place-aware design",
        description: "A global design language adapted to Gulf hospitality and daily life — never a template lifted from elsewhere.",
      },
      {
        title: "Materials you can trust",
        description: "Wood, stone, metal, and textiles specified for how they look on day one and perform over years.",
      },
      {
        title: "One accountable team",
        description: "Designers and site leads who stay with your file — fewer handoffs, clearer decisions.",
      },
      {
        title: "Commitment through handover",
        description: "Precise scope, regular updates, and closed snagging lists before we sign off the space.",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "From 3D approval to installed reality",
    subtitle:
      "Modular kitchens, wardrobes, and joinery for villas, compounds, and hospitality — documented before and after handover.",
    cta: "Full portfolio",
    items: [
      { title: "Villa kitchen · OPPEIN modular", category: "Residential · Jeddah" },
      { title: "Walk-in wardrobe suite", category: "Residential · Makkah" },
      { title: "Developer tower joinery batch", category: "B2B · Western Region" },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "From first meeting to handover",
    steps: [
      {
        title: "Listen & brief",
        description: "We visit or workshop your needs — lifestyle, programme, and how you measure success.",
      },
      {
        title: "Design & approve",
        description: "Concepts, layouts, and material boards for your sign-off before major spend.",
      },
      {
        title: "Build & coordinate",
        description: "Workshop and site under one Turriva programme with regular progress updates.",
      },
      {
        title: "Handover & care",
        description: "Snagging, final styling, and walk-through so you move in or open with confidence.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Clients",
    title: "When design, supply, and install align",
    items: [
      {
        quote:
          "The 3D kitchen matched what arrived — same finishes, same dimensions. One team from approval to installation, with no blame game between designer and installer.",
        author: "Private client",
        role: "Villa · Jeddah",
      },
      {
        quote:
          "For our compound batch, shop drawings and delivery phases were clear. Turriva handled import and site teams — we tracked units, not excuses.",
        author: "Development manager",
        role: "B2B · Western Region",
      },
    ],
  },
  cta: {
    title: "Ready for a factory-aligned design review?",
    subtitle:
      "Request a sample kit, book a 3D session, or send your B2B floor plan. We respond within one business day.",
    button: "Talk to Turriva",
  },
  footer: {
    about:
      "Turriva — integrated fit-out platform in Saudi Arabia: architectural 3D, OPPEIN modular supply, and local engineering from survey to warranty.",
    quickLinks: "Quick Links",
    importantLinks: "Important Links",
    servicesLinks: "Services",
    solutionsLinks: "Solutions",
    offices: "Offices",
    countries: {
      saudiArabia: "Saudi Arabia",
      oman: "Oman",
      bahrain: "Bahrain",
      egypt: "Egypt",
    },
    contact: "Contact",
    callNow: "Call now",
    followUs: "Follow us",
    affiliation: "Turriva is part of",
    affiliationLink: "Graphics House Co",
    affiliationSuffix:
      " — the dedicated fit-out and contracting arm for decor and interior execution.",
    legalNotice: "© 2026 Turriva. All rights reserved | CR: 7054412114 | VAT: 314808998900003",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    address: "Jeddah, Al-Zahra District, Saudi Arabia",
    email: "hello@turriva.co",
    phone: "+966 50 278 6513",
    sponsoredBy: "Turriva integrated fit-out platform",
  },
  pages: {
    interiorDesign: {
      title: "Interior design & decor",
      intro:
        "Contemporary interiors for villas, palaces, apartments, and majlis in Jeddah and Makkah — concept, materials, and installation with Turriva designers and site teams.",
    },
    construction: {
      title: "Delivery & build on site",
      intro:
        "Turriva coordinates trades, protects approved finishes, and delivers handover documentation for residential and commercial programmes.",
    },
    ourWork: {
      title: "Our work",
      intro:
        "Selected modular kitchens, wardrobes, and joinery programmes — each documented from approved 3D through installation and handover.",
    },
    about: {
      title: "About Turriva",
      intro:
        "Turriva is the master brand for an integrated fit-out system — design visualization, OPPEIN manufacturing access, and Saudi field execution under one accountable platform.",
    },
    contact: {
      title: "Contact Turriva",
      intro: "Request a sample kit, 3D session, or share your project brief.",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone / WhatsApp",
      formProjectType: "Project type",
      formMessage: "Tell us about your project",
      formSubmit: "Send request",
      formSuccess: "Thank you — we will contact you within one business day.",
      formError: "Something went wrong. Please try again or WhatsApp us.",
      projectTypes: [
        { value: "villa", label: "Private villa" },
        { value: "developer", label: "Developer / B2B project" },
        { value: "hospitality", label: "Hotel / hospitality" },
        { value: "sample", label: "Sample kit request" },
        { value: "other", label: "Other" },
      ],
    },
    villas: {
      title: "Villas & private residences",
      intro:
        "A Livspace-grade journey for luxury homes — free 3D visualization, OPPEIN kitchens and wardrobes, and Turriva installation with local warranty.",
      steps: [
        { title: "3D design session", description: "Upload your plan or book a visit — factory-module layouts in days." },
        { title: "Samples & sign-off", description: "Physical finishes and hardware references before we order." },
        { title: "Manufacture & import", description: "Automated OPPEIN production with SASO / SABER clearance." },
        { title: "Install & warranty", description: "Laser-verified install and local after-sales support." },
      ],
      ctaDesign: "Start 3D design",
      ctaContact: "Book villa consultation",
    },
    projects: {
      title: "Developers & B2B projects",
      intro:
        "Oppein-grade supply for multi-unit programmes — competitive direct pricing without showroom overhead, shop drawings SLA, and phased logistics.",
      highlights: [
        { title: "MOQ & volume pricing", description: "Structured discounts for residential towers, compounds, and hospitality batches." },
        { title: "Shop drawings SLA", description: "Execution drawings aligned to factory modules within agreed timelines." },
        { title: "Customs & storage", description: "Import, SASO / SABER, and staged delivery to your programme." },
        { title: "Site teams", description: "Turriva supervisors through snagging and handover documentation." },
      ],
      formTitle: "Request B2B proposal",
      formCompany: "Company / developer name",
      formUnits: "Approx. units or area (sqm)",
      formProducts: "Products needed",
      formSubmit: "Submit B2B brief",
      productOptions: [
        { value: "kitchens", label: "Kitchens" },
        { value: "wardrobes", label: "Wardrobes" },
        { value: "doors", label: "Doors & panels" },
        { value: "whole", label: "Whole-house solution" },
      ],
    },
    design: {
      title: "Design consultation",
      intro: "Share your floor plan — our studio team prepares factory-aligned layouts and a sample review session. No online uploads required.",
    },
    styles: {
      title: "Style directions",
      intro:
        "Italian, French, and contemporary whole-home palettes — reference boards for veneers, lacquers, stone-look panels, and joinery we can specify and deliver on your plan.",
      disclaimer:
        "Illustrative references for material direction and spatial quality — not a product catalogue. Your project is fully custom to approved drawings.",
      filters: {
        all: "All",
        italian: "Italian",
        french: "French",
        contemporary: "Contemporary",
        minimal: "Minimal",
      },
      cta: "Book a style review",
      items: [
        {
          id: "italian-polynesia-house",
          category: "italian",
          title: "Italian · warm wood veneer",
          description: "Whole-home programme — living, dining, and built-ins in natural veneer with soft neutral walls.",
          materials: "Wood veneer · integrated lighting · stone-look accents",
        },
        {
          id: "italian-polynesia-kitchen",
          category: "italian",
          title: "Italian · island kitchen",
          description: "Central island layout with wood fronts and concealed storage — suited to open villa plans.",
          materials: "Wood cabinetry · quartz worktop · premium hardware",
        },
        {
          id: "italian-sylva-house",
          category: "italian",
          title: "Italian · dark wood suite",
          description: "Rich timber palette across living zones — strong lines with layered ambient light.",
          materials: "Dark wood veneer · metal trim · feature wall panels",
        },
        {
          id: "italian-sylva-kitchen",
          category: "italian",
          title: "Italian · grey & timber kitchen",
          description: "Two-tone kitchen combining grey lacquer with dark wood — high contrast for large kitchens.",
          materials: "Lacquer · wood veneer · under-cabinet lighting",
        },
        {
          id: "italian-titian",
          category: "italian",
          title: "Italian · gloss accent kitchen",
          description: "Bold high-gloss fronts with refined hardware — for statement entertaining spaces.",
          materials: "High-gloss lacquer · soft-close systems · island seating",
        },
        {
          id: "french-sicily",
          category: "french",
          title: "French · elegant cream",
          description: "Soft cream palette with classical proportion — living, dining, and bedroom coordination.",
          materials: "Painted fronts · brass details · moulded panels",
        },
        {
          id: "contemporary-tahiti",
          category: "contemporary",
          title: "Contemporary · cream & white oak",
          description: "Light whole-house scheme — open planning with oak warmth and clean sightlines.",
          materials: "White oak · matte lacquer · integrated handles",
        },
        {
          id: "contemporary-golden-years",
          category: "contemporary",
          title: "Contemporary · warm white & walnut",
          description: "Living and dining joinery with walnut feature walls — ideal for family villas.",
          materials: "Walnut veneer · warm white lacquer · TV wall system",
        },
        {
          id: "contemporary-seville",
          category: "contemporary",
          title: "Contemporary · walnut & grey",
          description: "Balanced neutral kitchen with island — light walnut paired with warm grey tones.",
          materials: "Walnut · grey lacquer · waterfall edge option",
        },
        {
          id: "minimal-urban-glow",
          category: "minimal",
          title: "Minimal · white & gold accent",
          description: "Crisp minimalist kitchen with subtle metallic highlights — for urban apartments and penthouses.",
          materials: "Matte white · brushed gold trim · handle-less fronts",
        },
      ],
    },
  },
};

const ar: LuxuryMessages = {
  ...getLuxuryPlatformMessages("ar"),
  brand: { name: "توريفا", tagline: "منصة تأثيث متكاملة" },
  nav: {
    home: "الرئيسية",
    villas: "الفلل",
    projects: "المشاريع",
    design3d: "استشارة تصميم",
    interiorDesign: "التصميم الداخلي",
    construction: "التنفيذ في الموقع",
    ourWork: "أعمالنا",
    about: "من نحن",
    contact: "تواصل",
  },
  hero: {
    eyebrow: "السعودية · تصميم · توريد OPPEIN · تنفيذ محلي",
    title: "منظومة متكاملة لتصميم وتوريد وتنفيذ المساحات الفاخرة",
    subtitle:
      "نجمع بين دقة التصميم المعماري ثلاثي الأبعاد، التصنيع الأوتوماتيكي العالمي عبر OPPEIN، والهندسة الميدانية لتوريفا — جهة واحدة مسؤولة من المخطط حتى التسليم للمطورين وأصحاب الفلل.",
    servicesLine: "مطابخ · خزائن · تكسيات · فلل · مشاريع",
    tags: ["تصميم 3D", "توريد OPPEIN", "تركيب محلي", "B2B وفلل"],
    ctaPrimary: "احجز استشارة تصميم",
    ctaSecondary: "كتالوج مشاريع B2B",
    ctaSample: "اطلب حقيبة العينات",
  },
  intro: {
    eyebrow: "منهجنا",
    title: "تصميم يقرأ أسلوب حياتك… وتنفيذ يحترم اسمك",
    body:
      "العلامات الرائدة في الديكور تبني الثقة عبر خامات حقيقية ومساحات مقنعة. نطبّق ذلك على المشاريع السكنية والتجارية: خطوط معاصرة، ضيافة راقية، وتفاصيل تناسب المجلس والمعيشة اليومية. استوديو واحد من المفهوم والعينات إلى فرق الموقع والتسليم — مع متابعة شفافة في كل مرحلة.",
  },
  stats: {
    items: [
      { value: "3D", label: "استوديو تصميم بمقاسات المصنع" },
      { value: "OPPEIN", label: "شريك تصنيع عالمي" },
      { value: "فريق واحد", label: "من الرفع المساحي حتى الضمان" },
      { value: "SASO", label: "امتثال وتركيب محلي" },
    ],
  },
  execution: {
    badge: "تصميم وتسليم ميداني",
    title: "التصميم التزام… والتسليم سمعتنا",
    subtitle:
      "تُورد النجارة والحجر والإضاءة والأثاث وفق لوحات الاعتماد. تُنسَّق التخصصات في الموقع حتى تطابق المساحة الموافقات المعتمدة. أجنحة المعارض تُدار بمعايير لا تقل عن المشاريع السكنية.",
    points: [
      "عينات واعتماد قبل أي شراء بالجملة",
      "رسومات تنفيذ متوافقة مع فريق المشروع",
      "إشراف ميداني حتى إغلاق الملاحظات والتسليم",
    ],
    cta: "تواصل مع الفريق",
  },
  capabilities: {
    eyebrow: "مجالاتنا",
    title: "أربعة محاور… رؤية واحدة",
    items: [
      {
        title: "فلل وقصور",
        description:
          "مجلس وضيافة وغرف نوم ومطابخ — طابع خليجي معاصر وخامات تُختار للاستخدام اليومي ومناخ المملكة.",
      },
      {
        title: "تجزئة وضيافة",
        description:
          "محلات وصالات عرض ومساحات استقبال الزوار — حضور للعلامة ومتانة أمام الزحام الحقيقي.",
      },
      {
        title: "واجهات ومداخل",
        description:
          "حضور الشارع وتسلسل الدخول للفلل والمباني التجارية — من البوابة إلى الردهة.",
      },
      {
        title: "معارض ومساحات العلامات",
        description:
          "أجنحة وفعاليات: تصميم وتصنيع وتركيب وإزالة ضمن جداول المعارض.",
      },
    ],
  },
  services: {
    eyebrow: "الخدمات",
    title: "مسارات التعاون مع توريفا",
    items: [
      {
        title: "التصميم الداخلي والديكور",
        description:
          "توزيع وخامات وإضاءة وتنسيق للفلل والشقق والقصور والمجالس — من المفهوم الأول إلى التركيب.",
        cta: "التصميم الداخلي",
        href: "/interior-design",
      },
      {
        title: "تنفيذ المشروع في الموقع",
        description:
          "تنسيق التخصصات وضبط الجودة وتوثيق التسليم، للحفاظ على التشطيبات المعتمدة حتى اكتمال البرنامج.",
        cta: "التنفيذ في الموقع",
        href: "/construction",
      },
      {
        title: "أجنحة المعارض",
        description:
          "مساحات عرض جاهزة للفعاليات: تصميم وتصنيع وتركيب ميداني، ثم إزالة منظمة بعد انتهاء الحدث.",
        cta: "اطلب عرضاً",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "لماذا توريفا",
    title: "معايير رفيعة… وخدمة تليق بمشروعك",
    items: [
      {
        title: "رؤية معاصرة للمساحات",
        description: "لغة تصميم عالمية تُكيَّف لتفاصيل الإقامة والضيافة في المملكة — دون قوالب جاهزة.",
      },
      {
        title: "خامات موثوقة",
        description: "خشب وحجر ومعدن وأقمشة تُختار لمظهرها اليوم ولأدائها على مدى السنوات.",
      },
      {
        title: "فريق واحد متتابع",
        description: "مصممون ومسؤولون ميدانيون يتابعون ملف مشروعك — قرارات أوضح وتسليمات أقل.",
      },
      {
        title: "التزام حتى التسليم",
        description: "نطاق محدد بدقة، تواصل منتظم، وإغلاق كامل للملاحظات قبل التسليم النهائي.",
      },
    ],
  },
  projects: {
    eyebrow: "معرض الأعمال",
    title: "من اعتماد 3D إلى واقع منفّذ",
    subtitle:
      "مطابخ وخزائن وتشطيبات معيارية للفلل والمجمعات والضيافة — موثّقة قبل وبعد التسليم.",
    cta: "كل الأعمال",
    items: [
      { title: "مطبخ فيلا · OPPEIN", category: "سكني · جدة" },
      { title: "غرفة ملابس walk-in", category: "سكني · مكة" },
      { title: "دفعة joinery برج سكني", category: "B2B · الغربية" },
    ],
  },
  process: {
    eyebrow: "مراحل العمل",
    title: "من أول لقاء إلى التسليم",
    steps: [
      {
        title: "نستمع ونفهم",
        description: "زيارة أو ورشة عمل — أسلوب حياتك، الجدول، وكيف تقيس نجاح المشروع.",
      },
      {
        title: "تصميم واعتماد",
        description: "أفكار ومخططات ولوحات خامات لاعتمادك قبل أي التزام مالي كبير.",
      },
      {
        title: "بناء وتنسيق",
        description: "ورشة وموقع ضمن برنامج توريفا واحد مع تحديثات دورية.",
      },
      {
        title: "تسليم ومتابعة",
        description: "ملاحظات وتنسيق نهائي وجولة تسليم قبل الاستلام أو الافتتاح.",
      },
    ],
  },
  testimonials: {
    eyebrow: "عملاؤنا",
    title: "حين يتوافق التصميم والتوريد والتركيب",
    items: [
      {
        quote:
          "مطبخ الـ 3D طابق ما وصل — نفس التشطيبات ونفس المقاسات. فريق واحد من الاعتماد حتى التركيب، بلا لوم بين مصمم ومورد ومُركّب.",
        author: "عميل خاص",
        role: "فيلا · جدة",
      },
      {
        quote:
          "في دفعة المجمع، المخططات التنفيذية والتسليم المرحلي كانا واضحين. توريفا تولّت الاستيراد وفرق الموقع — نتابع الوحدات لا الأعذار.",
        author: "مدير تطوير",
        role: "B2B · الغربية",
      },
    ],
  },
  cta: {
    title: "جاهز لمراجعة مخططاتك بمقاسات المصنع؟",
    subtitle:
      "اطلب حقيبة العينات، احجز جلسة 3D، أو أرسل مخطط مشروع B2B. نرد خلال يوم عمل.",
    button: "تواصل مع توريفا",
  },
  footer: {
    about:
      "توريفا — منصة تأثيث متكاملة في السعودية: إظهار معماري 3D، توريد معياري OPPEIN، وهندسة ميدانية من الرفع المساحي حتى الضمان.",
    quickLinks: "روابط سريعة",
    importantLinks: "أهم الروابط",
    servicesLinks: "الخدمات",
    solutionsLinks: "الحلول",
    offices: "مكاتبنا",
    countries: {
      saudiArabia: "السعودية",
      oman: "سلطنة عُمان",
      bahrain: "مملكة البحرين",
      egypt: "مصر",
    },
    contact: "تواصل معنا",
    callNow: "اتصل الآن",
    followUs: "تابعنا على:",
    affiliation: "توريفا جزء من",
    affiliationLink: "Graphics House Co",
    affiliationSuffix: " — الذراع التنفيذي للديكور والمقاولات والتشطيبات الداخلية في المملكة.",
    legalNotice: "© 2026 Turriva. All rights reserved | CR: 7054412114 | VAT: 314808998900003",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    address: "جدة، حي الزهراء، المملكة العربية السعودية",
    email: "hello@turriva.co",
    phone: "+966 50 278 6513",
    sponsoredBy: "منصة توريفا للتأثيث المتكامل",
  },
  pages: {
    interiorDesign: {
      title: "التصميم الداخلي والديكور",
      intro:
        "داخليات معاصرة للفلل والقصور والشقق والمجالس في جدة ومكة — من المفهوم والخامات إلى التركيب مع مصممي وفرق توريفا.",
    },
    construction: {
      title: "التنفيذ في الموقع",
      intro:
        "تنسّق توريفا التخصصات، تحمي التشطيبات المعتمدة، وتسلّم مشروعك بتوثيق واضح للسكني والتجاري.",
    },
    ourWork: {
      title: "أعمالنا",
      intro:
        "نماذج من فلل ومشاريع تجارية نفّذتها توريفا — من التصميم ثلاثي الأبعاد إلى التوريد والتسليم في الموقع.",
    },
    about: {
      title: "عن توريفا",
      intro:
        "توريفا العلامة الرئيسية لمنظومة تأثيث متكاملة — إظهار 3D، توريد OPPEIN، وتنفيذ ميداني سعودي تحت منصة واحدة.",
    },
    contact: {
      title: "تواصل مع توريفا",
      intro: "اطلب حقيبة العينات، جلسة 3D، أو شاركنا ملخص مشروعك.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formPhone: "الجوال / واتساب",
      formProjectType: "نوع المشروع",
      formMessage: "أخبرنا عن مشروعك",
      formSubmit: "إرسال الطلب",
      formSuccess: "شكراً — سنتواصل خلال يوم عمل.",
      formError: "حدث خطأ. جرّب مرة أخرى أو راسلنا على واتساب.",
      projectTypes: [
        { value: "villa", label: "فيلا خاصة" },
        { value: "developer", label: "مطور / مشروع B2B" },
        { value: "hospitality", label: "فندق / ضيافة" },
        { value: "sample", label: "طلب حقيبة عينات" },
        { value: "other", label: "أخرى" },
      ],
    },
    villas: {
      title: "الفلل والمساكن الخاصة",
      intro:
        "رحلة تأثيث فاخرة — تصور 3D مجاني، مطابخ وخزائن OPPEIN، وتركيب توريفا بضمان محلي.",
      steps: [
        { title: "جلسة تصميم 3D", description: "ارفع مخططك أو احجز زيارة — تخطيطات بمقاسات المصنع." },
        { title: "عينات واعتماد", description: "تشطيبات ومفصلات فيزيائية قبل أمر التصنيع." },
        { title: "تصنيع واستيراد", description: "إنتاج OPPEIN أوتوماتيكي مع SASO / SABER." },
        { title: "تركيب وضمان", description: "تركيب بالليزر ودعم ما بعد البيع محلياً." },
      ],
      ctaDesign: "ابدأ تصميم 3D",
      ctaContact: "احجز استشارة فيلا",
    },
    projects: {
      title: "المطورون ومشاريع B2B",
      intro:
        "توريد بمواصفات Oppein للمشاريع متعددة الوحدات — أسعار مباشرة دون أعباء معارض، SLA للمخططات، ولوجستيات مرحلية.",
      highlights: [
        { title: "تسعير MOQ", description: "خصومات هيكلية للأبراج والمجمعات والضيافة." },
        { title: "SLA للمخططات", description: "مخططات تنفيذ متوافقة مع وحدات المصنع." },
        { title: "جمارك وتخزين", description: "استيراد SASO / SABER وتسليم مرحلي." },
        { title: "فرق موقع", description: "إشراف توريفا حتى الملاحظات والتسليم." },
      ],
      formTitle: "طلب عرض B2B",
      formCompany: "اسم الشركة / المطور",
      formUnits: "عدد الوحدات أو المساحة (م²)",
      formProducts: "المنتجات المطلوبة",
      formSubmit: "إرسال ملخص B2B",
      productOptions: [
        { value: "kitchens", label: "مطابخ" },
        { value: "wardrobes", label: "خزائن" },
        { value: "doors", label: "أبواب وتكسيات" },
        { value: "whole", label: "حل منزل كامل" },
      ],
    },
    design: {
      title: "استشارة تصميم",
      intro: "شاركنا مخططك — فريق الاستوديو يُعد تخطيطات متوافقة مع المصنع وجلسة مراجعة للعينات. بدون رفع صور أونلاين.",
    },
    styles: {
      title: "اتجاهات الأنماط",
      intro:
        "لوحات إيطالية وفرنسية ومعاصرة للمنزل الكامل — مراجع للقشور والlacquer وتكسيات بديل الرخام والنجارة التي نحدّدها وننفّذها على مخططك.",
      disclaimer:
        "مراجع توضيحية لجودة الخامات والمساحة — وليست كتالوج منتجات. مشروعك مخصص بالكامل وفق المخططات المعتمدة.",
      filters: {
        all: "الكل",
        italian: "إيطالي",
        french: "فرنسي",
        contemporary: "معاصر",
        minimal: "بسيط",
      },
      cta: "احجز مراجعة نمط",
      items: [
        {
          id: "italian-polynesia-house",
          category: "italian",
          title: "إيطالي · قشرة خشب دافئة",
          description: "برنامج منزل كامل — معيشة وطعام ونجارة مدمجة بقشرة طبيعية وجدران محايدة.",
          materials: "قشرة خشب · إضاءة مدمجة · لمسات بديل رخام",
        },
        {
          id: "italian-polynesia-kitchen",
          category: "italian",
          title: "إيطالي · مطبخ جزيرة",
          description: "تخطيط جزيرة مركزية بواجهات خشبية وتخزين مخفي — يناسب الفلل المفتوحة.",
          materials: "خزائن خشب · كونترتوب · مفصلات فاخرة",
        },
        {
          id: "italian-sylva-house",
          category: "italian",
          title: "إيطالي · خشب داكن",
          description: "لوحة خشبية غنية في zones المعيشة — خطوط قوية مع إضاءة محيطية متعددة الطبقات.",
          materials: "قشرة خشب داكن · حواف معدنية · تكسيات جدار",
        },
        {
          id: "italian-sylva-kitchen",
          category: "italian",
          title: "إيطالي · مطبخ رمادي وخشب",
          description: "مطبخ ثنائي اللون يجمع lacquer رمادي مع خشب داكن — تباين عالٍ للمطابخ الكبيرة.",
          materials: "Lacquer · قشرة خشب · إضاءة تحت الخزائن",
        },
        {
          id: "italian-titian",
          category: "italian",
          title: "إيطالي · لمعان جريء",
          description: "واجهات lacquer لامعة مع مفصلات ر refined — لمساحات استقبال مميزة.",
          materials: "Lacquer لامع · soft-close · جلسة جزيرة",
        },
        {
          id: "french-sicily",
          category: "french",
          title: "فرنسي · كريم أنيق",
          description: "لوحة كريمية ناعمة بنسب كلاسيكية — تنسيق معيشة وطعام وغرف نوم.",
          materials: "واجهات مطلية · تفاصيل نحاس · ألواح زخرفية",
        },
        {
          id: "contemporary-tahiti",
          category: "contemporary",
          title: "معاصر · كريم وبلوط أبيض",
          description: "مخطط منزل فاتح — فتحات واسعة مع دفء البلوط وخطوط نظيفة.",
          materials: "بلوط أبيض · lacquer مطفي · مقابض مدمجة",
        },
        {
          id: "contemporary-golden-years",
          category: "contemporary",
          title: "معاصر · أبيض دافئ وجوز",
          description: "نجارة معيشة وطعام مع جدران جوز — مناسب للفلل العائلية.",
          materials: "قشرة جوز · lacquer أبيض دافئ · جدار تلفزيون",
        },
        {
          id: "contemporary-seville",
          category: "contemporary",
          title: "معاصر · جوز ورمادي",
          description: "مطبخ محايد متوازن مع جزيرة — جوز فاتح مع رمادي دافئ.",
          materials: "جوز · lacquer رمادي · حافة waterfall اختيارية",
        },
        {
          id: "minimal-urban-glow",
          category: "minimal",
          title: "Minimal · أبيض ولمسة ذهب",
          description: "مطبخ minimal نظيف مع لمسات معدنية خفيفة — للشقق والpenthouse الحضرية.",
          materials: "أبيض مطفي · حواف ذهبية · واجهات بدون مقابض",
        },
      ],
    },
  },
};

export function getLuxuryMessages(locale: Locale): LuxuryMessages {
  return locale === "ar" ? ar : en;
}

/** Gulf-leaning interiors & architecture — Unsplash (replace with Turriva project photos). */
const IMG_Q = "auto=format&fit=crop&q=90";
export const LUXURY_IMAGES = {
  hero: "/brand/luxury/hero-villa.jpg",
  contact: "/brand/turriva/turriva-office.png",
  intro: `https://images.unsplash.com/photo-1700306692751-1fd5f2b88443?${IMG_Q}&w=1600`,
  execution: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${IMG_Q}&w=1600`,
  interior: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${IMG_Q}&w=1400`,
  construction: `https://images.unsplash.com/photo-1600047509358-9dc75507daeb?${IMG_Q}&w=1400`,
  fitout: "/brand/turriva/makkah-charter-04.jpeg",
  cap1: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${IMG_Q}&w=900`,
  cap2: "/brand/turriva/hero-turriva.png",
  cap3: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${IMG_Q}&w=900`,
  cap4: `https://images.unsplash.com/photo-1600047509358-9dc75507daeb?${IMG_Q}&w=900`,
  project1: `https://images.unsplash.com/photo-1600607687644-c7171b42498f?${IMG_Q}&w=1200`,
  project2: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${IMG_Q}&w=1200`,
  project3: `https://images.unsplash.com/photo-1700306692751-1fd5f2b88443?${IMG_Q}&w=1200`,
  project4: `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?${IMG_Q}&w=1200`,
} as const;

export const LUXURY_PROJECT_IMAGES = [
  LUXURY_IMAGES.project1,
  LUXURY_IMAGES.project2,
  LUXURY_IMAGES.project3,
] as const;

export const LUXURY_CAPABILITY_IMAGES = [
  LUXURY_IMAGES.cap1,
  LUXURY_IMAGES.cap2,
  LUXURY_IMAGES.cap3,
  LUXURY_IMAGES.cap4,
] as const;
