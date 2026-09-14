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
    experience: { href: lp("/real-estate-experience"), label: ar ? "صالة البيع" : "Sales gallery" },
    showUnit: { href: lp("/show-unit"), label: ar ? "وحدة العرض" : "Show unit" },
    designBuild: { href: lp("/design-build"), label: ar ? "من فكرة إلى تسليم" : "Idea to handover" },
    fitOut: { href: lp("/fit-out"), label: ar ? "تنفيذ مخطط معتمد" : "Approved-drawing execution" },
    commercial: { href: lp("/commercial-spaces"), label: ar ? "تجاري" : "Commercial" },
    hospitality: { href: lp("/hospitality-spaces"), label: ar ? "ضيافة" : "Hospitality" },
    renovation: { href: lp("/renovation"), label: ar ? "تجديد" : "Renovation" },
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
      ? "سبعة أبواب واضحة — اختر حسب مهمة المشروع ونقطة البداية"
      : "Seven clear doors — choose by project job and starting point",
    explore: ar ? "استكشف" : "Explore",
    viewAll: ar ? "عرض كل المسارات ←" : "View all paths →",
    viewAllHref: lp("/services"),
    groups: [
      {
        id: "doors",
        title: ar ? "للمطورين أولاً" : "Developers first",
        items: [
          {
            href: lp("/real-estate-experience"),
            number: "01",
            nameAr: "صالة البيع",
            nameEn: "Sales gallery",
            description: ar ? "المشتري يزور المشروع هنا يومياً." : "Where buyers visit the project every day.",
            image: "/brand/turriva/projects/anan-eskan-gallery.jpg",
            featured: true,
          },
          {
            href: lp("/show-unit"),
            number: "02",
            nameAr: "وحدة العرض",
            nameEn: "Show unit",
            description: ar ? "فيلا أو شقة يمشي فيها المشتري." : "A villa or apartment the buyer walks through.",
            image: "/brand/turriva/inspiration/living-walnut-interior.webp",
            featured: true,
          },
        ],
      },
      {
        id: "support",
        title: ar ? "أبواب أوسع" : "Broader doors",
        items: [
          {
            href: lp("/design-build"),
            number: "03",
            nameAr: "من فكرة إلى تسليم",
            nameEn: "Idea to handover",
            description: ar ? "نبدأ قبل وجود تصميم معتمد." : "We start before an approved design exists.",
            image: "/brand/turriva/hero-interior.webp",
          },
          {
            href: lp("/fit-out"),
            number: "04",
            nameAr: "تنفيذ مخطط معتمد",
            nameEn: "Approved-drawing execution",
            description: ar ? "تصميمكم جاهز — ننفّذه كما هو." : "Your design is ready — we build it as approved.",
            image: "/brand/turriva/projects/project-joinery-b2b.webp",
          },
          {
            href: lp("/commercial-spaces"),
            number: "05",
            nameAr: "تجاري",
            nameEn: "Commercial",
            description: ar ? "متجر أو مطعم أو مكتب يعمل يومياً." : "Store, restaurant, or office for daily use.",
            image: "/brand/turriva/projects/project-commercial-retail.jpg",
          },
          {
            href: lp("/hospitality-spaces"),
            number: "06",
            nameAr: "ضيافة",
            nameEn: "Hospitality",
            description: ar ? "فندق أو شقق فندقية أو ردهة ضيوف." : "Hotel, serviced apartments, or guest lobby.",
            image: "/brand/turriva/projects/project-commercial-retail.jpg",
          },
          {
            href: lp("/renovation"),
            number: "07",
            nameAr: "تجديد",
            nameEn: "Renovation",
            description: ar ? "مساحة قائمة: ما يبقى وما يتغير." : "An existing space: what stays and what changes.",
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
