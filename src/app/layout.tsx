import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { getLocale } from "@/shared/i18n/server";
import { localeDir } from "@/shared/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title:
      locale === "ar"
        ? "رواق — عروض احترافية في دقائق"
        : "Ruwaq — Professional proposals in minutes",
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
    <html lang={locale} dir={dir}>
      <body className="min-h-screen bg-white font-sans">
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
