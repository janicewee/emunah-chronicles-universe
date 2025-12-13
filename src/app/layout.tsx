import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emunah Chronicles Universe | Christian Speculative Fiction by Janice Wee",
  description: "Explore the Emunah Chronicles Universe - a speculative science fiction fantasy series set in the end times. Discover books, characters, and reading order.",
  icons: {
    icon: '/icon.png',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-mystical min-h-screen`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}