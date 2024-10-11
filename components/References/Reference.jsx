import Image from "next/image";
import styles from "./References.module.css";

export default function Reference({ refer, language, refNumber, index }) {
  const { name, description, img, reference } = refer;

  return (
    <li className={`${refNumber === index ? styles.active : styles.unactive} ${styles.ref_main}`}>
      <div className={styles.reference_profile}>
        <div className={styles.img}>
          <Image src={`/referals/${img}`} width={73} height={73} alt={name} />
        </div>
        <div>
          <h4>{name}</h4>
          <p>{description[language]}</p>
        </div>
      </div>
      <p className={styles.reference_text}>“{reference[language]}”</p>
    </li>
  );
}
