// Shared types for the portfolio

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  phone?: string;
}
