import { getLocale } from "@/shared/i18n/server";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LuxuryStylesPage } from "@/modules/luxury/components/luxury-styles-page";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  return luxuryPageMetadata(locale, t.pages.styles.title, t.pages.styles.intro);
}

export default async function StylesPage() {
  const locale = await getLocale();
  return <LuxuryStylesPage locale={locale} />;
}
