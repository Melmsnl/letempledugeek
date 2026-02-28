import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundSVG from "@/components/BackgroundSVG";
import SideNavigation from "@/components/SideNavigation";
import FloatingIcons from "@/components/FloatingIcons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Le Temple du Geek - Caen",
  description: "Salon de thé à la culture japonaise et geek à Caen. Pâtisseries, bubble teas et produits dérivés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} antialiased text-foreground min-h-screen relative`}>
        <BackgroundSVG />
        <FloatingIcons />
        <SideNavigation />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
