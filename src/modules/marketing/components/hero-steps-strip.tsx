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

/** Static 3-step row with cartoon character illustrations. */
export function HeroStepsStrip({ title, steps }: Props) {
  return (
    <div className="ruwaq-hero-steps">
      <p className="ruwaq-hero-steps-title">{title}</p>

      <div className="relative mt-12 flex flex-col items-center gap-14 sm:mt-14 sm:flex-row sm:items-start sm:justify-center sm:gap-6 lg:gap-10">
        {steps.map((step, i) => {
          const src = STEP_IMAGES[i];
          if (!src) return null;

          return (
            <article
              key={step.label}
              className="relative flex max-w-[13rem] flex-col items-center text-center sm:max-w-[11.5rem]"
            >
              {i < steps.length - 1 ? (
                <span
                  className="pointer-events-none absolute top-[5.5rem] hidden h-px w-[calc(100%+1.5rem)] bg-gradient-to-r from-ruwaq-stone/70 to-transparent sm:block ltr:left-[calc(50%+5.5rem)] rtl:right-[calc(50%+5.5rem)] rtl:bg-gradient-to-l"
                  aria-hidden
                />
              ) : null}
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
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-ruwaq-brown/80">
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
