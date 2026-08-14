import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row lg:px-12">
        
        {/* Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Isha Thakur. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/ishat005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              text-slate-500
              transition-colors
              hover:text-slate-900
              dark:text-slate-400
              dark:hover:text-white
            "
          >
            <FaGithub className="text-lg" />
          </a>

          <a
            href="https://www.linkedin.com/in/thakurisha/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-slate-500
              transition-colors
              hover:text-slate-900
              dark:text-slate-400
              dark:hover:text-white
            "
          >
            <FaLinkedin className="text-lg" />
          </a>

          <a
            href="mailto:eishat915@gmail.com"
            aria-label="Email"
            className="
              text-slate-500
              transition-colors
              hover:text-slate-900
              dark:text-slate-400
              dark:hover:text-white
            "
          >
            <FaEnvelope className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;