import { LUXURY_IMAGES } from "@/shared/i18n/messages/luxury";
import { GROUP_LINKS } from "@/shared/lib/seo-schema";

export type CaseStudy = {
  slug: string;
  image: string;
  categoryEn: string;
  categoryAr: string;
  titleEn: string;
  titleAr: string;
  locationEn: string;
  locationAr: string;
  summaryEn: string;
  summaryAr: string;
  bodyEn: string;
  bodyAr: string;
  servicesEn: readonly string[];
  servicesAr: readonly string[];
  /**
   * Credibility rule: homepage Selected Work / Credibility cards must be
   * on-the-ground execution (fabrication + install). CGI-only marketing
   * renders (e.g. aerial CGI campaigns) must not be listed as delivery proof.
   */
  attribution: "team";
  delivery: "field_execution";
  /** Temporary exhibition décor vs permanent sales-gallery build. */
  fitMode?: "temporary" | "permanent";
  partner?: { name: string; url: string; roleEn: string; roleAr: string };
  /** Optional external source for verification (e.g. Graphics House case page). */
  sourceUrl?: { ar: string; en: string };
  videoUrl?: string;
  challengeEn?: string;
  challengeAr?: string;
  solutionEn?: string;
  solutionAr?: string;
  resultsEn?: string;
  resultsAr?: string;
  metrics?: readonly { labelEn: string; labelAr: string; valueEn: string; valueAr: string }[];
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    attribution: "team",
    delivery: "field_execution",
    fitMode: "temporary",
    slug: "humanity-exhibition-mwl",
    image: "/brand/turriva/makkah-charter-04.jpeg",
    categoryEn: "Temporary presentation fit-out",
    categoryAr: "تجهيز عرض مؤقت",
    titleEn: "Humanity Exhibition · Muslim World League",
    titleAr: "معرض الإنسانية · رابطة العالم الإسلامي",
    locationEn: "Jeddah Hilton, Saudi Arabia",
    locationAr: "فندق Hilton جدة، السعودية",
    summaryEn:
      "Temporary presentation-hall décor designed and built by the team: interactive architectural models, interactive display screens, and custom software, handed over ready to present.",
    summaryAr:
      "تجهيز ديكور مؤقت لقاعة عرض صمّمه ونفّذه الفريق: مجسمات معمارية تفاعلية، وشاشات عرض تفاعلية، وبرمجيات مخصصة، سُلّم جاهزاً للعرض.",
    bodyEn:
      "An institutional presentation environment for the Muslim World League. The owned scope was temporary décor design and on-site execution, production of interactive architectural models, interactive display screens, and custom software integrated as one visitor experience. The work was delivered by the same field and creative team now operating under Turriva, with Graphics House as the brand layer at the time. The environment was received as a strong presentation success: clear narrative, walkable path, and interactive tools that helped visitors understand the programme without scattering vendors.",
    bodyAr:
      "بيئة عرض مؤسسية لرابطة العالم الإسلامي. النطاق الذي ملكناه: تصميم وتنفيذ ديكور مؤقت لقاعة العرض، وإنتاج مجسمات معمارية تفاعلية، وشاشات عرض تفاعلية، وبرمجيات مخصصة دُمجت كتجربة زائر واحدة. نفّذ العمل نفس الفريق الميداني والإبداعي الذي يعمل اليوم تحت توريفا، وكانت جرافيكس هاوس الطبقة الاسمية حينها. لاقى التجهيز نجاحاً واضحاً في العرض: سرد واضح، ومسار يُمشى، وأدوات تفاعل تساعد الزائر على فهم البرنامج دون تشتت المقاولين.",
    servicesEn: [
      "Temporary décor design",
      "Temporary décor execution",
      "Interactive architectural models",
      "Interactive screens",
      "Custom software",
      "Handover",
    ],
    servicesAr: [
      "تصميم ديكور مؤقت",
      "تنفيذ ديكور مؤقت",
      "مجسمات معمارية تفاعلية",
      "شاشات تفاعلية",
      "برمجيات مخصصة",
      "تسليم",
    ],
    metrics: [
      { labelEn: "Fit mode", labelAr: "نوع التجهيز", valueEn: "Temporary décor", valueAr: "ديكور مؤقت" },
      { labelEn: "Owned scope", labelAr: "النطاق المملوك", valueEn: "Decor + models + screens + software", valueAr: "ديكور + مجسمات + شاشات + برمجيات" },
      { labelEn: "Outcome", labelAr: "النتيجة", valueEn: "Ready-to-present success", valueAr: "نجاح جاهز للعرض" },
    ],
    partner: {
      name: "Graphics House",
      url: GROUP_LINKS.graphicsHouse,
      roleEn: "Brand layer at the time of delivery",
      roleAr: "الطبقة الاسمية وقت التسليم",
    },
    challengeEn:
      "The League needed a temporary presentation hall that explained a complex institutional programme clearly: décor, models, screens, and software as one experience, not separate suppliers.",
    challengeAr:
      "احتاجت الرابطة قاعة عرض مؤقتة تشرح برنامجاً مؤسسياً معقداً بوضوح: ديكور ومجسمات وشاشات وبرمجيات كتجربة واحدة، لا موردين متفرقين.",
    solutionEn:
      "The team designed and executed the temporary décor, produced interactive architectural models, integrated interactive display screens, and delivered custom software as one coordinated handover.",
    solutionAr:
      "صمّم الفريق ونفّذ الديكور المؤقت، وأنتج مجسمات معمارية تفاعلية، ودمج شاشات عرض تفاعلية، وسلّم برمجيات مخصصة كتجهيز واحد منسّق.",
    resultsEn:
      "A presentation-ready temporary hall with a clear visitor path. Strong reception for clarity, presence, and the integrated interactive layer.",
    resultsAr:
      "قاعة عرض مؤقتة جاهزة مع مسار زائر واضح. استقبال قوي للوضوح والحضور والطبقة التفاعلية المتكاملة.",
  },
  {
    attribution: "team",
    delivery: "field_execution",
    fitMode: "permanent",
    slug: "anan-eskan-sales-gallery",
    image: "/brand/turriva/projects/anan-eskan-youtube-poster.jpg",
    categoryEn: "Permanent sales gallery",
    categoryAr: "صالة بيع دائمة",
    titleEn: "Anan Eskan Sales Gallery · Riyadh",
    titleAr: "صالة عرض عنان إسكان · الرياض",
    locationEn: "Riyadh, Saudi Arabia",
    locationAr: "الرياض، السعودية",
    summaryEn:
      "Permanent sales-gallery décor: design and build of the presentation environment, including display models and on-site fit-out through opening-ready handover.",
    summaryAr:
      "تجهيز ديكور دائم لصالة بيع: تصميم وتنفيذ بيئة العرض، بما في ذلك مجسمات العرض والتجهيز الميداني حتى التسليم الجاهز للافتتاح.",
    bodyEn:
      "A permanent sales environment for Anan Eskan in Riyadh. Unlike a temporary exhibition hall, this brief required durable gallery décor and a lasting presentation path for buyers. The owned scope was décor design and build, fabrication of display models, and on-site fit-out to opening readiness. Documented under Graphics House; field delivery by the same team now under Turriva.",
    bodyAr:
      "بيئة بيع دائمة لعنان إسكان في الرياض. بخلاف قاعة العرض المؤقتة، تطلب الموجز ديكور صالة ثابتاً ومسار عرض دائماً للمشترين. النطاق الذي ملكناه: تصميم وتنفيذ الديكور، وتصنيع مجسمات العرض، والتجهيز الميداني حتى جاهزية الافتتاح. موثّق تحت جرافيكس هاوس؛ والتنفيذ الميداني لنفس الفريق تحت توريفا اليوم.",
    servicesEn: ["Permanent décor design", "Permanent décor build", "Display models", "Gallery fit-out", "Handover"],
    servicesAr: ["تصميم ديكور دائم", "تنفيذ ديكور دائم", "مجسمات عرض", "تجهيز صالة", "تسليم"],
    metrics: [
      { labelEn: "Fit mode", labelAr: "نوع التجهيز", valueEn: "Permanent décor", valueAr: "ديكور دائم" },
      { labelEn: "Owned scope", labelAr: "النطاق المملوك", valueEn: "Decor design & build + models", valueAr: "تصميم وتنفيذ ديكور + مجسمات" },
      { labelEn: "City", labelAr: "المدينة", valueEn: "Riyadh", valueAr: "الرياض" },
    ],
    partner: {
      name: "Graphics House",
      url: GROUP_LINKS.graphicsHouse,
      roleEn: "Brand layer at the time of delivery",
      roleAr: "الطبقة الاسمية وقت التسليم",
    },
    sourceUrl: {
      ar: "https://3dgraphicshouse.com/insights/projects/anan-eskan-riyadh.html",
      en: "https://3dgraphicshouse.com/insights/projects/anan-eskan-riyadh-en.html",
    },
    videoUrl: "https://youtu.be/jP8vLnnRhb0",
    challengeEn:
      "A developer sales gallery needed a permanent décor environment and display models ready for ongoing buyer presentations, not a short-run exhibition install.",
    challengeAr:
      "صالة بيع لمطور احتاجت بيئة ديكور دائمة ومجسمات عرض جاهزة لعروض المشترين المستمرة، لا تجهيز معرض قصير الأمد.",
    solutionEn:
      "Decor design and build for a permanent sales gallery, with display-model fabrication and on-site fit-out through opening-ready handover.",
    solutionAr:
      "تصميم وتنفيذ ديكور لصالة بيع دائمة، مع تصنيع مجسمات العرض والتجهيز الميداني حتى التسليم الجاهز للافتتاح.",
    resultsEn:
      "A lasting sales-gallery environment ready for buyer presentations. Documented under Graphics House; same field team now under Turriva.",
    resultsAr:
      "بيئة صالة بيع دائمة جاهزة لعروض المشترين. موثّقة تحت جرافيكس هاوس؛ ونفس الفريق الميداني تحت توريفا اليوم.",
  },
  {
    attribution: "team",
    delivery: "field_execution",
    slug: "rafal-pavilions",
    image: "/brand/turriva/projects/rafal-pavilions.jpg",
    categoryEn: "Exhibition · Developer",
    categoryAr: "معرض · مطور",
    titleEn: "Rafal Pavilions",
    titleAr: "أجنحة الراف",
    locationEn: "Diriyah, Riyadh",
    locationAr: "الدرعية، الرياض",
    summaryEn:
      "Exhibition pavilions and a sales environment, from approved drawings through fabrication, installation, and handover ready for opening.",
    summaryAr:
      "أجنحة معرض وبيئة مبيعات، من التصميم المعتمد إلى التصنيع والتركيب والتسليم الجاهز للافتتاح.",
    bodyEn:
      "Physical sales pavilions in Diriyah: modular joinery, exhibition structures, and installation aligned with Graphics House launch assets. Graphics House created the visual work; the field layer was spatial delivery — design to fabrication to install to handover.",
    bodyAr:
      "أجنحة مبيعات في الدرعية: نجارة معيارية وهياكل معرض وتركيب متسق مع أصول الإطلاق من جرافيكس هاوس. جرافيكس هاوس صنعت العمل البصري، والطبقة الميدانية تسليم مكاني — من التصميم إلى التصنيع والتركيب والتسليم.",
    servicesEn: ["Exhibition execution", "Fabrication", "Installation"],
    servicesAr: ["تنفيذ معارض", "تصنيع", "تركيب"],
    metrics: [
      { labelEn: "Location", labelAr: "الموقع", valueEn: "Diriyah, Riyadh", valueAr: "الدرعية، الرياض" },
      { labelEn: "Scope", labelAr: "النطاق", valueEn: "Sales pavilions", valueAr: "أجنحة مبيعات" },
      { labelEn: "Launch", labelAr: "الإطلاق", valueEn: "CGI + physical", valueAr: "CGI + ميداني" },
    ],
    partner: {
      name: "Graphics House",
      url: GROUP_LINKS.graphicsHouse,
      roleEn: "Cinematic CGI & launch film",
      roleAr: "CGI سينمائي وفيلم إطلاق",
    },
    videoUrl: "https://3dgraphicshouse.com/insights/projects/rafal-pavilions-en.html",
    challengeEn:
      "A Diriyah launch needed physical sales pavilions aligned with cinematic CGI — ready for opening, not just renders.",
    challengeAr:
      "إطلاق في الدرعية احتاج أجنحة مبيعات مادية متسقة مع CGI سينمائي — جاهزة للافتتاح لا مجرد رندرات.",
    solutionEn:
      "Modular joinery, exhibition structures, and field installation from approved drawings through fabrication and handover.",
    solutionAr:
      "نجارة معيارية وهياكل معرض وتركيب ميداني من المخططات المعتمدة عبر التصنيع حتى التسليم.",
    resultsEn: "Opening-ready sales pavilions. CGI by Graphics House; spatial delivery by the same field team now under Turriva.",
    resultsAr: "أجنحة مبيعات جاهزة للافتتاح. CGI من جرافيكس هاوس؛ التسليم المكاني لنفس الفريق الميداني تحت توريفا اليوم.",
  },
  {
    attribution: "team",
    delivery: "field_execution",
    slug: "villa-kitchen-jeddah",
    image: LUXURY_IMAGES.project2,
    categoryEn: "Residential · Kitchen",
    categoryAr: "سكني · مطبخ",
    titleEn: "Private Villa Kitchen · North Jeddah",
    titleAr: "مطبخ فيلا خاصة · شمال جدة",
    locationEn: "Jeddah, Saudi Arabia",
    locationAr: "جدة، السعودية",
    summaryEn:
      "A residential kitchen scope: samples, fabrication, and installation for a private villa in north Jeddah.",
    summaryAr:
      "نطاق مطبخ سكني: عينات وتصنيع وتركيب لفيلا خاصة في شمال جدة.",
    bodyEn:
      "A private villa kitchen in north Jeddah. Samples are agreed, then fabrication and installation follow — a clear residential delivery path from board to site.",
    bodyAr:
      "مطبخ فيلا خاصة في شمال جدة. تُعتمد العينات ثم يأتي التصنيع والتركيب — مسار تسليم سكني واضح من اللوحة إلى الموقع.",
    servicesEn: ["Modular kitchens", "Sampling", "Installation", "Warranty"],
    servicesAr: ["مطابخ معيارية", "عينات", "تركيب", "ضمان"],
    metrics: [
      { labelEn: "Type", labelAr: "النوع", valueEn: "Modular kitchen", valueAr: "مطبخ معياري" },
      { labelEn: "Method", labelAr: "الطريقة", valueEn: "Samples before order", valueAr: "عينات قبل الطلب" },
      { labelEn: "Region", labelAr: "المنطقة", valueEn: "North Jeddah", valueAr: "شمال جدة" },
    ],
    partner: {
      name: "Ruwaq",
      url: GROUP_LINKS.ruwaq,
      roleEn: "Documented on Ruwaq PRO tours",
      roleAr: "موثّق في جولات Ruwaq PRO",
    },
  },
  {
    attribution: "team",
    delivery: "field_execution",
    slug: "hospitality-fitout-makkah",
    image: LUXURY_IMAGES.project3,
    categoryEn: "Hospitality · Fit-out",
    categoryAr: "ضيافة · تشطيب",
    titleEn: "Boutique Hotel Programme · Makkah",
    titleAr: "برنامج فندق boutique · مكة",
    locationEn: "Makkah, Saudi Arabia",
    locationAr: "مكة المكرمة، السعودية",
    summaryEn:
      "Hospitality fit-out: batch joinery and wet-area finishes for a Makkah programme, handed over by floor.",
    summaryAr:
      "تشطيب ضيافة: نجارة على دفعات وتشطيب مناطق رطبة لبرنامج في مكة، مع تسليم مرحلي لكل طابق.",
    bodyEn:
      "Hospitality joinery and phased installation in Makkah, including wet-area finishes and handover by floor. A delivery programme built for hotel operations, not a one-room fit-out.",
    bodyAr:
      "نجارة ضيافة وتركيب مرحلي في مكة، بما في ذلك تشطيب المناطق الرطبة والتسليم حسب الطابق. برنامج تسليم مبني لتشغيل فندقي، لا تجهيز غرفة واحدة.",
    servicesEn: ["Hospitality fit-out", "Joinery batching", "Snagging"],
    servicesAr: ["تشطيب ضيافة", "نجارة على دفعات", "إغلاق ملاحظات"],
    metrics: [
      { labelEn: "City", labelAr: "المدينة", valueEn: "Makkah", valueAr: "مكة" },
      { labelEn: "Handover", labelAr: "التسليم", valueEn: "Phased by floor", valueAr: "مرحلي لكل طابق" },
      { labelEn: "Focus", labelAr: "التركيز", valueEn: "Joinery + wet areas", valueAr: "نجارة + مناطق رطبة" },
    ],
  },
  {
    attribution: "team",
    delivery: "field_execution",
    slug: "developer-joinery-batch",
    image: LUXURY_IMAGES.project4,
    categoryEn: "B2B · Joinery",
    categoryAr: "B2B · نجارة",
    titleEn: "Developer Tower Joinery Batch",
    titleAr: "دفعة نجارة برج مطور",
    locationEn: "Western Region, Saudi Arabia",
    locationAr: "المنطقة الغربية، السعودية",
    summaryEn:
      "Repeatable modular joinery packages for a multi-unit developer programme: specification, fabrication, and phased delivery.",
    summaryAr:
      "حزم نجارة معيارية قابلة للتكرار لمشروع مطور متعدد الوحدات: مواصفات وتصنيع وتسليم مرحلي.",
    bodyEn:
      "Repeatable joinery modules for a multi-unit developer programme: kitchens, wardrobes, and common-area elements from approved drawings, with checkpoints and phased site delivery.",
    bodyAr:
      "وحدات نجارة قابلة للتكرار لبرنامج مطور متعدد الوحدات: مطابخ وخزائن وعناصر مناطق مشتركة من رسومات معتمدة، مع نقاط فحص وتسليم ميداني مرحلي.",
    servicesEn: ["B2B joinery", "Modular systems", "Phased delivery"],
    servicesAr: ["نجارة B2B", "أنظمة معيارية", "تسليم مرحلي"],
    metrics: [
      { labelEn: "Model", labelAr: "النموذج", valueEn: "Repeatable modules", valueAr: "وحدات قابلة للتكرار" },
      { labelEn: "Region", labelAr: "المنطقة", valueEn: "Western Region", valueAr: "المنطقة الغربية" },
      { labelEn: "QC", labelAr: "الجودة", valueEn: "Factory checkpoints", valueAr: "نقاط فحص مصنع" },
    ],
  },
] as const;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
