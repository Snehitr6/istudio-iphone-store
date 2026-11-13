
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero">
      <div className="hero-background-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <motion.div
            className="hero-label"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-label-icon">
              <Sparkles size={14} />
            </span>
            DISCOVER THE NEW GENERATION
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet the
            <br />
            <span>extraordinary.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Innovation meets elegance. Discover powerful
            performance, remarkable photography and a
            beautifully connected experience.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/iphones" className="btn-primary hero-primary">
              Explore iPhone
              <ArrowRight size={18} />
            </Link>

            <Link to="/offers" className="btn-outline hero-secondary">
              View Offers
            </Link>
          </motion.div>

          <div className="hero-trust">
            <span>
              <Play size={13} />
              Innovation in every detail
            </span>
            <span>Premium collection 2026</span>
          </div>
        </div>

        {/* IPHONE PRODUCT IMAGE */}
        <motion.div
          className="hero-image"
          initial={
            reduceMotion ? false : { opacity: 0, scale: 0.92, x: 35 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-image-glow" />

          <div className="hero-image-frame">
            <img
              className="hero-product-image"
              src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1400&q=90"
              alt="Premium iPhone product showcase"
              loading="eager"
              fetchPriority="high"
            />

            <div className="hero-image-overlay" />

            <div className="hero-image-top">
              <span>iSTUDIO COLLECTION</span>
              <span>01 / 08</span>
            </div>

            <div className="hero-image-bottom">
              <span>DESIGNED TO INSPIRE</span>
              <span>DISCOVER MORE ↗</span>
            </div>
          </div>

          <motion.div
            className="hero-floating-card"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="hero-floating-dot" />
            <div>
              <strong>Made for more.</strong>
              <small>Technology meets creativity.</small>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <span>PREMIUM TECHNOLOGY. EXCEPTIONAL EXPERIENCE.</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
