import React, { useEffect, useRef, useState } from 'react';
import './Team.css';

// Import Images
import HeadBackofficeServices from '../../assets/TeamMembers/johnseyfinal.png';
import LeadProductManagement from '../../assets/TeamMembers/dillipfinal.png';
import LeadImplementationandOnboarding from '../../assets/TeamMembers/shilpafinal.jpg';
import MunirajuImg from '../../assets/TeamMembers/munirajufinal.png';
import RajkumarImg from '../../assets/TeamMembers/rajkumarfinal.png';
import VeluImg from '../../assets/TeamMembers/velufinal.jpg';
import SumaImg from '../../assets/TeamMembers/sumafinal.png';

// ✅ Updated Heading Component exactly as requested
const AnimatedHeading = ({ text }) => {
  return (
    <h2 className="hgsi-massive-heading">
      {text.split("").map((char, index) => (
        <span key={index} className="hgsi-hover-char" style={{ animationDelay: `${index * 0.05}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

function Team() {
  const teamRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Auto-expand the first member by default

  const teamMembers = [
    { name: 'Johnsey Joseph', role: 'Managing Director', img: HeadBackofficeServices, id: '01' },
    { name: 'Dilip Kumar', role: 'Head of Operations', img: LeadProductManagement, id: '02' },
    { name: 'Shilpa Paritala', role: 'Operations Manager', img: LeadImplementationandOnboarding, id: '03' },
    { name: 'Suma Hegde', role: 'Human Resources', img: SumaImg, id: '04' },
    { name: 'Muniraju GJ', role: 'Senior Team Lead', img: MunirajuImg, id: '05' },
    { name: 'Raj Kumar C R', role: 'Team Lead', img: RajkumarImg, id: '06' },
    { name: 'Gnanavelu R', role: 'Assistant Team Lead', img: VeluImg, id: '07' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (teamRef.current) observer.observe(teamRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="team-accordion-section" ref={teamRef}>
      
      <div className="ta-header">
        <div className="ta-badge">HGSI LEADERSHIP</div>
        <AnimatedHeading text="Meet The Core" />
        <p className="ta-subtitle">The innovators and operational leaders driving excellence, compliance, and global scale.</p>
      </div>

      {/* THE KINETIC ACCORDION */}
      <div className="ta-container">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className={`ta-panel ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            {/* Background Image */}
            <img src={member.img} alt={member.name} className="ta-panel-img" />
            
            {/* Navy Overlay (darkens non-active panels) */}
            <div className="ta-panel-overlay"></div>

            {/* DEFAULT VIEW: Vertical Text (Visible when compressed) */}
            <div className="ta-vertical-title">
              <span>{member.name}</span>
            </div>

            {/* EXPANDED VIEW: Sliding Tech Info (Visible when active) */}
            <div className="ta-expanded-content">
              <div className="ta-hologram-grid"></div> {/* Tech grid effect inside the card */}
              <div className="ta-id-badge">{member.id}</div>
              <div className="ta-info-box">
                <div className="ta-tech-line"></div>
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Team;