import "./Banner.css";
import { GiCricket } from "react-icons/gi";

function Banner() {
  return (
    <section className="banner">

      {/* 🔥 FLOATING BALLS */}
      <div className="particles">
        <GiCricket className="ball b1" />
        <GiCricket className="ball b2" />
        <GiCricket className="ball b3" />
      </div>

      {/* CONTENT */}
      <div className="banner-content">
        <h2>ONLY THE BEST FOR YOU</h2>

        <p>
          Premium cricket gear crafted for champions.
        </p>

        <div className="banner-actions">
          <button className="primary-btn">Shop Now</button>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="secondary-btn"
          >
            Enquire Now
          </a>
        </div>
      </div>

    </section>
  );
}

export default Banner;