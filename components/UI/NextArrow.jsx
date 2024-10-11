import styles from "./NextArrow.module.css";
import Image from "next/image";

export default function NextArrow({ onClickFunction, flip }) {
  return (
    <div
      className={`${(styles.next, flip ? styles.flip : "")}`}
      onClick={onClickFunction}
    >
      <Image
        className={styles.next}
        src="/clients.svg"
        width={53}
        height={53}
        alt="Arrow for clients"
      />
    </div>
  );
}
