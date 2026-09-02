import type { Locale } from "@/shared/i18n/locale";
import { GROUP_LINKS } from "@/shared/lib/seo-schema";

export type LaunchStep = {
  index: string;
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
  ownerEn: string;
  ownerAr: string;
};

export const LAUNCH_STEPS: readonly LaunchStep[] = [
  {
    index: "01",
    titleEn: "Visual launch system",
    titleAr: "نظام الإطلاق البصري",
    bodyEn: "Cinematic CGI, smart maquettes, and sales tools that define investor and buyer first impressions before construction is complete.",
    bodyAr: "CGI سينمائي وماكيت ذكي وأدوات مبيعات تشكّل الانطباع الأول للمستثمر والمشتري قبل اكتمال البناء.",
    ownerEn: "Graphics House",
    ownerAr: "Graphics House",
  },
  {
    index: "02",
    titleEn: "Physical execution",
    titleAr: "التنفيذ المادي",
    bodyEn: "Joinery, exhibition structures, and fit-out delivered under one Turriva lead — from shop drawings to opening-ready handover.",
    bodyAr: "نجارة وهياكل معرض وتشطيب تحت قائد توريفا واحد — من الرسومات التنفيذية إلى التسليم الجاهز للافتتاح.",
    ownerEn: "Turriva",
    ownerAr: "توريفا",
  },
  {
    index: "03",
    titleEn: "Launch marketing",
    titleAr: "تسويق الإطلاق",
    bodyEn: "Campaigns, film, and content that amplify the physical environment when the sales gallery or pavilion opens.",
    bodyAr: "حملات وأفلام ومحتوى يضاعف أثر البيئة المادية عند افتتاح معرض المبيعات أو البافيلion.",
    ownerEn: "Bees Motion",
    ownerAr: "Bees Motion",
  },
  {
    index: "04",
    titleEn: "Opening day",
    titleAr: "يوم الافتتاح",
    bodyEn: "Documented QC, snagging closure, and a single accountable programme so the space is ready when visitors arrive.",
    bodyAr: "توثيق جودة وإغلاق ملاحظات وبرنامج ميداني واحد مسؤول — المساحة جاهزة عند وصول الزوار.",
    ownerEn: "Turriva lead",
    ownerAr: "قائد توريفا",
  },
] as const;

export function getLaunchPageCopy(locale: Locale) {
  const isAr = locale === "ar";
  return {
    eyebrow: isAr ? "مسار الإطلاق" : "Launch playbook",
    title: isAr ? "من الفكرة البصرية إلى التسليم المادي" : "From visual launch to physical delivery",
    intro: isAr
      ? "عندما يحتاج المطور إثباتين معاً — سرد للمستثمرين وبيئة مبيعات يمشي فيها العميل — تربط مجموعة تسامي التخصصات دون تشتيت المسؤولية."
      : "When a developer needs two proofs at once — investor storytelling and a walkable sales environment — Tasami Group connects the disciplines without splitting accountability.",
    stepsEyebrow: isAr ? "المراحل" : "Stages",
    stepsTitle: isAr ? "أربع مراحل. مسؤولية واضحة." : "Four stages. Clear ownership.",
    whyTitle: isAr ? "لماذا هذا المسار؟" : "Why this path?",
    whyPoints: isAr
      ? [
          "لا تعارض بين CGI والتنفيذ — نفس اللغة البصرية من الاستوديو إلى الموقع",
          "قائد توريفا واحد للطبقة المادية حتى يوم الافتتاح",
          "إمكانية إضافة التسويق عند الحاجة دون إعادة بناء الفريق",
        ]
      : [
          "No clash between CGI and execution — one visual language from studio to site",
          "One Turriva lead for the physical layer through opening day",
          "Marketing can join when needed without rebuilding the team",
        ],
    proofTitle: isAr ? "إثبات من المشاريع" : "Proof from projects",
    proofBody: isAr
      ? "بافيلions الراف في الدرعية ومعرض الإنسانية في جدة يوضحان النموذج: تصور وإطلاق من Graphics House، وتنفيذ ميداني من توريفا."
      : "Rafal Pavilions in Diriyah and the Humanity Exhibition in Jeddah show the model: visual launch from Graphics House, physical delivery from Turriva.",
    ctaBrief: isAr ? "قدّم ملخص إطلاق" : "Submit a launch brief",
    ctaWork: isAr ? "شاهد دراسات الحالة" : "View case studies",
    groupNote: isAr
      ? "توريفا شركة التنفيذ ضمن مجموعة تسامي. للشركات الشقيقة:"
      : "Turriva is the execution company within Tasami Group. Sister companies:",
    links: [
      { label: "Graphics House", href: GROUP_LINKS.graphicsHouse },
      { label: "Bees Motion", href: GROUP_LINKS.beesMotion },
      { label: isAr ? "مجموعة تسامي" : "Tasami Group", href: GROUP_LINKS.tasami },
    ],
  };
}
