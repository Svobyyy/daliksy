import styles from "./Landing.module.css";
import Image from "next/image";

import SchedulePopUp from "./SchedulePopUp";
import Navbar from "../Navbar/Navbar";
import data from "@/data.json";

const renderText = (text) => {
  return text.map((item, index) => {
    if (item.type === "span") {
      return (
        <span key={index} className={item.className}>
          {item.text}
        </span>
      );
    }
    return item.text;
  });
};

const { main_text, title, main_book, main_references } = data;

const Landing = ({ language }) => {
  return (
    <section className={styles.landing}>
      <SchedulePopUp language={language} />
      <Navbar language={language} />
      <h1>{title[language]}</h1>

      <p className={styles.main_text}>{renderText(main_text[language])}</p>

      <div className={styles.buttons}>
        <a
          className="button"
          href="https://calendly.com/dupscaled/free-meeting"
          target="blank_"
        >
          {main_book[language]}
        </a>

        <a className={styles.reference} href="#references">
          <p>{main_references[language]}</p>
          <Image src="/reference.svg" width={8} height={16} alt="arrow icon" />
        </a>
      </div>
    </section>
  );
};

export default Landing;
