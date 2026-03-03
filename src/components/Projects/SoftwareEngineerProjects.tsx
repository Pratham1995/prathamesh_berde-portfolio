import React from "react";
import "../css/Home.css"; // optional if using external CSS

const ProfessionalProjects = () => {

  const projectsMap = [
  "Notification of Change (NOC) File Processing: Developed a Spring Boot service to ingest NOC based return files, improving data accuracy for financial transactions.",
  "Acknowledgment File Reconciliation Service: Built a Visual Cron job scheduler to trigger ingestion endpoints dynamically, ensuring comprehensive reconciliation of acknowledgment files.",
  "Federal Holiday Notifications: Enhanced existing Java services to incorporate real-time holiday alerts, improving operational awareness.",
  "Built a Spring Boot service integrating with GI-Act to fetch real-time customer account data, replacing a legacy system dependent on weekly stale updates. Hosted on Cloud Foundry with MySQL, achieving 100% test coverage to ensure stability and reliability",
  "Reduced data masking latency by 83% by implementing a selective masking algorithm that preserved security and data integrity.",
  "Improved development efficiency by integrating New Relic and JMeter across 12 microservices, contributing to a 20% overall performance improvement.",
  "Led a team-wide initiative to enforce test coverage thresholds in code reviews, increasing coverage by 20% and reducing SonarQube issues."
  ];

  return (
    <section className="section-section">
      <section className="subsection-heading">
        <h3 className="sub-heading">Work as Software Engineer:</h3>
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

export default ProfessionalProjects;