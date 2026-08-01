/** Inspiration images — editorial product references + verified fallbacks */
const OPPEIN_HOME = "https://www.oppeinhome.com/public/home/1000000/images/home";
const OPPEIN_PRODUCT = "https://www.oppeinhome.com/upload/image/product/thumb";
const IMG_Q = "auto=format&fit=crop&q=90";

export const LUXURY_INSPIRATION_IMAGES: Record<string, string> = {
  /** Luxury modular kitchen */
  kitchen: `${OPPEIN_HOME}/kitchens.webp`,
  /** Fitted wardrobes & walk-in systems */
  wardrobe: `${OPPEIN_HOME}/fitted-furniture.webp`,
  /** Whole-house living & dining — warm walnut interior */
  living: "/brand/turriva/inspiration/living-walnut-interior.webp",
  bedroom: `https://images.unsplash.com/photo-1616594039964-ae9021a400a0?${IMG_Q}&w=1800`,
  /** Bathroom vanity programme */
  bathroom: `${OPPEIN_HOME}/bathroom-cabinets.webp`,
  /** Luxury F&B interior — lobbies & restaurant joinery reference */
  hospitality: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?${IMG_Q}&w=1800`,
};
