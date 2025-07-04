"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/sofia-pro.css";
import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";
import { usePathname } from 'next/navigation';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="fr">
      <body style={{background: '#fff'}}>
        <BootstrapClient />
        <Header />
        <main style={{minHeight: '70vh'}}>{children}</main>
        {pathname !== '/' && <Footer />}
      </body>
    </html>
  );
}
