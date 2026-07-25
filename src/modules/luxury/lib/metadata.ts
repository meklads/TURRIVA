import type { Metadata } from "next";
import type { Locale } from "@/shared/i18n/locale";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";

export function luxurySiteMetadata(locale: Locale): Metadata {
  const t = getLuxuryMessages(locale);

  const title =
    locale === "ar"
      ? `${t.brand.name} · شركة ديكور ومقاولات فاخرة في السعودية`
      : `${t.brand.name} · Luxury Decor & Contracting Saudi Arabia`;

  const description =
    locale === "ar"
      ? "توريفا العقارية شركة سعودية فاخرة للديكور والمقاولات — فلل، قصور، ومشاريع سكنية راقية في الرياض وجميع أنحاء المملكة."
      : "Turriva is a premium Saudi decor and contracting company — luxury villas, palaces, and high-end residential projects across Riyadh and the Kingdom.";

  return {
    title,
    description,
    keywords:
      locale === "ar"
        ? [
            "ديكور فاخر",
            "مقاولات فلل",
            "تشطيب فاخر",
            "شركة ديكور السعودية",
            "مقاولات فلل فاخرة",
            "توريفا العقارية",
          ]
        : [
            "luxury decor Saudi Arabia",
            "premium contracting Riyadh",
            "villa fit-out",
            "high-end decor",
            "Turriva",
          ],
    openGraph: {
      title,
      description,
      url: "https://turriva.co",
      siteName: t.brand.name,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [
        {
          url: "/brand/hero/hero.jpg",
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
      images: ["/brand/hero/hero.jpg"],
    },
  };
}

export function luxuryPageMetadata(
  locale: Locale,
  pageTitle: string,
  intro: string
): Metadata {
  const base = luxurySiteMetadata(locale);
  const brand = locale === "ar" ? "توريفا العقارية" : "Turriva";
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
