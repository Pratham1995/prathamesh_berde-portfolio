import React from "react";
import "../css/SkillsTable.css";

const SkillsTable: React.FC = () => {
  return (
    <div className="table-container">
      <table className="skills-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Operating Systems</td>
            <td>Linux, Windows, iOS</td>
          </tr>
          <tr>
            <td>Languages & Web Technologies</td>
            <td>Java 8, Android, HTML5, CSS, JavaScript, SQL</td>
          </tr>
          <tr>
            <td>Testing</td>
            <td>JUnit, JaCoCo, Selenium, PIT, Mockito, PowerMockito</td>
          </tr>
          <tr>
            <td>Database Management</td>
            <td>MySQL, SQL Server</td>
          </tr>
          <tr>
            <td>Cloud Environment</td>
            <td>PCF (Pivotal Cloud Foundry)</td>
          </tr>
          <tr>
            <td>General & Build Tools</td>
            <td>
              Eclipse, Anaconda, IntelliJ, Android Studio, MVC,
              Spring Tool Suite, Spring Boot, SonarQube, Jenkins
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;