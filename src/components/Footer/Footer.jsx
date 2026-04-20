import "./Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2>18 Sports</h2>
        <p>Premium Cricket Gear Store</p>

        {/* 🔥 SOCIAL ICONS */}
        <div className="social-icons">

          <a href="#" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>

        </div>

        <p className="copyright">
          © 2026 18 Sports. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;