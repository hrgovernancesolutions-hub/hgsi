import React, { useEffect, useRef } from "react";
import "./About.css";
import aboutImg from "../../assets/img8.jpg";

const AnimatedHeading = ({ text }) => {
  return (
    <h2 className="hgsi-massive-heading blur-text delay-1">
      {text.split("").map((char, index) => (
        <span key={index} className="hgsi-hover-char">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

function About() {
  const aboutRef = useRef(null);
  const sectionRef = useRef(null); 
  const pillarsRef = useRef(null); // ✅ NEW REF FOR THE PILLARS SECTION

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionRef.current.style.setProperty("--x", `${x}px`);
    sectionRef.current.style.setProperty("--y", `${y}px`);
  };

  useEffect(() => {
    // Observer for both sections!
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (pillarsRef.current) observer.observe(pillarsRef.current); // ✅ OBSERVE NEW SECTION

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= EXISTING SHARD SECTION ================= */}
      <section className="about-shard-section" id="about" ref={aboutRef}>
        <div className="shard-image-layer">
          <div className="shard-image-overlay"></div>
          <img src={aboutImg} alt="HGSI India Service Center" />
        </div>

        <div 
          className="shard-content-layer"
          ref={sectionRef} 
          onMouseMove={handleMouseMove} 
        >
          <div className="about-spotlight-overlay"></div>
          <div className="shard-text-inner">
            <AnimatedHeading text="About Us" />
            <p className="blur-text delay-2">
              <strong>HR Governance Solutions India (HGSI)</strong> is a
              specialized <strong>India Service Center</strong> supporting{" "}
              <strong>Workforce Junction (USA)</strong>. We deliver expert
              support in <strong>employee benefits administration</strong>,{" "}
              <strong>HR compliance</strong>, <strong>payroll operations</strong>,
              and <strong>workforce management solutions</strong> for Workforce
              Junction's clients across the globe.
            </p>
            <p className="blur-text delay-3">
              Our mission is to empower organizations with seamless, efficient,
              and compliant HR processes while delivering a high-touch,
              relationship-first service experience. By combining{" "}
              <span className="shard-highlight">cutting-edge HR technology</span> with{" "}
              <span className="shard-highlight">local operational expertise</span>, HGSI enables global
              enterprises to minimize administrative risks and optimize
              workforce efficiency.
            </p>
            <p className="blur-text delay-4">
              As an integral part of Workforce Junction's global delivery model,
              HGSI acts as the trusted operations hub in India - ensuring
              quality, compliance, and scalability in every HR and workforce
              engagement we support.
            </p>
          </div>
        </div>
      </section>

      {/* ================= NEW SECTION: CONTINUOUS ANIMATED PILLARS ================= */}
      <section className="about-pillars-section" ref={pillarsRef}>
        
        {/* Infinite Moving Background Mesh */}
        <div className="pillars-moving-bg"></div>

        <div className="pillars-container">
          
          <div className="pillars-header">
            <h2 className="scroll-up-text">The HGSI Advantage</h2>
            <p className="scroll-up-text delay-1">
              Building the future of global employee benefits through our core operational pillars.
            </p>
          </div>

          <div className="pillars-grid">
            
            {/* Card 1 */}
            <div className="pillar-card float-1 scroll-up-card delay-2">
              <div className="pillar-glow"></div>
              <h3>01</h3>
              <h4>Global Scale</h4>
              <p>Seamlessly extending US-based workforce operations with our dedicated India-based talent pool, ensuring 24/7 productivity.</p>
            </div>

            {/* Card 2 */}
            <div className="pillar-card float-2 scroll-up-card delay-3">
              <div className="pillar-glow"></div>
              <h3>02</h3>
              <h4>Ironclad Compliance</h4>
              <p>Navigating complex HR regulations and benefit administration with 100% accuracy and strict data privacy standards.</p>
            </div>

            {/* Card 3 */}
            <div className="pillar-card float-3 scroll-up-card delay-4">
              <div className="pillar-glow"></div>
              <h3>03</h3>
              <h4>Tech-Driven</h4>
              <p>Leveraging enterprise-grade technology and automation to eliminate manual errors and streamline payroll cycles.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;