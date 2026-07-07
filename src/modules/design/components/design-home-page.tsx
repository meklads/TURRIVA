import { DesignStudio } from "./design-studio";
import { DesignWelcomeModal } from "./design-welcome-modal";
import { DesignExecutionBanner } from "./design-execution-banner";
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

      <section className="design-tool-hero">
        <div className="design-container design-container--wide">
          <p className="design-tool-hero__badge">{t.hero.badge}</p>
          <h1 className="design-tool-hero__title">{t.hero.title}</h1>
          <p className="design-tool-hero__subtitle">{t.hero.subtitle}</p>
        </div>
      </section>

      <div className="design-container design-container--wide design-tool-page">
        <DesignStudio messages={t} locale={locale} />
      </div>

      <DesignExecutionBanner messages={t} />
    </>
  );
}
