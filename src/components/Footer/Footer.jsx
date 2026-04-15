import "./Footer.css";

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
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">Contact</a>
        </div>

        {/* LOCATION + CONTACT (SEO BOOST) */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>📍 Peelamedu, Coimbatore</p>
          <p>📞 +91 9488346669</p>
          <p>📧 mailto24sports@gmail.com</p>
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