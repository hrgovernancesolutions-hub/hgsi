import React from "react";
import "./Footer.css";

function Footer() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>HR Governance Solutions</h2>
          <p>
            Empowering organizations through strategic HR solutions, compliance excellence, and innovative workforce management.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home" onClick={(e) => handleScroll(e, "#home")}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, "#about")}>About</a></li>
            <li><a href="#team" onClick={(e) => handleScroll(e, "#team")}>Team</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:HGSI.HR@workforcejunction.com">HGSI.HR@workforcejunction.com</a></p>
          <p>India Service Center for <a href="https://workforcejunction.com" target="_blank" rel="noreferrer">Workforce Junction</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HR Governance Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
