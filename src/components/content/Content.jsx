import React, { useRef } from "react";
import "./Content.css";

const AnimatedHeading = ({ text }) => {
  return (
    <h2 className="hgsi-massive-heading">
      {text.split("").map((char, index) => (
        <span key={index} className="hgsi-hover-char">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

function Content() {
  const sectionRef = useRef(null);

  // Tracks the mouse to power the interactive "X-Ray" grid flashlight
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionRef.current.style.setProperty("--x", `${x}px`);
    sectionRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <section 
      className="hgsi-tech-section" 
      ref={sectionRef} 
      onMouseMove={handleMouseMove}
    >
      
      {/* The Global Interactive Flashlight Grid */}
      <div className="hgsi-global-spotlight"></div>

      {/* 🚀 THE EDGE-TO-EDGE 4-QUADRANT GRID */}
      <div className="hgsi-quadrant-grid">
        
        {/* Animated Crosshair "Lasers" that divide the screen */}
        <div className="hgsi-laser-horizontal"></div>
        <div className="hgsi-laser-vertical"></div>

        {/* ================= ROW 1 ================= */}
        
        {/* [1] Top Left: Vision */}
        <div className="hgsi-quad-cell">
          <div className="hgsi-quad-content">
            <span className="hgsi-quad-number">01</span>
            <AnimatedHeading text="Our Vision" />
            <p>
              At <strong>HR Governance Solutions India (HGSI)</strong>, our vision is to transform how organizations manage and deliver employee benefits. 
              We provide comprehensive, compliant, and technology-enabled solutions that drive efficiency.
            </p>
            <p>
              As the <strong>India Service Center for Workforce Junction</strong>, we combine global best practices with local operational expertise to deliver seamless, high-quality services.
            </p>
          </div>
        </div>

        {/* [2] Top Right: Operational Excellence */}
        <div className="hgsi-quad-cell hgsi-glass-quad">
          <div className="hgsi-quad-content">
            <span className="hgsi-quad-number">02</span>
            <h4 className="hgsi-sub-heading">Operational Excellence</h4>
            <p>
              We strive to set the industry benchmark for accuracy and speed. By integrating automated workflows with human oversight, we ensure that every payroll cycle is executed with precision.
            </p>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        
        {/* [1] Bottom Left: Why Choose Us */}
        <div className="hgsi-quad-cell">
          <div className="hgsi-quad-content">
            <span className="hgsi-quad-number">03</span>
            <AnimatedHeading text="Why Choose HGSI" />
            <p>
              We are more than a service provider—we are a strategic partner. 
              By leveraging the Workforce Junction platform, we empower organizations to deliver enterprise-grade benefits with agility.
            </p>
            <p>
              Our team combines expertise and a relationship-first approach to ensure every client receives tailored, scalable solutions.
            </p>
          </div>
        </div>

        {/* [2] Bottom Right: Strategic Impact */}
        <div className="hgsi-quad-cell hgsi-glass-quad">
          <div className="hgsi-quad-content">
            <span className="hgsi-quad-number">04</span>
            <h4 className="hgsi-sub-heading">Strategic Impact</h4>
            <p>
              Our commitment goes beyond daily tasks. We analyze workforce data to provide actionable insights. With HGSI, you gain a partner dedicated to <span className="hgsi-highlight">Integrity Always</span>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Content;