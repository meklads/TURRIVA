import { LuxuryHomePage } from "@/modules/luxury/components/luxury-home-page";
import { luxurySiteMetadata } from "@/modules/luxury/lib/metadata";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  return luxurySiteMetadata(locale);
}

export default async function HomePage() {
  const locale = await getLocale();
  return <LuxuryHomePage locale={locale} />;
}
