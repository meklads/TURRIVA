import Image from "next/image";
import { LocalizedLink } from "@/shared/components/localized-link";
import { getConversionCopy } from "@/modules/luxury/lib/conversion-copy";
import { getRepositionCopy } from "@/modules/luxury/lib/reposition-copy";
import { CASE_STUDIES } from "@/modules/luxury/lib/case-studies";
import type { Locale } from "@/shared/i18n/locale";

type Props = { locale: Locale };

export function LuxuryDefinitionSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);

  return (
    <section className="lux-section lux-section--white lux-definition" aria-labelledby="lux-definition-title">
      <div className="lux-container">
        <div className="lux-definition__grid">
          <div className="lux-definition__copy">
            <p className="lux-eyebrow">{copy.definition.eyebrow}</p>
            <h2 id="lux-definition-title" className="lux-display lux-heading mt-3 text-lux-ink">
              {copy.definition.title}
            </h2>
            <p className="lux-definition__audiences mt-5">{copy.definition.audiences}</p>
            <p className="lux-body mt-5 text-lg leading-relaxed text-lux-ink-soft">{copy.definition.body}</p>
          </div>
          <div className="lux-definition__media">
            <Image
              src={copy.definition.image}
              alt={copy.definition.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 48vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function LuxuryDevelopersSection({ locale, compact = false }: Props & { compact?: boolean }) {
  const copy = getRepositionCopy(locale);

  return (
    <section
      id="developers"
      className={`lux-section lux-section--cream lux-developers scroll-mt-24${compact ? " lux-developers--compact" : ""}`}
      aria-labelledby="lux-developers-title"
    >
      <div className="lux-container">
        <div className={`lux-section-intro${compact ? " lux-section-intro--tight" : ""}`}>
          <p className="lux-eyebrow">{copy.developers.eyebrow}</p>
          <h2 id="lux-developers-title" className="lux-display lux-heading mt-3">
            {copy.developers.title}
          </h2>
          {compact ? null : (
            <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.developers.intro}</p>
          )}
        </div>
        <ul className="lux-equal-cards lux-developers__cards mt-8">
          {copy.developers.points.map((point) => (
            <li key={point.title} className="lux-door-card lux-door-card--media">
              <div className="lux-door-card__media">
                <Image
                  src={point.image}
                  alt={point.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div className="lux-door-card__body">
                <h3 className="lux-display text-xl text-lux-ink">{point.title}</h3>
                <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <LocalizedLink href="#brief" className="lux-btn-primary inline-flex">
            {copy.developers.cta}
          </LocalizedLink>
          {!compact ? (
            <LocalizedLink href="/real-estate-experience" className="lux-btn-outline inline-flex">
              {copy.featured.cta}
            </LocalizedLink>
          ) : null}
        </div>
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
        <div className="lux-section-intro">
          <p className="lux-eyebrow">{copy.products.eyebrow}</p>
          <p className="lux-products-weighted__frame">{copy.products.frame}</p>
          <h2 id="lux-products-title" className="lux-display lux-heading mt-3">
            {copy.products.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.products.intro}</p>
        </div>

        <p className="lux-products-weighted__tier-label">{copy.products.tierPrimary}</p>
        <ul className="lux-products-weighted__primary">
          {copy.products.primary.map((item) => (
            <li key={item.href}>
              <LocalizedLink href={item.href} className="lux-product-card lux-product-card--primary group">
                <div className="lux-product-card__media">
                  <Image
                    src={item.image}
                    alt={isAr ? item.nameAr : item.nameEn}
                    fill
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
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

        <p className="lux-products-weighted__tier-label">{copy.products.tierSecondary}</p>
        <ul className="lux-products-weighted__secondary">
          {copy.products.secondary.map((item) => (
            <li key={item.href}>
              <LocalizedLink href={item.href} className="lux-product-card lux-product-card--secondary group">
                <div className="lux-product-card__media lux-product-card__media--sm">
                  <Image
                    src={item.image}
                    alt={isAr ? item.nameAr : item.nameEn}
                    fill
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 20vw"
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
        <div className="lux-section-intro">
          <p className="lux-eyebrow">{copy.capabilities.eyebrow}</p>
          <h2 id="lux-capabilities-title" className="lux-display lux-heading mt-3">
            {copy.capabilities.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.capabilities.intro}</p>
        </div>
        <ul className="lux-home-capabilities__grid mt-10">
          {copy.capabilities.items.map((item, index) => (
            <li key={item.title} className="lux-home-capabilities__item">
              <span className="lux-home-capabilities__index" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="lux-home-capabilities__title">{item.title}</h3>
              <p className="lux-home-capabilities__body">{item.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <LocalizedLink href="#brief" className="lux-btn-outline inline-flex">
            {copy.capabilities.cta}
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}

/** Homepage combined path: execution journey + technical capabilities for B2B buyers. */
export function LuxuryExecutionCapabilitiesSection({ locale }: Props) {
  const journey = getConversionCopy(locale).journey;
  const copy = getRepositionCopy(locale);
  const pathSteps = journey.steps.slice(0, 4);

  return (
    <section
      id="launch-path"
      className="lux-section lux-section--linen lux-exec-cap scroll-mt-28"
      aria-labelledby="lux-exec-cap-title"
    >
      <div className="lux-container">
        <div className="lux-section-intro">
          <p className="lux-eyebrow">{journey.eyebrow}</p>
          <h2 id="lux-exec-cap-title" className="lux-display lux-heading mt-3">
            {journey.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{journey.intro}</p>
        </div>

        <ol className="lux-exec-cap__path mt-10">
          {pathSteps.map((step, index) => (
            <li key={step.title} className="lux-exec-cap__path-step">
              <span className="lux-exec-cap__path-num" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="lux-exec-cap__path-title">{step.title}</p>
                <p className="lux-exec-cap__path-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="lux-exec-cap__tech mt-12">
          <div className="lux-exec-cap__tech-head">
            <p className="lux-eyebrow">{copy.capabilities.eyebrow}</p>
            <h3 className="lux-display lux-exec-cap__tech-title mt-2">{copy.capabilities.title}</h3>
            <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{copy.capabilities.intro}</p>
          </div>
          <ul className="lux-home-capabilities__grid mt-8">
            {copy.capabilities.items.map((item, index) => (
              <li key={item.title} className="lux-home-capabilities__item">
                <span className="lux-home-capabilities__index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="lux-home-capabilities__title">{item.title}</h4>
                <p className="lux-home-capabilities__body">{item.description}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <LocalizedLink href="#brief" className="lux-btn-primary inline-flex">
              {copy.capabilities.cta}
            </LocalizedLink>
          </div>
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
          <div className="lux-featured-re__media lux-media-frame lux-media-frame--wide">
            <Image
              src="/brand/turriva/inspiration/living-walnut-interior.webp"
              alt={copy.featured.title}
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
          <div className="lux-featured-re__copy lux-sticky-panel">
            <p className="lux-eyebrow">{copy.featured.eyebrow}</p>
            <h2 id="lux-featured-title" className="lux-display lux-heading mt-3">
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
  const isAr = locale === "ar";
  const [featured, ...rest] = copy.album.items;
  const viewLabel = isAr ? "عرض الحالة" : "View case";

  if (!featured) return null;

  return (
    <section className="lux-section lux-album lux-album--proof" aria-labelledby="lux-album-title">
      <div className="lux-container">
        <div className="lux-album__intro">
          <p className="lux-eyebrow">{copy.album.eyebrow}</p>
          <div className="lux-divider-gold" />
          <h2 id="lux-album-title" className="lux-display lux-heading mt-6">
            {copy.album.title}
          </h2>
          <p className="lux-album__subtitle">{copy.album.subtitle}</p>
          <p className="lux-album__note">{copy.album.note}</p>
        </div>

        <LocalizedLink href={featured.href} className="lux-album__featured group">
          <div className="lux-album__featured-media">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="lux-album__img object-cover object-[center_40%]"
              sizes="(max-width: 900px) 100vw, 92vw"
              priority={false}
            />
            <span className="lux-album__veil" aria-hidden />
          </div>
          <div className="lux-album__featured-copy">
            <span className="lux-album__index-line" aria-hidden>
              01
            </span>
            <span className="lux-album__category">{featured.category}</span>
            <h3 className="lux-album__title lux-album__title--featured">{featured.title}</h3>
            <span className="lux-album__view">
              {viewLabel}
              <span aria-hidden>{isAr ? " ←" : " →"}</span>
            </span>
          </div>
        </LocalizedLink>

        {rest.length > 0 ? (
          <ul className="lux-album__mosaic">
            {rest.map((item, index) => (
              <li key={item.href + item.title}>
                <LocalizedLink href={item.href} className="lux-album__tile group">
                  <div className="lux-album__tile-media">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="lux-album__img object-cover object-[center_35%]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="lux-album__veil lux-album__veil--soft" aria-hidden />
                    <span className="lux-album__index-line lux-album__index-line--on-media" aria-hidden>
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="lux-album__tile-copy">
                    <span className="lux-album__category">{item.category}</span>
                    <h3 className="lux-album__title">{item.title}</h3>
                    <span className="lux-album__view lux-album__view--quiet">
                      {viewLabel}
                      <span aria-hidden>{isAr ? " ←" : " →"}</span>
                    </span>
                  </div>
                </LocalizedLink>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="lux-album__footer">
          <LocalizedLink href="/our-work" className="lux-btn-outline">
            {copy.album.cta}
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}

export function LuxuryTeamExperienceSection({ locale }: Props) {
  const copy = getRepositionCopy(locale);
  const isAr = locale === "ar";
  const studies = CASE_STUDIES.filter(
    (study) => study.attribution === "team" && study.delivery === "field_execution"
  ).slice(0, 3);

  return (
    <section className="lux-section lux-section--linen lux-team-experience" aria-labelledby="lux-team-title">
      <div className="lux-container">
        <div className="lux-section-intro">
          <p className="lux-eyebrow">{copy.team.eyebrow}</p>
          <h2 id="lux-team-title" className="lux-display lux-heading mt-3">
            {copy.team.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.team.intro}</p>
        </div>
        <ul className="lux-equal-cards mt-10">
          {studies.map((study) => (
            <li key={study.slug} className="lux-case-card">
              <LocalizedLink href={`/our-work/${study.slug}`} className="lux-door-card group block h-full">
                <div className="lux-media-frame lux-media-frame--wide mb-4 overflow-hidden rounded-lg">
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
              {study.sourceUrl ? (
                <p className="lux-case-ref">
                  {isAr ? (
                    <>
                      الحالة الكاملة موثّقة على{" "}
                      <a
                        href={study.sourceUrl.ar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lux-case-ref__link"
                      >
                        جرافيكس هاوس
                      </a>
                    </>
                  ) : (
                    <>
                      Full case documented on{" "}
                      <a
                        href={study.sourceUrl.en}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lux-case-ref__link"
                      >
                        Graphics House
                      </a>
                    </>
                  )}
                </p>
              ) : null}
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
  const journey = getConversionCopy(locale).journey;

  return (
    <section id="launch-path" className="lux-section lux-section--linen lux-method scroll-mt-28" aria-labelledby="lux-method-title">
      <div className="lux-container">
        <div className="lux-section-intro">
          <p className="lux-eyebrow">{journey.eyebrow}</p>
          <h2 id="lux-method-title" className="lux-display lux-heading mt-3">
            {journey.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{journey.intro}</p>
        </div>
        <ol className="lux-method__list mt-10">
          {journey.steps.map((step, index) => (
            <li key={step.title} className="lux-method__step">
              <p className="lux-method__label">
                {String(index + 1).padStart(2, "0")} {step.title}
              </p>
              <p className="lux-body text-sm leading-relaxed text-lux-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
