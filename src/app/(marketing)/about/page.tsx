import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function AboutPage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-[#C9A063]">{t.site.nav.about}</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        {t.pages.about.title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-gray-600">
        {t.pages.about.intro}
      </p>

      <div className="mt-10 space-y-8">
        {t.pages.about.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-gray-900">
              {section.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {t.pages.about.values.map((value) => (
          <div
            key={value.title}
            className="rounded-xl border border-gray-100 bg-gray-50/50 p-5"
          >
            <h3 className="font-semibold text-gray-900">{value.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{value.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/proposals/new"
          className="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
        >
          {t.site.nav.startProposal}
        </Link>
      </div>
    </div>
  );
}
