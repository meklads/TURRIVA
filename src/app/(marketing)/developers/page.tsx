import { redirect } from "next/navigation";
import { EXPERIENCE_PATH } from "@/modules/luxury/lib/real-estate-experience-copy";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";

export default async function DevelopersPage() {
  const locale = await getLocale();
  redirect(localizePath(EXPERIENCE_PATH, locale));
}
