"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher,
  );

  if (session.status === "loading") return <p>Loading...</p>;

  if (session.status === "unauthenticated") router.push("/dashboard/login");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated")
    return (
      <section>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.posts}>
              {isLoading
                ? "loading..."
                : data?.map((post) => (
                    <div className={styles.post} key={post._id}>
                      <div className={styles.imgContainer}>
                        <Image src={post.img} alt={post.title} fill={true} />
                      </div>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                      <span className={styles.delete}>X</span>
                    </div>
                  ))}
            </div>
            <form className={styles.addPost} onSubmit={handleSubmit}>
              <h1 className={styles.wrapper}>Add New Post</h1>
              <input type="text" placeholder="Title" className={styles.input} />
              <input
                type="text"
                placeholder="Description"
                className={styles.input}
              />
              <input type="text" placeholder="Image" className={styles.input} />
              <textarea
                placeholder="Content"
                cols="30"
                rows="10"
                className={styles.textArea}
              ></textarea>
              <button className={styles.button}>Create Post</button>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Dashboard;
