import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const timeline = [
  {
    year: "2019",
    title: "Founded Snitch",
    desc: "Siddharth Dungarwal launched Snitch with a vision to disrupt fast fashion with bold, edgy styles.",
  },
  {
    year: "2020",
    title: "100K Customers",
    desc: "Achieved a major milestone in less than a year, capturing attention across India.",
  },
  {
    year: "2022",
    title: "Broke Fashion Stereotypes",
    desc: "Snitch became known for defying trends and setting new streetwear standards.",
  },
  {
    year: "2024",
    title: "International Expansion",
    desc: "Snitch tapped into global markets, showcasing Indian-led fashion innovation.",
  },
];

const testimonials = [
  {
    name: "Ravi K.",
    feedback:
      "Snitch redefined my wardrobe. Their designs are killer and quality is top-notch!",
  },
  {
    name: "Saurabh Singh",
    feedback:
      "Love the edgy vibe. Siddharth’s vision truly shows in every drop.",
  },
  {
    name: "Amit R.",
    feedback:
      "From college wear to streetwear — Snitch delivers every time. Respect to the founder!",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen pt-24 px-6 md:px-20 pb-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#ffe69c] to-white text-transparent bg-clip-text">
          The Vision Behind Snitch
        </h1>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Bold, fearless, and made for the streets — explore the journey of a fashion rebellion led by Siddharth Dungarwal.
        </p>
      </motion.div>

      {/* Founder Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mb-32"
      >
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4 text-white">Siddharth Dungarwal</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            The creative spark behind Snitch, Siddharth blends luxury aesthetics with streetwear edge. Every piece is designed to challenge norms and set trends — not follow them.
          </p>
        </div>
        <div className="relative group">
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#d6b768] shadow-2xl transition-all duration-300 group-hover:scale-105">
            <img
              src="/images/siddharth.png"
              alt="Siddharth Dungarwal"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute top-0 right-0 bg-[#d6b768] text-black text-xs px-2 py-1 rounded-bl-lg font-semibold">
            Founder
          </span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="mb-36">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">
          Legacy Timeline
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              className="bg-[#1a1a1a]/60 backdrop-blur-md border border-[#2c2c2c] p-6 rounded-2xl shadow-lg hover:shadow-[#d6b768]/30 transition-all"
            >
              <h3 className="text-lg font-bold text-[#ffe69c]">{item.year}</h3>
              <h4 className="text-xl font-semibold text-white mt-1">{item.title}</h4>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center my-32"
      >
        <h2 className="text-4xl font-bold mb-6 text-white">Our Philosophy</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
          We don’t just design clothes — we shape culture. Snitch stands for self-expression, rebellion, and the power of fearless fashion.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-4 gap-8 text-center mb-36"
      >
        {[
          { label: "Customers", value: "1M+" },
          { label: "Global Drops", value: "250+" },
          { label: "Countries Reached", value: "18+" },
          { label: "Daily Orders", value: "3K+" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10"
          >
            <h3 className="text-3xl font-bold text-[#ffe69c]">{stat.value}</h3>
            <p className="text-sm text-gray-400 mt-1 uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Team Section */}
      {/* Team Section */}
<div className="mb-32">
  <h2 className="text-3xl font-bold mb-12 text-center text-white">Meet the Core Team</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
    {[
      {
        name: "Rohit",
        role: "Lead Designer",
        img: "https://media.istockphoto.com/id/2172166252/photo/a-software-developer-is-thinking-on-improving-the-efficiency-of-the-ai-system.jpg?s=1024x1024&w=is&k=20&c=sOFfigQx0i9V4IUHtM--iu30jKe-3mllTwAxBebbvKE=", // Example URL
      },
      {
        name: "Megha",
        role: "Brand Strategist",
        img: "https://media.istockphoto.com/id/2173683413/photo/photo-of-clever-happy-lady-it-specialist-wear-glasses-welcoming-you-new-working-place-indoors.jpg?s=612x612&w=0&k=20&c=SctGRzBwos_oqa7frggTmR3RLMq5PRviAP6k7IWiXN0=", // Example URL
      },
      {
        name: "Arjun",
        role: "Tech & Logistics",
        img: "https://media.istockphoto.com/id/1552875565/photo/programming-coding-and-man-with-focus-hologram-and-trading-with-cyber-security-futuristic-and.jpg?s=612x612&w=0&k=20&c=7mEo7G7NN_Iu4HNnEO3e68NE-8xEZLaIHR7fMZL4RyE=", // Example URL
      },
      {
        name: "Simran",
        role: "Marketing Head",
        img: "https://media.istockphoto.com/id/2114568071/photo/photo-of-an-elegant-successful-indian-or-arabian-business-woman-company-employee-sitting-at.jpg?s=612x612&w=0&k=20&c=qjbIenYrvI3gmKYb5iurfMh3ej65wtZ2BmRsumDKg-w=", // Example URL
      },
    ].map((member, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="bg-[#1c1c1c] p-5 rounded-2xl border border-[#2c2c2c] text-center shadow-lg"
      >
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#d6b768] shadow-md">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://i.imgur.com/Y1X7F5H.jpg"; // fallback default image
            }}
          />
        </div>
        <h4 className="text-lg font-bold text-white">{member.name}</h4>
        <p className="text-xs text-gray-400">{member.role}</p>
      </motion.div>
    ))}
  </div>
</div>


      {/* Brand Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-36 max-w-5xl mx-auto"
      >
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border-4 border-[#d6b768] shadow-lg">
          <video controls autoPlay muted loop className="w-full h-full object-cover">
            <source src="/videos/snitch-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-36"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">People Speak</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-md"
            >
              <FaQuoteLeft className="text-xl text-[#d6b768] mb-3" />
              <p className="text-sm text-gray-300 italic">{t.feedback}</p>
              <FaQuoteRight className="text-xl text-[#d6b768] mt-3" />
              <p className="mt-4 font-semibold text-white">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;