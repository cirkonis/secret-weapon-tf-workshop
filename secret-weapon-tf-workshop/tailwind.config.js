/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terraform': '#844FBA',
        computas: {
          'primary': '#0F3558',
          'secondary': '#82DEEA',
        },
      }
    },
  },
  safelist: [
    'text-yellow-400'
  ],
}
