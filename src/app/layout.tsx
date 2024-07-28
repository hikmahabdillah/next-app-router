"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname,useRouter } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // const router = useRouter();
  const disableNav = ['/login', '/register'];

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
        {!disableNav.includes(pathname) && <Navbar/>}
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
