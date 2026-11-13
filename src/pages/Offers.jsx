
import { Link } from "react-router-dom";
import { ArrowRight, Tag, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Offers() {
  const deals = products.filter(
    (product) => product.oldPrice > product.price
  );

  return (
    <main className="listing-page">

      {/* PAGE HEADER */}
      <motion.div
        className="listing-header"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="eyebrow">
          <Tag size={15} /> EXCLUSIVE DEALS
        </span>

        <h1>
          Something special. <span>Just for you.</span>
        </h1>

        <p>
          Explore our special demo prices on selected products.
        </p>
      </motion.div>

      {/* OFFER BANNER */}
      <motion.section
        className="offer-highlight"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <span>
            <Sparkles size={15} /> LIMITED-TIME COLLECTION
          </span>

          <h2>
            Upgrade your everyday.
          </h2>

          <p>
            Discover premium technology and selected
            accessories at special demo prices.
          </p>

          <Link to="/iphones" className="btn-primary">
            Explore Products <ArrowRight size={17} />
          </Link>
        </div>
      </motion.section>

      {/* PRODUCT DEALS */}
      <div className="section-heading">
        <div>
          <span className="eyebrow">SPECIAL COLLECTION</span>
          <h2>Featured <span>deals.</span></h2>
        </div>
      </div>

      <div className="product-grid">
        {deals.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
          />
        ))}
      </div>

      {deals.length === 0 && (
        <div className="empty-state">
          <h3>No offers available right now.</h3>
          <Link to="/iphones" className="btn-primary">
            Explore iPhones
          </Link>
        </div>
      )}

    </main>
  );
}
