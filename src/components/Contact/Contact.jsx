import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

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

    // Clear previous error when user starts editing again
    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xanwlzbg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong while sending the message.");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
        w-full
        bg-slate-50
        px-5 py-20
        sm:px-8
        lg:px-12 lg:py-28
        dark:bg-slate-900/50
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span
            className="
              mb-3 inline-block
              text-xs font-bold
              uppercase tracking-[0.2em]
              text-indigo-600
              dark:text-indigo-400
            "
          >
            Get In Touch
          </span>

          <h2
            className="
              mb-5
              text-3xl font-bold tracking-tight
              text-slate-900
              sm:text-4xl
              lg:text-5xl
              dark:text-white
            "
          >
            Let's Work Together
          </h2>

          <p
            className="
              mx-auto max-w-xl
              text-sm leading-7
              text-slate-600
              sm:text-base
              dark:text-slate-400
            "
          >
            Have a project, opportunity, or just want to connect? Send me a
            message and I'll get back to you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Info */}
          <div
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-6
              shadow-sm
              sm:p-8
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
              Let's connect
            </h3>

            <p className="mb-8 text-sm leading-6 text-slate-600 dark:text-slate-400">
              I'm always open to discussing new projects, opportunities, and
              ideas.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:eishat915@gmail.com"
                className="
                  flex items-center gap-4
                  text-sm text-slate-600
                  transition-colors
                  hover:text-indigo-600
                  dark:text-slate-400
                  dark:hover:text-indigo-400
                "
              >
                <span
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-lg
                    bg-slate-100
                    text-indigo-600
                    dark:bg-slate-800
                    dark:text-indigo-400
                  "
                >
                  <FaEnvelope />
                </span>

                <span>eishat915@gmail.com</span>
              </a>

              <a
                href="https://github.com/ishat005"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-4
                  text-sm text-slate-600
                  transition-colors
                  hover:text-indigo-600
                  dark:text-slate-400
                  dark:hover:text-indigo-400
                "
              >
                <span
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-lg
                    bg-slate-100
                    text-indigo-600
                    dark:bg-slate-800
                    dark:text-indigo-400
                  "
                >
                  <FaGithub />
                </span>

                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/thakurisha/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-4
                  text-sm text-slate-600
                  transition-colors
                  hover:text-indigo-600
                  dark:text-slate-400
                  dark:hover:text-indigo-400
                "
              >
                <span
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-lg
                    bg-slate-100
                    text-indigo-600
                    dark:bg-slate-800
                    dark:text-indigo-400
                  "
                >
                  <FaLinkedin />
                </span>

                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-2xl
              border border-slate-200
              bg-white
              p-6
              shadow-sm
              sm:p-8
              dark:border-slate-800
              dark:bg-slate-900
            "
          >
            {/* Name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="
                  mb-2 block
                  text-sm font-medium
                  text-slate-700
                  dark:text-slate-300
                "
              >
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
                className="
                  w-full rounded-xl
                  border border-slate-200
                  bg-white
                  px-4 py-3
                  text-sm text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/20
                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                  dark:placeholder:text-slate-500
                "
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="
                  mb-2 block
                  text-sm font-medium
                  text-slate-700
                  dark:text-slate-300
                "
              >
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
                className="
                  w-full rounded-xl
                  border border-slate-200
                  bg-white
                  px-4 py-3
                  text-sm text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/20
                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                  dark:placeholder:text-slate-500
                "
              />
            </div>

            {/* Message */}
            <div className="mb-5">
              <label
                htmlFor="message"
                className="
                  mb-2 block
                  text-sm font-medium
                  text-slate-700
                  dark:text-slate-300
                "
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
                className="
                  w-full resize-none rounded-xl
                  border border-slate-200
                  bg-white
                  px-4 py-3
                  text-sm text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-indigo-500
                  focus:ring-2
                  focus:ring-indigo-500/20
                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white
                  dark:placeholder:text-slate-500
                "
              />
            </div>

            {/* Status */}
            <div
              className="mb-5 min-h-5 text-sm"
              aria-live="polite"
            >
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

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="
                w-full rounded-xl
                bg-indigo-600
                px-5 py-3
                text-sm font-semibold
                text-white
                shadow-sm
                transition-all
                hover:bg-indigo-700
                hover:shadow-md
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                focus:ring-offset-2
                disabled:cursor-not-allowed
                disabled:opacity-60
                dark:focus:ring-offset-slate-900
              "
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