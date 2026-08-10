/** Pillar brand lockups for the ecosystem offer section */
export const ECOSYSTEM_BRAND_LOGOS = {
  graphicsHouse: {
    src: "/brand/graphics-house/logo-on-light.png",
    alt: "Graphics House",
    className: "lux-offer-card__logo--gh",
  },
  oppein: {
    src: "/brand/oppein/logo.png",
    alt: "OPPEIN",
    className: "lux-offer-card__logo--oppein",
  },
  turriva: {
    src: "/brand/turriva/turriva-logo.png",
    alt: "Turriva",
    className: "lux-offer-card__logo--turriva",
  },
} as const;

export type EcosystemBrandKey = keyof typeof ECOSYSTEM_BRAND_LOGOS;
