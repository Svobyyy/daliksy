import styles from "./References.module.css";

export default function ReferenceProfile({
  refer,
  language,
  refNumber,
  index,
}) {
  const { reference } = refer;

  return (
    <li className={refNumber === index ? styles.active : styles.unactive}>
      <p className={styles.reference_text}>“{reference[language]}”</p>
    </li>
  );
}
