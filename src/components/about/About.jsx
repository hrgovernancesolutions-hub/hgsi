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
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.1 } // 30% visible before triggering
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
            Workforce Junction is a boutique technology partner serving benefit
            advisors and their employer clients. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. At saepe eveniet totam doloremque,
            aliquam cum? Vero officiis at numquam sunt voluptatum, maiores
            doloribus corrupti nisi nobis consequuntur, repellendus debitis
            vitae.
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
