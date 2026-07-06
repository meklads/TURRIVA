import Link from "next/link";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import type { Locale } from "@/shared/i18n/locale";

type PageKey = "interiorDesign" | "construction" | "ourWork" | "about" | "contact";

export function LuxuryInnerPage({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKey;
}) {
  const t = getLuxuryMessages(locale);
  const content = t.pages[page];

  return (
    <section className="lux-section">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.brand.tagline}</p>
        <div className="lux-divider-gold" />
        <h1 className="lux-display mt-6 text-4xl sm:text-5xl">{content.title}</h1>
        <p className="lux-body mx-auto mt-6">{content.intro}</p>

        {page === "contact" && (
          <form className="mx-auto mt-12 max-w-md space-y-4 text-start">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                {t.pages.contact.formName}
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-lux-sand bg-white px-4 py-3 text-sm text-lux-ink focus:border-lux-gold focus:outline-none focus:ring-2 focus:ring-lux-gold/20"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                {t.pages.contact.formEmail}
              </label>
              <input
                type="email"
                dir="ltr"
                className="w-full rounded-xl border border-lux-sand bg-white px-4 py-3 text-sm text-lux-ink focus:border-lux-gold focus:outline-none focus:ring-2 focus:ring-lux-gold/20"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-lux-ink-muted">
                {t.pages.contact.formMessage}
              </label>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-lux-sand bg-white px-4 py-3 text-sm text-lux-ink focus:border-lux-gold focus:outline-none focus:ring-2 focus:ring-lux-gold/20"
              />
            </div>
            <button type="button" className="lux-btn-primary w-full">
              {t.pages.contact.formSubmit}
            </button>
          </form>
        )}

        {page !== "contact" && (
          <Link href="/contact" className="lux-btn-primary mt-10 inline-flex">
            {t.cta.button}
          </Link>
        )}
      </div>
    </section>
  );
}
