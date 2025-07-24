import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 sec loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.img
              src="./Snitchlogo.png"
              alt="Snitch Logo"
              initial={{ scale: 0.5, rotateY: 0, opacity: 0 }}
              animate={{
                scale: 1,
                rotateY: 360,
                opacity: 1,
              }}
              exit={{
                scale: 2, // 👈 Zoom-out when exiting
                opacity: 2.5,
                transition: { duration: 1, ease: "easeInOut" },
              }}
              transition={{
                duration: 3,
                ease: "linear",
              }}
              className="w-48 h-auto"
              style={{ transformStyle: "preserve-3d" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}
