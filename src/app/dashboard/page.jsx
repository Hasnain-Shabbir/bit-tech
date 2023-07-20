"use client";
import React from "react";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const session = useSession();

  return <div>Dashboard</div>;
};

export default Dashboard;
