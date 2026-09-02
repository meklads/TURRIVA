import type { Locale } from "../locale";

export type LuxurySeoMessages = {
  legal: {
    privacy: {
      title: string;
      updated: string;
      intro: string;
      sections: readonly { title: string; body: string }[];
      contact: string;
    };
    terms: {
      title: string;
      updated: string;
      intro: string;
      sections: readonly { title: string; body: string }[];
      contact: string;
    };
  };
  faqPage: {
    title: string;
    intro: string;
    sections: readonly { title: string; items: readonly { q: string; a: string }[] }[];
  };
  servicesPage: {
    title: string;
    intro: string;
    items: readonly {
      slug: string;
      title: string;
      intro: string;
      points: readonly string[];
      cta: string;
      href: string;
    }[];
  };
  insightsPage: {
    title: string;
    intro: string;
    articles: readonly {
      slug: string;
      tag: string;
      title: string;
      summary: string;
      readMinutes: number;
    }[];
  };
  locationsPage: {
    title: string;
    intro: string;
    cities: readonly {
      slug: string;
      name: string;
      summary: string;
      services: readonly string[];
    }[];
  };
  groupEcosystem: {
    eyebrow: string;
    title: string;
    intro: string;
    companies: readonly {
      name: string;
      tagline: string;
      description: string;
      href: string;
      cta: string;
    }[];
    ruwaqNote: string;
    dotForLifeNote: string;
  };
  social: {
    followUs: string;
    linkedin: string;
    instagram: string;
    sharePortfolio: string;
    shareCaseStudy: string;
    copyLink: string;
    linkCopied: string;
  };
  nav: {
    styles: string;
    services: string;
    faq: string;
    insights: string;
    portfolio: string;
    launch: string;
    markets: string;
  };
  professionalsPage: ProfessionalsPageCopy;
};

export type ProfessionalsPageCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  audienceEyebrow: string;
  audienceTitle: string;
  audiences: readonly { title: string; description: string }[];
  includesEyebrow: string;
  includesTitle: string;
  includes: readonly string[];
  lockHint: string;
  gateEyebrow: string;
  gateTitle: string;
  gateIntro: string;
  gateNote: string;
  formName: string;
  formCompany: string;
  formEmail: string;
  formRole: string;
  formSubmit: string;
  formLoading: string;
  formError: string;
  formErrorPersonal: string;
  formErrorInvalid: string;
  resourcesEyebrow: string;
  resourcesTitle: string;
  downloadLabel: string;
  nextStepsTitle: string;
  nextStepsIntro: string;
  nextStepsBrief: string;
  nextStepsPortfolio: string;
  groupNote: string;
  groupLink: string;
};

const en: LuxurySeoMessages = {
  legal: {
    privacy: {
      title: "Privacy policy",
      updated: "Last updated: August 2026",
      intro:
        "Turriva (turriva.com) respects your privacy. This policy explains how we collect and use information when you browse our website, request a quote, or access our portfolio.",
      sections: [
        {
          title: "Information we collect",
          body: "Name, company, work email, phone, and project details you submit through contact forms, quote requests, or the portfolio access gate. Technical data such as browser type and pages visited when analytics is enabled.",
        },
        {
          title: "How we use information",
          body: "To respond to B2B inquiries, grant portfolio access, improve our services, and follow up on relevant projects. We do not sell personal data to third parties.",
        },
        {
          title: "Portfolio access",
          body: "Work email addresses submitted for portfolio access are verified against company domains. A secure cookie grants temporary access to the folio PDF. Access events are logged for follow-up.",
        },
        {
          title: "Cookies & language",
          body: "We use essential cookies for language preference (ar/en) and portfolio access. Optional analytics (Plausible or Google Analytics) may use anonymized usage data when configured.",
        },
        {
          title: "Group companies",
          body: "Turriva is part of Tasami Group. Related sites (Graphics House, Bees Motion, Ruwaq, DotForLife) have their own policies. We may refer you to sister companies when a project requires complementary capabilities.",
        },
        {
          title: "Your rights",
          body: "You may request correction or deletion of your contact data by emailing us. You can clear cookies or revoke portfolio access by contacting info@turriva.com.",
        },
      ],
      contact: "Privacy questions:",
    },
    terms: {
      title: "Terms of use",
      updated: "Last updated: August 2026",
      intro:
        "By using turriva.com you agree to these terms. Turriva provides information about spatial execution services and accepts project inquiries online.",
      sections: [
        {
          title: "Website purpose",
          body: "This site presents Turriva's execution capabilities, case highlights, and contact channels. Portfolio PDFs are shared with verified business contacts for evaluation purposes only.",
        },
        {
          title: "Portfolio materials",
          body: "Folio content is confidential to Turriva and Tasami Group clients. You may not redistribute, republish, or use portfolio materials for commercial purposes without written consent.",
        },
        {
          title: "Inquiries & quotes",
          body: "Form submissions do not constitute a binding contract. Final scope, pricing, and timelines are confirmed in signed agreements after site review and technical assessment.",
        },
        {
          title: "Intellectual property",
          body: "Site content, photography, and case studies remain property of Turriva or credited partners (e.g. Graphics House for visualization assets). Trademarks of partner brands belong to their owners.",
        },
        {
          title: "Disclaimer",
          body: "Information on this site is provided for general guidance. Execution outcomes depend on site conditions, approvals, and agreed scope. Turriva is not liable for decisions made solely on website content.",
        },
        {
          title: "Changes",
          body: "We may update these terms or site content. Continued use after updates constitutes acceptance.",
        },
      ],
      contact: "Legal questions:",
    },
  },
  faqPage: {
    title: "Frequently asked questions",
    intro: "Answers about Turriva's execution model, services, portfolio access, and how we work with Tasami Group sister companies.",
    sections: [
      {
        title: "About Turriva",
        items: [
          {
            q: "What does Turriva do?",
            a: "Turriva is Tasami Group's specialized spatial execution company — interior fit-out, exhibitions, furnishing, fabrication, installation, and turnkey physical delivery in Saudi Arabia and the Gulf.",
          },
          {
            q: "How is Turriva different from Graphics House?",
            a: "Graphics House leads creative visualization, CGI, smart maquettes, and launch systems (3dgraphicshouse.com). Turriva turns approved creative direction into physical reality on site.",
          },
          {
            q: "Can Bees Motion handle marketing for my project?",
            a: "Yes. Bees Motion (beesmotion.com) provides digital marketing and creative production. Tasami Group connects the right companies when a project needs both launch marketing and physical execution.",
          },
        ],
      },
      {
        title: "Services & process",
        items: [
          {
            q: "Do you work on villas and developer projects?",
            a: "Yes. Private villas and hospitality programmes are covered on /villas. Multi-unit developer and B2B programmes are on /projects.",
          },
          {
            q: "How do I access the full portfolio?",
            a: "Visit /portfolio and register with your company work email. Personal email providers (Gmail, Hotmail, etc.) are not accepted.",
          },
          {
            q: "What is the typical timeline?",
            a: "Residential programmes often run 8–14 weeks after sample sign-off. Exhibition and developer batches depend on scope — we confirm at drawing approval.",
          },
        ],
      },
    ],
  },
  servicesPage: {
    title: "Execution services",
    intro:
      "Turriva delivers the physical layer — from approved concept through fabrication, installation, and documented handover.",
    items: [
      {
        slug: "interior-execution",
        title: "Villa & residential fit-out",
        intro: "Modular kitchens, wardrobes, and full-property execution — 3D approval, sampling, factory production, and laser-verified install.",
        points: ["Shop drawings & mockups", "Modular kitchens & wardrobes", "Snagging & handover"],
        cta: "Villa execution",
        href: "/villas",
      },
      {
        slug: "hospitality-fitout",
        title: "Hospitality fit-out",
        intro: "Hotels and serviced apartments — batch joinery, wet-area finishes, and phased handover.",
        points: ["120+ unit programmes", "Moisture-aware specifications", "Opening-ready delivery"],
        cta: "Hospitality programmes",
        href: "/services/hospitality-fitout",
      },
      {
        slug: "exhibition-execution",
        title: "Exhibition & pavilion execution",
        intro: "Sales galleries and institutional exhibitions — coordinated with Graphics House launch assets.",
        points: ["Exhibition structures", "Joinery & décor", "Opening-ready delivery"],
        cta: "Exhibition execution",
        href: "/services/exhibition-execution",
      },
      {
        slug: "developer-joinery",
        title: "Developer joinery programmes",
        intro: "Repeatable modular packages across towers — specification, fabrication, phased site delivery.",
        points: ["B2B batching", "Factory QC", "Milestone-aligned install"],
        cta: "Developer joinery",
        href: "/services/developer-joinery",
      },
      {
        slug: "commercial-fitout",
        title: "Commercial & retail fit-out",
        intro: "Premium retail, offices, and branded environments from approved concept to handover.",
        points: ["Technical development", "Feature joinery", "Documented snagging"],
        cta: "Commercial fit-out",
        href: "/services/commercial-fitout",
      },
    ],
  },
  insightsPage: {
    title: "Execution insights",
    intro:
      "Practical guides and case highlights for developers, architects, and owners planning fit-out in Saudi Arabia.",
    articles: [
      {
        slug: "before-design-to-handover",
        tag: "Process",
        title: "From approved 3D to handover: the Turriva execution path",
        summary: "How technical development, sampling, fabrication, and site installation connect under one accountable team.",
        readMinutes: 6,
      },
      {
        slug: "exhibition-launch-with-graphics-house",
        tag: "Tasami Group",
        title: "When a launch needs CGI and physical delivery together",
        summary: "How Graphics House visualization and Turriva field execution complement each other on developer programmes.",
        readMinutes: 5,
      },
      {
        slug: "modular-kitchen-gulf-homes",
        tag: "Residential",
        title: "Modular kitchens for Gulf climate: materials that survive daily life",
        summary: "Moisture-resistant cores, hardware selection, and factory tolerance for Jeddah and Makkah villas.",
        readMinutes: 7,
      },
      {
        slug: "portfolio-access-for-professionals",
        tag: "Portfolio",
        title: "Why Turriva gates the 2026 folio behind a company email",
        summary: "How verified B2B access protects confidential project documentation while keeping public case highlights open.",
        readMinutes: 4,
      },
    ],
  },
  locationsPage: {
    title: "Locations we serve",
    intro: "Turriva executes across Saudi Arabia and the Gulf with offices in Jeddah, Muscat, Manama, and Cairo.",
    cities: [
      {
        slug: "jeddah",
        name: "Jeddah",
        summary: "HQ and primary execution hub for Western Region villas, hospitality, and exhibition programmes.",
        services: ["Villa fit-out", "Modular kitchens", "Exhibition execution"],
      },
      {
        slug: "makkah",
        name: "Makkah",
        summary: "Hospitality and religious tourism fit-out with moisture-aware specifications.",
        services: ["Hotel joinery", "Batch unit delivery", "Wet-area finishes"],
      },
      {
        slug: "riyadh",
        name: "Riyadh",
        summary: "Developer pavilions and B2B joinery batches across central region programmes.",
        services: ["Pavilion execution", "Sales gallery fit-out", "B2B modular joinery"],
      },
    ],
  },
  groupEcosystem: {
    eyebrow: "Tasami Group ecosystem",
    title: "One group. Complementary specialists.",
    intro:
      "Turriva executes on site. Sister companies cover creative visualization, marketing, property discovery, and family lifestyle content — connected when your project needs more than one discipline.",
    companies: [
      {
        name: "Graphics House",
        tagline: "Creative & visual experiences",
        description:
          "Cinematic CGI, smart maquettes, interactive sales tools, and spatial design for GCC developers — from concept to pre-sale launch.",
        href: "https://3dgraphicshouse.com",
        cta: "Explore Graphics House",
      },
      {
        name: "Bees Motion",
        tagline: "Digital marketing & creative production",
        description:
          "Strategy, campaigns, film, motion, and healthcare/real-estate marketing — production built in, not bolted on.",
        href: "https://beesmotion.com",
        cta: "Explore Bees Motion",
      },
      {
        name: "Ruwaq",
        tagline: "Property & design directory",
        description:
          "Verified professionals, project tours, and fit-out guides for Jeddah, Makkah, and Madinah — Turriva is listed on Ruwaq PRO.",
        href: "https://ruwaq.co",
        cta: "Visit Ruwaq",
      },
      {
        name: "DotForLife",
        tagline: "Family lifestyle platform",
        description:
          "Calm guides for Gulf families on home, finance, and life decisions — editorial content that reaches homeowners planning renovations.",
        href: "https://dotforlife.com",
        cta: "Explore DotForLife",
      },
    ],
    ruwaqNote: "See Turriva on Ruwaq PRO tours and verified fit-out listings.",
    dotForLifeNote: "Home renovation guides connect family decision-makers to execution partners.",
  },
  social: {
    followUs: "Follow Turriva",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    sharePortfolio: "Share with a colleague",
    shareCaseStudy: "Share this project",
    copyLink: "Copy link",
    linkCopied: "Link copied",
  },
  nav: {
    styles: "Design styles",
    services: "Services",
    faq: "FAQ",
    insights: "Insights",
    portfolio: "Portfolio",
    launch: "Launch path",
    markets: "Markets",
  },
  professionalsPage: {
    eyebrow: "Turriva · Technical resources",
    title: "For professionals",
    intro:
      "Specification sheets, programme guides, and compliance notes for architects, interior designers, developers, and contractors — from the Turriva execution team.",
    audienceEyebrow: "Who this is for",
    audienceTitle: "Built for project specifiers",
    audiences: [
      { title: "Architects", description: "Typical details, tolerance bands, and handover documentation for joinery packages." },
      { title: "Interior designers", description: "Factory-to-site coordination notes and modular kitchen logic." },
      { title: "Developers", description: "Batch programme guides for towers, hospitality, and sales environments." },
      { title: "Contractors", description: "QC checkpoints, phased delivery, and Gulf environment specifications." },
    ],
    includesEyebrow: "What's inside",
    includesTitle: "Downloadable technical briefs",
    includes: [
      "Joinery specification overview — tolerance, QC, and handover",
      "Modular kitchen typical details — modules, wet zones, coordination",
      "Hospitality batch programme guide — phased delivery and snagging",
      "Gulf compliance & environment notes — moisture, SASO references, markets served",
    ],
    lockHint: "Register with your work email to unlock downloads.",
    gateEyebrow: "Professional access",
    gateTitle: "Unlock technical resources",
    gateIntro: "Enter your details to download Turriva specification briefs. We use work email to keep resources oriented to active project teams.",
    gateNote: "Personal email addresses (Gmail, Hotmail, etc.) cannot be used. Use your company domain.",
    formName: "Full name",
    formCompany: "Company / studio",
    formEmail: "Work email",
    formRole: "Role (optional) — e.g. Architect, PM",
    formSubmit: "Unlock resources",
    formLoading: "Verifying…",
    formError: "Something went wrong. Please try again or contact us.",
    formErrorPersonal: "Please use your company work email, not a personal address.",
    formErrorInvalid: "Please check your details and try again.",
    resourcesEyebrow: "Your downloads",
    resourcesTitle: "Technical briefs",
    downloadLabel: "Download",
    nextStepsTitle: "Ready to specify a programme?",
    nextStepsIntro: "Send drawings or a structured brief — our execution team responds within one business day.",
    nextStepsBrief: "Submit project brief",
    nextStepsPortfolio: "View gated portfolio",
    groupNote: "Turriva is a Tasami Group company. Learn about the wider ecosystem at",
    groupLink: "Tasami Group",
  },
};

const ar: LuxurySeoMessages = {
  legal: {
    privacy: {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث: أغسطس 2026",
      intro:
        "تحترم توريفا (turriva.com) خصوصيتك. توضّح هذه السياسة كيف نجمع ونستخدم المعلومات عند تصفح الموقع أو طلب عرض أو الوصول للبورتفوليو.",
      sections: [
        {
          title: "المعلومات التي نجمعها",
          body: "الاسم والشركة والبريد الوظيفي والجوال وتفاصيل المشروع عبر النماذج أو بوابة البورتفوليو. بيانات تقنية مثل نوع المتصفح والصفحات التي تمت زيارتها عند تفعيل التحليلات.",
        },
        {
          title: "كيف نستخدم المعلومات",
          body: "للرد على استفسارات B2B، منح الوصول للبورتفوليو، تحسين خدماتنا، ومتابعة المشاريع ذات الصلة. لا نبيع البيانات الشخصية.",
        },
        {
          title: "الوصول للبورتفوليو",
          body: "نتحقق من أن البريد الوظيفي تابع لنطاق شركة. cookie آمن يمنح وصولاً مؤقتاً لملف PDF. نسجل طلبات الوصول للمتابعة.",
        },
        {
          title: "Cookies واللغة",
          body: "نستخدم cookies أساسية للغة (ar/en) والبورتفوليو. قد تُستخدم تحليلات اختيارية (Plausible أو Google Analytics) ببيانات مجهولة.",
        },
        {
          title: "شركات المجموعة",
          body: "توريفا جزء من مجموعة تسامي. للمواقع الشقيقة (Graphics House, Bees Motion, Ruwaq, DotForLife) سياساتها الخاصة. قد نحيلك لشركة شقيقة عند الحاجة.",
        },
        {
          title: "حقوقك",
          body: "يمكنك طلب تصحيح أو حذف بياناتك عبر البريد. يمكنك مسح cookies أو إلغاء وصول البورتفوليو بالتواصل مع info@turriva.com.",
        },
      ],
      contact: "أسئلة الخصوصية:",
    },
    terms: {
      title: "شروط الاستخدام",
      updated: "آخر تحديث: أغسطس 2026",
      intro: "باستخدام turriva.com فإنك توافق على هذه الشروط. يقدّم الموقع معلومات عن خدمات التنفيذ ويستقبل استفسارات المشاريع.",
      sections: [
        {
          title: "غرض الموقع",
          body: "يعرض قدرات توريفا في التنفيذ ونماذج المشاريع وقنوات التواصل. ملفات البورتفوليو تُشارك مع جهات اتصال تجارية موثّقة للتقييم فقط.",
        },
        {
          title: "مواد البورتفوليو",
          body: "محتوى الفوليو سري لعملاء توريفا ومجموعة تسامي. لا يجوز إعادة نشره أو استخدامه تجارياً دون موافقة خطية.",
        },
        {
          title: "الاستفسارات والعروض",
          body: "إرسال النماذج لا يُنشئ عقداً ملزماً. النطاق والأسعار والجداول تُؤكد في اتفاقيات موقّعة بعد المعاينة.",
        },
        {
          title: "الملكية الفكرية",
          body: "محتوى الموقع والصور ودراسات الحالة ملك لتوريفا أو شركاء م credited (مثل Graphics House للتصور). العلامات التجارية للشركاء ملك لأصحابها.",
        },
        {
          title: "إخلاء مسؤولية",
          body: "المعلومات للإرشاد العام. النتائج تعتمد على الموقع والموافقات والنطاق المتفق عليه.",
        },
        {
          title: "التعديلات",
          body: "قد نحدّث هذه الشروط. الاستمرار في الاستخدام بعد التحديث يعني الموافقة.",
        },
      ],
      contact: "أسئلة قانونية:",
    },
  },
  faqPage: {
    title: "الأسئلة الشائعة",
    intro: "إجابات عن نموذج تنفيذ توريفا والخدمات والبورتفوليو والعمل مع شركات مجموعة تسامي.",
    sections: [
      {
        title: "عن توريفا",
        items: [
          {
            q: "ماذا تفعل توريفا؟",
            a: "توريفا شركة تنفيذ المساحات ضمن مجموعة تسامي — تشطيب داخلي، معارض، تأثيث، تصنيع، تركيب، وتسليم ميداني في السعودية والخليج.",
          },
          {
            q: "ما الفرق بين توريفا وGraphics House؟",
            a: "Graphics House تقود التصور الإبداعي وCGI والماكيت الذكي (3dgraphicshouse.com). توريفا تحوّل التوجه المعتمد إلى واقع مادي في الموقع.",
          },
          {
            q: "هل Bees Motion تتولى التسويق؟",
            a: "نعم. Bees Motion (beesmotion.com) للتسويق الرقمي والإنتاج الإبداعي. مجموعة تسامي تربط الشركات عند الحاجة للتسويق والتنفيذ معاً.",
          },
        ],
      },
      {
        title: "الخدمات والعملية",
        items: [
          {
            q: "هل تعملون على الفلل ومشاريع المطورين؟",
            a: "نعم. الفلل والضيافة في /villas. مشاريع المطورين B2B في /projects.",
          },
          {
            q: "كيف أصل للبورتفوليو الكامل؟",
            a: "زر /portfolio وسجّل ببريد شركتك. لا نقبل البريد الشخصي.",
          },
          {
            q: "ما المدة المتوقعة؟",
            a: "البرامج السكنية غالباً 8–14 أسبوعاً بعد اعتماد العينات. المعارض والمطورين حسب النطاق.",
          },
        ],
      },
    ],
  },
  servicesPage: {
    title: "خدمات التنفيذ",
    intro: "توريفا تسلّم الطبقة المادية — من المفهوم المعتمد إلى التصنيع والتركيب والتسليم الموثق.",
    items: [
      {
        slug: "interior-execution",
        title: "تشطيب الفلل والسكني",
        intro: "مطابخ وخزائن معيارية وتنفيذ عقار كامل — اعتماد 3D وعينات وإنتاج مصنع وتركيب بتحقق ليزري.",
        points: ["رسومات تنفيذية وmockups", "مطابخ وخزائن معيارية", "إغلاق ملاحظات وتسليم"],
        cta: "تنفيذ سكني",
        href: "/villas",
      },
      {
        slug: "hospitality-fitout",
        title: "تشطيب الضيافة",
        intro: "فنادق وشقق فندقية — نجارة على دفعات وتشطيب مناطق رطبة وتسليم مرحلي.",
        points: ["برامج 120+ وحدة", "مواصفات مقاومة للرطوبة", "تسليم جاهز للافتتاح"],
        cta: "برامج ضيافة",
        href: "/services/hospitality-fitout",
      },
      {
        slug: "exhibition-execution",
        title: "تنفيذ المعارض والبافيلions",
        intro: "معارض مبيعات ومؤسسية — منسّقة مع أصول إطلاق Graphics House.",
        points: ["هياكل معارض", "نجارة وديكور", "تسليم جاهز للافتتاح"],
        cta: "تنفيذ معارض",
        href: "/services/exhibition-execution",
      },
      {
        slug: "developer-joinery",
        title: "نجارة المطورين",
        intro: "حزم معيارية قابلة للتكرار عبر الأبراج — مواصفات وتصنيع وتسليم مرحلي.",
        points: ["دفعات B2B", "فحص جودة مصنع", "تركيب متوافق مع المراحل"],
        cta: "نجارة مطورين",
        href: "/services/developer-joinery",
      },
      {
        slug: "commercial-fitout",
        title: "تشطيب تجاري وتجزئة",
        intro: "تجزئة premium ومكاتب وبيئات علامات — من المفهوم المعتمد إلى التسليم.",
        points: ["تطوير فني", "نجارة مميزة", "إغلاق ملاحظات موثّق"],
        cta: "تشطيب تجاري",
        href: "/services/commercial-fitout",
      },
    ],
  },
  insightsPage: {
    title: "رؤى التنفيذ",
    intro: "أدلة عملية ونماذج مشاريع للمطورين والمعماريين وملاك العقار في السعودية.",
    articles: [
      {
        slug: "before-design-to-handover",
        tag: "العملية",
        title: "من 3D المعتمد إلى التسليم: مسار تنفيذ توريفا",
        summary: "كيف يرتبط التطوير الفني والعينات والتصنيع والتركيب تحت فريق واحد.",
        readMinutes: 6,
      },
      {
        slug: "exhibition-launch-with-graphics-house",
        tag: "مجموعة تسامي",
        title: "عندما يحتاج الإطلاق CGI وتسليم مادي معاً",
        summary: "كيف يكمل تصور Graphics House والتنفيذ الميداني لتوريفا في برامج المطورين.",
        readMinutes: 5,
      },
      {
        slug: "modular-kitchen-gulf-homes",
        tag: "سكني",
        title: "مطابخ معيارية لمناخ الخليج: مواد تتحمل الحياة اليومية",
        summary: "نوى مقاومة للرطوبة واختيار hardware ودقة مصنع لفلل جدة ومكة.",
        readMinutes: 7,
      },
      {
        slug: "portfolio-access-for-professionals",
        tag: "البورتفوليو",
        title: "لماذا يتطلب فوليو 2026 بريداً وظيفياً",
        summary: "كيف يحمي الوصول المهني الموثّق وثائق المشاريع السرية مع إبقاء النماذج العامة متاحة.",
        readMinutes: 4,
      },
    ],
  },
  locationsPage: {
    title: "المناطق التي نخدمها",
    intro: "تنفيذ في السعودية والخليج — مكاتب في جدة ومسقط والمنامة والقاهرة.",
    cities: [
      {
        slug: "jeddah",
        name: "جدة",
        summary: "المقر الرئيسي ومركز التنفيذ للفلل والضيافة والمعارض في المنطقة الغربية.",
        services: ["تشطيب فلل", "مطابخ معيارية", "تنفيذ معارض"],
      },
      {
        slug: "makkah",
        name: "مكة",
        summary: "تشطيب ضيافة وسياحة دينية بمواصفات مقاومة للرطوبة.",
        services: ["نجارة فندقية", "تسليم وحدات على دفعات", "تشطيب مناطق رطبة"],
      },
      {
        slug: "riyadh",
        name: "الرياض",
        summary: "بافيلions مطورين ودفعات نجارة B2B في الوسط.",
        services: ["تنفيذ بافيلions", "تشطيب معارض مبيعات", "نجارة معيارية B2B"],
      },
    ],
  },
  groupEcosystem: {
    eyebrow: "منظومة مجموعة تسامي",
    title: "مجموعة واحدة. تخصصات متكاملة.",
    intro:
      "توريفا تنفّذ في الموقع. الشركات الشقيقة تغطي التصور والتسويق واكتشاف العقار ومحتوى الأسرة — تُربط عندما يحتاج مشروعك أكثر من تخصص.",
    companies: [
      {
        name: "Graphics House",
        tagline: "تجارب إبداعية وبصرية",
        description: "CGI سينمائي، ماكيت ذكي، أدوات مبيعات تفاعلية، وتصميم مكاني لمطوري الخليج.",
        href: "https://3dgraphicshouse.com",
        cta: "استكشف Graphics House",
      },
      {
        name: "Bees Motion",
        tagline: "تسويق رقمي وإنتاج إبداعي",
        description: "استراتيجية وحملات وأفلام وmotion — تسويق صحي وعقاري بإنتاج مدمج.",
        href: "https://beesmotion.com",
        cta: "استكشف Bees Motion",
      },
      {
        name: "Ruwaq",
        tagline: "دليل العقار والتصميم",
        description: "محترفون موثّقون وجولات مشاريع وأدلة تشطيب في جدة ومكة والمدينة — توريفا على Ruwaq PRO.",
        href: "https://ruwaq.co",
        cta: "زيارة Ruwaq",
      },
      {
        name: "DotForLife",
        tagline: "منصة أسلوب حياة للأسرة",
        description: "أدلة هادئة للعائلات الخليجية عن المنزل والمال — محتوى يصل لمن يخطط للتجديد.",
        href: "https://dotforlife.com",
        cta: "استكشف DotForLife",
      },
    ],
    ruwaqNote: "شاهد توريفا في جولات Ruwaq PRO وقوائم التشطيب الموثّقة.",
    dotForLifeNote: "أدلة تجديد المنزل تصل لصناع قرار الأسرة.",
  },
  social: {
    followUs: "تابع توريفا",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    sharePortfolio: "شارك مع زميل",
    shareCaseStudy: "شارك هذا المشروع",
    copyLink: "نسخ الرابط",
    linkCopied: "تم نسخ الرابط",
  },
  nav: {
    styles: "أساليب التصميم",
    services: "الخدمات",
    faq: "الأسئلة الشائعة",
    insights: "رؤى",
    portfolio: "البورتفوليو",
    launch: "مسار الإطلاق",
    markets: "الأسواق",
  },
  professionalsPage: {
    eyebrow: "توريفا · موارد فنية",
    title: "للمهندسين",
    intro:
      "ملفات مواصفات وأدلة برامج وملاحظات مطابقة — للمهندسين المعماريين ومصممي الداخل والمطورين والمقاولين — من فريق تنفيذ توريفا.",
    audienceEyebrow: "لمن هذه البوابة",
    audienceTitle: "مصممة لتحديد مواصفات المشاريع",
    audiences: [
      { title: "مهندسون معماريون", description: "تفاصيل typicals ونطاقات التسامح وتوثيق التسليم لحزم النجارة." },
      { title: "مصممو داخل", description: "ملاحظات تنسيق المصنع مع الموقع ومنطق المطبخ المعياري." },
      { title: "مطورون", description: "أدلة برامج على دفعات للأبراج والضيافة وبيئات المبيعات." },
      { title: "مقاولون", description: "نقاط فحص الجودة والتسليم المرحلي ومواصفات بيئة الخليج." },
    ],
    includesEyebrow: "ما بداخل البوابة",
    includesTitle: "ملخصات فنية للتحميل",
    includes: [
      "نظرة عامة على مواصفات النجارة — التسامح والجودة والتسليم",
      "تفاصيل typicals للمطبخ المعياري — الوحدات والمناطق الرطبة والتنسيق",
      "دليل برامج الضيافة على دفعات — تسليم مرحلي وإغلاق ملاحظات",
      "ملاحظات المطابقة وبيئة الخليج — الرطوبة ومراجع SASO والأسواق",
    ],
    lockHint: "سجّل ببريدك الوظيفي لفتح التحميلات.",
    gateEyebrow: "وصول مهني",
    gateTitle: "افتح الموارد الفنية",
    gateIntro: "أدخل بياناتك لتحميل ملخصات مواصفات توريفا. نستخدم البريد الوظيفي لتوجيه الموارد لفرق المشاريع النشطة.",
    gateNote: "لا يمكن استخدام بريد شخصي (Gmail، Hotmail، إلخ). استخدم نطاق شركتك.",
    formName: "الاسم الكامل",
    formCompany: "الشركة / المكتب",
    formEmail: "البريد الوظيفي",
    formRole: "الدور (اختياري) — مثال: مهندس، PM",
    formSubmit: "فتح الموارد",
    formLoading: "جاري التحقق…",
    formError: "حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا.",
    formErrorPersonal: "يرجى استخدام بريد شركتك الوظيفي وليس بريداً شخصياً.",
    formErrorInvalid: "يرجى التحقق من البيانات والمحاولة مرة أخرى.",
    resourcesEyebrow: "تحميلاتك",
    resourcesTitle: "الملخصات الفنية",
    downloadLabel: "تحميل",
    nextStepsTitle: "جاهز لتحديد برنامج؟",
    nextStepsIntro: "أرسل الرسومات أو ملخصاً منظماً — يرد فريق التنفيذ خلال يوم عمل.",
    nextStepsBrief: "قدّم ملخص المشروع",
    nextStepsPortfolio: "عرض البورتفوليو",
    groupNote: "توريفا شركة تنفيذ ضمن مجموعة تسامي. تعرّف على المنظومة الأوسع في",
    groupLink: "مجموعة تسامي",
  },
};

export function getLuxurySeoMessages(locale: Locale): LuxurySeoMessages {
  return locale === "ar" ? ar : en;
}
