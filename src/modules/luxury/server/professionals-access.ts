import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import path from "path";

export const PROFESSIONALS_COOKIE = "turriva_professionals_access";

const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 30;

export function getProfessionalsContentDir(): string {
  return path.join(process.cwd(), "content", "professionals");
}

function getSecret(): string {
  return process.env.AUTH_SECRET || "portfolio-dev-only";
}

export function createProfessionalsAccessToken(email: string): string {
  const normalized = email.trim().toLowerCase();
  const exp = Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;
  const payload = `${normalized}:${exp}`;
  const sig = createHmac("sha256", getSecret()).update(payload).digest("base64url");
  return `${Buffer.from(payload).toString("base64url")}.${sig}`;
}

export function verifyProfessionalsAccessToken(token: string): string | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadB64, sig] = parts;
  let payload: string;
  try {
    payload = Buffer.from(payloadB64, "base64url").toString("utf8");
  } catch {
    return null;
  }

  const expectedSig = createHmac("sha256", getSecret()).update(payload).digest("base64url");
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expectedSig);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }

  const colon = payload.lastIndexOf(":");
  if (colon <= 0) return null;
  const email = payload.slice(0, colon);
  const exp = parseInt(payload.slice(colon + 1), 10);
  if (!email || !Number.isFinite(exp) || exp < Math.floor(Date.now() / 1000)) return null;
  return email;
}

export async function hasProfessionalsAccessFromCookies(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(PROFESSIONALS_COOKIE)?.value;
  if (!token) return false;
  return verifyProfessionalsAccessToken(token) !== null;
}

export function verifyProfessionalsAccessFromRequest(req: NextRequest): string | null {
  const token = req.cookies.get(PROFESSIONALS_COOKIE)?.value;
  if (!token) return null;
  return verifyProfessionalsAccessToken(token);
}

export function professionalsCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: TOKEN_TTL_SECONDS,
  };
}
