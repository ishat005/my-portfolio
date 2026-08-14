import React from "react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaUniversalAccess,
  FaEnvelope,
  FaCloud,
  FaDatabase,
  FaPalette,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiJquery,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiNetlify,
  SiSocketdotio,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Material UI", icon: <FaPalette /> },
      { name: "Sass / SCSS", icon: <SiSass /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Python", icon: <FaPython /> },
      { name: "REST APIs", icon: <FaCode /> },
      { name: "Socket.io", icon: <SiSocketdotio /> },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Microsoft Azure", icon: <FaCloud /> },
      { name: "Azure Functions", icon: <FaCloud /> },
      { name: "Azure DevOps", icon: <FaCloud /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Netlify", icon: <SiNetlify /> },
    ],
  },

  {
    title: "Tools & Practices",
    skills: [
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Responsive Design", icon: <FaCode /> },
      { name: "WCAG / ARIA", icon: <FaUniversalAccess /> },
      { name: "EmailJS", icon: <FaEnvelope /> },
      { name: "VS Code", icon: <FaCode /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brand-gold mb-3">
            TECHNICAL SKILLS
          </span>
          <h2 className="mb-4 font-display text-3xl md:text-4xl font-bold text-brand-brown dark:text-white">
            Technologies I Work With
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg text-ink dark:text-white/90">
            Technologies and tools I use to build responsive, accessible,
            and full-stack web applications.
          </p>
        </div>

        {/* Skills Groups */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              {/* Group Title */}
              <h3 className="font-display text-xl font-bold text-brand-brown dark:text-white">
                {group.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center rounded-lg border border-brand-gold/20 bg-white p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-900 dark:border-brand-gold/30"
                  >
                    {skill.icon && (
                      <span className="mb-2 text-2xl text-brand-gold dark:text-brand-gold/80">
                        {skill.icon}
                      </span>
                    )}
                    <span className="text-sm font-medium text-ink dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;