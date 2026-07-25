import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { TURRIVA_LOGO_SRC } from "./luxury-brand-logo";
import { GraphicsHouseLogo } from "@/shared/components/graphics-house-logo";
import { TURRIVA_PUBLIC_HOST, TURRIVA_PUBLIC_URL } from "@/shared/constants/brand";

const GRAPHICS_HOUSE_URL = "https://3dgraphicshouse.com/";

const SOCIAL = [
  { label: "YouTube", href: "https://youtube.com", abbr: "YT" },
  { label: "LinkedIn", href: "https://linkedin.com", abbr: "IN" },
  { label: "Instagram", href: "https://instagram.com", abbr: "IG" },
  { label: "X", href: "https://x.com", abbr: "X" },
  { label: "Facebook", href: "https://facebook.com", abbr: "FB" },
] as const;

export async function LuxuryFooter() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  const importantLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/our-work", label: t.nav.ourWork },
    { href: "/contact", label: t.nav.contact },
    { href: "/", label: t.nav.home },
  ];

  const servicesLinks = [
    { href: "/interior-design", label: t.nav.interiorDesign },
    { href: "/construction", label: t.nav.construction },
    { href: "/contact", label: t.nav.contact },
  ];

  const contactLinks = [
    { href: "/contact", label: t.nav.contact },
    { href: "/privacy", label: t.footer.privacy },
    { href: "/terms", label: t.footer.terms },
  ];

  const offices = [
    {
      title: t.footer.countries.saudiArabia,
      lines: [locale === "ar" ? "جدة" : "Jeddah", "P.O.Box 136972", "CR 4030502306"],
      phone: "+966502786513",
      displayPhone: "+966 50 278 6513",
    },
    {
      title: t.footer.countries.oman,
      lines: [
        locale === "ar" ? "الخوض، السيب" : "Al Khod, Al Seeb",
        locale === "ar" ? "مسقط" : "Muscat",
        "CR 1460078",
      ],
      phone: "+96891326735",
    },
    {
      title: t.footer.countries.bahrain,
      lines: [
        locale === "ar" ? "مجمع 316" : "Block 316",
        locale === "ar" ? "المنامة" : "Manama",
        "CR 15571301",
      ],
      phone: "+97332150369",
    },
    {
      title: t.footer.countries.egypt,
      lines: [
        locale === "ar" ? "شارع محمد عثمان" : "Mohamed Othman St.",
        locale === "ar" ? "برج فيكتوريا سيتي" : "Victoria City Tower",
        locale === "ar" ? "القاهرة" : "Cairo",
      ],
      phone: "+201032955089",
    },
  ];

  return (
    <footer className="lux-footer">
      <div className="lux-footer-watermark" aria-hidden />

      <div className="lux-container lux-footer-inner">
        <div className="lux-footer-top">
          <div className="lux-footer-brand">
            <Link href="/" className="lux-footer-logo-link" aria-label="توريفا العقارية">
              <Image
                src={TURRIVA_LOGO_SRC}
                alt=""
                width={1536}
                height={1024}
                className="lux-footer-logo"
              />
            </Link>
            <p className="lux-footer-about">{t.footer.about}</p>
            <p className="lux-footer-partner">
              <span>{t.footer.sponsoredBy}</span>
              <GraphicsHouseLogo variant="dark" className="h-8 w-auto max-w-[140px] opacity-90" />
            </p>
          </div>

          <div className="lux-footer-nav-grid">
            <div className="lux-footer-col">
              <h3 className="lux-footer-col-title">{t.footer.importantLinks}</h3>
              <ul className="lux-footer-links">
                {importantLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lux-footer-col">
              <h3 className="lux-footer-col-title">{t.footer.servicesLinks}</h3>
              <ul className="lux-footer-links">
                {servicesLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lux-footer-col">
              <h3 className="lux-footer-col-title">{t.footer.contact}</h3>
              <ul className="lux-footer-links">
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <p className="lux-footer-contact-line mt-4">{t.footer.address}</p>
              <a href={`mailto:${t.footer.email}`} className="lux-footer-contact-line block">
                {t.footer.email}
              </a>
            </div>
          </div>
        </div>

        <div className="lux-footer-rule" aria-hidden />

        <div className="lux-footer-offices">
          {offices.map((office) => (
            <div key={office.title} className="lux-footer-office">
              <h4 className="lux-footer-office-title">{office.title}</h4>
              <div className="lux-footer-office-lines">
                {office.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <a href={`tel:${office.phone}`} className="lux-footer-call">
                <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden />
                <span>{t.footer.callNow}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="lux-footer-rule" aria-hidden />

        <div className="lux-footer-social-row">
          <p className="lux-footer-follow">{t.footer.followUs}</p>
          <div className="lux-footer-social">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="lux-footer-social-btn"
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.abbr}
              </a>
            ))}
          </div>
        </div>

        <div className="lux-footer-bottom">
          <p className="lux-footer-legal">
            {t.footer.copyright}{" "}
            <span className="lux-footer-legal-sep">|</span>{" "}
            <span className="lux-powered-by">
              {t.footer.poweredByPrefix}{" "}
              <a href={GRAPHICS_HOUSE_URL} target="_blank" rel="noopener noreferrer">
                {t.footer.poweredByLink}
              </a>
            </span>
          </p>
          <div className="lux-footer-legal-links">
            <Link href="/privacy">{t.footer.privacy}</Link>
            <Link href="/terms">{t.footer.terms}</Link>
            <a href={TURRIVA_PUBLIC_URL} dir="ltr">
              {TURRIVA_PUBLIC_HOST}
            </a>
          </div>
          <Link href="/" className="lux-footer-mark" aria-label="Turriva">
            <Image
              src={TURRIVA_LOGO_SRC}
              alt=""
              width={1536}
              height={1024}
              className="lux-footer-mark-img"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
