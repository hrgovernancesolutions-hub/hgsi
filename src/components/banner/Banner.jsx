import React from 'react';
import { FaHandshake, FaBriefcase, FaLaptopCode, FaUserShield, FaBalanceScale } from 'react-icons/fa';
import './Banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <p><span>We Deliver </span>Custom Employee Benefit Solutions</p>

        <div className="banner-content-sec">
          <div className="banner-icon">
            <FaHandshake className="icon" />
            <p>Relationships First</p>
          </div>
          <div className="banner-icon">
            <FaBriefcase className="icon" />
            <p>20+ Years Experience</p>
          </div>
          <div className="banner-icon">
            <FaLaptopCode className="icon" />
            <p>Enterprise Grade Technology</p>
          </div>
          <div className="banner-icon">
            <FaUserShield className="icon" />
            <p>Confident Humility</p>
          </div>
          <div className="banner-icon">
            <FaBalanceScale className="icon" />
            <p>Integrity Always</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
