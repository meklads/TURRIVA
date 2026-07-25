import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { PLAN_ORDER, PLANS } from "@/modules/billing/lib/plans";
import { isBillingEnabled } from "@/shared/lib/env";

export default async function PricingPage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const isAr = locale === "ar";
  const billingEnabled = isBillingEnabled();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="ruwaq-eyebrow">{t.pricing.eyebrow}</p>
      <h1 className="ruwaq-section-title mt-2">{t.pricing.title}</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-ruwaq-navy-soft">
        {t.pricing.subtitle}
      </p>

      {!billingEnabled && (
        <div className="mt-6 rounded-2xl border border-ruwaq-gold/30 bg-ruwaq-gold/5 px-5 py-4">
          <p className="text-sm font-medium text-ruwaq-navy">
            {t.pricing.trialActiveNote}
          </p>
        </div>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PLAN_ORDER.map((planId) => {
          const plan = PLANS[planId];
          const name = isAr ? plan.nameAr : plan.nameEn;
          const features = isAr ? plan.featuresAr : plan.featuresEn;
          const highlighted = planId === "starter";

          return (
            <div
              key={planId}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                highlighted
                  ? "border-ruwaq-gold shadow-lg shadow-ruwaq-gold/10"
                  : "border-ruwaq-stone/60"
              }`}
            >
              {highlighted && (
                <span className="absolute -top-3 right-6 rounded-full bg-ruwaq-gold px-3 py-1 text-xs font-semibold text-white">
                  {t.pricing.mostPopular}
                </span>
              )}

              <h2 className="font-display text-lg font-bold text-ruwaq-navy">
                {name}
              </h2>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-ruwaq-navy">
                  {plan.priceSar === 0
                    ? t.pricing.freeLabel
                    : `${plan.priceSar} ${isAr ? "ريال" : "SAR"}`}
                </span>
                {plan.priceSar > 0 && (
                  <span className="text-sm text-ruwaq-navy-soft/70">
                    {t.pricing.perMonth}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm font-medium text-ruwaq-gold">
                {plan.monthlyProposalLimit === null
                  ? t.pricing.unlimitedLabel
                  : `${plan.monthlyProposalLimit} ${t.pricing.proposalsPerMonth}`}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm leading-relaxed text-ruwaq-navy-soft"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ruwaq-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.priceSar === 0 ? (
                <a
                  href="/proposals/new"
                  className="btn-ruwaq-secondary mt-6 w-full py-2.5 text-center text-sm"
                >
                  {t.site.nav.startProposal}
                </a>
              ) : (
                <a
                  href={`mailto:hello@turriva.co?subject=${encodeURIComponent(
                    `${isAr ? "اشتراك باقة" : "Subscribe to"} ${name}`
                  )}`}
                  className="btn-ruwaq-primary mt-6 w-full py-2.5 text-center text-sm"
                >
                  {t.pricing.contactCta}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
