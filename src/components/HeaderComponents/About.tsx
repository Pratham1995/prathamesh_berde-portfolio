import BriefBio from '../ProfessionalSummary/BriefBio';

interface AboutProps {
  sectionRef: React.RefObject<HTMLElement>;
}

function About({ sectionRef }: AboutProps) {
  return (
    <main  ref={sectionRef}>
      <section className="main-section">
        <div className="section-content" style={{ alignItems: 'flex-start' }}>
          <h1 className="main-heading">A Journey in Technology & Growth</h1>
          <BriefBio />
        </div>
      </section>
    </main>
  );
}

export default About;
