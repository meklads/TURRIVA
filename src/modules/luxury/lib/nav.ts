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
    experience: { href: lp("/real-estate-experience"), label: ar ? "ديكور بيئة البيع" : "Sales décor" },
    showUnit: { href: lp("/show-unit"), label: ar ? "وحدة العرض" : "Show unit" },
    designBuild: { href: lp("/design-build"), label: ar ? "تصميم وديكور" : "Design & décor" },
    fitOut: { href: lp("/fit-out"), label: ar ? "الديكور والتنفيذ" : "Décor & fit-out" },
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
    label: ar ? "منتجاتنا" : "Our products",
    eyebrow: ar ? "ديكور وتنفيذ مكاني" : "Décor & spatial delivery",
    title: ar ? "منتجاتنا" : "Our products",
    subtitle: ar
      ? "ديكور صالات البيع والمعارض والتنفيذ المكاني — اختر مسار مشروعك"
      : "Sales-gallery décor, exhibition décor, and spatial delivery — pick your path",
    explore: ar ? "استكشف" : "Explore",
    groups: [
      {
        id: "doors",
        title: ar ? "العروض الأساسية" : "Core offers",
        items: [
          {
            href: lp("/real-estate-experience"),
            number: "01",
            nameAr: "ديكور بيئة البيع",
            nameEn: "Sales Environment Décor",
            description: ar
              ? "ديكور وتنفيذ صالات البيع حتى جاهزية الافتتاح."
              : "Sales-gallery décor and build through opening readiness.",
            image: "/brand/turriva/projects/mwl/hero.jpeg",
            featured: true,
          },
          {
            href: lp("/show-unit"),
            number: "02",
            nameAr: "وحدة العرض",
            nameEn: "Show Unit",
            description: ar
              ? "ديكور فيلا أو شقة عيّنة يمشي فيها المشتري."
              : "Show-villa or apartment décor the buyer can walk.",
            image: "/brand/turriva/inspiration/living-walnut-interior.webp",
            featured: true,
          },
          {
            href: lp("/real-estate-experience"),
            number: "03",
            nameAr: "ديكور مساحة الإطلاق",
            nameEn: "Launch Space Décor",
            description: ar
              ? "ديكور مركز الإطلاق وبيئة المعرض لمرحلة البيع الأولى."
              : "Launch-center and exhibition décor for the first sales phase.",
            image: "/brand/graphics-house/rafal-pavilions-poster.jpg",
            featured: true,
          },
        ],
      },
      {
        id: "support",
        title: ar ? "ديكور وتنفيذ أوسع" : "Broader décor & delivery",
        items: [
          {
            href: lp("/design-build"),
            number: "04",
            nameAr: "التصميم والديكور",
            nameEn: "Design & Décor",
            description: ar
              ? "من الفكرة إلى ديكور جاهز. مسار واحد."
              : "From idea to finished décor. One path.",
            image: "/brand/turriva/hero-interior.webp",
          },
          {
            href: lp("/fit-out"),
            number: "05",
            nameAr: "الديكور والتنفيذ",
            nameEn: "Décor & Fit-Out",
            description: ar
              ? "تصميمكم المعتمد. نحن ننفّذ الديكور ونبنيه."
              : "Your approved design. We execute the décor and build it.",
            image: "/brand/turriva/projects/project-joinery-b2b.webp",
          },
          {
            href: lp("/commercial-spaces"),
            number: "06",
            nameAr: "التجاري والضيافة",
            nameEn: "Commercial & Hospitality",
            description: ar
              ? "ديكور مساحات تحمل العلامة وتعمل يومياً."
              : "Brand-led décor for spaces that work every day.",
            image: "/brand/turriva/projects/project-commercial-retail.jpg",
          },
          {
            href: lp("/renovation"),
            number: "07",
            nameAr: "التجديد والتطوير",
            nameEn: "Renovation & Upgrade",
            description: ar
              ? "تجديد ديكور مساحة قائمة — ما يبقى وما يتغير."
              : "Refresh existing décor — what stays, what changes.",
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
