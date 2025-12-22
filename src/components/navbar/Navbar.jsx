import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/Logo.JPG";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-container">

        <div className="navbar-logo">
          <HashLink smooth to="/#home">
            <img src={Logo} alt="HGSI Logo" className="logo-img" />
          </HashLink>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>

        <div className="navbar-right">
          <ul>
            <li><HashLink smooth to="/#home">Home</HashLink></li>
            <li><HashLink smooth to="/#about">About</HashLink></li>
            <li><HashLink smooth to="/#team">Team</HashLink></li>

            <li><Link to="/gallery">Gallery</Link></li>

            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          </ul>
        </div>

        <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>

          <ul>
            <li>
              <HashLink smooth to="/#home" onClick={() => setMenuOpen(false)}>
                Home
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#about" onClick={() => setMenuOpen(false)}>
                About
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#team" onClick={() => setMenuOpen(false)}>
                Team
              </HashLink>
            </li>

            <li>
              <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
            </li>

            <li>
              <HashLink smooth to="/#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
