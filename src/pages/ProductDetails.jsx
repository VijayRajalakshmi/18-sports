import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === parseInt(id));

  const [mainImage, setMainImage] = useState("");
  const [qty, setQty] = useState(1);

  // SET DEFAULT IMAGE SAFELY
  useEffect(() => {
    if (product) {
      setMainImage(product.images?.[0] || product.image);
    }
  }, [product]);

  // NOT FOUND
  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found</h2>
        <Link to="/">Go Home</Link>
      </div>
    );
  }

  return (
    <section className="product-details">

      {/* 🔥 BREADCRUMB */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <Link to={`/products/${product.category}`}>
          {product.category}
        </Link>
        <span> / </span>
        <span className="active">{product.name}</span>
      </div>

      <div className="details-container">

        {/* 🔥 LEFT - IMAGE */}
        <div className="left">

          <div className="main-image">
            <img src={mainImage} alt={product.name} />
          </div>

          <div className="thumbs">
            {(product.images || [product.image]).map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setMainImage(img)}
                className={mainImage === img ? "active" : ""}
              />
            ))}
          </div>

        </div>

        {/* 🔥 RIGHT - DETAILS */}
        <div className="right">

          <h1>{product.name}</h1>

          <p className="brand">Brand: {product.brand}</p>

          <p className="price">₹{product.price}</p>

          <p className="desc">
            {product.description ||
              "Premium quality cricket gear designed for performance and durability."}
          </p>

          {/* 🔥 QUICK SPECS */}
          {product.details && (
            <ul className="specs">
              {product.details.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          )}

          {/* 🔥 QUANTITY */}
          <div className="qty">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* 🔥 ACTION */}
          <div className="actions">
            <button
              className="enquire-btn"
              onClick={() =>
                navigate("/contact", {
                  state: {
                    product: product.name,
                    price: product.price,
                  },
                })
              }
            >
              Enquire Now
            </button>
          </div>

        </div>

      </div>

      {/* 🔥 EXTRA PRODUCT CONTENT (SEO BOOST) */}
      <div className="product-extra">

        {/* DESCRIPTION */}
        <div className="extra-section">
          <h2>Product Description</h2>
          <p>
            {product.fullDescription ||
              product.description ||
              "This product is crafted for performance, durability, and comfort. Perfect for serious cricket players."}
          </p>
        </div>

        {/* FEATURES */}
        {product.features && (
          <div className="extra-section">
            <h2>Key Features</h2>
            <ul>
              {product.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
          </div>
        )}

        {/* SPECIFICATIONS */}
        {product.specifications && (
          <div className="extra-section">
            <h2>Specifications</h2>
            <ul>
              {product.specifications.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}

      </div>

      {/* 🔥 SIMILAR PRODUCTS */}
      <div className="similar">
        <h2>Similar Products</h2>

        <div className="similar-grid">
          {products
            .filter(
              (item) =>
                item.category === product.category &&
                item.id !== product.id
            )
            .slice(0, 4)
            .map((item) => (
              <div
                key={item.id}
                className="similar-card"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
            ))}
        </div>
      </div>

    </section>
  );
}

export default ProductDetails;