type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
};

export function LuxuryMarketingHero({ eyebrow, title, intro, children }: Props) {
  return (
    <section className="lux-section lux-section--white lux-marketing-hero">
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{eyebrow}</p>
        <div className="lux-divider-gold" />
        <h1 className="lux-display lux-heading mt-6">{title}</h1>
        {intro ? <p className="lux-body mx-auto mt-4 max-w-2xl text-lux-ink-muted">{intro}</p> : null}
        {children ? <div className="lux-marketing-hero__actions">{children}</div> : null}
      </div>
    </section>
  );
}
