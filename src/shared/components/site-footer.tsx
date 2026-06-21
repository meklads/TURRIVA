import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { RuwaqLogo } from "@/shared/components/ruwaq-logo";

export async function SiteFooter() {
  const locale = await getLocale();
  const t = getMessages(locale);

  const columns = [
    {
      title: t.site.footer.product,
      links: [
        { href: "/how-it-works", label: t.site.nav.howItWorks },
        { href: "/templates/sample", label: t.nav.previewSample },
        { href: "/proposals/new", label: t.site.nav.startProposal },
      ],
    },
    {
      title: t.site.footer.company,
      links: [
        { href: "/about", label: t.site.nav.about },
        { href: "/services", label: t.site.nav.services },
        { href: "mailto:hello@ruwaq.co", label: t.site.footer.contact },
      ],
    },
    {
      title: t.site.footer.legal,
      links: [{ href: "/privacy", label: t.site.nav.privacy }],
    },
  ];

  return (
    <footer className="relative bg-[#1d1d1f] text-ruwaq-stone/90">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ruwaq-brown/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <RuwaqLogo href="/" variant="dark" className="h-14 w-auto lg:h-16" />
            <p className="mt-5 text-sm leading-relaxed text-ruwaq-stone/80">
              {t.site.footer.tagline}
            </p>
            <p className="mt-3 text-xs font-medium text-ruwaq-brown-light">
              {t.site.footer.address}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-ruwaq-ink-muted/90">
              {t.site.footer.sponsoredBy}{" "}
              <a
                href="https://3dgraphicshouse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ruwaq-brown-light transition-colors hover:text-ruwaq-paper hover:underline"
              >
                {t.site.footer.sponsoredByLink}
              </a>
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-ruwaq-brown-light">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ruwaq-stone/80 transition-colors hover:text-ruwaq-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-ruwaq-ink-muted/90 sm:flex-row">
          <p>{t.site.footer.copyright}</p>
          <a href="https://ruwaq.co" className="font-semibold text-ruwaq-brown-light hover:underline">
            ruwaq.co
          </a>
        </div>
      </div>
    </footer>
  );
}
