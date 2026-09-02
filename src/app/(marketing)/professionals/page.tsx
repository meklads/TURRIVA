import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryProfessionalsPage } from "@/modules/luxury/components/luxury-professionals-page";
import { hasProfessionalsAccessFromCookies } from "@/modules/luxury/server/professionals-access";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const seo = getLuxurySeoMessages(locale);
  const copy = seo.professionalsPage;
  return luxuryPageMetadata(locale, copy.title, copy.intro, { path: "/professionals" });
}

export default async function ProfessionalsRoute() {
  const locale = await getLocale();
  const hasAccess = await hasProfessionalsAccessFromCookies();

  return <LuxuryProfessionalsPage locale={locale} hasAccess={hasAccess} />;
}
