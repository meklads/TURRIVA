import type { Locale } from "@/shared/i18n/locale";

export type GroupProofClient = {
  name: string;
  src: string;
};

export type GroupProofCopy = {
  eyebrow: string;
  title: string;
  body: string;
  logoLabel: string;
  clients: readonly GroupProofClient[];
  stats: readonly { value: string; label: string }[];
  testimonial: {
    quote: string;
    attribution: string;
  };
  workIntro: string;
};

const CLIENT_LOGOS: readonly GroupProofClient[] = [
  { name: "Rafal", src: "/brand/turriva/clients/rafal.png" },
  { name: "Toyota", src: "/brand/turriva/clients/toyota.png" },
  { name: "IMC", src: "/brand/turriva/clients/imc.png" },
  { name: "Al Oula", src: "/brand/turriva/clients/al-oula.png" },
  { name: "Al-Ayuni", src: "/brand/turriva/clients/al-ayuni.png" },
  { name: "Makyon", src: "/brand/turriva/clients/makyon.png" },
  { name: "Bin Zoma", src: "/brand/turriva/clients/bin-zoma.png" },
  { name: "Aqarat", src: "/brand/turriva/clients/aqarat.png" },
  { name: "Oteck", src: "/brand/turriva/clients/oteck.png" },
  { name: "Muslim World League", src: "/brand/turriva/clients/mwl.png" },
] as const;

const en: GroupProofCopy = {
  eyebrow: "Part of Tasami Group",
  title: "Group experience, under one name.",
  body: "Turriva is Tasami Group’s execution arm — the same team that designed and delivered sales experiences, interior fit-out, and pavilions for major clients for 15 years, now under a brand dedicated to design and delivery.",
  logoLabel: "Clients served across the group",
  clients: CLIENT_LOGOS,
  stats: [
    { value: "15+", label: "Years with developers and institutions across Saudi Arabia and the Gulf" },
    { value: "500+", label: "Projects delivered across the group ecosystem" },
    { value: "4", label: "Countries: Saudi Arabia, Oman, Bahrain, Egypt" },
    { value: "Clients include", label: "Al Rajhi · Rafal · Muslim World League · Anan Eskan" },
  ],
  testimonial: {
    quote:
      "We worked with Graphics House as a single execution partner. The smart maquette, interior fit-out, and interactive software arrived ready to present, at a standard that matched the League’s standing.",
    attribution: "Senior Official, Muslim World League — Humanity Exhibition, Makkah",
  },
  workIntro:
    "The work below was delivered by the Turriva team — some under Graphics House before the dedicated brand launched. Same team. Same execution standard.",
};

/** Arabic strings below are locked copy — do not rewrite. */
const ar: GroupProofCopy = {
  eyebrow: "جزء من مجموعة تسامي",
  title: "خبرة المجموعة، باسم واحد.",
  body: "توريفا ذراع التنفيذ لمجموعة تسامي — نفس الفريق الذي صمّم ونفّذ تجارب البيع والتشطيب الداخلي والأجنحة لعملاء كبار على مدى 15 عامًا، الآن تحت علامة مخصصة للتصميم والتنفيذ.",
  logoLabel: "عملاء منظومة المجموعة",
  clients: CLIENT_LOGOS,
  stats: [
    { value: "15+", label: "عامًا من العمل مع مطورين ومؤسسات في السعودية والخليج" },
    { value: "500+", label: "مشروع منفذ عبر منظومة المجموعة" },
    { value: "4", label: "دول: السعودية، عُمان، البحرين، مصر" },
    { value: "عملاء من بينهم", label: "الراجحي · رفال · رابطة العالم الإسلامي · عناية إسكان" },
  ],
  testimonial: {
    quote:
      "تعاملنا مع جرافيكس هاوس كشريك تنفيذ واحد. المجسم الذكي والتشطيب الداخلي والبرمجيات التفاعلية وصلت جاهزة للعرض، بمستوى يليق بمكانة الرابطة.",
    attribution: "مسؤول أول، رابطة العالم الإسلامي — معرض الإنسانية، مكة المكرمة",
  },
  workIntro:
    "الأعمال التالية نفّذها فريق توريفا، بعضها تحت مظلة جرافيكس هاوس قبل إطلاق العلامة المستقلة. نفس الفريق، نفس معايير التنفيذ.",
};

export function getGroupProofCopy(locale: Locale): GroupProofCopy {
  return locale === "ar" ? ar : en;
}
