import { isValidEmail } from "@/modules/company/lib/field-validators";

/**
 * Common free / personal email providers. Work email must use a custom domain
 * not listed here (e.g. @acme.com, @developer.sa).
 */
const PERSONAL_EMAIL_DOMAINS = new Set([
  "126.com",
  "139.com",
  "163.com",
  "aol.com",
  "att.net",
  "comcast.net",
  "fastmail.com",
  "gmail.com",
  "gmx.com",
  "gmx.de",
  "gmx.net",
  "googlemail.com",
  "hotmail.co.uk",
  "hotmail.com",
  "hotmail.fr",
  "icloud.com",
  "inbox.com",
  "live.com",
  "mac.com",
  "mail.com",
  "mail.ru",
  "me.com",
  "msn.com",
  "naver.com",
  "outlook.com",
  "outlook.fr",
  "outlook.sa",
  "pm.me",
  "proton.me",
  "protonmail.com",
  "qq.com",
  "rediffmail.com",
  "rocketmail.com",
  "sbcglobal.net",
  "tutanota.com",
  "verizon.net",
  "yahoo.co.in",
  "yahoo.co.uk",
  "yahoo.com",
  "yandex.com",
  "yandex.ru",
  "ymail.com",
  "zoho.com",
]);

export function extractEmailDomain(email: string): string | null {
  const trimmed = email.trim().toLowerCase();
  if (!isValidEmail(trimmed)) return null;
  const at = trimmed.lastIndexOf("@");
  if (at <= 0) return null;
  return trimmed.slice(at + 1);
}

export function isCompanyEmail(email: string): boolean {
  const domain = extractEmailDomain(email);
  if (!domain) return false;
  if (PERSONAL_EMAIL_DOMAINS.has(domain)) return false;
  // Reject obvious subdomains of blocked providers (e.g. mail.google.com is not valid anyway)
  const parts = domain.split(".");
  if (parts.length >= 2) {
    const base = parts.slice(-2).join(".");
    if (PERSONAL_EMAIL_DOMAINS.has(base)) return false;
  }
  return true;
}

export type CompanyEmailRejection = "invalid" | "personal";

export function classifyCompanyEmail(email: string): CompanyEmailRejection | null {
  const domain = extractEmailDomain(email);
  if (!domain) return "invalid";
  if (!isCompanyEmail(email)) return "personal";
  return null;
}
