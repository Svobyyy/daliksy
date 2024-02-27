import styles from "./Reference.module.css";
import Image from "next/image";

const Reference = () => {
  return (
    <section className={styles.reference}>
      <h3>
        Trusted by superstars all<br></br> around the world
      </h3>

      <div >
        <div className={styles.reference_main}>
          
          <div className={styles.channel}>
            <Image
              src="/channels/revenge.png"
              width={91}
              height={91}
              alt="Picture of the author"
            />
            <div className={styles.channel_info}>
              <h4>Revenge</h4>
              <p>
                <b>1,327,069 </b>Instagram Followers
              </p>
              <p>
                <b>1,327,069 </b> Youtube Subscribers
              </p>
              <span>Dupscaled since March of 2023.</span>
            </div>
          </div>

          <Image
            src="/clients.svg"
            width={53}
            height={53}
            alt="Arrow for clients"
          />


          <div className={`${styles.channel} ${styles.channel_opacity}`}>
            <Image
              src="/channels/revenge.png"
              width={91}
              height={91}
              alt="Picture of the author"
            />
            <div className={styles.channel_info}>
              <h4>Revenge</h4>
              <p>
                <b>1,327,069 </b>Instagram Followers
              </p>
              <p>
                <b>1,327,069 </b> Youtube Subscribers
              </p>
              <span>Dupscaled since March of 2023.</span>
            </div>
          </div>

          <div className={`${styles.channel} ${styles.channel_opacity}`}>
            <Image
              src="/channels/revenge.png"
              width={91}
              height={91}
              alt="Picture of the author"
            />
            <div className={styles.channel_info}>
              <h4>Revenge</h4>
              <p>
                <b>1,327,069 </b>Instagram Followers
              </p>
              <p>
                <b>1,327,069 </b> Youtube Subscribers
              </p>
              <span>Dupscaled since March of 2023.</span>
            </div>
          </div>
        </div>

        <p className={styles.reference_side}>*Client highlights, contact us for a full client list.</p>
      </div>

      <div className={styles.radial} />
    </section>
  );
};

export default Reference;
