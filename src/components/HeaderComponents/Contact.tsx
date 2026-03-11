import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { type ContactInfo } from '../../types';
import '../css/Home.css';

// Add a class for contact links
const contactLinkClass = 'contact-link';

const contact: ContactInfo = {
  email: 'berdeprathamesh95@gmail.com',
  linkedin: 'https://www.linkedin.com/in/prathamesh-berde-pberde/',
  github: 'https://github.com/Pratham1995',
  phone: '+1 (682) 365-1560', // Optional: Add your phone number if you want to include it
};

interface ContactProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => (
  <main ref={sectionRef}>
    <section className="main-section" >
      <div className="section-content" style={{ alignItems: 'flex-start' }}>
        <h1 className="main-heading">Contact</h1>
        <div className="sub-section">
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', color: '#fff' }}>
            {contact.email && (
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                <MdEmail size={22} style={{ color: '#4fd1c5' }} />
                <strong>EmailId:</strong> <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>{contact.email}</a>
              </li>
            )}
            {contact.phone && (
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                <MdPhone size={22} style={{ color: '#4fd1c5' }} />
                <strong>Phone:</strong> <a href={`tel:${contact.phone}`} className={contactLinkClass}>{contact.phone}</a>
              </li>
            )}
            {contact.linkedin && (
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                <FaLinkedin size={22} style={{ color: '#0077b5' }} />
                <strong>LinkedIn:</strong> <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>{contact.linkedin}</a>
              </li>
            )}
            {contact.github && (
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                <FaGithub size={22} style={{ color: '#e6f1ff' }} />
                <strong>GitHub:</strong> <a href={contact.github} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>{contact.github}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
