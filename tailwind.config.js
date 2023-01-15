/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md1200: { max: "1200px" },
      md1000: { max: "1000px" },
      min800: { max: "800px" },
    },
  },
  plugins: [],
};
