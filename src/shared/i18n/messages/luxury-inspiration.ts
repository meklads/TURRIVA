/** Inspiration carousel — Unsplash (free license), matched to space titles */
const IMG_Q = "auto=format&fit=crop&q=90";

export const LUXURY_INSPIRATION_IMAGES = {
  /** Modular kitchens */
  kitchen: `https://images.unsplash.com/photo-1565538810643-b5bdb714032a?${IMG_Q}&w=1800`,
  /** Walk-in closets & dressing rooms */
  wardrobe: `https://images.unsplash.com/photo-1649361811423-a55616f7ab11?${IMG_Q}&w=1800`,
  /** Living & dining joinery */
  living: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${IMG_Q}&w=1800`,
  /** Bedroom suites */
  bedroom: `https://images.unsplash.com/photo-1616594039964-ae9021a400a0?${IMG_Q}&w=1800`,
  /** Bathroom vanity */
  bathroom: `https://images.unsplash.com/photo-1620626011761-996317b8d101?${IMG_Q}&w=1800`,
  /** Hotels & F&B */
  hospitality: `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?${IMG_Q}&w=1800`,
} satisfies Record<string, string>;

export type LuxuryInspirationSpace = keyof typeof LUXURY_INSPIRATION_IMAGES;
