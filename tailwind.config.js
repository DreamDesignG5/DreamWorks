const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        robotocondensed: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        ...colors,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked", "group-hover"],
      width: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
