import "../../components/css/Home.css";
import BriefBio from "../ProfessionalSummary/BriefBio";
import KeyAccomplishments from "../ProfessionalSummary/KeyAccomplishments";
import ProfessionalFocus from "../ProfessionalSummary/ProfessionalFocus";
import YearOfExperience from "../ProfessionalSummary/YearOfExperience";
import MyJourney from "../ProfessionalSummary/MyJourney";
import CareerGoals from "../ProfessionalSummary/CareerGoals";
import PersonalInterest from "../ProfessionalSummary/PersonalInterests";

function AboutMe() {
  return (
    <>
      <main className="main-content">
        <section className="main-section">
          <div className="section-content">
          <h1 className="main-heading">A Journey in Technology & Growth</h1>
            <h2 className="section-heading">Professional Summary</h2>
            <BriefBio/>
            <ProfessionalFocus/>
            <YearOfExperience/>
            <KeyAccomplishments/>
            <MyJourney/>
            <CareerGoals/>
            <PersonalInterest/>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMe;