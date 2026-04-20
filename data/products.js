// IMPORT IMAGES
import bat1 from "../assets/images/bat1.jpeg";
import glove1 from "../assets/images/glove1.webp";
import ball1 from "../assets/images/ball1.jpeg";
import pad1 from "../assets/images/pad1.webp";
import helmet1 from "../assets/images/helmet1.jpeg";
import box1 from "../assets/images/box1.jpeg";
import body1 from "../assets/images/body1.jpeg";
import shoe1 from "../assets/images/shoe1.jpeg";

const products = [
  // 🏏 BATS
  {
    id: 1,
    name: "SS Ton Cricket Bat",
    price: 2499,
    image: bat1,
    category: "bats",
    brand: "SS",
  },
  {
    id: 2,
    name: "MRF Classic Bat",
    price: 3999,
    image: bat1,
    category: "bats",
    brand: "MRF",
  },

  // 🧤 GLOVES
  {
    id: 3,
    name: "Premium Gloves",
    price: 799,
    image: glove1,
    category: "gloves",
    brand: "SG",
  },
  {
    id: 4,
    name: "SS Batting Gloves",
    price: 999,
    image: glove1,
    category: "gloves",
    brand: "SS",
  },

  // 🏏 BALLS
  {
    id: 5,
    name: "Leather Ball",
    price: 299,
    image: ball1,
    category: "balls",
    brand: "SS",
  },
  {
    id: 6,
    name: "Tournament Ball",
    price: 499,
    image: ball1,
    category: "balls",
    brand: "SG",
  },

  // 🦵 PADS
  {
    id: 7,
    name: "Batting Pads",
    price: 1499,
    image: pad1,
    category: "pads",
    brand: "MRF",
  },
  {
    id: 8,
    name: "Lightweight Pads",
    price: 1799,
    image: pad1,
    category: "pads",
    brand: "SS",
  },

  // ⛑ HELMETS
  {
    id: 9,
    name: "Cricket Helmet",
    price: 1299,
    image: helmet1,
    category: "helmet",
    brand: "SG",
  },
  {
    id: 10,
    name: "Pro Helmet",
    price: 1999,
    image: helmet1,
    category: "helmet",
    brand: "SS",
  },

  // 🛡 ACCESSORIES (FIXED CATEGORY)
  {
    id: 11,
    name: "Abdominal Guard",
    price: 499,
    image: box1,
    category: "accessories",
    brand: "SG",
  },
  {
    id: 12,
    name: "Body Guard Kit",
    price: 999,
    image: body1,
    category: "accessories",
    brand: "SS",
  },

  // 👟 SHOES
  {
    id: 13,
    name: "Cricket Shoes",
    price: 2199,
    image: shoe1,
    category: "shoes",
    brand: "Nike",
  },
  {
    id: 14,
    name: "Pro Grip Shoes",
    price: 2499,
    image: shoe1,
    category: "shoes",
    brand: "Adidas",
  },
];

export default products;