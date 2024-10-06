import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar({ language }) {
  return (
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
        <a href="#form">Contact</a>

        <div className={styles.language}>
          <p>
            <Link
              href="/en"
              className={`${language == "en" && styles.activeLanguage}`}
            >
              ENG
            </Link>
            /
            <Link
              href="/cz"
              className={`${language == "cz" && styles.activeLanguage}`}
            >
              CZ
            </Link>
          </p>
        </div>
      </nav>
    </header>
  );
}
