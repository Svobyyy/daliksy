import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <p>Dupscaled ® 2024</p>
      <div className={styles.socials}>
        <a
          className={styles.socail}
          href="https://www.twitter.com/dupscaled"
          target="_blank"
        >
          <Image
            src={"/socials/twitter.svg"}
            width={19}
            height={19}
            alt="twitter logo"
          />
        </a>

        <a
          className={styles.socail}
          href="https://www.instagram.com/dupscaledagency"
          target="_blank"
        >
          <Image
            src={"/socials/instagram.svg"}
            width={19}
            height={19}
            alt="instagram logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
