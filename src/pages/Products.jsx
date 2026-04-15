import products from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

function Products() {
  return (
    <div style={{ padding: "40px", background: "#111", color: "#fff" }}>
      <h1>All Products</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;