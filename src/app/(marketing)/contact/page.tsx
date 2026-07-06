import { LuxuryInnerPage } from "@/modules/luxury/components/luxury-inner-page";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  return luxuryPageMetadata(locale, t.pages.contact.title, t.pages.contact.intro);
}

export default async function ContactPage() {
  const locale = await getLocale();
  return <LuxuryInnerPage locale={locale} page="contact" />;
}
