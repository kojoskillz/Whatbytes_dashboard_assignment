import React from "react";
import Dashboard from "../components/Dashboard/dashboard";
import Sidebar from "../components/Sidebar/sidebar";
// import { BarChart } from "recharts";



export default function Home() {
  return (
  <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
    <Sidebar/>
    <Dashboard/>
    {/* <BarChart/> */}

   
  </main>
  );
}
