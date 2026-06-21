import type { Metadata } from "next";
import { Almarai, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { getLocale } from "@/shared/i18n/server";
import { localeDir } from "@/shared/i18n/locale";

/** Same Arabic stack as dotforlife.com — Almarai 300/400/700/800 */
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-ar",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-latin",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title:
      locale === "ar"
        ? "رواق · عروض احترافية في دقائق"
        : "Ruwaq · Professional proposals in minutes",
    description:
      locale === "ar"
        ? "أنشئ عروضاً تجارية احترافية للمقاولات والاستشارات في السعودية بالذكاء الاصطناعي."
        : "Create professional business proposals for Saudi contractors and consultants with AI.",
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
      className={`${almarai.variable} ${montserrat.variable}`}
    >
      <body
        className={`min-h-screen bg-white ${locale === "ar" ? almarai.className : montserrat.className}`}
      >
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
