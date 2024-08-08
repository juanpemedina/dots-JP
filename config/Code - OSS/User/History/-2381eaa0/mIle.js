/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        '40': '10rem', // Ajusta la altura según sea necesario
      },
      transitionProperty: {
        'max-height': 'max-height'
      },
    },
  },  plugins: [],
}

