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
  darkMode: "class",
  
  // Configuración para reducir CSS no usado
  safelist: [
    'animate-fade-in-up',
    'animate-slide-in-up', 
    'animate-float',
    'glass-effect'
  ],
  theme: {
    extend: {
      textDecorationThickness: {
        'thick': '2px',
      },
      padding: {
        '2': '0.5rem',
      },
      colors: {
        trueGray: colors.neutral,
        customBlue: "#003871",
        customRed: "#def0f6",
        snow: "#001211",
        snow2:"#0A1E1D",
        snow3:"#2B2B2B",
        davysGray: "#545863ff",
        btn: "#2678b8",
        'gradient-custom': 'linear-gradient(to right, #003871, #2678b8)',
      },
      filter: {
        black: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)', 
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-delayed': 'fadeInUp 1s ease-out 0.3s both',
        'slide-in-up': 'slideInUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1s infinite',
        'float-slow': 'float 4s ease-in-out 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
      Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      Manropes: ["Manrope", ...defaultTheme.fontFamily.sans],
      Ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      'industrial': ['Roboto Condensed', 'Oswald', 'Titillium Web', 'sans-serif'],
      'professional': ['Inter', 'system-ui', 'sans-serif'],
      'technical': ['Source Sans Pro', 'system-ui', 'sans-serif'],
    },
    backgroundImage: {
      "hero-image": "url('/img/hero2.jpg')",
      "hero-image2": "url('/img/img-motor-perfil-antes.jpg')",
      "card-image": "url('/img/prueba-6.jpg')",
      'gradient-custom1': 'linear-gradient(to top, #001211, #434343)',
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
    require('tailwindcss-animated'),
    require('daisyui')
  ],
};
export default config;
