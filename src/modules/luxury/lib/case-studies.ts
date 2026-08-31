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
  partner?: { name: string; url: string; roleEn: string; roleAr: string };
  videoUrl?: string;
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
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
      "Turriva coordinated physical delivery for the Humanity Exhibition at the Muslim World League headquarters in Jeddah. The programme combined interior fit-out, exhibition décor, and installation of interactive touchpoints developed with Graphics House. From approved creative concepts through fabrication, site coordination, and documented handover, one execution team managed the spatial layer while sister companies handled visualization and software layers.",
    bodyAr:
      "نسّقت توريفا التسليم الميداني لمعرض الإنسانية في مقر رابطة العالم الإسلامي بجدة. جمع البرنامج التشطيب الداخلي وديكور المعرض وتركيب نقاط تفاعل طوّرت مع جرافيكس هاوس. من المفاهيم الإبداعية المعتمدة إلى التصنيع والتنسيق الميداني والتسليم الموثق، أدار فريق تنفيذ واحد الطبقة المكانية بينما تولت الشركات الشقيقة التصور والبرمجيات.",
    servicesEn: ["Interior fit-out", "Exhibition execution", "Installation", "Handover"],
    servicesAr: ["تشطيب داخلي", "تنفيذ معارض", "تركيب", "تسليم"],
    partner: {
      name: "Graphics House",
      url: GROUP_LINKS.graphicsHouse,
      roleEn: "Creative & visual systems partner",
      roleAr: "شريك الأنظمة البصرية والإبداعية",
    },
  },
  {
    slug: "rafal-pavilions",
    image: LUXURY_IMAGES.project1,
    categoryEn: "Exhibition · Developer",
    categoryAr: "معرض · مطور",
    titleEn: "Rafal Pavilions",
    titleAr: "بافيلions الراف",
    locationEn: "Diriyah, Riyadh",
    locationAr: "الدرعية، الرياض",
    summaryEn:
      "Exhibition pavilions and sales environment execution — from approved 3D through fabrication, installation, and opening-ready handover.",
    summaryAr:
      "تنفيذ بافيلions وبيئة مبيعات — من التصميم ثلاثي الأبعاد المعتمد إلى التصنيع والتركيب والتسليم الجاهز للافتتاح.",
    bodyEn:
      "Turriva delivered the physical execution layer for Rafal Pavilions in Diriyah — modular joinery, exhibition structures, and on-site installation aligned with Graphics House cinematic launch assets. The project demonstrates the Tasami Group model: creative visualization and film from Graphics House, physical delivery from Turriva.",
    bodyAr:
      "نفّذت توريفا الطبقة المادية لبافيلions الراف في الدرعية — نجارة معيارية وهياكل معرض وتركيب ميداني متسق مع أصول الإطلاق السينمائي من جرافيكس هاوس. يُظهر المشروع نموذج مجموعة تسامي: التصور الإبداعي من GH والتسليم المادي من توريفا.",
    servicesEn: ["Exhibition execution", "Fabrication", "Installation"],
    servicesAr: ["تنفيذ معارض", "تصنيع", "تركيب"],
    partner: {
      name: "Graphics House",
      url: GROUP_LINKS.graphicsHouse,
      roleEn: "Cinematic CGI & launch film",
      roleAr: "CGI سينمائي وفيلم إطلاق",
    },
    videoUrl: "https://3dgraphicshouse.com",
  },
  {
    slug: "villa-kitchen-jeddah",
    image: LUXURY_IMAGES.project2,
    categoryEn: "Residential · Kitchen",
    categoryAr: "سكني · مطبخ",
    titleEn: "Private Villa Kitchen · North Jeddah",
    titleAr: "مطبخ فيلا خاصة · شمال جدة",
    locationEn: "Jeddah, Saudi Arabia",
    locationAr: "جدة، السعودية",
    summaryEn:
      "Factory-precise modular kitchen programme — 3D approval, physical samples, fabrication, and laser-verified installation.",
    summaryAr:
      "برنامج مطبخ معياري بدقة مصنع — اعتماد 3D، عينات مادية، تصنيع، وتركيب بتحقق ليزري.",
    bodyEn:
      "A full modular kitchen execution for a private villa in north Jeddah: moisture-resistant cores, soft-close hardware, and PET finishes specified in 3D, sampled on site, then manufactured and installed by Turriva's execution team. Documented on Ruwaq PRO as a reference tour for fit-out quality in the Western Region.",
    bodyAr:
      "تنفيذ مطبخ معياري كامل لفيلا خاصة في شمال جدة: نوى مقاومة للرطوبة، مفصلات soft-close، وتشطيبات PET محددة في 3D، معاينة ميدانية، ثم تصنيع وتركيب من فريق توريفا. موثّق على Ruwaq PRO كجولة مرجعية لجودة التشطيب في المنطقة الغربية.",
    servicesEn: ["Modular kitchens", "Sampling", "Installation", "Warranty"],
    servicesAr: ["مطابخ معيارية", "عينات", "تركيب", "ضمان"],
    partner: {
      name: "Ruwaq",
      url: GROUP_LINKS.ruwaq,
      roleEn: "Documented on Ruwaq PRO tours",
      roleAr: "موثّق في جولات Ruwaq PRO",
    },
  },
  {
    slug: "hospitality-fitout-makkah",
    image: LUXURY_IMAGES.project3,
    categoryEn: "Hospitality · Fit-out",
    categoryAr: "ضيافة · تشطيب",
    titleEn: "Boutique Hotel Programme · Makkah",
    titleAr: "برنامج فندق boutique · مكة",
    locationEn: "Makkah, Saudi Arabia",
    locationAr: "مكة المكرمة، السعودية",
    summaryEn:
      "120+ guest unit joinery and wet-area finishes engineered for hospitality footfall and operational wear.",
    summaryAr:
      "نجارة لأكثر من 120 وحدة ضيافة وتشطيبات مناطق رطبة مصممة لتحمل الاستخدام التشغيلي.",
    bodyEn:
      "Turriva managed batch joinery fabrication and phased installation for a hospitality programme in Makkah — acoustic gypsum, moisture-resistant porcelain in wet zones, and coordinated handover per floor. Execution scope aligned with developer timelines and documented snagging before opening.",
    bodyAr:
      "أدارت توريفا تصنيع نجارة على دفعات وتركيباً مرحلياً لبرنامج ضيافة في مكة — جبس acoustic، بورسلان مقاوم للرطوبة في المناطق الرطبة، وتسليم منسّق لكل طابق. نطاق التنفيذ متوافق مع جداول المطور وإغلاق ملاحظات موثّق قبل الافتتاح.",
    servicesEn: ["Hospitality fit-out", "Joinery batching", "Snagging"],
    servicesAr: ["تشطيب ضيافة", "نجارة على دفعات", "إغلاق ملاحظات"],
  },
  {
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
      "Turriva delivered standardized joinery modules across a developer tower programme: kitchens, wardrobes, and common-area elements manufactured to approved drawings, with QC checkpoints and phased site delivery to match construction milestones.",
    bodyAr:
      "سلّمت توريفا وحدات نجارة موحّدة عبر برنامج برج مطور: مطابخ وخزائن وعناصر مناطق مشتركة مصنّعة وفق رسومات معتمدة، مع نقاط فحص جودة وتسليم ميداني مرحلي يتوافق مع مراحل البناء.",
    servicesEn: ["B2B joinery", "Modular systems", "Phased delivery"],
    servicesAr: ["نجارة B2B", "أنظمة معيارية", "تسليم مرحلي"],
  },
] as const;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
