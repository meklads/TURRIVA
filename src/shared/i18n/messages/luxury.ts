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
    workspace: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
    services: string;
    contact: string;
    workspace: string;
    workspaceDesc: string;
    workspaceCta: string;
    copyright: string;
    privacy: string;
    terms: string;
    address: string;
    email: string;
    phone: string;
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
  brand: { name: "RUWAQ", tagline: "INTERIOR • CONSTRUCTION" },
  nav: {
    home: "HOME",
    interiorDesign: "INTERIOR DESIGN",
    construction: "CONSTRUCTION",
    ourWork: "OUR WORK",
    about: "ABOUT US",
    contact: "CONTACT US",
    workspace: "WORKSPACE",
  },
  hero: {
    title: "Designing Elegance.\nBuilding Excellence.",
    subtitle:
      "Ruwaq is a premium interior design and construction company delivering exceptional spaces with time-honored craftsmanship and modern innovation.",
    ctaPrimary: "EXPLORE OUR SERVICES",
    ctaSecondary: "VIEW OUR WORK",
  },
  services: {
    eyebrow: "OUR SOLUTIONS",
    title: "Complete Solutions for Luxury Spaces",
    items: [
      {
        title: "Interior Design",
        description:
          "Bespoke interiors for villas, palaces, and hospitality — from concept to curated finishes.",
        cta: "LEARN MORE",
        href: "/interior-design",
      },
      {
        title: "Construction",
        description:
          "High-end residential and commercial construction with rigorous quality and on-site excellence.",
        cta: "LEARN MORE",
        href: "/construction",
      },
      {
        title: "Fit-Out & Décor",
        description:
          "Turnkey fit-out, custom joinery, lighting, and styling for spaces that feel effortlessly luxurious.",
        cta: "LEARN MORE",
        href: "/interior-design",
      },
    ],
  },
  why: {
    eyebrow: "WHY RUWAQ",
    title: "The Art of Luxury Living",
    items: [
      { title: "Timeless Design", description: "Elegant proportions and refined aesthetics that endure beyond trends." },
      { title: "Premium Quality", description: "Fine materials, vetted suppliers, and uncompromising standards." },
      { title: "Attention to Detail", description: "Every junction, texture, and finish considered with care." },
      { title: "On-Time Delivery", description: "Structured project management with clear milestones and accountability." },
    ],
  },
  projects: {
    eyebrow: "OUR WORK",
    title: "Crafting Extraordinary Spaces",
    cta: "VIEW ALL PROJECTS",
  },
  process: {
    eyebrow: "OUR PROCESS",
    title: "From Vision to Reality",
    steps: [
      { title: "Discovery", description: "Understanding your vision, lifestyle, and spatial requirements." },
      { title: "Design", description: "Concept development, materials, and detailed design documentation." },
      { title: "Execution", description: "Skilled craftsmen and site teams bringing the design to life." },
      { title: "Delivery", description: "Final styling, quality checks, and a flawless handover." },
    ],
  },
  testimonials: {
    eyebrow: "CLIENT VOICES",
    title: "Trusted by Discerning Clients",
    items: [
      {
        quote: "Ruwaq transformed our villa into a sanctuary of calm luxury. Every detail exceeded our expectations.",
        author: "Private Client",
        role: "Luxury Villa, Riyadh",
      },
      {
        quote: "Exceptional craftsmanship and seamless project management from first meeting to handover.",
        author: "Development Group",
        role: "Hospitality Project, Jeddah",
      },
    ],
  },
  cta: {
    title: "Let's Build Something Extraordinary",
    subtitle: "Share your vision with our team and begin your luxury project journey.",
    button: "GET IN TOUCH",
  },
  footer: {
    about:
      "Ruwaq is a premium Saudi interior design and construction studio specializing in luxury villas, palaces, and high-end residential projects.",
    quickLinks: "Quick Links",
    services: "Services",
    contact: "Contact Us",
    workspace: "WORKSPACE",
    workspaceDesc: "Access your projects, quotes, and client management platform.",
    workspaceCta: "GO TO WORKSPACE",
    copyright: "© Ruwaq. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    address: "Riyadh, Saudi Arabia",
    email: "hello@ruwaq.co",
    phone: "+966 11 000 0000",
  },
  pages: {
    interiorDesign: {
      title: "Interior Design",
      intro: "Bespoke luxury interiors for Saudi Arabia's most discerning clients.",
    },
    construction: {
      title: "Construction",
      intro: "Premium construction for villas, palaces, and exclusive developments.",
    },
    ourWork: {
      title: "Our Work",
      intro: "A curated portfolio of luxury residential and hospitality projects.",
    },
    about: {
      title: "About Ruwaq",
      intro: "Craftsmanship, elegance, and quiet confidence — built in Saudi Arabia.",
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
  brand: { name: "رواق", tagline: "تصميم داخلي · إنشاءات فاخرة" },
  nav: {
    home: "الرئيسية",
    interiorDesign: "التصميم الداخلي",
    construction: "الإنشاءات",
    ourWork: "أعمالنا",
    about: "من نحن",
    contact: "تواصل معنا",
    workspace: "مساحة العمل",
  },
  hero: {
    title: "نصمّم الأناقة.\nونبني التميّز.",
    subtitle:
      "رواق شركة سعودية رائدة في التصميم الداخلي والإنشاءات والتشطيب، نصنع مساحات فاخرة تجمع بين الحرفية العريقة والابتكار المعاصر — للفلل والقصور والمشاريع السكنية الراقية.",
    ctaPrimary: "استكشف خدماتنا",
    ctaSecondary: "شاهد أعمالنا",
  },
  services: {
    eyebrow: "حلولنا",
    title: "حلول متكاملة للمساحات الفاخرة",
    items: [
      {
        title: "التصميم الداخلي",
        description:
          "تصاميم مخصصة للفلل والقصور والضيافة — من الفكرة إلى التشطيبات المنتقاة.",
        cta: "اعرف المزيد",
        href: "/interior-design",
      },
      {
        title: "الإنشاءات",
        description:
          "إنشاءات سكنية وتجارية راقية بمعايير جودة صارمة وإشراف ميداني محترف.",
        cta: "اعرف المزيد",
        href: "/construction",
      },
      {
        title: "التشطيب والديكور",
        description:
          "تشطيب متكامل، أعمال خشبية مخصصة، إضاءة، وتنسيق لمساحات فاخرة بلا مبالغة.",
        cta: "اعرف المزيد",
        href: "/interior-design",
      },
    ],
  },
  why: {
    eyebrow: "لماذا رواق",
    title: "فن العيش الفاخر",
    items: [
      { title: "تصميم خالد", description: "تناسق أنيق وجماليات راقية تتجاوز الموضة." },
      { title: "جودة فائقة", description: "مواد فاخرة وموردون موثوقون ومعايير لا تقبل المساومة." },
      { title: "اهتمام بالتفاصيل", description: "كل وصلة وتفصيلة ولمسة نهائية مدروسة بعناية." },
      { title: "تسليم في الوقت", description: "إدارة مشاريع منظمة بمراحل واضحة ومساءلة." },
    ],
  },
  projects: {
    eyebrow: "أعمالنا",
    title: "نصنع مساحات استثنائية",
    cta: "عرض كل المشاريع",
  },
  process: {
    eyebrow: "منهجيتنا",
    title: "من الرؤية إلى الواقع",
    steps: [
      { title: "الاكتشاف", description: "فهم رؤيتك وأسلوب حياتك ومتطلبات المساحة." },
      { title: "التصميم", description: "تطوير المفهوم والمواد والوثائق التفصيلية." },
      { title: "التنفيذ", description: "حرفيون وفرق ميدانية تحوّل التصميم إلى واقع." },
      { title: "التسليم", description: "تنسيق نهائي وفحص جودة وتسليم بلا عيوب." },
    ],
  },
  testimonials: {
    eyebrow: "آراء العملاء",
    title: "ثقة عملاء مميزين",
    items: [
      {
        quote: "حوّلت رواق فيلتنا إلى ملاذ من الفخامة الهادئة. كل تفصيلة فاقت توقعاتنا.",
        author: "عميل خاص",
        role: "فيلا فاخرة، الرياض",
      },
      {
        quote: "حرفية استثنائية وإدارة مشروع سلسة من أول لقاء حتى التسليم.",
        author: "مجموعة تطوير",
        role: "مشروع ضيافة، جدة",
      },
    ],
  },
  cta: {
    title: "لنبني شيئاً استثنائياً",
    subtitle: "شاركنا رؤيتك وابدأ رحلة مشروعك الفاخر مع فريقنا.",
    button: "تواصل معنا",
  },
  footer: {
    about:
      "رواق استوديو سعودي فاخر للتصميم الداخلي والإنشاءات، متخصص في الفلل والقصور والمشاريع السكنية الراقية.",
    quickLinks: "روابط سريعة",
    services: "الخدمات",
    contact: "تواصل معنا",
    workspace: "مساحة العمل",
    workspaceDesc: "ادخل إلى مشاريعك وعروضك ومنصة إدارة العملاء.",
    workspaceCta: "الدخول إلى مساحة العمل",
    copyright: "© رواق. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    address: "الرياض، المملكة العربية السعودية",
    email: "hello@ruwaq.co",
    phone: "+966 11 000 0000",
  },
  pages: {
    interiorDesign: {
      title: "التصميم الداخلي",
      intro:
        "تصاميم داخلية فاخرة مخصصة للفلل والقصور والضيافة في المملكة — من المفهوم الأول حتى آخر لمسة تشطيب.",
    },
    construction: {
      title: "الإنشاءات",
      intro:
        "إنشاءات فاخرة للفلل والقصور والمشاريع الحصرية بإشراف هندسي وميداني ومعايير جودة عالمية.",
    },
    ourWork: {
      title: "أعمالنا",
      intro:
        "معرض منتقى من مشاريعنا السكنية والضيافية — مساحات صُمّمت وبُنيت بعناية فائقة.",
    },
    about: {
      title: "عن رواق",
      intro:
        "رواق استوديو سعودي للتصميم الداخلي والإنشاءات يجمع بين الحرفية والأناقة والثقة الهادئة.",
    },
    contact: {
      title: "تواصل معنا",
      intro: "ابدأ مشروعك الفاخر باستشارة خاصة مع فريق رواق.",
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
  interior: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  construction: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  fitout: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  project1: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  project2: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  project3: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
  project4: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80",
} as const;
