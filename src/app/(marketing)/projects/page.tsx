import { getLocale } from "@/shared/i18n/server";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LuxuryProjectsPage } from "@/modules/luxury/components/luxury-projects-page";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  return luxuryPageMetadata(locale, t.pages.projects.title, t.pages.projects.intro);
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  return <LuxuryProjectsPage messages={t} locale={locale} />;
}
