  import "./Header.css";
  import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
  import { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import logo from "/logo.png";

  const categories = [
    { name: "Bats", slug: "bats" },
    { name: "Balls", slug: "balls" },
    { name: "Gloves", slug: "gloves" },
    { name: "Pads", slug: "pads" },
    { name: "Helmets", slug: "helmet" },
    { name: "Shoes", slug: "shoes" },
    { name: "Accessories", slug: "accessories" },
    { name: "Kit Bags", slug: "bags" },
  ];

  function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
      if (search.trim() !== "") {
        navigate(`/products?search=${search}`);
        setSearch("");
      }
    };

    return (
      <header className="header">

        <div className="header-container">

          {/* LEFT: LOGO */}
          <Link to="/" className="logo">
            <img src={logo} alt="18 Sports Logo" />
          </Link>

          {/* CENTER: NAV */}
          <nav className="nav">
            {categories.map((item, index) => (
              <Link key={index} to={`/products/${item.slug}`}>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT: ACTIONS */}
          <div className="header-actions">

            {/* SEARCH */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Search cricket gear..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button onClick={handleSearch}>
                <FaSearch />
              </button>
            </div>

            {/* USER */}
            <div className="icon user-icon">
              <FaUser />
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div
              className="icon menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

          </div>

        </div>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          {categories.map((item, index) => (
            <Link
              key={index}
              to={`/products/${item.slug}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

      </header>
    );
  }

  export default Header;