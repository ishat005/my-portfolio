import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="experience-list">

        {/* Orange Data Tech */}
        <div className="experience-item">
          <h3>Associate Software Engineer | Orange Data Tech Pvt. Ltd.</h3>
          <p>Aug 2025 - Present | Indore, MP</p>

          <ul>
            <li>
              Engineered core features using Java and Spring Boot for
              EngagePEO, delivering scalable business solutions that met
              complex client requirements.
            </li>

            <li>
              Built automated report generation features using Playwright and
              Spring Boot to programmatically export and deliver PDF and
              PowerPoint reports from Power BI dashboards.
            </li>

            <li>
              Developed serverless log synchronization features using Azure
              Function Apps with Python and Java, enabling seamless data
              workflows and improved system observability.
            </li>

            <li>
              Built automated Python and SQL validation scripts within
              Snowflake to maintain data consistency and reliability across
              business dashboards.
            </li>
          </ul>
        </div>

        {/* Radical AI */}
        <div className="experience-item">
          <h3>Software Engineer Intern | Radical AI</h3>
          <p>Jun 2024 - Jan 2025 | US (Remote)</p>

          <ul>
            <li>
              Contributed to the development of Kai, an AI Teaching Assistant,
              using technologies including React, Node.js, Express, and
              OpenAI.
            </li>

            <li>
              Developed and maintained React-based user interfaces and
              integrated frontend components with backend services and APIs.
            </li>

            <li>
              Worked with Node.js and backend services to implement application
              functionality, business logic, and API integrations.
            </li>

            <li>
              Integrated OpenAI-powered functionality to support AI-assisted
              educational workflows and user interactions.
            </li>

            <li>
              Implemented error-handling and notification functionality to
              improve application reliability and user experience.
            </li>

            <li>
              Collaborated with the development team to troubleshoot issues,
              test features, and improve application functionality.
            </li>
          </ul>
        </div>

        {/* SSL Computers */}
        <div className="experience-item">
          <h3>IT Support Specialist (short-term) | SSL Computers</h3>
          <p>Jun 2023 | Abbotsford, BC</p>

          <ul>
            <li>
              Managed and resolved technical support tickets based on issue
              priority and customer impact.
            </li>

            <li>
              Conducted data restoration and recovery according to established
              company procedures.
            </li>

            <li>
              Resolved hardware and software issues, including password resets,
              software installations, and troubleshooting.
            </li>

            <li>
              Installed software and patches, performed antivirus maintenance,
              and supported computer software updates.
            </li>
          </ul>
        </div>

        {/* Visions Electronics */}
        <div className="experience-item">
          <h3>Cashier and Finance | Visions Electronics</h3>
          <p>Dec 2017 - Apr 2019 | Vancouver, BC</p>

          <ul>
            <li>
              Prioritized tasks efficiently in a fast-paced retail environment
              while maintaining accurate financial transactions and customer
              service.
            </li>

            <li>
              Streamlined record-keeping processes and maintained accurate and
              timely transaction documentation.
            </li>

            <li>
              Built strong relationships with customers by addressing
              questions and concerns both in person and over the phone.
            </li>

            <li>
              Collaborated with shift managers and team members to resolve
              customer concerns and maintain efficient daily operations.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;