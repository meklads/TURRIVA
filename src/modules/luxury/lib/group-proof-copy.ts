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
  title: "Group delivery experience, under one brand.",
  body: "Turriva is Tasami Group’s physical delivery company. The same team that executed sales environments, interiors, exhibitions, and pavilions for major clients for 15+ years now operates under a brand dedicated to spatial execution. Contract Turriva alone; Graphics House and the group join when the project needs the visual or launch layer.",
  logoLabel: "Clients served across the group",
  clients: CLIENT_LOGOS,
  stats: [
    { value: "15+", label: "Years of experience" },
  ],
  testimonial: {
    quote:
      "We worked with Graphics House as a single execution partner. The smart maquette, interior fit-out, and interactive software arrived ready to present, at a standard that matched the League’s standing.",
    attribution: "Senior Official, Muslim World League, Humanity Exhibition, Makkah",
  },
  workIntro:
    "Delivered by the Turriva team. Some under Graphics House before the dedicated brand. Same team. Same execution standard.",
};

const ar: GroupProofCopy = {
  eyebrow: "جزء من مجموعة تسامي",
  title: "خبرة تسليم المجموعة، تحت علامة واحدة.",
  body: "توريفا شركة التسليم المادي لمجموعة تسامي. نفس الفريق الذي نفّذ بيئات البيع والديكورات والمعارض والأجنحة لعملاء كبار على مدى أكثر من 15 عاماً يعمل الآن تحت علامة مخصصة للتنفيذ المكاني. تعاقد مع توريفا وحدها. جرافيكس هاوس والمجموعة تُستدعى حين يحتاج المشروع الطبقة البصرية أو الإطلاق.",
  logoLabel: "عملاء منظومة المجموعة",
  clients: CLIENT_LOGOS,
  stats: [
    { value: "15+", label: "عاماً من الخبرة" },
  ],
  testimonial: {
    quote:
      "تعاملنا مع جرافيكس هاوس كشريك تنفيذ واحد. المجسم الذكي والتشطيب الداخلي والبرمجيات التفاعلية وصلت جاهزة للعرض، بمستوى يليق بمكانة الرابطة.",
    attribution: "مسؤول أول، رابطة العالم الإسلامي، معرض الإنسانية، مكة المكرمة",
  },
  workIntro:
    "نفّذها فريق توريفا، بعضها تحت جرافيكس هاوس قبل العلامة المستقلة. نفس الفريق، نفس معايير التنفيذ.",
};

export function getGroupProofCopy(locale: Locale): GroupProofCopy {
  return locale === "ar" ? ar : en;
}
