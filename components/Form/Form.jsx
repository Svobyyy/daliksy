"use client";

import styles from "./Form.module.css";
import Image from "next/image";
import { useState } from "react";
import data from "@/data.json";
import Dots from "./dots";
import sendEmail from "@/lib/sendEmail";

const { form_title, form_labels, form_placeholders } = data;

const Form = ({ language }) => {
  const [disable, setDisable] = useState(false);
  const [sent, setSent] = useState(false);

  const checkForm = async (e) => {
    setDisable(true);

    const isError = await sendEmail(e);

    setSent(isError);
  };

  return (
    <section className={styles.form} id="form">
      <h3>{form_title[language]}</h3>
      <form action={checkForm}>
        <div className={styles.form_upper}>
          <div className={styles.form_input}>
            <label htmlFor="name">{form_labels[language].name}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={form_placeholders[language].name}
              required
            />
          </div>

          <div className={styles.form_input}>
            <label htmlFor="email">{form_labels[language].email}</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder={form_placeholders[language].email}
              required
            />
          </div>
        </div>

        <div className={styles.form_input}>
          <label htmlFor="message">{form_labels[language].message}</label>
          <textarea
            type="text"
            id="message"
            name="message"
            className={styles.message}
            placeholder={form_placeholders[language].message}
            required
          />
        </div>

        <div className={styles.submit}>
          <Dots sent={sent} disable={disable} />

          <button
            type="submit"
            value="Submit"
            disabled={disable}
            className={sent ? styles.sent : undefined}
          >
            {sent
              ? form_labels[language].submit.received
              : disable
              ? form_labels[language].submit.sending
              : form_labels[language].submit.submit}
          </button>
        </div>
      </form>

      <Image
        className={styles.logo}
        src={"/formLogo.svg"}
        height={492}
        width={492}
        alt="dupscaled logo"
      />

      <div className={styles.glow} />
    </section>
  );
};

export default Form;
