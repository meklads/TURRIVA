const WHATSAPP_SA = "966502786513";

export function buildWhatsAppHref(message: string): string {
  return `https://wa.me/${WHATSAPP_SA}?text=${encodeURIComponent(message)}`;
}

/** Prefill for sales brief — company, project type, city, target date placeholders. */
export function buildSalesBriefWhatsAppMessage(locale: "ar" | "en"): string {
  if (locale === "ar") {
    return [
      "مرحباً توريفا — أود بدء موجز مشروع.",
      "",
      "اسم الشركة:",
      "نوع المشروع:",
      "المدينة:",
      "الموعد المستهدف:",
    ].join("\n");
  }
  return [
    "Hello Turriva — I would like to start a project brief.",
    "",
    "Company name:",
    "Project type:",
    "City:",
    "Target date:",
  ].join("\n");
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
