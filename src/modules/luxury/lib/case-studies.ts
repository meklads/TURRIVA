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
      "Spatial execution for the League headquarters experience — interior fit-out, smart maquette integration, and interactive zones delivered as one field programme.",
    summaryAr:
      "تنفيذ مكاني لتجربة مقر الرابطة — تشطيب داخلي، تكامل الماكيت الذكي، ومناطق تفاعلية ضمن برنامج ميداني واحد.",
    bodyEn:
      "Selected team experience — not a historical Turriva-branded contract. A physical exhibition layer for an institutional headquarters programme: interior fit-out, exhibition décor, and installation of interactive touchpoints developed with Graphics House. Visualization and software sat with sister companies; the spatial layer was field delivery.",
    bodyAr:
      "خبرة فريق مختارة — ليست عقدًا تاريخيًا باسم توريفا. طبقة مكانية لمعرض مؤسسي في مقر: تشطيب داخلي وديكور معرض وتركيب نقاط تفاعل طُوّرت مع جرافيكس هاوس. التصور والبرمجيات لدى الشركات الشقيقة، والطبقة المكانية تسليم ميداني.",
    servicesEn: ["Interior fit-out", "Exhibition execution", "Installation", "Handover"],
    servicesAr: ["تشطيب داخلي", "تنفيذ معارض", "تركيب", "تسليم"],
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
    slug: "rafal-pavilions",
    image: LUXURY_IMAGES.project1,
    categoryEn: "Exhibition · Developer",
    categoryAr: "معرض · مطور",
    titleEn: "Rafal Pavilions",
    titleAr: "أجنحة الراف",
    locationEn: "Diriyah, Riyadh",
    locationAr: "الدرعية، الرياض",
    summaryEn:
      "Exhibition pavilions and sales environment execution — from approved 3D through fabrication, installation, and opening-ready handover.",
    summaryAr:
      "أجنحة معرض وبيئة مبيعات — من التصميم ثلاثي الأبعاد المعتمد إلى التصنيع والتركيب والتسليم الجاهز للافتتاح.",
    bodyEn:
      "Selected team experience — not a historical Turriva-branded contract. Physical sales pavilions in Diriyah: modular joinery, exhibition structures, and installation aligned with Graphics House launch assets. Graphics House created the visual work; the field layer was spatial delivery.",
    bodyAr:
      "خبرة فريق مختارة — ليست عقدًا تاريخيًا باسم توريفا. أجنحة مبيعات في الدرعية: نجارة معيارية وهياكل معرض وتركيب متسق مع أصول الإطلاق من جرافيكس هاوس. جرافيكس هاوس صنعت العمل البصري، والطبقة الميدانية تسليم مكاني.",
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
      "A typical residential scope — modular kitchen from samples through fabrication and installation. Not a named Turriva contract listing.",
    summaryAr:
      "نطاق سكني معتاد — مطبخ معياري من العينات إلى التصنيع والتركيب. ليس عقدًا مسمى باسم توريفا.",
    bodyEn:
      "Selected team experience — a private villa kitchen in north Jeddah: samples agreed, then fabrication and installation. Shown as a residential scope type, not as a published Turriva contract or a factory-tolerance claim.",
    bodyAr:
      "خبرة فريق مختارة — مطبخ فيلا خاصة في شمال جدة: عينات تُعتمد ثم تصنيع وتركيب. يُعرض كنطاق سكني، لا كعقد منشور باسم توريفا ولا كادعاء دقة مصنع.",
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
      "A hospitality fit-out scope — batch joinery and wet-area finishes for a Makkah programme. Unit counts are not published as a Turriva figure.",
    summaryAr:
      "نطاق تشطيب ضيافة — نجارة على دفعات وتشطيب مناطق رطبة لبرنامج في مكة. أعداد الوحدات لا تُنشر كرقم لتوريفا.",
    bodyEn:
      "Selected team experience — hospitality joinery and phased installation in Makkah, including wet-area finishes and handover by floor. Shown as a scope type. No unit count is claimed as a Turriva contract figure.",
    bodyAr:
      "خبرة فريق مختارة — نجارة ضيافة وتركيب مرحلي في مكة، بما في ذلك تشطيب المناطق الرطبة والتسليم حسب الطابق. يُعرض كنطاق. لا يُدّعى عدد وحدات كرقم عقد لتوريفا.",
    servicesEn: ["Hospitality fit-out", "Joinery batching", "Snagging"],
    servicesAr: ["تشطيب ضيافة", "نجارة على دفعات", "إغلاق ملاحظات"],
    metrics: [
      { labelEn: "Units", labelAr: "الوحدات", valueEn: "Not published", valueAr: "غير منشور" },
      { labelEn: "City", labelAr: "المدينة", valueEn: "Makkah", valueAr: "مكة" },
      { labelEn: "Handover", labelAr: "التسليم", valueEn: "Phased by floor", valueAr: "مرحلي لكل طابق" },
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
      "Repeatable modular joinery packages for a multi-unit developer programme — specification, fabrication, and phased delivery.",
    summaryAr:
      "حزم نجارة معيارية قابلة للتكرار لمشروع مطور متعدد الوحدات — مواصفات وتصنيع وتسليم مرحلي.",
    bodyEn:
      "Selected team experience — repeatable joinery modules for a multi-unit developer programme: kitchens, wardrobes, and common-area elements from approved drawings, with checkpoints and phased site delivery. A scope type, not a named tower contract.",
    bodyAr:
      "خبرة فريق مختارة — وحدات نجارة قابلة للتكرار لبرنامج مطور متعدد الوحدات: مطابخ وخزائن وعناصر مناطق مشتركة من رسومات معتمدة، مع نقاط فحص وتسليم ميداني مرحلي. نطاق عمل، لا عقد برج مسمى.",
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
