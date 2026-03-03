import "../../components/css/Home.css";
import SkillsTable from "../Skills/SkillsTable";

function AboutMe() {
  return (
    <>
      <main className="main-content">
        <section className="main-section">
          <div className="section-content">
          <h1 className="main-heading">Taking Up the Skills</h1>
            <SkillsTable/>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMe;