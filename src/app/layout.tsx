import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

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
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="e6d16f2c-b7f0-4f0e-b771-46c833fc4474"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-mystical min-h-screen`}
      >
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="81268eda-35d8-4cc1-9a2d-ad62e11509a4"
        />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}