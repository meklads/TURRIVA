import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { TURRIVA_PUBLIC_EMAIL } from "@/shared/constants/brand";
import { getLuxurySeoMessages } from "@/shared/i18n/messages/luxury-seo-pages";
import { getLocale } from "@/shared/i18n/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const legal = getLuxurySeoMessages(locale).legal.privacy;
  return luxuryPageMetadata(locale, legal.title, legal.intro, { path: "/privacy" });
}

export default async function PrivacyPage() {
  const locale = await getLocale();
  const legal = getLuxurySeoMessages(locale).legal.privacy;

  return (
    <div className="lux-section">
      <div className="lux-container max-w-3xl py-10 sm:py-14">
        <p className="lux-eyebrow">{legal.title}</p>
        <h1 className="lux-display lux-heading mt-4">{legal.title}</h1>
        <p className="mt-2 text-sm text-lux-ink-muted">{legal.updated}</p>
        <p className="lux-body mt-6 text-lux-ink-soft">{legal.intro}</p>

        <div className="mt-10 space-y-6">
          {legal.sections.map((section) => (
            <section key={section.title} className="border-b border-lux-sand pb-6 last:border-0">
              <h2 className="lux-display text-base font-semibold text-lux-ink">{section.title}</h2>
              <p className="lux-body mt-2 text-sm text-lux-ink-soft">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-lux-ink-soft">
          {legal.contact}{" "}
          <a href={`mailto:${TURRIVA_PUBLIC_EMAIL}`} className="font-semibold text-lux-gold hover:underline">
            {TURRIVA_PUBLIC_EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
}
