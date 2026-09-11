import Image from "next/image";
import { LocalizedLink } from "@/shared/components/localized-link";
import { getRepositionCopy } from "@/modules/luxury/lib/reposition-copy";
import type { Locale } from "@/shared/i18n/locale";

type Props = { locale: Locale };

export function LuxuryDefinitionSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--white lux-definition" aria-labelledby="lux-definition-title">
      <div className="lux-container max-w-4xl">
        <p className="lux-eyebrow">{copy.definition.eyebrow}</p>
        <h2 id="lux-definition-title" className="lux-display mt-3 text-3xl leading-tight text-lux-ink md:text-4xl lg:text-[2.75rem]">
          {copy.definition.title}
        </h2>
        <p className="lux-definition__audiences mt-5">{copy.definition.audiences}</p>
        <p className="lux-body mt-5 max-w-3xl text-lg leading-relaxed text-lux-ink-soft">{copy.definition.body}</p>
        <ul className="lux-definition__notes mt-10">
          {copy.definition.notes.map((note) => (
            <li key={note} className="lux-definition__note">
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LuxuryDevelopersSection({ locale, compact = false }: Props & { compact?: boolean }) {
  const copy = getRepositionCopy(locale);

  return (
    <section
      id="developers"
      className="lux-section lux-section--cream lux-developers scroll-mt-24"
      aria-labelledby={compact ? undefined : "lux-developers-title"}
    >
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
            <li key={point.title} className="lux-door-card">
              <h3 className="lux-display text-xl text-lux-ink">{point.title}</h3>
              <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{point.body}</p>
            </li>
          ))}
        </ul>
        {!compact ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LocalizedLink href="/real-estate-experience" className="lux-btn-primary inline-flex">
              {copy.developers.cta}
            </LocalizedLink>
            <LocalizedLink href="/fit-out" className="lux-btn-outline inline-flex">
              {copy.developers.fitOutCta}
            </LocalizedLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function LuxuryAlbumSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--linen lux-album" aria-labelledby="lux-album-title">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{copy.album.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 id="lux-album-title" className="lux-display lux-heading mt-6">
          {copy.album.title}
        </h2>
        <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{copy.album.subtitle}</p>
        <p className="lux-album__note mx-auto mt-3 max-w-xl">{copy.album.note}</p>
      </div>
      <div className="lux-container mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {copy.album.items.map((item, index) => (
          <LocalizedLink
            key={item.href + item.title}
            href={item.href}
            className="lux-gallery-figure lux-album__frame group block"
          >
            <figure>
              <div className="lux-gallery-media">
                <span className="lux-album__index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="lux-gallery-caption">
                <span className="lux-gallery-category">{item.category}</span>
                <span className="lux-display mt-1 block text-lg text-lux-ink transition-colors group-hover:text-lux-gold">
                  {item.title}
                </span>
              </figcaption>
            </figure>
          </LocalizedLink>
        ))}
      </div>
      <div className="lux-container mt-12 text-center">
        <LocalizedLink href="/our-work" className="lux-btn-outline">
          {copy.album.cta}
        </LocalizedLink>
      </div>
    </section>
  );
}

export function LuxuryProductGroupsSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--white lux-doors" aria-labelledby="lux-groups-title">
      <div className="lux-container">
        <div className="max-w-3xl">
          <p className="lux-eyebrow">{copy.groups.eyebrow}</p>
          <h2 id="lux-groups-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.groups.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.groups.intro}</p>
        </div>
        <ul className="lux-doors__grid mt-10">
          {copy.groups.items.map((item, index) => (
            <li key={item.title} className="lux-door-card lux-door-card--tall">
              <p className="lux-door-card__index">0{index + 1}</p>
              <h3 className="lux-display mt-3 text-xl text-lux-ink">{item.title}</h3>
              <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.question}</p>
              <div className="lux-door-card__links mt-auto pt-6">
                {item.links.map((link) => (
                  <LocalizedLink key={link.href} href={link.href} className="lux-door-card__link">
                    {link.label}
                  </LocalizedLink>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LuxuryMethodSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--white lux-method" aria-labelledby="lux-method-title">
      <div className="lux-container max-w-5xl">
        <div className="max-w-3xl">
          <p className="lux-eyebrow">{copy.method.eyebrow}</p>
          <h2 id="lux-method-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.method.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.method.intro}</p>
        </div>
        <ol className="lux-method__list mt-10">
          {copy.method.steps.map((step, index) => (
            <li key={step.title} className="lux-method__step">
              <p className="lux-method__label">
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
