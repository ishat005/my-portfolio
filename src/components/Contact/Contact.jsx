import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const inputClasses = `
  w-full rounded-xl border border-brand-gold/20 bg-white px-4 py-3
  font-sans text-sm text-ink outline-none transition-all duration-300
  placeholder:text-gray-400
  focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20
  dark:border-gray-700 dark:bg-[#1c1c1c] dark:text-white dark:placeholder:text-gray-500
`;

const labelClasses = "mb-2 block font-sans text-sm font-medium text-ink dark:text-gray-300";

const contactLinkClasses = `
  flex items-center gap-4 font-sans text-sm text-ink/70
  transition-colors duration-300
  hover:text-brand-gold
  dark:text-gray-400 dark:hover:text-brand-gold
`;

const contactIconClasses =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold";

const cardClasses =
  "rounded-2xl border border-brand-gold/30 bg-white p-6 shadow-sm sm:p-8 dark:border-brand-gold/20 dark:bg-[#242424]";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status === "error" || status === "success") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full scroll-mt-24 bg-[#f8f3ec] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 dark:bg-[#2f2f2f]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Get In Touch
          </p>

          <h2 className="mb-5 font-display text-3xl font-bold tracking-tight text-brand-brown sm:text-4xl lg:text-5xl dark:text-white">
            Let's Work Together
          </h2>

          <p className="mx-auto max-w-xl font-sans text-sm leading-7 text-ink/70 dark:text-gray-300 sm:text-base">
            Have a project in mind? <br />
            I'm available for freelance web development and custom software projects.
            Let's discuss what you're looking to build.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div className={`${cardClasses} flex h-full flex-col`}>
            <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Contact
            </p>

            <h3 className="mb-3 font-display text-xl font-semibold text-brand-brown dark:text-white">
              Let's connect
            </h3>

            <p className="mb-8 font-sans text-sm leading-6 text-ink/70 dark:text-gray-400">
              I'm always open to discussing new projects, software
              opportunities, and interesting ideas.
            </p>

            <div className="space-y-5">
              <a href="mailto:tisha8357@gmail.com" className={contactLinkClasses}>
                <span className={contactIconClasses}>
                  <FaEnvelope />
                </span>
                <span className="break-all">tisha8357@gmail.com</span>
              </a>

              <a
                href="https://github.com/ishat005"
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClasses}
              >
                <span className={contactIconClasses}>
                  <FaGithub />
                </span>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/thakurisha/"
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClasses}
              >
                <span className={contactIconClasses}>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="mt-8 flex flex-1 items-end">
              <p className="rounded-lg bg-brand-gold/10 px-4 py-3 font-sans text-xs font-medium text-brand-brown dark:text-brand-gold">
                🟢 Currently available for new projects
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className={cardClasses}>
            <div className="mb-5">
              <label htmlFor="name" className={labelClasses}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
                className={inputClasses}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
                className={inputClasses}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows="6"
                required
                className={`resize-none ${inputClasses}`}
              />
            </div>

            <div className="mb-5 min-h-5 font-sans text-sm" aria-live="polite">
              {status === "success" && (
                <p className="text-green-600 dark:text-green-400">
                  Message sent successfully. Thanks for reaching out!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 dark:text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-brand-gold px-5 py-3 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-brown hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-[#242424]"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;