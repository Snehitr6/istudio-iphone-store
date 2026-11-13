
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Apple,
  ShoppingBag,
  Menu,
  X,
  Search,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const links = [
  { name: "Home", path: "/" },
  { name: "iPhone", path: "/iphones" },
  { name: "Accessories", path: "/accessories" },
  { name: "Offers", path: "/offers" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">

        <Link to="/" className="brand" onClick={closeMenu}>
          <Apple size={25} fill="currentColor" />
          <span>iSTUDIO</span>
        </Link>

        <nav className="desktop-nav">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link
            to="/iphones"
            className="nav-search"
            aria-label="Explore products"
          >
            <Search size={20} />
          </Link>

          <Link
            to="/cart"
            className="cart-icon"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={21} />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}

            <Link
              to="/cart"
              onClick={closeMenu}
              className="mobile-nav-link"
            >
              Shopping Bag ({cartCount})
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
