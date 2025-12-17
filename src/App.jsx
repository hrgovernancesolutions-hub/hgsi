import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Content from "./components/content/Content";
import Team from "./components/team/Team";
import Hiring from "./components/hiring/Hiring";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";

function App() {
  useEffect(() => {
    document.title = "HR Governance Solutions | Workforce Junction";

    const description =
      "HR Governance Solutions (Workforce Junction) provides HR, workforce, and compliance solutions that empower organizations to grow efficiently.";

    const keywords =
      "HR Governance Solutions, Workforce Junction, HR Solutions, Workforce Management, HR Compliance";

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
    <Router>
      <main className="app">
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Navbar />

                <section id="home">
                  <Hero />
                </section>

                <Banner />

                <section id="about">
                  <About />
                </section>

                <section id="content">
                  <Content />
                </section>

                <section id="team">
                  <Team />
                </section>

                <section id="hiring">
                  <Hiring />
                </section>

                <section id="contact">
                  <Footer />
                </section>
              </>
            }
          />

          <Route
            path="/gallery"
            element={
              <>
                <Navbar />
                <Gallery />
                <Footer />
              </>
            }
          />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
