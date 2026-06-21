import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { RuwaqLogo } from "@/shared/components/ruwaq-logo";

export async function SiteFooter() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const arrow = locale === "ar" ? "←" : "→";

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
    <footer className="ruwaq-footer-luxury">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ruwaq-gold/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 pt-20 sm:px-6 sm:pt-24 lg:pt-28">
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:pb-20">
          <div>
            <h2 className="ruwaq-footer-cta-title">{t.site.footer.ctaTitle}</h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/55">
              {t.site.footer.ctaSubtitle}
            </p>
            <Link href="/proposals/new" className="btn-ruwaq-primary mt-8 inline-flex px-9 py-3.5">
              {t.site.footer.ctaButton} {arrow}
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ruwaq-gold-light">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 py-14 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-16">
          <div>
            <RuwaqLogo href="/" variant="dark" className="h-14 w-auto lg:h-16" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              {t.site.footer.tagline}
            </p>
            <p className="mt-4 text-xs text-white/40">{t.site.footer.address}</p>
            <p className="mt-4 text-xs leading-relaxed text-white/35">
              {t.site.footer.sponsoredBy}{" "}
              <a
                href="https://3dgraphicshouse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ruwaq-gold-light transition-colors hover:text-white hover:underline"
              >
                {t.site.footer.sponsoredByLink}
              </a>
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-white/35 sm:flex-row">
          <p>{t.site.footer.copyright}</p>
          <a href="https://ruwaq.co" className="font-medium text-ruwaq-gold-light hover:underline">
            ruwaq.co
          </a>
        </div>
      </div>

      <p className="ruwaq-footer-watermark" aria-hidden>
        RUWAQ
      </p>
    </footer>
  );
}
