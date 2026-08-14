import React from "react";

const ExperienceItem = ({ title, dates, bullets }) => (
  <div className="rounded-lg border border-brand-gold bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:bg-gray-900 sm:p-8">
    <h3 className="font-display text-xl font-semibold text-brand-brown dark:text-white">
      {title}
    </h3>
    <p className="mt-1 mb-4 font-sans italic text-ink/75 dark:text-white/75">
      {dates}
    </p>
    <ul className="list-disc space-y-2 pl-5">
      {bullets.map((bullet, i) => (
        <li
          key={i}
          className="font-sans text-lg leading-relaxed text-ink dark:text-white"
        >
          {bullet}
        </li>
      ))}
    </ul>
  </div>
);

const experiences = [
  {
    title: "Associate Software Engineer | Orange Data Tech Pvt. Ltd.",
    dates: "Aug 2025 - Present | Indore, MP",
    bullets: [
      "Engineered core features using Java and Spring Boot for EngagePEO, delivering scalable business solutions that met complex client requirements.",
      "Built automated report generation features using Playwright and Spring Boot to programmatically export and deliver PDF and PowerPoint reports from Power BI dashboards.",
      "Developed serverless log synchronization features using Azure Function Apps with Python and Java, enabling seamless data workflows and improved system observability.",
      "Built automated Python and SQL validation scripts within Snowflake to maintain data consistency and reliability across business dashboards.",
    ],
  },
  {
    title: "Software Engineer Intern | Radical AI",
    dates: "Jun 2024 - Jan 2025 | US (Remote)",
    bullets: [
      "Contributed to the development of Kai, an AI Teaching Assistant, using technologies including React, Node.js, Express, and OpenAI.",
      "Developed and maintained React-based user interfaces and integrated frontend components with backend services and APIs.",
      "Worked with Node.js and backend services to implement application functionality, business logic, and API integrations.",
      "Integrated OpenAI-powered functionality to support AI-assisted educational workflows and user interactions.",
      "Implemented error-handling and notification functionality to improve application reliability and user experience.",
      "Collaborated with the development team to troubleshoot issues, test features, and improve application functionality.",
    ],
  },
  {
    title: "IT Support Specialist (short-term) | SSL Computers",
    dates: "Jun 2023 | Abbotsford, BC",
    bullets: [
      "Managed and resolved technical support tickets based on issue priority and customer impact.",
      "Conducted data restoration and recovery according to established company procedures.",
      "Resolved hardware and software issues, including password resets, software installations, and troubleshooting.",
      "Installed software and patches, performed antivirus maintenance, and supported computer software updates.",
    ],
  },
  {
    title: "Cashier and Finance | Visions Electronics",
    dates: "Dec 2017 - Apr 2019 | Vancouver, BC",
    bullets: [
      "Prioritized tasks efficiently in a fast-paced retail environment while maintaining accurate financial transactions and customer service.",
      "Streamlined record-keeping processes and maintained accurate and timely transaction documentation.",
      "Built strong relationships with customers by addressing questions and concerns both in person and over the phone.",
      "Collaborated with shift managers and team members to resolve customer concerns and maintain efficient daily operations.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-5xl px-4 py-12 lg:px-8"
    >
      <h2 className="mb-10 text-center font-display text-3xl font-bold text-brand-brown dark:text-white">
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.title} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;