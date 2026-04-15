import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "40px", background: "#111", color: "#fff" }}>
      <img src={product.image} width="300" />

      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
    </div>
  );
}

export default ProductDetails;