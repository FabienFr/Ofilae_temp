import Image from 'next/image';
import styles from './baptiste-maes.module.css';

export default function BaptisteMaes() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Baptiste-.jpg"
            alt="Baptiste Maes"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
          <h1 className="sofia-pro-semibold text-uppercase" style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Baptiste Maes
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Family Officer associé & Président Ofilae Lille
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> EDHEC + Master 2 en Gestion de Patrimoine</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 17 ans d&apos;expérience en family office</div>
          </div>
          <div className={styles.presentation}>
            Après des études commerciales et un début de parcours dans le conseil, baptiste intègre le Master 2 en gestion de patrimoine de Clermont-Ferrand. Il rejoint rapidement le Family Office Mobilis, comme juriste en droit patrimonial d&apos;abord, puis comme manager au sein de l&apos;antenne belge. Il prend ensuite les rênes d&apos;une équipe de 15 personnes, y déployant une approche de la gestion centrée sur le client. Désireux de renforcer la qualité de l&apos;accompagnement proposé aux familles, et sensible aux enjeux liés à la transmission intergénérationnelle, il crée Ofilae en 2020. Lorsqu&apos;il n&apos;est pas au bureau, Baptiste travaille tout de même toujours un peu... Adeptes des courts de tennis, des terrains de football et des pistes de ski, il accorde aussi à sa famille l&apos;importance qu&apos;elle mérite.
          </div>
          <a
            href="https://www.linkedin.com/in/baptiste-maes-93537314/" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedin}
          >
            in
          </a>
        </div>
      </div>
    </div>
  );
} 