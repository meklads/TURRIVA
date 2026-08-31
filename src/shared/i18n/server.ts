import { cookies, headers } from "next/headers";
import {
  defaultLocale,
  isLocale,
  LOCALE_COOKIE,
  type Locale,
} from "./locale";
import { LOCALE_HEADER } from "./path";

export async function getLocale(): Promise<Locale> {
  const headerLocale = (await headers()).get(LOCALE_HEADER);
  if (isLocale(headerLocale)) return headerLocale;

  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : defaultLocale;
}
