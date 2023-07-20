import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <section>
      <div className="container">
        <div className={styles.blogWrapper}>
          {data.map((blog) => (
            <Link href={`/blog/${blog._id}`} className={styles} key={blog._id}>
              <div className={styles.blogItem}>
                <div>
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.title}>{blog.title}</h1>
                  <p className={styles.desc}>{blog.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
