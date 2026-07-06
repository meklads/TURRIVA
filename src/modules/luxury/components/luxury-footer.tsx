import Link from "next/link";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { LayoutGrid } from "lucide-react";
import { LuxuryBrandLogo } from "./luxury-brand-logo";
import { GraphicsHouseLogo } from "@/shared/components/graphics-house-logo";

const GRAPHICS_HOUSE_URL = "https://3dgraphicshouse.com/";

export async function LuxuryFooter() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/our-work", label: t.nav.ourWork },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const serviceLinks = [
    { href: "/interior-design", label: t.nav.interiorDesign },
    { href: "/construction", label: t.nav.construction },
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
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-lux-ink">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lux-ink-soft transition-colors hover:text-lux-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-lux-ink">
              {t.footer.services}
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lux-ink-soft transition-colors hover:text-lux-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-lux-ink">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-lux-ink-soft">
              <li>{t.footer.address}</li>
              <li>
                <a href={`mailto:${t.footer.email}`} className="hover:text-lux-gold">
                  {t.footer.email}
                </a>
              </li>
              <li dir="ltr">{t.footer.phone}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-lux-sand text-[10px] font-semibold uppercase tracking-wider text-lux-gold transition-colors hover:border-lux-gold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://linkedin.com"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-lux-sand text-[10px] font-semibold uppercase tracking-wider text-lux-gold transition-colors hover:border-lux-gold"
                aria-label="LinkedIn"
              >
                IN
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-lux-sand bg-white p-8 shadow-lux-card lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lux-gold">
              <LayoutGrid className="h-4 w-4" />
              {t.footer.workspace}
            </p>
            <p className="mt-2 max-w-md text-sm text-lux-ink-soft">
              {t.footer.workspaceDesc}
            </p>
          </div>
          <Link href="/workspace" className="lux-btn-primary mt-6 lg:mt-0">
            {t.footer.workspaceCta}
          </Link>
        </div>
      </div>

      <div className="border-t border-lux-sand bg-white/50">
        <div className="lux-container flex flex-col items-center justify-center gap-3 py-8 text-center sm:flex-row sm:gap-4">
          <p className="lux-powered-by text-sm text-lux-ink-soft">
            {t.footer.poweredByPrefix}{" "}
            <a
              href={GRAPHICS_HOUSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lux-gold underline-offset-4 transition-colors hover:text-lux-gold-light hover:underline"
            >
              {t.footer.poweredByLink}
            </a>
          </p>
          <GraphicsHouseLogo
            href={GRAPHICS_HOUSE_URL}
            variant="mark"
            className="h-7 w-auto opacity-90"
          />
        </div>
      </div>

      <div className="border-t border-lux-sand">
        <div className="lux-container flex flex-col items-center justify-between gap-4 py-6 text-xs text-lux-ink-muted sm:flex-row">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-lux-gold">
              {t.footer.privacy}
            </Link>
            <Link href="/terms" className="hover:text-lux-gold">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
