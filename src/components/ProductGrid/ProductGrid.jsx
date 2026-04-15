import "./ProductGrid.css";
import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import { useRef, useEffect } from "react";

function ProductGrid() {
  const scrollRef = useRef();

  const bats = products.filter((item) => item.category === "bats");

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // 🔥 AUTO SCROLL (premium feel)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="products">
      <div className="product-header">
        <h2>Top Selling Bats</h2>

        <div className="actions">
          <span className="view-all">View All</span>

          <div className="arrows">
            <button onClick={() => scroll("left")}>←</button>
            <button onClick={() => scroll("right")}>→</button>
          </div>
        </div>
      </div>

      <div className="product-slider" ref={scrollRef}>
        {bats.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;