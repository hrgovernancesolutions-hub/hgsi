import React, { useEffect, useRef } from "react";
import "./About.css";
import aboutImg from "../../assets/img8.jpg";

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
    <section className="about-section" id="about" aria-label="About HR Governance Solutions India">
      <section className="about" ref={aboutRef}>
        <div className="about-container">
          {/* ✅ Left Section */}
          <div className="about-left">
            <h2>About Us</h2>
            <p>
              <strong>HR Governance Solutions India (HGSI)</strong> is a
              specialized <strong>India Service Center</strong> supporting{" "}
              <strong>Workforce Junction (USA)</strong>. We deliver expert
              support in <strong>employee benefits administration</strong>,{" "}
              <strong>HR compliance</strong>, <strong>payroll operations</strong>,
              and <strong>workforce management solutions</strong> for Workforce
              Junction's clients across the globe.
            </p>

            <p>
              Our mission is to empower organizations with seamless, efficient,
              and compliant HR processes while delivering a high-touch,
              relationship-first service experience. By combining{" "}
              <strong>cutting-edge HR technology</strong> with{" "}
              <strong>local operational expertise</strong>, HGSI enables global
              enterprises to minimize administrative risks and optimize
              workforce efficiency.
            </p>

            <p>
              As an integral part of Workforce Junction's global delivery model,
              HGSI acts as the trusted operations hub in India - ensuring
              quality, compliance, and scalability in every HR and workforce
              engagement we support.
            </p>
          </div>

          {/* ✅ Right Section */}
          <div className="about-right">
            <div
              className="image-frame"
              role="img"
              aria-label="HGSI India Service Center"
            >
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
