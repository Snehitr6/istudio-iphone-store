
import { Link } from "react-router-dom";

import {
  FaApple,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/" className="brand">
            <FaApple size={28} />
            <span>iSTUDIO</span>
          </Link>

          <p>
            Experience technology in its most beautiful form.
            Discover premium iPhones and accessories.
          </p>

          <div className="social-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* EXPLORE */}
        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/iphones">iPhone</Link>
          <Link to="/accessories">Accessories</Link>
          <Link to="/offers">Offers</Link>

          <Link to="/cart">
            <FaShoppingBag /> Shopping Bag
          </Link>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div className="footer-column">
          <h4>Customer Support</h4>
          <Link to="/contact">Contact Us</Link>

          <a href="mailto:support@istudio.example">
            <FaEnvelope /> Email Support
          </a>

          <a href="tel:+911234567890">
            <FaPhone /> Call Us
          </a>

          <Link to="/contact">
            <FaHeart /> Customer Care
          </Link>
        </div>

        {/* STORE */}
        <div className="footer-column">
          <h4>Visit Our Store</h4>

          <p>
            <FaMapMarkerAlt />
            Bengaluru, Karnataka, India
          </p>

          <p>Monday – Saturday</p>
          <p>10:00 AM – 8:00 PM</p>

          <Link to="/contact">
            Get in touch <FaArrowUp />
          </Link>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <span>© 2026 iSTUDIO. All rights reserved.</span>

        <span>
          Privacy Policy · Terms & Conditions
        </span>
      </div>
    </footer>
  );
}
