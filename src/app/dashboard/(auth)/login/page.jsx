"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const [err, setErr] = useState(false);
  const session = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const formData = { email, password };
      signIn("credentials", formData);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  console.log(session);

  return (
    <section>
      <div className="container">
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              required
            />
            <button className={styles.button}>Login</button>
          </form>
          {err && err.message}
          <button className={styles.socialBtn} onClick={() => signIn("google")}>
            Login with Google
          </button>
          <Link href="/dashboard/register">Create a new account</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
