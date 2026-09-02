import { permanentRedirect } from "next/navigation";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";

/** City hub replaced by Markets — keep route for bookmarks/SEO. */
export default async function LocationsPage() {
  const locale = await getLocale();
  permanentRedirect(localizePath("/markets", locale));
}
