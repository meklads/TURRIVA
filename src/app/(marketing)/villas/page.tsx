import { getLocale } from "@/shared/i18n/server";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LuxuryVillasPage } from "@/modules/luxury/components/luxury-villas-page";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  return luxuryPageMetadata(locale, t.pages.villas.title, t.pages.villas.intro);
}

export default async function VillasPage() {
  const locale = await getLocale();
  return <LuxuryVillasPage locale={locale} />;
}
