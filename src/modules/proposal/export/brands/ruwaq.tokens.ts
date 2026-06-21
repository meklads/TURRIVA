/** Ruwaq brand tokens — from identity guide */
export const ruwaqBrand = {
  id: "ruwaq" as const,
  colors: {
    navy: "#0F172A",
    navySoft: "#1F2937",
    gold: "#C9A063",
    goldLight: "#D4B87A",
    cream: "#E6E2DB",
    creamBg: "#F7F5F2",
    text: "#1F2937",
    textMuted: "#6B7280",
    white: "#FFFFFF",
    estimateBg: "#FBF6EE",
    estimateBorder: "#E6D9C4",
    estimateText: "#7A5C2E",
    estimateGold: "#C9A063",
    budgetMatchBg: "#F0F7F4",
    budgetMatchBorder: "#B7D4C8",
    budgetMatchText: "#2D6A4F",
  },
  fonts: {
    arabic: "'Almarai', 'Tajawal', 'Cairo', 'Noto Sans Arabic', Tahoma, sans-serif",
    latin: "'Montserrat', system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  footer: {
    addressAr: "جدة — حي الزهراء، المملكة العربية السعودية",
    addressEn: "Jeddah — Al-Zahra District, Saudi Arabia",
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
