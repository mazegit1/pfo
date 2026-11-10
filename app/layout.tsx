
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import CursorSpotlight from "@/components/Effects/CursorSpotlight";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import ThemeChanger from "@/components/ThemeChanger";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huseyn Khalil | Front-end Developer",
  description:
    "Huseyn Khalil — Front-end Developer specializing in Next.js, React, TypeScript and modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="layout relative flex min-h-full flex-col bg-brand-bg text-brand-text transition-colors duration-500">
        <CursorSpotlight />

        <Header />

        <main className="flex grow">
          {children}
        </main>

        <Footer />

        <ThemeChanger />
      </body>
    </html>
  );
}
