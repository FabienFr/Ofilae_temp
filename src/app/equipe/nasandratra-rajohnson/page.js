import Image from 'next/image';
import styles from './nasandratra-rajohnson.module.css';

export default function NasandratraRajohnson() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Nasa-.jpg"
            alt="Nasandratra Rajohnson"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Nasandratra Rajohnson
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Chargée de missions patrimoniales & conformité
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Master 2 Gestion de Patrimoine</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 5 ans d'expériences en Family office</div>
          </div>
          <div className={styles.presentation}>
            C'est à dix-huit ans, une fois son baccalauréat en poche, que Nasandratra quitte l'île de Madagascar, où elle est née, pour rejoindre la France. Son parcours universitaire l'amène à intégrer le Master 2 en gestion de patrimoine de Clermont-Ferrand, puis à effectuer un premier stage en cabinet de gestion de patrimoine à Rennes, au cours duquel elle s'intéresse surtout à la fiscalité. Désireuse de se forger une expérience en Family Office, elle rejoint Ofilae, d'abord en alternance. Puis, séduite par les compétences de l'équipe, la variété des missions et l'ambiance chaleureuse du Nord, elle y signe un CDI en septembre 2022. Lorsqu'elle n'est pas au bureau, Nasandratra aime fréquenter sa salle de sport favorite pour des séances de cardio ou de musculation. Elle chante aussi à ses heures perdues.
          </div>
        </div>
      </div>
    </div>
  );
} 