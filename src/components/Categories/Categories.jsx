import { useRef } from "react";
import "./Categories.css";

// images (same as yours)
import bat from "../../assets/images/bat1.jpeg";
import pad from "../../assets/images/pad1.jpeg";
import glove from "../../assets/images/glove1.jpeg";
import helmet from "../../assets/images/helmet1.jpeg";
import box from "../../assets/images/box1.jpeg";
import body from "../../assets/images/body1.jpeg";
import shoe from "../../assets/images/shoe1.jpeg";

const categories = [
  { name: "Cricket Bat", desc: "Iconic power", image: bat },
  { name: "Batting Pads", desc: "Leg protection", image: pad },
  { name: "Gloves", desc: "Grip control", image: glove },
  { name: "Helmet", desc: "Head safety", image: helmet },
  { name: "Guard", desc: "Body protection", image: box },
  { name: "Body Gear", desc: "Full safety", image: body },
  { name: "Shoes", desc: "Grip & speed", image: shoe },
];

function Categories() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="categories">
      <div className="title-row">
        <h2>Top Categories</h2>

        <div className="arrows">
          <button onClick={() => scroll("left")}>←</button>
          <button onClick={() => scroll("right")}>→</button>
        </div>
      </div>

      <div className="category-slider" ref={scrollRef}>
        {categories.map((item, index) => (
          <div key={index} className="category-card">
            <img src={item.image} alt={item.name} />

            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;