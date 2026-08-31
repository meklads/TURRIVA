import Link from "next/link";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LuxuryBrandLogo } from "./luxury-brand-logo";
import { LuxuryDesktopNav, LuxuryMobileNav } from "./luxury-nav-links";
import { getLuxuryNavLinks } from "../lib/nav";

export async function LuxuryHeader() {
  const locale = await getLocale();
  const links = getLuxuryNavLinks(locale);
  const t = getLuxuryMessages(locale);
  const homeHref = localizePath("/", locale);

  return (
    <header className="lux-header">
      <div className="lux-header-chrome lux-header--elevated">
        <div className="lux-container lux-header-shell">
          <div className="lux-header-bar">
            <div className="lux-header-brand">
              <LuxuryBrandLogo href={homeHref} priority />
            </div>
            <LuxuryDesktopNav links={links} />
            <div className="lux-header-actions">
              <Link href={localizePath("/contact?intent=design", locale)} className="lux-btn-primary hidden lg:inline-flex !min-w-0 px-5 py-2.5 text-[10px]">
                {t.hero.ctaPrimary}
              </Link>
              <LocaleSwitcher />
            </div>
          </div>
          <LuxuryMobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
