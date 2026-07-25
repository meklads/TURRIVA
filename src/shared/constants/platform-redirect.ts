/** Proposal / AI tools now live on the independent Ruwaq platform. */
export const RUWQ_PLATFORM_URL = "https://ruwaq.co";

const RUWQ_PLATFORM_PREFIXES = [
  "/workspace",
  "/proposals",
  "/how-it-works",
  "/pricing",
  "/templates",
  "/faq",
  "/services",
  "/design",
  "/insights",
  "/login",
  "/share",
] as const;

export function isRuwaqPlatformPath(pathname: string): boolean {
  return RUWQ_PLATFORM_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}

export function ruwaqPlatformRedirectUrl(pathname: string): string {
  if (pathname.startsWith("/share")) {
    return `${RUWQ_PLATFORM_URL}${pathname}`;
  }
  return RUWQ_PLATFORM_URL;
}
