
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../components/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((item) => String(item.id) === String(id));

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || "Natural Titanium"
  );
  const [selectedStorage, setSelectedStorage] = useState(
    product?.storage?.[0] || "256GB"
  );
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <section className="empty-state">
        <h2>Product not found</h2>
        <p>The product you are looking for is unavailable.</p>
        <button onClick={() => navigate("/iphones")}>
          Browse iPhones
        </button>
      </section>
    );
  }

  const images = product.images?.length
    ? product.images
    : [product.image];

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedStorage);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="product-details-page">
      <div className="details-container">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={17} /> Back
        </button>

        <div className="details-grid">
          <motion.div
            className="details-gallery"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="details-main-image">
              <img
                src={images[activeImage]}
                alt={product.name}
              />
            </div>

            <div className="details-thumbnails">
              {images.map((image, index) => (
                <button
                  key={image + index}
                  className={activeImage === index ? "active" : ""}
                  onClick={() => setActiveImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="details-info"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {product.badge && (
              <span className="product-badge">{product.badge}</span>
            )}

            <p className="details-category">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="details-tagline">{product.tagline}</p>

            <div className="details-rating">
              <span>★</span> {product.rating || "4.8"} / 5
            </div>

            <div className="details-price">
              <strong>{formatPrice(product.price)}</strong>
              {product.oldPrice > product.price && (
                <del>{formatPrice(product.oldPrice)}</del>
              )}
            </div>

            <p className="details-description">
              {product.description}
            </p>

            {product.colors?.length > 0 && (
              <div className="option-group">
                <h3>Choose your colour</h3>
                <div className="option-list">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={selectedColor === color ? "selected" : ""}
                      onClick={() => setSelectedColor(color)}
                    >
                      {selectedColor === color && <Check size={14} />}
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.storage?.length > 0 && (
              <div className="option-group">
                <h3>Choose storage</h3>
                <div className="option-list">
                  {product.storage.map((storage) => (
                    <button
                      key={storage}
                      className={
                        selectedStorage === storage ? "selected" : ""
                      }
                      onClick={() => setSelectedStorage(storage)}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              className="details-add-button"
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <Check size={19} /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={19} /> Add to Cart
                </>
              )}
            </button>

            <button
              className="details-buy-button"
              onClick={() => {
                addToCart(product, selectedColor, selectedStorage);
                navigate("/cart");
              }}
            >
              Buy Now <ArrowRight size={18} />
            </button>

            <div className="details-benefits">
              <p><Truck size={19} /> Free delivery on eligible orders</p>
              <p><ShieldCheck size={19} /> Secure checkout experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
