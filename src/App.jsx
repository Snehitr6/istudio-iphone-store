
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroAnimation from "./components/IntroAnimation";

import Home from "./pages/Home";
import IPhones from "./pages/iPhones";
import Accessories from "./pages/Accessories";
import Offers from "./pages/Offers";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />

            <Route path="/iphones" element={<IPhones />} />

            <Route path="/accessories" element={<Accessories />} />

            <Route path="/offers" element={<Offers />} />

            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <IntroAnimation>
        <AnimatedRoutes />
      </IntroAnimation>
    </BrowserRouter>
  );
}
