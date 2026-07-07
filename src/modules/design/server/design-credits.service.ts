import { db } from "@/shared/lib/db";

export const FREE_DESIGN_CREDITS = 3;

export async function getOrCreateCreditAccount(userId: string) {
  return db.designCreditAccount.upsert({
    where: { userId },
    create: { userId, balance: FREE_DESIGN_CREDITS },
    update: {},
  });
}

export async function getCreditBalance(userId: string): Promise<number> {
  const account = await getOrCreateCreditAccount(userId);
  return account.balance;
}

export async function deductCredit(userId: string): Promise<{ ok: true; balance: number } | { ok: false }> {
  const account = await getOrCreateCreditAccount(userId);
  if (account.balance < 1) return { ok: false };

  const updated = await db.designCreditAccount.update({
    where: { userId },
    data: {
      balance: { decrement: 1 },
      totalUsed: { increment: 1 },
    },
  });

  return { ok: true, balance: updated.balance };
}
