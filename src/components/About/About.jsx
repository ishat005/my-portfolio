import React from "react";
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl px-4 py-12 lg:px-8"
    >
      {/* About Introduction */}
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Isha Thakur"
            className="h-56 w-56 rounded-full object-cover shadow-lg md:h-72 md:w-72"
          />
        </div>

        {/* About Content */}
        <div className="text-center md:text-left">
          <h2 className="mb-6 font-display text-3xl font-bold text-brand-brown dark:text-white">
            About Me
          </h2>

          <p className="font-sans text-lg leading-relaxed text-ink dark:text-white">
            Hi, I'm Isha — a Software Engineer passionate about building
            reliable, scalable, and user-focused applications. I enjoy
            working across the stack, from developing backend services and
            APIs to creating responsive and interactive frontend experiences.
          </p>

          <p className="mt-4 font-sans text-lg leading-relaxed text-ink dark:text-white">
            My professional experience includes working with Java, Spring
            Boot, React, Node.js, Python, SQL, Azure, and Snowflake. I have
            worked on application development, API integrations, cloud
            services, automation, reporting systems, and AI-powered
            applications.
          </p>

          <p className="mt-4 font-sans text-lg leading-relaxed text-ink dark:text-white">
            I enjoy solving technical problems and turning ideas into
            practical software. My interests include full-stack development,
            backend engineering, cloud applications, automation, and
            AI-powered solutions.
          </p>

          <p className="mt-4 font-sans text-lg leading-relaxed text-ink dark:text-white">
            Outside of development, I enjoy travelling, photography,
            listening to music, exploring new places, and learning about
            emerging technologies.
          </p>
        </div>
      </div>

      {/* Development Areas */}
      <div className="mt-14">
        <h3 className="mb-8 text-center font-display text-2xl font-semibold text-brand-brown dark:text-white">
          What I Work With
        </h3>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Backend Development */}
          <div className="rounded-lg border border-brand-gold bg-white p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:bg-gray-900">
            <h4 className="font-display text-lg font-semibold text-brand-brown dark:text-white">
              Backend Development
            </h4>

            <p className="mt-3 font-sans text-sm leading-relaxed text-ink dark:text-gray-300">
              Java, Spring Boot, Node.js, REST APIs, backend services, and
              application business logic.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="rounded-lg border border-brand-gold bg-white p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:bg-gray-900">
            <h4 className="font-display text-lg font-semibold text-brand-brown dark:text-white">
              Frontend Development
            </h4>

            <p className="mt-3 font-sans text-sm leading-relaxed text-ink dark:text-gray-300">
              React, JavaScript, Tailwind CSS, responsive interfaces, and
              modern user experiences.
            </p>
          </div>

          {/* Cloud & Data */}
          <div className="rounded-lg border border-brand-gold bg-white p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:bg-gray-900">
            <h4 className="font-display text-lg font-semibold text-brand-brown dark:text-white">
              Cloud & Data
            </h4>

            <p className="mt-3 font-sans text-sm leading-relaxed text-ink dark:text-gray-300">
              Azure, Python, SQL, Snowflake, cloud-based workflows, and data
              processing.
            </p>
          </div>

          {/* AI & Automation */}
          <div className="rounded-lg border border-brand-gold bg-white p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:bg-gray-900">
            <h4 className="font-display text-lg font-semibold text-brand-brown dark:text-white">
              AI & Automation
            </h4>

            <p className="mt-3 font-sans text-sm leading-relaxed text-ink dark:text-gray-300">
              OpenAI integrations, automation workflows, reporting systems,
              and AI-powered application features.
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a
          href="https://github.com/ishat005"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-brand-gold bg-white px-8 py-4 font-sans text-lg text-black transition-colors duration-300 hover:bg-brand-gold hover:text-white dark:bg-gray-900 dark:text-white"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/thakurisha/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-brand-gold bg-white px-8 py-4 font-sans text-lg text-black transition-colors duration-300 hover:bg-brand-gold hover:text-white dark:bg-gray-900 dark:text-white"
        >
          LinkedIn
        </a>

        <a
          href="mailto:tisha8357@gmail.com"
          className="border-2 border-brand-gold bg-white px-8 py-4 font-sans text-lg text-black transition-colors duration-300 hover:bg-brand-gold hover:text-white dark:bg-gray-900 dark:text-white"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default About;