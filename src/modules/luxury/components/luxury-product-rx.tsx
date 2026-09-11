import type { ReactNode } from "react";
import { LocalizedLink } from "@/shared/components/localized-link";

type Tone = "paper" | "soft" | "warm" | "ink";

function toneClass(tone: Tone) {
  return `lux-rx-section lux-rx-section--${tone}`;
}

export function RxShell({ children }: { children: ReactNode }) {
  return <div className="lux-rx">{children}</div>;
}

export function RxProblem({
  eyebrow,
  title,
  body,
  points,
  titleId,
}: {
  eyebrow: string;
  title: string;
  body: string;
  points: readonly string[];
  titleId: string;
}) {
  return (
    <section className={toneClass("soft")} aria-labelledby={titleId}>
      <div className="lux-container lux-rx-problem">
        <div className="lux-rx-problem__copy">
          <p className="lux-rx-kicker">{eyebrow}</p>
          <h2 id={titleId} className="lux-display lux-rx-display">
            {title}
          </h2>
          <p className="lux-rx-copy">{body}</p>
        </div>
        <ol className="lux-rx-problem__list">
          {points.map((point, index) => (
            <li key={point} className="lux-rx-problem__item">
              <span className="lux-rx-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{point}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function RxDefine({
  eyebrow,
  title,
  body,
  result,
  titleId,
}: {
  eyebrow: string;
  title: string;
  body: string;
  result: string;
  titleId: string;
}) {
  return (
    <section className={toneClass("ink")} aria-labelledby={titleId}>
      <div className="lux-container lux-rx-define">
        <div className="lux-rx-define__main">
          <p className="lux-rx-kicker lux-rx-kicker--light">{eyebrow}</p>
          <h2 id={titleId} className="lux-display lux-rx-display lux-rx-display--light">
            {title}
          </h2>
          <p className="lux-rx-copy lux-rx-copy--light">{body}</p>
        </div>
        <aside className="lux-rx-define__aside">
          <p className="lux-rx-define__result">{result}</p>
        </aside>
      </div>
    </section>
  );
}

export function RxIntroHeader({
  eyebrow,
  title,
  body,
  titleId,
  light,
  center,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  titleId: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <header className={`lux-rx-intro${center ? " lux-rx-intro--center" : ""}`}>
      <p className={`lux-rx-kicker${light ? " lux-rx-kicker--light" : ""}`}>{eyebrow}</p>
      <h2 id={titleId} className={`lux-display lux-rx-display${light ? " lux-rx-display--light" : ""}`}>
        {title}
      </h2>
      {body ? <p className={`lux-rx-copy${light ? " lux-rx-copy--light" : ""}`}>{body}</p> : null}
    </header>
  );
}

export function RxProse({
  tone = "paper",
  eyebrow,
  title,
  body,
  accent,
  trust,
  titleId,
  children,
}: {
  tone?: Tone;
  eyebrow: string;
  title: string;
  body?: string;
  accent?: string;
  trust?: string;
  titleId: string;
  children?: ReactNode;
}) {
  const light = tone === "ink";
  return (
    <section className={toneClass(tone)} aria-labelledby={titleId}>
      <div className="lux-container lux-rx-prose">
        <RxIntroHeader eyebrow={eyebrow} title={title} body={body} titleId={titleId} light={light} />
        {accent ? <p className={`lux-rx-accent${light ? " lux-rx-accent--light" : ""}`}>{accent}</p> : null}
        {children}
        {trust ? <p className="lux-rx-footnote">{trust}</p> : null}
      </div>
    </section>
  );
}

export function RxCards({
  tone = "warm",
  eyebrow,
  title,
  intro,
  items,
  titleId,
}: {
  tone?: Tone;
  eyebrow: string;
  title: string;
  intro?: string;
  items: readonly { title: string; body: string; href?: string; cta?: string }[];
  titleId: string;
}) {
  return (
    <section className={toneClass(tone)} aria-labelledby={titleId}>
      <div className="lux-container">
        <RxIntroHeader eyebrow={eyebrow} title={title} body={intro} titleId={titleId} />
        <ul className="lux-rx-cards">
          {items.map((item) => (
            <li key={item.title} className="lux-rx-cards__item">
              <h3 className="lux-rx-cards__title">{item.title}</h3>
              <p className="lux-rx-cards__body">{item.body}</p>
              {item.href && item.cta ? (
                <LocalizedLink href={item.href} className="lux-rx-text-link">
                  {item.cta}
                </LocalizedLink>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function RxScopeRows({
  tone = "paper",
  eyebrow,
  title,
  intro,
  items,
  titleId,
  footnote,
  id = "scope",
}: {
  tone?: Tone;
  eyebrow: string;
  title: string;
  intro?: string;
  items: readonly { title: string; body?: string; points?: readonly string[]; more?: string; moreHref?: string }[];
  titleId: string;
  footnote?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${toneClass(tone)} scroll-mt-24`} aria-labelledby={titleId}>
      <div className="lux-container">
        <RxIntroHeader eyebrow={eyebrow} title={title} body={intro} titleId={titleId} />
        <ol className="lux-rx-scope">
          {items.map((item, index) => (
            <li key={item.title} className="lux-rx-scope__row">
              <span className="lux-rx-scope__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="lux-rx-scope__body">
                <div className="lux-rx-scope__top">
                  <h3 className="lux-rx-scope__title">{item.title}</h3>
                  {item.more && item.moreHref ? (
                    <LocalizedLink href={item.moreHref} className="lux-rx-text-link">
                      {item.more}
                    </LocalizedLink>
                  ) : null}
                </div>
                {item.body ? <p className="lux-rx-scope__text">{item.body}</p> : null}
                {item.points?.length ? (
                  <ul className="lux-rx-chips">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
        {footnote ? <p className="lux-rx-footnote">{footnote}</p> : null}
      </div>
    </section>
  );
}

export function RxRail({
  tone = "warm",
  eyebrow,
  title,
  intro,
  options,
  titleId,
  footer,
  footerCta,
  footerHref,
}: {
  tone?: Tone;
  eyebrow: string;
  title: string;
  intro?: string;
  options: readonly string[] | readonly { title: string; body?: string }[];
  titleId: string;
  footer?: string;
  footerCta?: string;
  footerHref?: string;
}) {
  return (
    <section className={toneClass(tone)} aria-labelledby={titleId}>
      <div className="lux-container lux-rx-rail">
        <RxIntroHeader eyebrow={eyebrow} title={title} body={intro} titleId={titleId} center={!footer} />
        <ul className="lux-rx-rail__items">
          {options.map((option, index) => {
            const label = typeof option === "string" ? option : option.title;
            const body = typeof option === "string" ? undefined : option.body;
            return (
              <li key={label} className="lux-rx-rail__item">
                <span className="lux-rx-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="lux-rx-rail__label">{label}</span>
                  {body ? <span className="lux-rx-rail__body">{body}</span> : null}
                </span>
              </li>
            );
          })}
        </ul>
        {footer ? (
          <div className="lux-rx-rail__footer">
            <p>{footer}</p>
            {footerHref && footerCta ? (
              <LocalizedLink href={footerHref} className="lux-rx-text-link">
                {footerCta}
              </LocalizedLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function RxTiers({
  tone = "paper",
  eyebrow,
  title,
  note,
  items,
  titleId,
  featuredIndex = 1,
}: {
  tone?: Tone;
  eyebrow: string;
  title: string;
  note?: string;
  items: readonly { name?: string; title?: string; nameAlt?: string; body: string; points?: readonly string[] }[];
  titleId: string;
  featuredIndex?: number;
}) {
  return (
    <section className={toneClass(tone)} aria-labelledby={titleId}>
      <div className="lux-container">
        <RxIntroHeader eyebrow={eyebrow} title={title} body={note} titleId={titleId} />
        <ol className="lux-rx-tiers">
          {items.map((level, index) => {
            const name = level.name ?? level.title ?? "";
            return (
              <li
                key={name}
                className={`lux-rx-tier${index === featuredIndex ? " lux-rx-tier--featured" : ""}`}
              >
                <div className="lux-rx-tier__head">
                  <span className="lux-rx-num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="lux-rx-tier__name">{name}</h3>
                  {level.nameAlt ? <p className="lux-rx-tier__alt">{level.nameAlt}</p> : null}
                </div>
                <p className="lux-rx-tier__body">{level.body}</p>
                {level.points?.length ? (
                  <ul className="lux-rx-chips lux-rx-chips--on-tier">
                    {level.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function RxSignals({
  tone = "soft",
  eyebrow,
  title,
  items,
  titleId,
  trust,
}: {
  tone?: Tone;
  eyebrow: string;
  title: string;
  items: readonly string[];
  titleId: string;
  trust?: string;
}) {
  return (
    <section className={toneClass(tone)} aria-labelledby={titleId}>
      <div className="lux-container lux-rx-when">
        <RxIntroHeader eyebrow={eyebrow} title={title} titleId={titleId} />
        <ul className="lux-rx-when__grid">
          {items.map((item) => (
            <li key={item}>
              <span className="lux-rx-when__dot" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        {trust ? <p className="lux-rx-footnote">{trust}</p> : null}
      </div>
    </section>
  );
}

export function RxFlow({
  eyebrow,
  title,
  steps,
  titleId,
}: {
  eyebrow: string;
  title: string;
  steps: readonly string[] | readonly { title: string; body?: string }[];
  titleId: string;
}) {
  const rich = typeof steps[0] === "object";
  return (
    <section className={toneClass("ink")} aria-labelledby={titleId}>
      <div className="lux-container">
        <RxIntroHeader eyebrow={eyebrow} title={title} titleId={titleId} light />
        {rich ? (
          <ol className="lux-rx-method">
            {(steps as readonly { title: string; body?: string }[]).map((step, index) => (
              <li key={step.title} className="lux-rx-method__step">
                <span className="lux-rx-method__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="lux-rx-method__title">{step.title}</h3>
                  {step.body ? <p className="lux-rx-method__body">{step.body}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <ol className="lux-rx-flow">
            {(steps as readonly string[]).map((step, index) => (
              <li key={step} className="lux-rx-flow__step">
                <span className="lux-rx-flow__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="lux-rx-flow__label">{step}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

export function RxPillars({
  tone = "paper",
  eyebrow,
  title,
  items,
  titleId,
  trust,
}: {
  tone?: Tone;
  eyebrow: string;
  title: string;
  items: readonly { title: string; body: string }[];
  titleId: string;
  trust?: string;
}) {
  return (
    <section className={toneClass(tone)} aria-labelledby={titleId}>
      <div className="lux-container">
        <RxIntroHeader eyebrow={eyebrow} title={title} titleId={titleId} />
        <ul className="lux-rx-pillars">
          {items.map((item, index) => (
            <li key={item.title} className="lux-rx-pillars__item">
              <span className="lux-rx-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="lux-rx-pillars__title">{item.title}</h3>
              <p className="lux-rx-pillars__body">{item.body}</p>
            </li>
          ))}
        </ul>
        {trust ? <p className="lux-rx-footnote">{trust}</p> : null}
      </div>
    </section>
  );
}

export function RxFinale({ line, brand, tagline }: { line: string; brand: string; tagline: string }) {
  return (
    <section className={`${toneClass("ink")} lux-rx-finale`} aria-label={brand}>
      <div className="lux-container lux-rx-finale__inner">
        <p className="lux-rx-finale__line">{line}</p>
        <p className="lux-rx-finale__brand">{brand}</p>
        <p className="lux-rx-finale__tag">{tagline}</p>
      </div>
    </section>
  );
}
