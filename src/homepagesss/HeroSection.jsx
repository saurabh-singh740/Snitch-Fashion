import React from "react";
import Shirt3D from "./Shirt3D";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

// Animation Variants
const wordVariant = {
  hidden: { y: -80, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  const words = ["Redefine", "your", "style"];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 overflow-hidden">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-unbounded font-extrabold tracking-tight leading-tight drop-shadow-md flex flex-wrap gap-x-4">
            {words.map((word, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
                className="inline-block bg-gradient-to-r from-[#0fd2b5] via-[#00b894] to-[#ffeaa7] text-transparent bg-clip-text whitespace-nowrap"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
            className="text-gray-400 text-lg md:text-xl"
          >
            Discover bold fashion pieces crafted for the new generation. Join
            the movement. Be Snitch.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex space-x-4"
          >
            
          </motion.div>
        </div>

        {/* Right 3D Model */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-center"
        >
          <div className="w-[300px] h-[400px]">
            <Shirt3D />
          </div>
        </motion.div>
      </section>

      {/* Latest Drop Section */}
      {/* Latest Drop Section – Product Grid */}
      <section className="bg-black py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-10">
            🔥 Latest Drop
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Product Card 1 */}
            {/* Product Card 1 – Video Based with Visible Text Overlay */}
<div className="relative rounded-xl overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-300">

  {/* Video Background */}
  <video
    src="/videos/oversized-tee.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-60 object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

  {/* Text Content */}
  <div className="absolute bottom-4 left-4 z-20">
    <h3 className="text-white text-lg font-bold drop-shadow-md">Oversized Tee</h3>
    <p className="text-[#0fd2b5] font-semibold drop-shadow-md">₹799</p>
    <button className="mt-2 px-4 py-2 bg-[#0fd2b5] text-black font-semibold rounded-full hover:bg-[#00b894] transition">
      Buy Now
    </button>
  </div>

</div>


            {/* Product Card 2 */}
            <div className="relative rounded-xl overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-300">

  {/* Video Background */}
  <video
    src="/videos/minimalshirt.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-60 object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

  {/* Text Content */}
  <div className="absolute bottom-4 left-4 z-20">
    <h3 className="text-white text-lg font-bold drop-shadow-md">Minimal Shirt</h3>
    <p className="text-[#0fd2b5] font-semibold drop-shadow-md">₹1,299</p>
    <button className="mt-2 px-4 py-2 bg-[#0fd2b5] text-black font-semibold rounded-full hover:bg-[#00b894] transition">
      Buy Now
    </button>
  </div>

</div>

            

            {/* Product Card 3 */}
            <div className="relative rounded-xl overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-300">

  {/* Video Background */}
  <video
    src="/videos/denimjacket.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-60 object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

  {/* Text Content */}
  <div className="absolute bottom-4 left-4 z-20">
    <h3 className="text-white text-lg font-bold drop-shadow-md">Denim Jacket</h3>
    <p className="text-[#0fd2b5] font-semibold drop-shadow-md">₹1,999</p>
    <button className="mt-2 px-4 py-2 bg-[#0fd2b5] text-black font-semibold rounded-full hover:bg-[#00b894] transition">
      Buy Now
    </button>
  </div>

</div>


            {/* Product Card 4 */}
            <div className="relative rounded-xl overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-300">

  {/* Video Background */}
  <video
    src="/videos/corduoyshirt.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-60 object-cover"
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

  {/* Text Content */}
  <div className="absolute bottom-4 left-4 z-20">
    <h3 className="text-white text-lg font-bold drop-shadow-md">Corduroy Shirt</h3>
    <p className="text-[#0fd2b5] font-semibold drop-shadow-md">₹1,499</p>
    <button className="mt-2 px-4 py-2 bg-[#0fd2b5] text-black font-semibold rounded-full hover:bg-[#00b894] transition">
      Buy Now
    </button>
  </div>

</div>

          </div>
        </motion.div>
      </section>
      {/* CTA + Newsletter Section */}
{/* CTA + Newsletter Section with Animation */}
<section className="bg-[#0f0f0f] py-20 px-6 md:px-20 border-t border-gray-800">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 1 }}
    className="max-w-4xl mx-auto text-center"
  >
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-white mb-4"
    >
      Join the Snitch Community
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="text-gray-400 text-lg mb-8"
    >
      Be the first to get exclusive drops, styling tips, and offers straight to your inbox.
    </motion.p>

    <motion.form
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="flex flex-col sm:flex-row justify-center items-center gap-4"
    >
      <motion.input
        type="email"
        required
        placeholder="Enter your email"
        className="w-full sm:w-96 px-5 py-3 rounded-full bg-[#1f1f1f] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0fd2b5]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      <motion.button
        type="submit"
        className="px-6 py-3 bg-[#0fd2b5] text-black font-semibold rounded-full hover:bg-[#00b894] transition"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 180 }}
      >
        Subscribe
      </motion.button>
    </motion.form>
  </motion.div>
</section>


      {/* Footer Section with Social Icons */}
      <footer className="bg-[#0f0f0f] py-6 px-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          &copy; 2025 Snitch. All rights reserved.
        </p>
        <div className="flex space-x-6 text-2xl text-white mt-4 md:mt-0">
          <a
            href="https://instagram.com/snitch.co.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#0fd2b5] transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/snitchindia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#0fd2b5] transition transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/snitch.co.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#0fd2b5] transition transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/snitch-com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0fd2b5] transition transform hover:scale-110"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </footer>
    </>
  );
}
