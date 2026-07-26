import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Contact() {

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.from_name ||
      !formData.from_email ||
      !formData.subject ||
      !formData.message
    ) {

      alert("Please fill in all fields.");

      return;

    }

    setLoading(true);

    try {

      await emailjs.send(

        import.meta.env.VITE_EMAILJS_SERVICE_ID,

        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        formData,

        import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      );

      alert("✅ Message Sent Successfully!");

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });

    }

    catch (error) {

      console.error(error);

      alert("❌ Failed to send message.");

    }

    finally {

      setLoading(false);

    }

  };
  return (
  <section id="contact" className="contact section">

    <div className="container">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="section-title">
          CONTACT <span>ME</span>
        </h2>

        <p className="contact-subtitle">
          Have a project in mind? Let's build something amazing together.
        </p>

      </motion.div>

      <div className="contact-container">

        {/* Left */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h3>Get In Touch</h3>

          <p>
            I'm available for freelance work,
            internships and full-time opportunities.
            Feel free to contact me anytime.
          </p>

          <div className="contact-item">
            <Mail size={22} />
            <span>vinithvini2108@gmail.com</span>
          </div>

          <div className="contact-item">
            <Phone size={22} />
            <span>+91 9626226862</span>
          </div>

          <div className="contact-item">
            <MapPin size={22} />
            <span>Hosur, Tamil Nadu, India</span>
          </div>

          <div className="social-icons">

            <a
              href="https://github.com/Vinithvini150"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/vinith-kumar-m-b33157401"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>

      </div>

    </div>

  </section>
);

}

export default Contact;