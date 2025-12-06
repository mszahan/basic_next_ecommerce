import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./Navbar";

export const metadata: Metadata = {
  title: "Ecommerce website",
  description: "Full stack ecommerce website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
