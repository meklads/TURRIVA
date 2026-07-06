import Link from "next/link";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { LayoutGrid } from "lucide-react";
import { LuxuryBrandLogo } from "./luxury-brand-logo";
import { LuxuryDesktopNav, LuxuryMobileNav } from "./luxury-nav-links";
import { getLuxuryNavLinks } from "../lib/nav";

export async function LuxuryHeader() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
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
            <Link href="/workspace" className="lux-btn-workspace">
              <LayoutGrid className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
              <span className="hidden sm:inline">{t.nav.workspace}</span>
              <span className="sm:hidden">WS</span>
            </Link>
            <LocaleSwitcher />
          </div>
        </div>

        <LuxuryMobileNav links={links} />
      </div>
    </header>
  );
}
