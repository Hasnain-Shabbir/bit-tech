import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Button } from "../../components";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.contactWrapper}>
          <h1 className={styles.title}>Let's Keep in Touch</h1>
          <div className={styles.content}>
            <div className={styles.imgContainer}>
              <Image
                src="/contact.png"
                alt="contact"
                fill={true}
                className={styles.img}
              />
            </div>
            <form className={styles.form}>
              <input type="text" placeholder="name" className={styles.input} />
              <input type="email" placeholder="name" className={styles.input} />
              <textarea
                name="message"
                cols="30"
                rows="10"
                className={styles.textArea}
              ></textarea>
              <Button url="#" text="send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
