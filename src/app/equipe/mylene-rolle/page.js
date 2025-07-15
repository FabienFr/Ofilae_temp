import Image from 'next/image';
import styles from './mylene-rolle.module.css';

export default function MyleneRolle() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Mylene-.jpg"
            alt="Mylène Rolle"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Mylène Rolle
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Family Officer associée
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Master 2 Notaire + Master 2 Gestion de Patrimoine</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 17 ans d'expérience en étude notariale et Family Office</div>
          </div>
          <div className={styles.presentation}>
            Auvergnate d'origine, Mylène intègre d'abord le Master 2 en gestion de Patrimoine de Clermont-Ferrand, puis un Master 2 en Droit Notarial qui lui permet d'évoluer pendant 7 ans au sein de l'étude parisienne Cheuvreux en tant que Notaire. Après une année d'évasion à Hong Kong, elle entre dans un Family office parisien où sa formation de juriste offre à la structure une complémentarité de profils pertiente. Elle rejoint 5 ans plus tard l'équipe de Baptiste au Family office Mobilis, puis le suit chez Ofilae, stimulée par la confiance qu'elle sait pouvoir faire naître dans les familles qu'elle conseille au quotidien. Lorsqu'elle n'est pas au bureau, Mylène aime découvrir les merveilles infinies qu'offre notre planète et ses océans. Curieuse de nature, elle aime toujours faire la rencontre de nouvelles personnes.
          </div>
        </div>
      </div>
    </div>
  );
} 