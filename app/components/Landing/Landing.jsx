import styles from "./Landing.module.css";
import Image from "next/image";
import data from "@/data.json";
import SchedulePopUp from "./SchedulePopUp";
import Navbar from "../Navbar/Navbar";

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

const Landing = ({ language }) => {
  const { main_text } = data;

  return (
    <section className={styles.landing}>
      <SchedulePopUp />
      <Navbar language={language} />
      <h1>We are DUPSCALED</h1>

      <p className={styles.main_text}>{renderText(main_text[language])}</p>

      <div className={styles.buttons}>
        <a
          className="button"
          href="https://calendly.com/dupscaled/free-meeting"
          target="blank_"
        >
          Book a free call
        </a>

        <a className={styles.reference} href="#references">
          <p>View References</p>
          <Image src="/reference.svg" width={8} height={16} alt="arrow icon" />
        </a>
      </div>
    </section>
  );
};

export default Landing;
