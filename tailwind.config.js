/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-gradient': 'linear-gradient(90.01deg, #8B1EF8 -36.74%, #D251FF 73.24%)',
      },
      colors: {
        heroColor: '#D251FF1A', // You can add more colors
      },
    },
  },
  plugins: [],
}

