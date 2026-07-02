import type { MetadataRoute } from "next";
import { env } from "@/shared/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.NEXT_PUBLIC_APP_URL;
  const now = new Date();

  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/templates/sample", priority: 0.7, changeFrequency: "monthly" as const },
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
