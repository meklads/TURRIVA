import type { NextRequest } from "next/server";

function isLocalHost(hostname: string): boolean {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "0.0.0.0";
}

/** Normalize browseable app URL — never https/0.0.0.0 for local dev. */
export function normalizeAppUrl(url: string | undefined, fallback: string): string {
  if (!url?.trim()) return fallback;

  let value = url.trim();
  if (!value.startsWith("http://") && !value.startsWith("https://")) {
    value = `https://${value}`;
  }

  try {
    const parsed = new URL(value);
    if (parsed.hostname === "0.0.0.0") {
      parsed.hostname = "localhost";
    }
    if (isLocalHost(parsed.hostname)) {
      parsed.protocol = "http:";
    }
    return parsed.origin;
  } catch {
    return fallback;
  }
}

/** Build a safe redirect URL from an incoming request. */
export function redirectUrl(req: NextRequest, pathname: string): URL {
  const forwardedHost = req.headers.get("x-forwarded-host");
  const forwardedProto = req.headers.get("x-forwarded-proto");
  const hostHeader = forwardedHost ?? req.headers.get("host") ?? req.nextUrl.host;

  let hostname = hostHeader.split(",")[0]?.trim().split(":")[0] ?? "localhost";
  let port = hostHeader.includes(":")
    ? hostHeader.split(":").pop() ?? ""
    : req.nextUrl.port;

  if (hostname === "0.0.0.0") {
    hostname = "localhost";
  }

  const local = isLocalHost(hostname);
  const protocol = local ? "http:" : `${forwardedProto ?? req.nextUrl.protocol}`.replace(/:$/, "") + ":";
  const portSuffix =
    port && port !== "80" && port !== "443" ? `:${port}` : "";

  return new URL(pathname, `${protocol}//${hostname}${portSuffix}`);
}
