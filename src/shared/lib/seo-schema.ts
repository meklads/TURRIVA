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
      ? "شركة متخصصة في تنفيذ المساحات والتسليم الميداني ضمن مجموعة تسامي."
      : "Specialized spatial execution and physical delivery company within Tasami Group.",
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
    image: `${TURRIVA_PUBLIC_URL}/brand/turriva/turriva-logo.png`,
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
        url: `${TURRIVA_PUBLIC_URL}/brand/turriva/turriva-logo.png`,
      },
    },
    inLanguage: locale === "ar" ? "ar-SA" : "en-US",
    mainEntityOfPage: `${TURRIVA_PUBLIC_URL}${localizePath(article.path, locale)}`,
    ...(article.readMinutes
      ? { timeRequired: `PT${article.readMinutes}M` }
      : {}),
  };
}
