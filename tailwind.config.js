/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        page: "#fafbfe",
        pageDark: "#141414",
        accent: "#e09fea",
        accentStrong: "#f093ff",
        card: "#e9e9e9",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        accent: ['"Just Me Again Down Here"', "cursive"],
        helvetica: ["Helvetica", "sans-serif"],
        helveticaLight: ['"Helvetica Light"', "sans-serif"],
        helveticaLightOblique: ['"Helvetica Light Oblique"', "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 36px rgba(37, 40, 56, 0.08)",
      },
    },
  },
  plugins: [],
};
