import React, { useState, useEffect } from 'react';
import heroBg from '../../assets/heroimagelates.jpg'; // The fast, small image
import heroBgpng from '../../assets/heroimagelates.png'; // The heavy, high-quality image
import './Hero.css';

function Hero() {
  const titleText = "HR Governance Solutions";
  
  // 1. Set the initial background to the fast JPG
  const [currentBg, setCurrentBg] = useState(heroBg);

  // 2. Load the high-quality PNG in the background
  useEffect(() => {
    const hdImage = new Image();
    hdImage.src = heroBgpng;
    
    // 3. When the PNG finishes downloading, swap the background!
    hdImage.onload = () => {
      setCurrentBg(heroBgpng);
    };
  }, []);

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
    <section className="hero">
      
      <div 
        className="hero-fixed-bg"
        style={{
          // Use the state variable 'currentBg' here
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${currentBg})`,
          // Optional: Add a smooth transition so it doesn't "snap" when it changes
          transition: 'background-image 0.5s ease-in-out'
        }}
      ></div>

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