/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "265px 1fr",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      gray: {
        100: "#e1e1e6",
        300: "#c4c4cc",
        400: "#8d8d99",
        600: "#323238",
        700: "#29292e",
        800: "#202024",
        900: "#121214",
      },
      green: {
        300: "#00B37E",
        500: "#00875F",
      },
      red: {
        500: "#F75A68",
      },
    },
  },
  plugins: [],
};
