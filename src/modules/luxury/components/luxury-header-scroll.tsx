"use client";

import { useEffect } from "react";

const SCROLLED_CLASS = "is-scrolled";
const THRESHOLD = 12;

/**
 * Keeps the luxury header sticky bar compact after scroll.
 * Attaches to the nearest `.lux-header` ancestor.
 */
export function LuxuryHeaderScroll() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".lux-header");
    if (!header) return;

    let ticking = false;

    const sync = () => {
      ticking = false;
      const scrolled = window.scrollY > THRESHOLD;
      header.classList.toggle(SCROLLED_CLASS, scrolled);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(sync);
    };

    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
