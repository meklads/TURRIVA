import Image from "next/image";
import { LocalizedLink } from "@/shared/components/localized-link";
import { getRepositionCopy } from "@/modules/luxury/lib/reposition-copy";
import { CASE_STUDIES } from "@/modules/luxury/lib/case-studies";
import type { Locale } from "@/shared/i18n/locale";

type Props = { locale: Locale };

export function LuxuryDefinitionSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--white lux-definition" aria-labelledby="lux-definition-title">
      <div className="lux-container max-w-3xl">
        <p className="lux-eyebrow">{copy.definition.eyebrow}</p>
        <h2 id="lux-definition-title" className="lux-display mt-3 text-3xl leading-tight text-lux-ink md:text-4xl">
          {copy.definition.title}
        </h2>
        <p className="lux-definition__audiences mt-5">{copy.definition.audiences}</p>
        <p className="lux-body mt-5 text-lg leading-relaxed text-lux-ink-soft">{copy.definition.body}</p>
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
            <LocalizedLink href="#brief" className="lux-btn-primary inline-flex">
              {copy.developers.cta}
            </LocalizedLink>
            <LocalizedLink href="/real-estate-experience" className="lux-btn-outline inline-flex">
              {copy.featured.cta}
            </LocalizedLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function LuxuryProductsWeightedSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);
  const isAr = locale === "ar";

  return (
    <section className="lux-section lux-section--white lux-products-weighted" aria-labelledby="lux-products-title">
      <div className="lux-container">
        <div className="max-w-3xl">
          <p className="lux-eyebrow">{copy.products.eyebrow}</p>
          <h2 id="lux-products-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.products.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.products.intro}</p>
        </div>

        <ul className="lux-products-weighted__primary mt-10">
          {copy.products.primary.map((item) => (
            <li key={item.href}>
              <LocalizedLink href={item.href} className="lux-product-card lux-product-card--primary group">
                <div className="lux-product-card__media">
                  <Image
                    src={item.image}
                    alt={isAr ? item.nameAr : item.nameEn}
                    fill
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="lux-product-card__body">
                  <h3 className="lux-display text-xl text-lux-ink">{isAr ? item.nameAr : item.nameEn}</h3>
                  <p className="lux-product-card__en">{isAr ? item.nameEn : item.nameAr}</p>
                  <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
                  <span className="lux-product-card__cta">{copy.products.learnMore}</span>
                </div>
              </LocalizedLink>
            </li>
          ))}
        </ul>

        <ul className="lux-products-weighted__secondary mt-6">
          {copy.products.secondary.map((item) => (
            <li key={item.href}>
              <LocalizedLink href={item.href} className="lux-product-card lux-product-card--secondary group">
                <div className="lux-product-card__media lux-product-card__media--sm">
                  <Image
                    src={item.image}
                    alt={isAr ? item.nameAr : item.nameEn}
                    fill
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="lux-product-card__body">
                  <h3 className="lux-display text-lg text-lux-ink">{isAr ? item.nameAr : item.nameEn}</h3>
                  <p className="lux-product-card__en">{isAr ? item.nameEn : item.nameAr}</p>
                  <p className="lux-body mt-2 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
                  <span className="lux-product-card__cta">{copy.products.learnMore}</span>
                </div>
              </LocalizedLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function LuxuryHomeCapabilitiesSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--linen lux-home-capabilities" aria-labelledby="lux-capabilities-title">
      <div className="lux-container">
        <div className="max-w-3xl">
          <p className="lux-eyebrow">{copy.capabilities.eyebrow}</p>
          <h2 id="lux-capabilities-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.capabilities.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.capabilities.intro}</p>
        </div>
        <ul className="lux-home-capabilities__grid mt-10">
          {copy.capabilities.items.map((item) => (
            <li key={item.title} className="lux-home-capabilities__item">
              <h3 className="text-sm font-semibold text-lux-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-lux-ink-soft">{item.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <LocalizedLink href="/services" className="lux-btn-outline inline-flex">
            {copy.capabilities.cta}
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}

export function LuxuryFeaturedExperienceSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--cream lux-featured-re" aria-labelledby="lux-featured-title">
      <div className="lux-container">
        <div className="lux-featured-re__grid">
          <div className="lux-featured-re__media">
            <Image
              src="/brand/turriva/makkah-charter-04.jpeg"
              alt={copy.featured.title}
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <div className="lux-featured-re__copy">
            <p className="lux-eyebrow">{copy.featured.eyebrow}</p>
            <h2 id="lux-featured-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
              {copy.featured.title}
            </h2>
            <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.featured.body}</p>
            <LocalizedLink href="/real-estate-experience" className="lux-btn-primary mt-8 inline-flex">
              {copy.featured.cta}
            </LocalizedLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LuxuryAlbumSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--white lux-album" aria-labelledby="lux-album-title">
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

export function LuxuryTeamExperienceSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);
  const isAr = locale === "ar";
  const studies = CASE_STUDIES.filter((study) => study.attribution === "team").slice(0, 3);

  return (
    <section className="lux-section lux-section--linen lux-team-experience" aria-labelledby="lux-team-title">
      <div className="lux-container">
        <div className="max-w-3xl">
          <p className="lux-eyebrow">{copy.team.eyebrow}</p>
          <h2 id="lux-team-title" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.team.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.team.intro}</p>
          <p className="lux-album__note mt-3">{copy.team.note}</p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {studies.map((study) => (
            <li key={study.slug}>
              <LocalizedLink href={`/our-work/${study.slug}`} className="lux-door-card group block h-full">
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-lux-stone">
                  <Image
                    src={study.image}
                    alt={isAr ? study.titleAr : study.titleEn}
                    fill
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-xs font-semibold tracking-[0.12em] text-lux-gold uppercase">
                  {isAr ? study.categoryAr : study.categoryEn}
                </p>
                <h3 className="lux-display mt-2 text-lg text-lux-ink">{isAr ? study.titleAr : study.titleEn}</h3>
                <p className="lux-body mt-2 text-sm leading-relaxed text-lux-ink-soft">
                  {isAr ? study.summaryAr : study.summaryEn}
                </p>
              </LocalizedLink>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <LocalizedLink href="/our-work" className="lux-btn-outline inline-flex">
            {copy.team.cta}
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}

/** @deprecated Prefer LuxuryProductsWeightedSection on homepage */
export function LuxuryProductGroupsSection({ locale }: Props) {
  return <LuxuryProductsWeightedSection locale={locale} />;
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
