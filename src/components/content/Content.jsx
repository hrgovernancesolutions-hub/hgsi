import React, { useRef, useEffect, useState } from "react";
import "./Content.css";

// Helper Component for the letter animation
const AnimatedHeading = ({ text }) => {
  return (
    <h2>
      {text.split("").map((char, index) => (
        <span key={index} className="hgsi-hover-char">
          {/* If char is a space, render a non-breaking space, else render the char */}
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

function Content() {
  const visionRef = useRef(null);
  const whyusRef = useRef(null);

  const [visionVisible, setVisionVisible] = useState(false);
  const [whyusVisible, setWhyusVisible] = useState(false);

  const handleMouseMove = (e, ref) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.25, rootMargin: "0px" };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("hgsi-content-vision")) {
            setVisionVisible(true);
          } else if (entry.target.classList.contains("hgsi-content-whyus")) {
            setWhyusVisible(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (visionRef.current) observer.observe(visionRef.current);
    if (whyusRef.current) observer.observe(whyusRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hgsi-content-section">
      <div className="hgsi-content-container">
        
        {/* --- Section 1: Our Vision --- */}
        <div
          className={`hgsi-content-block hgsi-content-vision ${visionVisible ? "in-view" : ""}`}
          ref={visionRef}
          onMouseMove={(e) => handleMouseMove(e, visionRef)}
        >
          <div className="hgsi-spotlight-overlay"></div>
          
          <div className="hgsi-flex-wrapper">
            <div className="hgsi-glass-card">
              {/* ✅ UPDATED: Use AnimatedHeading here */}
              <AnimatedHeading text="Our Vision" />
              
              <div className="hgsi-text-content">
                <p style={{ transitionDelay: '0.2s' }}>
                  At <strong>HR Governance Solutions India (HGSI)</strong>, our vision is to transform how organizations manage and deliver employee benefits. 
                  We provide comprehensive, compliant, and technology enabled solutions that drive efficiency.
                </p>
                <p style={{ transitionDelay: '0.3s' }}>
                  As the <strong>India Service Center for Workforce Junction</strong>, we combine global best practices with local operational expertise to deliver seamless, high quality services.
                </p>
              </div>
            </div>

            <div className="hgsi-extra-content side-panel" style={{ transitionDelay: '0.4s' }}>
              <h4>Operational Excellence</h4>
              <p>
                We strive to set the industry benchmark for accuracy and speed. By integrating automated workflows with human oversight, we ensure that every payroll cycle is executed with precision.
              </p>
            </div>
          </div>
        </div>

        {/* --- Section 2: Why Choose HGSI --- */}
        <div
          className={`hgsi-content-block hgsi-content-whyus ${whyusVisible ? "in-view" : ""}`}
          ref={whyusRef}
          onMouseMove={(e) => handleMouseMove(e, whyusRef)}
        >
          <div className="hgsi-spotlight-overlay"></div>

          <div className="hgsi-flex-wrapper reverse">
            <div className="hgsi-extra-content side-panel" style={{ transitionDelay: '0.4s' }}>
              <h4>Strategic Impact</h4>
              <p>
                Our commitment goes beyond daily tasks. We analyze workforce data to provide actionable insights. With HGSI, you gain a partner dedicated to <span className="hgsi-highlight">Integrity Always</span>.
              </p>
            </div>

            <div className="hgsi-glass-card">
              {/* ✅ UPDATED: Use AnimatedHeading here */}
              <AnimatedHeading text="Why Choose HGSI" />
              
              <div className="hgsi-text-content">
                <p style={{ transitionDelay: '0.2s' }}>
                  We are more than a service provider-we are a strategic partner. 
                  By leveraging the Workforce Junction platform, we empower organizations to deliver enterprise-grade benefits with agility.
                </p>
                <p style={{ transitionDelay: '0.3s' }}>
                  Our team combines expertise and a relationship-first approach to ensure every client receives tailored, scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Content;