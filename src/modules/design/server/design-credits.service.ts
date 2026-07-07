import { db } from "@/shared/lib/db";
import { isBillingEnabled } from "@/shared/lib/env";

export const FREE_DESIGN_CREDITS = 3;

/** Unlimited generations while billing is off, or when DESIGN_CREDITS_UNLIMITED=true. */
export function isDesignCreditsUnlimited(): boolean {
  const flag = process.env.DESIGN_CREDITS_UNLIMITED?.trim().toLowerCase();
  if (flag === "true") return true;
  if (flag === "false") return false;
  return !isBillingEnabled();
}

export async function getOrCreateCreditAccount(userId: string) {
  return db.designCreditAccount.upsert({
    where: { userId },
    create: { userId, balance: FREE_DESIGN_CREDITS },
    update: {},
  });
}

export async function getCreditBalance(userId: string): Promise<number> {
  const account = await getOrCreateCreditAccount(userId);
  if (isDesignCreditsUnlimited()) return Math.max(account.balance, 999);
  return account.balance;
}

export async function deductCredit(userId: string): Promise<{ ok: true; balance: number } | { ok: false }> {
  if (isDesignCreditsUnlimited()) {
    const balance = await getCreditBalance(userId);
    return { ok: true, balance };
  }

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

export async function refundCredit(userId: string): Promise<void> {
  if (isDesignCreditsUnlimited()) return;

  await db.designCreditAccount.update({
    where: { userId },
    data: {
      balance: { increment: 1 },
      totalUsed: { decrement: 1 },
    },
  });
}
