import "./ShopByBrand.css";
import { Link } from "react-router-dom";

// 👉 Use clean brand-related images (not random products)
import mrf from "/brands/MRF.png";
import sg from "/brands/SG.png";
import ss from "/brands/SS.png";
import nike from "/brands/Nike.png";

const brands = [
  { name: "MRF", slug: "mrf", image: mrf },
  { name: "SG", slug: "sg", image: sg },
  { name: "SS", slug: "ss", image: ss },
  { name: "Nike", slug: "nike", image: nike },
];

function ShopByBrand() {
  return (
    <section className="brands">

      <div className="brand-header">
        <h2>Shop by Brand</h2>
        <p>Explore gear from top cricket brands</p>
      </div>

      <div className="brand-grid">
        {brands.map((brand, index) => (
          <Link
            to={`/brand/${brand.slug}`}
            key={index}
            className="brand-card"
          >
            <img src={brand.image} alt={brand.name} />

            <div className="overlay">
              <h3>{brand.name}</h3>
              <span>Explore →</span>
            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}

export default ShopByBrand;