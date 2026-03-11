import React from 'react';
import '../css/InfoCard.css';

interface InfoProjectProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const InfoProjects: React.FC<InfoProjectProps> = ({ icon, title, children }) => (
  <div className="info-card">
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.1em', marginBottom: 10 }}>
      <span className="info-card__icon">{icon}</span>
      <div className="info-card__title">{title}</div>
    </div>
    <div className="info-card__desc">{children}</div>
  </div>
);

export default InfoProjects;
