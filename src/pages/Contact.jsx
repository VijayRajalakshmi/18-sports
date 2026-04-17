import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h1>Contact Us</h1>

      <div className="contact-box">
        <p>📍 Peelamedu, Coimbatore</p>
        <p>📞 +91 xxxxxxxx</p>
        <p>📧 mailto18sports@gmail.com</p>
        <p>🕒 9 AM - 9 PM</p>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          className="whatsapp-btn"
        >
          Chat on WhatsApp
        </a>
      </div>

    </section>
  );
}

export default Contact;