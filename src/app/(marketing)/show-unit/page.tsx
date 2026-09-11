import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryShowUnitPage } from "@/modules/luxury/components/luxury-show-unit-page";
import { SHOW_UNIT_PATH, getShowUnitCopy } from "@/modules/luxury/lib/show-unit-copy";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = getShowUnitCopy(locale);
  return luxuryPageMetadata(locale, copy.metaTitle, copy.metaDescription, { path: SHOW_UNIT_PATH });
}

export default async function ShowUnitRoute() {
  const locale = await getLocale();
  return <LuxuryShowUnitPage locale={locale} />;
}
