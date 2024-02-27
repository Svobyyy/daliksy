import styles from "./Form.module.css";

const Form = () => {
  return (
    <section className={styles.form}>
      <h3>Let’s get in touch!</h3>
      <form>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <input type="submit" value="Submit"/>
      </form>
    </section>
  );
};

export default Form;
