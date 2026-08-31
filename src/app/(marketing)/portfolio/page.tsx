import Link from "next/link";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryMarketingHero } from "@/modules/luxury/components/luxury-marketing-hero";
import { LuxuryPortfolioGate } from "@/modules/luxury/components/luxury-portfolio-gate";
import { LuxuryPortfolioViewer } from "@/modules/luxury/components/luxury-portfolio-viewer";
import { hasPortfolioAccessFromCookies } from "@/modules/luxury/server/portfolio-access";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  return luxuryPageMetadata(locale, t.pages.portfolio.title, t.pages.portfolio.intro, { path: "/portfolio" });
}

export default async function PortfolioPage() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  const seo = getLuxurySeoMessages(locale);
  const hasAccess = await hasPortfolioAccessFromCookies();

  return (
    <>
      <LuxuryMarketingHero
        eyebrow={t.pages.portfolio.eyebrow}
        title={t.pages.portfolio.title}
        intro={t.pages.portfolio.intro}
      />

      {hasAccess ? (
        <LuxuryPortfolioViewer
          messages={t}
          shareLabel={seo.social.sharePortfolio}
          copyLabel={seo.social.copyLink}
          copiedLabel={seo.social.linkCopied}
          shareUrl={localizePath("/portfolio", locale)}
        />
      ) : (
        <LuxuryPortfolioGate messages={t} locale={locale} />
      )}

      {!hasAccess && (
        <section className="lux-section border-t border-lux-sand bg-white">
          <div className="lux-container max-w-3xl text-center">
            <p className="text-sm text-lux-ink-muted">{t.pages.portfolio.footerNote}</p>
            <Link
              href={localizePath("/contact", locale)}
              className="mt-4 inline-block text-sm font-semibold text-lux-gold hover:underline"
            >
              {t.pages.portfolio.footerContact}
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
