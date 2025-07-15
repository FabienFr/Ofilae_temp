import Image from 'next/image';
import styles from './jean-marc-aveline.module.css';

export default function JeanMarcAveline() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Jean-Marc.jpg"
            alt="Jean-Marc Aveline"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Jean-Marc Aveline
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Family Officer associé & Président Ofilae Paris
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Master 2 en Gestion de Patrimoine</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 30 ans d'expérience en gestion de fortune</div>
          </div>
          <div className={styles.presentation}>
            Jean-Marc est diplômé du Master 2 de Gestion de Patrimoine de Clermont-Ferrand. Après 29 ans passés en Banque Privée, principalement dans les équipes de Gestion de Fortune chez BNP Paribas où il rencontre Mathilde et dirige une équipe de Banquiers, Jean-Marc développe la conviction que l'indépendance est gage d’objectivité dans l’exercice de son métier. C’est en se certifiant aux Métiers du Family Office (diplôme de l’AUREP en partenariat avec l’AFFO) que Jean-Marc fait la connaissance de Baptiste. De leur rencontre est née l’idée de créer, en associant Mathilde, Ofilae Paris pour rejoindre l’aventure entreprise créée par Baptiste à Lille deux ans plus tôt. Lorsqu’il n’est pas au bureau, Jean-Marc travaille encore un peu... Il écrit et enseigne la gestion de patrimoine, notamment à Dauphine et à l’Ecole Supérieur de Banque. Il est aussi passionné de photographie et apprécie par-dessus tout partager cet intérêt avec ses deux enfants.
          </div>
        </div>
      </div>
    </div>
  );
} 