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
  brand: { name: "Turriva Real Estate", tagline: "Design & build decor" },
  nav: {
    home: "HOME",
    interiorDesign: "INTERIOR DESIGN",
    construction: "DELIVERY & BUILD",
    ourWork: "OUR WORK",
    about: "ABOUT",
    contact: "CONTACT",
  },
  hero: {
    eyebrow: "Saudi Arabia · Design & build",
    title: "Modern decor, designed with you and delivered on your site",
    subtitle:
      "Turriva is a Saudi team for interior design and execution — villas, palaces, retail, and exhibition spaces in Jeddah and Makkah. We care about craft, clarity, and client satisfaction: what you approve is what we install, on schedule and to a standard you can feel when you walk in.",
    servicesLine: "Interiors · Facades · Exhibitions",
    tags: ["Interior design", "Facades", "Exhibition builds", "Jeddah & Makkah"],
    ctaPrimary: "Book a consultation",
    ctaSecondary: "View our work",
  },
  intro: {
    eyebrow: "How we work",
    title: "Design that reads the room — execution that respects your name",
    body:
      "Leading decor brands earn trust by showing real materials and believable spaces. We do the same for Gulf homes and businesses: contemporary lines, warm hospitality, and details that suit majlis life as well as modern living. One studio from concept and samples to site teams and handover — with open updates so you are never guessing.",
  },
  stats: {
    items: [
      { value: "15+", label: "Years in design & fit-out" },
      { value: "200+", label: "Residential & commercial projects" },
      { value: "1 team", label: "Design through handover" },
      { value: "Jeddah · Makkah", label: "Western Region base" },
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
    title: "Spaces shaped for Gulf living and business",
    subtitle:
      "Interiors and facades for homes, majlis, and retail — contemporary execution with regional character.",
    cta: "Full portfolio",
    items: [
      { title: "Palace majlis & reception", category: "Residential · Jeddah" },
      { title: "Villa living & dining", category: "Residential · Makkah region" },
      { title: "Boutique showroom", category: "Retail · Western Region" },
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
    title: "When the space matches the promise",
    items: [
      {
        quote:
          "Our majlis and guest wing looked like the renders — same stone, same lighting levels. The team stayed until we were comfortable, not just until the clock ran out.",
        author: "Private client",
        role: "Villa · Jeddah",
      },
      {
        quote:
          "The exhibition stand had two days on the floor. Finish and detailing felt like a permanent showroom, and our team could focus on guests, not fixes.",
        author: "Marketing director",
        role: "Trade show · Makkah region",
      },
    ],
  },
  cta: {
    title: "Begin your project with us",
    subtitle:
      "Share your villa, palace, retail space, or exhibition brief. We respond within one business day with clear scope, timeline, and the right Turriva lead.",
    button: "Contact Turriva",
  },
  footer: {
    about:
      "Turriva Real Estate — Saudi interior design and on-site delivery for villas, palaces, shops, and exhibition builds in Jeddah and Makkah. Modern decor, disciplined execution, and client care at every stage.",
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
        "Selected Gulf-facing interiors, facades, and exhibition projects delivered by Turriva across the Western Region and central KSA.",
    },
    about: {
      title: "About Turriva",
      intro:
        "A Saudi company for modern decor design and execution — quality materials, honest timelines, and service that aims to exceed what clients expect.",
    },
    contact: {
      title: "Contact Turriva",
      intro: "Request a consultation for interior design, site delivery, or your next exhibition build.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Your project (villa, palace, retail, booth…)",
      formSubmit: "Send message",
    },
  },
};

const ar: LuxuryMessages = {
  brand: { name: "توريفا العقارية", tagline: "تصميم داخلي وتنفيذ متكامل" },
  nav: {
    home: "الرئيسية",
    interiorDesign: "التصميم الداخلي",
    construction: "التنفيذ في الموقع",
    ourWork: "أعمالنا",
    about: "من نحن",
    contact: "تواصل",
  },
  hero: {
    eyebrow: "السعودية · تصميم وتنفيذ",
    title: "ديكور معاصر… تصميم مشترك وتنفيذ في موقعكم",
    subtitle:
      "توريفا العقارية فريق سعودي متخصص في التصميم الداخلي والتنفيذ — فلل وقصور ومساحات تجارية وأجنحة معارض في جدة ومكة. نلتزم بما يُعتمد في لوحات العرض: تركيب مطابق للموافقات، جداول واضحة، ومعايير جودة تظهر في تفاصيل المكان.",
    servicesLine: "داخلي · واجهات · معارض",
    tags: ["تصميم داخلي", "واجهات", "أجنحة معارض", "جدة ومكة"],
    ctaPrimary: "احجز استشارة",
    ctaSecondary: "استعرض أعمالنا",
  },
  intro: {
    eyebrow: "منهجنا",
    title: "تصميم يقرأ أسلوب حياتك… وتنفيذ يحترم اسمك",
    body:
      "العلامات الرائدة في الديكور تبني الثقة عبر خامات حقيقية ومساحات مقنعة. نطبّق ذلك على المشاريع السكنية والتجارية: خطوط معاصرة، ضيافة راقية، وتفاصيل تناسب المجلس والمعيشة اليومية. استوديو واحد من المفهوم والعينات إلى فرق الموقع والتسليم — مع متابعة شفافة في كل مرحلة.",
  },
  stats: {
    items: [
      { value: "+15", label: "عامًا في التصميم والتشطيب" },
      { value: "+200", label: "مشروع سكني وتجاري" },
      { value: "فريق واحد", label: "من التصميم حتى التسليم" },
      { value: "جدة · مكة", label: "المنطقة الغربية" },
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
    title: "مساحات صُمّمت لحياة وعمل الخليج",
    subtitle: "داخليات وواجهات للسكن والمجالس والتجزئة — تنفيذ معاصر بطابع إقليمي.",
    cta: "كل الأعمال",
    items: [
      { title: "مجلس واستقبال قصر", category: "سكني · جدة" },
      { title: "معيشة وضيافة فيلا", category: "سكني · مكة" },
      { title: "صالة عرض بوتيك", category: "تجزئة · المنطقة الغربية" },
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
    title: "حين يطابق المكان التصور المعتمد",
    items: [
      {
        quote:
          "المجلس وجناح الضيافة طابقا الموافقات — الحجر والإضاءة كما في لوحات العرض. بقي الفريق إلى أن اكتمل رضانا عن كل التفاصيل.",
        author: "عميل خاص",
        role: "فيلا · جدة",
      },
      {
        quote:
          "جناح المعرض اكتمل في وقت ضيق. التشطيبات كانت بمستوى مساحة دائمة، وتمكّنا من استقبال الزوار دون انشغال بالتفاصيل التنفيذية.",
        author: "مدير تسويق",
        role: "معرض · مكة",
      },
    ],
  },
  cta: {
    title: "تواصل لبدء مشروعك",
    subtitle:
      "عرّفنا بمشروعك: فيلا، قصر، مساحة تجارية، أو جناح معرض. نرد خلال يوم عمل بنطاق واضح وجدول زمني ومسؤول المشروع المناسب.",
    button: "تواصل مع توريفا",
  },
  footer: {
    about:
      "توريفا العقارية — تصميم داخلي وتنفيذ ميداني للفلل والقصور والمساحات التجارية وأجنحة المعارض في جدة ومكة. ديكور معاصر، انضباط في التنفيذ، وخدمة راقية في كل مرحلة.",
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
      intro: "نماذج من داخليات وواجهات ومعارض نفّذها فريق توريفا في الغربية ووسط المملكة.",
    },
    about: {
      title: "عن توريفا العقارية",
      intro:
        "شركة سعودية للتصميم الداخلي والتنفيذ — خامات مختارة، جداول زمنية واضحة، وخدمة تليق بمستوى مشاريعكم.",
    },
    contact: {
      title: "تواصل مع توريفا العقارية",
      intro: "اطلب استشارة للتصميم الداخلي أو التنفيذ في الموقع أو لبناء جناح معرض قادم.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "مشروعك (فيلا، قصر، مساحة تجارية، جناح معرض…)",
      formSubmit: "إرسال الرسالة",
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
