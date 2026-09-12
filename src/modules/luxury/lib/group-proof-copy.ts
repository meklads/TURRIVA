import type { Locale } from "@/shared/i18n/locale";

export type GroupProofCopy = {
  eyebrow: string;
  title: string;
  /** Short affirmative claim under the title — the positioning in one breath */
  lead: string;
  body: string;
  lineage: {
    from: string;
    to: string;
    note: string;
  };
  logoLabel: string;
  clients: readonly string[];
  stats: readonly { value: string; label: string }[];
  testimonial: {
    quote: string;
    attribution: string;
  };
  workIntro: string;
};

const CLIENTS_EN = [
  "Rafal",
  "Toyota",
  "IMC",
  "Al Oula",
  "Al-Ayuni",
  "Makyon",
  "Bin Zoma",
  "Aqarat",
  "Oteck",
  "Muslim World League",
] as const;

const CLIENTS_AR = [
  "رفال",
  "تويوتا",
  "IMC",
  "الأولى",
  "العيوني",
  "ماكيون",
  "بن زومة",
  "عقارات",
  "أوتيك",
  "رابطة العالم الإسلامي",
] as const;

const en: GroupProofCopy = {
  eyebrow: "Tasami Group · Execution arm",
  title: "Turriva is Tasami Group’s arm for spatial design and delivery.",
  lead: "Fifteen years of field delivery — the same team, now under one dedicated brand.",
  body: "Sales galleries, interior fit-out, and exhibition pavilions for Tasami Group clients were designed and built by this team through Graphics House. Turriva concentrates that craft: spatial design, detailing, fabrication, installation, and handover.",
  lineage: {
    from: "Graphics House",
    to: "Turriva",
    note: "Same team · Same delivery standard · Tasami Group",
  },
  logoLabel: "Clients served across the group",
  clients: CLIENTS_EN,
  stats: [
    { value: "15+", label: "Years delivering for developers and institutions in Saudi Arabia and the Gulf" },
    { value: "500+", label: "Projects delivered across the group ecosystem" },
    { value: "4", label: "Countries: Saudi Arabia, Oman, Bahrain, Egypt" },
    { value: "Group", label: "Clients including Rafal, Toyota, IMC, Al Oula, Muslim World League, Anan Eskan" },
  ],
  testimonial: {
    quote:
      "We worked with Graphics House as a single execution partner. The smart maquette, interior fit-out, and interactive software arrived ready to present, at a standard that matched the League’s standing.",
    attribution: "Senior Official, Muslim World League · Humanity Exhibition, Makkah",
  },
  workIntro:
    "The work below was delivered by the Turriva team — some under Graphics House before the dedicated brand. Same team. Same execution standard.",
};

const ar: GroupProofCopy = {
  eyebrow: "ذراع التنفيذ · مجموعة تسامي",
  title: "توريفا هي ذراع التصميم المكاني والتنفيذ لمجموعة تسامي.",
  lead: "خمسة عشر عاماً من التسليم الميداني — الفريق نفسه، تحت علامة واحدة مخصصة لهذا العمل.",
  body: "قاعات العرض والتشطيب الداخلي وأجنحة المعارض لعملاء مجموعة تسامي صمّمها ونفّذها هذا الفريق عبر جرافيكس هاوس. توريفا تركّز هذه الخبرة في مسار واحد: تصميم مكاني، تفاصيل، تصنيع، تركيب، وتسليم.",
  lineage: {
    from: "جرافيكس هاوس",
    to: "توريفا",
    note: "نفس الفريق · نفس معيار التسليم · مجموعة تسامي",
  },
  logoLabel: "عملاء منظومة المجموعة",
  clients: CLIENTS_AR,
  stats: [
    { value: "15+", label: "عاماً من التنفيذ مع مطورين ومؤسسات في السعودية والخليج" },
    { value: "500+", label: "مشروع منفّذ عبر منظومة المجموعة" },
    { value: "4", label: "دول: السعودية، عُمان، البحرين، مصر" },
    { value: "المجموعة", label: "منهم رفال، تويوتا، IMC، الأولى، رابطة العالم الإسلامي، عنان إسكان" },
  ],
  testimonial: {
    quote:
      "تعاملنا مع جرافيكس هاوس كشريك تنفيذ واحد. المجسم الذكي والتشطيب الداخلي والبرمجيات التفاعلية وصلت جاهزة للعرض، بمستوى يليق بمكانة الرابطة.",
    attribution: "مسؤول أول، رابطة العالم الإسلامي · معرض الإنسانية، مكة المكرمة",
  },
  workIntro:
    "الأعمال التالية نفّذها فريق توريفا، بعضها تحت مظلة جرافيكس هاوس قبل إطلاق العلامة المستقلة. نفس الفريق، نفس معايير التنفيذ.",
};

export function getGroupProofCopy(locale: Locale): GroupProofCopy {
  return locale === "ar" ? ar : en;
}
