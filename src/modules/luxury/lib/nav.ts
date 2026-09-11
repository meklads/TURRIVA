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

export type LuxuryProductMenuItem = {
  href: string;
  number: string;
  nameAr: string;
  nameEn: string;
  description: string;
  image: string;
};

export type LuxuryProductMenuGroup = {
  id: "real-estate" | "design-build" | "spaces";
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
    eyebrow: ar ? "منتجاتنا" : "Our products",
    title: ar ? "ما نقدمه" : "What we offer",
    subtitle: ar ? "تصميم مكاني · تجربة · تنفيذ" : "Spatial Design · Experience · Build",
    explore: ar ? "استكشف المنتج" : "Explore product",
    groups: [
      {
        id: "real-estate",
        title: ar ? "العقار" : "Real estate",
        items: [
          {
            href: lp("/real-estate-experience"),
            number: "01",
            nameAr: "تجربة المشروع العقاري",
            nameEn: "Real Estate Project Experience",
            description: ar
              ? "من مركز البيع إلى وحدة العرض، نصمم وننفذ البيئة التي يقدم فيها مشروعك نفسه لعملائه."
              : "From the sales centre to the show unit, we design and deliver the environment where your project meets its clients.",
            image: "/brand/turriva/makkah-charter-04.jpeg",
          },
          {
            href: lp("/show-unit"),
            number: "02",
            nameAr: "وحدة العرض",
            nameEn: "Show Unit",
            description: ar
              ? "فيلا أو شقة أو جناح جاهز لاستقبال العميل وفهم أسلوب الحياة."
              : "A villa, apartment, or suite ready for the buyer to walk and understand the lifestyle.",
            image: "/brand/turriva/projects/project-walk-in-makkah.webp",
          },
        ],
      },
      {
        id: "design-build",
        title: ar ? "التصميم والتنفيذ" : "Design & build",
        items: [
          {
            href: lp("/design-build"),
            number: "03",
            nameAr: "التصميم والتنفيذ",
            nameEn: "Design & Build",
            description: ar
              ? "من الفكرة إلى مساحة جاهزة للاستخدام في مسار واحد."
              : "From an idea to a space ready to use, in one accountable path.",
            image: "/brand/turriva/hero-interior.webp",
          },
          {
            href: lp("/fit-out"),
            number: "04",
            nameAr: "التنفيذ والتجهيز",
            nameEn: "Fit-Out & Execution",
            description: ar
              ? "تصميمكم. تنفيذنا. شريك تنفيذ، لا مصمم ثانٍ."
              : "Your design. Our execution. An execution partner, not a second studio.",
            image: "/brand/turriva/projects/project-joinery-b2b.webp",
          },
        ],
      },
      {
        id: "spaces",
        title: ar ? "المساحات" : "Spaces",
        items: [
          {
            href: lp("/commercial-spaces"),
            number: "05",
            nameAr: "المساحات التجارية",
            nameEn: "Commercial Spaces",
            description: ar
              ? "مساحة تعكس العلامة وتعمل بكفاءة يومياً."
              : "A space that carries the brand and works in daily use.",
            image: "/brand/turriva/sample-kit-showroom.webp",
          },
          {
            href: lp("/hospitality-spaces"),
            number: "06",
            nameAr: "مساحات الضيافة",
            nameEn: "Hospitality Spaces",
            description: ar
              ? "تجربة الضيف تبدأ من المكان."
              : "The guest experience begins in the room.",
            image: "/brand/turriva/inspiration/living-walnut-interior.webp",
          },
          {
            href: lp("/renovation"),
            number: "07",
            nameAr: "التجديد والتطوير",
            nameEn: "Renovation & Upgrade",
            description: ar
              ? "مساحة قائمة. إمكانات جديدة. دون هدم أولاً."
              : "An existing space. New potential. Not demolition first.",
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
