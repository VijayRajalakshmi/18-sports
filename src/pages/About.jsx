import "./About.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function About() {
  return (
    <section className="about">

      {/* HERO */}
      <motion.div
        className="about-hero"
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeUp} custom={1}>
          About 18 Sports
        </motion.h1>

        <motion.p className="highlight" variants={fadeUp} custom={2}>
          Your trusted cricket store in Peelamedu, Coimbatore.
        </motion.p>
      </motion.div>

      <div className="about-container">

        {/* INTRO */}
        <motion.p
          className="intro"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          18 Sports provides high-quality cricket gear for players of all levels.
          Whether beginner or professional, we ensure performance and durability.
        </motion.p>

        {/* STORY */}
        <motion.div
          className="about-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} custom={1}>🏏 Our Story</motion.h2>
          <motion.p variants={fadeUp} custom={2}>
            Built from passion for cricket, we bring premium gear that enhances
            player performance with durability and trust.
          </motion.p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="about-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            ["🏏 Our Mission", "High-quality gear at affordable prices."],
            ["🚚 Fast Delivery", "Quick delivery across Coimbatore."],
            ["💬 Support", "Instant WhatsApp support."],
            ["⭐ Quality", "Only trusted brands."],
            ["🔒 Genuine", "100% original products."],
            ["📍 Local Store", "Peelamedu, Coimbatore."],
          ].map((item, i) => (
            <motion.div
              className="about-card"
              key={i}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* WHY */}
        <motion.div
          className="about-section"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} custom={1}>
            Why Choose 18 Sports?
          </motion.h2>
          <motion.p variants={fadeUp} custom={2}>
            Trusted by local players in Coimbatore for quality, pricing, and service.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;