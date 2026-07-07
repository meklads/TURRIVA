import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { LuxuryBrandLogo } from "./luxury-brand-logo";

const GRAPHICS_HOUSE_URL = "https://3dgraphicshouse.com/";

export async function LuxuryFooter() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/our-work", label: t.nav.ourWork },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
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
              {t.footer.workspace}
            </h3>
            <Link
              href="/workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="lux-footer-promo group mt-5"
            >
              <span className="lux-footer-promo__icon" aria-hidden>
                <LayoutGrid className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <Image
                src="/brand/ruwaq/logo-on-light.png"
                alt=""
                width={1248}
                height={492}
                className="lux-footer-promo__logo"
              />
              <p className="lux-footer-promo__desc">{t.footer.workspaceDesc}</p>
              <span className="lux-footer-promo__cta">
                {t.footer.workspaceCta}
                <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </span>
            </Link>
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
