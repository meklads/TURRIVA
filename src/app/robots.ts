import type { MetadataRoute } from "next";
import { env } from "@/shared/lib/env";

export default function robots(): MetadataRoute.Robots {
  const base = env.NEXT_PUBLIC_APP_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/workspace/",
          "/proposals/",
          "/share/",
          "/design/",
          "/settings/",
          "/admin/",
          "/login",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
