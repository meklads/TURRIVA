import { NextRequest, NextResponse } from "next/server";
import {
  bindProposalEditKey,
  hasProposalEditAccess,
} from "@/modules/proposal/server/proposal-edit-access";
import { generateProposalContent } from "@/modules/proposal/server/proposal-ai.service";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    let body: { editKey?: string } = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    if (body.editKey) {
      await bindProposalEditKey(params.id, body.editKey);
    }

    const allowed = await hasProposalEditAccess(params.id);
    if (!allowed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await generateProposalContent(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Generation failed";
    console.error("[generate] proposal", params.id, error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
