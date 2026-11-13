
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Accessories() {
  const accessories = products.filter(
    (product) => product.category === "Accessories"
  );

  return (
    <main className="listing-page">
      <div className="listing-header">
        <span className="eyebrow">COMPLETE YOUR SETUP</span>

        <h1>
          Accessories that <span>connect.</span>
        </h1>

        <p>
          Beautifully designed additions to your everyday experience.
        </p>
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

      {accessories.length === 0 && (
        <div className="empty-state">
          <h3>No accessories available.</h3>
        </div>
      )}
    </main>
  );
}
