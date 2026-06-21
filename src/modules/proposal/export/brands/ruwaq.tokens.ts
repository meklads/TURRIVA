/** Ruwaq brand tokens — from identity guide */
export const ruwaqBrand = {
  id: "ruwaq" as const,
  colors: {
    navy: "#1D1D1F",
    navySoft: "#424245",
    gold: "#6F5036",
    goldLight: "#8B6844",
    cream: "#E8E8ED",
    creamBg: "#F5F5F7",
    text: "#1D1D1F",
    textMuted: "#6E6E73",
    white: "#FFFFFF",
    estimateBg: "#F0EBE4",
    estimateBorder: "#DDD2C4",
    estimateText: "#5C422C",
    estimateGold: "#6F5036",
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
