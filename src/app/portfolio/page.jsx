import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./portfolio.module.css";

const portfolioData = [
  {
    id: 1,
    image: "/illustration.png",
    url: "/portfolio/illustrations",
    title: "Illustrations",
  },
  {
    id: 2,
    image: "/websites.jpg",
    url: "/portfolio/websites",
    title: "Websites",
  },
  {
    id: 3,
    image: "/apps.jpg",
    url: "/portfolio/applications",
    title: "Applications",
  },
];

const Portfolio = () => {
  return (
    <div>
      <div className={styles.portfolioWrapper}>
        <h1 className={styles.selectTitle}>Choose a gallery</h1>
        <div className={styles.items}>
          {portfolioData.map((data) => (
            <Link href={data.url} key={data.id} className={styles.item}>
              <Image
                src={data.image}
                alt={data.title}
                fill={true}
                className={styles.img}
              />
              <span className={styles.title}>{data.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
