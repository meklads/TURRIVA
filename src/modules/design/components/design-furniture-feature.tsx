import { FURNITURE_CATALOG } from "@/modules/design/lib/furniture-catalog";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
  locale: "ar" | "en";
};

export function DesignFurnitureFeature({ messages, locale }: Props) {
  const ff = messages.furnitureFeature;
  const preview = FURNITURE_CATALOG.slice(0, 4);

  return (
    <section id="furniture-finder" className="design-section design-section--muted">
      <div className="design-container">
        <div className="design-furniture-feature">
          <div className="design-furniture-feature__copy">
            <p className="design-eyebrow design-eyebrow--left">{ff.eyebrow}</p>
            <h2 className="design-furniture-feature__title">{ff.title}</h2>
            <p className="design-furniture-feature__subtitle">{ff.subtitle}</p>
            <ul className="design-furniture-feature__list">
              {ff.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a href="#studio" className="design-btn design-btn-primary design-btn-lg">
              {ff.cta}
            </a>
          </div>

          <div className="design-furniture-feature__visual">
            <div className="design-furniture-feature__scene">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85"
                alt=""
              />
              <span className="design-fpin design-fpin--cl design-fpin--demo">1</span>
              <span className="design-fpin design-fpin--tc design-fpin--demo">2</span>
              <span className="design-fpin design-fpin--br design-fpin--demo">3</span>
            </div>
            <div className="design-furniture-feature__cards">
              {preview.map((item, i) => (
                <div key={item.id} className="design-furniture-feature__mini">
                  <span className="design-furniture-feature__mini-pin">{i + 1}</span>
                  <img src={item.image} alt="" />
                  <p>{locale === "ar" ? item.nameAr : item.nameEn}</p>
                  <span>{locale === "ar" ? item.priceAr : item.priceEn}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
