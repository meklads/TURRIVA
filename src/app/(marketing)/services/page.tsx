import Link from "next/link";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function ServicesPage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const items = [
    t.services.items.identity,
    t.services.items.design,
    t.services.items.marketing,
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-[#C9A063]">{t.site.nav.services}</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">{t.services.title}</h1>
      <p className="mt-3 text-lg text-gray-600">{t.services.subtitle}</p>

      <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50/50 px-4 py-3 text-sm text-brand-900">
        {t.services.supportNote}
      </div>

      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <h2 className="font-semibold text-gray-900">{item.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/proposals/new"
          className="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600"
        >
          {t.services.cta}
        </Link>
        <a
          href="mailto:hello@ruwaq.co"
          className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {t.services.ctaSecondary}
        </a>
      </div>
    </div>
  );
}
