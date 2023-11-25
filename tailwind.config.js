/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        gothamBlack: ["GothamGRBlack", "sans-serif"],
        gothamLight: ["GothamGRLight", "sans-serif"],
      },
      screens: {
        sm: "700px",
      },
      colors: {
        accent: "#A93A3B",
        accentContrast: "#ffffff",
        background: "#000000",
        primaryTxt: "#ffffff",
      },
    },
  },
  plugins: [],
};
