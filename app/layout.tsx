import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import HeaderEvent from "./Event/headerEvent";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400",], // choose weights you need
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.className}`}
      >

        {children}
      </body>
    </html>
  );
}
