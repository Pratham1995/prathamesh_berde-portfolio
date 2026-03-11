
import ProjectsSummary from '../Projects/ProjectsSummary';

interface ProjectsProps {
  sectionRef: React.RefObject<HTMLElement>;
}

function Projects({ sectionRef }: ProjectsProps) {
  return (
    <main  ref={sectionRef}>
      <section className="main-section">
        <div className="section-content" style={{ alignItems: 'flex-start' }}>
          <h1 className="main-heading">Story Through Code</h1>
          <ProjectsSummary />
        </div>
      </section>
    </main>
  );
}

export default Projects;
