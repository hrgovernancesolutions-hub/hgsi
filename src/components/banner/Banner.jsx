import React, { useEffect, useRef, useState } from 'react';
import { FaHandshake, FaBriefcase, FaLaptopCode, FaUserShield, FaBalanceScale } from 'react-icons/fa';
import './Banner.css';

function Banner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the banner is visible
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // We add the 'visible' class dynamically here
    <section ref={bannerRef} className={`banner ${isVisible ? 'visible' : ''}`}>
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