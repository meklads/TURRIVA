import Link from "next/link";
import type { Messages } from "@/shared/i18n/messages/types";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  t: Messages;
  locale: Locale;
};

export function LandingPage({ t, locale }: Props) {
  const s = t.sales;
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <>
      {/* ── Hero ── */}
      <section className="ruwaq-landing-hero">
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="ruwaq-eyebrow">{s.hero.eyebrow}</p>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {s.hero.title}{" "}
              <span className="text-ruwaq-gold">{s.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {s.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/proposals/new" className="btn-ruwaq-primary px-8 py-3 text-base">
                {s.hero.cta} {arrow}
              </Link>
              <Link
                href="/templates/sample"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-ruwaq-gold/50 hover:bg-white/10"
              >
                {s.hero.ctaSecondary}
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/50">{s.hero.microcopy}</p>
          </div>

          {/* Product mock */}
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="ruwaq-product-mock">
              <div className="ruwaq-product-mock-bar">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <span className="ms-auto text-[10px] font-medium text-ruwaq-navy-soft/60">
                  ruwaq.co
                </span>
              </div>
              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-ruwaq-cream p-5 md:border-b-0 md:border-e">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ruwaq-gold">
                    {s.mock.inputLabel}
                  </p>
                  <div className="mt-3 space-y-2.5">
                    {s.mock.fields.map((f) => (
                      <div key={f} className="rounded-lg border border-ruwaq-cream bg-ruwaq-cream-bg/50 px-3 py-2 text-xs text-ruwaq-navy-soft">
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 inline-flex rounded-lg bg-ruwaq-gold px-4 py-1.5 text-xs font-bold text-ruwaq-navy">
                    {s.mock.generate}
                  </div>
                </div>
                <div className="bg-ruwaq-cream-bg/30 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-ruwaq-gold">
                    {s.mock.outputLabel}
                  </p>
                  <div className="mt-3 space-y-2">
                    {s.mock.sections.map((sec) => (
                      <div key={sec} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ruwaq-gold" />
                        <span className="text-xs font-medium text-ruwaq-navy">{sec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-semibold text-green-800">
                      {s.mock.badge1}
                    </span>
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold text-amber-900">
                      {s.mock.badge2}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem / Solution ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="ruwaq-eyebrow">{s.problem.eyebrow}</p>
            <h2 className="ruwaq-section-title mt-2">{s.problem.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ruwaq-navy-soft sm:text-base">
              {s.problem.body}
            </p>
          </div>
          <div className="space-y-4">
            <div className="ruwaq-compare-card ruwaq-compare-bad">
              <p className="text-xs font-bold uppercase tracking-wider text-red-600/80">
                {s.problem.traditionalLabel}
              </p>
              <ul className="mt-3 space-y-2">
                {s.problem.traditional.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ruwaq-navy-soft">
                    <span className="mt-0.5 shrink-0 text-red-500" aria-hidden>
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ruwaq-compare-card ruwaq-compare-good">
              <p className="text-xs font-bold uppercase tracking-wider text-ruwaq-gold">
                {s.problem.ruwaqLabel}
              </p>
              <ul className="mt-3 space-y-2">
                {s.problem.ruwaq.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ruwaq-navy">
                    <span className="mt-0.5 shrink-0 text-green-600" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-y border-ruwaq-cream bg-ruwaq-cream-bg/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="ruwaq-eyebrow">{s.features.eyebrow}</p>
            <h2 className="ruwaq-section-title mt-2">{s.features.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-ruwaq-navy-soft sm:text-base">
              {s.features.subtitle}
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.features.items.map(({ icon, title, body }) => (
              <article key={title} className="ruwaq-card group">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ruwaq-navy text-xl shadow-sm transition-transform group-hover:scale-105"
                  aria-hidden
                >
                  {icon}
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ruwaq-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three steps ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="ruwaq-eyebrow">{s.steps.eyebrow}</p>
          <h2 className="ruwaq-section-title mt-2">{s.steps.title}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {s.steps.items.map((step, i) => (
            <article key={step.title} className="ruwaq-card-accent relative">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ruwaq-navy text-sm font-bold text-ruwaq-gold">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ruwaq-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">{step.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/how-it-works" className="btn-ruwaq-secondary">
            {s.steps.learnMore} {arrow}
          </Link>
        </div>
      </section>

      {/* ── Why Ruwaq (differentiation) ── */}
      <section className="ruwaq-landing-dark">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ruwaq-gold">
              {s.why.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              {s.why.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/65 sm:text-base">
              {s.why.subtitle}
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-[1fr_1fr_1fr] bg-white/5 text-xs font-bold uppercase tracking-wider text-white/50 sm:grid">
              <div className="px-5 py-3">{s.why.table.need}</div>
              <div className="border-s border-white/10 px-5 py-3">{s.why.table.others}</div>
              <div className="border-s border-white/10 px-5 py-3 text-ruwaq-gold">
                {s.why.table.ruwaq}
              </div>
            </div>
            {s.why.rows.map((row) => (
              <div
                key={row.need}
                className="grid border-t border-white/10 sm:grid-cols-[1fr_1fr_1fr]"
              >
                <div className="px-5 py-4 text-sm font-semibold text-white">{row.need}</div>
                <div className="border-t border-white/10 px-5 py-4 text-sm text-white/45 sm:border-t-0 sm:border-s">
                  <span className="mb-1 block text-[10px] font-bold uppercase text-white/30 sm:hidden">
                    {s.why.table.others}
                  </span>
                  {row.others}
                </div>
                <div className="border-t border-white/10 bg-ruwaq-gold/5 px-5 py-4 text-sm font-medium text-ruwaq-gold sm:border-s sm:border-t-0">
                  <span className="mb-1 block text-[10px] font-bold uppercase text-ruwaq-gold/60 sm:hidden">
                    {s.why.table.ruwaq}
                  </span>
                  {row.ruwaq}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audience ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="ruwaq-eyebrow">{s.audience.eyebrow}</p>
          <h2 className="ruwaq-section-title mt-2">{s.audience.title}</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.audience.items.map(({ icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-ruwaq-cream bg-white p-5 text-center shadow-ruwaq transition-shadow hover:shadow-ruwaq-lg"
            >
              <span className="text-3xl" aria-hidden>
                {icon}
              </span>
              <h3 className="mt-3 font-display text-sm font-bold text-ruwaq-navy">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ruwaq-navy-soft">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Sample preview ── */}
      <section className="border-y border-ruwaq-cream bg-ruwaq-cream-bg/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="ruwaq-eyebrow">{s.sample.eyebrow}</p>
              <h2 className="ruwaq-section-title mt-2">{s.sample.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ruwaq-navy-soft sm:text-base">
                {s.sample.body}
              </p>
              <Link href="/templates/sample" className="btn-ruwaq-primary mt-6 inline-flex">
                {s.sample.cta} {arrow}
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {s.sample.items.map((item) => (
                <Link
                  key={item.title}
                  href="/templates/sample"
                  className="ruwaq-sample-card group"
                >
                  <div className="ruwaq-sample-doc">
                    <div className="h-1.5 w-8 rounded bg-ruwaq-gold/40" />
                    <div className="mt-2 h-1 w-full rounded bg-ruwaq-cream" />
                    <div className="mt-1.5 h-1 w-4/5 rounded bg-ruwaq-cream" />
                    <div className="mt-1.5 h-1 w-3/5 rounded bg-ruwaq-cream" />
                    <div className="mt-3 h-1 w-full rounded bg-ruwaq-cream/70" />
                    <div className="mt-1 h-1 w-5/6 rounded bg-ruwaq-cream/70" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-ruwaq-navy group-hover:text-ruwaq-gold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-ruwaq-navy-soft">{item.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Document structure ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="ruwaq-eyebrow">{s.document.eyebrow}</p>
          <h2 className="ruwaq-section-title mt-2">{s.document.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ruwaq-navy-soft">{s.document.subtitle}</p>
        </div>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {s.document.layers.map((layer, i) => (
            <span
              key={layer}
              className="inline-flex items-center gap-1.5 rounded-full border border-ruwaq-cream bg-white px-3.5 py-1.5 text-xs font-semibold text-ruwaq-navy shadow-sm"
            >
              <span className="font-display text-ruwaq-gold">{i + 1}</span>
              {layer}
            </span>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="ruwaq-landing-cta">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
            {s.ctaFinal.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            {s.ctaFinal.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/proposals/new" className="btn-ruwaq-primary px-8 py-3 text-base">
              {s.ctaFinal.primary} {arrow}
            </Link>
            <Link
              href="/templates/sample"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-ruwaq-gold hover:text-ruwaq-gold"
            >
              {s.ctaFinal.secondary}
            </Link>
          </div>
          <p className="mt-5 text-xs text-white/45">{s.ctaFinal.microcopy}</p>
        </div>
      </section>
    </>
  );
}
