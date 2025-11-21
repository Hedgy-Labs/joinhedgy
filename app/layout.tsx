import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["sans-serif"],
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  fallback: ["serif"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Join Hedgy - Candidate Sourcing",
  description:
    "Hedgy is a personal recruiter who refers top tech workers to their ideal startup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
