import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryLaunchPage } from "@/modules/luxury/components/luxury-launch-page";
import { getLaunchPageCopy } from "@/modules/luxury/lib/launch-playbook";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = getLaunchPageCopy(locale);
  return luxuryPageMetadata(locale, copy.title, copy.intro, { path: "/launch" });
}

export default async function LaunchRoute() {
  const locale = await getLocale();
  return <LuxuryLaunchPage locale={locale} />;
}
