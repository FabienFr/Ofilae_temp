"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header({ variant }) {
  const [open, setOpen] = useState(false);
  const isHome = variant === "home";

  return (
    <header className={`${styles.header} ${isHome ? styles.headerHome : ""}`}>
      <nav className={styles.containerHeader}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={isHome ? "/LOGOS_SIMPLE_VERT.svg" : "/LOGOS_SIMPLE_BLANC.svg"}
              alt="Ofilae"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>
        {/* Menu centré (desktop) */}
        <div className={styles.menu}>
          <Link className={`${styles.menuItem} ${isHome ? styles.menuItemGreen : ""}`} href="/family-office">Family Office</Link>
          <Link className={`${styles.menuItem} ${isHome ? styles.menuItemGreen : ""}`} href="/engagements">Engagements</Link>
          <Link className={`${styles.menuItem} ${isHome ? styles.menuItemGreen : ""}`} href="/offre">Offre</Link>
          <Link className={`${styles.menuItem} ${isHome ? styles.menuItemGreen : ""}`} href="/equipe">Équipe</Link>
          <Link className={`${styles.menuItem} ${isHome ? styles.menuItemGreen : ""}`} href="/contact">Contact</Link>
        </div>
        {/* Pictos à droite (desktop) */}
        <div className={styles.pictos}>
          <a href="https://www.linkedin.com/company/ofilae" target="_blank" rel="noopener noreferrer" className={styles.pictoLink} aria-label="LinkedIn Ofilae">
            <Image src={isHome ? "/linkedin-green.svg" : "/linkedin.svg"} alt="LinkedIn" width={32} height={32} className={`${styles.picto} ${isHome ? styles.pictoGreen : ""}`} />
          </a>
          <a href="mailto:contact@ofilae.com" className={styles.pictoLink} aria-label="Contact Ofilae">
            <Image src={isHome ? "/ENVELOPPE_new_verte.svg" : "/ENVELOPPE _new_blanche.svg"} alt="Contact" width={32} height={32} className={`${styles.picto} ${isHome ? styles.pictoGreen : ""}`} />
          </a>
        </div>
        {/* Burger menu (mobile) */}
        <button className={`${styles.burger} ${open ? styles.burgerOpen : ''}`} onClick={() => setOpen(!open)} aria-label="Menu mobile">
          <div className={`${styles.burgerBar} ${styles.bar1} ${isHome ? styles.burgerBarGreen : ""}`}></div>
          <div className={`${styles.burgerBar} ${styles.bar2} ${isHome ? styles.burgerBarGreen : ""}`}></div>
          <div className={`${styles.burgerBar} ${styles.bar3} ${isHome ? styles.burgerBarGreen : ""}`}></div>
        </button>
      </nav>
      {/* Overlay menu mobile */}
      {open && (
        <div className={styles.mobileMenuOverlay} onClick={() => setOpen(false)}>
          <nav className={styles.mobileMenu} onClick={e => e.stopPropagation()}>
            <Link className={styles.mobileMenuItem} href="/family-office" onClick={()=>setOpen(false)}>Family Office</Link>
            <Link className={styles.mobileMenuItem} href="/engagements" onClick={()=>setOpen(false)}>Engagements</Link>
            <Link className={styles.mobileMenuItem} href="/offre" onClick={()=>setOpen(false)}>Offre</Link>
            <Link className={styles.mobileMenuItem} href="/equipe" onClick={()=>setOpen(false)}>Équipe</Link>
            <Link className={styles.mobileMenuItem} href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
            <div className={styles.mobilePictos}>
              <a href="https://www.linkedin.com/company/ofilae" target="_blank" rel="noopener noreferrer" className={styles.mobilePictoLink} aria-label="LinkedIn Ofilae">
                <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className={styles.mobilePicto} />
              </a>
              <a href="mailto:contact@ofilae.com" className={styles.mobilePictoLink} aria-label="Contact Ofilae">
                <Image src="/mail.svg" alt="Contact" width={32} height={32} className={styles.mobilePicto} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 