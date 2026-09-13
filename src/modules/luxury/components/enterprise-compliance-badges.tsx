import type { Locale } from "@/shared/i18n/locale";
import { getConversionCopy } from "../lib/conversion-copy";

type Props = { locale: Locale };

export function EnterpriseComplianceBadges({ locale }: Props) {
  const copy = getConversionCopy(locale).compliance;

  return (
    <section className="lux-compliance" aria-label={copy.aria}>
      <div className="lux-container">
        <ul className="lux-compliance__list">
          {copy.badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
