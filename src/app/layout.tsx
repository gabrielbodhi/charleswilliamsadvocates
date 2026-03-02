import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Williams Advocates — Buyer's Advocacy Melbourne",
  description:
    "A decade of insider real estate experience helping buyers and sellers make smarter property decisions across Melbourne.",
  keywords: [
    "buyer's advocate Melbourne",
    "property advocate",
    "buyer's agent",
    "Melbourne real estate",
    "property negotiation",
    "Williams Advocates",
  ],
  openGraph: {
    title: "Williams Advocates — Buyer's Advocacy Melbourne",
    description:
      "A decade of insider real estate experience helping buyers and sellers make smarter property decisions.",
    type: "website",
  },
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
