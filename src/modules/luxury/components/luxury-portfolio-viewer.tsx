"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ShareButton } from "@/shared/components/share-button";
import type { LuxuryMessages } from "@/shared/i18n/messages/luxury";

type Props = {
  messages: LuxuryMessages;
  shareLabel: string;
  copyLabel: string;
  copiedLabel: string;
  shareUrl: string;
};

export function LuxuryPortfolioViewer({ messages, shareLabel, copyLabel, copiedLabel, shareUrl }: Props) {
  const p = messages.pages.portfolio;
  const viewerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const exitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    }
    setIsFullscreen(false);
  }, []);

  const enterFullscreen = useCallback(async () => {
    const el = viewerRef.current;
    if (!el) return;

    setIsFullscreen(true);

    if (typeof el.requestFullscreen === "function") {
      try {
        await el.requestFullscreen();
      } catch {
        // CSS overlay fallback when native fullscreen is blocked (common on mobile).
      }
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      void enterFullscreen();
    }
  }, [enterFullscreen, exitFullscreen, isFullscreen]);

  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isFullscreen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") exitFullscreen();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [exitFullscreen, isFullscreen]);

  return (
    <section className={`lux-section lux-section--linen ${isFullscreen ? "lux-portfolio-viewer--expanded" : ""}`}>
      <div className={`lux-container max-w-6xl ${isFullscreen ? "max-w-none px-0" : ""}`}>
        {!isFullscreen && (
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="lux-eyebrow">{p.viewerEyebrow}</p>
              <h2 className="lux-display mt-2 text-xl sm:text-2xl">{p.viewerTitle}</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => void enterFullscreen()} className="lux-btn-primary shrink-0">
                {p.fullscreenCta}
              </button>
              <ShareButton
                url={shareUrl}
                title={p.viewerTitle}
                shareLabel={shareLabel}
                copyLabel={copyLabel}
                copiedLabel={copiedLabel}
              />
              <a
                href="/api/portfolio/file"
                download="Turriva-Folio-2026.pdf"
                className="lux-btn-outline-gold shrink-0 text-center"
              >
                {p.downloadCta}
              </a>
            </div>
          </div>
        )}

        <div
          ref={viewerRef}
          className={
            isFullscreen
              ? "lux-portfolio-viewer__frame lux-portfolio-viewer__frame--fullscreen"
              : "lux-portfolio-viewer__frame overflow-hidden rounded-xl border border-lux-sand bg-white shadow-lux-card"
          }
        >
          {isFullscreen && (
            <div className="lux-portfolio-viewer__toolbar">
              <p className="lux-portfolio-viewer__toolbar-title">{p.viewerTitle}</p>
              <div className="lux-portfolio-viewer__toolbar-actions">
                <a
                  href="/api/portfolio/file"
                  download="Turriva-Folio-2026.pdf"
                  className="lux-portfolio-viewer__toolbar-btn"
                >
                  {p.downloadCta}
                </a>
                <button type="button" onClick={toggleFullscreen} className="lux-portfolio-viewer__toolbar-btn">
                  {p.exitFullscreenCta}
                </button>
              </div>
            </div>
          )}

          <iframe
            title={p.viewerTitle}
            src="/api/portfolio/file"
            className={isFullscreen ? "lux-portfolio-viewer__iframe--fullscreen" : "lux-portfolio-viewer__iframe"}
          />
        </div>
      </div>
    </section>
  );
}
