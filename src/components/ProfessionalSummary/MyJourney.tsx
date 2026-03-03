import React from "react";
import "../css/Home.css"; // optional if using external CSS

const MyJourney = () => {
  return (
    <section className="section-section">
      <section className="subsection-heading">
        <h3 className="sub-heading">My Journey:</h3>
      </section>
      <section className="sub-section">
         <p className="section-details">
              My journey into software engineering began in 2013 when I started my Bachelor's degree in Information Technology, graduating in 2017. Driven by a desire to deepen my technical foundation, I prepared for the GRE and TOEFL while simultaneously researching graduate programs. 
              I was admitted to the University of Texas at Arlington, where I pursued a Master’s in Computer Science beginning in January 2018 and graduated in December 2019.During my master’s program, I balanced academics with leadership responsibilities—starting as a barista and later becoming a Store Supervisor at my university’s Starbucks. This experience strengthened my leadership, communication, and operational management skills alongside my technical growth.
              After graduation, I focused on technical interview preparation and professional applications, ultimately joining HCL America in March 2020 as a Software Engineer. Through consistent performance, technical ownership, and delivery excellence, I progressed to the role of Senior Software Engineer.
        </p>
      </section>
       
    </section>
  );
};

export default MyJourney;