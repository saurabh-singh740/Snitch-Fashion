"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// 👇 AnimatedTitle component (slower + elegant)
const AnimatedTitle = () => {
  const wordVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
    hidden: {},
  };

  const letterVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14,
        duration: 0.6,
      },
    },
  };

  const gradientClass =
    "bg-gradient-to-r from-[#f7c59f] via-[#ec9f69] to-[#b86b41] text-transparent bg-clip-text";

  const animatedWord = (word, key) => (
    <motion.div
      key={key}
      className="flex justify-center md:justify-start space-x-1"
      variants={wordVariants}
      initial="hidden"
      animate="visible"
    >
      {word.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={letterVariants}
        >
          <span
            className={`${gradientClass} drop-shadow-md text-5xl md:text-8xl font-extrabold uppercase`}
          >
            {char}
          </span>
        </motion.span>
      ))}
    </motion.div>
  );

  const words = ["Wear", "Your", "Identity"];

  return (
    <div className="space-y-3">
      {words.map((word, i) => animatedWord(word, i))}
    </div>
  );
};

// 👇 LoginForm component
const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const resetFields = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const customEmailRegex = /^[a-zA-Z]+[0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    if (!customEmailRegex.test(email)) {
      setError("Email must start with letters followed by numbers. Ex: test123@gmail.com");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess(true);
    localStorage.setItem("userToken", "dummy-token");
    localStorage.setItem("userEmail", email);

    setTimeout(() => {
      setSuccess(false);
      resetFields();
      console.log(isLogin ? "Logged in!" : "Signed up!", { email, password });
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Side: Brand Section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://source.unsplash.com/1600x900/?fashion,model,clothes')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#0f0f0f]/80 to-[#1c1c1c]/90 backdrop-blur-[2px]"></div>

        <div className="relative z-10 px-8 text-center md:text-left">
          <AnimatedTitle />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-xl mt-4 text-white/80 font-light"
          >
            Define Your Style
          </motion.p>
        </div>
      </div>

      {/* Right Side: Login Card */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-[#121212]">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 space-y-6 text-white"
        >
          <h2 className="text-3xl font-extrabold text-center tracking-wide uppercase">
            {isLogin ? "Welcome Back" : "Join the Tribe"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!isLogin && (
              <motion.input
                whileFocus={{ scale: 1.03 }}
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && (
              <p className="text-green-400 text-sm">
                {isLogin ? "Login successful!" : "Signup successful!"}
              </p>
            )}

            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full py-3 bg-black text-white rounded-xl shadow-md hover:bg-white hover:text-black border border-white transition-all duration-300"
            >
              {isLogin ? "Login" : "Sign Up"}
            </motion.button>

            <p
              className="text-sm text-center text-blue-400 cursor-pointer hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </p>

            <div className="flex justify-between text-sm mt-4 text-blue-300">
              <p
                className="cursor-pointer hover:underline"
                onClick={() => alert("Forgot Password flow not implemented yet")}
              >
                Forgot Password?
              </p>
              <p
                className="cursor-pointer hover:underline"
                onClick={() => alert("Google Auth coming soon")}
              >
                Login with Google
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginForm;
