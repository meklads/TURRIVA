import { SiteHeader } from "@/shared/components/site-header";
import { SiteFooter } from "@/shared/components/site-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-ruwaq-navy">
      <SiteHeader variant="marketing" overHero />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
