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

/** Mobile: commercial map without dumping seven equal chips only. */
export function getLuxuryNavLinks(locale: Locale) {
  const links = buildLuxuryNavLinks(locale);
  const products = productNav(locale);
  const ar = locale === "ar";
  return [
    links.home,
    products.experience,
    products.showUnit,
    products.designBuild,
    products.fitOut,
    { href: links.developers.href, label: ar ? "المطورون" : "Developers" },
    { href: products.fitOut.href, label: ar ? "للمهندسين" : "Designers" },
    links.ourWork,
    links.about,
    links.contact,
  ] as const;
}

export function getLuxuryProductMenu(locale: Locale) {
  const products = productNav(locale);
  const ar = locale === "ar";
  const full = (link: { href: string; label: string }, label: string) => ({ href: link.href, label });
  return {
    label: ar ? "المنتجات" : "Products",
    groups: [
      {
        title: ar ? "العقار" : "Real estate",
        links: [
          full(products.experience, ar ? "تجربة المشروع العقاري" : "Real estate project experience"),
          products.showUnit,
        ],
      },
      {
        title: ar ? "التصميم والتنفيذ" : "Design and build",
        links: [
          full(products.designBuild, ar ? "التصميم والتنفيذ" : "Design and build"),
          full(products.fitOut, ar ? "التنفيذ والتجهيز" : "Fit-out and execution"),
        ],
      },
      {
        title: ar ? "المساحات" : "Spaces",
        links: [
          full(products.commercial, ar ? "المساحات التجارية" : "Commercial spaces"),
          full(products.hospitality, ar ? "مساحات الضيافة" : "Hospitality spaces"),
          full(products.renovation, ar ? "التجديد والتطوير" : "Renovation and upgrade"),
        ],
      },
    ],
  };
}

/** Desktop: Products dropdown, then Work, buyers, About. Contact stays the button. */
export function getLuxuryHeaderNavLinks(locale: Locale) {
  const links = buildLuxuryNavLinks(locale);
  const ar = locale === "ar";
  const lp = (path: string) => localizePath(path, locale);
  return [
    links.ourWork,
    { href: links.developers.href, label: ar ? "للمطورين" : "Developers" },
    { href: lp("/fit-out"), label: ar ? "للمهندسين" : "Designers" },
    links.about,
  ] as const;
}

export const LUXURY_HERO_IMAGE = "/brand/turriva/hero-interior.webp";
