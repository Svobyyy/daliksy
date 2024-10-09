import { renderText } from "@/lib/utils";
import styles from "./Categories.module.css";
import data from "@/data.json";

const { categories_title } = data;

const Categories = ({ language }) => {
  return (
    <section className={styles.categories}>
      <div className={styles.category}>
        <div className={styles.card}>
          <h2>{renderText(categories_title[language])}</h2>
        </div>
        <p>
          
        </p>
      </div>

      <div className={`${styles.category} ${styles.reverse}`}>
        <p>
         
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
          
        </p>
      </div>
    </section>
  );
};

export default Categories;
