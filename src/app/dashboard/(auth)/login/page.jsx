"use client";
import React from "react";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
