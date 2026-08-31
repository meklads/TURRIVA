import "@/app/luxury.css";
import { LuxuryFooter } from "@/modules/luxury/components/luxury-footer";
import { LuxuryHeader } from "@/modules/luxury/components/luxury-header";
import { MarketingJsonLd } from "@/modules/luxury/components/marketing-json-ld";
import { MarketingAnalytics } from "@/shared/components/marketing-analytics";
import { getLocale } from "@/shared/i18n/server";

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <div className="lux-shell flex min-h-screen flex-col">
      <a href="#main" className="lux-skip-link">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>
      <MarketingJsonLd locale={locale} />
      <MarketingAnalytics />
      <LuxuryHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <LuxuryFooter />
    </div>
  );
}
