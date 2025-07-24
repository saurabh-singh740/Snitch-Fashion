import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout"; // ✅
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import LoginPage from "./pages/LoginPage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
