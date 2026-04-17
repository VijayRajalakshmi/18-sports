import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2>18 SPORTS</h2>
          <p>
            Your one-stop destination for premium cricket gear in Peelamedu.
            We provide high-quality bats, balls, and accessories for all levels.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* PRODUCTS / CATEGORIES */}
        <div className="footer-col">
          <h3>Categories</h3>

          <Link to="/products/bats">Cricket Bats</Link>
          <Link to="/products/balls">Balls</Link>
          <Link to="/products/gloves">Gloves</Link>
          <Link to="/products/shoes">Shoes</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📍 Peelamedu, Coimbatore</p>
          <p>📞 +91 xxxxxxx</p>
          <p>📧 mailto18sports@gmail.com</p>
          <p>🕒 Open: 9 AM - 9 PM</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 18 Sports | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;