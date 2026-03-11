import React from 'react';
import '../css/Home.css';

interface InfoProjectsProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const InfoProjects: React.FC<InfoProjectsProps> = ({ icon, title, children }) => (
    <div style={{ alignItems: 'flex-start' }}>
    <div className="section-heading" style={{ display: 'flex', alignItems: 'center', gap: '0.5em', fontSize: '2rem', marginBottom: 16 }}> {icon} {title}</div>
      <section className="sub-section">
        <p className='section-details'>
            {children}
        </p>
      </section>
    </div>
  
);

export default InfoProjects;
