// src/App.tsx
import React from 'react';
import Header from './Header/HeaderDetails';
import About from './HeaderComponents/About';
import Projects from './HeaderComponents/Projects';
import Skills from './HeaderComponents/Skills';
import Contact from './HeaderComponents/Contact';
import '../components/css/Home.css';


function App() {
  const aboutRef = React.useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const projectRef = React.useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const skillsRef = React.useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const contactRef = React.useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        onAboutClick={() => scrollToSection(aboutRef)}
        onProjectClick={() => scrollToSection(projectRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <About sectionRef={aboutRef} />
      <Projects sectionRef={projectRef} />
      <Skills sectionRef={skillsRef} />
      <Contact sectionRef={contactRef} />
    </>
  );
}

export default App;
