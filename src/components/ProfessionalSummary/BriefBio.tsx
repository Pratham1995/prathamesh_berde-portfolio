import React from "react";
import "../css/Home.css"; // optional if using external CSS

const BriefBio = () => {
  return (
    <section className="section-section">
      <section className="subsection-heading">
        <h3 className="sub-heading">Brief Bio:</h3>
      </section>
      <section className="sub-section">
         <p className="section-details">
              Senior Software Engineer with 6+ years of experience designing and building scalable Java/Spring Boot microservices and React-based enterprise applications. I specialize in REST API development, Kafka-driven event processing, and performance optimization within high-volume financial systems. My work focuses on building resilient, maintainable, and high-performing systems that directly improve operational efficiency and reliability.I bring strong expertise in backend architecture, distributed systems, and modern frontend integration, while actively expanding my AWS and cloud-native capabilities to design fully scalable, production-grade solutions.
        </p>
      </section>
       
    </section>
  );
};

export default BriefBio;