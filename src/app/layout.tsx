import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/shared/i18n/context";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { localeDir } from "@/shared/i18n/locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getMessages(locale);
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
  const messages = getMessages(locale);
  const dir = localeDir(locale);

  return (
    <html lang={locale} dir={dir}>
      <body className="min-h-screen bg-white font-sans">
        <LocaleProvider locale={locale} messages={messages}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
