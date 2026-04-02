import { getValues, getMetrics } from "@/lib/data-access";
import AboutClient from "./AboutClient";

export default async function AboutPage() {
  const [values, metrics] = await Promise.all([getValues(), getMetrics()]);
  return <AboutClient values={values} metrics={metrics} />;
}
