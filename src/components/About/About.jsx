import React from "react";
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl px-4 py-16 lg:px-8"
    >
      {/* About Introduction */}
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Isha Thakur"
            className="h-56 w-56 rounded-full object-cover shadow-xl ring-4 ring-brand-gold/30 md:h-72 md:w-72"
          />
        </div>

        {/* About Content */}
        <div className="text-center md:text-left">
          <h2 className="mb-3 font-display text-3xl font-bold text-brand-brown dark:text-white md:text-4xl">
            About Me
          </h2>

          <p className="mb-6 font-sans text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Software Engineer & Full-Stack Developer
          </p>

          <p className="font-sans text-lg leading-relaxed text-ink dark:text-gray-200">
            I'm a Software Engineer focused on building reliable, scalable, and
            user-focused software. I enjoy working across the stack, from developing
            backend services and APIs to creating responsive and interactive frontend
            experiences.
          </p>

          <p className="mt-4 font-sans text-lg leading-relaxed text-ink dark:text-gray-200">
            Alongside my professional engineering work, I build full-stack applications
            and product prototypes that combine modern frontend interfaces, backend
            services, databases, APIs, and AI integrations.
          </p>

          <p className="mt-4 font-sans text-lg leading-relaxed text-ink dark:text-gray-200">
            My professional experience includes Java, Spring Boot, React, Node.js,
            Python, SQL, Azure, and Snowflake. I've worked on backend services, API
            integrations, cloud workflows, automation, reporting systems, data
            validation, and AI-powered applications.
          </p>

          <p className="mt-4 font-sans text-lg leading-relaxed text-ink dark:text-gray-200">
            I enjoy solving technical problems and turning ideas into practical
            software. I'm particularly interested in full-stack development, backend
            engineering, cloud applications, automation, and AI-powered solutions.
          </p>

          <p className="mt-5 font-sans text-base leading-relaxed text-ink/80 dark:text-gray-400">
            Outside of development, I enjoy travelling, photography, music, exploring
            new places, and learning about emerging technologies.
          </p>
        </div>
      </div>

      {/* Technical Focus */}
      <div className="mt-16">
        <div className="mb-8 text-center">
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-brand-gold">
            Engineering Focus
          </p>

          <h3 className="font-display text-2xl font-semibold text-brand-brown dark:text-white md:text-3xl">
            Technical Focus
          </h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Backend */}
          <div className="rounded-xl border border-brand-gold/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900">
            <h4 className="font-display text-lg font-semibold text-brand-brown dark:text-white">
              Backend Engineering
            </h4>

            <p className="mt-3 font-sans text-sm leading-relaxed text-ink dark:text-gray-300">
              Building APIs, backend services, business logic, and scalable
              application functionality.
            </p>
          </div>

          {/* Frontend */}
          <div className="rounded-xl border border-brand-gold/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900">
            <h4 className="font-display text-lg font-semibold text-brand-brown dark:text-white">
              Frontend Development
            </h4>

            <p className="mt-3 font-sans text-sm leading-relaxed text-ink dark:text-gray-300">
              Creating responsive, interactive, and user-focused web
              experiences.
            </p>
          </div>

          {/* Cloud & Data */}
          <div className="rounded-xl border border-brand-gold/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900">
            <h4 className="font-display text-lg font-semibold text-brand-brown dark:text-white">
              Cloud & Data
            </h4>

            <p className="mt-3 font-sans text-sm leading-relaxed text-ink dark:text-gray-300">
              Working with cloud services, data workflows, validation, and
              data-driven applications.
            </p>
          </div>

          {/* Automation & AI */}
          <div className="rounded-xl border border-brand-gold/60 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900">
            <h4 className="font-display text-lg font-semibold text-brand-brown dark:text-white">
              Automation & AI
            </h4>

            <p className="mt-3 font-sans text-sm leading-relaxed text-ink dark:text-gray-300">
              Building automation workflows, reporting systems, AI
              integrations, and intelligent application features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
