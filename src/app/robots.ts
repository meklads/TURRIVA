import type { MetadataRoute } from "next";
import { TURRIVA_PUBLIC_URL } from "@/shared/constants/brand";

export default function robots(): MetadataRoute.Robots {
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
    sitemap: `${TURRIVA_PUBLIC_URL}/sitemap.xml`,
  };
}
