import "@/app/design.css";
import { getLocale } from "@/shared/i18n/server";
import { getDesignMessages } from "@/shared/i18n/messages/design";
import { getLuxuryMessages } from "@/shared/i18n/messages/luxury";
import { DesignConversionStudio } from "@/modules/design/components/design-conversion-studio";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = getLuxuryMessages(locale);
  return luxuryPageMetadata(locale, t.pages.design.title, t.pages.design.intro);
}

export default async function DesignPage() {
  const locale = await getLocale();
  const luxury = getLuxuryMessages(locale);
  const design = getDesignMessages(locale);

  return (
    <div className="design-shell !min-h-0 border-t border-lux-sand/40 bg-white">
      <section className="lux-section !pb-8">
        <div className="lux-container max-w-3xl text-center">
          <p className="lux-eyebrow">{luxury.brand.tagline}</p>
          <div className="lux-divider-gold" />
          <h1 className="lux-display lux-heading mt-6">{luxury.pages.design.title}</h1>
          <p className="lux-body mx-auto mt-4 max-w-2xl">{luxury.pages.design.intro}</p>
        </div>
      </section>
      <DesignConversionStudio messages={design} locale={locale} />
    </div>
  );
}
