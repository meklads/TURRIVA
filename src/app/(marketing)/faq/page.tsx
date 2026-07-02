import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function FaqPage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const f = t.pages.faq;
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="ruwaq-eyebrow">{f.eyebrow}</p>
      <h1 className="ruwaq-section-title mt-2">{f.title}</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-ruwaq-navy-soft">
        {f.intro}
      </p>

      {/* Differentiators */}
      <section className="mt-12">
        <h2 className="font-display text-lg font-bold text-ruwaq-navy">
          {f.differentiatorsTitle}
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {f.differentiators.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ruwaq-stone/60 p-5"
            >
              <h3 className="font-display text-sm font-bold text-ruwaq-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription mechanics */}
      <section className="mt-14">
        <h2 className="font-display text-lg font-bold text-ruwaq-navy">
          {f.subscriptionTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">
          {f.subscriptionIntro}
        </p>
        <ol className="mt-6 space-y-5">
          {f.subscriptionSteps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ruwaq-navy text-xs font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-sm font-bold text-ruwaq-navy">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ruwaq-navy-soft">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Q&A accordion — plain <details>, no JS dependency */}
      <section className="mt-14">
        <h2 className="font-display text-lg font-bold text-ruwaq-navy">
          {f.questionsTitle}
        </h2>
        <div className="mt-5 divide-y divide-ruwaq-cream rounded-2xl border border-ruwaq-stone/60">
          {f.questions.map((item) => (
            <details key={item.q} className="group p-5 open:bg-ruwaq-cream/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-bold text-ruwaq-navy">
                {item.q}
                <span className="shrink-0 text-ruwaq-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ruwaq-navy-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-2xl border border-ruwaq-gold/30 bg-ruwaq-gold/5 p-8 text-center">
        <h2 className="font-display text-xl font-bold text-ruwaq-navy">
          {f.ctaTitle}
        </h2>
        <p className="mt-2 text-sm text-ruwaq-navy-soft">{f.ctaSubtitle}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="/proposals/new" className="btn-ruwaq-primary px-6 py-2.5">
            {f.ctaButton} {arrow}
          </a>
          <a href="/pricing" className="btn-ruwaq-secondary px-6 py-2.5">
            {f.ctaSecondary}
          </a>
        </div>
      </section>
    </div>
  );
}
