import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

type Props = {
  messages: LuxuryMessages;
};

export function LuxuryPortfolioViewer({ messages }: Props) {
  const p = messages.pages.portfolio;

  return (
    <section className="lux-section lux-section--linen">
      <div className="lux-container max-w-6xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="lux-eyebrow">{p.viewerEyebrow}</p>
            <h2 className="lux-display mt-2 text-xl sm:text-2xl">{p.viewerTitle}</h2>
          </div>
          <a
            href="/api/portfolio/file"
            download="Turriva-Folio-2026.pdf"
            className="lux-btn-outline-gold shrink-0 text-center"
          >
            {p.downloadCta}
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-lux-sand bg-white shadow-lux-card">
          <iframe
            title={p.viewerTitle}
            src="/api/portfolio/file"
            className="h-[min(80vh,920px)] w-full"
          />
        </div>
      </div>
    </section>
  );
}
