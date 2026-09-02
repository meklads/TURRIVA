import { notFound } from "next/navigation";
import { luxuryPageMetadata } from "@/modules/luxury/lib/metadata";
import { LuxuryServiceLandingPage } from "@/modules/luxury/components/luxury-service-landing-page";
import { getServiceLanding, serviceLandingText } from "@/modules/luxury/lib/service-landings";
import { SERVICE_LANDINGS } from "@/modules/luxury/lib/service-landings";
import { getLocale } from "@/shared/i18n/server";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICE_LANDINGS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const landing = getServiceLanding(slug);
  if (!landing) return {};
  const text = serviceLandingText(landing, locale);
  return luxuryPageMetadata(locale, text.title, text.intro, { path: `/services/${slug}`, ogImage: landing.image });
}

export default async function ServiceLandingRoute({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const landing = getServiceLanding(slug);
  if (!landing) notFound();

  return <LuxuryServiceLandingPage locale={locale} slug={slug} />;
}
