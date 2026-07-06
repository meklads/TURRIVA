import "@/app/luxury.css";
import { LuxuryHeader } from "@/modules/luxury/components/luxury-header";
import { LuxuryHeaderShell } from "@/modules/luxury/components/luxury-header-shell";
import { LuxuryFooter } from "@/modules/luxury/components/luxury-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lux-shell flex min-h-screen flex-col">
      <LuxuryHeaderShell>
        <LuxuryHeader />
      </LuxuryHeaderShell>
      <main id="main" className="flex-1">
        {children}
      </main>
      <LuxuryFooter />
    </div>
  );
}
