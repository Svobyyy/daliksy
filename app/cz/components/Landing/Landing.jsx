import styles from "./Landing.module.css";
import Image from "next/image";
import Link from "next/link";
import Inline from "./Inline";

const Landing = () => {
  return (
    <section className={styles.landing}>
      <Inline></Inline>

      <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/logo.png"
          width={187}
          height={22}
          alt="Logo of Dupscaled"
        />

        <Image
          className={styles.smalllogo}
          src="/mobilelogo.png"
          width={50}
          height={25}
          alt="Logo of Dupscaled"
        />

        <nav className={styles.nav}>
          <a href="#form">Kontakt</a>

          <div className={styles.language}>
            <p>
              <Link href="/">ENG</Link>/<span className="blue">CZ</span>
            </p>
          </div>
        </nav>
      </header>

      <h1>My jsme DUPSCALED</h1>

      <p className={styles.main_text}>
        <span className="blue">DUPSCALED</span> exceluje ve vytváření
        vynikajících a zdokonalování značek díky svým znalostem sociálních sítí,
        profesionálním střihem a designem. S globálními hvězdami jsme již 
        <span> {" "}
          dosáhli více než miliardy zhlédnutí. Připojte se k nám a
          zvedněte svou online prezentaci na novou úroveň!
        </span>
      </p>

      <div className={styles.buttons}>
        <a
          className="button"
          href="https://calendly.com/dupscaled/free-meeting"
          target="blank_"
        >
          Sjednat Schůzku
        </a>

        <a className={styles.reference} href="#references">
          <p>Prohlédnout reference</p>
          <Image src="/reference.svg" width={8} height={16} alt="arrow icon" />
        </a>
      </div>
    </section>
  );
};

export default Landing;
