"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { navData } from "./navData";
import { DarkModeToggle } from "../../components";
import styles from "./navbar.module.css";

const Navbar = () => {
  const session = useSession();

  return (
    <nav className={`container ${styles.navbar}`}>
      <Link href="/" className={styles.logo}>
        Bit Tech
      </Link>
      <div className={styles.listWrapper}>
        <DarkModeToggle />
        <ul className={styles.list}>
          {navData.map((data) => (
            <li key={data.id} className={styles.listItem}>
              <Link href={data.url}>{data.title}</Link>
            </li>
          ))}
        </ul>
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
