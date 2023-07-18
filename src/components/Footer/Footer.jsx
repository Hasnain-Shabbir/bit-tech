import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerIcons } from "./footerData";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="container">
      <div className={styles.footerWrapper}>
        <p>&copy; 2023 bitTech. All rights reserved.</p>
        <ul className={styles.iconList}>
          {footerIcons.map((icon) => (
            <li key={icon.id}>
              <Link href={icon.url} target="_blank">
                <Image width={25} height={25} src={icon.src} alt={icon.title} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
