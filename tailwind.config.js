/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Bungee': ['Bungee', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'linksbg': '#0065ff',
        'prince': '#096B68',
        'joshua': '#002342',
        'darkwhite': '#DCDCDC',
        'grey': '#D3D3D3'
      }
    },
  },
  plugins: [],
}

