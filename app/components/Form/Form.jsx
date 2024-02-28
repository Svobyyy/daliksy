import styles from "./Form.module.css";
import Image from "next/image";
import { Resend } from "resend";

const Form = () => {
  async function sendEmail(e) {
    "use server";

    const resend = new Resend(process.env.RESEND_API_KEY);

    resend.emails.send({
      from: "dupscaled@resend.dev",
      to: "fugiasrecord@gmail.com",
      subject: "Testuju jestli to funguje",
      html: `${e.get("name")}, ${e.get("social")}, ${e.get("message")}`,
    });
  }

  return (
    <section className={styles.form}>
      <h3>Let’s get in touch!</h3>
      <form action={sendEmail}>
        <div className={styles.form_upper}>
          <div className={styles.form_input}>
            <label for="name">NAME</label>
            <input type="text" id="name" name="name" placeholder="Full name" />
          </div>

          <div className={styles.form_input}>
            <label for="social">PRIMARY SOCIAL</label>
            <input
              type="text"
              id="social"
              name="social"
              placeholder="https://twitter.com/dupscaled"
            />
          </div>
        </div>

        <div className={styles.form_input}>
          <label for="message">MESSAGE</label>
          <textarea
            type="text"
            id="message"
            name="message"
            className={styles.message}
            placeholder="Type your inquiry here!"
          />
        </div>

        <div className={styles.submit}>
          <Image src="/form.svg" width={362} height={34} />

          <button type="submit" value="Submit">
            Send message
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
