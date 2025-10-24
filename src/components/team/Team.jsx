import React, { useEffect, useRef } from 'react';
import './Team.css';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import CEO from '../../assets/Matthew.jpg';
import HeadBackofficeServices from '../../assets/johnsey-johnson.jpg';
import LeadProductManagement from '../../assets/Dillip.jpg';
import LeadImplementationandOnboarding from '../../assets/Shlipa.jpg';
import HeadProductManagement from '../../assets/Denna.jpg';
import HeadServiceOperations from '../../assets/Nitya.jpg';

function Team() {
  const teamRef = useRef(null);

  const teamMembers = [
    { name: 'Mathew Augustine', role: 'CEO', tag: 'The Challenge Champion', img: CEO },
    { name: 'Johnsey Joseph', role: 'Head, Backoffice Services', tag: 'The Relentless Ringleader', img: HeadBackofficeServices },
    { name: 'Dilip Kumar', role: 'Lead, Product Management', tag: 'The Tenacious Translator', img: LeadProductManagement },
    { name: 'Shilpa Paritala', role: 'Lead, Implementation and Onboarding', tag: 'The Deployment Detailer', img: LeadImplementationandOnboarding },
    { name: 'Denna Mathew', role: 'Head, Product Management', tag: 'The Attentive Architect', img: HeadProductManagement },
    { name: 'Nitya Mathew', role: 'Head, Service Operations', tag: 'The Process Princess', img: HeadServiceOperations }
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
          Our talented professionals are the backbone of HGSI - bringing innovation, integrity, 
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
              <span>{member.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
