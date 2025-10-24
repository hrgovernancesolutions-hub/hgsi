import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/HGSI-logo.JPG";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <h1>HGSI</h1>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>
        <div className="navbar-right">
          <ul>
            <li><a href="#home" onClick={(e) => handleScroll(e, "#home")}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, "#about")}>About</a></li>
            <li><a href="#team" onClick={(e) => handleScroll(e, "#team")}>Team</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</a></li>
          </ul>
        </div>
        <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          <ul>
            <li><a href="#home" onClick={(e) => handleScroll(e, "#home")}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, "#about")}>About</a></li>
            <li><a href="#team" onClick={(e) => handleScroll(e, "#team")}>Team</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
