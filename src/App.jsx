import React from "react";
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
  return (
    <section className="app">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <Banner />
      <section id="about">
        <About />
      </section>
      <Content />
      <section id="team">
        <Team />
      </section>
      <Hiring />
      <section id="contact">
        <Footer />
      </section>
    </section>
  );
}

export default App;
