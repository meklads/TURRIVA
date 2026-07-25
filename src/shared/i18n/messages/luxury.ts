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
    ctaSecondary: "See our work",
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
    title: "Quality and service, without the noise",
    items: [
      {
        title: "Modern Gulf sensibility",
        description: "Contemporary design language that still feels at home in Jeddah and Makkah — not a copy-paste import.",
      },
      {
        title: "Materials you can trust",
        description: "Wood, stone, metal, and textiles specified for how they look on day one and live on year five.",
      },
      {
        title: "People who stay on the job",
        description: "Designers and site leads who know your file — fewer handoffs, fewer surprises.",
      },
      {
        title: "Satisfaction built in",
        description: "We scope honestly, communicate often, and close snags before we call it done.",
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
    title: "Start with a conversation",
    subtitle:
      "Tell us about your villa, palace, store, or booth. We will respond with a clear scope, timeline, and the right Turriva lead within one working day.",
    button: "Contact Turriva",
  },
  footer: {
    about:
      "Turriva Real Estate — Saudi interior design and on-site delivery for villas, palaces, shops, and exhibition builds in Jeddah and Makkah. Modern decor, disciplined execution, and client care at every stage.",
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
  brand: { name: "توريفا العقارية", tagline: "تصميم وتنفيذ الديكور" },
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
    title: "ديكور عصري… نصمّمه معك وننفّذه في موقعك",
    subtitle:
      "توريفا العقارية فريق سعودي للتصميم الداخلي والتنفيذ — فلل وقصور ومحلات ومساحات معارض في جدة ومكة. نركّز على الجودة ورضا العميل: ما تعتمده على الورق هو ما يُركَّب في الموقع، في الوقت المتفق، وبمعايير تُحسّها حين تدخل المكان.",
    servicesLine: "داخلي · واجهات · معارض",
    tags: ["تصميم داخلي", "واجهات", "أجنحة معارض", "جدة ومكة"],
    ctaPrimary: "احجز استشارة",
    ctaSecondary: "شاهد أعمالنا",
  },
  intro: {
    eyebrow: "منهجنا",
    title: "تصميم يقرأ أسلوب حياتك… وتنفيذ يحترم اسمك",
    body:
      "شركات الديكور العالمية تكسب الثقة حين تعرض خامات حقيقية ومساحات يصدقها العميل. نحن نطبّق ذلك على بيوت ومنشآت الخليج: خطوط معاصرة، ضيافة دافئة، وتفاصيل تناسب المجلس والمعيشة اليوم. استوديو واحد من الفكرة والعينات إلى فرق الموقع والتسليم — مع تحديثات واضحة لا تتركك تتساءل عن ما يحدث.",
  },
  stats: {
    items: [
      { value: "+15", label: "عامًا في التصميم والتشطيب" },
      { value: "+200", label: "مشروع سكني وتجاري" },
      { value: "فريق واحد", label: "من التصميم حتى التسليم" },
      { value: "جدة · مكة", label: "مقرّنا في الغربية" },
    ],
  },
  execution: {
    badge: "تصميم وتسليم ميداني",
    title: "الرسم وعد… والتسليم سمعتنا",
    subtitle:
      "نجارة وحجر وإضاءة وأثاث تُشتَرى وفق لوحات الاعتماد. التخصصات تُنسَّق في الموقع حتى تطابق المساحة ما وقّعت عليه. أجنحة المعارض تُعامل بنفس الاهتمام كفيلا عائلية.",
    points: [
      "عينات واعتماد قبل الشراء بالجملة",
      "رسومات تنفيذ متوافقة مع مهندس المشروع",
      "مسؤول موقع حتى الملاحظات والتسليم",
    ],
    cta: "تحدّث مع فريقنا",
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
        title: "معارض ومساحات علامات",
        description:
          "بوث وفعاليات: تصميم وتصنيع وتركيب وتفكيك ضمن جداول المعارض الضيقة.",
      },
    ],
  },
  services: {
    eyebrow: "الخدمات",
    title: "كيف يبدأ العملاء مع توريفا",
    items: [
      {
        title: "التصميم الداخلي والديكور",
        description:
          "توزيع وخامات وإضاءة وتنسيق للفلل والشقق والقصور والمجالس — من أول مخطط إلى التركيب.",
        cta: "التصميم الداخلي",
        href: "/interior-design",
      },
      {
        title: "تنفيذ المشروع في الموقع",
        description:
          "تنسيق التخصصات وضبط الجودة وتوثيق التسليم حتى تبقى التشطيبات المعتمدة سليمة حتى النهاية.",
        cta: "التنفيذ في الموقع",
        href: "/construction",
      },
      {
        title: "أجنحة المعارض والبوث",
        description:
          "ستاندات جاهزة للحملة: فكرة وتصنيع وتنسيق في الموقع ثم التفكيك بعد الحدث.",
        cta: "أرسل موجز المشروع",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "لماذا توريفا",
    title: "جودة وخدمة… بلا مبالغة في الكلام",
    items: [
      {
        title: "ذوق خليجي معاصر",
        description: "لغة تصميم حديثة تليق بجدة ومكة — لا نسخة جاهزة مستوردة على مخططك.",
      },
      {
        title: "خامات تثق بها",
        description: "خشب وحجر ومعدن وأقمشة نحدّدها لشكلها في اليوم الأول ولحياتها بعد سنوات.",
      },
      {
        title: "فريق يتابع ملفك",
        description: "مصممون ومسؤولون ميدانيون يعرفون تفاصيل مشروعك — تسليمات أقل ومفاجآت أقل.",
      },
      {
        title: "رضا العميل جزء من العمل",
        description: "نحدّد النطاق بصدق، نتواصل بانتظام، ونغلق الملاحظات قبل أن نقول «انتهينا».",
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
        description: "ملاحظات وتنسيق نهائي وجولة تسليم تدخل بها أو تفتتح وأنت مطمئن.",
      },
    ],
  },
  testimonials: {
    eyebrow: "عملاؤنا",
    title: "حين يطابق المكان الوعد",
    items: [
      {
        quote:
          "المجلس وجناح الضيافة خرجا كالعرض — نفس الحجر ونفس الإضاءة. الفريق بقي حتى ارتاحينا، لا حتى انتهى الوقت فقط.",
        author: "عميل خاص",
        role: "فيلا · جدة",
      },
      {
        quote:
          "البوث كان يومين على الأرض. التشطيب والتفاصيل كأنه صالة دائمة، واستطعنا التركيز على الزوار لا على الإصلاحات.",
        author: "مدير تسويق",
        role: "معرض · مكة",
      },
    ],
  },
  cta: {
    title: "ابدأ بمحادثة",
    subtitle:
      "أخبرنا عن فيلتك أو قصرك أو محلك أو بوثك. نرد خلال يوم عمل بنطاق واضح وجدول والمسؤول المناسب من توريفا.",
    button: "تواصل مع توريفا",
  },
  footer: {
    about:
      "توريفا العقارية — تصميم داخلي وتنفيذ في الموقع للفلل والقصور والمحلات وأجنحة المعارض في جدة ومكة. ديكور عصري، انضباط في التنفيذ، وخدمة تراعي رضا العميل في كل مرحلة.",
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
        "شركة سعودية لتصميم وتنفيذ الديكور بأسلوب حديث — خامات جيدة، جداول صادقة، وخدمة نسعى فيها لأن تتجاوز توقعات العميل.",
    },
    contact: {
      title: "تواصل مع توريفا العقارية",
      intro: "اطلب استشارة للتصميم الداخلي أو التنفيذ في الموقع أو لبناء جناح معرض قادم.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "مشروعك (فيلا، قصر، محل، بوث…)",
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
  intro: `https://images.unsplash.com/photo-1700306692751-1fd5f2b88443?${IMG_Q}&w=1600`,
  execution: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${IMG_Q}&w=1600`,
  interior: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${IMG_Q}&w=1400`,
  construction: `https://images.unsplash.com/photo-1600047509358-9dc75507daeb?${IMG_Q}&w=1400`,
  fitout: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${IMG_Q}&w=1400`,
  cap1: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${IMG_Q}&w=900`,
  cap2: `https://images.unsplash.com/photo-1700306692751-1fd5f2b88443?${IMG_Q}&w=900`,
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
