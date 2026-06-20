import {
  HeroIconDraft,
  HeroIconExport,
  HeroIconWrite,
  HeroStepIconWrap,
} from "@/modules/marketing/components/hero-step-icons";

type Step = { label: string; hint: string };

type Props = {
  title: string;
  steps: readonly Step[];
};

function StepIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <HeroIconWrite />;
    case 1:
      return <HeroIconDraft />;
    default:
      return <HeroIconExport />;
  }
}

/** Static 3-step row — simple, clear, no interaction. */
export function HeroStepsStrip({ title, steps }: Props) {
  return (
    <div className="ruwaq-hero-steps">
      <p className="ruwaq-hero-steps-title">{title}</p>

      <div className="mt-10 flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-6 lg:gap-10">
        {steps.map((step, i) => (
          <article key={step.label} className="flex max-w-[9rem] flex-col items-center text-center">
            <HeroStepIconWrap index={i}>
              <StepIcon index={i} />
            </HeroStepIconWrap>
            <p className="ruwaq-hero-step-label mt-4">{step.label}</p>
            <p className="ruwaq-hero-step-hint mt-1">{step.hint}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
