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
    experience: { href: lp("/real-estate-experience"), label: ar ? "تصميم وتنفيذ ديكور البيع" : "Sales décor design & build" },
    showUnit: { href: lp("/show-unit"), label: ar ? "وحدة العرض" : "Show unit" },
    designBuild: { href: lp("/design-build"), label: ar ? "تصميم وتنفيذ" : "Design & build" },
    fitOut: { href: lp("/fit-out"), label: ar ? "تصميم وتنفيذ الديكور" : "Décor design & build" },
    commercial: { href: lp("/commercial-spaces"), label: ar ? "التجاري" : "Commercial" },
    hospitality: { href: lp("/hospitality-spaces"), label: ar ? "الضيافة" : "Hospitality" },
    renovation: { href: lp("/renovation"), label: ar ? "التجديد" : "Renovation" },
  };
}

export type LuxuryProductMenuItem = {
  href: string;
  number: string;
  nameAr: string;
  nameEn: string;
  description: string;
  image: string;
  featured?: boolean;
};

export type LuxuryProductMenuGroup = {
  id: "doors" | "support";
  title: string;
  items: readonly LuxuryProductMenuItem[];
};

export type LuxuryProductMenu = {
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  explore: string;
  viewAll: string;
  viewAllHref: string;
  groups: readonly LuxuryProductMenuGroup[];
};

/** Mobile: commercial map without dumping seven equal chips only. */
export function getLuxuryNavLinks(locale: Locale) {
  const links = buildLuxuryNavLinks(locale);
  const products = productNav(locale);
  const ar = locale === "ar";
  return [
    links.home,
    { href: links.developers.href, label: ar ? "المطورون" : "Developers" },
    { href: products.fitOut.href, label: ar ? "للمهندسين" : "Designers" },
    links.ourWork,
    links.about,
    links.contact,
  ] as const;
}

export function getLuxuryProductMenu(locale: Locale): LuxuryProductMenu {
  const lp = (path: string) => localizePath(path, locale);
  const ar = locale === "ar";

  return {
    label: ar ? "تصميم وتنفيذ" : "Design & build",
    eyebrow: ar ? "تصميم وتنفيذ الديكور" : "Décor design & build",
    title: ar ? "تصميم وتنفيذ" : "Design & build",
    subtitle: ar
      ? "اختر مسار مشروعك — صالات البيع، وحدات العرض، والديكور التنفيذي"
      : "Pick your project path — sales galleries, show units, and executive décor",
    explore: ar ? "استكشف" : "Explore",
    viewAll: ar ? "عرض كل المسارات ←" : "View all paths →",
    viewAllHref: lp("/services"),
    groups: [
      {
        id: "doors",
        title: ar ? "العروض الأساسية" : "Core offers",
        items: [
          {
            href: lp("/real-estate-experience"),
            number: "01",
            nameAr: "تصميم وتنفيذ ديكور البيع",
            nameEn: "Sales Décor Design & Build",
            description: ar
              ? "تصميم وتنفيذ ديكور صالات البيع حتى جاهزية الافتتاح."
              : "Design and build of sales-gallery décor through opening readiness.",
            image: "/brand/turriva/projects/mwl/hero.jpeg",
            featured: true,
          },
          {
            href: lp("/show-unit"),
            number: "02",
            nameAr: "وحدة العرض",
            nameEn: "Show Unit",
            description: ar
              ? "تصميم وتنفيذ ديكور فيلا أو شقة عيّنة يمشي فيها المشتري."
              : "Design and build of show-villa or apartment décor the buyer can walk.",
            image: "/brand/turriva/inspiration/living-walnut-interior.webp",
            featured: true,
          },
          {
            href: lp("/real-estate-experience"),
            number: "03",
            nameAr: "تصميم وتنفيذ ديكور الإطلاق",
            nameEn: "Launch Décor Design & Build",
            description: ar
              ? "تصميم وتنفيذ ديكور مركز الإطلاق وبيئة المعرض لمرحلة البيع الأولى."
              : "Design and build of launch-center and exhibition décor for the first sales phase.",
            image: "/brand/graphics-house/rafal-pavilions-poster.jpg",
            featured: true,
          },
        ],
      },
      {
        id: "support",
        title: ar ? "تصميم وتنفيذ أوسع" : "Broader design & build",
        items: [
          {
            href: lp("/design-build"),
            number: "04",
            nameAr: "التصميم والتنفيذ",
            nameEn: "Design & Build",
            description: ar
              ? "من الفكرة إلى مساحة جاهزة — تصميم وتنفيذ في مسار واحد."
              : "From idea to a ready space — design and build in one path.",
            image: "/brand/turriva/hero-interior.webp",
          },
          {
            href: lp("/fit-out"),
            number: "05",
            nameAr: "تصميم وتنفيذ الديكور",
            nameEn: "Décor Design & Build",
            description: ar
              ? "نصمم الديكور وننفّذه — من التصور إلى التسليم الجاهز."
              : "We design the décor and build it — from concept to ready handover.",
            image: "/brand/turriva/projects/project-joinery-b2b.webp",
          },
          {
            href: lp("/commercial-spaces"),
            number: "06",
            nameAr: "التجاري والضيافة",
            nameEn: "Commercial & Hospitality",
            description: ar
              ? "تصميم وتنفيذ ديكور مساحات تحمل العلامة وتعمل يومياً."
              : "Design and build of brand-led décor for spaces that work every day.",
            image: "/brand/turriva/projects/project-commercial-retail.jpg",
          },
          {
            href: lp("/renovation"),
            number: "07",
            nameAr: "التجديد والتطوير",
            nameEn: "Renovation & Upgrade",
            description: ar
              ? "تصميم وتنفيذ تجديد ديكور مساحة قائمة — ما يبقى وما يتغير."
              : "Design and build of décor refresh — what stays, what changes.",
            image: "/brand/turriva/projects/project-kitchen-jeddah.webp",
          },
        ],
      },
    ],
  };
}

/** Desktop: Products mega menu, then Work, buyers, About. Contact stays the button. */
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
