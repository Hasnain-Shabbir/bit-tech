"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  console.log("🚀 ~ file: page.jsx:7 ~ Dashboard ~ session:", session);

  if (session.status === "loading") return <p>Loading...</p>;

  if (session.status === "unauthenticated") router.push("/dashboard/login");

  if (session.status === "authenticated") return <div>Dashboard</div>;
};

export default Dashboard;
