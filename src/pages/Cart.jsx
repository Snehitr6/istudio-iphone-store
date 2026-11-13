
import { Link, useNavigate } from "react-router-dom";
import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { formatPrice } from "../components/ProductCard";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <main className="empty-cart">
        <ShoppingBag size={55} />
        <h1>Your bag is waiting.</h1>
        <p>Discover something extraordinary for yourself.</p>

        <Link to="/iphones" className="btn-primary">
          Explore iPhones
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="listing-header">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1>
          Your shopping <span>bag.</span>
        </h1>
        <p>
          {cart.length} different product(s) in your bag.
        </p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.key}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>

                <p>Colour: {item.selectedColor}</p>
                <p>Storage: {item.selectedStorage}</p>

                <strong>{formatPrice(item.price)}</strong>

                <div className="quantity-control">
                  <button
                    onClick={() =>
                      updateQuantity(item.key, item.quantity - 1)
                    }
                    aria-label="Decrease quantity"
                  >
                    <Minus size={15} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.key, item.quantity + 1)
                    }
                    aria-label="Increase quantity"
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              <button
                className="remove-item"
                onClick={() => removeFromCart(item.key)}
                aria-label={`Remove ${item.name}`}
              >
                <Trash2 size={19} />
              </button>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order summary</h2>

          <div className="summary-line">
            <span>Subtotal</span>
            <strong>{formatPrice(cartTotal)}</strong>
          </div>

          <div className="summary-line">
            <span>Delivery</span>
            <strong className="free-label">FREE</strong>
          </div>

          <div className="summary-line total-line">
            <span>Total</span>
            <strong>{formatPrice(cartTotal)}</strong>
          </div>

          <button
            className="btn-primary checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>

          <Link to="/iphones" className="continue-shopping">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}
