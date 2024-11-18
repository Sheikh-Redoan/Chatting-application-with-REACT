/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        lg:'1140px'
      },
      fontFamily: {
        'sans': ["Open Sans", "sans-serif"],
        'nuni': ["Nunito", "sans-serif"],
        'pops': ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}