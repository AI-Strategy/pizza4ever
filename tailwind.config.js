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
        "primary": "#FF4500",
        "background-light": "#F8F9FA",
        "background-dark": "#181A1B",
        "text-light": "#212529",
        "text-dark": "#E8E6E3",
        "subtle-light": "#6C757D",
        "subtle-dark": "#A9A9A9",
        "border-light": "#DEE2E6",
        "border-dark": "#343A40",
        "input-bg-light": "#FFFFFF",
        "input-bg-dark": "#212529",
        "p4e-orange": "#E8772E",
        "p4e-orange-dark": "#D46A29",
        "p4e-grey-dark": "#333333",
        "p4e-grey-light": "#F5F5F5",
        "p4e-grey-accent": "#E0E0E0",
        "p4e-black": "#121212",
        "p4e-white": "#FFFFFF",
        "p4e-blue": "#4A90E2",
        "p4e-green": "#50E3C2",
        "p4e-purple": "#9013FE",
        "p4e-yellow": "#F8E71C",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
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
    require('@tailwindcss/forms'),
  ],
}
