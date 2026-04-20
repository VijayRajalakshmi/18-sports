import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      {/* IMAGE + LINK */}
      <Link to={`/product/${product.id}`} className="image-box">
        <img src={product.image} alt={product.name} />
      </Link>

      {/* CONTENT */}
      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="brand">{product.brand}</p>

        <p className="price">₹{product.price}</p>
      </div>

      {/* ACTIONS */}
      <div className="actions">
        <Link to={`/product/${product.id}`} className="view-btn">
          View
        </Link>

        <a
          href={`https://wa.me/919999999999?text=Hi, I want ${product.name} (₹${product.price})`}
          target="_blank"
          rel="noreferrer"
          className="buy-btn"
        >
          Enquire
        </a>
      </div>

    </div>
  );
}

export default ProductCard;