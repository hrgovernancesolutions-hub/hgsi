import React from 'react';
import { FaHandshake, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import './banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <p><span>We Deliver </span>Custom Employee Benefit Solutions</p>

        <div className="banner-content-sec">
          <div className="banner-icon">
            <FaHandshake className="icon" />
            <p>Relationships-First Integrity</p>
          </div>
          <div className="banner-icon">
            <FaBriefcase className="icon" />
            <p>20+ Years Experience</p>
          </div>
          <div className="banner-icon">
            <FaLaptopCode className="icon" />
            <p>Enterprise Grade Technology</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
