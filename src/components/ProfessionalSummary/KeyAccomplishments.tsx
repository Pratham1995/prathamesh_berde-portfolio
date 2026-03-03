import React from "react";
import "../css/Home.css"; // optional if using external CSS

const accomplishments = [
  "Designed and implemented microservices that reduced API response time by 40% in high-traffic financial applications.",
  "Developed Kafka-based event-driven systems to handle millions of transactions reliably per day.",
  "Led performance optimization initiatives improving system uptime and reducing latency.",
  "Mentored junior engineers and improved team productivity through code reviews and best practice guidance.",
];

const KeyAccomplishments = () => {
  return (
    <section className="section-section">
      <section className="subsection-heading">
        <h3 className="sub-heading">Key Accomplishments:</h3>
      </section>
      <section className="sub-section">
      <ul className="list">
        {accomplishments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </section>
    </section>
  );
};

export default KeyAccomplishments;