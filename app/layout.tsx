import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Navbar } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

// Load the DM Sans font with specified weights
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Metadata for SEO, social sharing, and web app configuration
export const metadata: Metadata = {
  title: "Light SaaS Landing Page",
  description:
    "A beautifully crafted SaaS landing page built with Next.js 15 and TypeScript.",
  applicationName: "Light SaaS",
  generator: "Next.js 15",
  referrer: "origin-when-cross-origin",
  keywords: [
    "SaaS",
    "Landing Page",
    "Next.js",
    "TypeScript",
    "React",
    "Web Development",
  ],
  authors: [
    { name: "Noor ul hassan", url: "https://github.com/noorulhassan" },
    {
      name: "Light SaaS Landing Page",
      url: "https://light-landingpage.vercel.app/",
    },
  ],
  creator: "Noor ul hassan",
  publisher: "Light SaaS",
  metadataBase: new URL("https://light-landingpage.vercel.app/"),
  openGraph: {
    title: "Light SaaS Landing Page",
    description:
      "Showcase your SaaS product with this modern landing page built on Next.js 15.",
    url: "https://light-landingpage.vercel.app/",
    siteName: "Light SaaS",
    images: [
      {
        url: "/assets/light-saas.webp",
        width: 1200,
        height: 630,
        alt: "Light SaaS Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Light SaaS Landing Page",
    description:
      "Showcase your SaaS product with this modern landing page built on Next.js 15.",
    images: ["/assets/light-saas.webp"],
  },
};

// Move colorScheme and themeColor to viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#EAEEFE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={twMerge(`${dmSans.className} antialiased bg-[#EAEEFE]`)}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
