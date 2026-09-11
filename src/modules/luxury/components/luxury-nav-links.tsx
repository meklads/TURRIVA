"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { stripLocalePrefix } from "@/shared/i18n/path";

type NavLink = {
  href: string;
  label: string;
};

function normalizeNavPath(pathname: string) {
  const { pathname: bare } = stripLocalePrefix(pathname);
  return bare.replace(/\/$/, "") || "/";
}

function useActivePath() {
  const pathname = usePathname();
  const current = normalizeNavPath(pathname);

  return (href: string) => {
    const target = normalizeNavPath(href);
    if (target === "/") return current === "/";
    return current === target || current.startsWith(`${target}/`);
  };
}

export function LuxuryRouteProgress() {
  const pathname = usePathname();
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
        return;
      }
      if (normalizeNavPath(href) === normalizeNavPath(window.location.pathname)) return;
      setPending(true);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!pending) return null;

  return (
    <div className="lux-route-loading lux-route-loading--fixed" aria-hidden>
      <div className="lux-route-loading__bar" />
    </div>
  );
}

type ProductMenu = {
  label: string;
  groups: readonly { title: string; links: readonly NavLink[] }[];
};

export function LuxuryDesktopNav({ links, products }: { links: readonly NavLink[]; products?: ProductMenu }) {
  const isActive = useActivePath();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const productsActive = products?.groups.some((group) => group.links.some((link) => isActive(link.href))) ?? false;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <nav className="lux-header-nav hidden min-w-0 items-center justify-center lg:flex" aria-label="Main">
      {products ? (
        <div
          ref={rootRef}
          className={`lux-nav-products${productsActive || open ? " lux-nav-products--active" : ""}${open ? " lux-nav-products--open" : ""}`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            type="button"
            className="lux-nav-link lux-nav-products__button"
            aria-haspopup="menu"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {products.label}
          </button>
          <div id={panelId} className="lux-nav-products__panel" role="menu">
            {products.groups.map((group) => (
              <div key={group.title} className="lux-nav-products__group">
                <p className="lux-nav-products__label">{group.title}</p>
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch
                    role="menuitem"
                    className={`lux-nav-products__link${isActive(link.href) ? " lux-nav-products__link--active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          prefetch
          className={`lux-nav-link shrink-0 whitespace-nowrap ${isActive(link.href) ? "lux-nav-link--active" : ""}`}
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
      className="lux-header-mobile flex gap-2 overflow-x-auto border-t border-lux-sand/40 py-3.5 lg:hidden"
      aria-label="Mobile"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          prefetch
          className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors lux-mobile-nav-link sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-wider ${
            isActive(link.href)
              ? "border-lux-gold bg-lux-gold/10 text-lux-gold"
              : "border-lux-sand bg-lux-gold-muted/40 text-lux-ink-soft"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
