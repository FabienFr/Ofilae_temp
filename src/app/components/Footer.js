import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.goldBar} />
      <div className={styles.bg} />
      <div className={styles.content}>
        <Image src="/Ofilae_Logo.svg" alt="Ofilae" width={340} height={120} className={styles.logo} />
      </div>
    </footer>
  );
}