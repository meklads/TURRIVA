import { LuxuryContactPage } from "@/modules/luxury/components/luxury-contact-page";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { CONTACT_INTENTS, parseContactIntent } from "@/modules/luxury/lib/contact-intents";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";

type Props = { searchParams: Promise<{ intent?: string }> };

export async function generateMetadata({ searchParams }: Props) {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  const { intent: raw } = await searchParams;
  const intent = parseContactIntent(raw);
  const preset = intent ? CONTACT_INTENTS[intent] : null;
  const title = preset ? (locale === "ar" ? preset.titleAr : preset.titleEn) : t.pages.contact.title;
  const intro = preset ? (locale === "ar" ? preset.subtitleAr : preset.subtitleEn) : t.pages.contact.intro;
  return luxuryPageMetadata(locale, title, intro, { path: "/contact" });
}

export default async function ContactPage({ searchParams }: Props) {
  const locale = await getLocale();
  const { intent: raw } = await searchParams;
  const intent = parseContactIntent(raw);

  return <LuxuryContactPage locale={locale} intent={intent} />;
}
