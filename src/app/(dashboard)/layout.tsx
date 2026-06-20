import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { LocaleSwitcher } from "@/shared/i18n/locale-switcher";
import { UserNav } from "@/modules/auth/components/user-nav";
import { RuwaqLogo } from "@/shared/components/ruwaq-logo";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
          <RuwaqLogo
            href="/proposals/new"
            showSubtitle
            subtitle={t.app.subtitle}
          />
          <nav className="flex flex-wrap items-center justify-end gap-2 text-sm text-gray-600 sm:gap-3">
            <LocaleSwitcher />
            <Link
              href="/templates/sample"
              className="hidden rounded-lg border border-gray-200 px-2.5 py-1 text-xs font-medium hover:bg-gray-50 sm:inline-block"
            >
              {t.nav.previewSample}
            </Link>
            <Link href="/proposals" className="hover:text-gray-900">
              {t.nav.myProposals}
            </Link>
            <Link href="/settings/company" className="hover:text-gray-900">
              {t.nav.settings}
            </Link>
            <UserNav />
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
    </div>
  );
}
