"use client";

import styles from "./engagements.module.css";

const engagements = [
  { number: "01", label: "L'HUMAIN AU CŒUR", text: "Placer le dialogue familial, l'écoute active et la gestion des dynamiques intergénérationnelles au cœur de chaque accompagnement.", align: "left" },
  { number: "02", label: "L'INDÉPENDANCE ABSOLUE", text: "Offrir des conseils impartiaux et transparents, sans aucune commission, garantissant l'alignement total avec les intérêts des clients.", align: "right" },
  { number: "03", label: "SUR-MESURE & GÉNÉRATIONNEL", text: "Proposer un accompagnement personnalisé et évolutif, adapté aux besoins spécifiques et aux ambitions de chaque famille.", align: "center" },
  { number: "04", label: "UNE AUTONOMIE ÉCLAIRÉE", text: "Fédérer les générations autour de projets communs, favoriser la montée en compétence et la responsabilisation des jeunes pour garantir la continuité patrimoniale.", align: "left" },
  { number: "05", label: "L'IMPACT SOCIÉTAL", text: "Intégrer la philanthropie dans l'accompagnement des familles et au sein de l'entreprise, en faisant du patrimoine un levier d'impact positif et durable.", align: "right" },
];

export default function Engagements() {
  return (
    <div className={styles["engagements-bg"]}>
      <div className={styles["engagements-main"]}>
        <h1 className={styles["engagements-title"]}>ENGAGEMENTS</h1>
        <div className={styles["engagements-hr"]}></div>
        <div className={styles["engagements-intro"]}>
          <p>
            Nos engagements sont <strong>les principes fondateurs</strong> qui guident notre accompagnement.<br />
            Ils garantissent à chaque famille une <strong>relation de confiance</strong>, une <strong>vision durable</strong> et une <strong>transmission harmonieuse</strong>.
          </p>
        </div>
        <div className={styles["engagements-list"]}>
          {engagements.map((e, i) => (
            <div key={e.number} className={`${styles["engagement-block"]} ${styles[e.align]}`}>
              <div className={styles["engagement-number"]}>{e.number}</div>
              <div className={styles["engagement-label"]}>{e.label}</div>
              <div className={styles["engagement-text"]}>{e.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 