import Link from "next/link";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { LuxuryBrandLogo } from "./luxury-brand-logo";
import { GraphicsHouseLogo } from "@/shared/components/graphics-house-logo";
import { TURRIVA_PUBLIC_HOST, TURRIVA_PUBLIC_URL } from "@/shared/constants/brand";

const GRAPHICS_HOUSE_URL = "https://3dgraphicshouse.com/";

export async function LuxuryFooter() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  const importantLinks = [
    { href: "/", label: t.nav.home },
    { href: "/our-work", label: t.nav.ourWork },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const servicesLinks = [
    { href: "/interior-design", label: t.nav.interiorDesign },
    { href: "/construction", label: t.nav.construction },
  ];

  const offices = [
    {
      title: t.footer.countries.saudiArabia,
      lines: [locale === "ar" ? "جدة" : "Jeddah", "P.O.Box 136972", "CR 4030502306"],
      phone: "+966502786513",
    },
    {
      title: t.footer.countries.oman,
      lines: [locale === "ar" ? "مسقط" : "Muscat", locale === "ar" ? "الخوض، السيب" : "Al Khod, Al Seeb", "CR 1460078"],
      phone: "+96891326735",
    },
    {
      title: t.footer.countries.bahrain,
      lines: [locale === "ar" ? "المنامة" : "Manama", locale === "ar" ? "مجمع 316" : "Block 316", "CR 15571301"],
      phone: "+97332150369",
    },
    {
      title: t.footer.countries.egypt,
      lines: [locale === "ar" ? "القاهرة" : "Cairo", locale === "ar" ? "شارع محمد عثمان" : "Mohamed Othman St.", locale === "ar" ? "برج فيكتوريا سيتي" : "Victoria City Tower"],
      phone: "+201032955089",
    },
  ];

  return (
    <footer className="border-t border-lux-sand bg-lux-cream">
      <div className="lux-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <LuxuryBrandLogo href="/" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-lux-ink-soft">
              {t.footer.about}
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-lux-ink-muted">
              <span>{t.footer.sponsoredBy}</span>
              <GraphicsHouseLogo variant="light" />
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-lux-ink">
              {t.footer.importantLinks}
            </h3>
            <ul className="mt-5 space-y-3">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lux-ink-soft transition-colors hover:text-lux-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-lux-ink">
              {t.footer.servicesLinks}
            </h3>
            <ul className="mt-5 space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-lux-ink-soft transition-colors hover:text-lux-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-lux-ink">
              {t.footer.offices}
            </h3>
            <div className="mt-5 space-y-5 text-sm text-lux-ink-soft">
              {offices.map((office) => (
                <div key={office.title} className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-lux-ink">
                    {office.title}
                  </div>
                  <div className="space-y-0.5">
                    {office.lines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                  <a href={`tel:${office.phone}`} dir="ltr" className="inline-block text-lux-ink hover:underline">
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-lux-ink">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-lux-ink-soft">
              <li>{t.footer.address}</li>
              <li>
                <a href={`mailto:${t.footer.email}`} className="hover:text-lux-ink">
                  {t.footer.email}
                </a>
              </li>
              <li dir="ltr">{t.footer.phone}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-lux-sand text-[10px] font-semibold uppercase tracking-wider text-lux-ink transition-colors hover:border-lux-ink hover:text-lux-ink"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://linkedin.com"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-lux-sand text-[10px] font-semibold uppercase tracking-wider text-lux-ink transition-colors hover:border-lux-ink hover:text-lux-ink"
                aria-label="LinkedIn"
              >
                IN
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-lux-sand">
        <div className="lux-container flex flex-col items-center justify-between gap-4 py-6 text-xs text-lux-ink-muted sm:flex-row">
          <p>
            {t.footer.copyright}{" "}
            <span className="text-lux-ink-muted/80">·</span>{" "}
            <span className="lux-powered-by">
              {t.footer.poweredByPrefix}{" "}
              <a
                href={GRAPHICS_HOUSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lux-gold hover:underline"
              >
                {t.footer.poweredByLink}
              </a>
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-lux-ink">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-lux-ink">
              {t.footer.terms}
            </Link>
            <a href={TURRIVA_PUBLIC_URL} className="hover:text-lux-ink" dir="ltr">
              {TURRIVA_PUBLIC_HOST}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
