import Link from "next/link";
import { getDesignMessages } from "@/shared/i18n/messages/design";
import { getLocale } from "@/shared/i18n/server";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { RuwaqLogo } from "@/shared/components/ruwaq-logo";

export async function DesignHeader() {
  const locale = await getLocale();
  const t = getDesignMessages(locale);

  return (
    <header className="design-header design-header--brand">
      <div className="design-container design-container--wide">
        <div className="design-header-bar">
          <div className="design-header-brand">
            <RuwaqLogo priority className="h-10 w-auto sm:h-11" />
            <span className="design-header-tagline">{t.brand.tagline}</span>
          </div>

          <nav className="design-nav" aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}>
            <a href="#studio">{t.nav.studio}</a>
            <Link href="/our-work">{t.nav.work}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
          </nav>

          <div className="design-header-actions">
            <LocaleSwitcher />
            <Link
              href="/workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="design-header-link hidden lg:inline-flex"
            >
              {t.nav.workspace}
            </Link>
            <a href="#studio" className="design-btn design-btn-outline hidden sm:inline-flex">
              {t.nav.tryTool}
            </a>
            <Link href="/contact" className="design-btn design-btn-execution">
              {t.nav.contactCta}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
