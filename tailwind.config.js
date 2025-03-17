/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilita el modo oscuro basado en clases
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta esto a la estructura de tu proyecto
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}