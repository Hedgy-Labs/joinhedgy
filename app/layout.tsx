import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Join Hedgy - Candidate Sourcing",
  description: "The candidate sourcing arm of Hedgy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
