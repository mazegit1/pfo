import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import ThemeChanger from "@/components/ThemeChanger";
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
      suppressHydrationWarning 
    >
      <body className="layout relative min-h-full flex flex-col bg-brand-bg text-brand-text transition-colors duration-500">
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