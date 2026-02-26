import React from 'react';
import heroBg from '../../assets/heroimagelates.png';
import './Hero.css';

function Hero() {
  const titleText = "HR Governance Solutions";

  // Helper function to create the jelly letters
  const renderBouncyLetters = (text) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        // Render a space with a specific class so it has width
        return <span key={index} className="space char">&nbsp;</span>;
      }
      return (
        <span
          key={index}
          className="char"
          // Stagger the animation delay for the wave effect
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
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${heroBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Parallax effect
      }}
    >
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