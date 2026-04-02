import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PublicShell from "@/components/layout/PublicShell";
import { getSiteConfig } from "@/lib/data-access";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = await getSiteConfig();
  return {
    metadataBase: new URL("https://kakebe-hub.com"),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: ["Innovation", "Hub", "Uganda", "Technology", "Community"],
    authors: [{ name: "Kakebe Hub Team" }],
    creator: "Kakebe",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://kakebe-hub.com",
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: ["/og-image.png"],
      creator: "@kakebe_hub",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteConfig = await getSiteConfig();
  return (
    <html lang="en">
      <body className={inter.className}>
        <PublicShell siteName={siteConfig.name} siteConfig={siteConfig}>
          {children}
        </PublicShell>
      </body>
    </html>
  );
}
