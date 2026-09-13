"use client";

import dynamic from "next/dynamic";
import type { Locale } from "@/shared/i18n/locale";
import { getConversionCopy } from "../lib/conversion-copy";

const Viewer = dynamic(
  () => import("./interactive-unit-viewer-3d").then((m) => m.InteractiveUnitViewer3D),
  {
    ssr: false,
    loading: () => <UnitViewerSkeleton />,
  }
);

function UnitViewerSkeleton() {
  return (
    <section className="lux-section lux-section--linen lux-unit3d" aria-busy="true">
      <div className="lux-container">
        <div className="lux-unit3d__skeleton" />
      </div>
    </section>
  );
}

type Props = { locale: Locale };

/** Keeps Three.js off the server and reserves layout height to limit CLS. */
export function InteractiveUnitViewer3DLazy({ locale }: Props) {
  const copy = getConversionCopy(locale).unitViewer;
  return (
    <div className="lux-unit3d-root" data-label={copy.eyebrow}>
      <Viewer locale={locale} />
    </div>
  );
}
