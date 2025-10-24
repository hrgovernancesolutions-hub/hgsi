import React, { useRef, useEffect, useState } from "react";
import "./Content.css";

function Content() {
  const visionRef = useRef(null);
  const whyusRef = useRef(null);
  const [visionVisible, setVisionVisible] = useState(false);
  const [whyusVisible, setWhyusVisible] = useState(false);

  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.2 };

    const visionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisionVisible(true);
    }, observerOptions);

    const whyusObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setWhyusVisible(true);
    }, observerOptions);

    if (visionRef.current) visionObserver.observe(visionRef.current);
    if (whyusRef.current) whyusObserver.observe(whyusRef.current);

    return () => {
      if (visionRef.current) visionObserver.unobserve(visionRef.current);
      if (whyusRef.current) whyusObserver.unobserve(whyusRef.current);
    };
  }, []);

  return (
    <section className="content">
      <div className="content-container">
        <div
          className={`content-vision ${visionVisible ? "visible" : ""}`}
          ref={visionRef}
          onMouseMove={(e) => handleMouseMove(e, visionRef)}
        >
          <div className="overlay-vision">
            <div className={`overlay-vision-c ${visionVisible ? "visible" : ""}`}>
              <h2>Our Vision</h2>
              <p>
                At <strong>HR Governance Solutions India (HGSI)</strong>, our vision is to transform how organizations manage and deliver employee benefits. 
                We provide comprehensive, compliant, and technology-enabled solutions that drive efficiency, engagement, and measurable outcomes.
              </p>
              <p>
                As the <strong>India Service Center for Workforce Junction</strong>, we combine global best practices with local operational expertise to deliver seamless, high-quality services that empower our clients to optimize their workforce and reduce administrative risk.
              </p>
              <p>
                We believe in creating long-term partnerships based on trust, innovation, and a relentless commitment to excellence.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`content-whyus ${whyusVisible ? "visible" : ""}`}
          ref={whyusRef}
          onMouseMove={(e) => handleMouseMove(e, whyusRef)}
        >
          <div className="overlay-whyus">
            <div className={`overlay-whyus-c ${whyusVisible ? "visible" : ""}`}>
              <h2>Why Choose HGSI</h2>
              <p>
                We are more than a service provider - we are a strategic partner for HR and benefits operations. 
                By leveraging the Workforce Junction platform, we empower organizations to deliver enterprise-grade benefits with the agility and personalization that small and mid-size companies need.
              </p>
              <p>
                Our team combines expertise, advanced technology, and a relationship-first approach to ensure every client receives tailored, efficient, and scalable solutions. 
                With HGSI, organizations can minimize administrative burden, optimize workforce performance, and focus on what truly matters: their people.
              </p>
              <p>
                Our core values guide everything we do: <strong>Relationships First</strong>, <strong>Confident Humility</strong>, and <strong>Integrity Always</strong>. 
                These principles ensure we deliver consistent, high-quality results and build trust with our clients and partners.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Content;
