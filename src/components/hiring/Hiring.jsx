import React, { useRef, useEffect, useState } from "react";
import "./Hiring.css";

const AnimatedHeading = ({ text }) => {
  return (
    <h2 className="hiring-massive-heading">
      {text.split("").map((char, index) => (
        <span key={index} className="hiring-hover-char">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

function Hiring() {
  const hiringRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (hiringRef.current) observer.observe(hiringRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hiring-section-root" ref={hiringRef}>
      
      {/* --- GLITCH-FREE 3D ROAD --- */}
      {/* <div className="hiring-road-bg">
        <div className="hiring-moving-road"></div>
      </div> */}

      <div className={`hiring-main-container ${visible ? "hiring-visible" : ""}`}>
        
        <AnimatedHeading text="Join Our Team" />

        <p className="hiring-intro-text">
          At <strong>HR Governance Solutions</strong>, we're dedicated to empowering organizations
          through innovation, compliance, and people-first HR practices.
        </p>

        {/* Isolated Status Card */}
        <div className={`hiring-status-card ${visible ? "hiring-visible" : ""}`}>
          <h3 className="hiring-status-title">We're Not Hiring Currently</h3>
          <p className="hiring-status-description">
            Thank you for your interest in joining our team. We're not accepting applications at the moment.
            Please stay connected for future opportunities with our{" "}
            <a
              href="https://workforcejunction.com/"
              target="_blank"
              rel="noreferrer"
              className="hiring-external-link"
            >
              India Service Center for Workforce Junction
            </a>.
          </p>

          <p className="hiring-contact-info">
            For career-related inquiries, you can reach us at:<br />
            <a href="mailto:HGSI.HR@workforcejunction.com" className="hiring-mail-anchor">
              HGSI.HR@workforcejunction.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hiring;