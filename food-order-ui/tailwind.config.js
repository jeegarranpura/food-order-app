export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee5b2b",
        "background-light": "#f8f6f6",
        "background-dark": "#221510",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
