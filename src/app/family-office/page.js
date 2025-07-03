import styles from "./family-office.module.css";

export const metadata = {
  title: "Family Office - Ofilae",
};

export default function FamilyOffice() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <h1 className={styles.title}>FAMILY OFFICE</h1>
        <hr className={styles.hr} />
        <div className={styles.intro}>
          OFILAE EST NÉE D'UNE CONVICTION SIMPLE MAIS FORTE : UN PATRIMOINE, C'EST AVANT TOUT UN <b>LEVIER DE TRANSMISSION</b>, UN <b>PROJET FAMILIAL EN PERPÉTUELLE ÉVOLUTION</b>.
        </div>
      </section>
      <div className={styles.blocBeigeFull}>
        <div className={styles.blocBeigeContent}>
          <p>
            Confrontés à une gestion patrimoniale souvent perçue comme purement technique et financière, les fondateurs d'Ofilae ont voulu réinventer ce métier en plaçant l'humain, les valeurs familiales et la vision de long terme au cœur de chaque démarche.<br /><br />
            Ils ont conçu un accompagnement capable de répondre aux complexités des dynamiques intergénérationnelles, tout en structurant des projets qui reflètent les aspirations profondes des familles.<br /><br />
            Très vite, Ofilae s'est démarquée par son approche unique : proposer bien plus qu'une gestion d'actifs, en accompagnant les familles dans la construction d'un projet familial : un patrimoine qui a du sens, à la fois pérenne et aligné avec leurs ambitions.
          </p>
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.bottomText}>
          CETTE VOLONTÉ S'EST TRADUITE PAR UN <b>ACCOMPAGNEMENT INDÉPENDANT</b>, LIBRE DE TOUT INTÉRÊT FINANCIER, ET GARANTISSANT DES <b>CONSEILS IMPARTIAUX ET SINCÈREMENT ORIENTÉS VERS L'INTÉRÊT DES CLIENTS</b>.
        </div>
      </section>
    </div>
  );
} 