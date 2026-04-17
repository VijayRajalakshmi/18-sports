import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <h1>About 18 Sports</h1>

        <p className="highlight">
          Your trusted cricket store in Peelamedu, Coimbatore.
        </p>

        <p>
          18 Sports is a dedicated cricket equipment store providing high-quality gear 
          for players of all levels. Whether you are a beginner or a professional, 
          we ensure you get the right equipment to improve your performance.
        </p>

        {/* STORY */}
        <div className="about-section">
          <h2>🏏 Our Story</h2>
          <p>
            Founded with a passion for cricket, 18 Sports was created to make premium 
            cricket gear accessible to everyone. We understand the needs of players 
            and carefully select products that deliver performance and durability.
          </p>
        </div>

        {/* GRID FEATURES */}
        <div className="about-grid">

          <div className="about-card">
            <h3>🏏 Our Mission</h3>
            <p>
              To provide high-quality cricket products at affordable prices 
              for every player.
            </p>
          </div>

          <div className="about-card">
            <h3>🚚 Fast Delivery</h3>
            <p>
              Quick and reliable delivery across Coimbatore and nearby locations.
            </p>
          </div>

          <div className="about-card">
            <h3>💬 Customer Support</h3>
            <p>
              Instant support through WhatsApp and phone for all queries.
            </p>
          </div>

          <div className="about-card">
            <h3>⭐ Quality Products</h3>
            <p>
              We offer only trusted brands with high durability and performance.
            </p>
          </div>

          <div className="about-card">
            <h3>🔒 100% Genuine</h3>
            <p>
              All products are original and verified to ensure customer trust.
            </p>
          </div>

          <div className="about-card">
            <h3>📍 Local Presence</h3>
            <p>
              Located in Peelamedu, Coimbatore — serving local and online customers.
            </p>
          </div>

        </div>

        {/* EXTRA SEO SECTION */}
        <div className="about-section">
          <h2>Why Choose 18 Sports?</h2>
          <p>
            If you're searching for a reliable cricket shop in Peelamedu or 
            Coimbatore, 18 Sports is your go-to destination. We combine quality, 
            affordability, and customer satisfaction to deliver the best experience.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;