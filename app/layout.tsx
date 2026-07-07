import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Components Imports
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import ThemeChanger from "@/components/ThemeChanger"; // Yolunu layihənə uyğun tənzimləyərsən

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
  // Qeyd: Əgər Header daxilində artıq bir state və ya funksiyalar vasitəsilə 
  // menyunun açıq/qapalı olması idarə edilirsə, bu state-i bura qaldırıb (lifting state up)
  // hər iki komponentə sinxron şəkildə paylayırıq.
  
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning // Dark mode local storage oxunarkən hydration xətalarının qarşısını alır
    >
      <body className="layout relative min-h-full flex flex-col bg-brand-bg text-brand-text transition-colors duration-500">
        {/* Header-ə menyunun state-ini və onu dəyişəcək funksiyanı (prop olaraq) ötürə bilərsən */}
        <Header />
        
        <main className="flex grow">
          {children}
        </main>
        
        <Footer />
        
        {/* ThemeChanger sağ aşağıda sabit qalacaq və Header menyusu açılanda avtomatik itəcək */}
        {/* Əgər Header daxilindəki state-i bura bağlamaq istəsən, <ThemeChanger isMenuOpen={isMenuOpen} /> yaza bilərsən */}
        <ThemeChanger />
      </body>
    </html>
  );
}