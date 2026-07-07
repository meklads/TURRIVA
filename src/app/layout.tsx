import type { Metadata } from "next";
import { Almarai, Amiri, Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { getLocale } from "@/shared/i18n/server";
import { localeDir } from "@/shared/i18n/locale";

/** Same Arabic stack as dotforlife.com — Almarai 300/400/700 */
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700"],
  variable: "--font-ar",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-ar-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-latin",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-latin-display",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title:
      locale === "ar"
        ? "رواق للديكور والمقاولات"
        : "Ruwaq Decor & Contracting",
    description:
      locale === "ar"
        ? "رواق شركة سعودية فاخرة للديكور والمقاولات — فلل، قصور، ومشاريع سكنية راقية."
        : "Ruwaq is a premium Saudi decor and contracting company for luxury villas, palaces, and high-end residential projects.",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const dir = localeDir(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      data-lang={locale}
      className={`${almarai.variable} ${amiri.variable} ${inter.variable} ${montserrat.variable} ${playfair.variable}`}
    >
      <body
        className={`min-h-screen bg-white ${locale === "ar" ? almarai.className : montserrat.className}`}
      >
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
