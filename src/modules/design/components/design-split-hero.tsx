import Link from "next/link";
import { DESIGN_IMAGES } from "@/modules/design/lib/images";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
};

export function DesignSplitHero({ messages }: Props) {
  const h = messages.hero;

  return (
    <section className="design-split-hero" aria-labelledby="design-hero-title">
      <div className="design-split-hero__media">
        <img src={DESIGN_IMAGES.hero.palace} alt={h.imageAlt} />
        <div className="design-split-hero__media-shade" aria-hidden />
      </div>

      <div className="design-split-hero__copy">
        <p className="design-split-hero__badge">{h.badge}</p>
        <h1 id="design-hero-title" className="design-split-hero__title">
          {h.title}
        </h1>
        <p className="design-split-hero__subtitle">{h.subtitle}</p>
        <p className="design-split-hero__services">{h.services}</p>

        <div className="design-split-hero__ctas">
          <a href="#studio" className="design-btn design-btn-primary design-split-hero__cta">
            {h.ctaTryTool}
          </a>
          <Link href="/contact" className="design-btn design-btn-execution design-split-hero__cta">
            {h.ctaBespoke}
          </Link>
        </div>

        <div className="design-split-hero__paths">
          <p>
            <strong>{h.noteTryToolLabel}</strong> {h.noteTryTool}
          </p>
          <p>
            <strong>{h.noteBespokeLabel}</strong> {h.noteBespoke}
          </p>
        </div>
      </div>
    </section>
  );
}
