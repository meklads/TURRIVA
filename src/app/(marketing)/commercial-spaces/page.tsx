import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryCommercialSpacesPage } from "@/modules/luxury/components/luxury-commercial-spaces-page";
import { COMMERCIAL_SPACES_PATH, getCommercialSpacesCopy } from "@/modules/luxury/lib/commercial-spaces-copy";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = getCommercialSpacesCopy(locale);
  return luxuryPageMetadata(locale, copy.metaTitle, copy.metaDescription, { path: COMMERCIAL_SPACES_PATH });
}

export default async function CommercialSpacesRoute() {
  const locale = await getLocale();
  return <LuxuryCommercialSpacesPage locale={locale} />;
}
