import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryHospitalitySpacesPage } from "@/modules/luxury/components/luxury-hospitality-spaces-page";
import { HOSPITALITY_SPACES_PATH, getHospitalitySpacesCopy } from "@/modules/luxury/lib/hospitality-spaces-copy";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = getHospitalitySpacesCopy(locale);
  return luxuryPageMetadata(locale, copy.metaTitle, copy.metaDescription, { path: HOSPITALITY_SPACES_PATH });
}

export default async function HospitalitySpacesRoute() {
  const locale = await getLocale();
  return <LuxuryHospitalitySpacesPage locale={locale} />;
}
