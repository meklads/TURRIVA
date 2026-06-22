/** Graphics House brand tokens — from official logo assets */
export const graphicsHouseBrand = {
  id: "graphics_house" as const,
  colors: {
    teal: "#0E4A52",
    gold: "#C9A84C",
    goldLight: "#D4B47A",
    cream: "#F5F5F7",
    text: "#1D1D1F",
    textMuted: "#6E6E73",
    white: "#FFFFFF",
    printSurface: "#F3F4F6",
    printBorder: "#E5E7EB",
  },
  fonts: {
    arabic: "'Almarai', 'Tajawal', 'Cairo', 'Noto Sans Arabic', Tahoma, sans-serif",
    latin: "'Montserrat', 'Marion', Georgia, serif",
  },
  footer: {
    website: "3dgraphicshouse.com",
    taglineAr: "أفضل فكرة للعرض",
    taglineEn: "Best Idea For Presentation",
  },
  assets: {
    logoOnLight: "/brand/graphics-house/logo-on-light.png",
    logoOnDark: "/brand/graphics-house/logo-on-dark.png",
    logoMark: "/brand/graphics-house/logo-mark.png",
  },
} as const;
