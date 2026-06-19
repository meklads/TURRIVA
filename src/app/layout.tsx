import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "رواق — عروض احترافية في دقائق",
  description:
    "أنشئ عروضاً تجارية احترافية للمقاولات والاستشارات في السعودية بالذكاء الاصطناعي. عربي + إنجليزي.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-white font-sans">{children}</body>
    </html>
  );
}
