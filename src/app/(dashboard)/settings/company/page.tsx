import { getSession } from "@/modules/auth/server/session";
import { db } from "@/shared/lib/db";
import { redirect } from "next/navigation";
import { CompanySettingsForm } from "@/modules/company/components/company-settings-form";
import { getMessages } from "@/shared/i18n";
import { getLocale } from "@/shared/i18n/server";

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
    <div className="mx-auto max-w-2xl">
      <h1 className="text-xl font-bold text-gray-900">{t.company.title}</h1>
      <p className="mt-1 text-sm text-gray-500">{t.company.subtitle}</p>
      <div className="mt-6">
        <CompanySettingsForm initial={profile} />
      </div>
    </div>
  );
}
