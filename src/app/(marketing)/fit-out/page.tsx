import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryFitOutPage } from "@/modules/luxury/components/luxury-fit-out-page";
import { FIT_OUT_PATH, getFitOutCopy } from "@/modules/luxury/lib/fit-out-copy";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = getFitOutCopy(locale);
  return luxuryPageMetadata(locale, copy.metaTitle, copy.metaDescription, { path: FIT_OUT_PATH });
}

export default async function FitOutRoute() {
  const locale = await getLocale();
  return <LuxuryFitOutPage locale={locale} />;
}
