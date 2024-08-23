import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript',
  'React',
  'CSS',
  'SASS/SCSS',
  'HTML',
  'Node.js',
  'Python',
  'Material UI',
  'Next.js',
  'Node.js',
  'Figma',
  'Github',
  'MongoDB'
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
