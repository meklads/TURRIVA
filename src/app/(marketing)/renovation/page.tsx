import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryRenovationPage } from "@/modules/luxury/components/luxury-renovation-page";
import { RENOVATION_PATH, getRenovationCopy } from "@/modules/luxury/lib/renovation-copy";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = getRenovationCopy(locale);
  return luxuryPageMetadata(locale, copy.metaTitle, copy.metaDescription, { path: RENOVATION_PATH });
}

export default async function RenovationRoute() {
  const locale = await getLocale();
  return <LuxuryRenovationPage locale={locale} />;
}
