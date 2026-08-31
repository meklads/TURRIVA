"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/shared/i18n/context";
import { localizePath } from "@/shared/i18n/path";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function ClientLocalizedLink({ href, ...props }: Props) {
  const locale = useLocale();
  return <Link href={localizePath(href, locale)} {...props} />;
}
