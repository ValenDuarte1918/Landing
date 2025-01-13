import { Manrope, Montserrat, Ubuntu } from "next/font/google";
import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      textDecorationThickness: {
        'thick': '2px', // Ajusta el grosor según tus necesidades
      },
      padding: {
        '2': '0.5rem', // Ajusta el padding según tus necesidades
      },
      colors: {
        trueGray: colors.neutral,
        customBlue: "#003871",
        customRed: "#def0f6",
        snow: "#fbf5f3ff",
        davysGray: "#545863ff",
        btn: "#2678b8",
      },
      filter: {
        black: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)', 
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
      Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      Manropes: ["Manrope", ...defaultTheme.fontFamily.sans],
      Ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      "hero-image": "url('/img/hero2.jpg')",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
