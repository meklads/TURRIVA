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
          /* Luxury v2 — warm ink + champagne (fonts unchanged: Almarai / Montserrat) */
          ink: "#1C1917",
          "ink-soft": "#5C564E",
          "ink-muted": "#8A8278",
          champagne: "#9A7146",
          "champagne-light": "#C4A574",
          "champagne-muted": "#E8DFC8",
          linen: "#F3F0E9",
          paper: "#FCFCFA",
          stone: "#E6E2D8",
          sage: "#6B7F62",
          /* Aliases — existing class names keep working */
          navy: "#1C1917",
          "navy-soft": "#5C564E",
          gold: "#9A7146",
          "gold-light": "#C4A574",
          cream: "#E6E2D8",
          "cream-bg": "#F3F0E9",
        },
        brand: {
          50: "#FAF7F2",
          100: "#F3EDE3",
          200: "#E8DFC8",
          300: "#D4BC96",
          400: "#C4A574",
          500: "#9A7146",
          600: "#85633D",
          700: "#6B5032",
          800: "#1C1917",
          900: "#141210",
        },
      },
      fontFamily: {
        ar: ["var(--font-ar)", "Segoe UI", "sans-serif"],
        latin: ["var(--font-latin)", "system-ui", "sans-serif"],
        sans: ["var(--font-ar)", "Segoe UI", "sans-serif"],
        display: ["var(--font-ar)", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        ruwaq:
          "0 1px 2px rgba(28, 25, 23, 0.02), 0 4px 20px rgba(28, 25, 23, 0.04)",
        "ruwaq-lg":
          "0 2px 8px rgba(28, 25, 23, 0.03), 0 20px 48px rgba(28, 25, 23, 0.07)",
        "ruwaq-soft": "0 24px 64px -16px rgba(28, 25, 23, 0.1)",
        "ruwaq-glass": "0 8px 32px rgba(28, 25, 23, 0.06)",
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
