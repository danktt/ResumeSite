module.exports = {
  // darkMode: 'className',
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "yellow-figma": "#FCA311",
        "black-figma": "#0B0E12",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/wallpaper.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
