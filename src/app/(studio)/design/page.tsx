import type { Metadata } from "next";
import { DesignHomePage } from "@/modules/design/components/design-home-page";
import { getLocale } from "@/shared/i18n/server";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Turriva design preview (internal)",
};

export default async function DesignStudioPage() {
  const locale = await getLocale();
  return <DesignHomePage locale={locale} />;
}
