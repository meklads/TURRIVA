import type { Locale } from "@/shared/i18n/locale";

export type DesignMessages = {
  brand: { name: string; tagline: string };
  nav: {
    generate: string;
    designTypes: string;
    styleGallery: string;
    pricing: string;
    signIn: string;
    workspace: string;
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
    statRatingSub: string;
    statTime: string;
    statTimeSub: string;
    statStyles: string;
    statStylesSub: string;
  };
  studio: {
    title: string;
    prompt: string;
    spaceInterior: string;
    spaceFacade: string;
    spaceYard: string;
    roomType: string;
    uploadTitle: string;
    uploadHint: string;
    uploadButton: string;
    uploadDrag: string;
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
  quality: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabInterior: string;
    tabFacade: string;
    tabYard: string;
    yourPhoto: string;
    otherAi: string;
    ruwaq: string;
    otherNotes: string[];
    ruwaqNotes: string[];
    footnote: string;
  };
  rooms: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { id: string; title: string; description: string; cta: string }[];
  };
  execution: {
    badge: string;
    title: string;
    subtitle: string;
    points: string[];
    cta: string;
    stepDesign: string;
    stepMaterials: string;
    stepBuild: string;
  };
  ctaBottom: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    note: string;
  };
  materials: {
    title: string;
    subtitle: string;
    executableBadge: string;
    fallbackNotice: string;
    available: string;
    quoteHint: string;
    quoteCta: string;
  };
  furniture: {
    title: string;
    subtitle: string;
    badge: string;
    fallbackNotice: string;
    tapPins: string;
    match: string;
    showDetected: string;
    showAlternative: string;
    executable: string;
    quoteHint: string;
    quoteCta: string;
  };
  furnitureFeature: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: string[];
    cta: string;
  };
  footer: {
    about: string;
    product: string;
    company: string;
    support: string;
    solutions: string;
    workspaceDesc: string;
    workspaceCta: string;
    workspaceBadge: string;
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
  brand: { name: "RUWAQ", tagline: "Decor & Contracting" },
  nav: {
    generate: "Generate Design",
    designTypes: "Design Types",
    styleGallery: "Style Gallery",
    pricing: "Pricing",
    signIn: "Sign In",
    workspace: "Proposals",
    about: "About",
    contact: "Contact",
  },
  hero: {
    badge: "AI Design Studio",
    title: "Ruwaq Decor & Contracting",
    subtitle:
      "You design with AI — we execute with premium quality (Jeddah — Makkah). Upload a photo, pick a style, and get a redesign in seconds.",
    ctaInterior: "Design Interior",
    ctaFacade: "Design Facade",
    ctaYard: "Design Yard",
    statRating: "4.8/5",
    statRatingSub: "from 1,200+ reviews",
    statTime: "~30 sec",
    statTimeSub: "per design",
    statStyles: "6+",
    statStylesSub: "design styles",
  },
  studio: {
    title: "Create your design",
    prompt: "Upload a photo of the majlis, room, villa or store you want to redesign",
    spaceInterior: "Interior",
    spaceFacade: "Facade",
    spaceYard: "Yard",
    roomType: "Room type",
    uploadTitle: "Click or drag and drop",
    uploadHint: "JPG, PNG or WEBP — any angle works",
    uploadButton: "Upload",
    uploadDrag: "Drop your image here",
    styleTitle: "Choose a style",
    generate: "Generate design",
    generating: "Generating…",
    creditsLeft: "{count} credits left",
    noCredits: "No credits left",
    signInForCredits: "Sign in to get 3 free credits",
    before: "Before",
    after: "After",
    mockNotice: "Preview mode — production AI will use your exact photo",
    tryAnother: "Try another style",
  },
  welcome: {
    title: "Welcome to Ruwaq!",
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
        description: "Any room, house exterior, or backyard. JPG, PNG or WEBP — any angle works.",
      },
      {
        title: "Pick a style",
        description: "Choose from curated presets — modern, neoclassic, Islamic geometric, and more.",
      },
      {
        title: "Get a photoreal redesign",
        description: "AI returns a magazine-quality redesign in about 30 seconds.",
      },
    ],
  },
  quality: {
    eyebrow: "Quality matters",
    title: "Most AI tools use cheap models. We don't.",
    subtitle:
      "Other design tools generate a different room from scratch. Ruwaq preserves your layout, windows, and doors.",
    tabInterior: "Interior",
    tabFacade: "Facade",
    tabYard: "Garden",
    yourPhoto: "Your photo",
    otherAi: "Other AI tools",
    ruwaq: "Ruwaq",
    otherNotes: [
      "Different room — generated from scratch",
      "Geometry and openings ignored",
      "Cartoonish, unrealistic feel",
    ],
    ruwaqNotes: [
      "Same space, restyled",
      "Photoreal materials and lighting",
      "Designer-grade composition",
    ],
    footnote: "Powered by top-tier image AI — premium quality on every render",
  },
  rooms: {
    eyebrow: "AI design",
    title: "AI Design for Every Space",
    subtitle: "Upload a photo of any space — inside or outside — and see it transformed in seconds",
    items: [
      {
        id: "living",
        title: "AI Living Room Makeover",
        description:
          "See your living room or majlis completely reimagined with furniture layout, palettes, and decor.",
        cta: "Redesign my living room",
      },
      {
        id: "bedroom",
        title: "AI Bedroom Design",
        description: "Turn your bedroom into a cozy retreat. See the result in 30 seconds.",
        cta: "Redesign my bedroom",
      },
      {
        id: "kitchen",
        title: "AI Kitchen Redesign",
        description: "Visualize new cabinets, countertops, and layouts on your actual kitchen photo.",
        cta: "Redesign my kitchen",
      },
      {
        id: "facade",
        title: "AI House Exterior Design",
        description: "See your home's curb appeal transformed with modern, classic, or Gulf luxury styles.",
        cta: "Redesign my exterior",
      },
    ],
  },
  execution: {
    badge: "Only on Ruwaq",
    title: "From AI design to real execution",
    subtitle:
      "Unlike GenRoom and similar tools, Ruwaq doesn't stop at the image — we build it with real materials and premium contracting.",
    points: [
      "Real material catalogs — wood, marble, glass, furniture",
      "Free consultation with our design team",
      "Formal execution quote via Ruwaq workspace",
    ],
    cta: "Book free consultation",
    stepDesign: "AI Design",
    stepMaterials: "Real Materials",
    stepBuild: "Ruwaq Builds",
  },
  ctaBottom: {
    badge: "3 free credits — no card required",
    title: "Ready to see your space transformed?",
    subtitle: "Start free — sign in to get 3 credits. Then book execution with Ruwaq.",
    cta: "Redesign my room for free",
    note: "No credit card · Free consultation · Real execution",
  },
  materials: {
    title: "Design components — executable materials",
    subtitle:
      "Materials detected in your design, matched to Ruwaq's real supplier catalog — ready for quoting and execution.",
    executableBadge: "Executable by Ruwaq",
    fallbackNotice:
      "Material suggestions based on your style — AI vision matching activates with production API.",
    available: "Available",
    quoteHint: "Want a formal quote with these materials? Book a free consultation.",
    quoteCta: "Request execution quote",
  },
  furniture: {
    title: "AI Furniture Finder",
    subtitle:
      "We detected furniture in your design and matched it to real products — swap alternatives with one click.",
    badge: "Smart detection",
    fallbackNotice:
      "Suggested pieces based on your room type — AI pin detection activates with production API.",
    tapPins: "Tap numbered pins to explore each piece",
    match: "match",
    showDetected: "Detected",
    showAlternative: "Alternative",
    executable: "Supply & install by Ruwaq",
    quoteHint: "Add these pieces to your execution quote with one consultation call.",
    quoteCta: "Get furniture quote",
  },
  furnitureFeature: {
    eyebrow: "Like Zory — but we build it",
    title: "Upload your room. Discover every piece. We execute.",
    subtitle:
      "Our AI furniture finder identifies sofas, tables, lighting, and decor — then Ruwaq supplies and installs them with the same quality as your design.",
    points: [
      "Numbered pins on your design — tap to explore",
      "Real partner brands: Pan Home, Home Center, and more",
      "One-click swap to alternative products",
      "Formal quote + installation by Ruwaq contracting",
    ],
    cta: "Try furniture finder",
  },
  footer: {
    about:
      "Ruwaq combines AI design visualization with premium decor and contracting — from concept to execution.",
    product: "Product",
    company: "Company",
    support: "Support",
    solutions: "Solutions",
    workspaceDesc:
      "AI-powered proposals, BOQ, and project quotes — the Ruwaq workspace your team already uses.",
    workspaceCta: "Open proposals platform",
    workspaceBadge: "Existing app",
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
  brand: { name: "رواق", tagline: "للديكور والمقاولات" },
  nav: {
    generate: "إنشاء تصميم",
    designTypes: "أنواع التصميم",
    styleGallery: "معرض الأنماط",
    pricing: "الأسعار",
    signIn: "تسجيل الدخول",
    workspace: "منصة العروض",
    about: "من نحن",
    contact: "تواصل",
  },
  hero: {
    badge: "استوديو تصميم بالذكاء الاصطناعي",
    title: "رواق للديكور والمقاولات",
    subtitle:
      "أنت تصمّم بالذكاء الاصطناعي ونحن ننفّذ بأعلى جودة (جدة — مكة). ارفع صورة، اختر نمطاً، واحصل على تصميم في ثوانٍ.",
    ctaInterior: "صمّم الداخل",
    ctaFacade: "صمّم الواجهة",
    ctaYard: "صمّم الحديقة",
    statRating: "4.8/5",
    statRatingSub: "من +1,200 تقييم",
    statTime: "~30 ث",
    statTimeSub: "لكل تصميم",
    statStyles: "+6",
    statStylesSub: "أنماط تصميم",
  },
  studio: {
    title: "أنشئ تصميمك",
    prompt: "ارفع صورة للمجلس أو الغرفة أو الفيلا أو المتجر الذي تريد إعادة تصميمه",
    spaceInterior: "داخلي",
    spaceFacade: "واجهة",
    spaceYard: "حديقة",
    roomType: "نوع الغرفة",
    uploadTitle: "انقر أو اسحب وأفلت",
    uploadHint: "JPG أو PNG أو WEBP — أي زاوية تناسب",
    uploadButton: "رفع",
    uploadDrag: "أفلت صورتك هنا",
    styleTitle: "اختر النمط",
    generate: "توليد التصميم",
    generating: "جاري التوليد…",
    creditsLeft: "{count} رصيد متبقي",
    noCredits: "لا توجد أرصدة",
    signInForCredits: "سجّل الدخول للحصول على 3 أرصدة مجانية",
    before: "قبل",
    after: "بعد",
    mockNotice: "وضع معاينة — الذكاء الاصطناعي الإنتاجي سيستخدم صورتك الفعلية",
    tryAnother: "جرّب نمطاً آخر",
  },
  welcome: {
    title: "مرحباً بك في رواق!",
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
        description: "أي غرفة أو واجهة منزل أو حديقة. JPG أو PNG أو WEBP — أي زاوية تناسب.",
      },
      {
        title: "اختر أسلوباً",
        description: "اختر من أنماط جاهزة — عصري، نيوكلاسيك، هندسي إسلامي، والمزيد.",
      },
      {
        title: "احصل على تصميم فائق الواقعية",
        description: "يُعيد الذكاء الاصطناعي تصميماً بجودة المجلات في نحو 30 ثانية.",
      },
    ],
  },
  quality: {
    eyebrow: "الجودة مهمة",
    title: "معظم أدوات الذكاء الاصطناعي تستخدم نماذج رخيصة. نحن لا.",
    subtitle:
      "أدوات التصميم الأخرى تولّد غرفة مختلفة من الصفر. رواق يحافظ على تخطيط مساحتك ونوافذها وأبوابها.",
    tabInterior: "الداخل",
    tabFacade: "الواجهة",
    tabYard: "الحديقة",
    yourPhoto: "صورتك",
    otherAi: "أدوات AI أخرى",
    ruwaq: "رواق",
    otherNotes: [
      "غرفة مختلفة — مُولّدة من الصفر",
      "تجاهل الهندسة والفتحات",
      "مظهر كاريكاتوري وغير واقعي",
    ],
    ruwaqNotes: [
      "نفس المساحة، بأسلوب جديد",
      "مواد وإضاءة واقعية",
      "تركيب بمستوى مصمّم",
    ],
    footnote: "مدعوم بأحدث ذكاء اصطناعي للصور — جودة ممتازة في كل صورة",
  },
  rooms: {
    eyebrow: "تصميم بالذكاء الاصطناعي",
    title: "تصميم ذكي لكل مساحة في منزلك",
    subtitle: "ارفع صورة لأي مساحة — داخلية أو خارجية — وشاهدها محوّلة في ثوانٍ",
    items: [
      {
        id: "living",
        title: "تجديد غرفة المعيشة والمجلس",
        description: "شاهد مجلسك أو غرفة معيشتك بشكل جديد مع توزيع أثاث وألوان مناسبة.",
        cta: "أعد تصميم غرفة المعيشة",
      },
      {
        id: "bedroom",
        title: "تصميم غرفة النوم",
        description: "حوّل غرفة نومك إلى ملاذ مريح. شاهد النتيجة في 30 ثانية.",
        cta: "أعد تصميم غرفة النوم",
      },
      {
        id: "kitchen",
        title: "إعادة تصميم المطبخ",
        description: "تصوّر خزائن وأسطح وتخطيطات جديدة على صورة مطبخك الفعلي.",
        cta: "أعد تصميم مطبخي",
      },
      {
        id: "facade",
        title: "تصميم واجهة المنزل",
        description: "شاهد جاذبية منزلك الخارجية بأنماط حديثة وكلاسيكية وفاخرة.",
        cta: "أعد تصميم واجهتي",
      },
    ],
  },
  execution: {
    badge: "حصري في رواق",
    title: "من تصميم AI إلى تنفيذ حقيقي",
    subtitle:
      "على عكس أدوات التصوير فقط، رواق لا تتوقف عند الصورة — ننفّذها بمواد حقيقية ومقاولات فاخرة.",
    points: [
      "كتالوجات مواد حقيقية — خشب، رخام، زجاج، أثاث",
      "استشارة مجانية مع فريق التصميم",
      "عرض تنفيذ رسمي عبر منصة رواق",
    ],
    cta: "احجز استشارة مجانية",
    stepDesign: "تصميم AI",
    stepMaterials: "مواد حقيقية",
    stepBuild: "تنفيذ رواق",
  },
  ctaBottom: {
    badge: "3 أرصدة مجانية — بدون بطاقة",
    title: "مستعد لرؤية مساحتك بشكل جديد؟",
    subtitle: "ابدأ مجاناً — سجّل الدخول للحصول على 3 أرصدة. ثم احجز التنفيذ مع رواق.",
    cta: "أعد تصميم غرفتي مجاناً",
    note: "بدون بطاقة · استشارة مجانية · تنفيذ حقيقي",
  },
  materials: {
    title: "مكوّنات التصميم — خامات قابلة للتنفيذ",
    subtitle:
      "خامات مُستخرجة من تصميمك ومطابقة لكتالوج موردي رواق — جاهزة للتسعير والتنفيذ.",
    executableBadge: "قابل للتنفيذ من رواق",
    fallbackNotice:
      "اقتراحات خامات بناءً على النمط — التعرف بالذكاء الاصطناعي يُفعّل مع API الإنتاج.",
    available: "متوفر",
    quoteHint: "تريد عرض سعر رسمي بهذه الخامات؟ احجز استشارة مجانية.",
    quoteCta: "اطلب عرض تنفيذ",
  },
  furniture: {
    title: "مكتشف الأثاث بالذكاء الاصطناعي",
    subtitle:
      "حدّدنا قطع الأثاث في تصميمك وطابقناها مع منتجات حقيقية — بدّل البدائل بنقرة واحدة.",
    badge: "اكتشاف ذكي",
    fallbackNotice:
      "قطع مقترحة حسب نوع الغرفة — التعرف بالدبابيس يُفعّل مع API الإنتاج.",
    tapPins: "اضغط على الدبابيس المرقّمة لاستكشاف كل قطعة",
    match: "تطابق",
    showDetected: "المكتشف",
    showAlternative: "بديل",
    executable: "توريد وتركيب من رواق",
    quoteHint: "أضف هذه القطع لعرض التنفيذ بمكالمة استشارة واحدة.",
    quoteCta: "احصل على عرض أثاث",
  },
  furnitureFeature: {
    eyebrow: "مثل زوري — لكننا ننفّذ",
    title: "ارفع غرفتك. اكتشف كل قطعة. ونحن ننفّذ.",
    subtitle:
      "مكتشف الأثاث يحدد الكنب والطاولات والإضاءة والديكور — ثم رواق توردها وتركّبها بنفس جودة التصميم.",
    points: [
      "دبابيس مرقّمة على تصميمك — اضغط للاستكشاف",
      "علامات شريكة حقيقية: بان هوم، هوم سنتر، والمزيد",
      "تبديل بنقرة لمنتج بديل",
      "عرض رسمي + تركيب من مقاولات رواق",
    ],
    cta: "جرّب مكتشف الأثاث",
  },
  footer: {
    about:
      "رواق تجمع بين تصور التصميم بالذكاء الاصطناعي والديكور والمقاولات الفاخرة — من الفكرة إلى التنفيذ.",
    product: "المنتج",
    company: "الشركة",
    support: "الدعم",
    solutions: "الحلول",
    workspaceDesc:
      "عروض أسعار ذكية، جداول كميات، وإدارة مشاريع — منصة رواق التي يستخدمها فريقك.",
    workspaceCta: "الدخول إلى المنصة",
    workspaceBadge: "التطبيق الحالي",
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
