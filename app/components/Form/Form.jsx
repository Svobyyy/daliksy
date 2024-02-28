"use client";

import styles from "./Form.module.css";
import Image from "next/image";
import { useState } from "react";
import { Resend } from "resend";
import { SendEmail } from "./SendEmail";

const Form = () => {
  const [disable, setDisable] = useState(false);
  const [sent, setSent] = useState(false);

  const checkForm = async (e) => {
    setDisable(true);

    const isError = await SendEmail(e);

    setSent(isError);
  };

  return (
    <section className={styles.form} id="form">
      <h3>Let’s get in touch!</h3>
      <form action={checkForm}>
        <div className={styles.form_upper}>
          <div className={styles.form_input}>
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              required
            />
          </div>

          <div className={styles.form_input}>
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="https://twitter.com/dupscaled"
              required
            />
          </div>
        </div>

        <div className={styles.form_input}>
          <label htmlFor="message">MESSAGE</label>
          <textarea
            type="text"
            id="message"
            name="message"
            className={styles.message}
            placeholder="Type your inquiry here!"
            required
          />
        </div>

        <div className={styles.submit}>
          <Image src="/form.svg" width={362} height={34} />

          <button
            type="submit"
            value="Submit"
            disabled={disable}
            className={sent ? styles.sent : undefined}
          >
            {sent ? "Received" : disable ? "Sending" : "Send message"}
          </button>
        </div>
      </form>

      <Image
        className={styles.logo}
        src={"/formLogo.svg"}
        height={492}
        width={492}
      />

      <div className={styles.glow} />
    </section>
  );
};

export default Form;
