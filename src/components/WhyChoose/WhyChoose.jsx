import "./WhyChoose.css";
import { FaTruck, FaRupeeSign, FaShieldAlt, FaHeadset } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why">

      {/* LEFT CONTENT */}
      <div className="why-left">
        <h2>
          Why <span>Players Trust</span> 18 Sports
        </h2>

        <p>
          From beginners to professionals — we provide everything you need 
          to perform at your best with quality gear and reliable service.
        </p>

        <div className="stats">
          <div>
            <h3>500+</h3>
            <p>Products</p>
          </div>
          <div>
            <h3>1000+</h3>
            <p>Happy Players</p>
          </div>
          <div>
            <h3>4.8★</h3>
            <p>Ratings</p>
          </div>
        </div>
      </div>

      {/* RIGHT CARDS */}
      <div className="why-right">

        <div className="feature-card">
          <FaTruck />
          <div>
            <h4>Fast Delivery</h4>
            <p>Quick dispatch & safe shipping</p>
          </div>
        </div>

        <div className="feature-card">
          <FaRupeeSign />
          <div>
            <h4>Best Pricing</h4>
            <p>Competitive & fair pricing</p>
          </div>
        </div>

        <div className="feature-card">
          <FaShieldAlt />
          <div>
            <h4>Premium Quality</h4>
            <p>Top brands & durability</p>
          </div>
        </div>

        <div className="feature-card">
          <FaHeadset />
          <div>
            <h4>24/7 Support</h4>
            <p>Always here to help you</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;