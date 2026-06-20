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
    <footer className="border-t border-gray-100 bg-[#0F172A] text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <RuwaqLogo href="/" variant="dark" className="h-9 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {t.site.footer.tagline}
            </p>
            <p className="mt-3 text-xs text-[#C9A063]">{t.site.footer.address}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-[#C9A063]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-700/60 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>{t.site.footer.copyright}</p>
          <a
            href="https://ruwaq.co"
            className="text-[#C9A063] hover:underline"
          >
            ruwaq.co
          </a>
        </div>
      </div>
    </footer>
  );
}
