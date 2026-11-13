
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price || 0);
}

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) return null;

  const productUrl = `/product/${product.id}`;

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();

    addToCart(
      product,
      product.colors?.[0] || "Default",
      product.storage?.[0] || "Default"
    );

    navigate("/cart");
  };

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -7 }}
    >
      <div className="product-image-wrap">
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}

        <Link to={productUrl} className="product-image-link">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </Link>

        <button
          type="button"
          className="quick-add"
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={18} />
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <Link to={productUrl} className="product-title-link">
          <h3>{product.name}</h3>
        </Link>

        <p>{product.tagline}</p>

        <div className="product-price">
          <strong>{formatPrice(product.price)}</strong>

          {product.oldPrice > product.price && (
            <del>{formatPrice(product.oldPrice)}</del>
          )}
        </div>

        <Link to={productUrl} className="product-explore">
          Explore more <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
