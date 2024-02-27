import styles from "./Form.module.css";
import Image from "next/image";

const Form = () => {
  return (
    <section className={styles.form}>
      <h3>Let’s get in touch!</h3>
      <form>
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

      <div className={styles.glow}/>

    </section>
  );
};

export default Form;
