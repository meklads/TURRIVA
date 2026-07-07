import "@/app/design.css";
import { DesignHeader } from "@/modules/design/components/design-header";
import { DesignFooter } from "@/modules/design/components/design-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="design-shell flex min-h-screen flex-col">
      <DesignHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <DesignFooter />
    </div>
  );
}
