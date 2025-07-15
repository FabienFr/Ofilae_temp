import Image from 'next/image';
import styles from './armand-de-almeida.module.css';

export default function ArmandDeAlmeida() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Armand_.jpg"
            alt="Armand de Almeida"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Armand de Almeida
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Apprenti Assistant Middle Office
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Master 2 Gestion de Patrimoine</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> -</div>
          </div>
          <div className={styles.presentation}>
            Fraîchement arrivé en juillet 2024, Armand rejoint l’équipe d’Ofilae en alternance dans le cadre de son Master 1 Droit et Gestion de Patrimoine de Lille. Après un échange universitaire en Azerbaïdjan, il débute cette première expérience sous la supervision de Pierre-Yves au pôle Investissement. Lorsqu’il n’est pas au bureau, Armand consacre du temps à sa famille, aux voyages et à son sport favori : le water-polo. Toujours de bonnes occasions pour échanger et apprendre.
          </div>
        </div>
      </div>
    </div>
  );
} 