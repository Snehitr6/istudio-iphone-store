
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <motion.section
      className="promo-banner"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="promo-text">

        <span>
          <Sparkles size={14} />
          THE PERFECT PAIRING
        </span>

        <h2>
          More than a phone.
          <br />
          An entire ecosystem.
        </h2>

        <p>
          Discover premium accessories designed to work
          beautifully with your everyday technology.
        </p>

        <Link to="/accessories" className="promo-link">
          Explore Accessories <ArrowRight size={17} />
        </Link>

      </div>

      <div className="promo-image">
        <img
          src="https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=900"
          alt="Premium wireless accessories"
          loading="lazy"
        />
      </div>

    </motion.section>
  );
}
