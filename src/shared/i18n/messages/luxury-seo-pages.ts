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
        "This policy explains how Turriva collects, uses, and protects information when you visit turriva.com, discuss a project, or access professional resources.",
      sections: [
        {
          title: "Information we collect",
          body: "We may collect the name, company, work email, phone number, and project details you submit through contact forms or resource access forms. When analytics is enabled, we may also collect technical data such as browser type and pages visited.",
        },
        {
          title: "How we use information",
          body: "We use this information to respond to enquiries, provide resource access, improve our services, and follow up on relevant projects. We do not sell personal data to third parties.",
        },
        {
          title: "Portfolio access",
          body: "Work email addresses submitted for portfolio access may be checked against company domains. A secure cookie provides temporary access to the portfolio PDF, and access events may be recorded for service and follow-up purposes.",
        },
        {
          title: "Cookies and language",
          body: "We use essential cookies for language preferences and portfolio access. If optional analytics are configured, they may process anonymised usage data.",
        },
        {
          title: "Group companies",
          body: "Turriva is part of Tasami Group. Related company websites maintain their own privacy policies. With your knowledge, we may introduce a sister company when a project requires complementary capabilities.",
        },
        {
          title: "Your rights",
          body: "You may ask us to correct or delete your contact data by email. You can also clear cookies in your browser or contact info@turriva.com about portfolio access.",
        },
      ],
      contact: "Privacy questions:",
    },
    terms: {
      title: "Terms of use",
      updated: "Last updated: August 2026",
      intro:
        "These terms govern the use of turriva.com, which presents Turriva's spatial design, experience, and build capabilities and provides channels for project enquiries.",
      sections: [
        {
          title: "Website purpose",
          body: "This site presents Turriva's capabilities, selected work, and contact channels. Portfolio PDFs are shared with verified professional contacts for evaluation purposes only.",
        },
        {
          title: "Portfolio materials",
          body: "Portfolio content may include confidential material belonging to Turriva, Tasami Group, or their clients. It may not be redistributed, republished, or used commercially without written consent.",
        },
        {
          title: "Project enquiries",
          body: "Submitting a form or sending drawings does not create a binding contract. Scope, fees, and programme are confirmed only in a signed agreement following the relevant review and technical assessment.",
        },
        {
          title: "Intellectual property",
          body: "Site content, photography, and case studies belong to Turriva or the credited rights holder. Partner trademarks remain the property of their respective owners.",
        },
        {
          title: "Disclaimer",
          body: "Information on this site is provided for general guidance. Project outcomes depend on site conditions, approvals, and the agreed scope. Website content should not replace project-specific professional advice.",
        },
        {
          title: "Changes",
          body: "We may update these terms from time to time. The latest version and update date will be published on this page.",
        },
      ],
      contact: "Legal questions:",
    },
  },
  faqPage: {
    title: "Questions, answered",
    intro: "Clear information about Turriva's services, delivery process, professional resources, and Tasami Group relationships.",
    sections: [
      {
        title: "About Turriva",
        items: [
          {
            q: "What does Turriva do?",
            a: "Turriva provides spatial design, experience, and build services. We develop approved ideas into coordinated technical packages and deliver the physical space. Turriva can be appointed independently.",
          },
          {
            q: "How is Turriva different from Graphics House?",
            a: "Graphics House specialises in visualisation, CGI, models, and launch tools. Turriva focuses on developing and delivering the physical space. The two teams can collaborate when a brief requires both.",
          },
          {
            q: "Can Bees Motion handle marketing for my project?",
            a: "Bees Motion provides marketing strategy, campaigns, and creative production. It can join a Turriva project when the brief also includes launch or communication support.",
          },
        ],
      },
      {
        title: "Services & process",
        items: [
          {
            q: "Do you work on villas and developer projects?",
            a: "Yes. We work on private residences, hospitality spaces, exhibitions, and developer programmes. The process and delivery structure are tailored to the scope.",
          },
          {
            q: "How do I access the full portfolio?",
            a: "Open the Portfolio page and register with your company email. Professional access helps us share project material with relevant industry contacts.",
          },
          {
            q: "What is the typical timeline?",
            a: "Timelines depend on scope, approvals, materials, fabrication, and site readiness. We establish the programme after reviewing the drawings and confirm it with the approved project scope.",
          },
        ],
      },
    ],
  },
  servicesPage: {
    title: "Capabilities",
    intro: "Spatial design, experience, and build capabilities brought together around the requirements of each project.",
    items: [
      {
        slug: "spatial-design",
        title: "Spatial design",
        intro: "Plans, materials, and movement developed around how the space needs to look, feel, and work.",
        points: ["Spatial concept", "Material direction", "User journey"],
        cta: "Discuss your space",
        href: "/design-build",
      },
      {
        slug: "technical-development",
        title: "Technical development",
        intro: "Approved design intent translated into coordinated drawings, quantities, and buildable specifications.",
        points: ["Shop drawings", "Quantities", "Technical coordination"],
        cta: "Send your drawings",
        href: "/fit-out",
      },
      {
        slug: "fit-out",
        title: "Fit-out and installation",
        intro: "Site delivery, installation, supervision, and trade coordination through to handover.",
        points: ["Installation", "Site coordination", "Quality and handover"],
        cta: "Discuss your project",
        href: "/fit-out",
      },
      {
        slug: "joinery",
        title: "Joinery and fabrication",
        intro: "Custom joinery fabricated to approved drawings, with materials and hardware selected for the project.",
        points: ["Approved drawings", "Specified materials", "Selected hardware"],
        cta: "Send your drawings",
        href: "/fit-out",
      },
      {
        slug: "supply",
        title: "Procurement and supply",
        intro: "Materials, furniture, and lighting sourced and coordinated against the approved specification.",
        points: ["Specification-led sourcing", "Supplier coordination", "Phased delivery"],
        cta: "Discuss your requirements",
        href: "/fit-out",
      },
      {
        slug: "experience",
        title: "Spatial experience",
        intro: "Environments shaped around how guests arrive, move, understand, and engage with a place.",
        points: ["Sales environments", "Guest journey", "Integrated delivery"],
        cta: "Discuss the experience",
        href: "/real-estate-experience",
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
    title: "One company, wider support when needed",
    intro:
      "Turriva designs and delivers the space. Graphics House supports visualisation, while Bees Motion supports launch and communication. Each company can work independently or together when the brief calls for it.",
    companies: [
      {
        name: "Graphics House",
        tagline: "CREATE · visual work",
        description:
          "CGI, models, interactive sales tools, and visual direction for real estate and destination projects.",
        href: "https://3dgraphicshouse.com",
        cta: "Explore Graphics House",
      },
      {
        name: "Bees Motion",
        tagline: "GROW · launch and campaigns",
        description:
          "Strategy, campaigns, film, and creative production for healthcare and real estate brands.",
        href: "https://beesmotion.com",
        cta: "Explore Bees Motion",
      },
      {
        name: "Ruwaq",
        tagline: "Property & design directory",
        description:
          "A property and design directory featuring professionals, project visits, and practical fit-out content.",
        href: "https://ruwaq.co",
        cta: "Visit Ruwaq",
      },
    ],
    ruwaqNote: "Find Turriva's professional profile and project content on Ruwaq PRO.",
  },
  social: {
    followUs: "Follow Turriva",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    sharePortfolio: "Share the portfolio",
    shareCaseStudy: "Share this project",
    copyLink: "Copy link",
    linkCopied: "Link copied",
  },
  nav: {
    styles: "Design styles",
    services: "Capabilities",
    faq: "FAQ",
    insights: "Insights",
    portfolio: "Portfolio",
    launch: "Launch path",
    markets: "Markets",
  },
  professionalsPage: {
    eyebrow: "Turriva · Technical resources",
    title: "Technical resources",
    intro:
      "Practical specification notes and programme guides for architects, interior designers, developers, and contractors.",
    audienceEyebrow: "Who this is for",
    audienceTitle: "For project teams",
    audiences: [
      { title: "Architects", description: "Typical details, coordination principles, and handover requirements for joinery packages." },
      { title: "Interior designers", description: "Fabrication-to-site coordination and modular planning guidance." },
      { title: "Developers", description: "Programme guidance for residential, hospitality, and sales environments." },
      { title: "Contractors", description: "Quality checkpoints, phased delivery, and project coordination notes." },
    ],
    includesEyebrow: "What's inside",
    includesTitle: "Technical briefs",
    includes: [
      "Joinery specification overview: coordination, quality checks, and handover",
      "Modular kitchen details: modules, wet zones, and coordination",
      "Hospitality batch programme guide: phased delivery and snagging",
      "Regional environment notes: moisture, documentation, and material considerations",
    ],
    lockHint: "Use your work email to access the downloads.",
    gateEyebrow: "Professional access",
    gateTitle: "Access technical resources",
    gateIntro: "Enter your details to download Turriva's technical briefs. Work email access keeps these resources relevant to professional project teams.",
    gateNote: "Please use your company email address rather than a personal email provider.",
    formName: "Full name",
    formCompany: "Company / studio",
    formEmail: "Work email",
    formRole: "Role (optional), for example architect or project manager",
    formSubmit: "Access resources",
    formLoading: "Verifying…",
    formError: "Something went wrong. Please try again or contact us.",
    formErrorPersonal: "Please use your company work email, not a personal address.",
    formErrorInvalid: "Please check your details and try again.",
    resourcesEyebrow: "Your downloads",
    resourcesTitle: "Technical briefs",
    downloadLabel: "Download",
    nextStepsTitle: "Planning a project?",
    nextStepsIntro: "Send your drawings or a structured brief, and our team will review the requirements with you.",
    nextStepsBrief: "Send your project brief",
    nextStepsPortfolio: "View the portfolio",
    groupNote: "Turriva is part of Tasami Group. Explore the wider group at",
    groupLink: "Tasami Group",
  },
};

const ar: LuxurySeoMessages = {
  legal: {
    privacy: {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث: أغسطس 2026",
      intro:
        "توضح هذه السياسة كيفية جمع توريفا للمعلومات واستخدامها وحمايتها عند زيارة turriva.com أو مناقشة مشروع أو الوصول إلى الموارد المهنية.",
      sections: [
        {
          title: "المعلومات التي نجمعها",
          body: "قد نجمع الاسم والشركة والبريد الوظيفي ورقم الجوال وتفاصيل المشروع التي ترسلها عبر نماذج التواصل أو الوصول إلى الموارد. وعند تفعيل التحليلات، قد نجمع بيانات تقنية مثل نوع المتصفح والصفحات التي تمت زيارتها.",
        },
        {
          title: "كيف نستخدم المعلومات",
          body: "نستخدم هذه المعلومات للرد على الاستفسارات وإتاحة الموارد وتحسين خدماتنا ومتابعة المشاريع ذات الصلة. ولا نبيع البيانات الشخصية لأي طرف ثالث.",
        },
        {
          title: "الوصول إلى ملف الأعمال",
          body: "قد نتحقق من ارتباط البريد الوظيفي بنطاق شركة. ويتيح ملف تعريف ارتباط آمن وصولاً مؤقتاً إلى ملف الأعمال، كما قد تُسجل عمليات الوصول لأغراض الخدمة والمتابعة.",
        },
        {
          title: "ملفات تعريف الارتباط واللغة",
          body: "نستخدم ملفات تعريف ارتباط أساسية لحفظ تفضيلات اللغة وإتاحة ملف الأعمال. وقد تعالج أدوات التحليل الاختيارية بيانات استخدام مجهولة عند تفعيلها.",
        },
        {
          title: "شركات المجموعة",
          body: "توريفا جزء من مجموعة تسامي، ولكل موقع تابع لشركات المجموعة سياسة خصوصية مستقلة. وقد نعرّفك بإحدى الشركات الشقيقة، بعلمك، عندما يحتاج المشروع إلى قدرات مكملة.",
        },
        {
          title: "حقوقك",
          body: "يمكنك طلب تصحيح بيانات التواصل أو حذفها عبر البريد الإلكتروني. كما يمكنك مسح ملفات تعريف الارتباط من المتصفح أو التواصل مع info@turriva.com بشأن الوصول إلى ملف الأعمال.",
        },
      ],
      contact: "أسئلة الخصوصية:",
    },
    terms: {
      title: "شروط الاستخدام",
      updated: "آخر تحديث: أغسطس 2026",
      intro: "تنظم هذه الشروط استخدام turriva.com، حيث يعرض الموقع قدرات توريفا في التصميم المكاني والتجربة والتنفيذ ويوفر قنوات للتواصل بشأن المشاريع.",
      sections: [
        {
          title: "غرض الموقع",
          body: "يعرض الموقع قدرات توريفا وأعمالاً مختارة وقنوات التواصل. وتُشارك ملفات الأعمال مع جهات مهنية موثقة لأغراض التقييم فقط.",
        },
        {
          title: "مواد ملف الأعمال",
          body: "قد يتضمن ملف الأعمال مواد سرية تخص توريفا أو مجموعة تسامي أو عملاءهما. ولا يجوز إعادة توزيعها أو نشرها أو استخدامها تجارياً دون موافقة خطية.",
        },
        {
          title: "استفسارات المشاريع",
          body: "لا يؤدي إرسال نموذج أو مخططات إلى إنشاء عقد ملزم. ولا يُعتمد النطاق والأتعاب والبرنامج إلا باتفاقية موقعة بعد المراجعة والتقييم الفني المناسبين.",
        },
        {
          title: "الملكية الفكرية",
          body: "يعود محتوى الموقع والصور ودراسات الحالة إلى توريفا أو إلى صاحب الحق المذكور. وتبقى العلامات التجارية للشركاء ملكاً لأصحابها.",
        },
        {
          title: "إخلاء مسؤولية",
          body: "تُقدم معلومات الموقع للإرشاد العام. وتعتمد نتائج المشروع على ظروف الموقع والموافقات والنطاق المتفق عليه، ولا تغني مواد الموقع عن المشورة المهنية الخاصة بالمشروع.",
        },
        {
          title: "التعديلات",
          body: "قد نحدّث هذه الشروط من وقت إلى آخر، وستُنشر أحدث نسخة وتاريخ تحديثها في هذه الصفحة.",
        },
      ],
      contact: "أسئلة قانونية:",
    },
  },
  faqPage: {
    title: "إجابات واضحة",
    intro: "معلومات موجزة عن خدمات توريفا ومسار التنفيذ والموارد المهنية وعلاقتها بشركات مجموعة تسامي.",
    sections: [
      {
        title: "عن توريفا",
        items: [
          {
            q: "ماذا تفعل توريفا؟",
            a: "تقدم توريفا التصميم المكاني والتجربة والتنفيذ. نطوّر الأفكار المعتمدة إلى حزم فنية منسقة ثم نسلّم المكان على أرض الواقع. ويمكن التعاقد مع توريفا بصورة مستقلة.",
          },
          {
            q: "ما الفرق بين توريفا وGraphics House؟",
            a: "تتخصص Graphics House في التصور البصري وCGI والمجسمات وأدوات الإطلاق، بينما تركز توريفا على تطوير المكان المادي وتنفيذه. ويمكن للفريقين التعاون عندما يجمع الموجز بين المجالين.",
          },
          {
            q: "هل Bees Motion تتولى التسويق؟",
            a: "تقدم Bees Motion استراتيجية التسويق والحملات والإنتاج الإبداعي، ويمكنها الانضمام إلى مشروع توريفا عندما يشمل الموجز دعماً للإطلاق أو التواصل.",
          },
        ],
      },
      {
        title: "الخدمات والعملية",
        items: [
          {
            q: "هل تعملون على الفلل ومشاريع المطورين؟",
            a: "نعم. نعمل على المساكن الخاصة ومشاريع الضيافة والمعارض وبرامج المطورين، مع تكييف مسار العمل والتنفيذ وفق نطاق كل مشروع.",
          },
          {
            q: "كيف أصل للبورتفوليو الكامل؟",
            a: "افتح صفحة ملف الأعمال وسجّل ببريد شركتك. يتيح الوصول المهني مشاركة مواد المشاريع مع جهات متخصصة ذات صلة.",
          },
          {
            q: "ما المدة المتوقعة؟",
            a: "تعتمد المدة على النطاق والاعتمادات والخامات والتصنيع وجاهزية الموقع. نضع البرنامج بعد مراجعة المخططات ونثبته ضمن نطاق المشروع المعتمد.",
          },
        ],
      },
    ],
  },
  servicesPage: {
    title: "القدرات",
    intro: "قدرات في التصميم المكاني والتجربة والتنفيذ، تتكامل حول متطلبات كل مشروع.",
    items: [
      {
        slug: "spatial-design",
        title: "التصميم المكاني",
        intro: "مخططات وخامات وحركة تُطوّر وفق الشكل والإحساس وطريقة الاستخدام المطلوبة للمكان.",
        points: ["المفهوم المكاني", "اتجاه الخامات", "رحلة المستخدم"],
        cta: "ناقش مساحتك",
        href: "/design-build",
      },
      {
        slug: "technical-development",
        title: "التطوير الفني",
        intro: "ترجمة التوجه التصميمي المعتمد إلى مخططات وكميات ومواصفات منسقة وقابلة للتنفيذ.",
        points: ["مخططات تنفيذ", "كميات", "تنسيق فني"],
        cta: "أرسل مخططاتك",
        href: "/fit-out",
      },
      {
        slug: "fit-out",
        title: "التجهيز والتركيب",
        intro: "تنفيذ ميداني وتركيب وإشراف وتنسيق بين التخصصات حتى التسليم.",
        points: ["التركيب", "التنسيق الميداني", "الجودة والتسليم"],
        cta: "ناقش مشروعك",
        href: "/fit-out",
      },
      {
        slug: "joinery",
        title: "النجارة والتصنيع",
        intro: "نجارة مخصصة تُصنع وفق المخططات المعتمدة، بخامات وتجهيزات مختارة للمشروع.",
        points: ["مخططات معتمدة", "خامات محددة", "تجهيزات مختارة"],
        cta: "أرسل مخططاتك",
        href: "/fit-out",
      },
      {
        slug: "supply",
        title: "الشراء والتوريد",
        intro: "شراء الخامات والأثاث والإضاءة وتنسيقها وفق المواصفات المعتمدة.",
        points: ["شراء وفق المواصفات", "تنسيق المورّدين", "تسليم مرحلي"],
        cta: "ناقش متطلباتك",
        href: "/fit-out",
      },
      {
        slug: "experience",
        title: "التجربة المكانية",
        intro: "بيئات تُصاغ حول وصول الزائر وحركته وفهمه وتفاعله مع المكان.",
        points: ["بيئات المبيعات", "رحلة الزائر", "تنفيذ متكامل"],
        cta: "ناقش التجربة",
        href: "/real-estate-experience",
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
        title: "عندما يحتاج الإطلاق تصوراً بصرياً وتسليماً مادياً معاً",
        summary: "كيف يكمل تصور Graphics House والتنفيذ الميداني لتوريفا في برامج المطورين.",
        readMinutes: 5,
      },
      {
        slug: "modular-kitchen-gulf-homes",
        tag: "سكني",
        title: "مطابخ معيارية لمناخ الخليج: مواد تتحمل الحياة اليومية",
        summary: "مواصفات مقاومة للرطوبة واختيار المفصلات لفلل جدة ومكة. لا ننشر رقم دقة مصنع.",
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
    intro: "تنفيذ في السعودية والخليج، ومكاتب في جدة ومسقط والمنامة والقاهرة.",
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
        summary: "أجنحة مطورين ودفعات نجارة للمطورين في المنطقة الوسطى.",
        services: ["تنفيذ أجنحة", "تشطيب معارض مبيعات", "نجارة معيارية للمطورين"],
      },
    ],
  },
  groupEcosystem: {
    eyebrow: "منظومة مجموعة تسامي",
    title: "شركة واحدة، ودعم أوسع عند الحاجة",
    intro:
      "تصمم توريفا المكان وتنفذه، وتدعم Graphics House أعمال التصور البصري، فيما تدعم Bees Motion الإطلاق والتواصل. يمكن لكل شركة العمل بصورة مستقلة أو ضمن فريق واحد عندما يتطلب الموجز ذلك.",
    companies: [
      {
        name: "Graphics House",
        tagline: "CREATE · العمل البصري",
        description: "تصور بصري وCGI ومجسمات وأدوات مبيعات تفاعلية للمشاريع العقارية والوجهات.",
        href: "https://3dgraphicshouse.com",
        cta: "استكشف Graphics House",
      },
      {
        name: "Bees Motion",
        tagline: "GROW · الإطلاق والحملات",
        description: "استراتيجية وحملات وأفلام وإنتاج إبداعي لعلامات الرعاية الصحية والعقار.",
        href: "https://beesmotion.com",
        cta: "استكشف Bees Motion",
      },
      {
        name: "Ruwaq",
        tagline: "دليل العقار والتصميم",
        description: "دليل للعقار والتصميم يضم محترفين وزيارات مشاريع ومحتوى عملياً عن التشطيب.",
        href: "https://ruwaq.co",
        cta: "زيارة Ruwaq",
      },
    ],
    ruwaqNote: "اطّلع على الملف المهني لتوريفا ومحتوى مشاريعها عبر Ruwaq PRO.",
  },
  social: {
    followUs: "تابع توريفا",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    sharePortfolio: "شارك ملف الأعمال",
    shareCaseStudy: "شارك هذا المشروع",
    copyLink: "نسخ الرابط",
    linkCopied: "تم نسخ الرابط",
  },
  nav: {
    styles: "أساليب التصميم",
    services: "القدرات",
    faq: "الأسئلة الشائعة",
    insights: "رؤى",
    portfolio: "البورتفوليو",
    launch: "مسار الإطلاق",
    markets: "الأسواق",
  },
  professionalsPage: {
    eyebrow: "توريفا · موارد فنية",
    title: "موارد فنية",
    intro:
      "ملاحظات مواصفات وأدلة برامج عملية للمعماريين ومصممي الداخل والمطورين والمقاولين.",
    audienceEyebrow: "لمن هذه البوابة",
    audienceTitle: "لفرق المشاريع",
    audiences: [
      { title: "المعماريون", description: "تفاصيل نموذجية ومبادئ تنسيق ومتطلبات تسليم لحزم النجارة." },
      { title: "مصممو الداخل", description: "إرشادات التنسيق بين التصنيع والموقع والتخطيط المعياري." },
      { title: "المطورون", description: "إرشادات برامج للمشاريع السكنية والضيافة وبيئات المبيعات." },
      { title: "المقاولون", description: "نقاط فحص الجودة والتسليم المرحلي وملاحظات تنسيق المشروع." },
    ],
    includesEyebrow: "ما بداخل البوابة",
    includesTitle: "ملخصات فنية",
    includes: [
      "نظرة عامة على مواصفات النجارة: التنسيق والجودة والتسليم",
      "تفاصيل المطبخ المعياري: الوحدات والمناطق الرطبة والتنسيق",
      "دليل برامج الضيافة على دفعات: تسليم مرحلي وإغلاق ملاحظات",
      "ملاحظات البيئة الإقليمية: الرطوبة والوثائق واعتبارات الخامات",
    ],
    lockHint: "استخدم بريدك الوظيفي للوصول إلى الملفات.",
    gateEyebrow: "وصول مهني",
    gateTitle: "الوصول إلى الموارد الفنية",
    gateIntro: "أدخل بياناتك لتحميل الملخصات الفنية من توريفا. يساعد البريد الوظيفي على توجيه هذه الموارد إلى فرق المشاريع المتخصصة.",
    gateNote: "يرجى استخدام بريد الشركة بدلاً من مزود بريد شخصي.",
    formName: "الاسم الكامل",
    formCompany: "الشركة / المكتب",
    formEmail: "البريد الوظيفي",
    formRole: "الدور (اختياري)، مثال: مهندس أو مدير مشروع",
    formSubmit: "الوصول إلى الموارد",
    formLoading: "جاري التحقق…",
    formError: "حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا.",
    formErrorPersonal: "يرجى استخدام بريد شركتك الوظيفي وليس بريداً شخصياً.",
    formErrorInvalid: "يرجى التحقق من البيانات والمحاولة مرة أخرى.",
    resourcesEyebrow: "تحميلاتك",
    resourcesTitle: "الملخصات الفنية",
    downloadLabel: "تحميل",
    nextStepsTitle: "هل تخطط لمشروع؟",
    nextStepsIntro: "أرسل مخططاتك أو موجزاً منظماً، وسيراجع فريقنا المتطلبات معك.",
    nextStepsBrief: "أرسل موجز المشروع",
    nextStepsPortfolio: "عرض ملف الأعمال",
    groupNote: "توريفا جزء من مجموعة تسامي. تعرّف على المجموعة عبر",
    groupLink: "مجموعة تسامي",
  },
};

export function getLuxurySeoMessages(locale: Locale): LuxurySeoMessages {
  return locale === "ar" ? ar : en;
}
