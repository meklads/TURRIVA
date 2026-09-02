"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  paths: readonly string[];
};

/** Warm the App Router cache for primary marketing routes after first paint. */
export function MarketingNavPrefetch({ paths }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!paths.length) return;

    const prefetchAll = () => {
      for (const path of paths) {
        try {
          router.prefetch(path);
        } catch {
          /* prefetch is best-effort */
        }
      }
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetchAll, { timeout: 1800 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = window.setTimeout(prefetchAll, 250);
    return () => window.clearTimeout(timer);
  }, [paths, router]);

  return null;
}
