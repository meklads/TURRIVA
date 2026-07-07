import type { Locale } from "@/shared/i18n/locale";

export type DesignMessages = {
  brand: { name: string; tagline: string };
  nav: {
    generate: string;
    styles: string;
    howItWorks: string;
    pricing: string;
    signIn: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaInterior: string;
    ctaFacade: string;
    ctaYard: string;
    statRating: string;
    statTime: string;
    statStyles: string;
  };
  studio: {
    title: string;
    spaceInterior: string;
    spaceFacade: string;
    spaceYard: string;
    roomType: string;
    uploadTitle: string;
    uploadHint: string;
    uploadButton: string;
    styleTitle: string;
    generate: string;
    generating: string;
    creditsLeft: string;
    noCredits: string;
    signInForCredits: string;
    before: string;
    after: string;
    mockNotice: string;
    tryAnother: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    credits: string;
    start: string;
    skip: string;
  };
  consultation: {
    title: string;
    subtitle: string;
    freeBadge: string;
    name: string;
    phone: string;
    message: string;
    submit: string;
    success: string;
    cta: string;
    executionCta: string;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  differentiation: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  footer: {
    about: string;
    product: string;
    company: string;
    support: string;
    copyright: string;
    privacy: string;
    terms: string;
    poweredByPrefix: string;
    poweredByLink: string;
  };
  errors: {
    uploadRequired: string;
    styleRequired: string;
    signInRequired: string;
    creditsExhausted: string;
    generic: string;
  };
};

const en: DesignMessages = {
  brand: { name: "RUWAQ", tagline: "Design · Build" },
  nav: {
    generate: "Generate Design",
    styles: "Styles",
    howItWorks: "How It Works",
    pricing: "Pricing",
    signIn: "Sign In",
    about: "About",
    contact: "Contact",
  },
  hero: {
    badge: "AI design + real execution",
    title: "Redesign your room, villa, or store with AI in 30 seconds",
    subtitle:
      "Upload a photo — pick a style — get a photorealistic before/after. Then request a free consultation and execution quote from Ruwaq with real materials.",
    ctaInterior: "Design Interior",
    ctaFacade: "Design Facade",
    ctaYard: "Design Yard",
    statRating: "4.9/5 client satisfaction",
    statTime: "~30 sec per design",
    statStyles: "6+ luxury styles",
  },
  studio: {
    title: "Design studio",
    spaceInterior: "Interior",
    spaceFacade: "Facade",
    spaceYard: "Yard",
    roomType: "Room type",
    uploadTitle: "Upload your photo",
    uploadHint: "JPG, PNG or WEBP — any angle works",
    uploadButton: "Upload",
    styleTitle: "Choose a style",
    generate: "Generate design",
    generating: "Generating…",
    creditsLeft: "{count} credits left",
    noCredits: "No credits left",
    signInForCredits: "Sign in to get 3 free credits",
    before: "Before",
    after: "After",
    mockNotice: "Preview mode — connect production AI for your exact photo",
    tryAnother: "Try another style",
  },
  welcome: {
    title: "Welcome to Ruwaq Design!",
    subtitle: "See how to create a redesign in seconds.",
    credits: "3 free credits have been added to your account",
    start: "Start",
    skip: "Skip",
  },
  consultation: {
    title: "Free consultation & execution quote",
    subtitle:
      "Love your design? Book a free call with Ruwaq — we'll turn it into a real project with executable materials.",
    freeBadge: "Free consultation",
    name: "Your name",
    phone: "Phone number",
    message: "Tell us about your project (optional)",
    submit: "Book free consultation",
    success: "Thank you! Our team will contact you shortly.",
    cta: "Free consultation",
    executionCta: "Request execution quote",
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Three steps. Thirty seconds.",
    steps: [
      {
        title: "Upload your photo",
        description: "Any room, villa facade, store, or yard. JPG, PNG or WEBP.",
      },
      {
        title: "Pick a style",
        description: "Choose from curated luxury styles — modern, neoclassic, Islamic, and more.",
      },
      {
        title: "Get your redesign",
        description: "AI returns a photorealistic before/after. Then book execution with Ruwaq.",
      },
    ],
  },
  differentiation: {
    eyebrow: "Why Ruwaq",
    title: "Not just AI — executable design",
    subtitle: "Unlike pure visualization tools, Ruwaq connects your design to real materials and construction.",
    items: [
      {
        title: "Real material catalogs",
        description: "Wood, marble, glass, and furniture from suppliers we actually work with.",
      },
      {
        title: "Free consultation",
        description: "Talk to our team before you commit — no pressure, no hidden fees.",
      },
      {
        title: "Same-quality execution",
        description: "We build what you see — premium decor and contracting across the Gulf.",
      },
    ],
  },
  footer: {
    about:
      "Ruwaq combines AI design visualization with premium decor and contracting — from concept to execution.",
    product: "Product",
    company: "Company",
    support: "Support",
    copyright: "© Ruwaq. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    poweredByPrefix: "Ruwaq by",
    poweredByLink: "Graphics House",
  },
  errors: {
    uploadRequired: "Please upload a photo first.",
    styleRequired: "Please choose a style.",
    signInRequired: "Sign in to generate designs.",
    creditsExhausted: "No credits left. Book a consultation to continue.",
    generic: "Something went wrong. Please try again.",
  },
};

const ar: DesignMessages = {
  brand: { name: "رواق", tagline: "تصميم · تنفيذ" },
  nav: {
    generate: "إنشاء تصميم",
    styles: "الأنماط",
    howItWorks: "كيف يعمل",
    pricing: "الأسعار",
    signIn: "تسجيل الدخول",
    about: "من نحن",
    contact: "تواصل",
  },
  hero: {
    badge: "تصميم بالذكاء الاصطناعي + تنفيذ حقيقي",
    title: "حوّل غرفتك أو فيلتك أو متجرك بالذكاء الاصطناعي في 30 ثانية",
    subtitle:
      "ارفع صورة — اختر نمطاً — احصل على قبل/بعد واقعي. ثم اطلب استشارة مجانية وعرض تنفيذ من رواق بمواد حقيقية قابلة للتطبيق.",
    ctaInterior: "صمّم الداخل",
    ctaFacade: "صمّم الواجهة",
    ctaYard: "صمّم الحديقة",
    statRating: "4.9/5 رضا العملاء",
    statTime: "~30 ثانية لكل تصميم",
    statStyles: "+6 أنماط فاخرة",
  },
  studio: {
    title: "استوديو التصميم",
    spaceInterior: "داخلي",
    spaceFacade: "واجهة",
    spaceYard: "حديقة",
    roomType: "نوع المساحة",
    uploadTitle: "ارفع صورتك",
    uploadHint: "JPG أو PNG أو WEBP — أي زاوية تناسب",
    uploadButton: "رفع",
    styleTitle: "اختر النمط",
    generate: "توليد التصميم",
    generating: "جاري التوليد…",
    creditsLeft: "{count} رصيد متبقي",
    noCredits: "لا توجد أرصدة",
    signInForCredits: "سجّل الدخول للحصول على 3 أرصدة مجانية",
    before: "قبل",
    after: "بعد",
    mockNotice: "وضع معاينة — سيتم ربط الذكاء الاصطناعي الإنتاجي لصورتك الفعلية",
    tryAnother: "جرّب نمطاً آخر",
  },
  welcome: {
    title: "مرحباً بك في رواق للتصميم!",
    subtitle: "دعنا نريك كيف تنشئ تصميماً جديداً في ثوانٍ.",
    credits: "تمت إضافة 3 أرصدة مجانية إلى حسابك",
    start: "ابدأ",
    skip: "تخطي",
  },
  consultation: {
    title: "استشارة مجانية وعرض تنفيذ",
    subtitle:
      "أعجبك التصميم؟ احجز مكالمة مجانية مع رواق — نحوّله إلى مشروع حقيقي بمواد قابلة للتنفيذ.",
    freeBadge: "استشارة مجانية",
    name: "اسمك",
    phone: "رقم الجوال",
    message: "أخبرنا عن مشروعك (اختياري)",
    submit: "احجز استشارة مجانية",
    success: "شكراً! سيتواصل معك فريقنا قريباً.",
    cta: "استشارة مجانية",
    executionCta: "اطلب عرض تنفيذ",
  },
  howItWorks: {
    eyebrow: "كيف يعمل",
    title: "ثلاث خطوات. ثلاثون ثانية.",
    steps: [
      {
        title: "ارفع صورتك",
        description: "أي غرفة أو واجهة فيلا أو متجر أو حديقة. JPG أو PNG أو WEBP.",
      },
      {
        title: "اختر نمطاً",
        description: "من أنماط فاخرة منتقاة — عصري، نيوكلاسيك، هندسي إسلامي، والمزيد.",
      },
      {
        title: "احصل على التصميم",
        description: "الذكاء الاصطناعي يعيد تصميماً واقعياً قبل/بعد. ثم احجز التنفيذ مع رواق.",
      },
    ],
  },
  differentiation: {
    eyebrow: "لماذا رواق",
    title: "ليس مجرد ذكاء اصطناعي — تصميم قابل للتنفيذ",
    subtitle: "على عكس أدوات التصوير فقط، رواق يربط تصميمك بمواد حقيقية ومقاولات فعلية.",
    items: [
      {
        title: "كتالوجات مواد حقيقية",
        description: "خشب، رخام، زجاج، وفرش من موردين نتعامل معهم فعلياً.",
      },
      {
        title: "استشارة مجانية",
        description: "تحدث مع فريقنا قبل الالتزام — بدون ضغط وبدون رسوم مخفية.",
      },
      {
        title: "تنفيذ بنفس الجودة",
        description: "ننفّذ ما تراه — ديكور ومقاولات فاخرة في الخليج.",
      },
    ],
  },
  footer: {
    about:
      "رواق تجمع بين تصور التصميم بالذكاء الاصطناعي والديكور والمقاولات الفاخرة — من الفكرة إلى التنفيذ.",
    product: "المنتج",
    company: "الشركة",
    support: "الدعم",
    copyright: "© رواق. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    poweredByPrefix: "رواق بواسطة",
    poweredByLink: "جرافيكس هاوس",
  },
  errors: {
    uploadRequired: "يرجى رفع صورة أولاً.",
    styleRequired: "يرجى اختيار نمط.",
    signInRequired: "سجّل الدخول لتوليد التصاميم.",
    creditsExhausted: "لا توجد أرصدة. احجز استشارة للمتابعة.",
    generic: "حدث خطأ. يرجى المحاولة مرة أخرى.",
  },
};

export function getDesignMessages(locale: Locale): DesignMessages {
  return locale === "ar" ? ar : en;
}
