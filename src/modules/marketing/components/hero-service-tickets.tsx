type Ticket = { icon: string; title: string; body: string };

type Props = {
  tickets: readonly Ticket[];
};

const TICKET_DELAYS = ["", "ruwaq-reveal-delay-1", "ruwaq-reveal-delay-2", "ruwaq-reveal-delay-3"] as const;

/** Service value cards overlapping hero bottom — mockup-style tickets. */
export function HeroServiceTickets({ tickets }: Props) {
  return (
    <div className="ruwaq-hero-tickets">
      {tickets.map((ticket, i) => {
        const delayClass = TICKET_DELAYS[i] ?? "ruwaq-reveal-delay-3";

        return (
          <article key={ticket.title} className={`ruwaq-hero-ticket ruwaq-reveal ${delayClass}`.trim()}>
            <span className="ruwaq-hero-ticket-icon" aria-hidden>
              {ticket.icon}
            </span>
            <h3 className="ruwaq-hero-ticket-title">{ticket.title}</h3>
            <p className="ruwaq-hero-ticket-body">{ticket.body}</p>
          </article>
        );
      })}
    </div>
  );
}
