import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Navbar } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Light Saas landing page",
  description: "Saas landing page built with Next js 15 and typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(`${dmSans.className} antialiased bg-[#EAEEFE]`)}>
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
