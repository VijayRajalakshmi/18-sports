import "./ProductGrid.css";
import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductGrid() {
  const scrollRef = useRef();

  const bats = products.filter((item) => item.category === "bats");

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  // 🔥 SMART AUTO SCROLL (pauses on hover)
  useEffect(() => {
    const slider = scrollRef.current;

    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        slider.scrollBy({ left: 260, behavior: "smooth" });
      }, 3500);
    };

    const stopScroll = () => clearInterval(interval);

    startScroll();

    slider.addEventListener("mouseenter", stopScroll);
    slider.addEventListener("mouseleave", startScroll);

    return () => {
      clearInterval(interval);
      slider.removeEventListener("mouseenter", stopScroll);
      slider.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <section className="products">

      {/* HEADER */}
      <div className="product-header">
        <div>
          <h2>Top Picks for Power Hitters</h2>
          <p>Engineered bats trusted by serious players</p>
        </div>

        <div className="actions">
          <Link to="/products/bats" className="view-all">
            Explore All →
          </Link>

          <div className="arrows">
            <button onClick={() => scroll("left")}>‹</button>
            <button onClick={() => scroll("right")}>›</button>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <div className="product-slider" ref={scrollRef}>
        {bats.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </section>
  );
}

export default ProductGrid;