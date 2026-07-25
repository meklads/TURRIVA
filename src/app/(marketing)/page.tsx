import type { Metadata } from "next";
import { LuxuryHomePage } from "@/modules/luxury/components/luxury-home-page";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  return {
    title:
      locale === "ar"
        ? "توريفا العقارية | ديكور ثابت وتشطيبات فاخرة"
        : "Turriva Real Estate | Luxury fit-out & fixed decor",
    description: t.hero.subtitle,
    openGraph: {
      title: t.hero.title.replace("\n", " "),
      description: t.hero.subtitle,
      locale: locale === "ar" ? "ar_SA" : "en_US",
    },
  };
}

export default async function HomePage() {
  const locale = await getLocale();
  return <LuxuryHomePage locale={locale} />;
}
