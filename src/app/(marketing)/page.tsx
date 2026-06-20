import { LandingPage } from "@/modules/marketing/components/landing-page";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function HomePage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return <LandingPage t={t} locale={locale} />;
}
