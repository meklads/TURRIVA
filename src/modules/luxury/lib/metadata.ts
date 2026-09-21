import type { Metadata } from "next";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { TURRIVA_PUBLIC_URL } from "@/shared/constants/brand";

type PageMetaOptions = {
  path?: string;
  ogImage?: string;
};

export function luxurySiteMetadata(locale: Locale): Metadata {
  const t = getLuxuryMessages(locale);

  const title = `${t.brand.name}, ${t.brand.tagline}`;

  const description =
    locale === "ar"
      ? "توريفا: تنفيذ مكاني وتسليم مادي من التصميم المعتمد إلى الواقع. بيئات البيع العقاري تخصص رئيسي، مع ضيافة وتجاري ومعارض وسكني وتجهيز. جزء من مجموعة تسامي."
      : "Turriva: spatial execution and physical delivery from approved design to reality. Real estate sales environments as flagship specialty, plus hospitality, commercial, exhibition, residential, and fit-out. Part of Tasami Group.";

  const canonical = `${TURRIVA_PUBLIC_URL}${localizePath("/", locale)}`;

  return {
    title,
    description,
    keywords:
      locale === "ar"
        ? [
            "تنفيذ مكاني",
            "تسليم مادي",
            "بيئات البيع العقاري",
            "صالة مبيعات",
            "وحدة عرض",
            "تجهيز وتنفيذ",
            "توريفا",
          ]
        : [
            "spatial execution",
            "physical delivery",
            "real estate sales environments",
            "sales gallery",
            "show unit",
            "fit-out execution",
            "Turriva",
          ],
    alternates: {
      canonical,
      languages: {
        ar: `${TURRIVA_PUBLIC_URL}/ar`,
        en: `${TURRIVA_PUBLIC_URL}/`,
        "x-default": `${TURRIVA_PUBLIC_URL}/`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: t.brand.name,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [
        {
          url: "/brand/turriva/hero-interior.webp",
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
      images: ["/brand/turriva/hero-interior.webp"],
    },
  };
}

export function luxuryPageMetadata(
  locale: Locale,
  pageTitle: string,
  intro: string,
  options: PageMetaOptions = {}
): Metadata {
  const base = luxurySiteMetadata(locale);
  const brand = locale === "ar" ? "توريفا" : "Turriva";
  const title = `${pageTitle}, ${brand}`;
  const path = options.path ?? "/";
  const canonical = `${TURRIVA_PUBLIC_URL}${localizePath(path, locale)}`;
  const ogImage = options.ogImage ?? "/brand/turriva/hero-interior.webp";

  return {
    ...base,
    title,
    description: intro,
    alternates: {
      canonical,
      languages: {
        ar: `${TURRIVA_PUBLIC_URL}${localizePath(path, "ar")}`,
        en: `${TURRIVA_PUBLIC_URL}${localizePath(path, "en")}`,
        "x-default": `${TURRIVA_PUBLIC_URL}${localizePath(path, "en")}`,
      },
    },
    openGraph: {
      ...base.openGraph,
      title,
      description: intro,
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      ...base.twitter,
      title,
      description: intro,
      images: [ogImage],
    },
  };
}
