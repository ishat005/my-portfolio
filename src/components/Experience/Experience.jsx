import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Software Engineer Intern | Radical AI</h3>
          <p>JUNE 18, 2023 - PRESENT, US (REMOTE)</p>
          <ul>
            <li>
              Leveraged technologies such as OpenAI, Node.js, and React to
              develop Kai, an AI Teaching Assistant engineered to augment the
              educational ecosystem by supporting instructors with intelligent
              program design and learner engagement strategies.
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>IT Support Specialist (short-term) | SSL Computers</h3>
          <p>JUNE 05, 2023 - JUNE 23, 2023, ABBOTSFORD, BC</p>
          <ul>
            <li>
              Managed and resolved the tickets within the ticketing system,
              starting with the highest priority and working down to the lowest
              by recognizing customer’s issue priority.
            </li>

            <li>
              Conducted data restoration as required in compliance with the
              company’s established procedures.
            </li>

            <li>
              Resolved hardware and software issues, including password resets,
              and software installations.
            </li>

            <li>
              Installed software and patches, scanned computers, and updated
              antivirus programs that were accomplished for computer software
              maintenance.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Cashier and Finance | Visions Electronics</h3>
          <p>DEC 2017 - APR 2019, VANCOUVER, BC</p>
          <ul>
            <li>
              Efficiently prioritized tasks and arranged work in a fast-paced
              setting, increasing sales at peak hours when only three or four
              coworkers were present.
            </li>

            <li>
              Streamlined record-keeping processes, guaranteeing accurate and
              timely transaction documentation for clients; achieved 100%
              compliance with record delivery deadlines and received
              commendation from senior management.
            </li>

            <li>
              Developed strong relationships with customers personally and over
              the phone in response to their questions and concerns, ensuring
              their loyalty and satisfaction.
            </li>

            <li>
              Collaborated with shift manager to address and resolve customer
              concerns and issues.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
