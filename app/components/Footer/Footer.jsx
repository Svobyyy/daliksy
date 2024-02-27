import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <p>Dupscaled ® 2024</p>
      <div className={styles.socials}>
        <div className={styles.socail}>
          <Image src={"/socials/twitter.svg"} width={19} height={19} />
        </div>

        <div className={styles.socail}>
          <Image src={"/socials/instagram.svg"} width={19} height={19} />
        </div>

        <div className={styles.socail}>
          <Image src={"/socials/linkedin.svg"} width={19} height={19} />
        </div>

        <div className={styles.socail}>
          <Image src={"/socials/discord.svg"} width={19} height={19} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
