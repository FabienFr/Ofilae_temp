import Image from 'next/image';
import styles from './clement-pruvost.module.css';

export default function ClementPruvost() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Clement-.jpg"
            alt="Clément Pruvost"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Clément Pruvost
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Responsable du Middle Office
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Master 2 Mines - Telecom</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 5 ans d'expériences en SSII et banque</div>
          </div>
          <div className={styles.presentation}>
            Titulaire d'un Master en Systèmes d'information appliqués à la Finance d'Institut Mines Télécom Business School, Clément démarre sa carrière professionnelle en tant que consultant dans le domaine bancaire. Après plusieurs expériences en banque et finance durant lesquelles il travaille sur la création de différents reportings financiers et de conformité, mais également sur de l'automatisation auprès des métiers, il rejoint Ofilae afin d'élaborer avec Baptiste, la stratégie Data et mettre en place les outils de consolidation et d'allocations d'actifs. Passionné de lecture, il en va de même pour le sport et s'adonne à des séances de course à pied matinales dès le lever du soleil afin de démarrer la journée du bon pied. Il publie également régulièrement des tutos Excel sur LinkedIn.
          </div>
        </div>
      </div>
    </div>
  );
} 