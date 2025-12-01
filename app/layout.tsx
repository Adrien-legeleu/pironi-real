import type { Metadata } from "next";
import { Poppins, Libre_Baskerville, Caveat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Pironi - Services de mobilité sur mesure",
  description: "Location sans permis, transport logistique et chauffeur privé. Une même exigence de sérieux, de confort et de flexibilité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${libreBaskerville.variable} ${caveat.variable} bg-background text-foreground antialiased min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <main className="flex-grow">{children}</main>
       
      </body>
    </html>
  );
}
