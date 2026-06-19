import type { CommercialMode } from "@/shared/types";
import type { Locale } from "@/shared/i18n/locale";

const REAL_ESTATE_DOMAIN = {
  ar: "قطاع العقار السعودي (تشطيب، fit-out، إشراف، صيانة، إدارة أملاك، استشارات عقارية)",
  en: "Saudi real estate sector (fit-out, finishing, supervision, maintenance, property management, real estate consulting)",
};

export function realEstateSystemRole(locale: Locale, role: string): string {
  const domain = REAL_ESTATE_DOMAIN[locale];
  return `${role} specializing in ${domain}. Write for Saudi business culture. Never invent prices, guarantees, legal commitments, or certifications.`;
}

export function commercialContext(
  budget: number,
  paymentType: string,
  commercialMode: CommercialMode,
  locale: Locale
): string {
  if (commercialMode === "estimate_only") {
    return locale === "ar"
      ? `الوضع: تقدير أولي فقط — السعر النهائي يُؤكد بعد المعاينة.\n${budget > 0 ? `مبلغ إرشادي: ${budget} ريال (ليس سعراً نهائياً)` : "لم يُحدد مبلغ إرشادي بعد."}\nطريقة الدفع المفضلة: ${paymentType}`
      : `Mode: preliminary estimate only — final price confirmed after site visit.\n${budget > 0 ? `Indicative amount: SAR ${budget} (not final)` : "No indicative amount provided yet."}\nPreferred payment: ${paymentType}`;
  }
  return locale === "ar"
    ? `السعر المعتمد: ${budget} ريال\nطريقة الدفع: ${paymentType}`
    : `Confirmed price: SAR ${budget}\nPayment: ${paymentType}`;
}
