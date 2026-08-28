import React from "react";
import profileImage from "../../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-4 pb-16 pt-28 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Hero Content */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Software Engineer | Full-Stack Developer
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight text-brand-brown dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I'm Isha Thakur
          </h1>

          <h2 className="mt-4 font-display text-2xl font-semibold text-brand-brown/80 dark:text-gray-300 sm:text-3xl">
            Full-Stack Developer
          </h2>

          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink dark:text-gray-300 md:text-xl">
            I build scalable applications, backend services, and modern web
            experiences using Java, Spring Boot, React, Node.js, Python, and
            cloud technologies.
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {[
              "Java",
              "Spring Boot",
              "React",
              "Node.js",
              "Python",
              "MongoDB",
              "SQL",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-brand-gold/60 px-3 py-1.5 font-sans text-sm text-brand-brown transition-colors duration-300 hover:bg-brand-gold hover:text-white dark:text-gray-200"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            {/* Resume */}
            <a
              href="/Isha-Thakur-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-brand-gold bg-brand-gold px-7 py-3 font-sans text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-brown"
            >
              View Resume
            </a>

            {/* Projects */}
            <a
              href="#projects"
              className="border-2 border-brand-gold bg-white px-7 py-3 font-sans text-base font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white dark:bg-gray-900 dark:text-white"
            >
              View Projects
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ishat005"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-brand-gold bg-white px-7 py-3 font-sans text-base font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-gold hover:text-white dark:bg-gray-900 dark:text-white"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            {/* Outer decorative circle */}
            <div className="absolute -inset-4 rounded-full border border-brand-gold/30" />

            {/* Second decorative circle */}
            <div className="absolute -inset-8 rounded-full border border-brand-gold/10" />

            <img
              src={profileImage}
              alt="Isha Thakur"
              className="relative h-64 w-64 rounded-full object-cover shadow-2xl ring-4 ring-brand-gold/20 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;