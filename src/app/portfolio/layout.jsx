import React from "react";
import styles from "./portfolio.module.css";

const Layout = ({ children }) => {
  return (
    <section className={`container ${styles.portfolioSec}`}>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </section>
  );
};

export default Layout;
