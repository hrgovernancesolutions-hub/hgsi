import React, { useRef } from 'react';
import './Hero.css';

function Hero() {
  const titleText = "HR Governance Solutions";
  const heroRef = useRef(null);

  // Tracks the mouse and updates CSS variables for the interactive grid
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Pass coordinates to CSS
    heroRef.current.style.setProperty('--x', `${x}px`);
    heroRef.current.style.setProperty('--y', `${y}px`);
  };

  // Helper function to create the jelly letters
  const renderBouncyLetters = (text) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return <span key={index} className="space char">&nbsp;</span>;
      }
      return (
        <span
          key={index}
          className="char"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <section 
      className="hero" 
      ref={heroRef} 
      onMouseMove={handleMouseMove}
    >
      
      {/* Light Image Background with Interactive Grid */}
      <div className="hero-image-bg">
        <div className="hero-grid-base"></div>
        <div className="hero-grid-interactive"></div>
      </div>

      <div className="hero-content">
        <h1>{renderBouncyLetters(titleText)}</h1>
        
        <p>
          Proudly serving as the <span className="highlight">India Service Center</span> for{' '}
          <a
            href="https://workforcejunction.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="wj-link"
          >
            Workforce Junction
          </a>{' '}
          - delivering innovation, compliance, and excellence.
        </p>

        <div className="btn-wrapper">
          <a
            href="https://workforcejunction.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Explore Workforce Junction
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;