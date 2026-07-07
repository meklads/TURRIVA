"use client";

import { useCallback, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
};

export function DesignBeforeAfter({ beforeSrc, afterSrc, beforeLabel, afterLabel }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState(50);

  const onMove = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(95, Math.max(5, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="design-before-after"
      style={{ "--split": `${split}%` } as React.CSSProperties}
      onPointerDown={(e) => {
        onMove(e.clientX);
        const onPointerMove = (ev: PointerEvent) => onMove(ev.clientX);
        const onPointerUp = () => {
          window.removeEventListener("pointermove", onPointerMove);
          window.removeEventListener("pointerup", onPointerUp);
        };
        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
      }}
    >
      <img src={beforeSrc} alt={beforeLabel} draggable={false} />
      <img
        src={afterSrc}
        alt={afterLabel}
        className="design-before-after__after"
        draggable={false}
      />
      <span className="design-ba-label design-ba-label--before">{beforeLabel}</span>
      <span className="design-ba-label design-ba-label--after">{afterLabel}</span>
      <div className="design-before-after__handle" style={{ left: `${split}%` }} />
    </div>
  );
}
