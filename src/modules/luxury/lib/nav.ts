import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";

export function getLuxuryNavLinks(locale: Locale) {
  const t = getLuxuryMessages(locale);
  const seo = getLuxurySeoMessages(locale);
  const lp = (path: string) => localizePath(path, locale);

  return [
    { href: lp("/"), label: t.nav.home },
    { href: lp("/villas"), label: t.nav.villas },
    { href: lp("/projects"), label: t.nav.projects },
    { href: lp("/our-work"), label: t.nav.ourWork },
    { href: lp("/portfolio"), label: seo.nav.portfolio },
    { href: lp("/about"), label: t.nav.about },
    { href: lp("/contact"), label: t.nav.contact },
  ] as const;
}

export const LUXURY_HERO_IMAGE = "/brand/turriva/hero-interior.webp";
