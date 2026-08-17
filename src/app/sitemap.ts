import type { MetadataRoute } from "next";
import { TURRIVA_PUBLIC_URL } from "@/shared/constants/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = TURRIVA_PUBLIC_URL;
  const now = new Date();

  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/styles", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/villas", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/projects", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/interior-design", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/construction", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/our-work", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.88, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
