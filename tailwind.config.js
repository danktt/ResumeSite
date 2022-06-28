module.exports = {
  // darkMode: 'className',
  content: ["./src/**/*.tsx"],
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
        "resume-light": {
          primary: "#279d95",
          "primary-content": "#FBFBFC",
          secondary: "#E6B43C",
          accent: "#37cdbe",
          "accent-content": "#FBFBFC",
          neutral: "#0B0E12",
          "neutral-content": "#fff",
          "base-100": "#FBFBFC",
          "base-200": "#EBEBEB",
        },
      },
    ],
  },
};
