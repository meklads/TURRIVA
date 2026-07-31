import Link from "next/link";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";

export function LuxuryProductGrid({
  messages,
  locale: _locale,
}: {
  messages: LuxuryMessages;
  locale: Locale;
}) {
  const t = messages.products;
  return (
    <section id="products" className="lux-section lux-section--cream scroll-mt-24">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 className="lux-display lux-heading mt-6">{t.title}</h2>
      </div>
      <div className="lux-container mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {t.items.map((item) => (
          <Link key={item.title} href={item.href} className="lux-product-card group">
            <h3 className="lux-display text-lg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
            <span className="mt-4 text-xs font-semibold text-lux-gold group-hover:underline">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
