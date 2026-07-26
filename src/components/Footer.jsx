import { ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>
              VINITH <span>KUMAR</span>
            </h2>

            <p>
              Full Stack Web Developer passionate about building modern,
              responsive and AI-powered web applications.
            </p>

          </div>

          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>

          </div>

          <div className="footer-contact">

            <h3>Contact</h3>

            <p>📧 vinithvini2108@gmail.com</p>

            <p>📞 +91 9626226862</p>

            <p>📍 Hosur, Tamil Nadu</p>

            <div className="footer-social">

              <a
                href="https://github.com/Vinithvini150"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/vinith-kumar-m-b33157401"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Vinith Kumar. All Rights Reserved.
          </p>

          <a href="#home" className="scroll-top">
            <ChevronUp size={22} />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;