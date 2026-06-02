import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Birongona IT | Enterprise Infrastructure & Data Center Solutions",
    template: "%s | Birongona IT"
  },
  description: "Dhaka's leading precision-engineered IT infrastructure agency. Providing high-availability network security SLA, carrier-neutral data centers, and enterprise IP telephony solutions in Bangladesh.",
  keywords: [
    "Birongona IT",
    "IT Infrastructure Bangladesh",
    "Data Center Solutions Dhaka",
    "Network Security SLA",
    "Enterprise Networking",
    "IP Telephony Integration Bangladesh",
    "Fire Suppression Systems"
  ],
  authors: [{ name: "Md Nayeem", url: "https://nayeem-miah.vercel.app/" }],
  creator: "Birongona IT",
  publisher: "Birongona IT",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://birongona.it",
    title: "Birongona IT | Enterprise Infrastructure & Data Center Solutions",
    description: "Dhaka's leading precision-engineered IT infrastructure agency. Providing high-availability network security SLA, carrier-neutral data centers, and enterprise IP telephony solutions.",
    siteName: "Birongona IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birongona IT | Enterprise Infrastructure & Data Center Solutions",
    description: "Dhaka's leading precision-engineered IT infrastructure agency. Providing high-availability network security SLA, carrier-neutral data centers, and enterprise IP telephony solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
