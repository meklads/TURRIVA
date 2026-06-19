import { getSession } from "@/modules/auth/server/session";
import { db } from "@/shared/lib/db";
import { redirect } from "next/navigation";
import { CompanySettingsForm } from "@/modules/company/components/company-settings-form";

export const dynamic = "force-dynamic";

export default async function CompanySettingsPage() {
  const session = await getSession();
  if (!session?.user?.id) redirect("/login");

  const profile = await db.companyProfile.findUnique({
    where: { userId: session.user.id },
  });

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-xl font-bold text-gray-900">Company Settings</h1>
      <p className="mt-1 text-sm text-gray-500">
        Your branding appears on every proposal.
      </p>
      <div className="mt-6">
        <CompanySettingsForm
          userId={session.user.id}
          initial={profile}
        />
      </div>
    </div>
  );
}
