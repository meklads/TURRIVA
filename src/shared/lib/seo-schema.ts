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
      ? "توريفا شركة تنفيذ مكاني وتسليم مادي — نفس فريق التسليم الذي نفّذ بيئات بيع وأعمالاً ميدانية لعملاء مجموعة تسامي لأكثر من 15 عاماً. من التصميم المعتمد إلى الواقع المسلَّم."
      : "Turriva is a spatial execution and physical delivery company — the same delivery team that built sales environments and field work for Tasami Group clients for 15+ years. From approved design to delivered reality.",
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
      name: isAr ? "بيئات البيع العقاري" : "Real Estate Sales Environments",
      description: isAr
        ? "صالات بيع ووحدات عرض ومساحات إطلاق: تطوير فني وتصنيع وتركيب وتسليم جاهز للافتتاح."
        : "Sales galleries, show units, and launch spaces: technical development, fabrication, installation, and opening-ready handover.",
      url: `${TURRIVA_PUBLIC_URL}${localizePath("/real-estate-experience", locale)}`,
    },
    {
      name: isAr ? "وحدة العرض" : "Show Unit",
      description: isAr
        ? "فيلا أو شقة عيّنة بمعيار المشروع: تجهيز وتأثيث وتسليم لمسار يمشي فيه المشتري."
        : "Show villa or apartment to the project standard: fit-out, furnishing, and handover for a path the buyer can walk.",
      url: `${TURRIVA_PUBLIC_URL}${localizePath("/show-unit", locale)}`,
    },
    {
      name: isAr ? "التنفيذ والتجهيز" : "Fit-Out & Execution",
      description: isAr
        ? "من المخططات المعتمدة إلى التصنيع والتركيب والتسليم، لشريك تسليم مكاني لا مكتب تصميم."
        : "From approved drawings through fabrication, installation, and handover — a spatial delivery partner, not a design firm.",
      url: `${TURRIVA_PUBLIC_URL}${localizePath("/fit-out", locale)}`,
    },
  ];

  return products.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    brand: { "@type": "Brand", name: "Turriva" },
    url: p.url,
    category: "Spatial Execution & Physical Delivery",
  }));
}

export function softwareApplicationSchema(locale: Locale) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: isAr ? "مساعد توريفا" : "Turriva Assistant",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SAR",
    },
    description: isAr
      ? "مساعد محادثة يوضح التنفيذ المكاني وبيئات البيع ومسار التسليم، ويفتح مناقشة المشروع عند الحاجة."
      : "A chat assistant that explains spatial execution, sales environments, and the delivery path, and opens a project discussion when needed.",
    inLanguage: [isAr ? "ar" : "en", "ar", "en"],
  };
}
