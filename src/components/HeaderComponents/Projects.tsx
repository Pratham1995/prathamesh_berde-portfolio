import "../../components/css/Home.css";
import SeniorSoftwareProjects from "../Projects/SeniorSoftwareProjects";
import SoftwareEngineerProjects from "../Projects/SoftwareEngineerProjects";
import AcademicProjects from "../Projects/AcademicProjects";

function AboutMe() {
  return (
    <>
      <main className="main-content">
        <section className="main-section">
          <div className="section-content">
          <h1 className="main-heading">Stories Through Code</h1>
            <h2 className="section-heading">Professional Projects</h2>
            <SeniorSoftwareProjects/>
            <SoftwareEngineerProjects/>
            <AcademicProjects/>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMe;