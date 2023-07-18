import React from "react";
import Link from "next/link";
import { navData } from "./navData";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`container ${styles.navbar}`}>
      <Link href="/" className={styles.logo}>
        bitTech
      </Link>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {navData.map((data) => (
            <li key={data.id} className={styles.listItem}>
              <Link href={data.url}>{data.title}</Link>
            </li>
          ))}
        </ul>
        <button className={styles.logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
