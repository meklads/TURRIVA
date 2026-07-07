import { DesignStudio } from "./design-studio";
import { DesignWelcomeModal } from "./design-welcome-modal";
import { DesignSplitHero } from "./design-split-hero";
import { DesignPathsSection } from "./design-paths-section";
import { getDesignMessages } from "@/shared/i18n/messages/design";
import type { Locale } from "@/shared/i18n/locale";

type Props = {
  locale: Locale;
};

export function DesignHomePage({ locale }: Props) {
  const t = getDesignMessages(locale);

  return (
    <>
      <DesignWelcomeModal messages={t} />
      <DesignSplitHero messages={t} />

      <section className="design-studio-wrap" aria-labelledby="design-studio-heading">
        <div className="design-container design-container--wide">
          <header className="design-studio-wrap__intro">
            <p className="design-eyebrow">{t.studioSection.eyebrow}</p>
            <h2 id="design-studio-heading" className="design-section-title">
              {t.studioSection.title}
            </h2>
            <p className="design-section-subtitle">{t.studioSection.subtitle}</p>
          </header>
          <DesignStudio messages={t} locale={locale} />
        </div>
      </section>

      <DesignPathsSection messages={t} />
    </>
  );
}
