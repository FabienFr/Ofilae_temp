import Image from 'next/image';
import styles from './hippolyte-bourlet.module.css';

export default function HippolyteBourlet() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Hippolyte-.jpg"
            alt="Hippolyte Bourlet"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Hippolyte Bourlet
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Apprenti Chef de projet Data
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Master 2 Ingénierie Financière et Statistique + master 2 Management de projet</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> -</div>
          </div>
          <div className={styles.presentation}>
            En deuxième année de cursus d'Ingénierie Financière et Statistique à l'ESME SUDRIA, Hippolyte prépare un double Master en Management de projet à l'ISG. Après une première expérience en tant qu'Opérateur stagiaire dans le domaine bancaire, il développe un reporting patrimonial pour une foncière lilloise. Il rejoint l'équipe Ofilae en tant qu'alternant chef de projet data finance, afin d'épauler Clément sur la stratégie Data et la mise en place d'outils de consolidation et d'allocation d'actifs. Lorsqu'il n'est pas au bureau, Hippolyte se passionne pour l'automobile et les sports mécaniques et apprécie les moments d'échange et de convivialité entre passionnées. Il partage également avec ses proches un fort attrait pour l'immobilier.
          </div>
        </div>
      </div>
    </div>
  );
} 