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
    eyebrow: "Turriva · Decor & Contracting",
    title: "Fixed finishing from design through handover on site",
    subtitle:
      "One team for decor and contracting in Jeddah and Makkah — villas, retail, and exhibition booths. Real materials, clear schedules, delivery that matches what you approved.",
    servicesLine: "Interior · Facades · Booths & exhibitions",
    tags: ["Interior finishing", "Facades", "Booths & exhibitions", "Jeddah & Makkah"],
    ctaPrimary: "Book a consultation",
    ctaSecondary: "View our work",
  },
  execution: {
    badge: "Turriva Real Estate",
    title: "Fixed decor — built on site with real materials",
    subtitle:
      "We don't stop at drawings. Turriva supplies, installs, and contracts premium finishing for permanent spaces and seasonal booths.",
    points: [
      "Real material catalogs — wood, marble, glass, furniture",
      "Senior design engineers and dedicated site teams",
      "Premium contracting across Jeddah & Makkah",
    ],
    cta: "Book free consultation",
  },
  capabilities: {
    eyebrow: "What we do",
    title: "Fixed decor for every project type",
    items: [
      {
        title: "Interior finishing — living & majlis",
        description:
          "Villas, apartments, and majlis spaces — finishes, furniture layout, and decor executed on site.",
      },
      {
        title: "Interior finishing — retail & shops",
        description: "Shops and showrooms with premium materials, lighting, and customer flow.",
      },
      {
        title: "Exterior finishing & facades",
        description:
          "Villa, palace, and commercial facades — modern, classic, or Gulf luxury styles.",
      },
      {
        title: "Booths & temporary exhibitions",
        description:
          "Trade-show booths, brand activations, and pop-up stands for your next season.",
      },
    ],
  },
  services: {
    eyebrow: "Our services",
    title: "Fixed decor and contracting",
    items: [
      {
        title: "Fixed interior decor",
        description:
          "Permanent finishing for villas, apartments, palaces, shops, and majlis — materials, joinery, and lighting on site.",
        cta: "INTERIOR DECOR",
        href: "/interior-design",
      },
      {
        title: "Premium contracting",
        description:
          "Structured delivery, trade coordination, and handover that matches approved designs and materials.",
        cta: "CONTRACTING",
        href: "/construction",
      },
      {
        title: "Advertising booths & exhibitions",
        description:
          "Temporary and seasonal booth builds — designed, fabricated, installed, and styled for your campaign.",
        cta: "CONTACT US",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "Why Turriva Real Estate",
    title: "Human-led design, site-ready execution",
    items: [
      {
        title: "Senior design engineers",
        description: "Human-led concepts for villas, palaces, shops, and exhibition booths — not templates.",
      },
      {
        title: "Executable drawings",
        description: "From mood boards to shop drawings and material boards your site team can build from.",
      },
      {
        title: "Real materials",
        description: "Wood, stone, glass, and FF&E sourced for Saudi projects and installed by Turriva teams.",
      },
      {
        title: "Free introductory meeting",
        description: "We start with a consultation to understand your space, timeline, and execution scope.",
      },
    ],
  },
  projects: {
    eyebrow: "OUR WORK",
    title: "Spaces we finish and build",
    cta: "VIEW ALL PROJECTS",
  },
  process: {
    eyebrow: "How we work",
    title: "From consultation to handover",
    steps: [
      {
        title: "Consultation",
        description: "Site visit or briefing — scope, style, and programme for your villa, shop, or booth.",
      },
      {
        title: "Design & materials",
        description: "Custom concept, material boards, and drawings aligned with your architectural set.",
      },
      {
        title: "Workshop & site",
        description: "Joinery, finishes, and trades coordinated by Turriva contracting teams.",
      },
      {
        title: "Handover",
        description: "Final styling, snag closure, and a space ready to live in or open to customers.",
      },
    ],
  },
  testimonials: {
    eyebrow: "CLIENT VOICES",
    title: "Trusted on residential and retail builds",
    items: [
      {
        quote:
          "Turriva finished our majlis and retail wing with the same materials we approved on the board — no surprises at handover.",
        author: "Private client",
        role: "Villa & shop · Jeddah",
      },
      {
        quote:
          "Our exhibition booth had to install in days. Turriva delivered a finish that felt permanent, not temporary.",
        author: "Brand team",
        role: "Seasonal booth · Makkah region",
      },
    ],
  },
  cta: {
    title: "Book a free consultation",
    subtitle:
      "Tell us about your villa, palace, shop, or booth — Turriva Real Estate will respond with scope and next steps.",
    button: "CONTACT TURRIVA",
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
    eyebrow: "توريفا العقارية · ديكور ومقاولات",
    title: "تشطيبات ثابتة من التصميم حتى التسليم في الموقع",
    subtitle:
      "فريق واحد للديكور والمقاولات في جدة ومكة — فلل، محلات، وبوث معارض. مواد حقيقية، جداول واضحة، وتسليم يطابق ما اعتمدته.",
    servicesLine: "تشطيب داخلي · واجهات · بوث ومعارض",
    tags: ["تشطيب داخلي", "واجهات", "بوث ومعارض", "جدة ومكة"],
    ctaPrimary: "احجز استشارة",
    ctaSecondary: "أعمالنا",
  },
  execution: {
    badge: "توريفا العقارية",
    title: "ديكور ثابت — يُنفَّذ في الموقع بمواد حقيقية",
    subtitle:
      "لا نتوقف عند المخططات. توريفا العقارية تورد وتركّب وتقاول التشطيبات الفاخرة للمساحات الدائمة والبوث الموسمية.",
    points: [
      "كتالوجات مواد حقيقية — خشب، رخام، زجاج، أثاث",
      "مهندسو تصميم وفرق ميدانية مخصصة",
      "مقاولات فاخرة في جدة ومكة المكرمة",
    ],
    cta: "احجز استشارة مجانية",
  },
  capabilities: {
    eyebrow: "مجالات عملنا",
    title: "ديكور ثابت لكل نوع مشروع",
    items: [
      {
        title: "تشطيب داخلي — مجلس ومعيشة",
        description:
          "فلل وشقق ومجالس — تشطيبات، توزيع أثاث، وديكور يُنفَّذ في الموقع.",
      },
      {
        title: "تشطيب داخلي — محلات ومعارض",
        description: "محلات وصالات عرض بخامات فاخرة وإضاءة وتدفق زوار.",
      },
      {
        title: "تشطيب خارجي وواجهات",
        description: "واجهات فلل وقصور وتجارية — عصري، كلاسيكي، أو فخامة خليجية.",
      },
      {
        title: "بوث ومعارض مؤقتة",
        description: "أجنحة معارض، تفعيلات علامات، وستاندات لمواسمك القادمة.",
      },
    ],
  },
  services: {
    eyebrow: "خدماتنا",
    title: "ديكور ثابت ومقاولات",
    items: [
      {
        title: "ديكور داخلي ثابت",
        description:
          "تشطيب دائم للفلل والشقق والقصور والمحلات والمجالس — خامات ونجارة وإضاءة في الموقع.",
        cta: "الديكور الداخلي",
        href: "/interior-design",
      },
      {
        title: "مقاولات فاخرة",
        description: "تنسيق trades وتسليم يطابق التصاميم والخامات المعتمدة.",
        cta: "المقاولات",
        href: "/construction",
      },
      {
        title: "بوث ومعارض إعلانية",
        description: "بناء بوث موسمية — تصميم وتصنيع وتركيب وتنسيق لحملتك.",
        cta: "تواصل معنا",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "لماذا توريفا العقارية",
    title: "تصميم بقيادة بشرية وتنفيذ ميداني",
    items: [
      {
        title: "مهندسو تصميم",
        description: "مفاهيم بشرية للفلل والقصور والمحلات وبوث المعارض — ليست قوالب جاهزة.",
      },
      {
        title: "مخططات قابلة للتنفيذ",
        description: "من لوحة المواد إلى shop drawings ولوحات خامات يبنيها فريقك في الموقع.",
      },
      {
        title: "مواد حقيقية",
        description: "خشب وحجر وزجاج وFF&E لمشاريع سعودية يركّبها فريق توريفا العقارية.",
      },
      {
        title: "اجتماع تعريفي مجاني",
        description: "نبدأ باستشارة لفهم مساحتك وجدولك ونطاق التنفيذ.",
      },
    ],
  },
  projects: {
    eyebrow: "أعمالنا",
    title: "مساحات تشطيبنا وبنائنا",
    cta: "عرض كل المشاريع",
  },
  process: {
    eyebrow: "كيف نعمل",
    title: "من الاستشارة إلى التسليم",
    steps: [
      {
        title: "استشارة",
        description: "زيارة موقع أو موجز — نطاق وأسلوب وبرنامج لفيلتك أو محلك أو بوثك.",
      },
      {
        title: "تصميم وخامات",
        description: "مفهوم مخصص ولوحات خامات ومخططات متوافقة مع المخطط المعماري.",
      },
      {
        title: "ورشة وموقع",
        description: "نجارة وتشطيبات وتخصصات ينسّقها فريق مقاولات توريفا العقارية.",
      },
      {
        title: "تسليم",
        description: "تنسيق نهائي وإغلاق ملاحظات ومساحة جاهزة للسكن أو الافتتاح.",
      },
    ],
  },
  testimonials: {
    eyebrow: "آراء العملاء",
    title: "ثقة في المشاريع السكنية والتجارية",
    items: [
      {
        quote:
          "نفّذت توريفا العقارية مجلسنا والمحل بنفس الخامات المعتمدة — بلا مفاجآت عند التسليم.",
        author: "عميل خاص",
        role: "فيلا ومحل · جدة",
      },
      {
        quote: "بوث المعرض كان يجب تركيبه خلال أيام. التشطيب كان كأنه دائم لا مؤقت.",
        author: "فريق علامة",
        role: "بوث موسمي · مكة المكرمة",
      },
    ],
  },
  cta: {
    title: "احجز استشارة مجانية",
    subtitle:
      "أخبرنا عن فيلتك أو قصرك أو محلك أو بوثك — يرد فريق توريفا العقارية بالنطاق والخطوات التالية.",
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

/** Luxury interior photography — Unsplash (replace with owned assets in production). */
export const LUXURY_IMAGES = {
  hero: "/brand/luxury/hero-villa.jpg",
  interior: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  construction: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  fitout: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  project1: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  project2: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  project3: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
  project4: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
} as const;
