import Image from 'next/image';
import styles from './evena-pencreach.module.css';

export default function EvenaPencreach() {
  return (
    <div className={styles.profilContainer}>
      <div className={styles.profilContent}>
        <div className={styles.photoCol}>
          <Image
            src="/Evéna_.jpg"
            alt="Evéna Pencréach"
            width={300}
            height={300}
            className={styles.photo}
          />
        </div>
        <div className={styles.infoCol}>
        <h1 className={`${styles.profilTitle} sofia-pro-semibold text-uppercase`} style={{fontSize: '2.8rem', marginBottom: '1rem'}}>
            Evéna Pencréach
          </h1>
          <div className="sofia-pro-regular text-uppercase" style={{fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '0.08em'}}>
            Office Manager
          </div>
          <div className={styles.resume}>
            <div className={styles.line}><span className={styles.label}>Formation :</span> Master 2 en Gestion des Ressources Humaines</div>
            <div className={styles.line}><span className={styles.label}>Expérience :</span> 5 ans d’expérience en gestion finance et ressources humaines</div>
          </div>
          <div className={styles.presentation}>
            Normande d’origine bretonne, Evéna s’installe à Lille pour ses études supérieures. Après 5 années de formation en alternance dans le domaine de la gestion (finance, paie et RH), elle sort diplômée du Master Gestion des Ressources Humaines de l’IAE Lille. À la recherche d’un poste polyvalent, opérationnel et stimulant, Evéna saisit l’opportunité d’enrichir sa carrière et rejoint l’équipe Ofilae en septembre 2024 en tant qu’Office Manager. Véritable gestionnaire, elle administre, coordonne et gère la vie de l’entreprise. Lorsqu’elle n’est pas au bureau, Evéna évolue principalement dans des activités autour de la culture – musée, cinéma, expositions – et de l’eau – natation, plongée sous-marine, pistes de ski… 
          </div>
        </div>
      </div>
    </div>
  );
} 