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
        "background-dark": "#2C3E50",
        "slate": {
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          100: '#f1f5f9',
        },
        "blue": {
          400: '#60a5fa',
        },
        "green": {
          400: '#4ade80',
        }
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
