/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {

    },

  },
  plugins: [],
}