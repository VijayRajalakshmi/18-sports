import "./Header.css";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Cricket Bats", path: "/products/bats" },
  { name: "Balls", path: "/products/balls" },
  { name: "Protective Gear", path: "/products/guards" },
  { name: "Gloves", path: "/products/gloves" },
  { name: "Pads", path: "/products/pads" },
  { name: "Helmets", path: "/products/helmet" },
  { name: "Shoes", path: "/products/shoes" },
  { name: "Accessories", path: "/products/accessories" },
  { name: "Kit Bags", path: "/products/bags" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      {/* TOP BAR */}
      <div className="topbar">
        <span>📞 +91 9488346669</span>
        <span>📍 Peelamedu, Coimbatore</span>
      </div>

      {/* MAIN */}
      <div className="main-header">
        <h1 className="logo">
          <Link to="/" className="logo">
            18 SPORTS
          </Link>
        </h1>

        <div className="icons">
          <FaSearch />
          <FaUser />
          <FaShoppingCart />
          <FaBars className="menu-icon" onClick={() => setOpen(!open)} />
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className="nav">
        {navLinks.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.name}
          </Link>
        ))}
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        {navLinks.map((item, index) => (
          <a key={index} href={item.path}>
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
