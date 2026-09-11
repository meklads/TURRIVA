import Image from "next/image";
import { LUXURY_HERO_IMAGE } from "@/modules/luxury/lib/nav";
import { FIT_OUT_PATH, getFitOutCopy } from "@/modules/luxury/lib/fit-out-copy";
import type { Locale } from "@/shared/i18n/locale";
import { localizePath } from "@/shared/i18n/path";
import { LocalizedLink } from "@/shared/components/localized-link";
import { LuxuryExperienceBriefForm } from "./luxury-experience-brief-form";
import { LuxuryStickyCta } from "./luxury-sticky-cta";

type Props = { locale: Locale };

export function LuxuryFitOutPage({ locale }: Props) {
  const copy = getFitOutCopy(locale);

  return (
    <>
      <section className="lux-section lux-section--white" aria-labelledby="fit-out-title">
        <div className="lux-container grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="lux-eyebrow">{copy.hero.eyebrow}</p>
            <h1 id="fit-out-title" className="lux-display mt-4 text-4xl leading-tight text-lux-ink md:text-5xl">
              {copy.hero.title}
            </h1>
            <p className="lux-body mt-5 max-w-xl text-lg leading-relaxed text-lux-ink-soft">{copy.hero.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#brief" className="lux-btn-primary">
                {copy.hero.cta}
              </a>
              <a href="#scope" className="lux-btn-outline">
                {copy.hero.secondary}
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lux-card sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={LUXURY_HERO_IMAGE}
              alt={locale === "ar" ? "فراغ داخلي مكتمل" : "A finished interior space"}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        </div>
      </section>

      <section className="lux-section lux-section--linen" aria-labelledby="fit-out-problem">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.problem.eyebrow}</p>
          <h2 id="fit-out-problem" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.problem.title}
          </h2>
          <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.problem.body}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {copy.problem.points.map((point) => (
              <li key={point} className="rounded-xl border border-lux-sand bg-white px-4 py-4 text-sm leading-relaxed text-lux-ink">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lux-section lux-section--white" aria-labelledby="fit-out-definition">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.definition.eyebrow}</p>
          <h2 id="fit-out-definition" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.definition.title}
          </h2>
          <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.definition.body}</p>
          <p className="mt-6 border-s-2 border-lux-gold ps-4 text-sm leading-relaxed text-lux-ink">{copy.definition.result}</p>
        </div>
      </section>

      <section className="lux-section lux-section--linen" aria-labelledby="fit-out-partner">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.partner.eyebrow}</p>
          <h2 id="fit-out-partner" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.partner.title}
          </h2>
          <p className="lux-body mt-4 text-lg leading-relaxed text-lux-ink-soft">{copy.partner.body}</p>
          <p className="mt-6 text-sm font-semibold text-lux-ink">{copy.partner.line}</p>
        </div>
      </section>

      <section id="scope" className="lux-section lux-section--white scroll-mt-24" aria-labelledby="fit-out-scope">
        <div className="lux-container max-w-4xl">
          <p className="lux-eyebrow">{copy.includes.eyebrow}</p>
          <h2 id="fit-out-scope" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.includes.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.includes.intro}</p>
          <ol className="mt-8">
            {copy.includes.items.map((item, index) => (
              <li key={item.title} className="grid gap-2 border-t border-lux-sand py-4 sm:grid-cols-[8rem_1fr]">
                <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</p>
                <div>
                  <h3 className="font-semibold text-lux-ink">{item.title}</h3>
                  <p className="lux-body mt-1 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-section lux-section--linen" aria-labelledby="fit-out-sizes">
        <div className="lux-container">
          <div className="max-w-3xl">
            <p className="lux-eyebrow">{copy.sizes.eyebrow}</p>
            <h2 id="fit-out-sizes" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
              {copy.sizes.title}
            </h2>
            <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.sizes.note}</p>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {copy.sizes.items.map((item, index) => (
              <li key={item.title} className="rounded-2xl border border-lux-sand bg-white p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</p>
                <h3 className="mt-3 font-semibold text-lux-ink">{item.title}</h3>
                <p className="lux-body mt-3 text-sm leading-relaxed text-lux-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-section lux-section--white" aria-labelledby="fit-out-method">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.method.eyebrow}</p>
          <h2 id="fit-out-method" className="lux-display mt-3 text-3xl leading-tight md:text-4xl">
            {copy.method.title}
          </h2>
          <ol className="mt-8">
            {copy.method.steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-lux-sand py-4">
                <span className="text-xs font-semibold tracking-[0.16em] text-lux-gold">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold text-lux-ink">{step.title}</h3>
                  <p className="lux-body mt-1 text-sm leading-relaxed text-lux-ink-soft">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lux-section lux-section--linen">
        <div className="lux-container max-w-3xl">
          <p className="lux-eyebrow">{copy.audience.eyebrow}</p>
          <h2 className="lux-display mt-3 text-3xl leading-tight md:text-4xl">{copy.audience.title}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {copy.audience.items.map((item) => (
              <li key={item} className="border-t border-lux-sand py-3 text-sm text-lux-ink">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-lux-ink-muted">{copy.audience.trust}</p>
        </div>
      </section>

      <section className="lux-section lux-section--white">
        <div className="lux-container max-w-3xl">
          <h2 className="lux-display text-3xl leading-tight md:text-4xl">{copy.related.title}</h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.related.body}</p>
          <LocalizedLink href={copy.related.href} className="mt-4 inline-flex text-sm font-semibold text-lux-gold">
            {copy.related.cta}
          </LocalizedLink>
        </div>
      </section>

      <section id="brief" className="lux-section lux-section--linen scroll-mt-24" aria-labelledby="fit-out-cta">
        <div className="lux-container max-w-3xl">
          <h2 id="fit-out-cta" className="lux-display text-3xl leading-tight md:text-4xl">
            {copy.close.title}
          </h2>
          <p className="lux-body mt-4 leading-relaxed text-lux-ink-soft">{copy.close.body}</p>
          <div className="mt-8 rounded-2xl border border-lux-sand bg-white p-5 shadow-lux-card sm:p-8">
            <LuxuryExperienceBriefForm
              locale={locale}
              source="fit_out"
              productLabel={copy.form.productLabel}
              initialProjectType="other"
              initialNeeds={["execution"]}
              unitTypes={copy.form.roles}
              choiceLegend={copy.form.choiceLegend}
              drawings={copy.form.drawings}
            />
          </div>
        </div>
      </section>

      <LuxuryStickyCta
        locale={locale}
        label={copy.hero.cta}
        href={`${localizePath(FIT_OUT_PATH, locale)}#brief`}
        source="fit_out"
      />
    </>
  );
}
