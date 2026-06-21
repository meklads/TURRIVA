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
        <div className="flex h-[4.25rem] items-center justify-between gap-4 sm:h-[4.5rem] lg:h-[4.75rem]">
          <div className="shrink-0 lg:min-w-[220px]">
            <RuwaqLogo
              href={homeHref}
              priority
              className="h-[3.5rem] w-auto sm:h-[3.75rem] lg:h-[4.25rem] xl:h-[4.5rem]"
            />
          </div>

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

          <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3 lg:min-w-[200px]">
            <LocaleSwitcher />
            {variant === "marketing" && (
              <Link href="/proposals/new" className="btn-ruwaq-header-gold hidden sm:inline-flex">
                {t.site.nav.startProposal}
              </Link>
            )}
            <UserNav />
          </div>
        </div>

        <nav
          className="flex gap-2 overflow-x-auto border-t border-slate-100 py-3 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-ruwaq-ink-soft transition-colors hover:border-slate-300 hover:text-ruwaq-ink"
            >
              {link.label}
            </Link>
          ))}
          {variant === "marketing" && (
            <Link
              href="/proposals/new"
              className="btn-ruwaq-header-gold shrink-0 px-3.5 py-1.5 text-xs sm:hidden"
            >
              {t.site.nav.startProposal}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
