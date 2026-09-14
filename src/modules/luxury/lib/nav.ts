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
    designBuild: { href: lp("/design-build"), label: ar ? "التصميم والتنفيذ" : "Design & build" },
    fitOut: { href: lp("/fit-out"), label: ar ? "التنفيذ والتجهيز" : "Fit-out" },
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
            nameEn: "Sales Gallery",
            description: ar
              ? "بيئة بيع دائمة: صالة مبيعات يستقبل فيها المشتري المشروع يومياً."
              : "A lasting sales environment: the gallery where buyers meet the project every day.",
            image: "/brand/turriva/projects/anan-eskan-gallery.jpg",
            featured: true,
          },
          {
            href: lp("/show-unit"),
            number: "02",
            nameAr: "وحدة العرض",
            nameEn: "Show Unit",
            description: ar
              ? "فيلا أو شقة عيّنة: مسار معيشة يمشي فيه المشتري."
              : "Show villa or apartment: a living path the buyer can walk.",
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
            nameAr: "التصميم والتنفيذ",
            nameEn: "Design & Build",
            description: ar
              ? "من فكرة أولية — لا يوجد تصميم معتمد بعد — إلى مساحة مكتملة."
              : "From an initial idea — no approved design yet — to a completed space.",
            image: "/brand/turriva/hero-interior.webp",
          },
          {
            href: lp("/fit-out"),
            number: "04",
            nameAr: "التنفيذ والتجهيز",
            nameEn: "Fit-Out & Execution",
            description: ar
              ? "تصميمكم المعتمد جاهز. ننفّذه دون أن نحل محل المصمم."
              : "Your approved design is ready. We execute it without replacing the designer.",
            image: "/brand/turriva/projects/project-joinery-b2b.webp",
          },
          {
            href: lp("/commercial-spaces"),
            number: "05",
            nameAr: "المساحات التجارية",
            nameEn: "Commercial Spaces",
            description: ar
              ? "متجر أو مطعم أو مكتب: مساحة تحمل العلامة وتعمل يومياً."
              : "Store, restaurant, or office: a brand-led space that works every day.",
            image: "/brand/turriva/projects/project-commercial-retail.jpg",
          },
          {
            href: lp("/hospitality-spaces"),
            number: "06",
            nameAr: "مساحات الضيافة",
            nameEn: "Hospitality Spaces",
            description: ar
              ? "فندق أو شقق فندقية أو ردهة: مساحة مبنية حول تجربة الإقامة."
              : "Hotel, serviced apartments, or lobby: a space built around the stay.",
            image: "/brand/turriva/projects/project-commercial-retail.jpg",
          },
          {
            href: lp("/renovation"),
            number: "07",
            nameAr: "التجديد والتطوير",
            nameEn: "Renovation & Upgrade",
            description: ar
              ? "مساحة قائمة موجودة. نحدد ما يبقى وما يتغير قبل التنفيذ."
              : "An existing space. We define what stays and what changes before work.",
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
