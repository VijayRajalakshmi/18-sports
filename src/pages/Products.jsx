import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Products.css";

function Products() {
  const { category } = useParams();
  const [sort, setSort] = useState("default");

  // FILTER
  let filteredProducts = category
    ? products.filter((item) => item.category === category)
    : products;

  // SORT
  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  const format = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <section className="products-page">

      <div className="container">

        {/* 🔥 BREADCRUMB */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          {category && (
            <>
              <span>/</span>
              <span className="active">{format(category)}</span>
            </>
          )}
        </div>

        {/* 🔥 HEADER BLOCK */}
        <div className="products-top">

          <div className="title-area">
            <h1>
              {category
                ? `${format(category)} Collection`
                : "All Products"}
            </h1>

            <p>
              Showing <strong>{filteredProducts.length}</strong> products
            </p>
          </div>

          {/* SORT */}
          <div className="sort">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>
          </div>

        </div>

        {/* 🔥 PRODUCTS GRID */}
        {filteredProducts.length === 0 ? (
          <div className="empty">
            <h2>No products found</h2>
            <p>Try exploring other categories</p>
          </div>
        ) : (
          <div className="grid">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Products;