import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";

function buildLuxuryNavLinks(locale: Locale) {
  const t = getLuxuryMessages(locale);
  const seo = getLuxurySeoMessages(locale);
  const lp = (path: string) => localizePath(path, locale);

  return {
    home: { href: lp("/"), label: t.nav.home },
    villas: { href: lp("/villas"), label: t.nav.villas },
    projects: { href: lp("/projects"), label: t.nav.projects },
    ourWork: { href: lp("/our-work"), label: t.nav.ourWork },
    portfolio: { href: lp("/portfolio"), label: seo.nav.portfolio },
    about: { href: lp("/about"), label: t.nav.about },
    contact: { href: lp("/contact"), label: t.nav.contact },
  } as const;
}

/** Full nav for mobile scroll row and footer. */
export function getLuxuryNavLinks(locale: Locale) {
  const links = buildLuxuryNavLinks(locale);
  return [
    links.home,
    links.villas,
    links.projects,
    links.ourWork,
    links.portfolio,
    links.about,
    links.contact,
  ] as const;
}

/** Compact desktop bar — logo covers home; CTA covers contact. */
export function getLuxuryHeaderNavLinks(locale: Locale) {
  const links = buildLuxuryNavLinks(locale);
  return [links.villas, links.projects, links.ourWork, links.portfolio, links.about] as const;
}

export const LUXURY_HERO_IMAGE = "/brand/turriva/hero-interior.webp";
