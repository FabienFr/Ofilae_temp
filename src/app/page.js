import styles from './page.module.css';
import Footer from './components/Footer';

// Données des engagements
const engagements = [
  { svg: "/numéros-01.svg", label: "L&apos;HUMAIN<br/>AU CŒUR", text: "Placer le dialogue familial, l&apos;écoute active et la gestion des dynamiques intergénérationnelles au cœur de chaque accompagnement.", align: "left" },
  { svg: "/numéros-02.svg", label: "L&apos;INDÉPENDANCE<br/>ABSOLUE", text: "Offrir des conseils impartiaux et transparents, sans aucune commission, garantissant l&apos;alignement total avec les intérêts des clients.", align: "right" },
  { svg: "/numéros-03.svg", label: "SUR-MESURE &<br/>GÉNÉRATIONNEL", text: "Proposer un accompagnement personnalisé et évolutif, adapté aux besoins spécifiques et aux ambitions de chaque famille.", align: "center" },
  { svg: "/numéros-04.svg", label: "UNE AUTONOMIE<br/>ÉCLAIRÉE", text: "Fédérer les générations autour de projets communs, favoriser la montée en compétence et la responsabilisation des jeunes pour garantir la continuité patrimoniale.", align: "left" },
  { svg: "/numéros-05.svg", label: "L&apos;IMPACT<br/>SOCIÉTAL", text: "Intégrer la philanthropie dans l&apos;accompagnement des familles et au sein de l&apos;entreprise, en faisant du patrimoine un levier d&apos;impact positif et durable.", align: "right" },
];

export default function Home() {
  return (
    <>
      <video
        src="/Home.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoDesktop}
      />
      <video
        src="/Home-mobile.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoMobile}
      />
      
      {/* Section vide pour la vidéo en plein écran */}
      <div className={styles.videoSection}></div>
      
      {/* Section Family Office */}
      <div className={styles.familyOfficeSection}>
        <section className={styles.section}>
          <h1 className={`sofia-pro-bold ${styles.title}`}>FAMILY OFFICE</h1>
          <hr className={styles.hr} />
          <div className={`sofia-pro-regular ${styles.intro}`}>
            OFILAE EST NÉE D’UNE CONVICTION SIMPLE MAIS FORTE : UN PATRIMOINE, C’EST AVANT TOUT UN <b>LEVIER DE TRANSMISSION</b>, UN <b>PROJET FAMILIAL EN PERPÉTUELLE ÉVOLUTION</b>.
          </div>
        </section>
        <div className={styles.blocBeigeFull}>
          <div className={styles.blocBeigeContent}>
            <p>
              Confrontés à une gestion patrimoniale souvent perçue comme purement technique et financière, les fondateurs d’Ofilae ont voulu réinventer ce métier en plaçant l’humain, les valeurs familiales et la vision de long terme au cœur de chaque démarche.<br /><br />
              Ils ont conçu un accompagnement capable de répondre aux complexités des dynamiques intergénérationnelles, tout en structurant des projets qui reflètent les aspirations profondes des familles.<br /><br />
              Très vite, Ofilae s’est démarquée par son approche unique : proposer bien plus qu’une gestion d’actifs, en accompagnant les familles dans la construction d’un projet familial : un patrimoine qui a du sens, à la fois pérenne et aligné avec leurs ambitions.
            </p>
          </div>
        </div>
        <section className={styles.section}>
          <div className={`sofia-pro-regular ${styles.bottomText}`}>
            CETTE VOLONTÉ S’EST TRADUITE PAR UN <b>ACCOMPAGNEMENT INDÉPENDANT</b>, LIBRE DE TOUT INTÉRÊT FINANCIER, ET GARANTISSANT DES <b>CONSEILS IMPARTIAUX ET SINCÈREMENT ORIENTÉS VERS L’INTÉRÊT DES CLIENTS</b>.
          </div>
        </section>
      </div>

      {/* Section Engagements */}
      <div className={styles.engagementsSection}>
        <div className={styles.engagementsMain}>
          <h1 className={styles.engagementsTitle}>ENGAGEMENTS</h1>
          <div className={styles.engagementsHr}></div>
          <div className={styles.engagementsIntro}>
            <p>
              Nos engagements sont <strong>les principes fondateurs</strong> qui guident notre accompagnement.<br />
              Ils garantissent à chaque famille une <strong>relation de confiance</strong>, une <strong>vision durable</strong> et une <strong>transmission harmonieuse</strong>.
            </p>
          </div>
          <div className={styles.engagementsList}>
            {engagements.map((e, i) => (
              <div key={e.svg} className={`${styles.engagementBlock} ${styles[e.align]}`}>
                <img src={e.svg} className={styles.engagementNumberSvg} alt={e.label.replace(/<br\/>/g, ' ')} />
                <div>
                  <div className={styles.engagementTitle} dangerouslySetInnerHTML={{__html: e.label}} />
                  <div className={styles.engagementText}>{e.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Offre */}
      <div className={styles.offreSection}>
        <main className={styles.offreMain}>
          <h1 className={styles.offreTitre}>OFFRE</h1>
          <hr className={styles.offreHr} />
          <div className={styles.offreIntro}>
            NOTRE VALEUR AJOUTÉE, C’EST DE FAIRE <b>EXPRIMER LE PROJET FAMILIAL</b> ET DE METTRE <b>LE PATRIMOINE AU SERVICE DU PROJET</b>
          </div>

          <div className={`${styles.offreBloc} ${styles.bloc1}`} style={{ backgroundImage: "url('/projet_familial.png')" }}>
            <div className={styles.offreBlocContent}>
              <div className={styles.offreBlocTitre}>Projet familial</div>
              <div className={styles.divider}></div>
              <div className={styles.offreBlocTexte}>
                Mettre du dialogue, s’accorder sur le sens et l’utilité du patrimoine, trouver la place de chacun, faire le choix d’une gestion individuelle et/ou collective et poser des règles de fonctionnement, voilà les principaux sujets que nous travaillons avec vous pour entretenir l’harmonie familiale.
              </div>
            </div>
          </div>

          <div className={`${styles.offreBloc} ${styles.bloc2}`} style={{ backgroundImage: "url('/planification_patrimoniale_allocation_actifs.png')" }}>
            <div className={styles.offreBlocContent}>
              <div className={styles.offreBlocTexte}>
                Forts d’une expertise acquise dans les environnements les plus exigeants, nous transposons votre projet sur une feuille de route avec des stratégies précises, pérennes et optimisées.
              </div>
              <div className={styles.divider}></div>
              <div className={styles.offreBlocTitre}>Planification patrimoniale et allocation d’actifs</div>
            </div>
          </div>

          <div className={`${styles.offreBloc} ${styles.bloc3}`} style={{ backgroundImage: "url('/pilotage_financier_patrimonial.png')" }}>
            <div className={styles.offreBlocContent}>
              <div className={styles.offreBlocTitre}>Pilotage financier et patrimonial</div>
              <div className={styles.divider}></div>
              <div className={styles.offreBlocTexte}>
                Grâce à notre méthode et à nos outils digitaux innovants, nous garantissons une vision claire et actualisée de votre patrimoine permettant de vérifier l’atteinte des objectifs fixés.
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}