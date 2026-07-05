import type { Metadata } from "next";
import { Geist, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ScrollEffects } from "@/components/ui/ScrollEffects";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Security Systems Management Inc. | 24/7 Protective Services",
    template: "%s | SSM Inc."
  },
  description: "SSM Inc. — licensed 24/7 security guard services, mobile patrol, and facilities management for government, commercial, industrial and residential clients. Operating since 2013 across California, Texas, Virginia, Washington D.C. and Fiji.",
  keywords: ["Security Guards", "Unarmed Security", "Mobile Patrol", "Facilities Management", "California Security", "Texas Security", "Virginia Security", "Fiji Security", "SSM Inc"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-bg text-text selection:bg-accent selection:text-bg">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollEffects />
          <Navbar />
          <main className="flex-1 flex flex-col pt-[90px]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
