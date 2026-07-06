import { getLocale } from "@/shared/i18n/server";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { LuxuryBrandLogo } from "./luxury-brand-logo";
import { LuxuryDesktopNav, LuxuryMobileNav } from "./luxury-nav-links";
import { getLuxuryNavLinks } from "../lib/nav";

export async function LuxuryHeader() {
  const locale = await getLocale();
  const links = getLuxuryNavLinks(locale);

  return (
    <header className="lux-header">
      <div className="lux-container">
        <div className="lux-header-bar">
          <div className="lux-header-logo">
            <LuxuryBrandLogo href="/" priority />
          </div>

          <LuxuryDesktopNav links={links} />

          <div className="lux-header-actions">
            <LocaleSwitcher />
          </div>
        </div>

        <LuxuryMobileNav links={links} />
      </div>
    </header>
  );
}
