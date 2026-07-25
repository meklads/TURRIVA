import "@/app/luxury.css";
import { LuxuryFooter } from "@/modules/luxury/components/luxury-footer";
import { LuxuryHeader } from "@/modules/luxury/components/luxury-header";

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
      <LuxuryFooter />
    </div>
  );
}
