import Image from "next/image";

type Step = { label: string; hint: string };

type Props = {
  title: string;
  steps: readonly Step[];
};

const STEP_IMAGES = [
  "/brand/hero/step-confused.webp",
  "/brand/hero/step-writing.webp",
  "/brand/hero/step-happy.webp",
] as const;

/** Minimal editorial steps row. */
export function HeroStepsStrip({ title, steps }: Props) {
  return (
    <div className="ruwaq-hero-steps">
      <p className="ruwaq-hero-steps-title">{title}</p>

      <div className="relative mt-14 grid gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-12">
        {steps.map((step, i) => {
          const src = STEP_IMAGES[i];
          if (!src) return null;

          return (
            <article key={step.label} className="flex flex-col items-center text-center">
              <div className="ruwaq-hero-step-illustration">
                <Image
                  src={src}
                  alt={step.label}
                  width={280}
                  height={280}
                  className="ruwaq-hero-step-image"
                  priority={i === 0}
                />
              </div>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ruwaq-gold/80">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="ruwaq-hero-step-label mt-2">{step.label}</p>
              {step.hint ? <p className="ruwaq-hero-step-hint mt-1">{step.hint}</p> : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
