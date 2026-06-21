import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ruwaq: {
          /* Apple-neutral surfaces + Ruwaq logo gold accent */
          ink: "#1D1D1F",
          "ink-soft": "#6E6E73",
          "ink-muted": "#86868B",
          white: "#FFFFFF",
          paper: "#FFFFFF",
          linen: "#F5F5F7",
          stone: "#E8E8ED",
          "stone-mid": "#D2D2D7",
          gold: "#D4AF37",
          "gold-light": "#E2C76B",
          "gold-muted": "#FBF7EB",
          brown: "#D4AF37",
          "brown-light": "#E2C76B",
          "brown-muted": "#FBF7EB",
          champagne: "#D4AF37",
          "champagne-light": "#E2C76B",
          "champagne-muted": "#FBF7EB",
          sage: "#6B7F62",
          navy: "#1D1D1F",
          "navy-soft": "#6E6E73",
          cream: "#E8E8ED",
          "cream-bg": "#F5F5F7",
        },
        warm: "#F9F9F9",
        charcoal: "#0A0A0A",
        brand: {
          50: "#F5F5F7",
          100: "#E8E8ED",
          200: "#D2D2D7",
          300: "#AEAEB2",
          400: "#E2C76B",
          500: "#D4AF37",
          600: "#B8942E",
          700: "#6E6E73",
          800: "#1D1D1F",
          900: "#141210",
        },
      },
      fontFamily: {
        ar: ["var(--font-ar)", "Segoe UI", "sans-serif"],
        latin: ["var(--font-latin)", "system-ui", "sans-serif"],
        sans: ["var(--font-ar)", "Segoe UI", "sans-serif"],
        display: ["var(--font-ar-display)", "var(--font-ar)", "serif"],
        "display-en": ["var(--font-latin-display)", "Georgia", "serif"],
      },
      boxShadow: {
        ruwaq:
          "0 1px 2px rgba(0, 0, 0, 0.02), 0 4px 20px rgba(0, 0, 0, 0.04)",
        "ruwaq-lg":
          "0 2px 8px rgba(0, 0, 0, 0.03), 0 20px 48px rgba(0, 0, 0, 0.07)",
        "ruwaq-soft": "0 24px 64px -16px rgba(0, 0, 0, 0.1)",
        "ruwaq-glass": "0 8px 32px rgba(0, 0, 0, 0.06)",
      },
      letterSpacing: {
        display: "-0.025em",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
