import React from "react";
import Image from "next/image";
import { Button } from "../../../components";
import { portfolioData } from "./portfolioData";
import styles from "./category.module.css";

const Category = ({ params }) => {
  const { category } = params;
  const portfolioItems = portfolioData[category];

  return (
    <div>
      <h1 className={styles.catTitle}>{category}</h1>
      {portfolioItems.map((data) => (
        <div className={styles.item} key={data.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={data.image}
              fill={true}
              alt="illustration"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
