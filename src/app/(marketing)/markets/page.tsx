import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketsPage } from "@/modules/luxury/components/luxury-markets-page";
import { getMarketsPageCopy } from "@/modules/luxury/lib/markets";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = getMarketsPageCopy(locale);
  return luxuryPageMetadata(locale, copy.title, copy.intro, { path: "/markets" });
}

export default async function MarketsRoute() {
  const locale = await getLocale();
  return <LuxuryMarketsPage locale={locale} />;
}
