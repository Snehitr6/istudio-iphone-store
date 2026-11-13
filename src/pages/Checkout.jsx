
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ShieldCheck } from "lucide-react";

import { useCart } from "../context/CartContext";
import { formatPrice } from "../components/ProductCard";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [order, setOrder] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cart.length) return;

    const newOrder = {
      id: `IST${Date.now().toString().slice(-8)}`,
      customer: form.name,
      total: cartTotal,
      date: new Date().toLocaleDateString("en-IN"),
    };

    localStorage.setItem(
      "istudio-last-order",
      JSON.stringify(newOrder)
    );

    clearCart();
    setOrder(newOrder);
  };

  if (order) {
    return (
      <main className="success-page">
        <div className="success-card">
          <CheckCircle2 size={75} />

          <span className="eyebrow">ORDER CONFIRMED</span>

          <h1>Thank you, {order.customer}!</h1>

          <p>Your demo order has been successfully placed.</p>

          <div className="order-reference">
            <span>ORDER NUMBER</span>
            <strong>{order.id}</strong>

            <span>TOTAL AMOUNT</span>
            <strong>{formatPrice(order.total)}</strong>
          </div>

          <button
            className="btn-primary"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  if (!cart.length) {
    return (
      <main className="empty-state">
        <h2>Your shopping bag is empty.</h2>

        <button
          className="btn-primary"
          onClick={() => navigate("/iphones")}
        >
          Explore Products
        </button>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="listing-header">
        <span className="eyebrow">ALMOST YOURS</span>

        <h1>
          Secure <span>checkout.</span>
        </h1>

        <p>Enter your delivery information.</p>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Information</h2>

          {[
            ["name", "Full Name", "text"],
            ["email", "Email Address", "email"],
            ["phone", "Phone Number", "tel"],
            ["address", "Delivery Address", "text"],
            ["city", "City", "text"],
            ["pincode", "PIN Code", "text"],
          ].map(([name, label, type]) => (
            <label className="form-field" key={name}>
              {label}

              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={`Enter ${label.toLowerCase()}`}
                required
                maxLength={
                  name === "phone"
                    ? 10
                    : name === "pincode"
                    ? 6
                    : undefined
                }
                pattern={
                  name === "phone"
                    ? "[0-9]{10}"
                    : name === "pincode"
                    ? "[0-9]{6}"
                    : undefined
                }
              />
            </label>
          ))}

          <div className="demo-notice">
            <ShieldCheck size={20} />
            Demo checkout only. No real payment is collected.
          </div>

          <button
            className="btn-primary checkout-btn"
            type="submit"
          >
            Place Demo Order · {formatPrice(cartTotal)}
          </button>
        </form>

        <aside className="cart-summary">
          <h2>Your Order</h2>

          {cart.map((item) => (
            <div className="summary-line" key={item.key}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                {formatPrice(item.price * item.quantity)}
              </strong>
            </div>
          ))}

          <div className="summary-line total-line">
            <span>Total</span>
            <strong>{formatPrice(cartTotal)}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}
