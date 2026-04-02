import { getTeamMembers } from "@/lib/data-access";
import TeamClient from "./TeamClient";

export default async function TeamPage() {
  const team = await getTeamMembers();
  return <TeamClient team={team} />;
}
