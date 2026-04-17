import "./Header.css";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Cricket Bats", slug: "bats" },
  { name: "Balls", slug: "balls" },
  { name: "Protective Gear", slug: "guards" },
  { name: "Gloves", slug: "gloves" },
  { name: "Pads", slug: "pads" },
  { name: "Helmets", slug: "helmet" },
  { name: "Shoes", slug: "shoes" },
  { name: "Accessories", slug: "accessories" },
  { name: "Kit Bags", slug: "bags" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="header">

      {/* TOP BAR */}
      <div className="topbar">
        <p>📞 +91 xxxxxxxxxx</p>
        <p>🚚 Free Delivery on Orders Above ₹999</p>
      </div>

      {/* MAIN HEADER */}
      <div className="main-header">

        {/* LOGO */}
        <Link to="/" className="logo">
          18<span>SPORTS</span>
        </Link>

        {/* SEARCH */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* ICONS */}
        <div className="icons">
          <FaUser />

          <div className="cart">
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </div>

          <FaBars
            className="menu-icon"
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="nav">
        {categories.map((item, index) => (
          <Link key={index} to={`/products/${item.slug}`}>
            {item.name}
          </Link>
        ))}
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        {categories.map((item, index) => (
          <Link
            key={index}
            to={`/products/${item.slug}`}
            onClick={() => setOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>

    </header>
  );
}

export default Header;