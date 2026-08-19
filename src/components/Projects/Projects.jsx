import React from "react";

import cosmochat from "../../assets/cosmochat.jpeg";
import chatApp from "../../assets/realtime-chat.png";
import materialUI from "../../assets/material-ui.png";
import laMaison from "../../assets/la-maison.png";

const projects = [
  {
    image: laMaison,
    title: "La Maison",
    description:
      "A full-stack real estate platform for discovering, managing, and saving property listings.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    link: "https://lamaisonreal-estate.netlify.app/",
    featured: true,
  },

  {
    image: cosmochat,
    title: "CosmoChat — AI Chat Application",
    description:
      `A full-stack AI chat application built with React, Node.js, Express, and Google Gemini API. Features a responsive 
      chat interface, real-time message handling, loading states, error handling, and secure server-side API communication.`,
    technologies: ["React", "JavaScript", "Node.js", "Express", "Gemini API"],
    link: "https://cosmochatui.netlify.app/",
  },

  {
    image: chatApp,
    title: "Realtime Chat App",
    description:
      `A real-time messaging application built with Socket.io, featuring instant message delivery, live user presence 
      (join/leave notifications), and a responsive UI styled with Sass.`,
    technologies: ["Node.js", "Express", "Socket.io", "Sass", "JavaScript"],
    link: "https://isha-chat-app.netlify.app",
  },

  {
    image: materialUI,
    title: "Admin Dashboard",
    description:
      "A responsive admin dashboard built with React and Material UI.",
    technologies: ["React", "Material UI", "JavaScript"],
    link: "https://youtu.be/OMILrAsMneI",
  },
];

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  link,
  featured,
}) => {
  return (
    <article
      className={`
        group overflow-hidden rounded-2xl
        border border-slate-200
        bg-white
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-slate-200/60
        dark:border-slate-800
        dark:bg-slate-900
        dark:hover:shadow-black/30
        ${featured ? "md:col-span-2" : ""}
      `}
    >
      {/* ================================
          PROJECT IMAGE
      ================================= */}

      <div
        className={`
          relative
          bg-slate-100
          dark:bg-slate-800
          ${
            featured
              ? "p-3 pt-12 sm:p-5 sm:pt-12"
              : "p-3 sm:p-4"
          }
        `}
      >
        {/* Featured Badge */}

        {featured && (
          <span
            className="
              absolute
              left-6 top-3
              z-10
              rounded-full
              bg-indigo-600
              px-3 py-1.5
              text-xs font-semibold
              text-white
              shadow-lg
              sm:left-8
            "
          >
            Featured Project
          </span>
        )}

        {/* Image Wrapper */}

        <div
          className={`
            overflow-hidden
            rounded-xl
            ${
              featured
                ? "aspect-[16/8] sm:aspect-[16/7]"
                : "aspect-[16/9]"
            }
          `}
        >
          {image ? (
            <img
              src={image}
              alt={`${title} project preview`}
              className={`
                h-full
                w-full
                transition-transform
                duration-500
                ${
                  featured
                    ? "object-contain group-hover:scale-[1.01]"
                    : "object-cover group-hover:scale-105"
                }
              `}
            />
          ) : (
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-slate-200
                dark:bg-slate-700
              "
            >
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Project Preview
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ================================
          PROJECT CONTENT
      ================================= */}

      <div className="p-5 sm:p-6">
        {/* Title */}

        <h3
          className="
            mb-2
            text-xl
            font-semibold
            text-slate-900
            dark:text-white
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mb-5
            max-w-3xl
            text-sm
            leading-6
            text-slate-600
            dark:text-slate-400
          "
        >
          {description}
        </p>

        {/* Technologies */}

        <div className="mb-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                bg-slate-100
                px-3
                py-1
                text-xs
                font-medium
                text-slate-600
                dark:bg-slate-800
                dark:text-slate-300
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Link */}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-indigo-600
              transition-colors
              hover:text-indigo-700
              dark:text-indigo-400
              dark:hover:text-indigo-300
            "
          >
            Live Demo

            <span
              className="
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        w-full
        bg-white
        px-5
        py-20
        sm:px-8
        lg:px-12
        lg:py-28
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* ================================
            SECTION HEADER
        ================================= */}

        <div
          className="
            mx-auto
            mb-14
            max-w-2xl
            text-center
            lg:mb-16
          "
        >
          <span
            className="
              mb-3
              inline-block
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-indigo-600
              dark:text-indigo-400
            "
          >
            Selected Work
          </span>

          <h2
            className="
              mb-5
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            Projects
          </h2>

          <p
            className="
              mx-auto
              max-w-xl
              text-sm
              leading-7
              text-slate-600
              sm:text-base
              dark:text-slate-400
            "
          >
            A selection of projects showcasing my experience
            building full-stack applications, interactive
            interfaces, and modern web experiences.
          </p>
        </div>

        {/* ================================
            PROJECT GRID
        ================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:gap-8
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;