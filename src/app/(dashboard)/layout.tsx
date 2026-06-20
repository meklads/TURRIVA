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
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
      <SiteFooter />
    </div>
  );
}
