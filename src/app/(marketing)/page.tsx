import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function HomePage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <>
      <section className="border-b border-gray-100 bg-gradient-to-b from-[#F7F5F2] to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="text-sm font-semibold tracking-wide text-[#C9A063]">
            {t.site.hero.eyebrow}
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t.landing.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            {t.landing.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/proposals/new"
              className="rounded-lg bg-brand-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
            >
              {t.landing.cta}
            </Link>
            <Link
              href="/templates/sample"
              className="rounded-lg border border-brand-200 bg-white px-8 py-3 text-sm font-medium text-brand-800 hover:bg-brand-50"
            >
              {t.nav.previewSample}
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-lg border border-gray-200 bg-white px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {t.site.nav.howItWorks}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {[t.landing.feature1, t.landing.feature2, t.landing.feature3].map(
            (feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-medium text-gray-800">{feature}</p>
              </div>
            )
          )}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-gray-500">
          {t.landing.trustLine}
        </p>
      </section>

      <section className="border-t border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            {t.site.home.stepsTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.site.home.steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-gray-100 bg-white p-6"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0F172A] text-sm font-bold text-[#C9A063]">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              {t.site.home.learnMore} →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
