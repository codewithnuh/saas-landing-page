import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Navbar } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={twMerge(
          `${geistSans.variable} ${geistMono.variable} antialiased bg-[#EAEEFE]`
        )}
      >
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
