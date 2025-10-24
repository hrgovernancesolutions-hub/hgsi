import React, { useEffect, useRef } from "react";
import "./About.css";
import aboutImg from "../../assets/hero2.png";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = aboutRef.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <section className="about" ref={aboutRef}>
        <div className="about-container">
          <div className="about-left">
            <h2>About Us</h2>
            <p>
              HR Governance Solutions India (HGSI) is a dedicated service center
              for Workforce Junction, providing expert support for employee
              benefits administration, HR compliance, and workforce management
              solutions. Our mission is to empower organizations with seamless,
              efficient, and compliant HR processes while delivering a
              high-touch, relationship-first service experience. As the India
              Service Center for Workforce Junction, HGSI enables global clients
              to leverage cutting-edge technology platforms with local
              operational expertise, minimizing administrative risk and
              maximizing workforce optimization.
            </p>
          </div>

          <div className="about-right">
            <div className="image-frame">
              <div
                className="image-slice slice1"
                style={{ backgroundImage: `url(${aboutImg})` }}
              ></div>
              <div
                className="image-slice slice2"
                style={{ backgroundImage: `url(${aboutImg})` }}
              ></div>
              <div
                className="image-slice slice3"
                style={{ backgroundImage: `url(${aboutImg})` }}
              ></div>
              <div
                className="image-slice slice4"
                style={{ backgroundImage: `url(${aboutImg})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
