import React from "react";
import Image from "next/image";
import HeroImage from "/public/hero.png";
import styles from "./page.module.css";

const Home = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.heroWrapper}>
          <div className={styles.box}>
            <h1 className={styles.title}>
              Better design for your digital products.
            </h1>
            <p className={styles.desc}>
              Turning your Idea into Reality. We bring together the teams from
              the global tech industry.
            </p>
            <button className={styles.heroBtn}>See Our Works</button>
          </div>
          <div className={styles.box}>
            <Image
              src={HeroImage}
              alt="hero-image"
              className={styles.heroImg}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
