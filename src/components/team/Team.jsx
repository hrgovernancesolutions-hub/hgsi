import React, { useEffect, useRef } from 'react';
import './Team.css';

// Import Images
import HeadBackofficeServices from '../../assets/TeamMembers/johnseyfinal.png';
import LeadProductManagement from '../../assets/TeamMembers/dillipfinal.png';
import LeadImplementationandOnboarding from '../../assets/TeamMembers/shilpafinal.jpg';
import MunirajuImg from '../../assets/TeamMembers/munirajufinal.png';
import RajkumarImg from '../../assets/TeamMembers/rajkumarfinal.png';
import VeluImg from '../../assets/TeamMembers/velufinal.jpg';
import SumaImg from '../../assets/TeamMembers/sumafinal.png';

// Helper for Letter Animation
const AnimatedHeading = ({ text }) => {
  return (
    <h2>
      {text.split("").map((char, index) => (
        <span key={index} className="team-hover-char">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

function Team() {
  const teamRef = useRef(null);

  const teamMembers = [
    { name: 'Johnsey Joseph', role: 'Managing Director', img: HeadBackofficeServices },
    { name: 'Dilip Kumar', role: 'Head of Operations', img: LeadProductManagement },
    { name: 'Shilpa Paritala', role: 'Operations Manager', img: LeadImplementationandOnboarding },
    { name: 'Suma Hegde', role: 'Human Resources', img: SumaImg },
    { name: 'Muniraju GJ', role: 'Senior Team Lead', img: MunirajuImg },
    { name: 'Raj Kumar C R', role: 'Team Lead', img: RajkumarImg },
    { name: 'Gnanavelu R', role: 'Assistant Team Lead', img: VeluImg },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = teamRef.current.querySelectorAll('.team-card, .team-heading');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="team" ref={teamRef}>
      <div className="team-heading">
        <AnimatedHeading text="Meet Our Team" />
        <p>The innovators and leaders driving excellence at HGSI.</p>
      </div>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div 
            className="team-card" 
            key={index}
            style={{ transitionDelay: `${index * 0.1}s` }} // Staggered entry
          >
            <div className="team-img">
              <img src={member.img} alt={member.name} />
              <div className="img-glow"></div>
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;