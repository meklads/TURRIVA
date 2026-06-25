import { z } from "zod";
import { normalizeAppUrl } from "./request-url";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1).optional(),
  AUTH_SECRET: z.string().min(1).optional(),
  AUTH_URL: z.string().optional(),
  AUTH_GOOGLE_ID: z.string().optional(),
  AUTH_GOOGLE_SECRET: z.string().optional(),
  OPENAI_API_KEY: z.string().optional().default(""),
  STORAGE_ACCESS_KEY: z.string().optional(),
  STORAGE_SECRET_KEY: z.string().optional(),
  STORAGE_BUCKET: z.string().optional(),
  STORAGE_ENDPOINT: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.string().optional().default("http://localhost:3000"),
  NEXT_PUBLIC_APP_NAME: z.string().default("Saudi Proposal OS"),
  /** When set, HTTP Basic Auth protects dashboard/API (marketing stays public) */
  APP_GATE_PASSWORD: z.string().optional(),
  APP_GATE_USER: z.string().optional(),
});

type Env = z.infer<typeof envSchema>;

function parseEnv(): Env {
  const isBuildTime =
    process.env.NEXT_PHASE === "phase-production-build" ||
    process.env.npm_lifecycle_event === "build";

  const appUrl = normalizeAppUrl(
    process.env.NEXT_PUBLIC_APP_URL ?? process.env.AUTH_URL,
    isBuildTime ? "http://localhost:3000" : "https://ruwaq.co"
  );

  const normalized = {
    ...process.env,
    AUTH_URL: normalizeAppUrl(process.env.AUTH_URL, appUrl),
    NEXT_PUBLIC_APP_URL: appUrl,
  };

  const parsed = envSchema.safeParse(normalized);

  if (!parsed.success) {
    console.warn(
      "[env] Some variables missing:",
      JSON.stringify(parsed.error.flatten().fieldErrors)
    );
  }

  return {
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET ?? "runtime-placeholder-change-me",
    AUTH_URL: normalizeAppUrl(process.env.AUTH_URL, appUrl),
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? "",
    NEXT_PUBLIC_APP_URL: appUrl,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? "Saudi Proposal OS",
  };
}

export const env = parseEnv();

/** Google OAuth — supports Auth.js and common alternate env names */
export function getGoogleOAuthCredentials(): {
  clientId: string;
  clientSecret: string;
} | null {
  const clientId =
    process.env.AUTH_GOOGLE_ID?.trim() ||
    process.env.GOOGLE_CLIENT_ID?.trim() ||
    "";
  const clientSecret =
    process.env.AUTH_GOOGLE_SECRET?.trim() ||
    process.env.GOOGLE_CLIENT_SECRET?.trim() ||
    "";
  if (!clientId || !clientSecret) return null;
  return { clientId, clientSecret };
}

export const isGoogleAuthConfigured = () => getGoogleOAuthCredentials() !== null;
