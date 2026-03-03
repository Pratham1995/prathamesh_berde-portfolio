// src/App.tsx
import React, { useRef } from "react";
import Header from "./Header/HeaderDetails";
import About from "./HeaderComponents/About";
import Projects from "./HeaderComponents/Projects";
import Skills from "./HeaderComponents/Skills"
import "../components/css/Home.css"

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const skillsRef= useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <Header
        onAboutClick={() => scrollToSection(aboutRef)}
        onProjectClick={() => scrollToSection(projectRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
      />
      <section className="section-section" ref={aboutRef}>
        <About/>
      </section>
      <section className="section-section" ref={projectRef}>
        <Projects />
      </section>
       <section className="section-section" ref={skillsRef}>
        <Skills />
      </section>
    </div>
  );
}

export default App;