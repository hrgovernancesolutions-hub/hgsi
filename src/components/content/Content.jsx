import React, { useRef } from 'react';
import './Content.css';

function Content() {
  const visionRef = useRef(null);
  const whyusRef = useRef(null);

  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--x', `${x}px`);
    ref.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <section className="content">
      <div className="content-container">
        <div
          className="content-vision"
          ref={visionRef}
          onMouseMove={(e) => handleMouseMove(e, visionRef)}
        >
          <div className="overlay-vision">
            <h2>Our Vision</h2>
            <p>
              To redefine how organizations deliver employee benefits by creating solutions that 
              enhance engagement, compliance, and value - across borders and industries. 
              We aim to be the most trusted partner for HR and benefits transformation, 
              driven by innovation, accuracy, and care.
            </p>
            <p>
              Through Workforce Junction India, our dedicated service hub, we bring together 
              global best practices and local expertise to ensure seamless, efficient, 
              and high-quality operations that support our clients growth and success.
            </p>
          </div>
        </div>

        <div
          className="content-whyus"
          ref={whyusRef}
          onMouseMove={(e) => handleMouseMove(e, whyusRef)}
        >
          <div className="overlay-whyus">
            <h2>Why Choose Us</h2>
            <p>
              We are more than a service provider - we're your strategic partner in building 
              efficient, compliant, and employee-focused benefits ecosystems. With a deep 
              understanding of the US benefits landscape and a robust delivery foundation 
              through Workforce Junction India, we combine global insight with operational 
              excellence. Our approach blends innovation, technology, and human expertise 
              to simplify complex processes, drive measurable outcomes, and create lasting 
              value for both employers and employees. We take pride in delivering 
              scalable, data-driven, and quality-assured solutions that empower HR leaders 
              to focus on what truly matters - their people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
