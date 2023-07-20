"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const formData = { name, email, password };

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  return (
    <section>
      <div className="container">
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className={styles.input}
              required
            />
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
            <button className={styles.button}>Register</button>
          </form>
          {err && err.message}
          <Link href="/dashboard/login">Login with an existing account</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
