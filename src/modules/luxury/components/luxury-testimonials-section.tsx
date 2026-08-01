import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryTestimonialsSection({ messages }: Props) {
  const t = messages.testimonials;

  return (
    <section
      className="lux-section lux-section--white lux-testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="lux-container max-w-3xl text-center">
        <p className="lux-eyebrow">{t.eyebrow}</p>
        <div className="lux-divider-gold" />
        <h2 id="testimonials-heading" className="lux-display lux-heading mt-6">
          {t.title}
        </h2>
      </div>

      <div className="lux-container mt-12 lg:mt-14">
        <ul className="lux-testimonial-tickets">
          {t.items.map((item) => (
            <li key={item.quote}>
              <blockquote className="lux-testimonial-ticket">
                <p className="lux-testimonial-ticket__quote">&ldquo;{item.quote}&rdquo;</p>
                <footer className="lux-testimonial-ticket__footer">
                  <cite className="lux-testimonial-ticket__author">{item.author}</cite>
                  <span className="lux-testimonial-ticket__role">{item.role}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
