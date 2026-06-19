import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  AUTH_SECRET: z.string().min(1),
  AUTH_URL: z.string().url(),
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
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_APP_NAME: z.string().default("Saudi Proposal OS"),
});

type Env = z.infer<typeof envSchema>;

function parseEnv(): Env {
  const parsed = envSchema.safeParse(process.env);
  const isBuildTime =
    process.env.NEXT_PHASE === "phase-production-build" ||
    process.env.npm_lifecycle_event === "build";

  if (!parsed.success) {
    console.error(
      "❌ Invalid environment variables:",
      JSON.stringify(parsed.error.flatten().fieldErrors, null, 2)
    );
    // During Docker/Coolify build, env vars are injected at runtime — not build time
    if (process.env.NODE_ENV === "production" && !isBuildTime) {
      throw new Error("Invalid environment variables");
    }
    return {
      DATABASE_URL:
        process.env.DATABASE_URL ?? "postgresql://localhost:5432/postgres",
      AUTH_SECRET: process.env.AUTH_SECRET ?? "build-time-placeholder-secret",
      AUTH_URL: process.env.AUTH_URL ?? "http://localhost:3000",
      OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? "",
      NEXT_PUBLIC_APP_URL:
        process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
      NEXT_PUBLIC_APP_NAME: "Saudi Proposal OS",
    };
  }

  return parsed.data;
}

export const env = parseEnv();
