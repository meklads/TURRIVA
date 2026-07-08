import { createHash } from "crypto";
import type { NextRequest } from "next/server";
import { db } from "@/shared/lib/db";

export const GUEST_COOKIE = "ruwaq_guest_token";
const MAX_PREVIEW_PER_IP_PER_DAY = 2;

export function hashClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || req.headers.get("x-real-ip") || "unknown";
  const salt = process.env.AUTH_SECRET || "ruwaq-guest";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 24);
}

export async function getGuestSessionFromRequest(req: NextRequest) {
  const token = req.cookies.get(GUEST_COOKIE)?.value;
  if (!token) return null;
  return db.designGuestSession.findUnique({ where: { guestToken: token } });
}

export async function getOrCreateGuestSession(
  req: NextRequest
): Promise<{ session: Awaited<ReturnType<typeof db.designGuestSession.findUnique>> & object } | { blocked: true }> {
  const existing = await getGuestSessionFromRequest(req);
  if (existing) return { session: existing };

  const ipHash = hashClientIp(req);
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const recentPreviews = await db.designGuestSession.count({
    where: { ipHash, previewUsed: true, createdAt: { gte: since } },
  });

  if (recentPreviews >= MAX_PREVIEW_PER_IP_PER_DAY) {
    return { blocked: true };
  }

  const session = await db.designGuestSession.create({
    data: { ipHash },
  });

  return { session };
}

export function guestCookieOptions(maxAgeSeconds = 60 * 60 * 24 * 30) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: maxAgeSeconds,
  };
}

export function remainingBonusCredits(session: {
  bonusCredits: number;
  bonusUsed: number;
}): number {
  return Math.max(0, session.bonusCredits - session.bonusUsed);
}

export function canGuestGenerate(session: {
  previewUsed: boolean;
  bonusCredits: number;
  bonusUsed: number;
}): "preview" | "bonus" | false {
  if (!session.previewUsed) return "preview";
  if (remainingBonusCredits(session) > 0) return "bonus";
  return false;
}
