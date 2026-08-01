import { Resend } from "resend";
import { TURRIVA_PUBLIC_EMAIL } from "@/shared/constants/brand";

export type LeadNotificationPayload = {
  name: string;
  phone: string;
  email?: string | null;
  message?: string | null;
  source?: string | null;
  projectType?: string | null;
  locale?: string | null;
  city?: string | null;
  interest?: string | null;
};

export function isLeadEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim());
}

/** True when sending from a verified custom domain (not Resend's test sender). */
export function isLeadEmailProductionReady(): boolean {
  const from = process.env.RESEND_FROM_EMAIL?.trim() ?? "";
  return Boolean(from) && !from.includes("@resend.dev");
}

/** Masked destination for /api/health — confirms what the running container reads. */
export function getLeadNotificationDestinationMasked(): string {
  const raw = process.env.LEAD_NOTIFICATION_EMAIL?.trim();
  if (!raw) return `${TURRIVA_PUBLIC_EMAIL} (env unset — default)`;
  const at = raw.indexOf("@");
  if (at <= 0) return "invalid";
  const local = raw.slice(0, at);
  const domain = raw.slice(at + 1);
  const masked = local.length <= 2 ? `${local[0] ?? ""}***` : `${local.slice(0, 3)}***`;
  return `${masked}@${domain}`;
}

/** Sends a lead alert to info@turriva.com (or LEAD_NOTIFICATION_EMAIL). Returns false if skipped/failed. */
export async function sendLeadNotification(payload: LeadNotificationPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set — lead saved to DB only");
    return false;
  }

  const to = process.env.LEAD_NOTIFICATION_EMAIL?.trim() || TURRIVA_PUBLIC_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || "Turriva Website <onboarding@resend.dev>";
  const ccRaw = process.env.LEAD_NOTIFICATION_CC?.trim();
  const cc = ccRaw ? ccRaw.split(",").map((e) => e.trim()).filter(Boolean) : undefined;

  const sourceLabel = payload.source ?? "contact";
  const subject =
    payload.locale === "en"
      ? `[Turriva] New inquiry — ${payload.name} (${sourceLabel})`
      : `[توريفا] طلب جديد — ${payload.name} (${sourceLabel})`;

  const lines = [
    `الاسم / Name: ${payload.name}`,
    `الجوال / Phone: ${payload.phone}`,
    payload.email ? `البريد / Email: ${payload.email}` : null,
    payload.source ? `المصدر / Source: ${payload.source}` : null,
    payload.projectType ? `نوع المشروع / Products: ${payload.projectType}` : null,
    payload.city ? `المدينة / City: ${payload.city}` : null,
    payload.interest ? `Interest: ${payload.interest}` : null,
    payload.locale ? `Locale: ${payload.locale}` : null,
    "",
    "—",
    payload.message ?? "",
  ].filter((line) => line !== null);

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      cc,
      replyTo: payload.email ?? undefined,
      subject,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("[email] Resend error (to=%s, from=%s):", to, from, error);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[email] sendLeadNotification failed:", err);
    return false;
  }
}
