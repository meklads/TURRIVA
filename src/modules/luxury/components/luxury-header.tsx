import Link from "next/link";
import { getLocale } from "@/shared/i18n/server";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { LuxuryBrandLogo } from "./luxury-brand-logo";
import { LuxuryDesktopNav, LuxuryMobileNav } from "./luxury-nav-links";
import { getLuxuryNavLinks } from "../lib/nav";

export async function LuxuryHeader() {
  const locale = await getLocale();
  const links = getLuxuryNavLinks(locale);
  const t = getLuxuryMessages(locale);

  return (
    <header className="lux-header lux-header--elevated">
      <div className="lux-container lux-header-shell">
        <div className="lux-header-logo">
          <LuxuryBrandLogo href="/" priority />
        </div>

        <div className="lux-header-bar">
          <LuxuryDesktopNav links={links} />

          <div className="lux-header-actions">
            <Link href="/contact" className="lux-btn-primary hidden sm:inline-flex !min-w-0 px-5 py-2.5 text-[10px]">
              {t.hero.ctaPrimary}
            </Link>
            <LocaleSwitcher />
          </div>
        </div>

        <LuxuryMobileNav links={links} />
      </div>
    </header>
  );
}
