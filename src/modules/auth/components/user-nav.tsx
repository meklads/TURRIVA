"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useT } from "@/shared/i18n/context";

export function UserNav() {
  const { data: session, status } = useSession();
  const t = useT();

  if (status === "loading") {
    return <span className="h-8 w-16 animate-pulse rounded bg-gray-100" />;
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        {session.user.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={session.user.image}
            alt=""
            className="h-7 w-7 rounded-full"
          />
        ) : null}
        <span className="hidden max-w-[120px] truncate text-xs text-gray-600 sm:inline">
          {session.user.name ?? session.user.email}
        </span>
        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/proposals/new" })}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs hover:bg-gray-50"
        >
          {t.nav.signOut}
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="rounded-lg border border-gray-200 px-3 py-1.5 hover:bg-gray-50"
    >
      {t.nav.signIn}
    </Link>
  );
}
