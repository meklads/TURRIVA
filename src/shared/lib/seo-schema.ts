import type { Locale } from "@/shared/i18n/locale";
import { TURRIVA_PUBLIC_EMAIL, TURRIVA_PUBLIC_URL } from "@/shared/constants/brand";
import { localizePath } from "@/shared/i18n/path";

export const GROUP_LINKS = {
  tasami: "https://www.tasamify.com/",
  graphicsHouse: "https://3dgraphicshouse.com",
  beesMotion: "https://beesmotion.com",
  ruwaq: "https://ruwaq.co",
  dotForLife: "https://dotforlife.com",
} as const;

export const TURRIVA_SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/turriva",
  instagram: "https://www.instagram.com/turriva",
} as const;

export function organizationSchema(locale: Locale) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Turriva",
    alternateName: isAr ? "توريفا" : undefined,
    url: TURRIVA_PUBLIC_URL,
    email: TURRIVA_PUBLIC_EMAIL,
    telephone: "+966502786513",
    description: isAr
      ? "توريفا تصمم وتنفذ المساحات — نفس الفريق الذي بنى تجارب بيع وتشطيبات داخلية لعملاء مجموعة تسامي منذ 15 عامًا. من المخططات إلى التسليم."
      : "Turriva designs and delivers spaces — the same team that built sales experiences and interior fit-out for Tasami Group clients for 15 years. From drawings to handover.",
    parentOrganization: {
      "@type": "Organization",
      name: "Tasami Group",
      url: GROUP_LINKS.tasami,
    },
    subOrganization: [
      { "@type": "Organization", name: "Graphics House", url: GROUP_LINKS.graphicsHouse },
      { "@type": "Organization", name: "Bees Motion", url: GROUP_LINKS.beesMotion },
    ],
    areaServed: ["Saudi Arabia", "Oman", "Bahrain", "Egypt"],
    knowsAbout: [
      "Interior execution",
      "Exhibition execution",
      "Fit-out",
      "Furnishing",
      "Fabrication",
      "Installation",
    ],
    sameAs: [
      TURRIVA_SOCIAL_LINKS.linkedin,
      TURRIVA_SOCIAL_LINKS.instagram,
      GROUP_LINKS.tasami,
      GROUP_LINKS.graphicsHouse,
      GROUP_LINKS.beesMotion,
      GROUP_LINKS.ruwaq,
    ],
  };
}

export function webSiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: locale === "ar" ? "توريفا" : "Turriva",
    url: `${TURRIVA_PUBLIC_URL}${localizePath("/", locale)}`,
    inLanguage: locale === "ar" ? "ar-SA" : "en-US",
    publisher: {
      "@type": "Organization",
      name: "Turriva",
      url: TURRIVA_PUBLIC_URL,
    },
  };
}

export function localBusinessSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Turriva",
    image: `${TURRIVA_PUBLIC_URL}/brand/turriva/logo-lockup-black.png`,
    url: TURRIVA_PUBLIC_URL,
    telephone: "+966502786513",
    email: TURRIVA_PUBLIC_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "ar" ? "جدة" : "Jeddah",
      addressCountry: "SA",
    },
    areaServed: [
      { "@type": "City", name: "Jeddah" },
      { "@type": "City", name: "Makkah" },
      { "@type": "City", name: "Riyadh" },
      { "@type": "Country", name: "Saudi Arabia" },
    ],
    priceRange: "$$$$",
  };
}

export function faqPageSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/<[^>]+>/g, ""),
      },
    })),
  };
}

export function breadcrumbSchema(
  locale: Locale,
  crumbs: readonly { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${TURRIVA_PUBLIC_URL}${localizePath(crumb.path, locale)}`,
    })),
  };
}

export function serviceSchema(
  locale: Locale,
  service: { name: string; description: string; path: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Turriva",
      url: TURRIVA_PUBLIC_URL,
    },
    areaServed: "Saudi Arabia",
    url: `${TURRIVA_PUBLIC_URL}${localizePath(service.path, locale)}`,
  };
}

export function articleSchema(
  locale: Locale,
  article: {
    title: string;
    description: string;
    path: string;
    datePublished?: string;
    readMinutes?: number;
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished ?? "2026-01-15",
    author: {
      "@type": "Organization",
      name: "Turriva",
      url: TURRIVA_PUBLIC_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Turriva",
      url: TURRIVA_PUBLIC_URL,
      logo: {
        "@type": "ImageObject",
        url: `${TURRIVA_PUBLIC_URL}/brand/turriva/logo-lockup-black.png`,
      },
    },
    inLanguage: locale === "ar" ? "ar-SA" : "en-US",
    mainEntityOfPage: `${TURRIVA_PUBLIC_URL}${localizePath(article.path, locale)}`,
    ...(article.readMinutes
      ? { timeRequired: `PT${article.readMinutes}M` }
      : {}),
  };
}

export function productPackagesSchema(locale: Locale) {
  const isAr = locale === "ar";
  const products = [
    {
      name: isAr ? "نظام الإطلاق السريع" : "Express Launch",
      description: isAr
        ? "صالات بيع ووحدات عرض جاهزة خلال أقل من 3 أسابيع بنطاق واضح."
        : "Turnkey sales galleries and show units in under 3 weeks on a clear scope.",
      url: `${TURRIVA_PUBLIC_URL}${localizePath("/real-estate-experience", locale)}`,
    },
    {
      name: isAr ? "المنظومة التفاعلية القيادية" : "Flagship Spatial System",
      description: isAr
        ? "تكامل مجسمات حركية وشاشات لمس وسينما مكانية في بيئة البيع."
        : "Kinetic models, touch displays, and spatial cinema integrated in the sales room.",
      url: `${TURRIVA_PUBLIC_URL}${localizePath("/real-estate-experience", locale)}`,
    },
    {
      name: isAr ? "حلول المبيعات الرقمية" : "PropTech Sales Engine",
      description: isAr
        ? "أدوات رقمية لدعم فريق المبيعات مرتبطة بالمكان عبر منظومة المجموعة."
        : "Digital sales tools tied to the spatial environment via the group ecosystem.",
      url: `${TURRIVA_PUBLIC_URL}${localizePath("/show-unit", locale)}`,
    },
  ];

  return products.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    brand: { "@type": "Brand", name: "Turriva" },
    url: p.url,
    category: "Real Estate Sales Environment",
  }));
}

export function softwareApplicationSchema(locale: Locale) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: isAr ? "مستشار مبيعات توريفا" : "Turriva Sales Consultant",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SAR",
    },
    description: isAr
      ? "مساعد محادثة لمساعدة المطورين على اختيار باقة الإطلاق وحجز عرض حي."
      : "A chat assistant that helps developers choose a launch package and book a live demo.",
    inLanguage: [isAr ? "ar" : "en", "ar", "en"],
  };
}
