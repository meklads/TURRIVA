import { getProposal, listUserProposals } from "./proposal.service";
import { getSession } from "@/modules/auth/server/session";

export async function getProposalQuery(id: string) {
  return getProposal(id);
}

export async function listProposalsQuery() {
  const session = await getSession();
  if (!session?.user?.id) return [];
  return listUserProposals(session.user.id);
}
