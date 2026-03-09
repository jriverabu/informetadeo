/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        tadeo: {
          dark: '#3D1D11',
          brown: '#633526',
          accent: '#8B4513',
          bg: '#FDF8F3',
        }
      }
    },
  },
  plugins: [],
}
