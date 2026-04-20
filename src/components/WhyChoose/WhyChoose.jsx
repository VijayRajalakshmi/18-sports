import "./WhyChoose.css";
import { FaTruck, FaRupeeSign, FaShieldAlt, FaHeadset } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why">

      {/* LEFT SIDE */}
      <div className="why-left">
        <span className="tag">WHY CHOOSE US</span>

        <h2>
          Trusted by <span>Serious Players</span>
        </h2>

        <p>
          We don’t just sell gear — we deliver performance, durability,
          and reliability trusted by players across all levels.
        </p>

        {/* STATS */}
        <div className="stats">
          <div className="stat-box">
            <h3>500+</h3>
            <p>Products</p>
          </div>

          <div className="stat-box">
            <h3>1000+</h3>
            <p>Happy Players</p>
          </div>

          <div className="stat-box">
            <h3>4.8★</h3>
            <p>Ratings</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="why-right">

        <div className="feature-card">
          <FaTruck className="icon" />
          <h4>Fast Delivery</h4>
          <p>Quick dispatch with secure packaging</p>
        </div>

        <div className="feature-card">
          <FaRupeeSign className="icon" />
          <h4>Best Pricing</h4>
          <p>Affordable rates without compromise</p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="icon" />
          <h4>Premium Quality</h4>
          <p>Only trusted brands & materials</p>
        </div>

        <div className="feature-card">
          <FaHeadset className="icon" />
          <h4>Expert Support</h4>
          <p>Real guidance, not just responses</p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;