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
          Dupscaled vám usnadní život na sociálních sítích. Staráme se o vaše
          příspěvky, komunikujeme s vaším publikem a zajišťujeme, aby vaše
          značka zůstala v centru pozornosti.<br></br>
          <br></br>Postaráme se o vše, od chytlavých titulků až po dokonalé
          načasování. Nechte nás, abychom svět sociálních sítí řídili za vás, a
          vy se tak můžete soustředit na to, co umíte nejlépe.
        </p>
      </div>

      <div className={`${styles.category} ${styles.reverse}`}>
        <p>
          Vaše videa pozvedneme odborným střihem. Od jemného doladění až po
          přidání stylu. Díky nám váš obsah vynikne. Nechte nás oživit vaši vizi
          – váš příběh, náš střih.
        </p>
        <div className={styles.card}>
          <h2>VIDEO EDITING</h2>
        </div>
      </div>

      <div className={styles.category}>
        <div className={styles.card}>
          <h2>GRAPHIC DESIGN</h2>
        </div>
        <p>
          Vždy podporujte svou značku grafickým designem, který prostě vynikne!
          Náš kreativní tým proměňuje nápady v poutavé vizuály, od loga po
          grafiku pro sociální média. Vyberte si nás pro design, který osloví
          každého.
        </p>
      </div>
    </section>
  );
};

export default Categories;
