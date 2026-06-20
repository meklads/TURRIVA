import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function HowItWorksPage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-[#C9A063]">{t.site.nav.howItWorks}</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        {t.pages.howItWorks.title}
      </h1>
      <p className="mt-4 text-lg text-gray-600">{t.pages.howItWorks.intro}</p>

      <ol className="mt-10 space-y-8">
        {t.pages.howItWorks.steps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-sm font-bold text-[#C9A063]">
              {i + 1}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50/40 p-6">
        <h2 className="font-semibold text-gray-900">
          {t.pages.howItWorks.reviewTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {t.pages.howItWorks.reviewBody}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/proposals/new"
          className="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
        >
          {t.site.nav.startProposal}
        </Link>
        <Link
          href="/templates/sample"
          className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {t.nav.previewSample}
        </Link>
      </div>
    </div>
  );
}
