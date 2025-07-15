import Image from 'next/image';
import styles from './celine-bernard.module.css';

export default function CelineBernard() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Celine-.jpg"
            alt="Céline Bernard"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Céline Bernard
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Family Officer associée
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Master 2 Finance et fiscalité + DU Gestion de patrimoine</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 25 ans d'expérience en DAF et Family Office</div>
          </div>
          <div className={styles.presentation}>
            Après un Master en finance et fiscalité, Céline intègre le groupe Auchan dans l'équipe de direction financière corporate, puis évolue en tant que fiscaliste internationale. Après dix années, elle entre au Family Office Mobilis, au seins du département Compensation & Benefits / rémunération des dirigeants pour mettre son expertise en fiscalité tant au service des entreprises que des personnes physiques. Cinq ans plus tard, et en parallèle de l'obtention d'un diplôme d'expert en gestion de patrimoine de l'AUREP, elle rejoint l'équipe patrimoniale chez Mobilis sous la responsabilité de Baptiste, qu'elle suit chez Ofilae en 2021 pour relever le défi d'un accompagnement de proximité de quelques familles, basé sur une confiance qu'elle sait instaurer, durable et privilégiée. Lorsqu'elle n'est pas au bureau, Céline aime passer du temps en famille et continuer à découvrir le monde qui l'entoure. Elle s'implique dans la vie associative, véritable et nécessaire source de sens pour elle.
          </div>
        </div>
      </div>
    </div>
  );
} 