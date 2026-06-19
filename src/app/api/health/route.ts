import { NextResponse } from "next/server";
import { db } from "@/shared/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await db.$queryRaw`SELECT 1`;
    const tables = await db.$queryRawUnsafe<{ table_name: string }[]>(
      `SELECT table_name FROM information_schema.tables 
       WHERE table_schema = 'public' AND table_name = 'Proposal'`
    );
    const hasProposalTable = tables.length > 0;

    return NextResponse.json({
      ok: true,
      db: true,
      tables: hasProposalTable,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Database connection failed";
    console.error("[health] DB check failed:", message);
    return NextResponse.json(
      { ok: false, db: false, error: message },
      { status: 503 }
    );
  }
}
