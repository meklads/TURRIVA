import { createHash, randomBytes } from "crypto";
import { cookies } from "next/headers";
import { safeEqual } from "@/shared/lib/lead-automation";

export const CSRF_COOKIE = "turriva_csrf";
export const CSRF_HEADER = "x-csrf-token";

function hashToken(token: string): string {
  const salt = process.env.AUTH_SECRET?.trim() || process.env.FORM_CSRF_SECRET?.trim() || "turriva-csrf";
  return createHash("sha256").update(`${salt}:${token}`).digest("hex");
}

export function createCsrfToken(): string {
  return randomBytes(24).toString("hex");
}

export async function setCsrfCookie(token: string): Promise<void> {
  const jar = await cookies();
  jar.set(CSRF_COOKIE, hashToken(token), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}

export async function validateCsrfHeader(headerToken: string | null): Promise<boolean> {
  if (!headerToken || headerToken.length < 16) return false;
  const jar = await cookies();
  const cookieHash = jar.get(CSRF_COOKIE)?.value;
  if (!cookieHash) return false;
  return safeEqual(cookieHash, hashToken(headerToken));
}

/** Allow requests from same site (Origin/Referer) as a handshake when CSRF cookie absent (legacy forms). */
export function isTrustedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const host = req.headers.get("host");
  if (!host) return false;

  const allowed = new Set<string>();
  const app = process.env.NEXT_PUBLIC_APP_URL?.trim() || process.env.AUTH_URL?.trim();
  if (app) {
    try {
      allowed.add(new URL(app).host);
    } catch {
      /* ignore */
    }
  }
  allowed.add(host);

  const check = (value: string | null) => {
    if (!value) return false;
    try {
      return allowed.has(new URL(value).host);
    } catch {
      return false;
    }
  };

  if (origin) return check(origin);
  if (referer) return check(referer);
  // Same-origin navigations / some clients omit Origin — allow with rate limit only.
  return true;
}
