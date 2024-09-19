import React, { useState } from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">Isha Thakur</div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <button className="toggle-theme-button" onClick={toggleTheme}>
            <i
              class="fa fa-toggle-on"
              aria-hidden="true"
              style={{ fontSize: "36px" }}
            ></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
