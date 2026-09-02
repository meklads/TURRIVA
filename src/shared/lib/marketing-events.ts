type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackMarketingEvent(name: string, props?: EventProps) {
  if (typeof window === "undefined") return;

  try {
    window.plausible?.(name, props ? { props } : undefined);
  } catch {
    /* analytics optional */
  }

  try {
    window.gtag?.("event", name, props ?? {});
  } catch {
    /* analytics optional */
  }
}
