import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="banner">

      {/* BACKGROUND GLOW */}
      <div className="glow"></div>

      {/* CONTENT */}
      <div className="banner-content">
        <span className="tag">18 SPORTS EXCLUSIVE</span>

        <h2>
          Built for Performance <br />
          Designed for <span>Champions</span>
        </h2>

        <p>
          Discover premium cricket gear engineered for precision, power and durability.
        </p>

        <div className="banner-actions">
          <Link to="/products" className="primary-btn">
            Shop Collection →
          </Link>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Talk to Expert
          </a>
        </div>
      </div>

    </section>
  );
}

export default Banner;