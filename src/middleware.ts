import { NextRequest, NextResponse } from "next/server";
import { isRemovedAppPath } from "@/shared/constants/removed-app-paths";
import { LOCALE_COOKIE, defaultLocale, isLocale } from "@/shared/i18n/locale";
import {
  LOCALE_HEADER,
  getLocaleFromPathname,
  resolveLocaleFromRequest,
  shouldLocalizePath,
  stripLocalePrefix,
} from "@/shared/i18n/path";
import {
  APP_GATE_REALM,
  getGateCredentials,
  isGateEnabled,
  shouldProtectPath,
  verifyBasicAuth,
} from "@/shared/lib/app-gate";

function withLocaleCookie(response: NextResponse, locale: string): NextResponse {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}

/** Pass locale to Server Components via request headers (response headers alone are not enough). */
function rewriteWithLocale(request: NextRequest, barePath: string, locale: string): NextResponse {
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = barePath;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  const response = NextResponse.rewrite(rewriteUrl, {
    request: { headers: requestHeaders },
  });
  response.headers.set(LOCALE_HEADER, locale);
  return withLocaleCookie(response, locale);
}

function nextWithLocale(request: NextRequest, locale: string): NextResponse {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);
  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set(LOCALE_HEADER, locale);
  return response;
}

function handleLocaleRouting(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value ?? null;
  const pathLocale = getLocaleFromPathname(pathname);
  const { pathname: barePath } = stripLocalePrefix(pathname);

  if (pathLocale) {
    return rewriteWithLocale(request, barePath, pathLocale);
  }

  if (shouldLocalizePath(barePath)) {
    const locale = resolveLocaleFromRequest(pathname, cookieLocale);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = barePath === "/" ? `/${locale}` : `/${locale}${barePath}`;
    const response = NextResponse.redirect(redirectUrl, 308);
    return withLocaleCookie(response, locale);
  }

  if (isLocale(cookieLocale)) {
    return nextWithLocale(request, cookieLocale);
  }

  return nextWithLocale(request, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Crawlers must reach sitemap/robots without auth or locale redirects.
  if (pathname === "/sitemap.xml" || pathname === "/robots.txt") {
    return NextResponse.next();
  }

  const localeResponse = handleLocaleRouting(request);
  const { pathname: gatePath } = stripLocalePrefix(pathname);

  if (isRemovedAppPath(gatePath)) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  if (!isGateEnabled()) {
    return localeResponse ?? NextResponse.next();
  }

  if (!shouldProtectPath(gatePath)) {
    return localeResponse ?? NextResponse.next();
  }

  const credentials = getGateCredentials();
  if (!credentials) {
    return localeResponse ?? NextResponse.next();
  }

  if (verifyBasicAuth(request.headers.get("authorization"), credentials)) {
    return localeResponse ?? NextResponse.next();
  }

  return new NextResponse(
    "Turriva · Pre-launch access only.\n\nتوريفا · الوصول للمعاينة قبل الإطلاق فقط.",
    {
      status: 401,
      headers: {
        "WWW-Authenticate": `Basic realm="${APP_GATE_REALM}", charset="UTF-8"`,
        "Cache-Control": "no-store",
      },
    }
  );
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|sitemap\\.xml|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf)$).*)",
  ],
};
