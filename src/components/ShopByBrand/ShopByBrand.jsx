import "./ShopByBrand.css";

// IMPORT YOUR IMAGES (use any 4 for now)
import bat from "../../assets/images/bat1.jpeg";
import glove from "../../assets/images/glove1.jpeg";
import pad from "../../assets/images/pad1.jpeg";
import shoe from "../../assets/images/shoe1.jpeg";

const brands = [
  { name: "MRF", image: bat },
  { name: "SG", image: glove },
  { name: "SS", image: pad },
  { name: "NIKE", image: shoe },
];

function ShopByBrand() {
  return (
    <section className="brands">
      <h2>Shop by Brand</h2>

      <div className="brand-grid">
        {brands.map((item, index) => (
          <div key={index} className="brand-card">
            <img src={item.image} alt={item.name} />

            <div className="brand-overlay">
              <h3>{item.name}</h3>
              <button>View All</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopByBrand;