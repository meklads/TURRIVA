const WHATSAPP_SA = "966502786513";

export function buildWhatsAppHref(message: string): string {
  return `https://wa.me/${WHATSAPP_SA}?text=${encodeURIComponent(message)}`;
}

export function withUtm(url: string, campaign: string, medium = "referral"): string {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("utm_source", "turriva.com");
    parsed.searchParams.set("utm_medium", medium);
    parsed.searchParams.set("utm_campaign", campaign);
    return parsed.toString();
  } catch {
    return url;
  }
}
