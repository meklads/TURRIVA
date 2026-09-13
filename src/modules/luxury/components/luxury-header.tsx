import Link from "next/link";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { MarketingNavPrefetch } from "@/shared/components/marketing-nav-prefetch";
import { LuxuryBrandLogo } from "./luxury-brand-logo";
import { LuxuryHeaderScroll } from "./luxury-header-scroll";
import { LuxuryScrollProgress } from "./luxury-scroll-progress";
import { LuxuryDesktopNav, LuxuryMobileNav, LuxuryRouteProgress } from "./luxury-nav-links";
import { getLuxuryHeaderNavLinks, getLuxuryNavLinks, getLuxuryProductMenu } from "../lib/nav";

export async function LuxuryHeader() {
  const locale = await getLocale();
  const headerLinks = getLuxuryHeaderNavLinks(locale);
  const productMenu = getLuxuryProductMenu(locale);
  const mobileLinks = getLuxuryNavLinks(locale);
  const t = getLuxuryMessages(locale);
  const homeHref = localizePath("/", locale);
  const contactHref = localizePath("/contact?intent=design", locale);

  const prefetchPaths = [
    homeHref,
    ...headerLinks.map((l) => l.href),
    ...mobileLinks.map((l) => l.href),
    contactHref,
    localizePath("/launch", locale),
    localizePath("/markets", locale),
    localizePath("/insights", locale),
    localizePath("/faq", locale),
  ];

  return (
    <header className="lux-header lux-header--sticky">
      <LuxuryHeaderScroll />
      <LuxuryRouteProgress />
      <MarketingNavPrefetch paths={Array.from(new Set(prefetchPaths))} />
      <div className="lux-header-chrome">
        <div className="lux-container lux-header-shell">
          <div className="lux-header-bar">
            <div className="lux-header-brand">
              <LuxuryBrandLogo href={homeHref} priority layout="header" tagline={t.brand.tagline} />
            </div>
            <LuxuryDesktopNav links={headerLinks} products={productMenu} isAr={locale === "ar"} />
            <div className="lux-header-actions">
              <Link href={contactHref} prefetch className="lux-btn-primary lux-header-cta inline-flex">
                <span className="lux-header-cta-short">{t.nav.contact}</span>
                <span className="lux-header-cta-full">{t.hero.ctaPrimary}</span>
              </Link>
              <LocaleSwitcher variant="luxury" />
            </div>
          </div>
          <LuxuryMobileNav links={mobileLinks} products={productMenu} isAr={locale === "ar"} />
        </div>
        <LuxuryScrollProgress />
      </div>
    </header>
  );
}
