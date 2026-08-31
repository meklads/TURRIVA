import type { MetadataRoute } from "next";
import { TURRIVA_PUBLIC_URL } from "@/shared/constants/brand";
import { localizePath } from "@/shared/i18n/path";
import type { Locale } from "@/shared/i18n/locale";
import { CASE_STUDIES } from "@/modules/luxury/lib/case-studies";
import { INSIGHT_ARTICLES } from "@/modules/luxury/lib/insights-content";

const LOCALES: Locale[] = ["ar", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/villas", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/projects", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/styles", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/our-work", priority: 0.88, changeFrequency: "weekly" as const },
    { path: "/portfolio", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.82, changeFrequency: "weekly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/locations", priority: 0.78, changeFrequency: "monthly" as const },
    { path: "/interior-design", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/construction", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.88, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    ...CASE_STUDIES.map((c) => ({
      path: `/our-work/${c.slug}`,
      priority: 0.75,
      changeFrequency: "monthly" as const,
    })),
    ...INSIGHT_ARTICLES.map((a) => ({
      path: `/insights/${a.slug}`,
      priority: 0.72,
      changeFrequency: "monthly" as const,
    })),
    { path: "/locations/jeddah", priority: 0.76, changeFrequency: "monthly" as const },
    { path: "/locations/makkah", priority: 0.76, changeFrequency: "monthly" as const },
    { path: "/locations/riyadh", priority: 0.76, changeFrequency: "monthly" as const },
  ];

  return routes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${TURRIVA_PUBLIC_URL}${localizePath(route.path, locale)}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          ar: `${TURRIVA_PUBLIC_URL}${localizePath(route.path, "ar")}`,
          en: `${TURRIVA_PUBLIC_URL}${localizePath(route.path, "en")}`,
        },
      },
    }))
  );
}
