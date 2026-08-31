import Link from "next/link";
import type { ComponentProps } from "react";
import { getLocale } from "@/shared/i18n/server";
import { localizePath } from "@/shared/i18n/path";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export async function LocalizedLink({ href, ...props }: Props) {
  const locale = await getLocale();
  return <Link href={localizePath(href, locale)} {...props} />;
}
