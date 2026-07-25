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
      ? "توريفا العقارية — تصميم وتنفيذ ديكور عصري للفلل والقصور والمحلات وأجنحة المعارض في جدة ومكة. جودة، رضا العميل، وتسليم في الموقع."
      : "Turriva — modern decor design and on-site delivery for villas, palaces, retail, and exhibitions in Jeddah and Makkah. Quality, client care, and disciplined handover.";

  return {
    title,
    description,
    keywords:
      locale === "ar"
        ? [
            "تصميم داخلي",
            "تنفيذ ديكور",
            "ديكور فلل",
            "تشطيب قصور",
            "شركة ديكور جدة",
            "توريفا العقارية",
          ]
        : [
            "interior design Saudi Arabia",
            "decor fit-out Jeddah",
            "villa interior design",
            "exhibition booth build",
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
