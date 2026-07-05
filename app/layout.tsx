import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Import your Header and Footer components
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "made by Huseyn Khalil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 2. Place them around the {children} inside the body */}
      <body className="layout">
        <Header />
        
        <main className="flex grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}