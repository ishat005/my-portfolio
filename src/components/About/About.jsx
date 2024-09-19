import React from "react";
import "./About.css";
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="about">
      <img src={profileImage} alt="Profile" className="profile-img" />

      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Who am I</h3>
          <p>
            Hi, My name is Isha. I hold a bachelor's degree in Computer Science,
            a diploma in IT, a diploma in Software Engineering, and a passion
            for frontend development.
          </p>

          <p>
            In my free time, I enjoy travelling, listening to music,
            photographing, exploring the world, and learning about new
            technologies.
          </p>
        </div>

        <div className="about-text">
          <h3>My Passion</h3>

          <p>
            When I first chose Computer Science, I knew it was exactly what I
            wanted to do! Ever since then, I have strived to further my career
            by consistently trying to challenge myself and reach new heights.
          </p>

          <p>
            After completing my bachelor's degree, I have gained substantial
            knowledge of software development and my love for the industry
            continues to grow. I am constantly seeking new challenges and
            opportunities to improve my skills, and I am excited to continue my
            journey in the field of Computer Science.
          </p>
        </div>

        <div className="about-text">
          <h3>My Goals</h3>
          <p>
            My goal is to become a skilled frontend developer and contribute to
            the success of the company. I am excited to see where my skills and
            experience will take me in the future.
          </p>
        </div>
      </div>

      <div className="contacts">
        <a href="https://github.com/ishat005" target="_blank">
          <button className="btn btn-github">GitHub</button>
        </a>
        <a href="https://www.linkedin.com/in/thakurisha/" target="_blank">
          <button className="btn btn-linkedin">LinkedIn</button>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tisha8357@gmail.com&su=SUBJECT&body=BODY"
          target="_blank"
        >
          <button className="btn btn-email">Email</button>
        </a>
      </div>
    </section>
  );
};

export default About;
