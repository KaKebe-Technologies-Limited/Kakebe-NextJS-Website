import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kakebe-hub.com"), // Replace with your actual domain
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, // Allows pages to have titles like "About | Kakebe Hub"
  },
  description: siteConfig.description,
  keywords: ["Innovation", "Hub", "Uganda", "Technology", "Community"], // Add your keywords
  authors: [{ name: "Kakebe Hub Team" }],
  creator: "Kakebe Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kakebe-hub.com",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png", // Place this image in your /public folder
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
