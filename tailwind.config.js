module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A0CFEB",
        primaryAlt: "#7BB9D9",
        primaryAlt2: "#B7DAEF",
        secondary: "#A71930",
        secondaryAlt: "#8C1325",
        accent: "#211645",
        accentAlt: "#1A1238",
        text: "#000000"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
