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
          navy: "#0F172A",
          "navy-soft": "#1F2937",
          gold: "#C9A063",
          "gold-light": "#D4B87A",
          cream: "#E6E2DB",
          "cream-bg": "#F7F5F2",
        },
        brand: {
          50: "#FBF8F3",
          100: "#F3EDE3",
          200: "#E6D9C4",
          300: "#D4B87A",
          400: "#C9A063",
          500: "#C9A063",
          600: "#B8924F",
          700: "#9A7940",
          800: "#1F2937",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Tajawal", "Cairo", "system-ui", "sans-serif"],
        display: ["Cairo", "Tajawal", "system-ui", "sans-serif"],
        latin: ["Montserrat", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ruwaq: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        "ruwaq-lg": "0 12px 40px -8px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
