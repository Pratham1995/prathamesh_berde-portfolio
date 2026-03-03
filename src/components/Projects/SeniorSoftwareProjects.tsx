import React from "react";
import "../css/Home.css"; // optional if using external CSS

const SeniorSoftwareProjects = () => {

  const projectsMap = [
  "Automated Return File Generation:Developed a Java-based service to automate return file generation, reducing QA and UAT manual effort by 80%.",
  "Transmission Dashboard UI (React.js + Java Spring Boot): Created a real-time dashboard for monitoring payment file transmission, improving operational efficiency by 85%.",
  "Single Transaction Reversal Service: Led a team to design a new Spring Boot microservice for handling single transaction reversals, ensuring seamless integration via Kafka messaging.",
  "Database Optimization: Replaced direct database calls with RESTful APIs, enhancing performance and mitigating traffic-related issues",
  "Production Issue Resolution: Designed and implemented four REST APIs that reduced manual intervention by 75%, addressing partial ingestion issues.",
  "Automated Dishonored Transactions Processing: Developed a Java-based service for processing dishonored transactions, reducing manual processing time by 60%.",
  "Led the evaluation and migration from VisualCron to Stonebranch, enabling multi-user access, reducing costs, and implementing custom features like S3 integration and remote file operations.",
  "Developed a React-based UI to display exception data with disposition capabilities for business users; integrated with a Java backend to fetch records and implemented download functionality via buttons for Excel and PDF reports.",
  "Migrated critical payment workflows from Visual Cron to Stonebranch UAC, improving system access reliability and reducing operational costs by eliminating the need for Visual Cron license renewal.",
  "Developed a React-based service for managing rules in wire transactions, improving efficiency and rule automation",
  ];

  return (
    <section className="section-section">
      <section className="subsection-heading">
        <h3 className="sub-heading">Work as Senior Software Engineer:</h3>
      </section>
       <section className="sub-section">
      <ul className="list">
        {projectsMap.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </section>
       
    </section>
  );
};

export default SeniorSoftwareProjects;