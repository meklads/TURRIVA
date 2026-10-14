import { createHash } from "crypto";

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

function clientKey(ip: string, route: string): string {
  return createHash("sha256").update(`${route}:${ip}`).digest("hex").slice(0, 32);
}

/**
 * Simple in-memory sliding window rate limit (per instance).
 * Suitable for form spam control; pair with edge WAF in production.
 */
export function checkRateLimit(opts: {
  ip: string;
  route: string;
  limit: number;
  windowMs: number;
}): { ok: boolean; remaining: number; retryAfterSec: number } {
  const now = Date.now();
  const key = clientKey(opts.ip || "unknown", opts.route);
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + opts.windowMs });
    return { ok: true, remaining: opts.limit - 1, retryAfterSec: Math.ceil(opts.windowMs / 1000) };
  }

  if (existing.count >= opts.limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  buckets.set(key, existing);
  return { ok: true, remaining: opts.limit - existing.count, retryAfterSec: Math.ceil((existing.resetAt - now) / 1000) };
}

export function getRequestIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return req.headers.get("cf-connecting-ip") || req.headers.get("x-real-ip") || "unknown";
}
