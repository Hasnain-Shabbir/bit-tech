import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.blogWrapper}>
          <Link href="/blog/testId" className={styles}>
            <div className={styles.blogItem}>
              <div>
                <Image
                  src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  width={400}
                  height={250}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h1 className={styles.title}>
                  Lorem, ipsum dolor sit amet consectetur
                </h1>
                <p className={styles.desc}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione assumenda tenetur libero et illo quisquam.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
