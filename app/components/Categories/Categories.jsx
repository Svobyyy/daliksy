import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <section className={styles.categories}>
      <div className={styles.category}>
        <div className={styles.card}>
          <h2>
            SOCIAL MEDIA <br />
            MANAGMENT
          </h2>
        </div>
        <p>
          At DUPSCALED, we make your life easier on social media. We handle your
          posts, engage with your audience, and ensure your brand stays in the
          spotlight.<br></br>
          <br></br> From catchy captions to perfect timing, we've got it
          covered. Let us navigate the social world for you, so you can focus on
          what you do best. With DUPSCALED, your online success is just a post
          away!
        </p>
      </div>

      <div className={styles.category}>
        <div className={styles.card}>
          <h2>VIDEO EDITING</h2>
        </div>
        <p>
          We elevate your videos with expert editing. From fine-tuning to adding
          flair, we make your content stand out. Let us bring your vision to
          life – your story, our edit.
        </p>
      </div>

      <div className={styles.category}>
        <div className={styles.card}>
          <h2>graphic design</h2>
        </div>
        <p>
          Always boosting your brand with graphic design, that just stands out!
          Our creative team turns ideas into captivating visuals, from logos to
          social media graphics. Choose us for design that speaks volumes.
        </p>
      </div>
    </section>
  );
};

export default Categories;
