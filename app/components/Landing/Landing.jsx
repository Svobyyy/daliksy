import styles from "./Landing.module.css";
import Image from "next/image";
import Link from 'next/link'

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
          <a href="">Contact</a>

          <div className={styles.language}>
            <p>
              <span className="blue">ENG</span>/<Link href="/cz">CZ</Link>
            </p>
          </div>
        </nav>
      </header>

      <h1>We are DUPSCALED</h1>

      <p className={styles.main_text}>
        <span className="blue">DUPSCALED</span> crafts standout brands through
        social mastery, expert editing, and stunning design. We've sparked
        <span> over a billion views </span> for global stars.
        <span> Join us to elevate your online presence.</span>
      </p>

      <div className={styles.buttons}>
        <a className="button" href="#">
          Book a free call
        </a>

        <a className={styles.reference} href="#references">
          <p>View References</p>
          <Image src="/reference.svg" width={8} height={16} alt="arrow icon" />
        </a>
      </div>
      
    </section>
  );
};

export default Landing;
