import type { Metadata } from "next";
import type { Locale } from "@/shared/i18n/locale";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";

export function luxurySiteMetadata(locale: Locale): Metadata {
  const t = getLuxuryMessages(locale);

  const title =
    locale === "ar"
      ? `${t.brand.name} · ${t.brand.tagline}`
      : `${t.brand.name} · ${t.brand.tagline}`;

  const description =
    locale === "ar"
      ? "توريفا إحدى شركات مجموعة تسامي، متخصصة في تنفيذ المساحات الداخلية والمعارض والتأثيث والتصنيع والتركيب والتسليم الميداني في السعودية."
      : "Turriva is a Tasami Group company specializing in spatial execution, fit-out, exhibitions, furnishing, fabrication, installation, and physical delivery in Saudi Arabia.";

  return {
    title,
    description,
    keywords:
      locale === "ar"
        ? [
            "تصميم داخلي",
            "تنفيذ ديكور",
            "تنفيذ معارض",
            "تنفيذ مساحات",
            "تأثيث",
            "تصنيع وتركيب",
            "ديكور فلل",
            "شركة ديكور جدة",
            "توريفا",
          ]
        : [
            "interior design Saudi Arabia",
            "interior execution Saudi Arabia",
            "fit-out contractor Jeddah",
            "exhibition execution",
            "spatial fabrication",
            "furnishing",
            "turnkey physical experiences",
            "Turriva",
          ],
    openGraph: {
      title,
      description,
      url: "https://turriva.com",
      siteName: t.brand.name,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [
        {
          url: "/brand/luxury/hero-villa.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/luxury/hero-villa.jpg"],
    },
  };
}

export function luxuryPageMetadata(
  locale: Locale,
  pageTitle: string,
  intro: string
): Metadata {
  const base = luxurySiteMetadata(locale);
  const brand = locale === "ar" ? "توريفا" : "Turriva";
  const title = `${pageTitle} · ${brand}`;

  return {
    ...base,
    title,
    description: intro,
    openGraph: {
      ...base.openGraph,
      title,
      description: intro,
    },
    twitter: {
      ...base.twitter,
      title,
      description: intro,
    },
  };
}
