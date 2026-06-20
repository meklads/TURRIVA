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
    <footer className="relative bg-ruwaq-navy text-gray-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ruwaq-gold/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <RuwaqLogo href="/" variant="dark" className="h-12 w-auto lg:h-14" />
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              {t.site.footer.tagline}
            </p>
            <p className="mt-3 text-xs font-medium text-ruwaq-gold">
              {t.site.footer.address}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-ruwaq-gold">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>{t.site.footer.copyright}</p>
          <a href="https://ruwaq.co" className="font-semibold text-ruwaq-gold hover:underline">
            ruwaq.co
          </a>
        </div>
      </div>
    </footer>
  );
}
