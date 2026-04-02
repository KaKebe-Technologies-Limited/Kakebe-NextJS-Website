import { getSiteConfig } from "@/lib/data-access";
import ContactClient from "./ContactClient";

export default async function ContactPage() {
  const siteConfig = await getSiteConfig();
  return <ContactClient siteConfig={siteConfig} />;
}
