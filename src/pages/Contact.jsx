import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify(form),
      });

      alert("✅ Message sent successfully!");
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      alert("❌ Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section className="contact">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact 18 Sports</h1>
        <p>We’re here to help you choose the best cricket gear</p>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">

          <h2>Get in Touch</h2>

          <div className="info-item">📍 Peelamedu, Coimbatore</div>
          <div className="info-item">📞 +91 XXXXXXXX</div>
          <div className="info-item">📧 18sports@gmail.com</div>
          <div className="info-item">🕒 9 AM – 9 PM</div>

          {/* ACTION BUTTONS */}
          <div className="quick-actions">
            <a href="tel:+91XXXXXXXX" className="call-btn">
              Call Now
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              WhatsApp
            </a>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <h2>Send Enquiry</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>

        </form>

      </div>

      {/* MAP */}
      <div className="map">
        <iframe
          src="https://maps.google.com/maps?q=peelamedu%20coimbatore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="map"
        ></iframe>
      </div>

    </section>
  );
}

export default Contact;