import type { Metadata } from "next";
import { Almarai, Amiri, IBM_Plex_Sans_Arabic, Inter, Montserrat, Playfair_Display, Tajawal } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { getLocale } from "@/shared/i18n/server";
import { localeDir } from "@/shared/i18n/locale";

/** Same Arabic stack as dotforlife.com, Almarai 300/400/700 */
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

/** Shared Latin UI stack */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

/** ProjectLaunch™ Arabic, Tajawal + IBM Plex Sans Arabic */
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-marketing-ar",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

  return {
    metadataBase: new URL("https://turriva.com"),
    title:
      locale === "ar"
        ? "توريفا · تصميم مكاني · تجربة · تنفيذ"
        : "Turriva · Spatial Design · Experience · Build",
    description:
      locale === "ar"
        ? "تصميم وتنفيذ المساحات والتجارب. من الفكرة إلى الواقع."
        : "Design and execution of spaces and experiences. From concept to reality.",
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
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
      className={`${almarai.variable} ${amiri.variable} ${inter.variable} ${montserrat.variable} ${playfair.variable} ${tajawal.variable} ${ibmPlexArabic.variable}`}
    >
      <body
        className={`min-h-screen bg-white ${locale === "ar" ? almarai.className : montserrat.className}`}
      >
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
