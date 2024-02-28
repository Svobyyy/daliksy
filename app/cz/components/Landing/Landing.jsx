import styles from "./Landing.module.css";
import Image from "next/image";

const Landing = () => {
  return (
    <section className={styles.landing}>
      <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/logo.png"
          width={187}
          height={22}
          alt="Logo of Dupscaled"
        />

        <nav className={styles.nav}>
          <p>Contact</p>

          <div className={styles.language}>
            <p>
              <span className="blue">ENG</span>/CZ
            </p>
          </div>
        </nav>
      </header>

      <h1>MY JSME DUPSCALED</h1>

      <p className={styles.main_text}>
        <span className="blue">DUPSCALED</span> exceluje ve vytváření
        vynikajících a zdokonalování značek díky svým znalostem sociálních sítí,
        profesionálním střihem a designem. S globálními hvězdami jsme již
        dosáhli
        <span> více než miliardy zhlédnutí. </span>
        <span>
          {" "}
          Připojte se k nám a zvedněte svou online prezentaci na novou úroveň!{" "}
        </span>
      </p>

      <div className={styles.buttons}>
        <a className="button" href="#">
          Sjednat Schůzku
        </a>

        <a className={styles.reference} href="#">
          <p>Prohlédnout reference</p>
          <Image src="/reference.svg" width={8} height={16} alt="arrow icon" />
        </a>
      </div>
    </section>
  );
};

export default Landing;
