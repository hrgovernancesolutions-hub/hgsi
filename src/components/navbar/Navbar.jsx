import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/HGSI-logo.JPG";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* <img src={logo} alt="HGSI Logo" className="navbar-logo" /> */}
        <div className="navbar-logo">
            <h1>HGSI</h1>
        </div>
        {/* Menu Icon for mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>

        {/* Desktop Links */}
        <div className="navbar-right">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Mobile Side Popup */}
        <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
