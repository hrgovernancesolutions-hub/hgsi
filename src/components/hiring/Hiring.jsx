import React, { useRef, useEffect, useState } from "react";
import "./Hiring.css";

function Hiring() {
  const hiringRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (hiringRef.current) observer.observe(hiringRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hiring" ref={hiringRef}>
      <div className={`hiring-container ${visible ? "visible" : ""}`}>
        <h2>
          <span className="highlight">Join Our Team</span>
        </h2>

        <p className="intro-text">
          At <strong>HR Governance Solutions</strong>, we're dedicated to empowering organizations
          through innovation, compliance, and people-first HR practices.
        </p>

        <div className={`status-card ${visible ? "visible" : ""}`}>
          <h3>We're Not Hiring Currently</h3>
          <p>
            Thank you for your interest in joining our team. We're not accepting applications at the moment.
            Please stay connected for future opportunities with our{" "}
            <a
              href="https://workforcejunction.com/"
              target="_blank"
              rel="noreferrer"
              className="wj-link"
            >
              India Service Center for Workforce Junction
            </a>.
          </p>

          <p className="contact-text">
            For career-related inquiries, you can reach us at:<br />
            <a href="mailto:hr@hrgovernancesolutions.com" className="mail-link">
              hr@hrgovernancesolutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hiring;
