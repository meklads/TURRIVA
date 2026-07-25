import "@/app/design.css";
import { DesignFooter } from "@/modules/design/components/design-footer";
import { DesignHeader } from "@/modules/design/components/design-header";

export default function StudioLayout({ children }: { children: React.ReactNode }) {
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
