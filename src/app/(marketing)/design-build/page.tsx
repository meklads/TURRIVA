import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryDesignBuildPage } from "@/modules/luxury/components/luxury-design-build-page";
import { DESIGN_BUILD_PATH, getDesignBuildCopy } from "@/modules/luxury/lib/design-build-copy";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = getDesignBuildCopy(locale);
  return luxuryPageMetadata(locale, copy.metaTitle, copy.metaDescription, { path: DESIGN_BUILD_PATH });
}

export default async function DesignBuildRoute() {
  const locale = await getLocale();
  return <LuxuryDesignBuildPage locale={locale} />;
}
