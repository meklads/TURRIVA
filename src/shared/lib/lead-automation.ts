import { createHmac, timingSafeEqual } from "crypto";
import type { BudgetRange, Timeline } from "@/modules/design/lib/lead-scoring";
import { logServerError } from "@/shared/lib/usage-events";

export type LeadPriority = "standard" | "high" | "enterprise";

export type LeadAutomationPayload = {
  name: string;
  phone: string;
  email?: string | null;
  message?: string | null;
  locale?: string | null;
  source?: string | null;
  projectType?: string | null;
  company?: string | null;
  budget?: BudgetRange | null;
  timeline?: Timeline | null;
  leadScore?: number | null;
  qualified?: boolean | null;
  priority: LeadPriority;
};

/** Enterprise flag: urgent timeline + high budget (or very high score). */
export function resolveLeadPriority(input: {
  budget?: BudgetRange | null;
  timeline?: Timeline | null;
  leadScore?: number | null;
  projectType?: string | null;
}): LeadPriority {
  const urgent = input.timeline === "immediate" || input.timeline === "1_month";
  const enterpriseBudget = input.budget === "over_200k" || input.budget === "80_200k";
  const b2b =
    input.projectType === "developer" ||
    input.projectType === "masterplan" ||
    input.projectType === "sales_gallery" ||
    input.projectType === "show_unit" ||
    input.projectType === "launch_exhibition" ||
    input.projectType === "extended_spatial" ||
    input.projectType === "custom_spatial";

  if (urgent && enterpriseBudget) return "enterprise";
  if ((input.leadScore ?? 0) >= 90 && urgent) return "enterprise";
  if (urgent && b2b) return "high";
  if ((input.leadScore ?? 0) >= 70) return "high";
  return "standard";
}

function signWebhookBody(body: string, secret: string): string {
  return createHmac("sha256", secret).update(body).digest("hex");
}

export async function dispatchCrmWebhook(payload: LeadAutomationPayload): Promise<boolean> {
  const url = process.env.LEAD_WEBHOOK_URL?.trim();
  if (!url) return false;

  const body = JSON.stringify({
    event: "lead.created",
    provider: "turriva",
    timestamp: new Date().toISOString(),
    lead: payload,
  });

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "User-Agent": "Turriva-Lead-Automation/1.0",
  };

  const secret = process.env.LEAD_WEBHOOK_SECRET?.trim();
  if (secret) {
    headers["X-Turriva-Signature"] = signWebhookBody(body, secret);
  }

  try {
    const res = await fetch(url, { method: "POST", headers, body, signal: AbortSignal.timeout(8000) });
    return res.ok;
  } catch (err) {
    logServerError("crm webhook", err);
    return false;
  }
}

/**
 * Optional Meta WhatsApp Cloud API welcome + brochure link.
 * No-ops when WHATSAPP_TOKEN / WHATSAPP_PHONE_NUMBER_ID unset.
 */
export async function sendWhatsAppWelcome(payload: LeadAutomationPayload): Promise<boolean> {
  const token = process.env.WHATSAPP_TOKEN?.trim();
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID?.trim();
  if (!token || !phoneNumberId) return false;

  const digits = payload.phone.replace(/\D/g, "");
  if (digits.length < 9) return false;
  const to = digits.startsWith("966") ? digits : digits.startsWith("0") ? `966${digits.slice(1)}` : `966${digits}`;

  const brochure =
    process.env.WHATSAPP_BROCHURE_URL?.trim() ||
    `${process.env.NEXT_PUBLIC_APP_URL ?? "https://turriva.com"}/docs/turriva-agency-pitch-kit.html`;

  const isAr = payload.locale !== "en";
  const text = isAr
    ? `مرحباً ${payload.name} — شكراً لطلبك عرض ProjectLaunch™ من توريفا.\nكتيّب الإطلاق: ${brochure}\nسنتواصل معك قريباً.`
    : `Hello ${payload.name} — thanks for requesting a ProjectLaunch™ demo from Turriva.\nLaunch brochure: ${brochure}\nWe’ll be in touch shortly.`;

  try {
    const res = await fetch(`https://graph.facebook.com/v19.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: text },
      }),
      signal: AbortSignal.timeout(8000),
    });
    return res.ok;
  } catch (err) {
    logServerError("whatsapp welcome", err);
    return false;
  }
}

export async function runLeadAutomation(payload: LeadAutomationPayload): Promise<{
  webhookSent: boolean;
  whatsappSent: boolean;
}> {
  const [webhookSent, whatsappSent] = await Promise.all([
    dispatchCrmWebhook(payload),
    payload.priority === "enterprise" || payload.priority === "high" || payload.qualified
      ? sendWhatsAppWelcome(payload)
      : Promise.resolve(false),
  ]);
  return { webhookSent, whatsappSent };
}

/** Timing-safe compare for CSRF / signatures. */
export function safeEqual(a: string, b: string): boolean {
  try {
    const ba = Buffer.from(a);
    const bb = Buffer.from(b);
    if (ba.length !== bb.length) return false;
    return timingSafeEqual(ba, bb);
  } catch {
    return false;
  }
}
