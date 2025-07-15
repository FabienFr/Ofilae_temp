import Image from 'next/image';
import styles from './pierre-yves-charlet.module.css';

export default function PierreYvesCharlet() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/PY.jpg"
            alt="Pierre-Yves Charlet"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Pierre-Yves Charlet
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Responsable des Investissements
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Mines - Télécom Business + Master 2 finance et comptabilité</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 25 ans d'expérience en gestion d'actifs</div>
          </div>
          <div className={styles.presentation}>
            C'est en 2002 que Pierre-Yves commence sa carrière dans le secteur financier, d'abord à la Caisse des Dépôts puis dans le Groupe Vauban Humanis. En 2008, il rejoint Mobilis Gestion comme gérant de portefeuille, où il fait la connaissance de Baptiste. Cinq ans plus tard, il saisit l'opportunité d'élargir son scope d'expertise en devenant responsable de la gestion d'actifs et de la trésorerie de la mutuelle du ministère de l'intérieur, où il évolue comme directeur de l'investissement puis comme directeur financier. En 2020, il crée sa propre structure pour proposer ses services dans le cadre de missions ponctuelles. Il commence à collaborer avec Ofilae de façon régulière jusqu'à intégrer pleinement les équipes, encouragé par les contacts noués et l'envie de conjuguer leurs talents respectifs. Lorsqu'il n'est pas au bureau, Pierre-Yves transmet à de jeunes sportifs sa passion du volley-ball. Il détient un diplôme d'entraîneur et s'est même remis à jouer depuis peu. Son objectif ? Ne pas se blesser... et se faire plaisir avant tout.
          </div>
        </div>
      </div>
    </div>
  );
} 