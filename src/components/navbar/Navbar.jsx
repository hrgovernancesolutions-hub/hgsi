import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.JPG";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo" onClick={() => goToSection("#home")}>
          <img src={Logo} alt="HGSI Logo" className="logo-img" />
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>

        <div className="navbar-right">
          <ul>
            <li><button onClick={() => goToSection("#home")}>Home</button></li>
            <li><button onClick={() => goToSection("#about")}>About</button></li>
            <li><button onClick={() => goToSection("#team")}>Team</button></li>

            <li><Link to="/gallery">Gallery</Link></li>

            <li><button onClick={() => goToSection("#contact")}>Contact</button></li>
          </ul>
        </div>

        <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          <ul>
            <li><button onClick={() => goToSection("#home")}>Home</button></li>
            <li><button onClick={() => goToSection("#about")}>About</button></li>
            <li><button onClick={() => goToSection("#team")}>Team</button></li>

            <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>

            <li><button onClick={() => goToSection("#contact")}>Contact</button></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
