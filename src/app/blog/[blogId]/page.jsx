import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

const getData = async (postId) => {
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();

  return res.json();
};

export async function generateMetadata({ params }) {
  const post = await getData(params.blogId);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.blogId);

  return (
    <section>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.info}>
              <h1 className={styles.title}>{data.title}</h1>
              <p className={styles.desc}>{data.desc}</p>
              <div className={styles.author}>
                <Image
                  src={data.img}
                  alt={data.title}
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <span className={styles.username}>{data.username}</span>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={data.img}
                alt={data.title}
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.text}>{data.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
