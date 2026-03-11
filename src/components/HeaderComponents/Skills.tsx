import SkillsTable from '../Skills/SkillsTable';

interface SkillsProps {
  sectionRef: React.RefObject<HTMLElement>;
}

function Skills({ sectionRef }: SkillsProps) {
  return (
    <main ref={sectionRef}>
      <section className="main-section">
        <div className="section-content" style={{ alignItems: 'flex-start' }}>
          <h1 className="main-heading">My Technical Toolbox</h1>
          <div className="sub-section">
            <SkillsTable />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
