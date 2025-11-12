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
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
