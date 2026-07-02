import { db } from "@/shared/lib/db";

/**
 * In-house, zero-dependency usage tracking — no Sentry/PostHog account
 * needed to start seeing real traffic numbers. Every call is fire-and-forget
 * and swallows its own errors: a logging failure must never break the
 * actual user-facing action it's attached to.
 */
export type UsageEventType =
  | "proposal_created"
  | "proposal_generated"
  | "pdf_exported"
  | "guest_claimed";

export function logUsageEvent(
  type: UsageEventType,
  data: {
    userId?: string | null;
    proposalId?: string | null;
    metadata?: Record<string, unknown>;
  } = {}
): void {
  // Intentionally not awaited by callers — never delay the real response
  // waiting on an analytics write.
  db.usageEvent
    .create({
      data: {
        type,
        userId: data.userId ?? null,
        proposalId: data.proposalId ?? null,
        metadata: data.metadata ?? undefined,
      },
    })
    .catch((error) => {
      console.warn(`[usage-events] failed to log "${type}":`, error);
    });
}
