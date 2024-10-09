import { renderText } from "@/lib/utils";
import styles from "./Categories.module.css";
import data from "@/data.json";

const { categories_title, categories_description } = data;

const Categories = ({ language }) => {
  return (
    <section className={styles.categories}>
      <div className={styles.category}>
        <div className={styles.card}>
          <h2>{renderText(categories_title[language].media)}</h2>
        </div>
        <p>{renderText(categories_description[language].media)}</p>
      </div>

      <div className={`${styles.category} ${styles.reverse}`}>
        <p>{renderText(categories_description[language].editing)}</p>
        <div className={styles.card}>
          <h2>{renderText(categories_title[language].editing)}</h2>
        </div>
      </div>

      <div className={styles.category}>
        <div className={styles.card}>
          <h2>{renderText(categories_title[language].design)}</h2>
        </div>
        <p>{renderText(categories_description[language].design)}</p>
      </div>
    </section>
  );
};

export default Categories;
