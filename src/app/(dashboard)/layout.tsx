import Link from "next/link";
import { t } from "@/shared/i18n";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link href="/proposals/new" className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-brand-600">{t.app.name}</span>
            <span className="text-[10px] text-gray-400">{t.app.subtitle}</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-gray-600">
            <Link href="/proposals" className="hover:text-gray-900">
              {t.nav.myProposals}
            </Link>
            <Link href="/settings/company" className="hover:text-gray-900">
              {t.nav.settings}
            </Link>
            <Link
              href="/login"
              className="rounded-lg border border-gray-200 px-3 py-1.5 hover:bg-gray-50"
            >
              {t.nav.signIn}
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
    </div>
  );
}
