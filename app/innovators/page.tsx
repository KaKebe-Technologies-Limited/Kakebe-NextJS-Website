import { getInnovators } from "@/lib/data-access";
import InnovatorsClient from "./InnovatorsClient";

export default async function InnovatorsPage() {
  const innovators = await getInnovators();
  return <InnovatorsClient innovators={innovators} />;
}
