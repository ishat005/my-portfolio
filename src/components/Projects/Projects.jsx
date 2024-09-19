import React from "react";
import "./Projects.css";
import cosmochat from "../../assets/cosmochat.jpeg";
import weatherApp from "../../assets/weatherApp.png";
import kai from "../../assets/kai.png";
import todoApp from "../../assets/todo.png";
import chatApp from "../../assets/img.png";
import chitChat from "../../assets/chatApp.png";
import materialUI from "../../assets/material-ui.png";

const ProjectCard = ({ image, title, description, link, link2 }) => (
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
          <br />
          {link2 && (
            <a href={link2} target="_blank" rel="noopener noreferrer">
              Coninue Viewing
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
          description="A Chat Interface Development app with help of React and OpenAI Integration."
          link="https://youtu.be/WFLQLM3exgg"
        />

        <ProjectCard
          image={weatherApp}
          title="Weather App"
          description="A weather app that displays the current weather by entering location and country code. Implemented using React and OpenWeather API"
          link="https://www.youtube.com/watch?v=h4SjroMaNNU"
        />

        <ProjectCard
          image={kai}
          title="Kai Notifications"
          description="A thorough notifying system, error-handling features, and business logic for the KAI AI Platform."
          link="https://youtu.be/vMS90RH72bg"
          link2="https://youtu.be/4XC004rh_aA"
        />

        <ProjectCard
          image={todoApp}
          title="Todo App"
          description="A todo app that allows users to create, edit, and delete tasks and keep track of their progress."
          link="https://youtu.be/hlZY-vKkK94"
        />

        <ProjectCard
          image={chatApp}
          title="Realtime Chat App"
          description="
          A real-time chat app that allows users to send and receive messages in real-time. Implemented using Node.js and Socket.io.   
          "
          link="https://youtu.be/v2naY4vc80E"
        />

        <ProjectCard
          image={chitChat}
          title="Chat App - Firebase, React"
          description="
          A real-time chat app that allows users to send and receive messages in real-time. Implemented using React, tailwind css, and firebase.   
          "
          link="https://youtu.be/1i4jOS0Ug4A"
        />

        <ProjectCard
          image={materialUI}
          title="Admin Dashboard"
          description="
          An admin dashboard with the help of React and Material UI.  
          "
          link="https://youtu.be/OMILrAsMneI"
        />
      </div>
    </section>
  );
};

export default Projects;
