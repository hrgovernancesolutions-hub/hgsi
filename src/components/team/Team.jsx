import React, { useEffect, useRef } from 'react';
import './Team.css';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

import HeadBackofficeServices from '../../assets/TeamMembers/johnseyfinal.png';
import LeadProductManagement from '../../assets/TeamMembers/dillipfinal.png';
import LeadImplementationandOnboarding from '../../assets/TeamMembers/shilpafinal.jpg';
import MunirajuImg from '../../assets/TeamMembers/dillipfinal.png';
import RajkumarImg from '../../assets/TeamMembers/rajkumarfinal.png';
import VeluImg from '../../assets/TeamMembers/velufinal.jpg';
import SumaImg from '../../assets/TeamMembers/sumafinal.png';

function Team() {
  const teamRef = useRef(null);

  const teamMembers = [
    { name: 'Johnsey Joseph', role: 'Manging Director', img: HeadBackofficeServices },
    { name: 'Dilip Kumar', role: 'Head of Operations', img: LeadProductManagement },
    { name: 'Shilpa Paritala', role: 'Operations Manager', img: LeadImplementationandOnboarding },
    { name: 'Suma Hegde', role: 'Human resources', img: SumaImg },
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
      { threshold: 0.2 }
    );

    const cards = teamRef.current.querySelectorAll('.team-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="team" ref={teamRef}>
      <div className="team-heading">
        <h2>Meet Our Team</h2>
        <p>
          Our talented professionals are the backbone of HGSI – bringing innovation, integrity,
          and excellence to every project we deliver.
        </p>
      </div>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-img">
              <img src={member.img} alt={member.name} />
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
