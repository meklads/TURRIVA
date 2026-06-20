export type CompanyProfileLike = {
  companyName?: string | null;
  crNumber?: string | null;
  about?: string | null;
} | null;

/** Thin profile = missing name or both CR and about */
export function isCompanyProfileThin(profile: CompanyProfileLike): boolean {
  if (!profile?.companyName?.trim()) return true;
  const hasCr = !!profile.crNumber?.trim();
  const hasAbout = !!profile.about?.trim();
  return !hasCr && !hasAbout;
}
