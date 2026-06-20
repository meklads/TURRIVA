"use client";

import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

/** Compact app hero — breathing room below sticky header (PandaDoc / Linear pattern). */
export function AppPageHero({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="app-page-hero" aria-labelledby="app-page-title">
      <div className="app-page-hero-inner">
        {eyebrow ? <p className="ruwaq-eyebrow">{eyebrow}</p> : null}
        <h1
          id="app-page-title"
          className="mt-2 font-display text-2xl font-extrabold leading-tight tracking-tight text-ruwaq-navy sm:text-[1.75rem]"
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ruwaq-navy-soft sm:text-base">
            {subtitle}
          </p>
        ) : null}
        {children ? <div className="mt-4 flex flex-wrap items-center gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
