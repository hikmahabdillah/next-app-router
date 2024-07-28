"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  
  useEffect(() => {
    const disableNav = ['/login', '/register'];
    const validRoutes = ['/dashboard', '/profile', '/about', '/about/profile', '/product', '/product/detail'];
    const isDisableNav = disableNav.includes(pathname);
    const isValidRoute = validRoutes.some(route => pathname.startsWith(route));

    if (isDisableNav || (!isValidRoute && pathname !== '/')) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {showNavbar && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
