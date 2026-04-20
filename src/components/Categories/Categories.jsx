import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

// ✅ IMPORT IMAGES
import bat from "/Dsc_Bats/dsc-rs-exclusive-kw-crickt-bat-1_1_1 (1).webp";
import pads from "/Leg_pads/KLRLite.webp";
import gloves from "/batting_gloves/SG_1.webp";
import helmet from "/Helmets/Shrey-Elite-Pro-Cricket-Helmet-Steel11.webp";
import guard from "/Abdominal/Abdo-Guard-1.webp";
import body from "/Abdominal/Abdo-Guard-1.webp";
import shoes from "/Shoes/Shoes-1.png";

const categories = [
  {
    name: "Cricket Bat",
    slug: "bats",
    desc: "Power & precision",
    image: bat,
  },
  {
    name: "Batting Pads",
    slug: "pads",
    desc: "Leg protection",
    image: pads,
  },
  {
    name: "Gloves",
    slug: "gloves",
    desc: "Grip control",
    image: gloves,
  },
  {
    name: "Helmet",
    slug: "helmet",
    desc: "Head safety",
    image: helmet,
  },
  {
    name: "Guard",
    slug: "accessories",
    desc: "Body protection",
    image: guard,
  },
  {
    name: "Body Gear",
    slug: "accessories",
    desc: "Full safety",
    image: body,
  },
  {
    name: "Shoes",
    slug: "shoes",
    desc: "Speed & grip",
    image: shoes,
  },
];

function Categories() {
  const scrollRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      scrollRef.current?.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="categories">
      <div className="title-row">
        <div>
          <h2>Shop by Category</h2>
          <p>Find the perfect gear for your game</p>
        </div>

        <div className="arrows">
          <button onClick={() => scroll("left")}>‹</button>
          <button onClick={() => scroll("right")}>›</button>
        </div>
      </div>

      <div
        className="category-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="category-slider" ref={scrollRef}>
          {categories.map((item, index) => (
            <Link
              to={`/products/${item.slug}`}
              key={index}
              className="category-card"
            >
              <img src={item.image} alt={item.name} />

              <div className="overlay">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span>Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;