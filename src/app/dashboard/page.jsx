"use client";
import React from "react";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const session = useSession();
  console.log("🚀 ~ file: page.jsx:7 ~ Dashboard ~ session:", session);

  return <div>Dashboard</div>;
};

export default Dashboard;
