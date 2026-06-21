/**
 * Preview / build-phase gate — HTTP Basic Auth for internal routes.
 * Set APP_GATE_PASSWORD in env; when unset, gate is disabled (local dev).
 */

export const APP_GATE_REALM = "Ruwaq Preview";

/** Marketing & public assets — always accessible */
export function isPublicAppPath(pathname: string): boolean {
  if (pathname === "/") return true;

  const publicPrefixes = [
    "/about",
    "/how-it-works",
    "/privacy",
    "/services",
    "/templates/sample",
  ];

  if (publicPrefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return true;
  }

  if (pathname.startsWith("/_next")) return true;
  if (pathname.startsWith("/brand")) return true;
  if (pathname.startsWith("/favicon")) return true;

  return false;
}

/** Public API — health checks + marketing sample only */
export function isPublicApiPath(pathname: string): boolean {
  if (pathname === "/api/health") return true;
  if (pathname.startsWith("/api/templates/ruwaq/sample")) return true;
  return false;
}

export function isGateEnabled(): boolean {
  return Boolean(process.env.APP_GATE_PASSWORD?.trim());
}

export function getGateCredentials(): { user: string; password: string } | null {
  const password = process.env.APP_GATE_PASSWORD?.trim();
  if (!password) return null;
  const user = process.env.APP_GATE_USER?.trim() || "ruwaq";
  return { user, password };
}

export function verifyBasicAuth(
  authorizationHeader: string | null,
  credentials: { user: string; password: string }
): boolean {
  if (!authorizationHeader?.startsWith("Basic ")) return false;

  try {
    const encoded = authorizationHeader.slice(6);
    const decoded = atob(encoded);
    const separator = decoded.indexOf(":");
    if (separator === -1) return false;

    const user = decoded.slice(0, separator);
    const password = decoded.slice(separator + 1);

    return user === credentials.user && password === credentials.password;
  } catch {
    return false;
  }
}

export function shouldProtectPath(pathname: string): boolean {
  if (isPublicAppPath(pathname)) return false;
  if (pathname.startsWith("/api/") && isPublicApiPath(pathname)) return false;
  return true;
}
