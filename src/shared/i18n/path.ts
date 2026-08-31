import { defaultLocale, isLocale, type Locale } from "./locale";

export const LOCALE_HEADER = "x-turriva-locale";

/** Marketing routes that receive /ar and /en URL prefixes. */
export const LOCALIZED_MARKETING_PREFIXES = [
  "/",
  "/about",
  "/contact",
  "/construction",
  "/interior-design",
  "/our-work",
  "/portfolio",
  "/privacy",
  "/terms",
  "/villas",
  "/projects",
  "/styles",
  "/design",
  "/faq",
  "/services",
  "/insights",
  "/locations",
] as const;

const SKIP_LOCALE_PREFIX = ["/api", "/workspace", "/share", "/_next", "/brand", "/uploads", "/favicon"];

export function stripLocalePrefix(pathname: string): { locale: Locale | null; pathname: string } {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  if (isLocale(maybeLocale)) {
    const rest = segments.slice(2).join("/");
    return { locale: maybeLocale, pathname: rest ? `/${rest}` : "/" };
  }
  return { locale: null, pathname: pathname || "/" };
}

export function shouldLocalizePath(pathname: string): boolean {
  if (SKIP_LOCALE_PREFIX.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return false;
  }
  const { pathname: bare } = stripLocalePrefix(pathname);
  return LOCALIZED_MARKETING_PREFIXES.some(
    (p) => bare === p || (p !== "/" && bare.startsWith(`${p}/`))
  );
}

export function localizePath(path: string, locale: Locale): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (path.startsWith("/api") || path.startsWith("/workspace") || path.startsWith("/share")) {
    return path;
  }

  const hashIndex = path.indexOf("#");
  const queryIndex = path.indexOf("?");
  const cutIndex =
    hashIndex === -1
      ? queryIndex
      : queryIndex === -1
        ? hashIndex
        : Math.min(hashIndex, queryIndex);

  const base = cutIndex === -1 ? path : path.slice(0, cutIndex);
  const suffix = cutIndex === -1 ? "" : path.slice(cutIndex);

  const { pathname: bare } = stripLocalePrefix(base);
  if (!shouldLocalizePath(bare)) return path;

  const localized = bare === "/" ? `/${locale}` : `/${locale}${bare}`;
  return `${localized}${suffix}`;
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  return stripLocalePrefix(pathname).locale;
}

export function resolveLocaleFromRequest(pathname: string, cookieLocale?: string | null): Locale {
  const fromPath = getLocaleFromPathname(pathname);
  if (fromPath) return fromPath;
  if (isLocale(cookieLocale)) return cookieLocale;
  return defaultLocale;
}
