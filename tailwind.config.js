const plugin = require("tailwindcss/plugin");
// Rotate Y utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(80deg)",
    },
  });
});
module.exports = {
  // darkMode: 'className',
  content: ["./src/**/*.tsx"],

  variants: {},
  plugins: [rotateY],

  theme: {
    extend: {
      colors: {
        "yellow-figma": "#FCA311",
        "black-figma": "#0B0E12",
        "azul-turquesa": "#14213D",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/wallpaper.png')",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        ThemesDark: {
          primary: "#14213D",
          secondary: "#0B0E12",
          accent: "#FCA311",
          neutral: "#0B0E12",
          "base-100": "#ffffff",
          "base-200": "#111827",
          "primary-content": "#FBFBFC",
        },
        ThemesLight: {
          primary: "#B5FED9",
          secondary: "#F6F7F8",
          accent: "#624CAB",
          neutral: "#0B0E12",
          "base-100": "#011627",
          "base-200": "#111827",
          "primary-content": "#FBFBFC",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "night",
      "coffee",
    ],
  },
};
