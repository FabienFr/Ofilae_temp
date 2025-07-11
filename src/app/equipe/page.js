import styles from "./equipe.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Equipe() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titre}>ÉQUIPE</h1>
      <hr className={styles.hr} />
      <div className={styles.intro}>
        NOUS TRAVAILLONS SANS RELÂCHE AFIN DE <b>REDÉFINIR L&#39;ACCOMPAGNEMENT PATRIMONIAL</b> EN PLAÇANT <b>L&#39;HUMAIN AU CŒUR DE CHAQUE DÉCISION</b>.
      </div>
      <div className={styles.grid}>
        <Link href="/equipe/baptiste-maes" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Baptiste-.jpg" alt="Baptiste Maes" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>BAPTISTE MAES</div>
          <div className={styles.fonction}>Family Officer associé & Président Ofilae</div>
        </Link>
        <div className={styles.card}>
          <Image src="/Mathilde-.jpg" alt="Mathilde de Courcel" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>MATHILDE DE COURCEL</div>
          <div className={styles.fonction}>Family Officer associée & Directrice Générale Ofilae Paris</div>
        </div>
        <div className={styles.card}>
          <Image src="/Jean-Marc.jpg" alt="Jean-Marc Aveline" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>JEAN-MARC AVELINE</div>
          <div className={styles.fonction}>Family Officer associé & Président Ofilae Paris</div>
        </div>
        <div className={styles.card}>
          <Image src="/Mylene-.jpg" alt="Mylène Rolle" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>MYLÈNE ROLLE</div>
          <div className={styles.fonction}>Family Officer associée</div>
        </div>
        <div className={styles.card}>
          <Image src="/Thibault-.jpg" alt="Thibault Chastan" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>THIBAULT CHASTAN</div>
          <div className={styles.fonction}>Family Officer associé Responsable de l&apos;ingénierie patrimoniale</div>
        </div>
        <div className={styles.card}>
          <Image src="/Celine-.jpg" alt="Céline Bernard" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>CÉLINE BERNARD</div>
          <div className={styles.fonction}>Family Officer associée</div>
        </div>
        <div className={styles.card}>
          <Image src="/PY.jpg" alt="Pierre-Yves Charlet" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>PIERRE-YVES CHARLET</div>
          <div className={styles.fonction}>Responsable des Investissements</div>
        </div>
        <div className={styles.card}>
          <Image src="/Sandrine-.jpg" alt="Sandrine Méens" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>SANDRINE MÉENS</div>
          <div className={styles.fonction}>Responsable du Secrétariat Privé</div>
        </div>
        <div className={styles.card}>
          <Image src="/Nasa-.jpg" alt="Evéna Pencréach" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>EVÉNA PENCRÉACH</div>
          <div className={styles.fonction}>Office Manager</div>
        </div>
        <div className={styles.card}>
          <Image src="/Clement-.jpg" alt="Clément Pruvost" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>PRUVOST CLÉMENT</div>
          <div className={styles.fonction}>Responsable du Middle Office</div>
        </div>
        {/* Ajouter d'autres membres ici si besoin */}
      </div>
    </main>
  );
} 