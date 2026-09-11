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
    services: { href: lp("/services"), label: seo.nav.services },
    ourWork: { href: lp("/our-work"), label: t.nav.ourWork },
    developers: { href: lp("/real-estate-experience"), label: t.nav.developers },
    portfolio: { href: lp("/portfolio"), label: seo.nav.portfolio },
    professionals: { href: lp("/professionals"), label: t.nav.professionals },
    about: { href: lp("/about"), label: t.nav.about },
    contact: { href: lp("/contact"), label: t.nav.contact },
  } as const;
}

function productNav(locale: Locale) {
  const lp = (path: string) => localizePath(path, locale);
  const ar = locale === "ar";
  return {
    experience: { href: lp("/real-estate-experience"), label: ar ? "تجربة المشروع" : "Project experience" },
    showUnit: { href: lp("/show-unit"), label: ar ? "وحدة العرض" : "Show unit" },
    designBuild: { href: lp("/design-build"), label: ar ? "تصميم وتنفيذ" : "Design and build" },
    fitOut: { href: lp("/fit-out"), label: ar ? "التنفيذ" : "Fit-out" },
    commercial: { href: lp("/commercial-spaces"), label: ar ? "التجاري" : "Commercial" },
    hospitality: { href: lp("/hospitality-spaces"), label: ar ? "الضيافة" : "Hospitality" },
    renovation: { href: lp("/renovation"), label: ar ? "التجديد" : "Renovation" },
  };
}

/** Mobile row: the three doors, then the rest of the site. */
export function getLuxuryNavLinks(locale: Locale) {
  const links = buildLuxuryNavLinks(locale);
  const products = productNav(locale);
  const ar = locale === "ar";
  const full = (link: { href: string; label: string }, label: string) => ({ href: link.href, label });
  return [
    links.home,
    full(products.experience, ar ? "تجربة المشروع العقاري" : "Project experience"),
    products.showUnit,
    full(products.designBuild, ar ? "التصميم والتنفيذ" : "Design and build"),
    full(products.fitOut, ar ? "التنفيذ والتجهيز" : "Fit-out and execution"),
    full(products.commercial, ar ? "المساحات التجارية" : "Commercial spaces"),
    full(products.hospitality, ar ? "مساحات الضيافة" : "Hospitality spaces"),
    full(products.renovation, ar ? "التجديد والتطوير" : "Renovation and upgrade"),
    links.ourWork,
    links.professionals,
    links.about,
    links.contact,
  ] as const;
}

/** Desktop bar stays six items. The catalogue leaves. Fit-out sits beside the developer door. */
export function getLuxuryHeaderNavLinks(locale: Locale) {
  const links = buildLuxuryNavLinks(locale);
  const products = productNav(locale);
  return [products.experience, products.designBuild, products.fitOut, products.commercial, links.ourWork, links.professionals] as const;
}

export const LUXURY_HERO_IMAGE = "/brand/turriva/hero-interior.webp";
