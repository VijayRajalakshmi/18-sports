import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt="" />

      <h3>{product.name}</h3>
      <p>{product.price}</p>

      <a
        href={`https://wa.me/919999999999?text=I want ${product.name}`}
        target="_blank"
        className="buy-btn"
      >
        Enquire
      </a>
    </div>
  );
}

export default ProductCard;