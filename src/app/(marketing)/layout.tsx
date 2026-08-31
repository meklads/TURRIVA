import "@/app/luxury.css";
import { LuxuryFooter } from "@/modules/luxury/components/luxury-footer";
import { LuxuryHeader } from "@/modules/luxury/components/luxury-header";
import { MarketingJsonLd } from "@/modules/luxury/components/marketing-json-ld";
import { MarketingAnalytics } from "@/shared/components/marketing-analytics";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  return (
    <div className="lux-shell flex min-h-screen flex-col">
      <MarketingJsonLd locale={locale} messages={t} />
      <MarketingAnalytics />
      <LuxuryHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <LuxuryFooter />
    </div>
  );
}
