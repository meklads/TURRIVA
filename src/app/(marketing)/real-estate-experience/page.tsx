import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryRealEstateExperiencePage } from "@/modules/luxury/components/luxury-real-estate-experience-page";
import { EXPERIENCE_PATH, getExperienceCopy } from "@/modules/luxury/lib/real-estate-experience-copy";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = getExperienceCopy(locale);
  return luxuryPageMetadata(locale, copy.metaTitle, copy.metaDescription, { path: EXPERIENCE_PATH });
}

export default async function RealEstateExperienceRoute() {
  const locale = await getLocale();
  return <LuxuryRealEstateExperiencePage locale={locale} />;
}
