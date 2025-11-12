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
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
    },
  },
  plugins: [],
}
