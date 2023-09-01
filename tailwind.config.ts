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
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },

      fontFamily: {
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
          border: "#f57dff",
        },
        dark: {
          primary: "#020c1b",
          secondary: "#112240",
          tertiary: "rgb(87, 123, 193, 0.5)",
          font: "#e6f1ff",
          accent: "#57cbff",
          border: "cadetblue ",
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
