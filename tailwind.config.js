/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alexandria: ["Alexandria", "sans-serif"],
      },
      colors: {
        "dark-blue": "rgba(19, 33, 71, 0.7)",
        "dark-green": "rgba(32, 110, 84, 0.7)",
      },
    },
  },
  plugins: [],
};
