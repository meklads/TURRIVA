"use client";

import { useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

type Props = {
  open: boolean;
  src: string;
  title: string;
  closeLabel: string;
  onClose: () => void;
};

export function LuxuryStyleLightbox({ open, src, title, closeLabel, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="lux-style-lightbox" role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className="lux-style-lightbox__backdrop" aria-label={closeLabel} onClick={onClose} />
      <div className="lux-style-lightbox__panel">
        <button type="button" className="lux-style-lightbox__close" onClick={onClose} aria-label={closeLabel}>
          <X strokeWidth={1.75} aria-hidden />
        </button>
        <figure className="lux-style-lightbox__figure">
          {/* Native img keeps full resolution and natural aspect in the overlay */}
          <img src={src} alt="" className="lux-style-lightbox__img" />
          {title ? <figcaption className="lux-style-lightbox__caption">{title}</figcaption> : null}
        </figure>
      </div>
    </div>
  );
}

export function LuxuryStyleZoomHint({ label }: { label: string }) {
  return (
    <span className="lux-style-card__zoom-hint" aria-hidden>
      <ZoomIn strokeWidth={1.5} />
      <span>{label}</span>
    </span>
  );
}
