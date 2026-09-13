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
  attribution: "team";
  partner?: { name: string; url: string; roleEn: string; roleAr: string };
  /** Optional external source for verification (e.g. Graphics House case page). */
  sourceUrl?: { ar: string; en: string };
  videoUrl?: string;
  metrics?: readonly { labelEn: string; labelAr: string; valueEn: string; valueAr: string }[];
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    attribution: "team",
    slug: "humanity-exhibition-mwl",
    image: "/brand/turriva/makkah-charter-04.jpeg",
    categoryEn: "Exhibition · Institutional",
    categoryAr: "معرض · مؤسسي",
    titleEn: "Humanity Exhibition · Muslim World League",
    titleAr: "معرض الإنسانية · رابطة العالم الإسلامي",
    locationEn: "Jeddah Hilton, Saudi Arabia",
    locationAr: "فندق Hilton جدة، السعودية",
    summaryEn:
      "One execution partner for the League experience: interior fit-out, smart maquette, interactive screens, and custom software — delivered ready to present.",
    summaryAr:
      "شريك تنفيذ واحد لتجربة الرابطة: تشطيب داخلي، ومجسم ذكي، وشاشات تفاعلية، وبرمجيات مخصصة — وصلت جاهزة للعرض.",
    bodyEn:
      "A physical exhibition layer for an institutional programme: interior fit-out, exhibition décor, smart maquette integration, and interactive touchpoints developed with Graphics House. Visualization and software sat with sister companies; the spatial layer was field delivery — one coordinated handoff.",
    bodyAr:
      "طبقة مكانية لمعرض مؤسسي: تشطيب داخلي وديكور معرض ودمج مجسم ذكي ونقاط تفاعل طُوّرت مع جرافيكس هاوس. التصور والبرمجيات لدى الشركات الشقيقة، والطبقة المكانية تسليم ميداني — تسليم واحد منسّق.",
    servicesEn: ["Interior fit-out", "Smart maquette", "Interactive screens", "Handover"],
    servicesAr: ["تشطيب داخلي", "مجسم ذكي", "شاشات تفاعلية", "تسليم"],
    metrics: [
      { labelEn: "Programme", labelAr: "البرنامج", valueEn: "Institutional exhibition", valueAr: "معرض مؤسسي" },
      { labelEn: "Partner", labelAr: "الشريك", valueEn: "Graphics House", valueAr: "Graphics House" },
      { labelEn: "Delivery", labelAr: "التسليم", valueEn: "Single field team", valueAr: "فريق ميداني واحد" },
    ],
    partner: {
      name: "Graphics House",
      url: GROUP_LINKS.graphicsHouse,
      roleEn: "Creative & visual systems partner",
      roleAr: "شريك الأنظمة البصرية والإبداعية",
    },
  },
  {
    attribution: "team",
    slug: "anan-eskan-sales-gallery",
    image: "/brand/turriva/sample-kit-showroom.webp",
    categoryEn: "Sales gallery · Decor Design & Build",
    categoryAr: "قاعة عرض · تصميم وتنفيذ ديكور",
    titleEn: "Anan Eskan Sales Gallery · Riyadh",
    titleAr: "قاعة عرض عنان إسكان · الرياض",
    locationEn: "Riyadh, Saudi Arabia",
    locationAr: "الرياض، السعودية",
    summaryEn:
      "Decor Design & Build for a complete sales gallery — from drawings to a space ready for opening.",
    summaryAr:
      "تصميم وتنفيذ ديكور لقاعة عرض مبيعات كاملة — من المخططات إلى التسليم الجاهز للافتتاح.",
    bodyEn:
      "A full sales-gallery environment for Anan Eskan in Riyadh: interior composition, finishes, and fit-out delivered as Decor Design & Build. The brief was a place where the development meets its buyers — presentation-ready at handover.",
    bodyAr:
      "بيئة قاعة عرض كاملة لعنان إسكان في الرياض: تكوين داخلي وتشطيبات وتجهيز ضمن نطاق تصميم وتنفيذ ديكور. الموجز كان مكاناً يلتقي فيه المشروع بالمشترين — جاهزاً للعرض عند التسليم.",
    servicesEn: ["Sales gallery", "Decor design", "Fit-out", "Handover"],
    servicesAr: ["قاعة عرض", "تصميم ديكور", "تجهيز", "تسليم"],
    metrics: [
      { labelEn: "Type", labelAr: "النوع", valueEn: "Sales gallery", valueAr: "قاعة عرض مبيعات" },
      { labelEn: "Scope", labelAr: "النطاق", valueEn: "Decor Design & Build", valueAr: "تصميم وتنفيذ ديكور" },
      { labelEn: "City", labelAr: "المدينة", valueEn: "Riyadh", valueAr: "الرياض" },
    ],
    partner: {
      name: "Graphics House",
      url: GROUP_LINKS.graphicsHouse,
      roleEn: "Group delivery partner",
      roleAr: "شريك تسليم المجموعة",
    },
    sourceUrl: {
      ar: "https://3dgraphicshouse.com/insights/projects/anan-eskan-riyadh.html",
      en: "https://3dgraphicshouse.com/insights/projects/anan-eskan-riyadh-en.html",
    },
  },
  {
    attribution: "team",
    slug: "rafal-pavilions",
    image: LUXURY_IMAGES.project1,
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
    videoUrl: "https://3dgraphicshouse.com",
  },
  {
    attribution: "team",
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
