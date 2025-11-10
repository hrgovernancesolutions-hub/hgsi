import React, { useEffect } from "react";
import "./App.css";

// Component Imports
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Content from "./components/content/Content";
import Team from "./components/team/Team";
import Hiring from "./components/hiring/Hiring";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    // ✅ Update document metadata dynamically for SEO
    document.title = "HR Governance Solutions | Workforce Junction";

    const description =
      "HR Governance Solutions (Workforce Junction) provides HR, workforce, and compliance solutions that empower organizations to grow efficiently.";
    const keywords =
      "HR Governance Solutions, Workforce Junction, HR Solutions, Workforce Management, Employee Benefits, HR Consulting, HR Software, HR Compliance";

    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name='${name}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
  }, []);

  return (
    <main className="app">
      {/* ✅ Navigation */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section id="home" aria-label="Home Section">
        <Hero />
      </section>

      {/* ✅ Banner Section */}
      <Banner />

      {/* ✅ About Section */}
      <section id="about" aria-label="About HR Governance Solutions">
        <About />
      </section>

      {/* ✅ Vision / Why Us Section */}
      <section id="content" aria-label="Our Vision and Why Choose Us">
        <Content />
      </section>

      {/* ✅ Team Section */}
      <section id="team" aria-label="Our Team">
        <Team />
      </section>

      {/* ✅ Hiring Section */}
      <section id="hiring" aria-label="Career Opportunities">
        <Hiring />
      </section>

      {/* ✅ Footer / Contact Section */}
      <section id="contact" aria-label="Contact HR Governance Solutions">
        <Footer />
      </section>
    </main>
  );
}

export default App;
