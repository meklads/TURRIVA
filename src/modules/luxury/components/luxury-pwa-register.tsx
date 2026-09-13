"use client";

import { useEffect } from "react";

/**
 * Registers the gallery offline service worker once on marketing surfaces.
 * Failures are silent — PWA is progressive enhancement for exhibition floors.
 */
export function LuxuryPwaRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    const register = () => {
      void navigator.serviceWorker.register("/sw-gallery.js", { scope: "/" }).catch(() => undefined);
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);

  return null;
}
