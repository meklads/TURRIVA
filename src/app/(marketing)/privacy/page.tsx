import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

export default async function PrivacyPage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm font-medium text-[#C9A063]">{t.site.nav.privacy}</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        {t.pages.privacy.title}
      </h1>
      <p className="mt-2 text-sm text-gray-500">{t.pages.privacy.updated}</p>
      <p className="mt-6 text-sm leading-relaxed text-gray-600">
        {t.pages.privacy.intro}
      </p>

      <div className="prose prose-sm mt-10 max-w-none space-y-8 text-gray-600">
        {t.pages.privacy.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-base font-semibold text-gray-900">
              {section.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-gray-500">
        {t.pages.privacy.contact}{" "}
        <a
          href="mailto:hello@ruwaq.co"
          className="font-medium text-brand-600 hover:underline"
        >
          hello@ruwaq.co
        </a>
      </p>
    </div>
  );
}
