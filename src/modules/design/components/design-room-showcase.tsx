import Link from "next/link";
import { DesignBeforeAfter } from "./design-before-after";
import { DESIGN_IMAGES } from "@/modules/design/lib/images";
import type { DesignMessages } from "@/shared/i18n/messages/design";

type Props = {
  messages: DesignMessages;
  locale: "ar" | "en";
};

export function DesignRoomShowcase({ messages, locale }: Props) {
  const rooms = messages.rooms.items;

  return (
    <section id="gallery" className="design-section">
      <div className="design-container">
        <p className="design-eyebrow">{messages.rooms.eyebrow}</p>
        <h2 className="design-section-title">{messages.rooms.title}</h2>
        <p className="design-section-subtitle">{messages.rooms.subtitle}</p>

        <div className="design-room-grid">
          {rooms.map((room, i) => {
            const imgs = DESIGN_IMAGES.rooms[i % DESIGN_IMAGES.rooms.length]!;
            return (
              <article key={room.id} className="design-room-card">
                <DesignBeforeAfter
                  beforeSrc={imgs.before}
                  afterSrc={imgs.after}
                  beforeLabel={messages.studio.before}
                  afterLabel={messages.studio.after}
                />
                <div className="design-room-card__body">
                  <h3>{room.title}</h3>
                  <p>{room.description}</p>
                  <Link href="#studio" className="design-link-arrow">
                    {room.cta}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
