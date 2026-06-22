import type { Metadata } from "next";
import { LandingPage } from "@/modules/marketing/components/landing-page";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getMessages(locale);

  const title =
    locale === "ar"
      ? `${t.sales.hero.title} ${t.sales.hero.titleHighlight} · رواق`
      : `${t.sales.hero.title} ${t.sales.hero.titleHighlight} · Ruwaq`;

  const description = `${t.sales.hero.subtitleIntro} ${t.sales.hero.subtitleInputs.join(", ")}. ${t.sales.hero.subtitleOutcomeBefore}${t.sales.hero.subtitleHighlight}${t.sales.hero.subtitleOutcomeAfter}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://ruwaq.co",
      siteName: "Ruwaq",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [
        {
          url: "/brand/hero/hero.jpg",
          width: 1200,
          height: 630,
          alt: locale === "ar" ? "رواق · منصة العروض العقارية" : "Ruwaq · Real estate proposals",
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

export default async function HomePage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return <LandingPage t={t} locale={locale} />;
}
