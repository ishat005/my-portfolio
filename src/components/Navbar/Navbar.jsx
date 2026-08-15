import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    type="button"
    className="text-xl text-brand-brown transition-transform duration-300 hover:scale-110 dark:text-white"
    onClick={toggleTheme}
    aria-label={
      theme === "light"
        ? "Switch to dark mode"
        : "Switch to light mode"
    }
  >
    <i
      className={`fa-solid ${
        theme === "light" ? "fa-moon" : "fa-sun"
      }`}
      aria-hidden="true"
    />
  </button>
);

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll completely to the top when "Isha Thakur" is clicked
  const handleHomeClick = (event) => {
    event.preventDefault();
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-[100] w-full bg-[#f0e6d7] px-4 py-3 shadow-sm dark:bg-[#333333]/90">
      <div className="mx-auto flex max-w-8xl items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={handleHomeClick}
          className="font-display text-xl font-semibold tracking-tight text-brand-brown transition-colors duration-300 hover:text-brand-gold dark:text-white"
          aria-label="Go to top of page"
        >
          Isha Thakur
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="font-sans text-sm font-medium uppercase tracking-wide text-brand-brown transition-colors duration-300 hover:text-brand-gold dark:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <ThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </li>
        </ul>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle
            theme={theme}
            toggleTheme={toggleTheme}
          />

          <button
            type="button"
            className="text-2xl text-brand-brown dark:text-white"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <i
              className={`fa-solid ${
                menuOpen ? "fa-xmark" : "fa-bars"
              }`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="mt-3 flex flex-col gap-3 border-t border-brand-brown/20 pt-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block font-sans text-sm font-medium uppercase tracking-wide text-brand-brown transition-colors duration-300 hover:text-brand-gold dark:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;