import type { Locale } from "@/shared/i18n/locale";
import type { ProductVisualKey } from "./product-visuals";
import { getProductVisuals } from "./product-visuals";

export type ProductRelation = {
  key: ProductVisualKey;
  href: string;
  nameAr: string;
  nameEn: string;
  blurbAr: string;
  blurbEn: string;
};

const CATALOG: readonly ProductRelation[] = [
  {
    key: "real-estate-experience",
    href: "/real-estate-experience",
    nameAr: "تجربة المشروع العقاري",
    nameEn: "Real Estate Project Experience",
    blurbAr: "البيئة الكاملة التي يقدم فيها المشروع نفسه.",
    blurbEn: "The full environment where the project presents itself.",
  },
  {
    key: "show-unit",
    href: "/show-unit",
    nameAr: "وحدة العرض",
    nameEn: "Show Unit",
    blurbAr: "الوحدة التي يمشي فيها العميل.",
    blurbEn: "The unit the buyer walks through.",
  },
  {
    key: "design-build",
    href: "/design-build",
    nameAr: "التصميم والتنفيذ",
    nameEn: "Design & Build",
    blurbAr: "من الفكرة إلى مساحة جاهزة للاستخدام.",
    blurbEn: "From an idea to a space ready to use.",
  },
  {
    key: "fit-out",
    href: "/fit-out",
    nameAr: "التنفيذ والتجهيز",
    nameEn: "Fit-Out & Execution",
    blurbAr: "تصميم معتمد. نحن نبنيه.",
    blurbEn: "Approved design. We build it.",
  },
  {
    key: "commercial-spaces",
    href: "/commercial-spaces",
    nameAr: "المساحات التجارية",
    nameEn: "Commercial Spaces",
    blurbAr: "مساحة تعكس العلامة وتعمل.",
    blurbEn: "A space that carries the brand and performs.",
  },
  {
    key: "hospitality-spaces",
    href: "/hospitality-spaces",
    nameAr: "مساحات الضيافة",
    nameEn: "Hospitality Spaces",
    blurbAr: "تجربة الضيف تبدأ من المكان.",
    blurbEn: "The guest experience begins with the space.",
  },
  {
    key: "renovation",
    href: "/renovation",
    nameAr: "التجديد والتطوير",
    nameEn: "Renovation & Upgrade",
    blurbAr: "مساحة قائمة. إمكانات جديدة.",
    blurbEn: "An existing space. New potential.",
  },
] as const;

const RELATED: Record<ProductVisualKey, readonly ProductVisualKey[]> = {
  "real-estate-experience": ["show-unit", "design-build"],
  "show-unit": ["real-estate-experience", "fit-out"],
  "design-build": ["show-unit", "commercial-spaces", "hospitality-spaces"],
  "fit-out": ["design-build", "commercial-spaces", "hospitality-spaces"],
  "commercial-spaces": ["design-build", "fit-out", "renovation"],
  "hospitality-spaces": ["design-build", "fit-out", "renovation"],
  renovation: ["design-build", "commercial-spaces", "hospitality-spaces"],
};

function find(key: ProductVisualKey): ProductRelation {
  const item = CATALOG.find((entry) => entry.key === key);
  if (!item) throw new Error(`Unknown product ${key}`);
  return item;
}

export function getProductMeta(key: ProductVisualKey) {
  const index = CATALOG.findIndex((entry) => entry.key === key);
  const item = find(key);
  return {
    key,
    href: item.href,
    index: index + 1,
    total: CATALOG.length,
    number: String(index + 1).padStart(2, "0"),
    indexLabel: `${String(index + 1).padStart(2, "0")} / ${String(CATALOG.length).padStart(2, "0")}`,
    nameAr: item.nameAr,
    nameEn: item.nameEn,
  };
}

export function getRelatedProducts(key: ProductVisualKey, locale: Locale) {
  const isAr = locale === "ar";
  return RELATED[key].map((relatedKey) => {
    const item = find(relatedKey);
    const meta = getProductMeta(relatedKey);
    const visuals = getProductVisuals(relatedKey);
    return {
      href: item.href,
      number: meta.number,
      title: isAr ? item.nameAr : item.nameEn,
      subtitle: isAr ? item.nameEn : item.nameAr,
      blurb: isAr ? item.blurbAr : item.blurbEn,
      image: visuals.mid,
      alt: isAr ? visuals.altAr : visuals.altEn,
    };
  });
}

export function getProductPager(key: ProductVisualKey, locale: Locale) {
  const index = CATALOG.findIndex((entry) => entry.key === key);
  const prev = CATALOG[(index - 1 + CATALOG.length) % CATALOG.length];
  const next = CATALOG[(index + 1) % CATALOG.length];
  const isAr = locale === "ar";
  return {
    index: index + 1,
    total: CATALOG.length,
    label: `${String(index + 1).padStart(2, "0")} / ${String(CATALOG.length).padStart(2, "0")}`,
    previous: {
      href: prev.href,
      label: isAr ? "السابق" : "Previous",
      title: isAr ? prev.nameAr : prev.nameEn,
    },
    next: {
      href: next.href,
      label: isAr ? "التالي" : "Next",
      title: isAr ? next.nameAr : next.nameEn,
    },
  };
}

export function getRelatedSectionCopy(locale: Locale) {
  return locale === "ar"
    ? { eyebrow: "استمر في الاستكشاف", title: "قد تحتاج أيضاً إلى" }
    : { eyebrow: "Continue exploring", title: "You may also need" };
}
