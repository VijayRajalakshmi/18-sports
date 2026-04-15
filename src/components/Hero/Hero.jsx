import "./Hero.css";
import heroImg from "../../assets/Hero.jpeg";

function Hero() {
  return (
    <section className="hero">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1>
          ALL CRICKET <br /> ACCESSORIES <br /> IN ONE PLACE
        </h1>

        <p>Premium Cricket Gear & Accessories</p>

        <div className="buttons">
          <button className="shop-btn">Shop Now</button>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="whatsapp-cta"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img src={heroImg} alt="cricket" />
      </div>
    </section>
  );
}

export default Hero;