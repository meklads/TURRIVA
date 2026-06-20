import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function HomePage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  const features = [
    { icon: "⚡", text: t.landing.feature1 },
    { icon: "🛡️", text: t.landing.feature2 },
    { icon: "🇸🇦", text: t.landing.feature3 },
  ];

  return (
    <>
      {/* Compact hero */}
      <section className="ruwaq-hero-compact">
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:gap-12 lg:text-start">
            <div className="flex-1">
              <p className="ruwaq-eyebrow">{t.site.hero.eyebrow}</p>
              <h1 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-ruwaq-navy sm:text-3xl lg:text-[2rem]">
                {t.landing.title}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ruwaq-navy-soft sm:text-base lg:mx-0 lg:max-w-lg">
                {t.landing.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                <Link href="/proposals/new" className="btn-ruwaq-primary px-6">
                  {t.landing.cta}
                </Link>
                <Link href="/templates/sample" className="btn-ruwaq-secondary px-5">
                  {t.nav.previewSample}
                </Link>
              </div>
            </div>

            {/* Decorative stats strip — compact visual anchor */}
            <div className="mt-8 grid w-full max-w-sm grid-cols-3 gap-3 lg:mt-0 lg:max-w-md lg:shrink-0">
              {t.site.home.steps.map((step, i) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-ruwaq-cream bg-white/80 px-3 py-4 text-center shadow-ruwaq backdrop-blur-sm"
                >
                  <span className="font-display text-lg font-bold text-ruwaq-gold">
                    {i + 1}
                  </span>
                  <p className="mt-1 text-[10px] font-semibold leading-snug text-ruwaq-navy sm:text-xs">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map(({ icon, text }) => (
            <div key={text} className="ruwaq-card-accent group">
              <span className="text-2xl" aria-hidden>
                {icon}
              </span>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-ruwaq-navy">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-lg text-center text-sm text-ruwaq-navy-soft/80">
          {t.landing.trustLine}
        </p>
      </section>

      {/* Steps */}
      <section className="border-t border-ruwaq-cream bg-ruwaq-cream-bg/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="text-center">
            <p className="ruwaq-eyebrow">{t.site.nav.howItWorks}</p>
            <h2 className="ruwaq-section-title mt-2">{t.site.home.stepsTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.site.home.steps.map((step, i) => (
              <article key={step.title} className="ruwaq-card relative overflow-hidden">
                <span
                  className="absolute -end-3 -top-3 font-display text-6xl font-bold text-ruwaq-gold/10"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ruwaq-navy text-sm font-bold text-ruwaq-gold">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ruwaq-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ruwaq-navy-soft">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-3">
            <Link href="/how-it-works" className="btn-ruwaq-secondary">
              {t.site.home.learnMore} →
            </Link>
            <Link href="/proposals/new" className="btn-ruwaq-primary">
              {t.site.nav.startProposal}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
