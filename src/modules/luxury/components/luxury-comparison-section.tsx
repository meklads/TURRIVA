import {
  Check,
  Factory,
  Hammer,
  Image,
  ScanLine,
  ShieldCheck,
  ShieldOff,
  UserRound,
  Users,
  X,
} from "lucide-react";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

const ROW_THEMES = [
  { traditional: Users, turriva: UserRound },
  { traditional: Image, turriva: ScanLine },
  { traditional: Hammer, turriva: Factory },
  { traditional: ShieldOff, turriva: ShieldCheck },
] as const;

export function LuxuryComparisonSection({ messages }: { messages: LuxuryMessages }) {
  const t = messages.comparison;

  return (
    <section className="lux-section lux-section--linen lux-comparison" aria-labelledby="comparison-heading">
      <div className="lux-container max-w-4xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 id="comparison-heading" className="lux-display lux-heading mt-6">
          {t.title}
        </h2>
      </div>

      <div className="lux-container lux-comparison-board">
        <div className="lux-comparison-board__head" aria-hidden>
          <div className="lux-comparison-board__head-cell lux-comparison-board__head-cell--traditional">
            {t.traditionalHeader}
          </div>
          <div className="lux-comparison-board__head-cell lux-comparison-board__head-cell--turriva">
            <span className="lux-comparison-board__mark" aria-hidden>
              ✦
            </span>
            {t.turrivaHeader}
          </div>
        </div>

        <ol className="lux-comparison-board__rows">
          {t.rows.map((row, index) => {
            const theme = ROW_THEMES[index] ?? ROW_THEMES[0];
            const TradIcon = theme.traditional;
            const TurrivaIcon = theme.turriva;

            return (
              <li key={row.traditional} className="lux-comparison-board__row">
                <article className="lux-comparison-board__cell lux-comparison-board__cell--traditional">
                  <span className="lux-comparison-board__label">{t.traditionalHeader}</span>
                  <div className="lux-comparison-board__meta">
                    <span className="lux-comparison-board__glyph lux-comparison-board__glyph--muted" aria-hidden>
                      <TradIcon strokeWidth={1.5} />
                    </span>
                    <span className="lux-comparison-board__verdict lux-comparison-board__verdict--muted" aria-hidden>
                      <X strokeWidth={2} />
                    </span>
                  </div>
                  <p className="lux-comparison-board__copy">{row.traditional}</p>
                </article>

                <article className="lux-comparison-board__cell lux-comparison-board__cell--turriva">
                  <span className="lux-comparison-board__label">{t.turrivaHeader}</span>
                  <div className="lux-comparison-board__meta">
                    <span className="lux-comparison-board__glyph lux-comparison-board__glyph--gold" aria-hidden>
                      <TurrivaIcon strokeWidth={1.5} />
                    </span>
                    <span className="lux-comparison-board__verdict lux-comparison-board__verdict--gold" aria-hidden>
                      <Check strokeWidth={2.5} />
                    </span>
                  </div>
                  <p className="lux-comparison-board__copy">{row.turriva}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
