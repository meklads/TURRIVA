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

      <div className="mt-10 flex flex-col items-center gap-12 sm:flex-row sm:items-start sm:justify-center sm:gap-8 lg:gap-12">
        {steps.map((step, i) => {
          const src = STEP_IMAGES[i];
          if (!src) return null;

          return (
            <article key={step.label} className="flex max-w-[11rem] flex-col items-center text-center sm:max-w-[9.5rem]">
              <div className="ruwaq-hero-step-illustration">
                <Image
                  src={src}
                  alt={`${step.label} — ${step.hint}`}
                  width={280}
                  height={280}
                  className="h-auto w-full object-contain"
                  priority={i === 0}
                />
              </div>
              <p className="ruwaq-hero-step-label mt-4">{step.label}</p>
              <p className="ruwaq-hero-step-hint mt-1">{step.hint}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
