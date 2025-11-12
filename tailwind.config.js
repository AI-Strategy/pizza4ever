/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f2590d",
        "background-light": "#f8f6f5",
        "background-dark": "#181311",
        "accent": {
          "green": "#1A4314",
          "blue": "#0077B6",
          "orange": "#d95d39",
        },
        "text-light": "#2E2E2E",
        "text-dark": "#F4F1EA",
        "card-light": "#FFFFFF",
        "card-dark": "#271f1b",
        "border-light": "#e0d9cb",
        "border-dark": "#54433b",
        "charcoal": "#36454F",
        "forest": "#2F4F4F",
        "cream": "#F5F5DC",
        "gold": "#FFD700"
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "Noto Sans", "sans-serif"],
        "body": ["Lato", "sans-serif"],
        "heading": ["Playfair Display", "serif"],
        "space": ["Space Grotesk", "sans-serif"],
        "vietnam": ["Be Vietnam Pro", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
