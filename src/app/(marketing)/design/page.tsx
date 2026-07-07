import type { Metadata } from "next";
import { DesignHomePage } from "@/modules/design/components/design-home-page";
import { getDesignMessages } from "@/shared/i18n/messages/design";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDesignMessages(locale);
  return {
    title: locale === "ar" ? "رواق — استوديو التصميم بالذكاء الاصطناعي" : "Ruwaq — AI Design Studio",
    description: t.hero.subtitle,
  };
}

export default async function DesignPage() {
  const locale = await getLocale();
  return <DesignHomePage locale={locale} />;
}
