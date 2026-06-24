import { NextRequest, NextResponse } from "next/server";
import { bindProposalEditKey } from "@/modules/proposal/server/proposal-edit-access";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const key = req.nextUrl.searchParams.get("key");
  if (!key) {
    return NextResponse.redirect(new URL("/proposals/new", req.url));
  }

  const bound = await bindProposalEditKey(params.id, key);
  if (!bound) {
    return NextResponse.redirect(new URL("/proposals/new", req.url));
  }

  return NextResponse.redirect(new URL(`/proposals/${params.id}`, req.url));
}
