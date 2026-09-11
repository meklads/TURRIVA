"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { stripLocalePrefix } from "@/shared/i18n/path";
import type { LuxuryProductMenu, LuxuryProductMenuItem } from "../lib/nav";

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

function productTitle(item: LuxuryProductMenuItem, isAr: boolean) {
  return isAr ? item.nameAr : item.nameEn;
}

function productAlt(item: LuxuryProductMenuItem, isAr: boolean) {
  return isAr ? item.nameEn : item.nameAr;
}

function MegaProductCard({
  item,
  explore,
  isAr,
  active,
  featured = false,
  onNavigate,
}: {
  item: LuxuryProductMenuItem;
  explore: string;
  isAr: boolean;
  active: boolean;
  featured?: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={item.href}
      prefetch
      role="menuitem"
      className={`lux-mega-card${featured ? " lux-mega-card--featured" : ""}${item.primary && !featured ? " lux-mega-card--primary" : ""}${active ? " lux-mega-card--active" : ""}`}
      onClick={onNavigate}
    >
      <div className="lux-mega-card__media">
        <Image
          src={item.image}
          alt={productTitle(item, isAr)}
          fill
          className="object-cover"
          sizes={featured ? "(max-width: 1024px) 100vw, 28rem" : "(max-width: 1024px) 50vw, 14rem"}
        />
      </div>
      <div className="lux-mega-card__body">
        <p className="lux-mega-card__number">{item.number}</p>
        <h3 className="lux-mega-card__title">{productTitle(item, isAr)}</h3>
        <p className="lux-mega-card__en">{productAlt(item, isAr)}</p>
        <p className="lux-mega-card__desc">{item.description}</p>
        {featured ? <span className="lux-mega-card__cta">{explore} →</span> : null}
      </div>
    </Link>
  );
}

export function LuxuryDesktopNav({
  links,
  products,
  isAr = false,
}: {
  links: readonly NavLink[];
  products?: LuxuryProductMenu;
  isAr?: boolean;
}) {
  const isActive = useActivePath();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const menuActive = products?.groups.some((group) => group.items.some((item) => isActive(item.href))) ?? false;

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

  const realEstate = products?.groups.find((group) => group.id === "real-estate");
  const designBuild = products?.groups.find((group) => group.id === "design-build");
  const spaces = products?.groups.find((group) => group.id === "spaces");
  const featured = realEstate?.items.find((item) => item.featured);
  const showUnit = realEstate?.items.find((item) => !item.featured);

  return (
    <nav className="lux-header-nav hidden min-w-0 items-center justify-center lg:flex" aria-label="Main">
      {products ? (
        <div
          ref={rootRef}
          className={`lux-nav-products${menuActive || open ? " lux-nav-products--active" : ""}${open ? " lux-nav-products--open" : ""}`}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            type="button"
            className="lux-nav-link lux-nav-products__button"
            aria-haspopup="true"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {products.label}
          </button>
          <div id={panelId} className="lux-mega" role="menu" aria-label={products.label}>
            <div className="lux-mega__inner">
              <header className="lux-mega__head">
                <div>
                  <p className="lux-mega__eyebrow">{products.eyebrow}</p>
                  <h2 className="lux-mega__title">{products.title}</h2>
                </div>
                <p className="lux-mega__subtitle">{products.subtitle}</p>
              </header>

              <div className="lux-mega__grid">
                <section className="lux-mega__col lux-mega__col--featured" aria-label={realEstate?.title}>
                  <p className="lux-mega__group">{realEstate?.title}</p>
                  {featured ? (
                    <MegaProductCard
                      item={featured}
                      explore={products.explore}
                      isAr={isAr}
                      active={isActive(featured.href)}
                      featured
                      onNavigate={() => setOpen(false)}
                    />
                  ) : null}
                  {showUnit ? (
                    <MegaProductCard
                      item={showUnit}
                      explore={products.explore}
                      isAr={isAr}
                      active={isActive(showUnit.href)}
                      onNavigate={() => setOpen(false)}
                    />
                  ) : null}
                </section>

                <section className="lux-mega__col" aria-label={designBuild?.title}>
                  <p className="lux-mega__group">{designBuild?.title}</p>
                  <div className="lux-mega__stack">
                    {designBuild?.items.map((item) => (
                      <MegaProductCard
                        key={item.href}
                        item={item}
                        explore={products.explore}
                        isAr={isAr}
                        active={isActive(item.href)}
                        onNavigate={() => setOpen(false)}
                      />
                    ))}
                  </div>
                </section>
              </div>

              <section className="lux-mega__spaces" aria-label={spaces?.title}>
                <p className="lux-mega__group">{spaces?.title}</p>
                <div className="lux-mega__spaces-grid">
                  {spaces?.items.map((item) => (
                    <MegaProductCard
                      key={item.href}
                      item={item}
                      explore={products.explore}
                      isAr={isAr}
                      active={isActive(item.href)}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </div>
              </section>
            </div>
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

export function LuxuryMobileNav({
  links,
  products,
  isAr = false,
}: {
  links: readonly NavLink[];
  products?: LuxuryProductMenu;
  isAr?: boolean;
}) {
  const isActive = useActivePath();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  const menuActive = products?.groups.some((group) => group.items.some((item) => isActive(item.href))) ?? false;

  return (
    <div className="lux-header-mobile lg:hidden">
      <nav className="lux-header-mobile__row flex gap-2 overflow-x-auto border-t border-lux-sand/40 py-3.5" aria-label="Mobile">
        {products ? (
          <button
            type="button"
            className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors lux-mobile-nav-link ${
              open || menuActive
                ? "border-lux-gold bg-lux-gold/10 text-lux-gold"
                : "border-lux-sand bg-lux-gold-muted/40 text-lux-ink-soft"
            }`}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {products.label}
          </button>
        ) : null}
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

      {products && open ? (
        <div className="lux-mega-mobile" role="region" aria-label={products.label}>
          {products.groups.map((group) => {
            const expanded = openGroup === group.id;
            return (
              <div key={group.id} className="lux-mega-mobile__group">
                <button
                  type="button"
                  className="lux-mega-mobile__toggle"
                  aria-expanded={expanded}
                  onClick={() => setOpenGroup(expanded ? null : group.id)}
                >
                  <span>{group.title}</span>
                  <span aria-hidden>{expanded ? "−" : "+"}</span>
                </button>
                {expanded ? (
                  <ul className="lux-mega-mobile__list">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          prefetch
                          className={`lux-mega-mobile__link${isActive(item.href) ? " lux-mega-mobile__link--active" : ""}`}
                          onClick={() => setOpen(false)}
                        >
                          <span className="lux-mega-mobile__num">{item.number}</span>
                          <span>
                            <span className="lux-mega-mobile__name">{productTitle(item, isAr)}</span>
                            <span className="lux-mega-mobile__en">{productAlt(item, isAr)}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
