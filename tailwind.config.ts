import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
        secondary: ["Satisfy, cursive"],
      },
      // boxShadow: {
      //   shadow: "shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
      // },
      colors: {
        light: {
          primary: "palevioletred",
          secondary: "rgb(255, 211, 211)",
          tertiary: "rgb(214, 229, 250)",
          font: "rgb(20, 47, 67)",
          accent: "rgb(110, 70, 219)",
          border: "cadetblue",
        },
        dark: {
          primary: "rgb(0, 64, 108)",
          secondary: "rgb(34, 52, 93)",
          tertiary: "rgb(87, 123, 193)",
          font: "rgb(230, 230, 230)",
          accent: "rgb(229, 190, 237)",
          border: "rgb(255, 211, 211)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
