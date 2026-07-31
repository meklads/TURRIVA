import { Check, X } from "lucide-react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

export function LuxuryComparisonSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.comparison;
  return (
    <section className="lux-section lux-section--linen">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{t.title}</h2>
      </div>
      <div className="lux-container mt-12 max-w-4xl overflow-hidden rounded-2xl border border-lux-sand/60 bg-white shadow-sm">
        <div className="grid grid-cols-2 border-b border-lux-sand/50 bg-lux-cream/40 text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
          <div className="px-4 py-3 sm:px-6">{t.traditionalHeader}</div>
          <div className="border-s border-lux-sand/50 px-4 py-3 text-lux-gold sm:px-6">{t.turrivaHeader}</div>
        </div>
        {t.rows.map((row) => (
          <div
            key={row.traditional}
            className="grid grid-cols-2 border-b border-lux-sand/40 last:border-b-0"
          >
            <div className="flex gap-2 px-4 py-4 text-sm text-lux-ink-soft sm:px-6">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-lux-stone" aria-hidden />
              <span>{row.traditional}</span>
            </div>
            <div className="flex gap-2 border-s border-lux-sand/40 bg-lux-gold-muted/30 px-4 py-4 text-sm sm:px-6">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-lux-gold" aria-hidden />
              <span>{row.turriva}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
