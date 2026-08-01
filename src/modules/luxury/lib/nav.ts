import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";

export function getLuxuryNavLinks(locale: Locale) {
  const t = getLuxuryMessages(locale);
  return [
    { href: "/", label: t.nav.home },
    { href: "/villas", label: t.nav.villas },
    { href: "/projects", label: t.nav.projects },
    { href: "/our-work", label: t.nav.ourWork },
    { href: "/contact", label: t.nav.contact },
  ] as const;
}

export const LUXURY_HERO_IMAGE = "/brand/turriva/hero-turriva.png";
