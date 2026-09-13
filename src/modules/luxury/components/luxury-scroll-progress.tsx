"use client";

import { useEffect, useState } from "react";

/** Thin scroll-depth bar under the sticky luxury header. */
export function LuxuryScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="lux-scroll-progress" aria-hidden>
      <div className="lux-scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
