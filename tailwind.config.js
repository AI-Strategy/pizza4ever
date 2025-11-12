/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "DEFAULT": "#F2590D",
          "light": "#FF8A50",
          "dark": "#D94F0B",
          "contrast": "#FFFFFF"
        },
        "secondary": {
          "DEFAULT": "#1E3A8A",
          "light": "#3B82F6",
          "dark": "#1C355B",
          "contrast": "#FFFFFF"
        },
        "surface": {
          "DEFAULT": "#F8F6F5",
          "subtle": "#EFEBE9",
          "strong": "#D7CCC8"
        },
        "content": {
          "DEFAULT": "#181311",
          "subtle": "#574A45",
          "non-essential": "#8D7B75"
        },
        "dark-surface": {
          "DEFAULT": "#181311",
          "subtle": "#221610",
          "strong": "#2D1D16"
        },
        "dark-content": {
          "DEFAULT": "#F8F6F5",
          "subtle": "#BAA69C",
          "non-essential": "#81726A"
        },
        p4e_orange: {
          DEFAULT: "#FF6700",
          light: "#FF8F33",
        },
        p4e_green: {
          dark: "#1A4314",
          DEFAULT: "#2A5425",
          light: "#669966",
        },
        p4e_cream: {
          DEFAULT: "#F4F1E9",
          dark: "#E0C097",
        },
        p4e_charcoal: "#333333",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Space Grotesk", "Outfit", "Changa One", "Lora", "sans-serif"],
        body: ["Inter", "Plus Jakarta Sans", "Figtree", "Manrope", "Roboto", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        '2xl': '2rem',
        full: "9999px",
      },
       boxShadow: {
        'input': '0 1px 2px 0 rgb(0 0 0 / 0.05), 0 0 0 4px rgb(217 93 57 / 0.1)',
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
