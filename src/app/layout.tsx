import type { Metadata } from "next";
import { Inter, Bangers } from "next/font/google";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";
import DragonBackground from "@/components/DragonBackground";
import FloatingIcons from "@/components/FloatingIcons";
import Banderoles from "@/components/Banderoles";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
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
      <body className={`${inter.variable} ${bangers.variable} antialiased`}>
        <Banderoles />
        <DragonBackground />
        <FloatingIcons />
        <SideNavigation />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
