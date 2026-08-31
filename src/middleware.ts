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

function handleLocaleRouting(request: NextRequest): NextResponse | null {
  const { pathname } = request.nextUrl;
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value ?? null;
  const pathLocale = getLocaleFromPathname(pathname);
  const { pathname: barePath } = stripLocalePrefix(pathname);

  if (pathLocale) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = barePath;
    const response = NextResponse.rewrite(rewriteUrl);
    response.headers.set(LOCALE_HEADER, pathLocale);
    return withLocaleCookie(response, pathLocale);
  }

  if (shouldLocalizePath(barePath)) {
    const locale = resolveLocaleFromRequest(pathname, cookieLocale);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = barePath === "/" ? `/${locale}` : `/${locale}${barePath}`;
    const response = NextResponse.redirect(redirectUrl, 308);
    return withLocaleCookie(response, locale);
  }

  if (isLocale(cookieLocale)) {
    const response = NextResponse.next();
    response.headers.set(LOCALE_HEADER, cookieLocale);
    return response;
  }

  const response = NextResponse.next();
  response.headers.set(LOCALE_HEADER, defaultLocale);
  return response;
}

export function middleware(request: NextRequest) {
  const localeResponse = handleLocaleRouting(request);
  const { pathname } = request.nextUrl;
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
    "/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf)$).*)",
  ],
};
