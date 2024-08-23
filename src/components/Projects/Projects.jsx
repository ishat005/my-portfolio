import React from 'react';
import './Projects.css';

const ProjectCard = ({ title, description, link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
     
      <div className="projects-grid">
        <ProjectCard
          title="Project One"
          description="A brief description of project one."
          link="https://example.com"
        />
        <ProjectCard
          title="Project Two"
          description="A brief description of project two."
          link="https://example.com"
        />
        <ProjectCard
          title="Project Three"
          description="A brief description of project three."
          link="https://example.com"
        />
         <ProjectCard
          title="Project Four"
          description="A brief description of project three."
          link="https://example.com"
        />
      </div>
    </section>
  );
}

export default Projects;