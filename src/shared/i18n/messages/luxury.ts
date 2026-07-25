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
    servicesLine: string;
    tags: readonly string[];
    ctaPrimary: string;
    ctaSecondary: string;
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
    sponsoredBy: string;
  };
  pages: {
    interiorDesign: { title: string; intro: string };
    construction: { title: string; intro: string };
    ourWork: { title: string; intro: string };
    about: { title: string; intro: string };
    contact: { title: string; intro: string; formName: string; formEmail: string; formMessage: string; formSubmit: string };
  };
};

const en: LuxuryMessages = {
  brand: { name: "Turriva Real Estate", tagline: "Decor & Contracting" },
  nav: {
    home: "HOME",
    interiorDesign: "FIXED INTERIOR DECOR",
    construction: "CONTRACTING",
    ourWork: "OUR WORK",
    about: "ABOUT",
    contact: "CONTACT",
  },
  hero: {
    eyebrow: "Saudi Arabia · Decor & contracting",
    title: "Spaces finished to live in, sell from, and open on time",
    subtitle:
      "Turriva designs and builds fixed interior decor and contracting for villas, palaces, retail, and exhibition booths — one team from approved materials to site handover in Jeddah and Makkah.",
    servicesLine: "Interior · Facades · Booths",
    tags: ["Fixed interior", "Facades", "Exhibition booths", "Jeddah & Makkah"],
    ctaPrimary: "Request a consultation",
    ctaSecondary: "Explore our work",
  },
  intro: {
    eyebrow: "The Turriva standard",
    title: "Gallery-quality finishing, built for real sites",
    body:
      "Global luxury brands win trust with material honesty and room stories you can picture yourself in. Turriva brings that same discipline to contracting: curated finishes, documented approvals, and crews who install what was signed off — not a cheaper substitute on site.",
  },
  stats: {
    items: [
      { value: "15+", label: "Years in decor & fit-out" },
      { value: "200+", label: "Residential & retail scopes" },
      { value: "1 team", label: "Design, supply & site delivery" },
      { value: "Jeddah · Makkah", label: "Western Region focus" },
    ],
  },
  execution: {
    badge: "On-site execution",
    title: "Drawings are the start — handover is the product",
    subtitle:
      "We supply joinery, stone, lighting, and FF&E, then coordinate trades until the space matches your approved boards. Seasonal booths get the same rigour as permanent villas.",
    points: [
      "Material boards and samples before procurement",
      "Shop drawings aligned with architectural sets",
      "Dedicated site supervision through snag and handover",
    ],
    cta: "Discuss your project",
  },
  capabilities: {
    eyebrow: "Scope",
    title: "Four pillars of fixed decor we deliver",
    items: [
      {
        title: "Residential interiors",
        description:
          "Majlis, living, bedrooms, and kitchens — millwork, stone, lighting, and styling installed as one coordinated scope.",
      },
      {
        title: "Retail & hospitality",
        description:
          "Showrooms, boutiques, and F&B fronts built for footfall, brand presence, and durable daily use.",
      },
      {
        title: "Facades & exterior character",
        description:
          "Villa and commercial envelopes with consistent detailing from street to entry lobby.",
      },
      {
        title: "Exhibition & brand booths",
        description:
          "Fast programmes for fairs and activations — fabrication, install, and strike with premium finish.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Three ways owners and brands work with us",
    items: [
      {
        title: "Fixed interior decor",
        description:
          "End-to-end interior finishing for villas, apartments, palaces, and majlis — concept, procurement, and installation.",
        cta: "Interior decor",
        href: "/interior-design",
      },
      {
        title: "Premium contracting",
        description:
          "Trade coordination, QA on finishes, and documented handover for high-value residential and commercial builds.",
        cta: "Contracting",
        href: "/construction",
      },
      {
        title: "Booths & exhibitions",
        description:
          "Campaign-ready stands — design, build, on-site styling, and dismantle when the season ends.",
        cta: "Start a brief",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "Why Turriva",
    title: "What premium decor clients expect — applied on site",
    items: [
      {
        title: "Curated materials",
        description: "Wood, marble, metal, and textiles selected for how they age in Saudi climate and use.",
      },
      {
        title: "Human-led design",
        description: "Senior designers shape each project — no generic catalogue pasted onto your floor plan.",
      },
      {
        title: "Buildable documentation",
        description: "Teams receive drawings and schedules they can execute without guesswork.",
      },
      {
        title: "Clear consultation first",
        description: "We scope timeline, budget bands, and trades before you commit to construction.",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Recent atmospheres we built",
    subtitle: "Representative interiors and retail environments — replace with owned photography as projects publish.",
    cta: "View full portfolio",
    items: [
      { title: "Coastal villa living", category: "Residential · Jeddah" },
      { title: "Boutique showroom", category: "Retail · Makkah region" },
      { title: "Contemporary majlis", category: "Residential · Western Region" },
    ],
  },
  process: {
    eyebrow: "Method",
    title: "A straight path from brief to keys",
    steps: [
      {
        title: "Discovery",
        description: "Site walk or brief — programme, style direction, and budget bands agreed upfront.",
      },
      {
        title: "Design & samples",
        description: "Layouts, material boards, and approvals locked before major procurement.",
      },
      {
        title: "Fabrication & site",
        description: "Workshop output and on-site trades managed under one Turriva programme.",
      },
      {
        title: "Handover",
        description: "Snagging, styling, and documentation so you can move in or open doors.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Client notes",
    title: "Quiet confidence after handover",
    items: [
      {
        quote:
          "The majlis and shop wing arrived exactly as we signed on the material board — no last-minute swaps.",
        author: "Private client",
        role: "Villa & retail · Jeddah",
      },
      {
        quote:
          "Our fair booth had a forty-eight-hour install window. The finish felt permanent, not temporary.",
        author: "Brand marketing lead",
        role: "Exhibition · Makkah region",
      },
    ],
  },
  cta: {
    title: "Tell us about your space",
    subtitle:
      "Share your villa, palace, store, or booth brief — we reply with scope, timeline, and the right team within one business day.",
    button: "Contact Turriva",
  },
  footer: {
    about:
      "Turriva Real Estate is a Saudi decor and contracting company — fixed finishing for villas, apartments, palaces and shops, plus advertising booths and exhibitions in Jeddah and Makkah.",
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
    sponsoredBy: "Turriva Real Estate is powered by",
  },
  pages: {
    interiorDesign: {
      title: "Fixed interior decor",
      intro:
        "Permanent finishing for villas, apartments, palaces, shops, and majlis — from concept to installation in Jeddah and Makkah.",
    },
    construction: {
      title: "Premium contracting",
      intro:
        "Turriva Real Estate coordinates trades, protects finishes, and delivers handover for high-end residential and retail projects.",
    },
    ourWork: {
      title: "Our work",
      intro:
        "Selected interior, facade, and exhibition projects finished by Turriva teams across the Western Region and central KSA.",
    },
    about: {
      title: "About Turriva Real Estate",
      intro:
        "A Saudi decor and contracting company — we design and build premium spaces with fixed finishing and real materials on site.",
    },
    contact: {
      title: "Contact Turriva Real Estate",
      intro: "Request a consultation for fixed decor, contracting, or your next booth and exhibition build.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Tell us about your project (villa, shop, booth…)",
      formSubmit: "Send message",
    },
  },
};

const ar: LuxuryMessages = {
  brand: { name: "توريفا العقارية", tagline: "للديكور والمقاولات" },
  nav: {
    home: "الرئيسية",
    interiorDesign: "ديكور داخلي ثابت",
    construction: "المقاولات",
    ourWork: "أعمالنا",
    about: "من نحن",
    contact: "تواصل",
  },
  hero: {
    eyebrow: "السعودية · ديكور ومقاولات",
    title: "مساحات تُشغَّل وتُباع وتُفتَح في موعدها",
    subtitle:
      "توريفا العقارية تصمّم وتنفّذ الديكور الثابت والمقاولات للفلل والقصور والمحلات وبوث المعارض — فريق واحد من اعتماد الخامات حتى التسليم في الموقع بجدة ومكة.",
    servicesLine: "داخلي · واجهات · بوث",
    tags: ["تشطيب داخلي ثابت", "واجهات", "بوث معارض", "جدة ومكة"],
    ctaPrimary: "اطلب استشارة",
    ctaSecondary: "استكشف أعمالنا",
  },
  intro: {
    eyebrow: "معيار توريفا",
    title: "تشطيب بجودة معرض — مبني لموقع حقيقي",
    body:
      "العلامات العالمية الراقية تكسب الثقة بالخامات الصادقة وصور مساحات يتخيلها العميل. توريفا تطبّق ذلك في المقاولات: تشطيبات مختارة، اعتمادات موثّقة، وفرق تركّب ما وُقّع عليه — لا بديل أرخص في الموقع.",
  },
  stats: {
    items: [
      { value: "+15", label: "عامًا في الديكور والتشطيب" },
      { value: "+200", label: "نطاق سكني وتجاري" },
      { value: "فريق واحد", label: "تصميم وتوريد وتنفيذ" },
      { value: "جدة · مكة", label: "تركيز المنطقة الغربية" },
    ],
  },
  execution: {
    badge: "تنفيذ ميداني",
    title: "المخططات بداية — التسليم هو المنتج",
    subtitle:
      "نوفر النجارة والحجر والإضاءة والأثاث، وننسّق التخصصات حتى تطابق المساحة لوحات الاعتماد. البوث الموسمية بنفس انضباط الفلل الدائمة.",
    points: [
      "لوحات خامات وعينات قبل الشراء",
      "shop drawings متوافقة مع المخطط المعماري",
      "إشراف موقع حتى الملاحظات والتسليم",
    ],
    cta: "ناقش مشروعك",
  },
  capabilities: {
    eyebrow: "نطاق العمل",
    title: "أربعة محاور للديكور الثابت",
    items: [
      {
        title: "تشطيبات سكنية",
        description:
          "مجلس ومعيشة وغرف نوم ومطابخ — نجارة وحجر وإضاءة وتنسيق ضمن عقد واحد.",
      },
      {
        title: "تجزئة وضيافة",
        description:
          "صالات عرض ومحلات ومطاعم — حضور للعلامة ومتانة للاستخدام اليومي.",
      },
      {
        title: "واجهات وهوية خارجية",
        description:
          "أغلفة فلل وتجارية بتفاصيل متسقة من الشارع إلى المدخل.",
      },
      {
        title: "معارض وبوث علامات",
        description:
          "برامج سريعة للفعاليات — تصنيع وتركيب وتفكيك بجودة تشطيب عالية.",
      },
    ],
  },
  services: {
    eyebrow: "الخدمات",
    title: "ثلاث طرق للتعاون معنا",
    items: [
      {
        title: "ديكور داخلي ثابت",
        description:
          "تشطيب متكامل للفلل والشقق والقصور والمجالس — من المفهوم إلى التركيب.",
        cta: "الديكور الداخلي",
        href: "/interior-design",
      },
      {
        title: "مقاولات فاخرة",
        description:
          "تنسيق trades وضبط جودة التشطيبات وتسليم موثّق للمشاريع عالية القيمة.",
        cta: "المقاولات",
        href: "/construction",
      },
      {
        title: "بوث ومعارض",
        description:
          "ستاندات جاهزة للحملة — تصميم وبناء وتنسيق في الموقع ثم التفكيك.",
        cta: "ابدأ الموجز",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "لماذا توريفا",
    title: "ما يتوقعه عميل الديكور الراقي — على أرض الواقع",
    items: [
      {
        title: "خامات مختارة",
        description: "خشب ورخام ومعدن ومنسوجات تُختار لعمرها في المناخ والاستخدام السعودي.",
      },
      {
        title: "تصميم بقيادة بشرية",
        description: "مصممون كبار لكل مشروع — لا قوالب جاهزة على مخططك.",
      },
      {
        title: "وثائق قابلة للبناء",
        description: "فرق الموقع تستلم رسومات وجداول تنفّذها دون تخمين.",
      },
      {
        title: "استشارة واضحة أولًا",
        description: "نحدّد الزمن ونطاق الميزانية والتخصصات قبل الدخول في التنفيذ.",
      },
    ],
  },
  projects: {
    eyebrow: "معرض الأعمال",
    title: "أجواء حديثة نفّذناها",
    subtitle: "نماذج تمثيلية للداخل والتجزئة — استبدلها بتصوير مشاريعكم عند النشر.",
    cta: "المعرض الكامل",
    items: [
      { title: "معيشة فيلا ساحلية", category: "سكني · جدة" },
      { title: "صالة عرض بوتيك", category: "تجزئة · مكة" },
      { title: "مجلس معاصر", category: "سكني · المنطقة الغربية" },
    ],
  },
  process: {
    eyebrow: "المنهج",
    title: "مسار واضح من الموجز إلى التسليم",
    steps: [
      {
        title: "استكشاف",
        description: "زيارة موقع أو موجز — البرنامج والاتجاه الجمالي ونطاق الميزانية.",
      },
      {
        title: "تصميم وعينات",
        description: "مخططات ولوحات خامات واعتمادات قبل الشراء الكبير.",
      },
      {
        title: "ورشة وموقع",
        description: "إنتاج الورشة والتخصصات في الموقع ضمن برنامج توريفا واحد.",
      },
      {
        title: "تسليم",
        description: "ملاحظات وتنسيق ووثائق لتسكن أو تفتح أبوابك.",
      },
    ],
  },
  testimonials: {
    eyebrow: "من العملاء",
    title: "ثقة هادئة بعد التسليم",
    items: [
      {
        quote:
          "المجلس والجناح التجاري وصلا كما وقّعنا على لوحة الخامات — دون استبدالات في اللحظة الأخيرة.",
        author: "عميل خاص",
        role: "فيلا وتجزئة · جدة",
      },
      {
        quote:
          "نافذة تركيب البوث كانت ثمان وأربعين ساعة. التشطيب بدا دائمًا لا موسميًا.",
        author: "مسؤول تسويق",
        role: "معرض · مكة",
      },
    ],
  },
  cta: {
    title: "حدّثنا عن مساحتك",
    subtitle:
      "شاركنا موجز الفيلا أو القصر أو المحل أو البوث — نرد بالنطاق والجدول والفريق المناسب خلال يوم عمل.",
    button: "تواصل مع توريفا",
  },
  footer: {
    about:
      "توريفا العقارية شركة سعودية للديكور والمقاولات — تشطيبات ثابتة للفلل والشقق والقصور والمحلات، وديكور إعلاني للبوث والمعارض في جدة ومكة المكرمة.",
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
    sponsoredBy: "توريفا العقارية برعاية",
  },
  pages: {
    interiorDesign: {
      title: "ديكور داخلي ثابت",
      intro:
        "تشطيب دائم للفلل والشقق والقصور والمحلات والمجالس — من المفهوم إلى التركيب في جدة ومكة.",
    },
    construction: {
      title: "مقاولات فاخرة",
      intro:
        "تنسّق توريفا العقارية التخصصات وتحمي التشطيبات وتسلّم المشاريع السكنية والتجارية الراقية.",
    },
    ourWork: {
      title: "أعمالنا",
      intro: "مشاريع داخلية وواجهات ومعارض مختارة نفّذها فريق توريفا في المنطقة الغربية ووسط المملكة.",
    },
    about: {
      title: "عن توريفا العقارية",
      intro:
        "شركة سعودية للديكور والمقاولات — نصمّم وننفّذ مساحات فاخرة بتشطيبات ثابتة ومواد حقيقية في الموقع.",
    },
    contact: {
      title: "تواصل مع توريفا العقارية",
      intro: "اطلب استشارة للديكور الثابت أو المقاولات أو بناء بوث ومعرض قادم.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "أخبرنا عن مشروعك (فيلا، محل، بوث…)",
      formSubmit: "إرسال الرسالة",
    },
  },
};


export function getLuxuryMessages(locale: Locale): LuxuryMessages {
  return locale === "ar" ? ar : en;
}

/** Editorial interior photography — high-res Unsplash (swap for owned assets). */
const IMG_Q = "auto=format&fit=crop&q=90";
export const LUXURY_IMAGES = {
  hero: "/brand/luxury/hero-villa.jpg",
  intro: `https://images.unsplash.com/photo-1600210492493-3d8c3f6e3f3a?${IMG_Q}&w=1600`,
  execution: `https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?${IMG_Q}&w=1600`,
  interior: `https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?${IMG_Q}&w=1400`,
  construction: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?${IMG_Q}&w=1400`,
  fitout: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${IMG_Q}&w=1400`,
  cap1: `https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?${IMG_Q}&w=900`,
  cap2: `https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?${IMG_Q}&w=900`,
  cap3: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${IMG_Q}&w=900`,
  cap4: `https://images.unsplash.com/photo-1600047509358-9dc75507daeb?${IMG_Q}&w=900`,
  project1: `https://images.unsplash.com/photo-1600585154526-990dced4db0d?${IMG_Q}&w=1200`,
  project2: `https://images.unsplash.com/photo-1618210243602-43df858682a7?${IMG_Q}&w=1200`,
  project3: `https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?${IMG_Q}&w=1200`,
  project4: `https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?${IMG_Q}&w=1200`,
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
