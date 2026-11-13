
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function LaunchAd() {
  return (
    <section className="launch-ad">
      <div className="launch-ad-content">
        <motion.span
          className="launch-ad-label"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles size={15} />
          THE NEW GENERATION IS HERE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet the new
          <br />
          <span>iPhone 18 family.</span>
        </motion.h2>

        <p>
          Pro power. Foldable innovation.
          A completely new way to experience iPhone.
        </p>

        <div className="launch-ad-buttons">
          <Link to="/iphones" className="launch-primary">
            Explore Collection <ArrowRight size={18} />
          </Link>

          <Link to="/product/11" className="launch-secondary">
            Discover iPhone Duo
          </Link>
        </div>

        <div className="launch-ad-note">
          <span>18 PRO</span>
          <span>18 PRO MAX</span>
          <span>DUO FOLDABLE</span>
        </div>
      </div>

      <motion.div
        className="launch-ad-visual"
        initial={{ opacity: 0, scale: 0.85, x: 40 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="launch-glow" />

        <motion.img
          className="launch-pro-image"
          src="https://www.apple.com/newsroom/images/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/article/Apple-iPhone-18-Pro-2up-260909_inline.jpg.large.jpg"
          alt="iPhone 18 Pro"
          whileHover={{ scale: 1.04, rotate: -2 }}
        />

        <motion.img
          className="launch-duo-image"
          src="https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-colors-260909_big.jpg.large.jpg"
          alt="iPhone Duo foldable"
          whileHover={{ scale: 1.05, rotate: 2 }}
        />

        <span className="launch-floating-tag">
          INTRODUCING DUO
        </span>
      </motion.div>
    </section>
  );
}
