import { getPrograms } from "@/lib/data-access";
import ProgramsClient from "./ProgramsClient";

export default async function ProgramsPage() {
  const programs = await getPrograms();
  return <ProgramsClient programs={programs} />;
}
