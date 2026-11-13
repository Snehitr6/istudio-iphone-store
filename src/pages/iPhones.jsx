
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function iPhones() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [showSort, setShowSort] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = products.filter(
      (product) => product.category === "iPhone"
    );

    if (search.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, sort]);

  return (
    <main className="listing-page">
      <section className="listing-hero">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">THE iSTUDIO COLLECTION</span>
          <h1>Discover your next iPhone.</h1>
          <p>
            Powerful performance. Beautiful design.
            Extraordinary experiences.
          </p>
        </motion.div>
      </section>

      <section className="listing-container">
        <div className="listing-toolbar">
          <div>
            <h2>All iPhones</h2>
            <p>{filteredProducts.length} products available</p>
          </div>

          <div className="listing-controls">
            <div className="listing-search">
              <Search size={18} />

              <input
                type="search"
                placeholder="Search iPhones..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <button
              type="button"
              className="filter-toggle"
              onClick={() => setShowSort(!showSort)}
            >
              <SlidersHorizontal size={17} />
              Sort
            </button>
          </div>
        </div>

        {showSort && (
          <div className="sort-panel">
            <label htmlFor="iphone-sort">Sort by:</label>
            <select
              id="iphone-sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No iPhones found</h3>
            <p>Try searching with another product name.</p>
            <button onClick={() => setSearch("")}>
              Clear Search
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
