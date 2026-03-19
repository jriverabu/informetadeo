/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chocolatier: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0c1b7',
          400: '#d3a092',
          500: '#c07e6e',
          600: '#a36355',
          700: '#8c5145',
          800: '#75453a',
          900: '#623c34',
        }
      }
    },
  },
  plugins: [],
}
