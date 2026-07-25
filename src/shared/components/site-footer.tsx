import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { TURRIVA_PUBLIC_EMAIL, TURRIVA_PUBLIC_HOST, TURRIVA_PUBLIC_URL } from "@/shared/constants/brand";
import { RuwaqLogo, SITE_LOGO_SIZE_CLASS } from "@/shared/components/ruwaq-logo";
import { GraphicsHouseLogo } from "@/shared/components/graphics-house-logo";

/** Minimal Turriva decor footer (workspace/auth shells — not the proposals platform). */
export async function SiteFooter() {
  const locale = await getLocale();
  const t = getMessages(locale);

  const companyLinks = [
    { href: "/", label: locale === "ar" ? "الرئيسية" : "Home" },
    { href: "/interior-design", label: locale === "ar" ? "التصميم الداخلي" : "Interior design" },
    { href: "/construction", label: locale === "ar" ? "المقاولات" : "Contracting" },
    { href: "/our-work", label: locale === "ar" ? "أعمالنا" : "Our work" },
    { href: "/about", label: t.site.nav.about },
    { href: "/contact", label: t.site.footer.contact },
  ];

  return (
    <footer className="ruwaq-footer-light">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <RuwaqLogo href="/" className={SITE_LOGO_SIZE_CLASS} raster />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ruwaq-ink-soft">
              {t.site.footer.tagline}
            </p>
            <p className="mt-4 text-xs text-ruwaq-ink-muted">{t.site.footer.address}</p>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-ruwaq-ink-muted">
              <span>{t.site.footer.sponsoredBy}</span>
              <GraphicsHouseLogo variant="light" />
            </p>
          </div>

          <div>
            <h3 className="ruwaq-footer-col-title">{t.site.footer.company}</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ruwaq-ink-soft transition-colors hover:text-ruwaq-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${TURRIVA_PUBLIC_EMAIL}`}
                  className="text-sm text-ruwaq-ink-soft transition-colors hover:text-ruwaq-ink"
                >
                  {t.site.footer.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-xs text-ruwaq-ink-muted sm:flex-row">
          <p>{t.site.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="hover:text-ruwaq-ink">
              {t.site.nav.privacy}
            </Link>
            <Link href="/terms" className="hover:text-ruwaq-ink">
              {t.site.nav.terms}
            </Link>
            <a href={TURRIVA_PUBLIC_URL} className="ruwaq-link-gold hover:underline" dir="ltr">
              {TURRIVA_PUBLIC_HOST}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
