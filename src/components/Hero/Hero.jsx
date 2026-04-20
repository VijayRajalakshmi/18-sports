import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        {/* Trust Badge */}
        <div className="hero-badge fade-up">
          ⭐ Trusted by 1000+ Players
        </div>

        {/* Heading */}
        <h1 className="fade-up delay-1">
          Elevate Your <br />
          <span className="gradient-text">Game Performance</span>
        </h1>

        {/* Description */}
        <p className="fade-up delay-2">
          Premium cricket gear built for power, precision,
          and durability. Designed for serious players.
        </p>

        {/* CTA */}
        <div className="hero-buttons fade-up delay-3">
          <button className="btn-primary">
            Shop Collection →
          </button>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Talk to Expert
          </a>
        </div>

        {/* Mini proof */}
        <div className="hero-proof fade-up delay-4">
          ✔ Fast Delivery &nbsp;&nbsp; ✔ Quality Assured &nbsp;&nbsp; ✔ Best Prices
        </div>

      </div>

    </section>
  );
}

export default Hero;