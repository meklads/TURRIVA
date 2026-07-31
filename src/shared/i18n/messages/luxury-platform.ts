/** Platform positioning copy — Livspace UX + Oppein manufacturing + Turriva execution */
import type { Locale } from "../locale";

export type LuxuryPlatformMessages = {
  trustBar: {
    items: readonly { icon: string; label: string }[];
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: readonly {
      title: string;
      subtitle: string;
      body: string;
    }[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    traditionalHeader: string;
    turrivaHeader: string;
    rows: readonly { traditional: string; turriva: string }[];
  };
  products: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      description: string;
      href: string;
    }[];
  };
  inspiration: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs: readonly { id: string; label: string }[];
    cta: string;
  };
  beforeAfter: {
    eyebrow: string;
    title: string;
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
    hint: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly { q: string; a: string }[];
  };
  partners: {
    title: string;
    items: readonly string[];
  };
  sampleKit: {
    title: string;
    subtitle: string;
    button: string;
  };
};

const en: LuxuryPlatformMessages = {
  trustBar: {
    items: [
      { icon: "design", label: "Architectural design & 3D studio heritage" },
      { icon: "factory", label: "Global manufacturing partnership · Powered by OPPEIN" },
      { icon: "build", label: "Local engineering & field execution · Turriva" },
    ],
  },
  ecosystem: {
    eyebrow: "How we work",
    title: "One integrated system — three specialist arms",
    subtitle:
      "You deal with Turriva as a single accountable platform. Behind it, a steel triangle covers design accuracy, factory-grade production, and on-the-ground delivery in Saudi Arabia.",
    pillars: [
      {
        title: "Design & visualization",
        subtitle: "Architectural studio depth",
        body:
          "Your plans become high-fidelity 3D and VR models built with factory-approved modules and dimensions — not fantasy renders that fall apart on site. What you approve is what we manufacture.",
      },
      {
        title: "Manufacturing & supply",
        subtitle: "Powered by OPPEIN",
        body:
          "Strategic access to automated production lines: German HOMAG cutting, E0 sustainable boards, and premium Blum & Hettich hardware — direct B2B supply without showroom overhead.",
      },
      {
        title: "Engineering & execution",
        subtitle: "Turriva on the ground",
        body:
          "Laser site surveys, import & customs clearance (SASO / SABER), specialist installation teams, and a comprehensive local warranty with fast technical support.",
      },
    ],
  },
  comparison: {
    eyebrow: "Why Turriva",
    title: "Traditional market vs. the Turriva integrated system",
    traditionalHeader: "Traditional approach",
    turrivaHeader: "Turriva integrated",
    rows: [
      {
        traditional: "Three separate parties: designer, factory, installer — blame shifts everywhere",
        turriva: "One accountable platform from approved drawing to keys",
      },
      {
        traditional: "Large gap between pretty images and delivered product",
        turriva: "3D files feed manufacturing directly — design-to-reality alignment",
      },
      {
        traditional: "Local workshop variance, delays, and quality drift",
        turriva: "Automated production at 0.1 mm precision with global standards",
      },
      {
        traditional: "Weak warranty — who owns the defect?",
        turriva: "Local product & installation warranty with spare parts support",
      },
    ],
  },
  products: {
    eyebrow: "Solutions",
    title: "Modular interiors & joinery for homes and projects",
    items: [
      {
        title: "Modular kitchens",
        description: "Water-resistant cores, PET & lacquer finishes, Blum soft-close systems.",
        href: "/villas#kitchens",
      },
      {
        title: "Wardrobes & walk-ins",
        description: "Hidden lighting, glass inserts, hydraulic fittings, full custom layouts.",
        href: "/villas#wardrobes",
      },
      {
        title: "Wall panels & doors",
        description: "Wood veneers and stone-look panels for villas and lobbies.",
        href: "/projects#joinery",
      },
      {
        title: "Villas & residences",
        description: "Full-home fit-out journey — 3D design through installation.",
        href: "/villas",
      },
      {
        title: "Developers & hospitality",
        description: "MOQ pricing, shop drawings SLA, logistics, and phased delivery.",
        href: "/projects",
      },
    ],
  },
  inspiration: {
    eyebrow: "Ideas",
    title: "Inspiration by space",
    subtitle: "Explore kitchens, wardrobes, and living spaces — then start your 3D session.",
    tabs: [
      { id: "kitchen", label: "Kitchen" },
      { id: "wardrobe", label: "Wardrobe" },
      { id: "living", label: "Living" },
      { id: "bedroom", label: "Bedroom" },
      { id: "bathroom", label: "Bathroom" },
      { id: "hospitality", label: "Hospitality" },
    ],
    cta: "Start 3D design session",
  },
  beforeAfter: {
    eyebrow: "Proof",
    title: "3D concept vs. delivered project",
    subtitle: "Drag to compare the approved visualization with the finished installation.",
    beforeLabel: "3D concept",
    afterLabel: "Installed",
    hint: "Drag the handle to compare",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    items: [
      {
        q: "What does Turriva offer end-to-end?",
        a: "Architectural 3D design, OPPEIN-sourced modular joinery, import compliance, and local installation with warranty — one integrated system.",
      },
      {
        q: "Do you serve developers and villa owners?",
        a: "Yes. Use /projects for B2B programmes and /villas for private residences. Both paths share the same manufacturing and execution backbone.",
      },
      {
        q: "Is there a warranty?",
        a: "We provide local warranty on products and installation. OPPEIN hardware and board specs meet international E0 and factory QC standards.",
      },
      {
        q: "Can I request physical material samples?",
        a: "Yes — order a sample kit and book a drawing review session. We ship finishes and hardware references to your office or villa.",
      },
      {
        q: "How do I start?",
        a: "Book a free 3D design session online, or submit a B2B brief with your floor plan for a formal proposal.",
      },
    ],
  },
  partners: {
    title: "Standards & partners",
    items: ["OPPEIN", "HOMAG", "Blum", "Hettich", "SASO", "SABER", "E0 boards"],
  },
  sampleKit: {
    title: "Request a physical sample kit & drawing review",
    subtitle:
      "We send finishes, hinges, and board samples to your site — alongside a factory-aligned 3D review of your plans.",
    button: "Request sample kit",
  },
};

const ar: LuxuryPlatformMessages = {
  trustBar: {
    items: [
      { icon: "design", label: "استوديو تصميم معماري وإظهار ثلاثي الأبعاد" },
      { icon: "factory", label: "شراكة تصنيع عالمية · Powered by OPPEIN" },
      { icon: "build", label: "هندسة وتنفيذ محلي · توريفا" },
    ],
  },
  ecosystem: {
    eyebrow: "كيف نعمل",
    title: "منظومة متكاملة — ثلاثة أذرع متخصصة",
    subtitle:
      "تتعامل مع توريفا كمنصة واحدة مسؤولة. خلفها مثلث فولاذي يغطي دقة التصميم، قوة المصنع، والتنفيذ الميداني في المملكة.",
    pillars: [
      {
        title: "التصميم والإظهار المعماري",
        subtitle: "عمق استوديو تصميم متخصص",
        body:
          "نحوّل مخططاتك إلى نماذج 3D و VR فائقة الدقة ببلوكات ومقاسات المصنع المعتمدة — لا صور خيالية تنهار في الموقع. ما تعتمده هو ما نصنعه.",
      },
      {
        title: "التصنيع والتوريد",
        subtitle: "Powered by OPPEIN",
        body:
          "وصول استراتيجي لخطوط إنتاج أوتوماتيكية: تقطيع HOMAG الألماني، ألواح E0 مستدامة، ومفصلات Blum و Hettich — توريد B2B مباشر دون أعباء معارض.",
      },
      {
        title: "الهندسة والتنفيذ الميداني",
        subtitle: "توريفا على أرض المملكة",
        body:
          "رفع مساحي بالليزر، استيراد وتخليص جمركي (SASO / SABER)، فرق تركيب متخصصة، وضمان محلي شامل مع دعم فني سريع.",
      },
    ],
  },
  comparison: {
    eyebrow: "لماذا توريفا",
    title: "السوق التقليدي مقابل منظومة توريفا الموحدة",
    traditionalHeader: "الطريقة التقليدية",
    turrivaHeader: "منظومة توريفا",
    rows: [
      {
        traditional: "تشتت بين 3 أطراف: مصمم، مصنع، فني تركيب — واللوم يتنقل",
        turriva: "جهة واحدة مسؤولة من المخطط المعتمد حتى التسليم",
      },
      {
        traditional: "فجوة كبيرة بين صورة التصميم والمنتج الواقعي",
        turriva: "ملفات 3D تُرسل للتصنيع مباشرة — مطابقة التصميم للواقع",
      },
      {
        traditional: "تأخير وتفاوت جودة في الورش المحلية",
        turriva: "تصنيع أوتوماتيكي بدقة 0.1 مم وفق معايير عالمية",
      },
      {
        traditional: "ضمان ضعيف — من يتحمل العيب؟",
        turriva: "ضمان محلي على المنتج والتركيب مع قطع غيار",
      },
    ],
  },
  products: {
    eyebrow: "الحلول",
    title: "تأثيث وتشطيبات معيارية للمنازل والمشاريع",
    items: [
      {
        title: "مطابخ معيارية",
        description: "نواة مقاومة للماء، تشطيبات PET ولاكر، أنظمة Blum.",
        href: "/villas#kitchens",
      },
      {
        title: "خزائن وغرف ملابس",
        description: "إضاءات مخفية، زجاج، توزيع هيدروليكي، تخطيط مخصص.",
        href: "/villas#wardrobes",
      },
      {
        title: "تكسيات وأبواب",
        description: "قشور خشب وتكسيات بديل الرخام للفلل والردهات.",
        href: "/projects#joinery",
      },
      {
        title: "فلل ومساكن",
        description: "رحلة تأثيث كاملة — من 3D حتى التركيب.",
        href: "/villas",
      },
      {
        title: "مطورون وضيافة",
        description: "تسعير MOQ، SLA للمخططات، لوجستيات وتسليم مرحلي.",
        href: "/projects",
      },
    ],
  },
  inspiration: {
    eyebrow: "إلهام",
    title: "أفكار حسب المساحة",
    subtitle: "استكشف المطابخ والخزائن وغرف المعيشة — ثم ابدأ جلسة 3D.",
    tabs: [
      { id: "kitchen", label: "مطبخ" },
      { id: "wardrobe", label: "خزائن" },
      { id: "living", label: "معيشة" },
      { id: "bedroom", label: "نوم" },
      { id: "bathroom", label: "حمام" },
      { id: "hospitality", label: "ضيافة" },
    ],
    cta: "ابدأ جلسة تصميم 3D",
  },
  beforeAfter: {
    eyebrow: "إثبات",
    title: "مفهوم 3D مقابل مشروع منفّذ",
    subtitle: "اسحب للمقارنة بين التصور المعتمد والتركيب الفعلي.",
    beforeLabel: "تصميم 3D",
    afterLabel: "منفّذ",
    hint: "اسحب المؤشر للمقارنة",
  },
  faq: {
    eyebrow: "أسئلة شائعة",
    title: "ما يتكرر سؤاله",
    items: [
      {
        q: "ماذا تقدم توريفا من البداية للنهاية؟",
        a: "تصميم 3D معماري، تشطيبات معيارية من OPPEIN، امتثال جمركي، وتركيب محلي بضمان — منظومة واحدة.",
      },
      {
        q: "هل تخدمون المطورين وأصحاب الفلل؟",
        a: "نعم. صفحة المشاريع للـ B2B وصفحة الفلل للأفراد — نفس العمود الفقري للتصنيع والتنفيذ.",
      },
      {
        q: "هل يوجد ضمان؟",
        a: "ضمان محلي على المنتج والتركيب. مواصفات OPPEIN و E0 وفحص المصنع وفق معايير دولية.",
      },
      {
        q: "هل يمكن طلب عينات فيزيائية؟",
        a: "نعم — اطلب حقيبة عينات وجلسة مراجعة مخططات. نرسل تشطيبات ومفصلات إلى موقعك.",
      },
      {
        q: "كيف أبدأ؟",
        a: "احجز جلسة 3D مجانية أونلاين، أو أرسل ملف B2B مع المخطط لعرض سعر رسمي.",
      },
    ],
  },
  partners: {
    title: "معايير وشركاء",
    items: ["OPPEIN", "HOMAG", "Blum", "Hettich", "SASO", "SABER", "E0"],
  },
  sampleKit: {
    title: "اطلب حقيبة العينات الفيزيائية وجلسة مراجعة المخططات",
    subtitle:
      "نرسل التشطيبات والمفصلات والألواح إلى موقعك — مع مراجعة 3D متوافقة مع مقاسات المصنع.",
    button: "اطلب حقيبة العينات",
  },
};

export function getLuxuryPlatformMessages(locale: Locale): LuxuryPlatformMessages {
  return locale === "ar" ? ar : en;
}
