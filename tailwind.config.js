/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        // Brand colors 
        brand: {
          brown: "#885133", // headings (h2, h3)
          gold: "rgb(195, 165, 31)", // accent / buttons / borders
        },
        ink: "rgba(49, 49, 45, 1)", // body text (light mode)
      },
    },
  },
  plugins: [],
};