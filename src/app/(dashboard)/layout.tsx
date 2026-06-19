import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link
            href="/proposals/new"
            className="text-sm font-semibold text-brand-500"
          >
            Saudi Proposal OS
          </Link>
          <nav className="flex items-center gap-4 text-sm text-gray-600">
            <Link href="/proposals" className="hover:text-gray-900">
              My Proposals
            </Link>
            <Link href="/settings/company" className="hover:text-gray-900">
              Settings
            </Link>
            <Link href="/login" className="hover:text-gray-900">
              Sign In
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">
        {children}
      </main>
    </div>
  );
}
