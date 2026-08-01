/** Inspiration images — Oppein editorial references + verified fallbacks */
const OPPEIN = "https://www.oppeinhome.com/public/home/1000000/images/home";
const IMG_Q = "auto=format&fit=crop&q=90";

export const LUXURY_INSPIRATION_IMAGES: Record<string, string> = {
  /** Oppein homepage — luxury modular kitchen */
  kitchen: `${OPPEIN}/kitchens.webp`,
  /** Oppein — fitted wardrobes & walk-in systems */
  wardrobe: `${OPPEIN}/fitted-furniture.webp`,
  /** Oppein banner — living & dining joinery */
  living: `${OPPEIN}/banner2-2.webp`,
  bedroom: `https://images.unsplash.com/photo-1616594039964-ae9021a400a0?${IMG_Q}&w=1800`,
  /** Oppein — bathroom vanity programme */
  bathroom: `${OPPEIN}/bathroom-cabinets.webp`,
  /** Oppein global project — hospitality joinery */
  hospitality: `${OPPEIN}/case4.webp`,
};
