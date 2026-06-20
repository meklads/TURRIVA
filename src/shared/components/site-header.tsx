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

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <RuwaqLogo
          href={variant === "app" ? "/proposals/new" : "/"}
          className="h-10 w-auto sm:h-11"
        />

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LocaleSwitcher />
          {variant === "marketing" && (
            <Link
              href="/proposals/new"
              className="hidden rounded-lg bg-brand-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 sm:inline-block"
            >
              {t.site.nav.startProposal}
            </Link>
          )}
          <UserNav />
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-t border-gray-50 px-4 py-2 md:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-full bg-gray-50 px-3 py-1.5 text-xs text-gray-600"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
