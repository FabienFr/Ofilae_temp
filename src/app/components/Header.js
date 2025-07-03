"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  // (Mobile menu non prioritaire ici, on se concentre sur la version desktop premium)
  return (
    <header className={styles.header}>
      <nav className={styles.containerHeader}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/Ofilae_Logo.svg" alt="Ofilae" width={120} height={40} priority />
          </Link>
        </div>
        {/* Menu centré */}
        <div className={styles.menu}>
          <Link className={styles.menuItem} href="/family-office">Family Office</Link>
          <Link className={styles.menuItem} href="/engagements">Engagements</Link>
          <Link className={styles.menuItem} href="/offre">Offre</Link>
          <Link className={styles.menuItem} href="/equipe">Équipe</Link>
          <Link className={styles.menuItem} href="/contact">Contact</Link>
        </div>
        {/* Pictos à droite */}
        <div className={styles.pictos}>
          <a href="https://www.linkedin.com/company/ofilae" target="_blank" rel="noopener noreferrer" className={styles.pictoLink} aria-label="LinkedIn Ofilae">
            <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} className={styles.picto} />
          </a>
          <a href="mailto:contact@ofilae.com" className={styles.pictoLink} aria-label="Contact Ofilae">
            <Image src="/mail.svg" alt="Contact" width={32} height={32} className={styles.picto} />
          </a>
        </div>
      </nav>
    </header>
  );
} 