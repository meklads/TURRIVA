import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLocale } from "@/shared/i18n/server";
import { TURRIVA_LOGO_SRC, TURRIVA_LOGO_HEIGHT, TURRIVA_LOGO_WIDTH } from "./luxury-brand-logo";
import { TURRIVA_PUBLIC_EMAIL, TURRIVA_PUBLIC_HOST, TURRIVA_PUBLIC_URL } from "@/shared/constants/brand";

const WHATSAPP_SA = "966502786513";

const SOCIAL = [
  { label: "Facebook", href: "https://web.facebook.com/3dghouse", abbr: "FB" },
  { label: "X", href: "https://twitter.com/GraphicsHouse2", abbr: "X" },
  { label: "Instagram", href: "https://www.instagram.com/3dgraphicshouse/", abbr: "IG" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/graphics-house-gh/", abbr: "IN" },
  { label: "YouTube", href: "https://www.youtube.com/user/3dghouse/videos", abbr: "YT" },
] as const;

export async function LuxuryFooter() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);

  const importantLinks = [
    { href: "/villas", label: t.nav.villas },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact?intent=design", label: t.nav.design3d },
    { href: "/our-work", label: t.nav.ourWork },
    { href: "/contact", label: t.nav.contact },
  ];

  const servicesLinks = [
    { href: "/villas", label: t.nav.villas },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact?intent=design", label: t.nav.design3d },
  ];

  const solutionLinks =
    locale === "ar"
      ? [
          { href: "/villas#kitchens", label: "مطابخ معيارية" },
          { href: "/villas#wardrobes", label: "خزائن وغرف ملابس" },
          { href: "/projects#joinery", label: "تشطيبات B2B" },
        ]
      : [
          { href: "/villas#kitchens", label: "Modular kitchens" },
          { href: "/villas#wardrobes", label: "Wardrobes & walk-ins" },
          { href: "/projects#joinery", label: "B2B joinery" },
        ];

  const offices = [
    {
      title: t.footer.countries.saudiArabia,
      lines: [locale === "ar" ? "جدة" : "Jeddah", "P.O.Box 136972", "CR 4030502306"],
      phone: "+966502786513",
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
      <div className="lux-footer-accent" aria-hidden />
      <div className="lux-footer-watermark" aria-hidden />

      <div className="lux-footer-float" aria-label={t.footer.contact}>
        <a
          href={`https://wa.me/${WHATSAPP_SA}`}
          className="lux-footer-float-btn lux-footer-float-btn--wa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </a>
        <a href={`mailto:${TURRIVA_PUBLIC_EMAIL}`} className="lux-footer-float-btn" aria-label="Email">
          <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </a>
      </div>

      <div className="lux-container lux-footer-inner">
        <div className="lux-footer-top">
          <div className="lux-footer-brand">
            <Link href="/" className="lux-footer-logo-link" aria-label={t.brand.name}>
              <Image
                src={TURRIVA_LOGO_SRC}
                alt=""
                width={TURRIVA_LOGO_WIDTH}
                height={TURRIVA_LOGO_HEIGHT}
                className="lux-footer-logo"
                quality={100}
                unoptimized
              />
            </Link>
            <p className="lux-footer-about">{t.footer.about}</p>
          </div>

          <div className="lux-footer-col">
            <h3 className="lux-footer-col-title">{t.footer.importantLinks}</h3>
            <nav className="lux-footer-links" aria-label={t.footer.importantLinks}>
              {importantLinks.map((link) => (
                <Link key={link.href + link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lux-footer-col">
            <h3 className="lux-footer-col-title">{t.footer.servicesLinks}</h3>
            <nav className="lux-footer-links" aria-label={t.footer.servicesLinks}>
              {servicesLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lux-footer-col">
            <h3 className="lux-footer-col-title">{t.footer.solutionsLinks}</h3>
            <nav className="lux-footer-links" aria-label={t.footer.solutionsLinks}>
              {solutionLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

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
                <Phone className="h-3 w-3 shrink-0" strokeWidth={2} aria-hidden />
                <span>{t.footer.callNow}</span>
              </a>
            </div>
          ))}
        </div>

        <div className="lux-footer-social">
          <span className="lux-footer-follow">{t.footer.followUs}</span>
          <div className="lux-footer-social-icons">
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
          <div className="lux-footer-legal-block">
            <p className="lux-footer-affiliation">
              {t.footer.affiliation} {t.footer.affiliationLink}
              {t.footer.affiliationSuffix}
            </p>
            <p className="lux-footer-legal" dir="ltr">
              {t.footer.legalNotice}
            </p>
          </div>
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
              width={TURRIVA_LOGO_WIDTH}
              height={TURRIVA_LOGO_HEIGHT}
              className="lux-footer-mark-img"
              quality={100}
              unoptimized
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
