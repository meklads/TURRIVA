/** Ruwaq brand tokens — from identity guide */
export const ruwaqBrand = {
  id: "ruwaq" as const,
  colors: {
    navy: "#1D1D1F",
    navySoft: "#424245",
    gold: "#9A7146",
    goldLight: "#C4A574",
    cream: "#E8E8ED",
    creamBg: "#F5F5F7",
    text: "#1D1D1F",
    textMuted: "#6E6E73",
    white: "#FFFFFF",
    estimateBg: "#F5F0E8",
    estimateBorder: "#E8DFC8",
    estimateText: "#6B5032",
    estimateGold: "#9A7146",
    budgetMatchBg: "#F0F7F4",
    budgetMatchBorder: "#B7D4C8",
    budgetMatchText: "#2D6A4F",
  },
  fonts: {
    arabic: "'Almarai', 'Tajawal', 'Cairo', 'Noto Sans Arabic', Tahoma, sans-serif",
    latin: "'Montserrat', system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  footer: {
    addressAr: "جدة، حي الزهراء، المملكة العربية السعودية",
    addressEn: "Jeddah, Al-Zahra District, Saudi Arabia",
    website: "ruwaq.co",
    taglineAr: "احترافية تبني الثقة",
    taglineEn: "Professionalism builds trust",
  },
  assets: {
    logoOnLight: "/brand/ruwaq/logo-on-light.png",
    logoOnDark: "/brand/ruwaq/logo-on-dark.png",
    logoFullDark: "/brand/ruwaq/logo-full-dark.png",
  },
} as const;

export type ExportTemplateId = "ruwaq" | "graphics_house";
