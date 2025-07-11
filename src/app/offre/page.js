import styles from "./offre.module.css";

export default function Offre() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titre}>OFFRE</h1>
      <hr className={styles.hr} />
      <div className={styles.intro}>
        NOTRE VALEUR AJOUTÉE, C&#39;EST DE FAIRE <b>EXPRIMER LE PROJET FAMILIAL</b> ET DE METTRE <b>LE PATRIMOINE AU SERVICE DU PROJET</b>
      </div>

      <div className={styles.offreBloc + ' ' + styles.bloc1} style={{ backgroundImage: "url('/projet_familial.png')" }}>
        <div className={styles.offreBlocContent}>
          <div className={styles.offreBlocTitre}>Projet familial</div>
          <div className={styles.divider}></div>
          <div className={styles.offreBlocTexte}>
            Mettre du dialogue, s&#39;accorder sur le sens et l&#39;utilité du patrimoine, trouver la place de chacun, faire le choix d&#39;une gestion individuelle et/ou collective et poser des règles de fonctionnement, voilà les principaux sujets que nous travaillons avec vous pour entretenir l&#39;harmonie familiale.
          </div>
        </div>
      </div>

      <div className={styles.offreBloc + ' ' + styles.bloc2} style={{ backgroundImage: "url('/planification_patrimoniale_allocation_actifs.png')" }}>
        <div className={styles.offreBlocContent}>
          <div className={styles.offreBlocTexte}>
            Forts d&apos;une expertise acquise dans les environnements les plus exigeants, nous transposons votre projet sur une feuille de route avec des stratégies précises, pérennes et optimisées.
          </div>
          <div className={styles.divider}></div>
          <div className={styles.offreBlocTitre}>Planification patrimoniale et allocation d&apos;actifs</div>
        </div>
      </div>

      <div className={styles.offreBloc + ' ' + styles.bloc3} style={{ backgroundImage: "url('/pilotage_financier_patrimonial.png')" }}>
        <div className={styles.offreBlocContent}>
          <div className={styles.offreBlocTitre}>Pilotage financier et patrimonial</div>
          <div className={styles.divider}></div>
          <div className={styles.offreBlocTexte}>
            Grâce à notre méthode et à nos outils digitaux innovants, nous garantissons une vision claire et actualisée de votre patrimoine permettant de vérifier l&#39;atteinte des objectifs fixés.
          </div>
        </div>
      </div>
    </main>
  );
} 