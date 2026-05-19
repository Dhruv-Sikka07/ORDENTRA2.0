import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORDENTRA - The Enterprise OPEX Platform",
  description:
    "ORDENTRA unifies Order Management, Trade Operations and Inventory Control on one intelligent OPEX platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-clip antialiased">{children}</body>
    </html>
  );
}
