import type { Locale } from "@/shared/i18n/locale";

export type MarketSlug = "saudi" | "gcc" | "international";

export type Market = {
  slug: MarketSlug;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  pointsEn: readonly string[];
  pointsAr: readonly string[];
  intent: string;
};

export const MARKETS: readonly Market[] = [
  {
    slug: "saudi",
    titleEn: "Saudi Arabia",
    titleAr: "المملكة العربية السعودية",
    summaryEn: "Primary execution market — villas, hospitality programmes, exhibitions, and developer joinery across the Kingdom.",
    summaryAr: "سوق التنفيذ الأساسي — فلل وبرامج ضيافة ومعارض ونجارة مطورين في أنحاء المملكة.",
    pointsEn: ["Jeddah HQ & Western Region hub", "Makkah hospitality programmes", "Central region developer & pavilion work"],
    pointsAr: ["المقر في جدة ومركز المنطقة الغربية", "برامج ضيافة في مكة", "مشاريع مطورين وبافيلions في الوسط"],
    intent: "quote",
  },
  {
    slug: "gcc",
    titleEn: "GCC",
    titleAr: "دول الخليج",
    summaryEn: "Cross-border delivery with offices and coordination in Oman and Bahrain — same factory-aligned QC standards.",
    summaryAr: "تسليم عبر الحدود مع مكاتب وتنسيق في عُمان والبحرين — نفس معايير جودة المصنع.",
    pointsEn: ["Muscat office", "Manama office", "Shared programme language with Saudi HQ"],
    pointsAr: ["مكتب مسقط", "مكتب المنامة", "لغة برنامج موحّدة مع المقر في السعودية"],
    intent: "developer",
  },
  {
    slug: "international",
    titleEn: "International",
    titleAr: "الأسواق الدولية",
    summaryEn: "Selected programmes beyond the GCC — Cairo office and project teams coordinated from Turriva HQ.",
    summaryAr: "برامج مختارة خارج الخليج — مكتب القاهرة وفرق مشاريع منسّقة من مقر توريفا.",
    pointsEn: ["Cairo office", "Export-ready joinery packages", "Brief-led engagement for overseas developers"],
    pointsAr: ["مكتب القاهرة", "حزم نجارة جاهزة للتصدير", "تعامل مبني على الملخص للمطورين خارج المنطقة"],
    intent: "quote",
  },
] as const;

export function getMarketsPageCopy(locale: Locale) {
  const isAr = locale === "ar";
  return {
    eyebrow: isAr ? "الأسواق" : "Markets",
    title: isAr ? "أسواق نخدمها" : "Markets we serve",
    intro: isAr
      ? "توريفا غير مقيدة بمدينة واحدة. ننفّذ في السعودية والخليج، ونخدم برامجاً دولية مختارة — نفس معايير المصنع والتسليم الميداني."
      : "Turriva is not limited to one city. We execute across Saudi Arabia and the GCC, and support selected international programmes — with the same factory and field standards.",
    hubsTitle: isAr ? "مكاتب التنسيق" : "Coordination offices",
    hubsIntro: isAr
      ? "مكاتب في جدة ومسقط والمنامة والقاهرة — للتواصل والتنسيق، دون حصر نطاق الخدمة بمدينة واحدة."
      : "Offices in Jeddah, Muscat, Manama, and Cairo — for coordination, not as a limit on where we deliver.",
    cta: isAr ? "ناقش مشروعك" : "Discuss your project",
  };
}

export function marketText(market: Market, locale: Locale) {
  const isAr = locale === "ar";
  return {
    title: isAr ? market.titleAr : market.titleEn,
    summary: isAr ? market.summaryAr : market.summaryEn,
    points: isAr ? market.pointsAr : market.pointsEn,
  };
}
