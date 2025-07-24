// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin,FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Profile Image + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/saurabh.png"
            alt="Saurabh Singh"
            className="w-12 h-12 rounded-full object-cover border border-gray-600"
          />
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold hover:text-indigo-400 transition">
              Saurabh Singh
            </span>
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            <span className="text-xs md:text-sm">Designed & Developed with ❤️</span>
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://www.instagram.com/saurabhsingh0.1"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
  href="https://github.com/saurabh-singh740"  
  target="_blank"
  rel="noreferrer"
  className="hover:text-white transition"
>
  <FaGithub />
</a>

          <a
            href="https://x.com/saurabhnxt/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-singh-00322324b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Contact Info */}
        <div className="text-sm text-center md:text-right leading-5">
          <a href="ss1380820@gmail.com" className="block hover:text-white transition">
            ss1380820@gmail.com
          </a>
          <a href="tel:+916969696969" className="block hover:text-white transition">
            +91 6969696969
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
