import Image from 'next/image';
import styles from './sandrine-meens.module.css';

export default function SandrineMeens() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Sandrine-.jpg"
            alt="Sandrine Méens"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Sandrine Méens
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Responsable du Secrétariat Privé
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Licence de Lettres & BTS assistante de direction</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 17 ans d'expérience en office management</div>
          </div>
          <div className={styles.presentation}>
            Initialement destinée à une carrière dans l'Education nationale, Sandrine fait le choix de se former à l'assistanat de direction. Elle occupe plusieurs postes dans différents secteurs d'activité comme le conseil en Ressources humaines ou les services bancaires, puis accepte une mission d'Office Manager lorsqu'une opportunité se présente. Elle y reste 10 années et y découvre un rôle central et pluridisciplinaire, au coeur de l'entreprise. Elle apprécie cette gestion simultanée de différentes fonctions de support aux équipes. Elle intègre ensuite Ofilae comme Office Manager, où elle est une aide précieuse, y compris dans le cadres de missions sortant de son périmètre habituel, et également en tant que Responsable du Secrétariat Privé. L'arrivée d'Evéna lui permet de se concentrer exclusivement sur cette activité, accompagnant les familles dans la gestion administrative de leur quotidien et de celle de leurs entreprises. Lorsqu'elle n'est pas au bureau, Sandrine aime prendre sa moto et découvrir de nouvelles balades. Elle aime aussi le tricot, y voyant l'occasion de créer de zéro quelque chose d'utile et de concret.
          </div>
        </div>
      </div>
    </div>
  );
} 