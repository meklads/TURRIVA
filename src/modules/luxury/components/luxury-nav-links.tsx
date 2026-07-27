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
      className="hidden min-w-0 items-center justify-center gap-4 xl:flex 2xl:gap-6"
      aria-label="Main"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`lux-nav-link shrink-0 whitespace-nowrap ${
            isActive(link.href) ? "lux-nav-link--active" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export function LuxuryMobileNav({ links }: { links: readonly NavLink[] }) {
  const isActive = useActivePath();

  return (
    <nav
      className="lux-header-mobile flex gap-2 overflow-x-auto border-t border-lux-sand/40 py-3.5 xl:hidden"
      aria-label="Mobile"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors lux-mobile-nav-link sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-wider ${
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
