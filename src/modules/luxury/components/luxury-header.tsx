import Link from "next/link";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { RuwaqLogo } from "@/shared/components/ruwaq-logo";
import { LayoutGrid } from "lucide-react";
import { LuxuryDesktopNav, LuxuryMobileNav } from "./luxury-nav-links";

const LUXURY_LOGO_CLASS = "h-11 w-auto sm:h-12 lg:h-[3.25rem]";

export async function LuxuryHeader() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/interior-design", label: t.nav.interiorDesign },
    { href: "/construction", label: t.nav.construction },
    { href: "/our-work", label: t.nav.ourWork },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="lux-header">
      <div className="lux-container">
        <div className="flex h-[4.5rem] items-center justify-between gap-4 sm:h-20 lg:h-[5.25rem]">
          <div className="shrink-0 lg:min-w-[200px] xl:min-w-[240px]">
            <RuwaqLogo href="/" priority className={LUXURY_LOGO_CLASS} />
          </div>

          <LuxuryDesktopNav links={links} />

          <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3 lg:min-w-[200px]">
            <Link href="/workspace" className="lux-btn-workspace">
              <LayoutGrid className="h-3.5 w-3.5 text-lux-gold" aria-hidden />
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
