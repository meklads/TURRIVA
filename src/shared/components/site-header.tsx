import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { RuwaqLogo } from "@/shared/components/ruwaq-logo";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { UserNav } from "@/modules/auth/components/user-nav";

type Variant = "marketing" | "app";

export async function SiteHeader({ variant = "marketing" }: { variant?: Variant }) {
  const locale = await getLocale();
  const t = getMessages(locale);

  const marketingLinks = [
    { href: "/how-it-works", label: t.site.nav.howItWorks },
    { href: "/about", label: t.site.nav.about },
    { href: "/templates/sample", label: t.nav.previewSample },
    { href: "/services", label: t.site.nav.services },
  ];

  const appLinks = [
    { href: "/proposals", label: t.nav.myProposals },
    { href: "/settings/company", label: t.nav.settings },
    { href: "/templates/sample", label: t.nav.previewSample },
  ];

  const links = variant === "app" ? appLinks : marketingLinks;
  const homeHref = variant === "app" ? "/proposals/new" : "/";

  return (
    <header className="ruwaq-header">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          {/* Logo — larger, transparent PNG */}
          <div className="shrink-0 lg:min-w-[200px]">
            <RuwaqLogo href={homeHref} className="h-[3.25rem] w-auto sm:h-14 lg:h-[3.75rem]" />
          </div>

          {/* Desktop menu — centered */}
          <nav
            className="hidden flex-1 items-center justify-center gap-1 lg:flex"
            aria-label="Main"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="ruwaq-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3 lg:min-w-[200px]">
            <LocaleSwitcher />
            {variant === "marketing" && (
              <Link href="/proposals/new" className="btn-ruwaq-primary hidden sm:inline-flex">
                {t.site.nav.startProposal}
              </Link>
            )}
            <UserNav />
          </div>
        </div>

        {/* Mobile menu */}
        <nav
          className="flex gap-2 overflow-x-auto border-t border-ruwaq-cream/60 py-2.5 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex shrink-0 rounded-full border border-ruwaq-stone/60 bg-ruwaq-linen/60 px-3.5 py-1.5 text-xs font-semibold text-ruwaq-ink-soft transition-colors hover:border-ruwaq-champagne/40 hover:text-ruwaq-ink"
            >
              {link.label}
            </Link>
          ))}
          {variant === "marketing" && (
            <Link
              href="/proposals/new"
              className="btn-ruwaq-primary shrink-0 px-3.5 py-1.5 text-xs sm:hidden"
            >
              {t.site.nav.startProposal}
            </Link>
          )}
        </nav>
      </div>
      <div className="ruwaq-header-accent" aria-hidden />
    </header>
  );
}
