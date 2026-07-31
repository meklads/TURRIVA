/** App/tool routes removed from the public Turriva site (hosted elsewhere). */
const REMOVED_APP_PREFIXES = [
  "/workspace",
  "/proposals",
  "/how-it-works",
  "/pricing",
  "/templates",
  "/faq",
  "/services",
  "/insights",
  "/login",
  "/share",
] as const;

export function isRemovedAppPath(pathname: string): boolean {
  return REMOVED_APP_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}
