import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaPlus } from "react-icons/fa";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* 🔥 FLOATING ICONS */}
      <div className="floating-container">

        {/* ACTION BUTTONS */}
        <div className={`floating-icons ${open ? "show" : ""}`}>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="float-btn whatsapp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="tel:+919999999999"
            className="float-btn call"
          >
            <FaPhoneAlt />
          </a>

          <a
            href="#"
            className="float-btn insta"
          >
            <FaInstagram />
          </a>

        </div>

        {/* MAIN BUTTON */}
        <button
          className="main-float"
          onClick={() => setOpen(!open)}
        >
          <FaPlus />
        </button>

      </div>

    </BrowserRouter>
  );
}

export default App;