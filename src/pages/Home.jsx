
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  CreditCard,
  Sparkles,
} from "lucide-react";

import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import PromoBanner from "../components/PromoBanner";
import products from "../data/products";
import LaunchAd from "../components/LaunchAd";

export default function Home() {
  const featured = products
    .filter((item) => item.category === "iPhone")
    .slice(0, 4);

  const accessories = products
    .filter((item) => item.category === "Accessories")
    .slice(0, 4);

  return (
    <main className="home-page">
      <Hero />
      <LaunchAd />

      <section className="benefits">
        <div className="benefit-item">
          <Truck />
          <span>Free delivery on selected orders</span>
        </div>

        <div className="benefit-item">
          <ShieldCheck />
          <span>Secure shopping experience</span>
        </div>

        <div className="benefit-item">
          <CreditCard />
          <span>Flexible payment options</span>
        </div>
      </section>

      <section className="section product-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR COLLECTION</span>
            <h2>Find your <span>iPhone.</span></h2>
            <p>Discover a device that matches your lifestyle.</p>
          </div>

          <Link to="/iphones" className="view-all">
            View all <ArrowRight size={17} />
          </Link>
        </div>

        <div className="product-grid">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </section>

      <PromoBanner />

      <section className="section accessories-home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">COMPLETE YOUR EXPERIENCE</span>
            <h2>Beyond the <span>iPhone.</span></h2>
            <p>Discover accessories designed for everyday life.</p>
          </div>

          <Link to="/accessories" className="view-all">
            Explore all <ArrowRight size={17} />
          </Link>
        </div>

        <div className="product-grid">
          {accessories.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="featured-accessory">
        <div className="featured-accessory-content">
          <span className="eyebrow">
            <Sparkles size={15} /> THE iSTUDIO EXPERIENCE
          </span>

          <h2>Everything connects.</h2>

          <p>
            Explore premium technology and accessories
            that make every moment better.
          </p>

          <Link to="/accessories" className="btn-primary">
            Discover More <ArrowRight size={17} />
          </Link>
        </div>

        <div className="featured-accessory-image">
          <img
            src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=900"
            alt="Premium smartwatch"
            loading="lazy"
          />
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta-inner">
          <span className="home-cta-label">
            YOUR NEXT EXPERIENCE STARTS HERE
          </span>

          <h2>
            Ready for something
            <br />
            <span>extraordinary?</span>
          </h2>

          <p>
            Discover the latest collection and experience
            technology in a whole new way.
          </p>

          <Link to="/iphones" className="home-cta-button">
            Shop iPhone Collection <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
