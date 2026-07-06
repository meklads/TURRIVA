"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
};

function useActivePath() {
  const pathname = usePathname();
  return (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };
}

export function LuxuryDesktopNav({ links }: { links: readonly NavLink[] }) {
  const isActive = useActivePath();

  return (
    <nav
      className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5 2xl:gap-6"
      aria-label="Main"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`lux-nav-link relative shrink-0 whitespace-nowrap ${
            isActive(link.href) ? "text-lux-gold" : ""
          }`}
        >
          {link.label}
          {isActive(link.href) && (
            <span
              className="absolute inset-x-0 -bottom-px mx-auto h-px w-6 bg-lux-gold"
              aria-hidden
            />
          )}
        </Link>
      ))}
    </nav>
  );
}

export function LuxuryMobileNav({ links }: { links: readonly NavLink[] }) {
  const isActive = useActivePath();

  return (
    <nav
      className="flex gap-2 overflow-x-auto border-t border-lux-sand/40 py-3 lg:hidden"
      aria-label="Mobile"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
            isActive(link.href)
              ? "border-lux-gold bg-lux-gold/10 text-lux-gold"
              : "border-lux-sand bg-white text-lux-ink-soft"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
