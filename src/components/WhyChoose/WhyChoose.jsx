import "./WhyChoose.css";
import { FaTruck, FaRupeeSign, FaShieldAlt, FaHeadset, FaStar, FaCheckCircle } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why">

      <div className="why-header">
        <h2>Why Choose 18 Sports</h2>
        <p>We deliver quality, performance, and trust for every player</p>
      </div>

      <div className="why-grid">

        <div className="why-card">
          <FaTruck className="icon" />
          <h3>Fast Delivery</h3>
          <p>Quick and reliable shipping across all locations</p>
        </div>

        <div className="why-card">
          <FaRupeeSign className="icon" />
          <h3>Best Pricing</h3>
          <p>Affordable rates with unbeatable value</p>
        </div>

        <div className="why-card">
          <FaShieldAlt className="icon" />
          <h3>Premium Quality</h3>
          <p>Top brands and long-lasting durability</p>
        </div>

        <div className="why-card">
          <FaHeadset className="icon" />
          <h3>24/7 Support</h3>
          <p>Instant help via WhatsApp & calls</p>
        </div>

        <div className="why-card">
          <FaStar className="icon" />
          <h3>Trusted by Players</h3>
          <p>Loved by beginners and professionals</p>
        </div>

        <div className="why-card">
          <FaCheckCircle className="icon" />
          <h3>100% Genuine</h3>
          <p>Only original and verified products</p>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;