import Image from 'next/image';
import styles from './thibault-chastan.module.css';

export default function ThibaultChastan() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Thibault-.jpg"
            alt="Thibault Chastan"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Thibault Chastan
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Family Officer associé
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Mines – Télécom + Master 2 en Gestion de Patrimoine</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 15 ans d’expérience en banque et gestion de fortune</div>
          </div>
          <div className={styles.presentation}>
            Après un diplôme d’école de commerce et une première expérience en management, Thibault rejoint presque par hasard le secteur bancaire dans lequel il se découvre une véritable passion pour la gestion de patrimoine. Il y occupe différentes fonctions pendant onze ans jusqu’à devenir banquier privé et accompagne une clientèle de chefs d’entreprises et grands cadres internationaux. Curieux de nature, il ne cesse en parallèle de se former notamment auprès de l’Université de Paris Dauphine et de l’Université de Louvain. Thibault rejoint Ofilae en 2023, désireux de mettre son expérience et ses compétences au service de familles en attente d’une relation particulière, vraie, et construite autour d’un projet global et d’une vision à long terme. Lorsqu’il n’est pas au bureau, Thibault passe du temps avec sa femme et ses trois enfants. Il aime autant voyager et partir à la rencontre d’autres cultures, que profiter des joies simples d’un après-midi bricolage ou cuisine en famille.
          </div>
        </div>
      </div>
    </div>
  );
} 