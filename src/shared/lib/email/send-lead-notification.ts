import { Resend } from "resend";
import nodemailer from "nodemailer";
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

function isSmtpConfigured(): boolean {
  return Boolean(process.env.LEAD_SMTP_USER?.trim() && process.env.LEAD_SMTP_PASS?.trim());
}

export function isLeadEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim()) || isSmtpConfigured();
}

/** SMTP or a verified custom Resend domain (not onboarding@resend.dev). */
export function isLeadEmailProductionReady(): boolean {
  if (isSmtpConfigured()) return true;
  const from = process.env.RESEND_FROM_EMAIL?.trim() ?? "";
  return Boolean(from) && !from.includes("@resend.dev");
}

export function getLeadEmailProvider(): "smtp" | "resend" | "none" {
  if (isSmtpConfigured()) return "smtp";
  if (process.env.RESEND_API_KEY?.trim()) return "resend";
  return "none";
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

function buildEmailContent(payload: LeadNotificationPayload) {
  const sourceLabel = payload.source ?? "contact";
  const subject =
    payload.locale === "en"
      ? `[Turriva] New inquiry — ${payload.name} (${sourceLabel})`
      : `[توريفا] طلب جديد — ${payload.name} (${sourceLabel})`;

  const text = [
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
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject, text };
}

async function sendViaSmtp(
  to: string,
  payload: LeadNotificationPayload,
  cc?: string[]
): Promise<boolean> {
  const user = process.env.LEAD_SMTP_USER!.trim();
  const pass = process.env.LEAD_SMTP_PASS!.trim();
  const host = process.env.LEAD_SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.LEAD_SMTP_PORT?.trim() || "587");
  const from =
    process.env.LEAD_SMTP_FROM?.trim() || `Turriva Website <${user}>`;
  const { subject, text } = buildEmailContent(payload);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from,
      to,
      cc: cc?.length ? cc : undefined,
      replyTo: payload.email ?? undefined,
      subject,
      text,
    });
    return true;
  } catch (err) {
    console.error("[email] SMTP error (to=%s, from=%s):", to, from, err);
    return false;
  }
}

async function sendViaResend(
  to: string,
  payload: LeadNotificationPayload,
  cc?: string[]
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY!.trim();
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || "Turriva Website <onboarding@resend.dev>";
  const { subject, text } = buildEmailContent(payload);
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      cc,
      replyTo: payload.email ?? undefined,
      subject,
      text,
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

/** Sends a lead alert to LEAD_NOTIFICATION_EMAIL (default info@turriva.com). Prefers SMTP when configured. */
export async function sendLeadNotification(payload: LeadNotificationPayload): Promise<boolean> {
  if (!isLeadEmailConfigured()) {
    console.warn("[email] No SMTP or RESEND_API_KEY — lead saved to DB only");
    return false;
  }

  const to = process.env.LEAD_NOTIFICATION_EMAIL?.trim() || TURRIVA_PUBLIC_EMAIL;
  const ccRaw = process.env.LEAD_NOTIFICATION_CC?.trim();
  const cc = ccRaw ? ccRaw.split(",").map((e) => e.trim()).filter(Boolean) : undefined;

  if (isSmtpConfigured()) {
    return sendViaSmtp(to, payload, cc);
  }

  return sendViaResend(to, payload, cc);
}
