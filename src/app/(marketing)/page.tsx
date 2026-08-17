import type { Metadata } from "next";
import { LuxuryHomePage } from "@/modules/luxury/components/luxury-home-page";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { luxurySiteMetadata } from "@/modules/luxury/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  const base = luxurySiteMetadata(locale);

  return {
    ...base,
    title:
      locale === "ar"
        ? `${t.brand.name} · ${t.brand.tagline}`
        : `${t.brand.name} · ${t.brand.tagline}`,
    description: t.hero.subtitle,
    openGraph: {
      ...base.openGraph,
      title: t.hero.title.replace("\n", " "),
      description: t.hero.subtitle,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      url: "https://turriva.com",
    },
  };
}

export default async function HomePage() {
  const locale = await getLocale();
  return <LuxuryHomePage locale={locale} />;
}
