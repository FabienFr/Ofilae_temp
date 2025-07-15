import Image from 'next/image';
import styles from './mathilde-de-courcel.module.css';

export default function MathildeDeCourcel() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Mathilde-.jpg"
            alt="Mathilde de Courcel"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Mathilde de Courcel
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Family Officer associée & Directrice Générale Ofilae Paris
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Em Lyon + DU Gestion de patrimoine</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 23 ans d'expérience en salle des marchés et gestion de fortune</div>
          </div>
          <div className={styles.presentation}>
            Diplômée de l'EM Lyon, Mathilde intègre la salle de marché de BNP Paribas en tant que vendeuse de produits structurés à destination des Banques Privées. Après presque 10 ans, Mathilde reprend une formation de gestion de patrimoine à l'AUREP et rejoint BNP Paribas Wealth Management. D'abord au siège pour créer une offre dédiée aux Keyx Clients et ensuite pendant 8 ans en tant que Banquier Privé. En 2023, elle suit Jean-Marc pour relever le défi de créer Ofilae Paris avec la volonté commune de renforcer la qualité de l'accompagnement proposé aux familles en construisant une relation de proximité basée sur la confiance, la recherche d'impact, le conseil et l'adaptabilité aux besoins de chacun. Lorsqu'elle n'est pas au bureau, Mathilde est très engagée auprès d'associations qui lui tiennent à coeur et s'occupe de sa "nombreuse" famille !
          </div>
        </div>
      </div>
    </div>
  );
} 