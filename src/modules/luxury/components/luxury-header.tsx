import Link from "next/link";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { LayoutGrid } from "lucide-react";
import { LuxuryBrandLogo } from "./luxury-brand-logo";
import { LuxuryDesktopNav, LuxuryMobileNav } from "./luxury-nav-links";

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
        <div className="flex h-[4.25rem] items-center justify-between gap-3 sm:h-[4.75rem] lg:h-20 lg:gap-4">
          <div className="shrink-0 lg:min-w-[15.5rem]">
            <LuxuryBrandLogo href="/" priority />
          </div>

          <LuxuryDesktopNav links={links} />

          <div className="flex shrink-0 items-center justify-end lg:min-w-[160px]">
            <Link href="/workspace" className="lux-btn-workspace">
              <LayoutGrid className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
              {t.nav.workspace}
            </Link>
          </div>
        </div>

        <LuxuryMobileNav links={links} />
      </div>
    </header>
  );
}
