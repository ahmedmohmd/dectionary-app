/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      charm: "Charm",
      roboto: "Roboto",
    },
    extend: {},
    colors: {
      primary: "#a744ee",
    },
  },
  plugins: [require("flowbite/plugin")],
};
