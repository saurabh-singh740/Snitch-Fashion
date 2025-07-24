import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Show success popup
    setPopupVisible(true);
    setFormData({ name: "", email: "", message: "" });

    // Hide after 3 seconds
    setTimeout(() => setPopupVisible(false), 3000);
  };

  return (
    <div className="relative bg-[#0e0e0e] text-white min-h-screen pt-28 px-6 md:px-24 pb-20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#ffe69c]/10 rounded-full blur-[120px] -translate-x-1/2 -z-10" />
        <div className="absolute bottom-0 right-1/2 w-[400px] h-[400px] bg-[#ffffff0d] rounded-full blur-[100px] translate-x-1/2 -z-10" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#ffe69c] via-white to-[#ffe69c] text-transparent bg-clip-text">
          Let’s Connect
        </h1>
        <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
          We're always here to listen. Whether you have a question, idea, or just want to chat —
          drop us a message.
        </p>
      </motion.div>

      {/* Contact Details */}
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="grid md:grid-cols-3 gap-8 mb-24"
>
  {[
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "hello@snitchwear.in",
      link: "mailto:hello@snitchwear.in",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Bangalore, India",
      link: "https://www.google.com/maps/place/Bangalore,+India",
    },
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white/5 p-6 rounded-2xl backdrop-blur-xl border border-white/10 text-center hover:shadow-2xl hover:scale-[1.02] transition block"
    >
      <div className="text-3xl mb-4 text-[#ffe69c]">{item.icon}</div>
      <h3 className="font-semibold text-lg mb-1 tracking-wide">{item.label}</h3>
      <p className="text-gray-300 text-sm break-words">{item.value}</p>
    </a>
  ))}
</motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white/5 p-10 rounded-3xl backdrop-blur-lg border border-white/10 shadow-xl space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#ffe69c]"
              required
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#ffe69c]"
              required
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Message</label>
          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#ffe69c]"
            required
          ></textarea>
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="w-full bg-[#ffe69c] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#ffedae] transition text-lg shadow-lg"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Message Sent Popup */}
      {popupVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl z-50"
        >
          ✅ Message sent successfully!
        </motion.div>
      )}
    </div>
  );
};

export default ContactPage;