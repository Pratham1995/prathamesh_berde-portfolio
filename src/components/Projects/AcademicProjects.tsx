import React from "react";
import "../css/Home.css"; // optional if using external CSS

const AcademicProjects = () => {

  const projectsMap = [
  "Automatic Timetable Generation System: Developed a Spring Boot and MySQL application (Java 8) to automatically generate class schedules based on faculty-subject mappings, ensuring no lecture overlaps and proper break management",
  "Android Music Application: Built an Android app that loads and organizes downloaded .mp3 files, with navigation features and exploratory research on MATLAB-based emotion detection for personalized song recommendations.",
  "IETE Event Website: Developed a responsive website using Java, HTML, and CSS for a college IETE event",
  "Facility Management System: Created a Spring Boot and MySQL-based room management service for the Maverick facility. Implemented JUnit testing and Selenium automation as part of a Software Testing course.",
  "Movie Recommendation System: Developed a Python-based recommendation system using a professor-provided dataset to suggest movies based on user preferences.",
  "Two-Player Chess Game: Developed a console-based two-player chess game in C, implementing core game logic including piece movement validation, turn-based gameplay, and rule enforcement.",
  ];

  return (
    <section className="section-section">
      <section className="subsection-heading">
        <h3 className="sub-heading">Academic Projects:</h3>
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

export default AcademicProjects;