import React from "react";
import "./Projects.css";

import cosmochat from "../../assets/cosmochat.jpeg";
import weatherApp from "../../assets/weatherApp.png";
import todoApp from "../../assets/todo.png";
import chatApp from "../../assets/img.png";
import chitChat from "../../assets/chatApp.png";
import materialUI from "../../assets/material-ui.png";
import nodejsExpress from "../../assets/nodejsExpress.png";
import nextjsShadcn from "../../assets/shadcn-ui-nextjs.jpg";

const ProjectCard = ({ image, title, description, link }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-image" />

    <div className="project-overlay">
      <div>
        <h3>{title}</h3>
      </div>

      <div>
        <p>
          {description}
          <br />

          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </p>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        <ProjectCard
          image={cosmochat}
          title="CosmoChat"
          description="A chat interface built with React and OpenAI integration."
          link="https://youtu.be/WFLQLM3exgg"
        />

        <ProjectCard
          image={weatherApp}
          title="Weather App"
          description="A weather application that displays current weather information based on location and country code using React and the OpenWeather API."
          link="https://www.youtube.com/watch?v=h4SjroMaNNU"
        />

        <ProjectCard
          image={todoApp}
          title="Todo App"
          description="A task management application that allows users to create, edit, delete, and track tasks."
          link="https://youtu.be/hlZY-vKkK94"
        />

        <ProjectCard
          image={chatApp}
          title="Realtime Chat App"
          description="A real-time chat application built with Node.js and Socket.io that allows users to send and receive messages instantly."
          link="https://youtu.be/v2naY4vc80E"
        />

        <ProjectCard
          image={chitChat}
          title="Chat App - Firebase & React"
          description="A real-time chat application built with React, Tailwind CSS, and Firebase."
          link="https://youtu.be/1i4jOS0Ug4A"
        />

        <ProjectCard
          image={materialUI}
          title="Admin Dashboard"
          description="An admin dashboard built with React and Material UI."
          link="https://youtu.be/OMILrAsMneI"
        />

        <ProjectCard
          image={nodejsExpress}
          title="Blog App"
          description="A full-stack blog application built with React, Node.js, and Express."
          link="https://youtu.be/GvpBNDYZ2WE"
        />

        <ProjectCard
          image={nextjsShadcn}
          title="Pizzeria Landing Page"
          description="A modern landing page built with Next.js and Shadcn UI."
          link="https://youtu.be/BhAM9h9Gimg"
        />
      </div>
    </section>
  );
};

export default Projects;