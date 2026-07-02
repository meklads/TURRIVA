import { getSession } from "@/modules/auth/server/session";
import { db } from "@/shared/lib/db";
import { redirect } from "next/navigation";
import { CompanySettingsForm } from "@/modules/company/components/company-settings-form";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";
import { AppPageHero } from "@/shared/components/app-page-hero";
import { isBillingEnabled } from "@/shared/lib/env";

export const dynamic = "force-dynamic";

export default async function CompanySettingsPage() {
  const session = await getSession();
  if (!session?.user?.id) redirect("/login");

  const locale = await getLocale();
  const t = getMessages(locale);

  const profile = await db.companyProfile.findUnique({
    where: { userId: session.user.id },
  });

  return (
    <>
      <AppPageHero
        eyebrow={t.nav.settings}
        title={t.company.title}
        subtitle={t.company.subtitle}
      />
      <div className="app-content-area max-w-2xl">
        <div className="ruwaq-form-card">
          <CompanySettingsForm initial={profile} billingEnabled={isBillingEnabled()} />
        </div>
      </div>
    </>
  );
}
