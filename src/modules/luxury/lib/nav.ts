import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";

export function getLuxuryNavLinks(locale: Locale) {
  const t = getLuxuryMessages(locale);
  return [
    { href: "/", label: t.nav.home },
    { href: "/interior-design", label: t.nav.interiorDesign },
    { href: "/construction", label: t.nav.construction },
    { href: "/our-work", label: t.nav.ourWork },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ] as const;
}

export const LUXURY_HERO_IMAGE = "/brand/luxury/hero-villa.jpg";
