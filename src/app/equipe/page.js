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
        <Link href="/equipe/mathilde-de-courcel" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Mathilde-.jpg" alt="Mathilde de Courcel" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>MATHILDE DE COURCEL</div>
          <div className={styles.fonction}>Family Officer associée & Directrice Générale Ofilae Paris</div>
        </Link>
        <Link href="/equipe/jean-marc-aveline" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Jean-Marc.jpg" alt="Jean-Marc Aveline" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>JEAN-MARC AVELINE</div>
          <div className={styles.fonction}>Family Officer associé & Président Ofilae Paris</div>
        </Link>
        <Link href="/equipe/mylene-rolle" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Mylene-.jpg" alt="Mylène Rolle" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>MYLÈNE ROLLE</div>
          <div className={styles.fonction}>Family Officer associée</div>
        </Link>
        <Link href="/equipe/thibault-chastan" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Thibault-.jpg" alt="Thibault Chastan" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>THIBAULT CHASTAN</div>
          <div className={styles.fonction}>Family Officer associé Responsable de l&apos;ingénierie patrimoniale</div>
        </Link>
        <Link href="/equipe/celine-bernard" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Celine-.jpg" alt="Céline Bernard" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>CÉLINE BERNARD</div>
          <div className={styles.fonction}>Family Officer associée</div>
        </Link>
        <Link href="/equipe/pierre-yves-charlet" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/PY.jpg" alt="Pierre-Yves Charlet" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>PIERRE-YVES CHARLET</div>
          <div className={styles.fonction}>Responsable des Investissements</div>
        </Link>
        <Link href="/equipe/sandrine-meens" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Sandrine-.jpg" alt="Sandrine Méens" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>SANDRINE MÉENS</div>
          <div className={styles.fonction}>Responsable du Secrétariat Privé</div>
        </Link>
        <Link href="/equipe/evena-pencreach" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Nasa-.jpg" alt="Evéna Pencréach" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>EVÉNA PENCRÉACH</div>
          <div className={styles.fonction}>Office Manager</div>
        </Link>
        <Link href="/equipe/hippolyte-bourlet" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Hippolyte-.jpg" alt="Hippolyte Bourlet" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>HIPPOLYTE BOURLET</div>
          <div className={styles.fonction}>Apprenti Chef de Projet Data</div>
        </Link>
        <Link href="/equipe/clement-pruvost" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Clement-.jpg" alt="Clément Pruvost" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>CLÉMENT PRUVOST</div>
          <div className={styles.fonction}>Responsable du Middle Office</div>
        </Link>
        <Link href="/equipe/oscar-guesdon" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Oscar_.jpg" alt="Oscar Guesdon" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>OSCAR GUESDON</div>
          <div className={styles.fonction}>Apprenti Assistant Family Officer</div>
        </Link>
        <Link href="/equipe/nasandratra-rajohnson" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Nasa-.jpg" alt="Nasandratra Rajohnson" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>NASANDRATRA RAJOHNSON</div>
          <div className={styles.fonction}>Chargée de missions patrimoniales & conformité</div>
        </Link>
        <Link href="/equipe/armand-de-almeida" className={styles.card} style={{textDecoration: 'none', color: 'inherit'}}>
          <Image src="/Armand_.jpg" alt="Armand de Almeida" width={220} height={220} className={styles.photo} />
          <div className={styles.nom}>ARMAND DE ALMEIDA</div>
          <div className={styles.fonction}>Apprenti Assistant Middle Office</div>
        </Link>
      </div>
      <div style={{ height: "80px" }}></div>
    </main>
  );
} 