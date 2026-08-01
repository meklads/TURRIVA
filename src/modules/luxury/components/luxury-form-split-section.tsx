type Props = {
  id?: string;
  image: React.ReactNode;
  children: React.ReactNode;
  tone?: "cream" | "white" | "linen";
  portrait?: boolean;
};

export function LuxuryFormSplitSection({
  id,
  image,
  children,
  tone = "cream",
  portrait = false,
}: Props) {
  const toneClass =
    tone === "white" ? "lux-section--white" : tone === "linen" ? "lux-section--linen" : "lux-section--cream";

  const gridClass = portrait ? "lux-quote-section lux-quote-section--portrait" : "lux-quote-section";

  return (
    <section id={id} className={`lux-section ${toneClass} lux-form-split scroll-mt-24`}>
      <div className="lux-container max-w-6xl">
        <div className={gridClass}>
          {image}
          <div className="lux-quote-section__panel">{children}</div>
        </div>
      </div>
    </section>
  );
}
