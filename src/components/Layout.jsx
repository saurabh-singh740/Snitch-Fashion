// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../homepagesss/Navbar" // If you have
import Footer from "./Footer"; // You’ll make this

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Page content loads here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
