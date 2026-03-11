// src/components/Header.tsx
import React from 'react';
import '../css/Header.css';
import profile from '../../assets/profilepic.jpeg';

interface HeaderProps {
  onAboutClick: () => void;
  onProjectClick: () => void;
  onSkillsClick: () => void;
  onContactClick: () => void;
}

const HeaderDetails: React.FC<HeaderProps> = ({
  onAboutClick,
  onProjectClick,
  onSkillsClick,
  onContactClick
}) => {
  const openImage = () => {
    window.open(profile, '_blank');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="profile-container">
          <img
            src={profile}
            alt="Profile"
            onClick={openImage}
            style={{ cursor: 'pointer' }}
            className="profilepic"
          />
          <span className="logo">Prathamesh Berde</span>
        </div>
        <nav>
          <span className="nav-links" onClick={onAboutClick}>
            About
          </span>
          <span className="nav-links" onClick={onProjectClick}>
            Projects
          </span>
          <span className="nav-links" onClick={onSkillsClick}>
            Skills
          </span>
          <span className="nav-links" onClick={onContactClick}>
            Contact
          </span>
        </nav>
        <a
          href="./src/assets/Prathamesh_Berde_Resume.pdf"
          download="Prathamesh_Berde_Resume.pdf"
        >
          <button className="button">Download Resume</button>
        </a>
      </div>
    </header>
  );
};

export default HeaderDetails;
