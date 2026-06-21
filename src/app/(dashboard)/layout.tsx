import { SiteHeader } from "@/shared/components/site-header";
import { SiteFooter } from "@/shared/components/site-footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader variant="app" />
      <div className="flex-1 bg-gradient-to-b from-ruwaq-paper via-ruwaq-linen/40 to-ruwaq-linen">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
