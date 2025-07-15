import Image from 'next/image';
import styles from './oscar-guesdon.module.css';

export default function OscarGuesdon() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Oscar_.jpg"
            alt="Oscar Guesdon"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Oscar Guesdon
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Apprenti Assistant Family Officer
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Master 2 en Gestion de Patrimoine</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> -</div>
          </div>
          <div className={styles.presentation}>
            Originaire d’Orléans, Oscar obtient d’abord une Licence en Comptabilité et Finance dans sa ville natale. Il poursuit aujourd’hui son parcours académique au sein du Master Gestion de Patrimoine de Clermont-Ferrand. Il intègre Ofilae Paris pour un stage en avril 2024 et y découvre un environnement stimulant et enrichissant le conduisant naturellement à poursuivre cette expérience en alternance. Il assiste ainsi les Family Officers parisiens sur des thématiques variées. Lorsqu’il n’est pas au bureau, Oscar aime se plonger dans l’univers du cinéma, découvrir des expositions et partir en voyage.
          </div>
        </div>
      </div>
    </div>
  );
} 