import React from "react";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>HR Governance Solutions</h2>
          <p>
            Empowering organizations through strategic HR solutions,
            compliance excellence, and innovative workforce management.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {/* ALWAYS force navigation to HOME */}
            <li><HashLink smooth to="/#home">Home</HashLink></li>
            <li><HashLink smooth to="/#about">About</HashLink></li>
            <li><HashLink smooth to="/#team">Team</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:HGSI.HR@workforcejunction.com">
              HGSI.HR@workforcejunction.com
            </a>
          </p>
          <p>
            India Service Center for{" "}
            <a
              href="https://workforcejunction.com"
              target="_blank"
              rel="noreferrer"
            >
              Workforce Junction
            </a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} HR Governance Solutions.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
