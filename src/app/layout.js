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
  const isHome = pathname === "/";

  return (
    <html lang="fr">
      <body style={{background: '#fff'}}>
        <BootstrapClient />
        {isHome && (
          <>
            <video
              src="/Home.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="videoDesktop"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                zIndex: -1,
                pointerEvents: "none",
                display: "block"
              }}
            />
            <video
              src="/Home-mobile.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="videoMobile"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                zIndex: -1,
                pointerEvents: "none",
                display: "none"
              }}
            />
          </>
        )}
        <Header variant={isHome ? "home" : undefined} />
        <main style={{minHeight: '70vh'}}>{children}</main>
        {pathname !== '/' && <Footer />}
      </body>
    </html>
  );
}
