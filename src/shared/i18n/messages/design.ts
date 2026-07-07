import type { Locale } from "@/shared/i18n/locale";

export type DesignMessages = {
  brand: { name: string; tagline: string };
  nav: {
    generate: string;
    studio: string;
    work: string;
    tryTool: string;
    contactCta: string;
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
    services: string;
    ctaTryTool: string;
    ctaBespoke: string;
    noteTryToolLabel: string;
    noteTryTool: string;
    noteBespokeLabel: string;
    noteBespoke: string;
    imageAlt: string;
  };
  studioSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  paths: {
    eyebrow: string;
    title: string;
    subtitle: string;
    toolTitle: string;
    toolBody: string;
    toolPoints: string[];
    toolCta: string;
    bespokeTitle: string;
    bespokeBody: string;
    bespokePoints: string[];
    bespokeCta: string;
  };
  studio: {
    title: string;
    promptInterior: string;
    promptExterior: string;
    promptBooth: string;
    spaceInterior: string;
    spaceExterior: string;
    spaceBooth: string;
    decorFixed: string;
    decorAdvertising: string;
    projectType: string;
    boothType: string;
    uploadTitle: string;
    uploadHintInterior: string;
    uploadHintExterior: string;
    uploadHintBooth: string;
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
    previewBadge: string;
    previewNotice: string;
    executionContact: string;
    likeExecutionCta: string;
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
    successFollowUp: string;
    cta: string;
    executionCta: string;
    executionContactTitle: string;
    executionContactSubtitle: string;
    executionContactCta: string;
    interestLabel: string;
    interestExecution: string;
    interestBespoke: string;
    interestBoth: string;
    bespokeSubtitle: string;
    bothSubtitle: string;
  };
  bespoke: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: string[];
    cta: string;
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
    tabExterior: string;
    tabBooth: string;
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
    fileTooLarge: string;
    unsupportedType: string;
    imageProcessing: string;
    generic: string;
  };
};

const en: DesignMessages = {
  brand: { name: "RUWAQ", tagline: "Decor & Contracting" },
  nav: {
    generate: "Generate Design",
    studio: "AI Studio",
    work: "Our work",
    tryTool: "Try the tool",
    contactCta: "Contact us",
    designTypes: "Design Types",
    styleGallery: "Style Gallery",
    pricing: "Pricing",
    signIn: "Sign In",
    workspace: "Proposals",
    about: "About",
    contact: "Contact",
  },
  hero: {
    badge: "Ruwaq Decor & Contracting",
    title: "We design and build premium spaces",
    subtitle:
      "A Saudi contracting and decor company — fixed finishing for villas, apartments, palaces & shops, plus advertising booths and exhibitions.",
    services: "Interior · Exterior · Booths & exhibitions — Jeddah & Makkah",
    ctaTryTool: "Try the AI preview",
    ctaBespoke: "Bespoke design — contact us",
    noteTryToolLabel: "Quick preview?",
    noteTryTool: "Upload a photo below and generate a style preview in seconds — 3 free tries.",
    noteBespokeLabel: "Signature project?",
    noteBespoke: "Our design engineers craft a fully custom concept and Ruwaq executes it on site.",
    imageAlt: "Luxury palace interior designed and finished by Ruwaq",
  },
  studioSection: {
    eyebrow: "Try it yourself",
    title: "Quick AI preview — then we build it for real",
    subtitle:
      "Not just software: this tool helps you explore styles before Ruwaq turns your project into real materials, BOQs, and on-site execution.",
  },
  paths: {
    eyebrow: "Two ways to start",
    title: "Fast preview or fully bespoke",
    subtitle: "Choose the path that fits your project — both lead to Ruwaq execution.",
    toolTitle: "Explore with the AI studio",
    toolBody: "Ideal when you want a fast visual before committing.",
    toolPoints: [
      "Upload your space — interior, exterior, or booth",
      "Pick a style and city",
      "3 free watermarked previews after sign-in",
    ],
    toolCta: "Open the studio",
    bespokeTitle: "Bespoke design with our engineers",
    bespokeBody: "For villas, palaces, flagship stores, and exhibition builds that need a human touch.",
    bespokePoints: [
      "Senior Ruwaq design engineers — not AI alone",
      "Custom drawings and material boards",
      "Formal execution quote via Ruwaq workspace",
    ],
    bespokeCta: "Book a consultation",
  },
  studio: {
    title: "Create your design",
    promptInterior:
      "Upload a photo of the interior space you want to finish — villa, apartment, palace, shop, majlis, or room.",
    promptExterior:
      "Upload a photo of the exterior you want to finish — villa facade, building, shop front, or courtyard.",
    promptBooth:
      "Upload a photo of your booth, stand, or temporary exhibition space you want to redesign.",
    spaceInterior: "Interior",
    spaceExterior: "Exterior",
    spaceBooth: "Booth & expo",
    decorFixed: "Fixed decor",
    decorAdvertising: "Advertising",
    projectType: "Project type",
    boothType: "Booth / stand type",
    uploadTitle: "Click or drag and drop",
    uploadHintInterior: "Villa, apartment, palace, shop, majlis — JPG, PNG or WEBP",
    uploadHintExterior: "Facade, building, shop front, courtyard — JPG, PNG or WEBP",
    uploadHintBooth: "Booth, stand, pop-up, pavilion — JPG, PNG or WEBP",
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
    mockNotice: "Preview on your photo — connect OpenAI for full AI restyle",
    tryAnother: "Try another style",
    previewBadge: "RUWAQ PREVIEW",
    previewNotice:
      "Low-resolution preview with Ruwaq watermark — full quality unlocks with execution or a pro subscription.",
    executionContact:
      "Love the design? Contact us — we'll discuss execution, location, and project details together.",
    likeExecutionCta: "I love it — contact us for execution",
  },
  welcome: {
    title: "Welcome to Ruwaq",
    subtitle: "A decor & contracting company — try a quick AI preview or book a bespoke session.",
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
    successFollowUp: "We'll reach out to discuss your project, location, and execution details.",
    cta: "Free consultation",
    executionCta: "Request execution quote",
    executionContactTitle: "Contact us about execution",
    executionContactSubtitle:
      "Leave your details and we'll call you to discuss the design, site visit, and a formal quote.",
    executionContactCta: "Send — we'll contact you",
    interestLabel: "What do you need?",
    interestExecution: "Execute my AI preview",
    interestBespoke: "Private design with our engineers",
    interestBoth: "Execution + bespoke design",
    bespokeSubtitle:
      "Our senior design engineers will meet you and develop a fully custom, human-crafted concept for your space.",
    bothSubtitle:
      "We'll execute what you loved in the preview and our design team will refine it into a signature bespoke project.",
  },
  bespoke: {
    eyebrow: "Beyond the AI preview",
    title: "Want something truly one-of-a-kind?",
    subtitle:
      "Love the preview? Ruwaq can build it in Jeddah & Makkah. For a fully bespoke interior — our design engineers are ready to meet you.",
    points: [
      "Senior Ruwaq design engineers — human-led, not AI",
      "Custom concepts for villas, palaces, shops, and exhibition booths",
      "From mood boards to executable drawings",
      "Free introductory meeting to understand your vision",
    ],
    cta: "Book a bespoke design session",
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Three steps. Thirty seconds.",
    steps: [
      {
        title: "Upload your photo",
        description:
          "Any interior room, building exterior, or exhibition booth. JPG, PNG or WEBP — any angle works.",
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
    tabInterior: "Interior (fixed)",
    tabExterior: "Exterior (fixed)",
    tabBooth: "Booth & expo",
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
    title: "AI Design for Every Project",
    subtitle:
      "Fixed finishing for villas, apartments, palaces & shops — or temporary booths and exhibitions",
    items: [
      {
        id: "living",
        title: "Interior finishing — living & majlis",
        description:
          "See your villa, apartment, or majlis completely reimagined with finishes, furniture layout, and decor.",
        cta: "Design my interior",
      },
      {
        id: "shop",
        title: "Interior finishing — retail & shops",
        description: "Visualize shop and showroom interiors with premium materials and layout.",
        cta: "Design my shop",
      },
      {
        id: "exterior",
        title: "Exterior finishing & facades",
        description:
          "Transform villa, palace, or commercial facades with modern, classic, or Gulf luxury styles.",
        cta: "Design my exterior",
      },
      {
        id: "booth",
        title: "Booths & temporary exhibitions",
        description:
          "Redesign trade-show booths, brand activations, and pop-up stands for your next event.",
        cta: "Design my booth",
      },
    ],
  },
  execution: {
    badge: "Only on Ruwaq",
    title: "From AI design to real execution",
    subtitle:
      "Fixed decor and advertising booths — Ruwaq doesn't stop at the image. We build with real materials and premium contracting.",
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
    fileTooLarge: "Image is too large (max 8 MB).",
    unsupportedType: "Use JPG, PNG, or WEBP only.",
    imageProcessing: "Could not process the image. Try another photo.",
    generic: "Something went wrong. Please try again.",
  },
};

const ar: DesignMessages = {
  brand: { name: "رواق", tagline: "للديكور والمقاولات" },
  nav: {
    generate: "إنشاء تصميم",
    studio: "استوديو التصميم",
    work: "أعمالنا",
    tryTool: "جرّب الأداة",
    contactCta: "تواصل معنا",
    designTypes: "أنواع التصميم",
    styleGallery: "معرض الأنماط",
    pricing: "الأسعار",
    signIn: "تسجيل الدخول",
    workspace: "منصة العروض",
    about: "من نحن",
    contact: "تواصل",
  },
  hero: {
    badge: "رواق للديكور والمقاولات",
    title: "نصمّم وننفّذ مساحات فاخرة",
    subtitle:
      "شركة سعودية للديكور والمقاولات — تشطيبات ثابتة للفلل والشقق والقصور والمحلات، وديكور إعلاني للبوث والمعارض المؤقتة.",
    services: "داخلي · خارجي · بوث ومعارض — جدة ومكة",
    ctaTryTool: "جرّب معاينة الذكاء الاصطناعي",
    ctaBespoke: "تصميم خاص — تواصل معنا",
    noteTryToolLabel: "معاينة سريعة؟",
    noteTryTool: "ارفع صورتك في الأداة بالأسفل واختر نمطاً — 3 تجارب مجانية بعد التسجيل.",
    noteBespokeLabel: "مشروع مميز؟",
    noteBespoke: "مهندسو التصميم في رواق يعدّون مفهوماً خاصاً وننفّذه في الموقع بمواد حقيقية.",
    imageAlt: "داخل قصر فاخر — ديكور وتشطيبات رواق",
  },
  studioSection: {
    eyebrow: "جرّب بنفسك",
    title: "معاينة سريعة بالذكاء الاصطناعي — ثم ننفّذها حقيقياً",
    subtitle:
      "ليست مجرد برمجية: الأداة تساعدك على استكشاف الأنماط قبل أن يحوّل رواق مشروعك إلى مواد فعلية وعروض تنفيذ على أرض الواقع.",
  },
  paths: {
    eyebrow: "طريقتان للبدء",
    title: "معاينة سريعة أو تصميم خاص بالكامل",
    subtitle: "اختر ما يناسب مشروعك — كلاهما يقود إلى تنفيذ رواق.",
    toolTitle: "استكشف عبر الاستوديو الذكي",
    toolBody: "مناسب عندما تريد رؤية بصرية سريعة قبل الالتزام.",
    toolPoints: [
      "ارفع مساحتك — داخلية، خارجية، أو بوث",
      "اختر النمط والمدينة",
      "3 معاينات مجانية بعلامة مائية بعد التسجيل",
    ],
    toolCta: "افتح الاستوديو",
    bespokeTitle: "تصميم خاص مع مهندسينا",
    bespokeBody: "للفلل والقصور والمحلات الرائدة ومعارض البوث التي تحتاج لمسة بشرية فاخرة.",
    bespokePoints: [
      "مهندسو تصميم رواق — ليس ذكاءً اصطناعياً وحده",
      "مخططات ومزاج بصري ومواد مخصصة",
      "عرض تنفيذ رسمي عبر منصة رواق",
    ],
    bespokeCta: "احجز استشارة",
  },
  studio: {
    title: "أنشئ تصميمك",
    promptInterior:
      "ارفع صورة للمساحة الداخلية التي تريد تشطيبها — فيلا، شقة، قصر، محل، مجلس، أو غرفة.",
    promptExterior:
      "ارفع صورة للخارج الذي تريد تشطيبه — واجهة فيلا، مبنى، واجهة محل، أو فناء خارجي.",
    promptBooth:
      "ارفع صورة للبوث أو الستاند أو المعرض المؤقت الذي تريد إعادة تصميمه.",
    spaceInterior: "داخلي",
    spaceExterior: "خارجي",
    spaceBooth: "بوث ومعارض",
    decorFixed: "ثابت",
    decorAdvertising: "إعلاني",
    projectType: "نوع المشروع",
    boothType: "نوع البوث / المعرض",
    uploadTitle: "انقر أو اسحب وأفلت",
    uploadHintInterior: "فيلا، شقة، قصر، محل، مجلس — JPG أو PNG أو WEBP",
    uploadHintExterior: "واجهة، مبنى، محل، فناء — JPG أو PNG أو WEBP",
    uploadHintBooth: "بوث، ستاند، متجر مؤقت، جناح — JPG أو PNG أو WEBP",
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
    mockNotice: "معاينة على صورتك — فعّل OpenAI لإعادة التصميم الكاملة بالذكاء الاصطناعي",
    tryAnother: "جرّب نمطاً آخر",
    previewBadge: "معاينة رواق",
    previewNotice:
      "معاينة بدقة منخفضة وعلامة رواق المائية — الجودة الكاملة مع التنفيذ أو اشتراك احترافي.",
    executionContact:
      "أعجبك التصميم؟ تواصل معنا — نتفاهم معك حول التنفيذ والموقع وتفاصيل المشروع.",
    likeExecutionCta: "أعجبني — تواصل للتنفيذ",
  },
  welcome: {
    title: "مرحباً بك في رواق",
    subtitle: "شركة ديكور ومقاولات — جرّب معاينة سريعة أو احجز جلسة تصميم خاص.",
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
    successFollowUp: "نتواصل معك لمناقشة المشروع والموقع وتفاصيل التنفيذ.",
    cta: "استشارة مجانية",
    executionCta: "اطلب عرض تنفيذ",
    executionContactTitle: "تواصل معنا بخصوص التنفيذ",
    executionContactSubtitle:
      "اترك بياناتك وسنتصل بك لمناقشة التصميم وزيارة الموقع وعرض التنفيذ.",
    executionContactCta: "إرسال — سنتواصل معك",
    interestLabel: "ماذا تحتاج؟",
    interestExecution: "تنفيذ ما أعجبني من المعاينة",
    interestBespoke: "تصميم خاص مع مهندسينا",
    interestBoth: "تنفيذ + تصميم خاص",
    bespokeSubtitle:
      "مهندسو التصميم في رواق يلتقون معك ويعدّون مفهوماً بشرياً فاخراً ومخصصاً بالكامل لمساحتك.",
    bothSubtitle:
      "ننفّذ ما أعجبك من المعاينة، وفريق التصميم يطوّره إلى مشروع خاص يعكس ذوقك بالكامل.",
  },
  bespoke: {
    eyebrow: "أبعد من المعاينة الذكية",
    title: "تريد تصميماً خاصاً لا يشبه أحداً؟",
    subtitle:
      "أعجبتك المعاينة؟ رواق تنفّذها في جدة ومكة. ولتصميم بشري فاخر ومخصص بالكامل — مهندسو التصميم في رواق جاهزون للاجتماع معك.",
    points: [
      "مهندسو تصميم رواق — خبرة بشرية عالية، ليس ذكاءً اصطناعياً",
      "مفاهيم خاصة للفلل والقصور والمحلات وبوث المعارض",
      "من الفكرة إلى مخططات قابلة للتنفيذ",
      "اجتماع تعريفي مجاني لفهم رؤيتك",
    ],
    cta: "احجز جلسة تصميم خاص",
  },
  howItWorks: {
    eyebrow: "كيف يعمل",
    title: "ثلاث خطوات. ثلاثون ثانية.",
    steps: [
      {
        title: "ارفع صورتك",
        description:
          "أي غرفة داخلية، واجهة خارجية، أو بوث معرض. JPG أو PNG أو WEBP — أي زاوية تناسب.",
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
    tabInterior: "داخلي (ثابت)",
    tabExterior: "خارجي (ثابت)",
    tabBooth: "بوث ومعارض",
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
    title: "تصميم ذكي لكل نوع مشروع",
    subtitle:
      "تشطيبات ثابتة للفلل والشقق والقصور والمحلات — أو بوث ومعارض مؤقتة إعلانية",
    items: [
      {
        id: "living",
        title: "تشطيب داخلي — معيشة ومجلس",
        description:
          "شاهد فيلاك أو شقتك أو مجلسك بمواد وتشطيبات وأثاث جديد — ديكور ثابت فاخر.",
        cta: "صمّم الداخل",
      },
      {
        id: "shop",
        title: "تشطيب داخلي — محلات ومعارض",
        description: "تصوّر محلاتك وصالات العرض بمواد وتخطيط احترافي.",
        cta: "صمّم المحل",
      },
      {
        id: "exterior",
        title: "تشطيب خارجي وواجهات",
        description: "حوّل واجهات الفلل والقصور والمباني التجارية بأنماط حديثة وفاخرة.",
        cta: "صمّم الخارج",
      },
      {
        id: "booth",
        title: "بوث ومعارض مؤقتة",
        description: "أعد تصميم بوث المعارض وتفعيلات العلامات والمتاجر المؤقتة لفعاليتك القادمة.",
        cta: "صمّم البوث",
      },
    ],
  },
  execution: {
    badge: "حصري في رواق",
    title: "من تصميم AI إلى تنفيذ حقيقي",
    subtitle:
      "ديكور ثابت وبوث إعلاني — رواق لا تتوقف عند الصورة. ننفّذها بمواد حقيقية ومقاولات فاخرة.",
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
    fileTooLarge: "الصورة كبيرة جداً (الحد 8 ميجابايت).",
    unsupportedType: "استخدم JPG أو PNG أو WEBP فقط.",
    imageProcessing: "تعذّر معالجة الصورة. جرّب صورة أخرى.",
    generic: "حدث خطأ. يرجى المحاولة مرة أخرى.",
  },
};

export function getDesignMessages(locale: Locale): DesignMessages {
  return locale === "ar" ? ar : en;
}
