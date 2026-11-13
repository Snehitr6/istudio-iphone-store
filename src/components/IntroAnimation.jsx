
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaApple } from "react-icons/fa";

export default function IntroAnimation({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="intro-logo-container"
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="intro-apple-logo"
                animate={{
                  scale: [1, 1.08, 1],
                  filter: [
                    "drop-shadow(0 0 15px rgba(255,255,255,0.2))",
                    "drop-shadow(0 0 45px rgba(120,170,255,0.8))",
                    "drop-shadow(0 0 15px rgba(255,255,255,0.2))",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaApple />
              </motion.div>

              <motion.h1
                className="intro-brand-name"
                initial={{ opacity: 0, letterSpacing: "18px" }}
                animate={{ opacity: 1, letterSpacing: "8px" }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                iSTUDIO
              </motion.h1>

              <motion.p
                className="intro-tagline"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                TECHNOLOGY. REFINED.
              </motion.p>

              <div className="intro-loader">
                <motion.div
                  className="intro-loader-progress"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.6, delay: 1.2 }}
                />
              </div>
            </motion.div>

            <div className="intro-bottom">
              DESIGNED FOR THE EXTRAORDINARY
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ visibility: showIntro ? "hidden" : "visible" }}>
        {children}
      </div>
    </>
  );
}
