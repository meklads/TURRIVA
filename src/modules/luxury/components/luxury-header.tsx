import Image from "next/image";
import Link from "next/link";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { LayoutGrid } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-lux-sand/60 bg-lux-ivory/95 backdrop-blur-md">
      <div className="lux-container">
        <div className="flex h-20 items-center justify-between gap-6 lg:h-24">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/brand/ruwaq/logo-on-light.png"
              alt="Ruwaq"
              width={120}
              height={60}
              className="h-10 w-auto sm:h-12"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-[0.2em] text-lux-ink">
                {t.brand.name}
              </p>
              <p className="text-[10px] tracking-[0.24em] text-lux-ink-muted">
                {t.brand.tagline}
              </p>
            </div>
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-6 xl:gap-8 lg:flex"
            aria-label="Main"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="lux-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link href="/workspace" className="lux-btn-workspace">
              <LayoutGrid className="h-4 w-4" aria-hidden />
              {t.nav.workspace}
            </Link>
            <LocaleSwitcher />
          </div>
        </div>

        <nav
          className="flex gap-2 overflow-x-auto border-t border-lux-sand/50 py-3 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-lux-sand bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-lux-ink-soft"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
