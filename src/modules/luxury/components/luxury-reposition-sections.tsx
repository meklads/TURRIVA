import { LocalizedLink } from "@/shared/components/localized-link";
import { getRepositionCopy } from "@/modules/luxury/lib/reposition-copy";
import type { Locale } from "@/shared/i18n/locale";

type Props = { locale: Locale };

export function LuxuryDefinitionSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--white" aria-labelledby="lux-definition-title">
      <div className="lux-container max-w-4xl">
        <p className="lux-eyebrow">{copy.definition.eyebrow}</p>
        <h2 id="lux-definition-title" className="lux-display mt-3 text-3xl leading-tight text-lux-ink md:text-4xl">
          {copy.definition.title}
        </h2>
        <p className="lux-body mt-5 max-w-3xl text-lg leading-relaxed text-lux-ink-soft">{copy.definition.body}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {copy.definition.notes.map((note) => (
            <li key={note} className="rounded-xl border border-lux-sand bg-white px-4 py-4 text-sm leading-relaxed text-lux-ink-soft">
              {note}
            </li>
          ))}
        </ul>
        <LocalizedLink href="/design-build" className="mt-6 inline-flex text-sm font-semibold text-lux-gold">
          {copy.definition.pathCta}
        </LocalizedLink>
      </div>
    </section>
  );
}

export function LuxuryDevelopersSection({ locale, compact = false }: Props & { compact?: boolean }) {
  const copy = getRepositionCopy(locale);

  return (
    <section id="developers" className="lux-section scroll-mt-24" aria-labelledby={compact ? undefined : "lux-developers-title"}>
      <div className="lux-container">
        {compact ? null : (
          <div className="max-w-3xl">
            <p className="lux-eyebrow">{copy.developers.eyebrow}</p>
            <h2 id="lux-developers-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
              {copy.developers.title}
            </h2>
            <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.developers.intro}</p>
          </div>
        )}
        <ul className={`grid gap-4 md:grid-cols-3 ${compact ? "" : "mt-10"}`}>
          {copy.developers.points.map((point) => (
            <li key={point.title} className="rounded-2xl border border-lux-sand bg-white p-6 shadow-lux-card">
              <h3 className="lux-display text-xl text-lux-ink">{point.title}</h3>
              <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{point.body}</p>
            </li>
          ))}
        </ul>
        {!compact ? (
          <LocalizedLink href="/real-estate-experience" className="lux-btn-primary mt-8 inline-flex">
            {copy.developers.cta}
          </LocalizedLink>
        ) : null}
      </div>
    </section>
  );
}

export function LuxuryScopesSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--linen" aria-labelledby="lux-scopes-title">
      <div className="lux-container">
        <div className="max-w-3xl">
          <p className="lux-eyebrow">{copy.scopes.eyebrow}</p>
          <h2 id="lux-scopes-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.scopes.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.scopes.intro}</p>
        </div>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {copy.scopes.items.map((item, index) => (
            <li key={item.title} className="rounded-2xl border border-lux-sand bg-white p-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</p>
              <h3 className="mt-3 font-semibold text-lux-ink">{item.title}</h3>
              <p className="lux-body mt-2 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function LuxuryMethodSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--white" aria-labelledby="lux-method-title">
      <div className="lux-container max-w-5xl">
        <div className="max-w-3xl">
          <p className="lux-eyebrow">{copy.method.eyebrow}</p>
          <h2 id="lux-method-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.method.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.method.intro}</p>
        </div>
        <ol className="mt-10 grid gap-3">
          {copy.method.steps.map((step, index) => (
            <li key={step.title} className="grid gap-2 border-t border-lux-sand py-4 sm:grid-cols-[8rem_1fr] sm:items-baseline">
              <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">
                0{index + 1} · {step.title}
              </p>
              <p className="lux-body text-sm leading-relaxed text-lux-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
