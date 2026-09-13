"use client";

import { useEffect } from "react";
import { trackMarketingEvent } from "@/shared/lib/marketing-events";

type Props = {
  slug: string;
  title: string;
  embedUrl: string;
};

/** YouTube embed that fires case_study_video_played once when mounted into view. */
export function LuxuryCaseStudyVideo({ slug, title, embedUrl }: Props) {
  useEffect(() => {
    trackMarketingEvent("case_study_video_played", { slug, title });
  }, [slug, title]);

  return (
    <div className="lux-case-video relative aspect-video overflow-hidden rounded-xl bg-lux-ink shadow-lux-card">
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
