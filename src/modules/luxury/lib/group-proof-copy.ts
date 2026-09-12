import type { Locale } from "@/shared/i18n/locale";

export type GroupProofCopy = {
  eyebrow: string;
  title: string;
  body: string;
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
  eyebrow: "We are not new to this work",
  title: "Turriva is Tasami Group’s execution arm — not a brand starting from zero.",
  body: "The Turriva team is the same team that designed and delivered sales experiences, interior fit-out, and pavilions for Tasami Group clients for 15 years through Graphics House. Turriva is now a focused brand for spatial design and delivery — same team, same delivery standard.",
  logoLabel: "Group-level trust",
  clients: CLIENTS_EN,
  stats: [
    { value: "15+", label: "Years with developers and institutions across Saudi Arabia and the Gulf" },
    { value: "500+", label: "Projects delivered across the group ecosystem" },
    { value: "4", label: "Countries: Saudi Arabia, Oman, Bahrain, Egypt" },
    { value: "Clients", label: "Including Rafal, Toyota, IMC, Al Oula, Al-Ayuni, Muslim World League, Anan Eskan, and others" },
  ],
  testimonial: {
    quote:
      "We worked with Graphics House as a single execution partner. The smart maquette, interior fit-out, and interactive software arrived ready to present, at a standard that matched the League’s standing.",
    attribution: "Senior Official, Muslim World League · Humanity Exhibition, Makkah",
  },
  workIntro:
    "The work below was delivered by the Turriva team — some under Graphics House before the dedicated brand launched. Same team. Same execution standard.",
};

const ar: GroupProofCopy = {
  eyebrow: "لسنا جددًا على هذا العمل",
  title: "توريفا هي ذراع التنفيذ لمجموعة تسامي — لا علامة تبدأ من الصفر.",
  body: "فريق توريفا هو نفسه الفريق الذي صمّم ونفّذ تجارب البيع والتشطيب الداخلي والأجنحة لعملاء مجموعة تسامي على مدى 15 عامًا عبر جرافيكس هاوس. توريفا اليوم علامة مستقلة، مخصصة بالكامل للتصميم المكاني والتنفيذ، بنفس الفريق ونفس معايير التسليم.",
  logoLabel: "ثقة على مستوى المجموعة",
  clients: CLIENTS_AR,
  stats: [
    { value: "15+", label: "عامًا من العمل مع مطورين ومؤسسات في السعودية والخليج" },
    { value: "500+", label: "مشروع منفذ عبر منظومة المجموعة" },
    { value: "4", label: "دول: السعودية، عُمان، البحرين، مصر" },
    { value: "عملاء", label: "من بينهم: الراجحي، رفال، رابطة العالم الإسلامي، عنان إسكان، تويوتا، وغيرهم" },
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
