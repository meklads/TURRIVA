import "@/app/luxury.css";
import { LuxuryHeader } from "@/modules/luxury/components/luxury-header";
import { LuxuryPartnerPromos } from "@/modules/luxury/components/luxury-partner-promos";
import { LuxuryFooter } from "@/modules/luxury/components/luxury-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lux-shell flex min-h-screen flex-col">
      <LuxuryHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <LuxuryPartnerPromos />
      <LuxuryFooter />
    </div>
  );
}
