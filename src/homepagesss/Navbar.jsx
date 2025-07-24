import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleClick = (label) => {
    switch (label) {
      case "Home":
        navigate("/");
        break;
      case "Shop":
        navigate("/shop");
        break;
      case "About":
        navigate("/about");
        break;
      case "Contact":
        navigate("/contact");
        break;
      case "Login":
        navigate("/login");
        break;
      default:
        break;
    }
  };

  const navItems = ["Home", "Shop", "About", "Contact", "Login"];

  return (
    <nav className="w-full fixed top-0 z-50 px-8 py-4 bg-white/40 backdrop-blur-xl shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand */}
        <div
          className="text-3xl font-bold text-gray-900 tracking-wider cursor-pointer"
          onClick={() => navigate("/")}
        >
          SNITCH
        </div>

        {/* Nav Items */}
        <ul className="hidden md:flex gap-8 relative">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleClick(item)}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative cursor-pointer transition-all duration-300"
            >
              <div
                className={`absolute inset-0 rounded-md transition-all duration-300 ${
                  hovered === idx ? "bg-white shadow-xl scale-110 z-0" : ""
                }`}
              ></div>
              <span
                className={`relative px-4 py-1 text-lg font-medium transition-all duration-300 ${
                  hovered === null || hovered === idx
                    ? "text-gray-900 opacity-100"
                    : "text-gray-400 opacity-30"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden text-2xl text-gray-800">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
